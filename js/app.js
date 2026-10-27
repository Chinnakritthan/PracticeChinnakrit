const SUBJECTS = window.SUBJECTS || [];
const FRONTEND_CHAPTERS = window.FRONTEND_CHAPTERS || [];
const FRONTEND_PROBLEMS = window.FRONTEND_PROBLEMS || [];

const STORAGE_KEY = 'practice_chinnakrit_progress_v1';
const THEME_KEY = 'practice_chinnakrit_theme';

const CHAPTERS_BY_SUBJECT = {
  frontend: FRONTEND_CHAPTERS
};

const PROBLEMS_BY_SUBJECT = {
  frontend: FRONTEND_PROBLEMS
};

const state = {
  currentView: 'home', // 'home' | 'subject' | 'chapter' | 'workspace'
  currentSubjectId: 'frontend',
  currentChapterId: 'ch-1',
  currentProblemId: null,
  activeEditorLang: 'js', // 'html' | 'css' | 'js'
  activeLeftTab: 'description', // 'description' | 'lesson' | 'tests' | 'solution'
  solutionRevealed: false,
  lessonCollapsed: false,
  editorDraft: { html: '', css: '', js: '' },
  progress: loadProgress(),
  filters: {
    search: '',
    difficulty: 'all', // 'all' | 'ง่าย' | 'ปานกลาง' | 'ยาก'
    status: 'all'
  }
};

// ============================================================================
// Persistence Helpers
// ============================================================================
function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
  } catch (e) {}
}

function getProblemProgress(problemId) {
  return (
    state.progress[problemId] || {
      reps: 0,
      solved: false,
      savedCode: null,
      lastSolvedAt: null
    }
  );
}

function saveProblemDraft(problemId, codeObj) {
  const existing = getProblemProgress(problemId);
  state.progress[problemId] = {
    ...existing,
    savedCode: { ...codeObj }
  };
  saveProgress();
}

function recordProblemPass(problemId, codeObj) {
  const existing = getProblemProgress(problemId);
  state.progress[problemId] = {
    ...existing,
    reps: (existing.reps || 0) + 1,
    solved: true,
    savedCode: { ...codeObj },
    lastSolvedAt: new Date().toISOString()
  };
  saveProgress();
  updateGlobalHeaderStats();
}

// ============================================================================
// DOM Elements Reference
// ============================================================================
const els = {
  brandLogo: document.getElementById('brand-logo'),
  breadcrumbNav: document.getElementById('breadcrumb-nav'),
  statSolvedCount: document.getElementById('stat-solved-count'),
  statTotalReps: document.getElementById('stat-total-reps'),
  btnThemeToggle: document.getElementById('btn-theme-toggle'),
  themeIcon: document.getElementById('theme-icon'),

  homeView: document.getElementById('home-view'),
  subjectView: document.getElementById('subject-view'),
  chapterView: document.getElementById('chapter-view'),
  workspaceView: document.getElementById('workspace-view'),

  heroSummaryBox: document.getElementById('hero-summary-box'),
  subjectsGrid: document.getElementById('subjects-grid'),

  subjectBanner: document.getElementById('subject-banner'),
  chaptersGrid: document.getElementById('chapters-grid'),

  chapterHeaderBox: document.getElementById('chapter-header-box'),
  chapterLessonSection: document.getElementById('chapter-lesson-section'),
  difficultyTabsBar: document.getElementById('difficulty-tabs-bar'),
  searchInput: document.getElementById('problem-search-input'),
  filterStatus: document.getElementById('filter-status'),
  chapterProblemsContainer: document.getElementById('chapter-problems-container'),

  btnBackToChapter: document.getElementById('btn-back-to-chapter'),
  btnPrevProblem: document.getElementById('btn-prev-problem'),
  btnNextProblem: document.getElementById('btn-next-problem'),
  wsProblemSelect: document.getElementById('ws-problem-select'),
  wsRepBadge: document.getElementById('ws-rep-badge'),
  btnResetCode: document.getElementById('btn-reset-code'),
  btnRunPreview: document.getElementById('btn-run-preview'),
  btnRunTests: document.getElementById('btn-run-tests'),

  problemDetailContent: document.getElementById('problem-detail-content'),
  workspaceLessonContent: document.getElementById('workspace-lesson-content'),
  testResultsContainer: document.getElementById('test-results-container'),
  solutionContainer: document.getElementById('solution-container'),
  testTabBadge: document.getElementById('test-tab-badge'),

  editorTabs: document.getElementById('editor-tabs'),
  codeEditor: document.getElementById('code-editor'),
  lineNumbers: document.getElementById('line-numbers'),

  livePreviewIframe: document.getElementById('live-preview-iframe'),
  btnRefreshPreview: document.getElementById('btn-refresh-preview'),
  consoleLogs: document.getElementById('console-logs'),
  consoleCount: document.getElementById('console-count'),
  btnClearConsole: document.getElementById('btn-clear-console'),
  testRunnerIframe: document.getElementById('test-runner-iframe'),

  btnHowToExtend: document.getElementById('btn-how-to-extend'),
  extendModal: document.getElementById('extend-modal'),
  btnCloseModal: document.getElementById('btn-close-modal'),
  btnExportProgress: document.getElementById('btn-export-progress'),
  btnResetAllProgress: document.getElementById('btn-reset-all-progress'),
  toastContainer: document.getElementById('toast-container')
};

// ============================================================================
// Utilities & Lookups
// ============================================================================
function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  els.toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3200);
}

function getSubjectById(subjectId) {
  return SUBJECTS.find(s => s.id === subjectId);
}

function getChaptersForSubject(subjectId) {
  return CHAPTERS_BY_SUBJECT[subjectId] || [];
}

function getChapterById(chapterId) {
  const chapters = getChaptersForSubject(state.currentSubjectId);
  return chapters.find(c => c.id === chapterId) || chapters[0] || null;
}

function getAllProblemsForSubject(subjectId) {
  return PROBLEMS_BY_SUBJECT[subjectId] || [];
}

function getProblemById(problemId) {
  for (const list of Object.values(PROBLEMS_BY_SUBJECT)) {
    const found = list.find(p => p.id === problemId);
    if (found) return found;
  }
  return null;
}

// ============================================================================
// Global Stats & Breadcrumbs
// ============================================================================
function updateGlobalHeaderStats() {
  const allProblems = FRONTEND_PROBLEMS;
  let solvedCount = 0;
  let totalReps = 0;

  allProblems.forEach(p => {
    const prog = getProblemProgress(p.id);
    if (prog.solved || prog.reps > 0) solvedCount++;
    totalReps += prog.reps || 0;
  });

  els.statSolvedCount.textContent = `${solvedCount}/${allProblems.length}`;
  els.statTotalReps.textContent = String(totalReps);
}

function renderBreadcrumb() {
  const parts = [];
  parts.push(`<button class="breadcrumb-link" data-nav="home">🏠 หน้าแรก</button>`);

  if (state.currentView !== 'home') {
    const subj = getSubjectById(state.currentSubjectId);
    if (subj) {
      parts.push(`<span>/</span>`);
      if (state.currentView === 'subject') {
        parts.push(`<span class="breadcrumb-current">${escapeHtml(subj.title)}</span>`);
      } else {
        parts.push(
          `<button class="breadcrumb-link" data-nav="subject">${escapeHtml(subj.title)}</button>`
        );
      }
    }
  }

  if (state.currentView === 'chapter' || state.currentView === 'workspace') {
    const chap = getChapterById(state.currentChapterId);
    if (chap) {
      parts.push(`<span>/</span>`);
      if (state.currentView === 'chapter') {
        parts.push(`<span class="breadcrumb-current">${escapeHtml(chap.shortTitle || chap.title)}</span>`);
      } else {
        parts.push(
          `<button class="breadcrumb-link" data-nav="chapter">${escapeHtml(chap.shortTitle || chap.title)}</button>`
        );
      }
    }
  }

  if (state.currentView === 'workspace') {
    const prob = getProblemById(state.currentProblemId);
    if (prob) {
      parts.push(`<span>/</span>`);
      parts.push(
        `<span class="breadcrumb-current">ข้อที่ ${prob.number} (${escapeHtml(prob.difficulty)})</span>`
      );
    }
  }

  els.breadcrumbNav.innerHTML = parts.join('');
  els.breadcrumbNav.querySelectorAll('[data-nav]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-nav');
      if (target === 'home') navigateToHome();
      if (target === 'subject') navigateToSubject(state.currentSubjectId);
      if (target === 'chapter') navigateToChapter(state.currentChapterId);
    });
  });
}

// ============================================================================
// VIEW 1: Home View (Subject Blocks)
// ============================================================================
function renderHomeView() {
  updateGlobalHeaderStats();

  const totalProblems = FRONTEND_PROBLEMS.length;
  let solvedCount = 0;
  let totalReps = 0;
  FRONTEND_PROBLEMS.forEach(p => {
    const prog = getProblemProgress(p.id);
    if (prog.solved || prog.reps > 0) solvedCount++;
    totalReps += prog.reps || 0;
  });
  const pct = totalProblems > 0 ? Math.round((solvedCount / totalProblems) * 100) : 0;

  els.heroSummaryBox.innerHTML = `
    <div class="summary-metric">
      <div class="metric-val">${solvedCount} / ${totalProblems}</div>
      <div class="metric-label">โจทย์ที่ทำผ่านแล้ว (${pct}%)</div>
    </div>
    <div class="summary-metric">
      <div class="metric-val">${totalReps} รอบ</div>
      <div class="metric-label">จำนวนรอบที่ฝึกซ้ำทั้งหมด</div>
    </div>
    <div class="summary-metric">
      <div class="metric-val">${FRONTEND_CHAPTERS.length} บทเรียน</div>
      <div class="metric-label">เนื้อหา + ตัวอย่าง + โจทย์</div>
    </div>
    <div class="summary-metric">
      <div class="metric-val">35 ข้อ/บท</div>
      <div class="metric-label">ง่าย 20 • ปานกลาง 10 • ยาก 5</div>
    </div>
  `;

  els.subjectsGrid.innerHTML = SUBJECTS.map(subj => {
    const problems = getAllProblemsForSubject(subj.id);
    const total = problems.length;
    const solved = problems.filter(p => getProblemProgress(p.id).solved).length;
    const progressPct = total > 0 ? Math.round((solved / total) * 100) : 0;
    const isAvailable = subj.status === 'available';

    return `
      <article class="subject-card ${isAvailable ? 'available' : 'coming-soon'}" data-subject-id="${subj.id}">
        <div>
          <div class="subject-card-top">
            <div class="subject-icon">${subj.icon}</div>
            <span class="subject-status-badge ${isAvailable ? 'ready' : 'upcoming'}">
              ${escapeHtml(subj.badgeText)}
            </span>
          </div>
          <h3>${escapeHtml(subj.title)}</h3>
          <p>${escapeHtml(subj.description)}</p>
          <div class="subject-tags">
            ${subj.tags.map(t => `<span class="tag-chip">${escapeHtml(t)}</span>`).join('')}
          </div>
        </div>

        <div class="subject-progress-wrap">
          ${
            isAvailable
              ? `
            <div class="progress-meta">
              <span>ความคืบหน้ารวมทุกบท</span>
              <strong>${solved}/${total} โจทย์ (${progressPct}%)</strong>
            </div>
            <div class="progress-bar-bg">
              <div class="progress-bar-fill" style="width: ${progressPct}%"></div>
            </div>
            <button class="subject-enter-btn">เลือกบทเรียนและเริ่มฝึกทำโจทย์ →</button>
          `
              : `
            <button class="subject-enter-btn disabled" disabled>
              🔒 เตรียมเปิดใช้งานในอนาคต
            </button>
          `
          }
        </div>
      </article>
    `;
  }).join('');

  els.subjectsGrid.querySelectorAll('.subject-card.available').forEach(card => {
    card.addEventListener('click', () => {
      const subjectId = card.getAttribute('data-subject-id');
      navigateToSubject(subjectId);
    });
  });
}

// ============================================================================
// VIEW 2: Subject Chapters Overview (แยกเป็นบทๆ)
// ============================================================================
function renderSubjectView() {
  const subject = getSubjectById(state.currentSubjectId);
  if (!subject) return;

  const problems = getAllProblemsForSubject(subject.id);
  const solvedCount = problems.filter(p => getProblemProgress(p.id).solved).length;
  const totalReps = problems.reduce((acc, p) => acc + (getProblemProgress(p.id).reps || 0), 0);

  els.subjectBanner.innerHTML = `
    <div class="subject-banner-info">
      <h1>${subject.icon} ${escapeHtml(subject.title)}</h1>
      <p>${escapeHtml(subject.description)}</p>
    </div>
    <div style="display:flex; gap:10px; flex-wrap:wrap;">
      <div class="stat-pill">📚 ทั้งหมด: <strong>${FRONTEND_CHAPTERS.length} บทเรียน (${problems.length} ข้อ)</strong></div>
      <div class="stat-pill">✅ ผ่านแล้ว: <strong>${solvedCount}/${problems.length}</strong></div>
      <div class="stat-pill">🔄 ฝึกซ้ำรวม: <strong>${totalReps} รอบ</strong></div>
    </div>
  `;

  const chapters = getChaptersForSubject(subject.id);
  els.chaptersGrid.innerHTML = chapters
    .map(ch => {
      const chProblems = ch.problems || [];
      const easyTotal = chProblems.filter(p => p.difficulty === 'ง่าย').length;
      const easySolved = chProblems.filter(p => p.difficulty === 'ง่าย' && getProblemProgress(p.id).solved).length;

      const medTotal = chProblems.filter(p => p.difficulty === 'ปานกลาง').length;
      const medSolved = chProblems.filter(p => p.difficulty === 'ปานกลาง' && getProblemProgress(p.id).solved).length;

      const hardTotal = chProblems.filter(p => p.difficulty === 'ยาก').length;
      const hardSolved = chProblems.filter(p => p.difficulty === 'ยาก' && getProblemProgress(p.id).solved).length;

      const totalSolved = easySolved + medSolved + hardSolved;
      const pct = chProblems.length > 0 ? Math.round((totalSolved / chProblems.length) * 100) : 0;

      return `
        <article class="chapter-card" data-chapter-id="${ch.id}">
          <div>
            <div class="subject-card-top">
              <div class="subject-icon">${ch.icon || '📘'}</div>
              <span class="subject-status-badge ready">35 โจทย์ + เนื้อหา</span>
            </div>
            <h3>${escapeHtml(ch.title)}</h3>
            <p>${escapeHtml(ch.description)}</p>
            <div class="subject-tags">
              ${(ch.tags || []).map(t => `<span class="tag-chip">${escapeHtml(t)}</span>`).join('')}
            </div>

            <div class="chapter-diff-pills">
              <div class="chapter-diff-pill">
                <span class="diff-badge diff-ง่าย">🌱 ง่าย</span>
                <strong>${easySolved} / ${easyTotal} ข้อ</strong>
              </div>
              <div class="chapter-diff-pill">
                <span class="diff-badge diff-ปานกลาง">⚡ ปานกลาง</span>
                <strong>${medSolved} / ${medTotal} ข้อ</strong>
              </div>
              <div class="chapter-diff-pill">
                <span class="diff-badge diff-ยาก">🔥 ยาก</span>
                <strong>${hardSolved} / ${hardTotal} ข้อ</strong>
              </div>
            </div>
          </div>

          <div class="subject-progress-wrap">
            <div class="progress-meta">
              <span>ความคืบหน้าบทที่ ${ch.number}</span>
              <strong>${totalSolved}/${chProblems.length} ข้อ (${pct}%)</strong>
            </div>
            <div class="progress-bar-bg">
              <div class="progress-bar-fill" style="width: ${pct}%"></div>
            </div>
            <button class="subject-enter-btn">📖 เข้าเรียนเนื้อหา &amp; ฝึกทำโจทย์บทที่ ${ch.number} →</button>
          </div>
        </article>
      `;
    })
    .join('');

  els.chaptersGrid.querySelectorAll('.chapter-card').forEach(card => {
    card.addEventListener('click', () => {
      const chId = card.getAttribute('data-chapter-id');
      navigateToChapter(chId);
    });
  });
}

// ============================================================================
// VIEW 3: Chapter Lesson Content + 35 Problems View
// ============================================================================
function buildLessonMarkup(chapter) {
  const lesson = chapter.lesson;
  if (!lesson) return '';

  return `
    <div class="lesson-overview-box">
      <strong>💡 ภาพรวมเนื้อหาบทนี้:</strong> ${escapeHtml(lesson.overview)}
    </div>

    <div class="lesson-sub-heading">🛠️ คำสั่งและเครื่องมือที่ต้องใช้ในบทนี้ (Syntax &amp; Tools)</div>
    <div class="syntax-grid">
      ${(lesson.mustUse || [])
        .map(
          item => `
        <div class="syntax-card">
          <div class="syntax-card-title">${escapeHtml(item.syntax)}</div>
          <div class="syntax-card-desc">${escapeHtml(item.usage)}</div>
          <pre class="syntax-card-code"><code>${escapeHtml(item.example)}</code></pre>
        </div>
      `
        )
        .join('')}
    </div>

    <div class="lesson-sub-heading">💻 ตัวอย่างโค้ดพร้อมคำอธิบาย (Code Examples)</div>
    <div class="examples-grid">
      ${(lesson.examples || [])
        .map(
          ex => `
        <div class="example-card">
          <h4>${escapeHtml(ex.title)}</h4>
          <p>${escapeHtml(ex.explanation)}</p>
          <pre class="syntax-card-code"><code>${escapeHtml(ex.code)}</code></pre>
        </div>
      `
        )
        .join('')}
    </div>
  `;
}

function renderChapterView() {
  const chapter = getChapterById(state.currentChapterId);
  if (!chapter) return;

  const chProblems = chapter.problems || [];
  const solvedCount = chProblems.filter(p => getProblemProgress(p.id).solved).length;
  const totalReps = chProblems.reduce((acc, p) => acc + (getProblemProgress(p.id).reps || 0), 0);

  els.chapterHeaderBox.innerHTML = `
    <div class="subject-banner-info">
      <div style="margin-bottom:8px;">
        <button id="btn-back-to-chapters" class="ws-btn secondary">← กลับหน้าเลือกบทเรียน</button>
      </div>
      <h1>${chapter.icon || '📘'} ${escapeHtml(chapter.title)}</h1>
      <p>${escapeHtml(chapter.description)}</p>
    </div>
    <div style="display:flex; gap:10px; flex-wrap:wrap;">
      <div class="stat-pill">✅ ผ่านแล้ว: <strong>${solvedCount}/${chProblems.length} ข้อ</strong></div>
      <div class="stat-pill">🔄 ฝึกซ้ำบทนี้: <strong>${totalReps} รอบ</strong></div>
    </div>
  `;

  document.getElementById('btn-back-to-chapters').addEventListener('click', () => {
    navigateToSubject(state.currentSubjectId);
  });

  // Render Lesson Box
  els.chapterLessonSection.innerHTML = `
    <div class="lesson-header-bar" id="lesson-toggle-bar">
      <h2>📚 สรุปเนื้อหา คำสั่งที่ต้องใช้ และตัวอย่างโค้ดประจำบทที่ ${chapter.number}</h2>
      <span class="ws-btn secondary" id="lesson-toggle-label">
        ${state.lessonCollapsed ? '▼ กางดูเนื้อหาบทเรียน' : '▲ พับเก็บเนื้อหา'}
      </span>
    </div>
    <div class="lesson-body ${state.lessonCollapsed ? 'collapsed' : ''}" id="lesson-body-content">
      ${buildLessonMarkup(chapter)}
    </div>
  `;

  document.getElementById('lesson-toggle-bar').addEventListener('click', () => {
    state.lessonCollapsed = !state.lessonCollapsed;
    document
      .getElementById('lesson-body-content')
      .classList.toggle('collapsed', state.lessonCollapsed);
    document.getElementById('lesson-toggle-label').textContent = state.lessonCollapsed
      ? '▼ กางดูเนื้อหาบทเรียน'
      : '▲ พับเก็บเนื้อหา';
  });

  // Sync difficulty tabs
  els.difficultyTabsBar.querySelectorAll('.diff-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-diff') === state.filters.difficulty);
  });

  renderChapterProblemsList();
}

function renderChapterProblemsList() {
  const chapter = getChapterById(state.currentChapterId);
  if (!chapter) return;

  const chProblems = chapter.problems || [];
  const { search, difficulty, status } = state.filters;
  const q = search.trim().toLowerCase();

  const groups = [
    { key: 'ง่าย', title: '🌱 ระดับง่าย (20 ข้อ) — ฝึกพื้นฐานและคำสั่งหลักให้แม่นยำ', desc: 'ข้อที่ 1 – 20' },
    { key: 'ปานกลาง', title: '⚡ ระดับปานกลาง (10 ข้อ) — ประยุกต์ใช้หลายคำสั่งร่วมกัน', desc: 'ข้อที่ 21 – 30' },
    { key: 'ยาก', title: '🔥 ระดับยาก (5 ข้อ) — โจทย์ท้าทายและสร้างระบบใช้งานจริง', desc: 'ข้อที่ 31 – 35' }
  ];

  const htmlBlocks = groups
    .filter(g => difficulty === 'all' || g.key === difficulty)
    .map(g => {
      const groupProblems = chProblems.filter(p => p.difficulty === g.key);
      const filtered = groupProblems.filter(p => {
        const prog = getProblemProgress(p.id);
        if (status === 'solved' && !prog.solved) return false;
        if (status === 'unsolved' && prog.solved) return false;
        if (q) {
          const matchTitle = p.title.toLowerCase().includes(q);
          const matchTags = (p.tags || []).some(t => t.toLowerCase().includes(q));
          const matchDesc = p.description.toLowerCase().includes(q);
          if (!matchTitle && !matchTags && !matchDesc) return false;
        }
        return true;
      });

      if (filtered.length === 0) return '';

      const groupSolved = groupProblems.filter(p => getProblemProgress(p.id).solved).length;

      return `
        <div class="module-block">
          <div class="module-header">
            <div class="module-title-wrap">
              <h3>${g.title}</h3>
              <p>${g.desc}</p>
            </div>
            <span class="module-progress-pill">
              ผ่านแล้ว ${groupSolved} / ${groupProblems.length} ข้อ
            </span>
          </div>
          <div class="problems-list">
            ${filtered
              .map(prob => {
                const prog = getProblemProgress(prob.id);
                const isSolved = prog.solved;
                const reps = prog.reps || 0;
                return `
                  <div class="problem-row" data-problem-id="${prob.id}">
                    <div class="problem-row-left">
                      <div class="problem-status-icon ${isSolved ? 'solved' : 'unsolved'}">
                        ${isSolved ? '✓' : prob.number}
                      </div>
                      <div class="problem-info">
                        <h4>ข้อที่ ${prob.number}: ${escapeHtml(prob.title)}</h4>
                        <div class="problem-meta">
                          <span class="diff-badge diff-${prob.difficulty}">${escapeHtml(prob.difficulty)}</span>
                          ${(prob.tags || []).map(t => `<span class="tag-chip">${escapeHtml(t)}</span>`).join('')}
                        </div>
                      </div>
                    </div>
                    <div class="problem-row-right">
                      <span class="rep-count-pill ${reps > 0 ? 'has-reps' : ''}">
                        🔄 ผ่านแล้ว ${reps} รอบ
                      </span>
                      <button class="start-problem-btn">
                        ${reps > 0 ? 'ฝึกทำซ้ำ →' : 'เริ่มทำโจทย์ →'}
                      </button>
                    </div>
                  </div>
                `;
              })
              .join('')}
          </div>
        </div>
      `;
    })
    .filter(Boolean);

  if (htmlBlocks.length === 0) {
    els.chapterProblemsContainer.innerHTML = `
      <div class="module-block" style="padding: 36px; text-align: center; color: var(--text-secondary);">
        ไม่พบโจทย์ที่ตรงกับตัวกรองของคุณ
      </div>
    `;
    return;
  }

  els.chapterProblemsContainer.innerHTML = htmlBlocks.join('');
  els.chapterProblemsContainer.querySelectorAll('.problem-row').forEach(row => {
    row.addEventListener('click', () => {
      const probId = row.getAttribute('data-problem-id');
      navigateToWorkspace(probId);
    });
  });
}

// ============================================================================
// VIEW 4: Workspace IDE View
// ============================================================================
function loadProblemIntoWorkspace(problemId) {
  const problem = getProblemById(problemId);
  if (!problem) return;

  state.currentProblemId = problem.id;
  if (problem.chapterId) {
    state.currentChapterId = problem.chapterId;
  }
  state.solutionRevealed = false;

  const prog = getProblemProgress(problem.id);
  state.editorDraft = prog.savedCode
    ? { ...prog.savedCode }
    : { ...problem.starterCode };

  const chapter = getChapterById(state.currentChapterId);
  const chapterProblems = chapter ? chapter.problems : FRONTEND_PROBLEMS;

  els.wsProblemSelect.innerHTML = chapterProblems
    .map(p => {
      const pProg = getProblemProgress(p.id);
      const check = pProg.solved ? '✓ ' : '';
      return `<option value="${p.id}" ${p.id === problem.id ? 'selected' : ''}>
        ${check}[${p.difficulty}] ข้อที่ ${p.number}: ${escapeHtml(p.title)}
      </option>`;
    })
    .join('');

  const idx = chapterProblems.findIndex(p => p.id === problem.id);
  els.btnPrevProblem.disabled = idx <= 0;
  els.btnNextProblem.disabled = idx >= chapterProblems.length - 1;

  updateWorkspaceRepBadge();
  renderProblemDescriptionPane(problem);
  renderWorkspaceLessonPane(chapter);
  renderInitialTestCasesPane(problem);
  renderSolutionPane(problem);

  switchLeftPaneTab('description');
  switchEditorTab(problem.defaultTab || 'js');
  runLivePreview();
}

function updateWorkspaceRepBadge() {
  const prog = getProblemProgress(state.currentProblemId);
  els.wsRepBadge.textContent = `🔄 ผ่านแล้ว ${prog.reps || 0} รอบ`;
}

function renderWorkspaceLessonPane(chapter) {
  if (!chapter) return;
  els.workspaceLessonContent.innerHTML = `
    <h3 style="margin-bottom:12px;">${chapter.icon || '📘'} ${escapeHtml(chapter.title)}</h3>
    ${buildLessonMarkup(chapter)}
  `;
}

function renderProblemDescriptionPane(problem) {
  els.problemDetailContent.innerHTML = `
    <h2>ข้อที่ ${problem.number}: ${escapeHtml(problem.title)}</h2>
    <div class="problem-detail-meta">
      <span class="diff-badge diff-${problem.difficulty}">ระดับ: ${escapeHtml(problem.difficulty)}</span>
      ${(problem.tags || []).map(t => `<span class="tag-chip">${escapeHtml(t)}</span>`).join('')}
    </div>

    <div class="problem-desc-box">
      ${problem.description}
    </div>

    <div class="req-section">
      <h4>🎯 สิ่งที่โจทย์ต้องการ (Requirements)</h4>
      <ul class="req-list">
        ${problem.requirements.map(r => `<li>${r}</li>`).join('')}
      </ul>
    </div>

    <div class="hints-section">
      <h4>💡 คำใบ้ทีละขั้น (คลิกเพื่อดูเมื่อติดขัด)</h4>
      ${problem.hints
        .map(
          (hint, i) => `
        <div class="hint-card">
          <button class="hint-toggle-btn" type="button">
            <span>คำใบ้ที่ ${i + 1}</span>
            <span>▼</span>
          </button>
          <div class="hint-body">${escapeHtml(hint)}</div>
        </div>
      `
        )
        .join('')}
    </div>
  `;

  els.problemDetailContent.querySelectorAll('.hint-card').forEach(card => {
    card.querySelector('.hint-toggle-btn').addEventListener('click', () => {
      card.classList.toggle('open');
    });
  });
}

function renderInitialTestCasesPane(problem) {
  els.testTabBadge.textContent = `${problem.testCases.length}`;
  els.testTabBadge.className = 'tab-badge';

  els.testResultsContainer.innerHTML = `
    <div style="margin-bottom: 14px; color: var(--text-secondary); font-size: 0.88rem;">
      โจทย์ข้อนี้มีชุดทดสอบทั้งหมด <strong>${problem.testCases.length} ข้อ</strong> กดปุ่ม <strong>"✓ ส่งตรวจคำตอบ (Run Tests)"</strong> ด้านบนเพื่อตรวจโค้ดของคุณ
    </div>
    ${problem.testCases
      .map(
        (tc, i) => `
      <div class="test-case-card">
        <div class="test-case-header">
          <span>⏳ Test Case #${i + 1}: ${escapeHtml(tc.name)}</span>
        </div>
      </div>
    `
      )
      .join('')}
  `;
}

function renderSolutionPane(problem) {
  if (!state.solutionRevealed) {
    els.solutionContainer.innerHTML = `
      <div class="solution-warning-box">
        <h3 style="margin-bottom: 8px;">🔒 เฉลยถูกซ่อนไว้</h3>
        <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 16px;">
          แนะนำให้ลองเปิดดู <strong>📘 เนื้อหาบทนี้</strong> หรือ <strong>คำใบ้ (Hints)</strong> ก่อนนะครับ หากยังติดขัดสามารถกดดูเฉลยด้านล่างได้เลย
        </p>
        <button id="btn-reveal-solution" class="ws-btn secondary">
          👁 แสดงโค้ดเฉลย (Reveal Solution)
        </button>
      </div>
    `;
    document.getElementById('btn-reveal-solution').addEventListener('click', () => {
      state.solutionRevealed = true;
      renderSolutionPane(problem);
    });
    return;
  }

  els.solutionContainer.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 14px;">
      <h3 style="font-size: 1rem;">✅ โค้ดเฉลยตัวอย่าง</h3>
      <button id="btn-apply-solution" class="ws-btn secondary">
        📋 นำเฉลยไปใส่ใน Editor
      </button>
    </div>

    <div class="solution-code-block">
      <h4>script.js</h4>
      <pre class="solution-pre"><code>${escapeHtml(problem.solution.js)}</code></pre>
    </div>

    <div class="solution-code-block">
      <h4>index.html</h4>
      <pre class="solution-pre"><code>${escapeHtml(problem.solution.html)}</code></pre>
    </div>
  `;

  document.getElementById('btn-apply-solution').addEventListener('click', () => {
    state.editorDraft = { ...problem.solution };
    saveProblemDraft(problem.id, state.editorDraft);
    els.codeEditor.value = state.editorDraft[state.activeEditorLang];
    updateLineNumbers();
    runLivePreview();
    showToast('นำโค้ดเฉลยมาใส่ใน Editor เรียบร้อยแล้ว', 'info');
  });
}

// ============================================================================
// Editor Tabs & Line Numbers
// ============================================================================
function switchEditorTab(lang) {
  state.activeEditorLang = lang;
  els.editorTabs.querySelectorAll('.editor-tab').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-editor-lang') === lang);
  });
  els.codeEditor.value = state.editorDraft[lang] || '';
  updateLineNumbers();
}

function updateLineNumbers() {
  const lines = (els.codeEditor.value || '').split('\n').length;
  const nums = [];
  for (let i = 1; i <= lines; i++) {
    nums.push(i);
  }
  els.lineNumbers.innerHTML = nums.join('<br/>');
}

function switchLeftPaneTab(tabName) {
  state.activeLeftTab = tabName;
  document.querySelectorAll('[data-left-tab]').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-left-tab') === tabName);
  });
  document.getElementById('left-tab-description').classList.toggle('active', tabName === 'description');
  document.getElementById('left-tab-lesson').classList.toggle('active', tabName === 'lesson');
  document.getElementById('left-tab-tests').classList.toggle('active', tabName === 'tests');
  document.getElementById('left-tab-solution').classList.toggle('active', tabName === 'solution');
}

// ============================================================================
// Live Web Preview & Console Capture
// ============================================================================
let consoleEntries = [];

function clearConsolePanel() {
  consoleEntries = [];
  els.consoleCount.textContent = '0';
  els.consoleLogs.innerHTML = `<div class="console-empty">ผลลัพธ์จาก console.log() หรือแจ้งเตือน Error จะแสดงที่นี่</div>`;
}

function appendConsoleLog(level, args) {
  if (consoleEntries.length === 0) {
    els.consoleLogs.innerHTML = '';
  }
  const text = args
    .map(a => {
      if (typeof a === 'object' && a !== null) {
        try {
          return JSON.stringify(a);
        } catch {
          return String(a);
        }
      }
      return String(a);
    })
    .join(' ');

  consoleEntries.push({ level, text });
  els.consoleCount.textContent = String(consoleEntries.length);

  const div = document.createElement('div');
  div.className = `console-item ${level}`;
  const prefix = level === 'error' ? '❌ ' : level === 'warn' ? '⚠️ ' : '› ';
  div.textContent = prefix + text;
  els.consoleLogs.appendChild(div);
  els.consoleLogs.scrollTop = els.consoleLogs.scrollHeight;
}

function buildIframeDocumentHtml({ html, css, js }, captureConsole = false) {
  const consoleHook = captureConsole
    ? `
    <script>
      (function() {
        const send = (level, args) => {
          try {
            window.parent.__practiceConsoleHook(level, Array.from(args));
          } catch (e) {}
        };
        const origLog = console.log;
        const origWarn = console.warn;
        const origErr = console.error;
        console.log = function() { send('log', arguments); origLog.apply(console, arguments); };
        console.warn = function() { send('warn', arguments); origWarn.apply(console, arguments); };
        console.error = function() { send('error', arguments); origErr.apply(console, arguments); };
        window.onerror = function(msg, url, line) {
          send('error', [msg + (line ? ' (บรรทัดที่ ' + line + ')' : '')]);
        };
      })();
    <\/script>
  `
    : '';

  return `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8" />
  <style>${css || ''}</style>
  ${consoleHook}
</head>
<body>
  ${html || ''}
  <script>
    try {
      ${js || ''}
    } catch (err) {
      console.error(err && err.message ? err.message : String(err));
    }
  <\/script>
</body>
</html>`;
}

window.__practiceConsoleHook = (level, args) => {
  appendConsoleLog(level, args);
};

function runLivePreview() {
  clearConsolePanel();
  const docHtml = buildIframeDocumentHtml(state.editorDraft, true);
  const iframe = els.livePreviewIframe;
  const doc = iframe.contentDocument || iframe.contentWindow.document;
  doc.open();
  doc.write(docHtml);
  doc.close();
}

// ============================================================================
// Automated Test Case Runner
// ============================================================================
function loadSandboxForSingleTest(codeObj) {
  return new Promise(resolve => {
    const iframe = els.testRunnerIframe;
    const htmlContent = buildIframeDocumentHtml(codeObj, false);

    const handleLoad = () => {
      iframe.removeEventListener('load', handleLoad);
      resolve({
        win: iframe.contentWindow,
        doc: iframe.contentDocument || iframe.contentWindow.document
      });
    };

    iframe.addEventListener('load', handleLoad);
    const doc = iframe.contentDocument || iframe.contentWindow.document;
    doc.open();
    doc.write(htmlContent);
    doc.close();
  });
}

async function runAllTestCases() {
  const problem = getProblemById(state.currentProblemId);
  if (!problem) return;

  runLivePreview();
  switchLeftPaneTab('tests');

  const results = [];
  for (const tc of problem.testCases) {
    try {
      const { win, doc } = await loadSandboxForSingleTest(state.editorDraft);
      const outcome = await tc.run({
        win,
        doc,
        html: state.editorDraft.html,
        css: state.editorDraft.css,
        js: state.editorDraft.js
      });
      results.push({
        name: tc.name,
        passed: Boolean(outcome && outcome.passed),
        expected: outcome?.expected,
        actual: outcome?.actual
      });
    } catch (err) {
      results.push({
        name: tc.name,
        passed: false,
        expected: 'ทำงานได้โดยไม่มี Error',
        actual: `Error: ${err && err.message ? err.message : String(err)}`
      });
    }
  }

  const passedCount = results.filter(r => r.passed).length;
  const totalCount = results.length;
  const allPassed = passedCount === totalCount;

  els.testTabBadge.textContent = `${passedCount}/${totalCount}`;
  els.testTabBadge.className = `tab-badge ${allPassed ? 'pass' : 'fail'}`;

  if (allPassed) {
    recordProblemPass(problem.id, state.editorDraft);
    updateWorkspaceRepBadge();
    showToast(`🎉 ยินดีด้วย! ผ่านครบ ${totalCount}/${totalCount} Test Cases`, 'success');
  }

  const prog = getProblemProgress(problem.id);

  els.testResultsContainer.innerHTML = `
    <div class="test-summary-banner ${allPassed ? 'all-passed' : 'some-failed'}">
      <h3>
        ${
          allPassed
            ? `🎉 ผ่านครบทุกข้อ! (${passedCount}/${totalCount} Test Cases)`
            : `⚠️ ผ่าน ${passedCount}/${totalCount} Test Cases — ลองตรวจสอบจุดที่ยังไม่ผ่านด้านล่าง`
        }
      </h3>
      <p style="font-size: 0.85rem; color: var(--text-secondary);">
        ${
          allPassed
            ? `คุณทำโจทย์ข้อนี้ผ่านแล้วทั้งหมด <strong>${prog.reps} รอบ</strong> สามารถกดรีเซ็ตเพื่อฝึกทำซ้ำให้คล่องมือ หรือไปข้อถัดไปได้เลย!`
            : `ดูค่าที่คาดหวัง (Expected) เทียบกับค่าที่ได้จริง (Actual) เพื่อปรับแก้โค้ดของคุณ`
        }
      </p>
      ${
        allPassed
          ? `
        <div class="test-summary-actions">
          <button id="btn-banner-practice-again" class="ws-btn secondary">
            ↺ ล้างโค้ดเพื่อฝึกซ้ำอีกรอบ
          </button>
          <button id="btn-banner-next-problem" class="ws-btn primary">
            ไปโจทย์ข้อถัดไป →
          </button>
        </div>
      `
          : ''
      }
    </div>

    ${results
      .map(
        (res, idx) => `
      <div class="test-case-card ${res.passed ? 'pass' : 'fail'}">
        <div class="test-case-header">
          <span>${res.passed ? '✅' : '❌'} Test #${idx + 1}: ${escapeHtml(res.name)}</span>
          <span>${res.passed ? 'PASS' : 'FAIL'}</span>
        </div>
        <div class="test-diff-box">
          <div class="test-diff-row"><strong>ค่าที่ต้องการ (Expected):</strong> ${escapeHtml(res.expected)}</div>
          <div class="test-diff-row"><strong>ค่าที่ได้จริง (Actual):</strong> ${escapeHtml(res.actual)}</div>
        </div>
      </div>
    `
      )
      .join('')}
  `;

  const btnAgain = document.getElementById('btn-banner-practice-again');
  if (btnAgain) {
    btnAgain.addEventListener('click', () => {
      resetCurrentProblemCode();
    });
  }

  const btnNext = document.getElementById('btn-banner-next-problem');
  if (btnNext) {
    btnNext.addEventListener('click', () => {
      goToAdjacentProblem(1);
    });
  }
}

function resetCurrentProblemCode() {
  const problem = getProblemById(state.currentProblemId);
  if (!problem) return;

  state.editorDraft = { ...problem.starterCode };
  saveProblemDraft(problem.id, state.editorDraft);
  els.codeEditor.value = state.editorDraft[state.activeEditorLang];
  updateLineNumbers();
  renderInitialTestCasesPane(problem);
  switchLeftPaneTab('description');
  runLivePreview();
  showToast('รีเซ็ตโค้ดเริ่มต้นแล้ว พร้อมฝึกทำซ้ำรอบใหม่ได้เลย!', 'info');
}

function goToAdjacentProblem(direction) {
  const chapter = getChapterById(state.currentChapterId);
  const list = chapter ? chapter.problems : FRONTEND_PROBLEMS;
  const idx = list.findIndex(p => p.id === state.currentProblemId);
  const nextIdx = idx + direction;
  if (nextIdx >= 0 && nextIdx < list.length) {
    navigateToWorkspace(list[nextIdx].id);
  } else {
    navigateToChapter(state.currentChapterId);
  }
}

// ============================================================================
// Navigation Controller
// ============================================================================
function setView(viewName) {
  state.currentView = viewName;
  els.homeView.classList.toggle('active', viewName === 'home');
  els.subjectView.classList.toggle('active', viewName === 'subject');
  els.chapterView.classList.toggle('active', viewName === 'chapter');
  els.workspaceView.classList.toggle('active', viewName === 'workspace');
  renderBreadcrumb();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function navigateToHome() {
  renderHomeView();
  setView('home');
}

function navigateToSubject(subjectId) {
  state.currentSubjectId = subjectId;
  renderSubjectView();
  setView('subject');
}

function navigateToChapter(chapterId) {
  state.currentChapterId = chapterId;
  state.filters.difficulty = 'all';
  state.filters.search = '';
  els.searchInput.value = '';
  renderChapterView();
  setView('chapter');
}

function navigateToWorkspace(problemId) {
  loadProblemIntoWorkspace(problemId);
  setView('workspace');
}

// ============================================================================
// Event Listeners & Initialization
// ============================================================================
function initTheme() {
  const saved = localStorage.getItem(THEME_KEY) || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  els.themeIcon.textContent = saved === 'dark' ? '☀️' : '🌙';

  els.btnThemeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(THEME_KEY, next);
    els.themeIcon.textContent = next === 'dark' ? '☀️' : '🌙';
  });
}

function initEventListeners() {
  els.brandLogo.addEventListener('click', () => navigateToHome());

  // Chapter View Difficulty Tabs & Filters
  els.difficultyTabsBar.querySelectorAll('.diff-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.filters.difficulty = btn.getAttribute('data-diff');
      els.difficultyTabsBar.querySelectorAll('.diff-tab-btn').forEach(b => {
        b.classList.toggle('active', b === btn);
      });
      renderChapterProblemsList();
    });
  });

  els.searchInput.addEventListener('input', e => {
    state.filters.search = e.target.value;
    renderChapterProblemsList();
  });

  els.filterStatus.addEventListener('change', e => {
    state.filters.status = e.target.value;
    renderChapterProblemsList();
  });

  // Workspace Controls
  els.btnBackToChapter.addEventListener('click', () => {
    navigateToChapter(state.currentChapterId);
  });

  els.btnPrevProblem.addEventListener('click', () => goToAdjacentProblem(-1));
  els.btnNextProblem.addEventListener('click', () => goToAdjacentProblem(1));

  els.wsProblemSelect.addEventListener('change', e => {
    navigateToWorkspace(e.target.value);
  });

  els.btnResetCode.addEventListener('click', () => {
    resetCurrentProblemCode();
  });

  els.btnRunPreview.addEventListener('click', () => {
    runLivePreview();
    showToast('อัปเดตหน้าเว็บ Live Preview แล้ว', 'info');
  });

  els.btnRefreshPreview.addEventListener('click', () => {
    runLivePreview();
  });

  els.btnClearConsole.addEventListener('click', () => {
    clearConsolePanel();
  });

  els.btnRunTests.addEventListener('click', () => {
    runAllTestCases();
  });

  // Left Pane Sub-tabs
  document.querySelectorAll('[data-left-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      switchLeftPaneTab(btn.getAttribute('data-left-tab'));
    });
  });

  // Editor Language Tabs
  els.editorTabs.querySelectorAll('.editor-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      switchEditorTab(btn.getAttribute('data-editor-lang'));
    });
  });

  // Code Editor typing & shortcuts
  let previewDebounce = null;
  els.codeEditor.addEventListener('input', () => {
    state.editorDraft[state.activeEditorLang] = els.codeEditor.value;
    if (state.currentProblemId) {
      saveProblemDraft(state.currentProblemId, state.editorDraft);
    }
    updateLineNumbers();

    clearTimeout(previewDebounce);
    previewDebounce = setTimeout(() => {
      runLivePreview();
    }, 500);
  });

  els.codeEditor.addEventListener('scroll', () => {
    els.lineNumbers.scrollTop = els.codeEditor.scrollTop;
  });

  els.codeEditor.addEventListener('keydown', e => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = els.codeEditor.selectionStart;
      const end = els.codeEditor.selectionEnd;
      const val = els.codeEditor.value;
      els.codeEditor.value = val.substring(0, start) + '  ' + val.substring(end);
      els.codeEditor.selectionStart = els.codeEditor.selectionEnd = start + 2;
      state.editorDraft[state.activeEditorLang] = els.codeEditor.value;
      updateLineNumbers();
    }
  });

  window.addEventListener('keydown', e => {
    if (state.currentView !== 'workspace') return;
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      e.preventDefault();
      runAllTestCases();
    } else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 's') {
      e.preventDefault();
      runLivePreview();
      showToast('บันทึกโค้ดและรัน Live Preview แล้ว', 'info');
    }
  });

  // Modal Controls
  els.btnHowToExtend.addEventListener('click', () => {
    els.extendModal.classList.remove('hidden');
  });

  els.btnCloseModal.addEventListener('click', () => {
    els.extendModal.classList.add('hidden');
  });

  els.extendModal.addEventListener('click', e => {
    if (e.target === els.extendModal) {
      els.extendModal.classList.add('hidden');
    }
  });

  els.btnExportProgress.addEventListener('click', () => {
    const dataStr =
      'data:text/json;charset=utf-8,' +
      encodeURIComponent(JSON.stringify(state.progress, null, 2));
    const a = document.createElement('a');
    a.setAttribute('href', dataStr);
    a.setAttribute('download', 'practice-chinnakrit-progress.json');
    document.body.appendChild(a);
    a.click();
    a.remove();
    showToast('ส่งออกไฟล์ประวัติการฝึกเรียบร้อยแล้ว', 'success');
  });

  els.btnResetAllProgress.addEventListener('click', () => {
    if (confirm('คุณต้องการล้างสถิติจำนวนรอบที่ฝึกทั้งหมดกลับเป็น 0 ใช่หรือไม่?')) {
      state.progress = {};
      saveProgress();
      updateGlobalHeaderStats();
      renderHomeView();
      if (state.currentView === 'subject') renderSubjectView();
      if (state.currentView === 'chapter') renderChapterView();
      if (state.currentView === 'workspace') loadProblemIntoWorkspace(state.currentProblemId);
      els.extendModal.classList.add('hidden');
      showToast('ล้างสถิติการฝึกทั้งหมดเรียบร้อยแล้ว', 'info');
    }
  });
}

// Initialize App
initTheme();
initEventListeners();
navigateToHome();
