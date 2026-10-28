const SUBJECTS = window.SUBJECTS || [];
const FRONTEND_CHAPTERS = window.FRONTEND_CHAPTERS || [];
const FRONTEND_PROBLEMS = window.FRONTEND_PROBLEMS || [];

const STORAGE_KEY = 'practice_chinnakrit_progress_v1';
const THEME_KEY = 'practice_chinnakrit_theme';
const LANG_KEY = 'practice_chinnakrit_lang';

const CHAPTERS_BY_SUBJECT = {
  frontend: FRONTEND_CHAPTERS
};

const PROBLEMS_BY_SUBJECT = {
  frontend: FRONTEND_PROBLEMS
};

const state = {
  lang: localStorage.getItem(LANG_KEY) || 'th', // 'th' | 'en'
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

function t() {
  return (window.I18N_UI && window.I18N_UI[state.lang]) || window.I18N_UI.th;
}

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
  statPillSolved: document.getElementById('stat-pill-solved'),
  statSolvedPrefix: document.getElementById('stat-solved-prefix'),
  statSolvedCount: document.getElementById('stat-solved-count'),
  statSolvedSuffix: document.getElementById('stat-solved-suffix'),
  statPillReps: document.getElementById('stat-pill-reps'),
  statRepsPrefix: document.getElementById('stat-reps-prefix'),
  statTotalReps: document.getElementById('stat-total-reps'),
  statRepsSuffix: document.getElementById('stat-reps-suffix'),
  btnExtendText: document.getElementById('btn-extend-text'),
  btnLangToggle: document.getElementById('btn-lang-toggle'),
  btnThemeToggle: document.getElementById('btn-theme-toggle'),
  themeIcon: document.getElementById('theme-icon'),

  homeView: document.getElementById('home-view'),
  subjectView: document.getElementById('subject-view'),
  chapterView: document.getElementById('chapter-view'),
  workspaceView: document.getElementById('workspace-view'),

  heroBadge: document.getElementById('hero-badge'),
  heroTitle: document.getElementById('hero-title'),
  heroDesc: document.getElementById('hero-desc'),
  heroSummaryBox: document.getElementById('hero-summary-box'),
  homeSubjectsTitle: document.getElementById('home-subjects-title'),
  homeSubjectsDesc: document.getElementById('home-subjects-desc'),
  subjectsGrid: document.getElementById('subjects-grid'),

  subjectBanner: document.getElementById('subject-banner'),
  subjectChaptersTitle: document.getElementById('subject-chapters-title'),
  subjectChaptersDesc: document.getElementById('subject-chapters-desc'),
  chaptersGrid: document.getElementById('chapters-grid'),

  chapterHeaderBox: document.getElementById('chapter-header-box'),
  chapterLessonSection: document.getElementById('chapter-lesson-section'),
  chapterProblemsTitle: document.getElementById('chapter-problems-title'),
  chapterProblemsDesc: document.getElementById('chapter-problems-desc'),
  difficultyTabsBar: document.getElementById('difficulty-tabs-bar'),
  diffTabAll: document.getElementById('diff-tab-all'),
  diffTabEasy: document.getElementById('diff-tab-easy'),
  diffTabMed: document.getElementById('diff-tab-med'),
  diffTabHard: document.getElementById('diff-tab-hard'),
  searchInput: document.getElementById('problem-search-input'),
  filterStatus: document.getElementById('filter-status'),
  filterOptAll: document.getElementById('filter-opt-all'),
  filterOptSolved: document.getElementById('filter-opt-solved'),
  filterOptUnsolved: document.getElementById('filter-opt-unsolved'),
  chapterProblemsContainer: document.getElementById('chapter-problems-container'),

  btnBackToChapter: document.getElementById('btn-back-to-chapter'),
  btnPrevProblem: document.getElementById('btn-prev-problem'),
  btnNextProblem: document.getElementById('btn-next-problem'),
  wsProblemSelect: document.getElementById('ws-problem-select'),
  wsRepBadge: document.getElementById('ws-rep-badge'),
  btnResetCode: document.getElementById('btn-reset-code'),
  btnRunPreview: document.getElementById('btn-run-preview'),
  btnRunTests: document.getElementById('btn-run-tests'),

  tabBtnDescription: document.getElementById('tab-btn-description'),
  tabBtnLesson: document.getElementById('tab-btn-lesson'),
  tabTestsLabel: document.getElementById('tab-tests-label'),
  tabBtnSolution: document.getElementById('tab-btn-solution'),
  shortcutHint: document.getElementById('shortcut-hint'),

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
  modalTitle: document.getElementById('modal-title'),
  modalIntro: document.getElementById('modal-intro'),
  modalStep1Title: document.getElementById('modal-step1-title'),
  modalStep1Desc: document.getElementById('modal-step1-desc'),
  modalStep2Title: document.getElementById('modal-step2-title'),
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
  const raw = SUBJECTS.find(s => s.id === subjectId);
  return window.localizeSubject ? window.localizeSubject(raw, state.lang) : raw;
}

function getChaptersForSubject(subjectId) {
  const list = CHAPTERS_BY_SUBJECT[subjectId] || [];
  return list.map(c => (window.localizeChapter ? window.localizeChapter(c, state.lang) : c));
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
    if (found) {
      return window.localizeProblem ? window.localizeProblem(found, state.lang) : found;
    }
  }
  return null;
}

function getProblemDisplayTitle(prob) {
  if (!prob) return '';
  if (state.lang === 'en') {
    const loc = window.localizeProblem ? window.localizeProblem(prob, 'en') : prob;
    return loc.displayTitle || prob.title;
  }
  return prob.title;
}

function getProblemDisplayDiff(probOrDiff) {
  const rawDiff = typeof probOrDiff === 'string' ? probOrDiff : probOrDiff?.difficulty;
  return window.localizeDifficulty ? window.localizeDifficulty(rawDiff, state.lang) : rawDiff;
}

// ============================================================================
// Language Switcher & Static DOM Updates
// ============================================================================
function applyStaticTranslations() {
  const ui = t();
  document.documentElement.lang = state.lang;
  document.title = ui.pageTitle;

  if (els.brandLogo) els.brandLogo.title = ui.brandTitleTooltip;
  if (els.statPillSolved) els.statPillSolved.title = ui.statSolvedTooltip;
  if (els.statSolvedPrefix) els.statSolvedPrefix.textContent = ui.statSolvedPrefix;
  if (els.statSolvedSuffix) els.statSolvedSuffix.textContent = ui.statSolvedSuffix;
  if (els.statPillReps) els.statPillReps.title = ui.statRepsTooltip;
  if (els.statRepsPrefix) els.statRepsPrefix.textContent = ui.statRepsPrefix;
  if (els.statRepsSuffix) els.statRepsSuffix.textContent = ui.statRepsSuffix;

  if (els.btnExtendText) els.btnExtendText.textContent = ui.btnExtend;
  if (els.btnHowToExtend) els.btnHowToExtend.title = ui.btnExtendTooltip;
  if (els.btnLangToggle) {
    els.btnLangToggle.title = ui.btnLangTooltip;
    els.btnLangToggle.querySelectorAll('[data-lang-opt]').forEach(span => {
      span.classList.toggle('active', span.getAttribute('data-lang-opt') === state.lang);
    });
  }
  if (els.btnThemeToggle) els.btnThemeToggle.title = ui.btnThemeTooltip;

  // Home View Static Elements
  if (els.heroBadge) els.heroBadge.textContent = ui.heroBadge;
  if (els.heroTitle) els.heroTitle.innerHTML = ui.heroTitle;
  if (els.heroDesc) els.heroDesc.textContent = ui.heroDesc;
  if (els.homeSubjectsTitle) els.homeSubjectsTitle.textContent = ui.homeSubjectsTitle;
  if (els.homeSubjectsDesc) els.homeSubjectsDesc.textContent = ui.homeSubjectsDesc;

  // Subject View Static Elements
  if (els.subjectChaptersTitle) els.subjectChaptersTitle.textContent = ui.subjectChaptersTitle;
  if (els.subjectChaptersDesc) els.subjectChaptersDesc.textContent = ui.subjectChaptersDesc;

  // Chapter View Static Elements
  if (els.chapterProblemsTitle) els.chapterProblemsTitle.textContent = ui.chapterProblemsTitle;
  if (els.chapterProblemsDesc) els.chapterProblemsDesc.textContent = ui.chapterProblemsDesc;
  if (els.diffTabAll) els.diffTabAll.textContent = ui.diffTabAll;
  if (els.diffTabEasy) els.diffTabEasy.textContent = ui.diffTabEasy;
  if (els.diffTabMed) els.diffTabMed.textContent = ui.diffTabMed;
  if (els.diffTabHard) els.diffTabHard.textContent = ui.diffTabHard;
  if (els.searchInput) els.searchInput.placeholder = ui.searchPlaceholder;
  if (els.filterOptAll) els.filterOptAll.textContent = ui.filterStatusAll;
  if (els.filterOptSolved) els.filterOptSolved.textContent = ui.filterStatusSolved;
  if (els.filterOptUnsolved) els.filterOptUnsolved.textContent = ui.filterStatusUnsolved;

  // Workspace View Static Elements
  if (els.btnBackToChapter) els.btnBackToChapter.textContent = ui.btnBackToChapter;
  if (els.btnResetCode) els.btnResetCode.textContent = ui.btnResetCode;
  if (els.btnRunPreview) els.btnRunPreview.textContent = ui.btnRunPreview;
  if (els.btnRunTests) els.btnRunTests.textContent = ui.btnRunTests;
  if (els.tabBtnDescription) els.tabBtnDescription.textContent = ui.tabDescription;
  if (els.tabBtnLesson) els.tabBtnLesson.textContent = ui.tabLesson;
  if (els.tabTestsLabel) els.tabTestsLabel.textContent = ui.tabTests;
  if (els.tabBtnSolution) els.tabBtnSolution.textContent = ui.tabSolution;
  if (els.shortcutHint) els.shortcutHint.textContent = ui.shortcutHint;
  if (els.codeEditor) els.codeEditor.placeholder = ui.editorPlaceholder;
  if (els.btnClearConsole) els.btnClearConsole.textContent = ui.btnClearConsole;

  // Modal Static Elements
  if (els.modalTitle) els.modalTitle.textContent = ui.modalTitle;
  if (els.modalIntro) els.modalIntro.innerHTML = ui.modalIntro;
  if (els.modalStep1Title) els.modalStep1Title.textContent = ui.modalStep1Title;
  if (els.modalStep1Desc) els.modalStep1Desc.innerHTML = ui.modalStep1Desc;
  if (els.modalStep2Title) els.modalStep2Title.textContent = ui.modalStep2Title;
  if (els.btnExportProgress) els.btnExportProgress.textContent = ui.btnExportProgress;
  if (els.btnResetAllProgress) els.btnResetAllProgress.textContent = ui.btnResetAllProgress;
}

function toggleLanguage() {
  state.lang = state.lang === 'th' ? 'en' : 'th';
  localStorage.setItem(LANG_KEY, state.lang);
  applyStaticTranslations();
  renderBreadcrumb();

  if (state.currentView === 'home') {
    renderHomeView();
  } else if (state.currentView === 'subject') {
    renderSubjectView();
  } else if (state.currentView === 'chapter') {
    renderChapterView();
  } else if (state.currentView === 'workspace' && state.currentProblemId) {
    const prevLeftTab = state.activeLeftTab;
    const prevEditorLang = state.activeEditorLang;
    const prevDraft = { ...state.editorDraft };
    const prevRevealed = state.solutionRevealed;
    loadProblemIntoWorkspace(state.currentProblemId);
    state.editorDraft = prevDraft;
    state.solutionRevealed = prevRevealed;
    if (prevRevealed) {
      const problem = getProblemById(state.currentProblemId);
      if (problem) renderSolutionPane(problem);
    }
    switchLeftPaneTab(prevLeftTab);
    switchEditorTab(prevEditorLang);
  }

  showToast(t().toastLangSwitched, 'info');
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
  const ui = t();
  const parts = [];
  parts.push(`<button class="breadcrumb-link" data-nav="home">${escapeHtml(ui.breadcrumbHome)}</button>`);

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
        `<span class="breadcrumb-current">${escapeHtml(ui.breadcrumbProblemPrefix)} ${prob.number} (${escapeHtml(getProblemDisplayDiff(prob))})</span>`
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
  const ui = t();
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
      <div class="metric-label">${escapeHtml(ui.metricSolvedLabel(pct))}</div>
    </div>
    <div class="summary-metric">
      <div class="metric-val">${escapeHtml(ui.metricRepsVal(totalReps))}</div>
      <div class="metric-label">${escapeHtml(ui.metricRepsLabel)}</div>
    </div>
    <div class="summary-metric">
      <div class="metric-val">${escapeHtml(ui.metricChaptersVal(FRONTEND_CHAPTERS.length))}</div>
      <div class="metric-label">${escapeHtml(ui.metricChaptersLabel)}</div>
    </div>
    <div class="summary-metric">
      <div class="metric-val">${escapeHtml(ui.metricPerChapVal)}</div>
      <div class="metric-label">${escapeHtml(ui.metricPerChapLabel)}</div>
    </div>
  `;

  els.subjectsGrid.innerHTML = SUBJECTS.map(rawSubj => {
    const subj = window.localizeSubject ? window.localizeSubject(rawSubj, state.lang) : rawSubj;
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
            ${subj.tags.map(tag => `<span class="tag-chip">${escapeHtml(tag)}</span>`).join('')}
          </div>
        </div>

        <div class="subject-progress-wrap">
          ${
            isAvailable
              ? `
            <div class="progress-meta">
              <span>${escapeHtml(ui.subjectProgressLabel)}</span>
              <strong>${escapeHtml(ui.subjectProgressValue(solved, total, progressPct))}</strong>
            </div>
            <div class="progress-bar-bg">
              <div class="progress-bar-fill" style="width: ${progressPct}%"></div>
            </div>
            <button class="subject-enter-btn">${escapeHtml(ui.subjectEnterBtn)}</button>
          `
              : `
            <button class="subject-enter-btn disabled" disabled>
              ${escapeHtml(ui.subjectComingSoonBtn)}
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
  const ui = t();
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
      <div class="stat-pill">${ui.subjectStatTotal(FRONTEND_CHAPTERS.length, problems.length)}</div>
      <div class="stat-pill">${ui.subjectStatSolved(solvedCount, problems.length)}</div>
      <div class="stat-pill">${ui.subjectStatReps(totalReps)}</div>
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
              <span class="subject-status-badge ready">${escapeHtml(ui.chapterBadgeReady)}</span>
            </div>
            <h3>${escapeHtml(ch.title)}</h3>
            <p>${escapeHtml(ch.description)}</p>
            <div class="subject-tags">
              ${(ch.tags || []).map(tag => `<span class="tag-chip">${escapeHtml(tag)}</span>`).join('')}
            </div>

            <div class="chapter-diff-pills">
              <div class="chapter-diff-pill">
                <span class="diff-badge diff-ง่าย">${escapeHtml(ui.chapterDiffEasy)}</span>
                <strong>${easySolved} / ${easyTotal} ${escapeHtml(ui.chapterProblemUnit)}</strong>
              </div>
              <div class="chapter-diff-pill">
                <span class="diff-badge diff-ปานกลาง">${escapeHtml(ui.chapterDiffMed)}</span>
                <strong>${medSolved} / ${medTotal} ${escapeHtml(ui.chapterProblemUnit)}</strong>
              </div>
              <div class="chapter-diff-pill">
                <span class="diff-badge diff-ยาก">${escapeHtml(ui.chapterDiffHard)}</span>
                <strong>${hardSolved} / ${hardTotal} ${escapeHtml(ui.chapterProblemUnit)}</strong>
              </div>
            </div>
          </div>

          <div class="subject-progress-wrap">
            <div class="progress-meta">
              <span>${escapeHtml(ui.chapterProgressLabel(ch.number))}</span>
              <strong>${escapeHtml(ui.chapterProgressValue(totalSolved, chProblems.length, pct))}</strong>
            </div>
            <div class="progress-bar-bg">
              <div class="progress-bar-fill" style="width: ${pct}%"></div>
            </div>
            <button class="subject-enter-btn">${escapeHtml(ui.chapterEnterBtn(ch.number))}</button>
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
  const ui = t();
  const lesson = chapter.lesson;
  if (!lesson) return '';

  return `
    <div class="lesson-overview-box">
      <strong>${escapeHtml(ui.lessonOverviewLabel)}</strong> ${escapeHtml(lesson.overview)}
    </div>

    <div class="lesson-sub-heading">${escapeHtml(ui.lessonSyntaxHeading)}</div>
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

    <div class="lesson-sub-heading">${escapeHtml(ui.lessonExamplesHeading)}</div>
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
  const ui = t();
  const chapter = getChapterById(state.currentChapterId);
  if (!chapter) return;

  const chProblems = chapter.problems || [];
  const solvedCount = chProblems.filter(p => getProblemProgress(p.id).solved).length;
  const totalReps = chProblems.reduce((acc, p) => acc + (getProblemProgress(p.id).reps || 0), 0);

  els.chapterHeaderBox.innerHTML = `
    <div class="subject-banner-info">
      <div style="margin-bottom:8px;">
        <button id="btn-back-to-chapters" class="ws-btn secondary">${escapeHtml(ui.btnBackToChapters)}</button>
      </div>
      <h1>${chapter.icon || '📘'} ${escapeHtml(chapter.title)}</h1>
      <p>${escapeHtml(chapter.description)}</p>
    </div>
    <div style="display:flex; gap:10px; flex-wrap:wrap;">
      <div class="stat-pill">${ui.chapterStatSolved(solvedCount, chProblems.length)}</div>
      <div class="stat-pill">${ui.chapterStatReps(totalReps)}</div>
    </div>
  `;

  document.getElementById('btn-back-to-chapters').addEventListener('click', () => {
    navigateToSubject(state.currentSubjectId);
  });

  // Render Lesson Box
  els.chapterLessonSection.innerHTML = `
    <div class="lesson-header-bar" id="lesson-toggle-bar">
      <h2>${escapeHtml(ui.lessonHeaderTitle(chapter.number))}</h2>
      <span class="ws-btn secondary" id="lesson-toggle-label">
        ${escapeHtml(state.lessonCollapsed ? ui.lessonExpandBtn : ui.lessonCollapseBtn)}
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
      ? t().lessonExpandBtn
      : t().lessonCollapseBtn;
  });

  // Sync difficulty tabs
  els.difficultyTabsBar.querySelectorAll('.diff-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-diff') === state.filters.difficulty);
  });

  renderChapterProblemsList();
}

function renderChapterProblemsList() {
  const ui = t();
  const chapter = getChapterById(state.currentChapterId);
  if (!chapter) return;

  const chProblems = chapter.problems || [];
  const { search, difficulty, status } = state.filters;
  const q = search.trim().toLowerCase();

  const groups = [
    { key: 'ง่าย', title: ui.groupEasyTitle, desc: ui.groupEasyDesc },
    { key: 'ปานกลาง', title: ui.groupMedTitle, desc: ui.groupMedDesc },
    { key: 'ยาก', title: ui.groupHardTitle, desc: ui.groupHardDesc }
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
          const enTitle = (window.PROBLEM_TITLES_EN && window.PROBLEM_TITLES_EN[p.id]) || '';
          const matchTitle = p.title.toLowerCase().includes(q) || enTitle.toLowerCase().includes(q);
          const matchTags = (p.tags || []).some(tag => tag.toLowerCase().includes(q));
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
              <h3>${escapeHtml(g.title)}</h3>
              <p>${escapeHtml(g.desc)}</p>
            </div>
            <span class="module-progress-pill">
              ${escapeHtml(ui.groupProgressPill(groupSolved, groupProblems.length))}
            </span>
          </div>
          <div class="problems-list">
            ${filtered
              .map(prob => {
                const prog = getProblemProgress(prob.id);
                const isSolved = prog.solved;
                const reps = prog.reps || 0;
                const dispTitle = getProblemDisplayTitle(prob);
                const dispDiff = getProblemDisplayDiff(prob);
                return `
                  <div class="problem-row" data-problem-id="${prob.id}">
                    <div class="problem-row-left">
                      <div class="problem-status-icon ${isSolved ? 'solved' : 'unsolved'}">
                        ${isSolved ? '✓' : prob.number}
                      </div>
                      <div class="problem-info">
                        <h4>${escapeHtml(ui.problemNumberPrefix(prob.number))} ${escapeHtml(dispTitle)}</h4>
                        <div class="problem-meta">
                          <span class="diff-badge diff-${prob.difficulty}">${escapeHtml(dispDiff)}</span>
                          ${(prob.tags || []).map(tag => `<span class="tag-chip">${escapeHtml(tag)}</span>`).join('')}
                        </div>
                      </div>
                    </div>
                    <div class="problem-row-right">
                      <span class="rep-count-pill ${reps > 0 ? 'has-reps' : ''}">
                        ${escapeHtml(ui.repPillText(reps))}
                      </span>
                      <button class="start-problem-btn">
                        ${escapeHtml(reps > 0 ? ui.btnPracticeAgainRow : ui.btnStartProblem)}
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
        ${escapeHtml(ui.emptyFilterResult)}
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
  const ui = t();
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
      const dispTitle = getProblemDisplayTitle(p);
      const dispDiff = getProblemDisplayDiff(p);
      return `<option value="${p.id}" ${p.id === problem.id ? 'selected' : ''}>
        ${check}[${escapeHtml(dispDiff)}] ${escapeHtml(ui.problemNumberPrefix(p.number))} ${escapeHtml(dispTitle)}
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
  els.wsRepBadge.textContent = t().repPillText(prog.reps || 0);
}

function renderWorkspaceLessonPane(chapter) {
  if (!chapter) return;
  els.workspaceLessonContent.innerHTML = `
    <h3 style="margin-bottom:12px;">${chapter.icon || '📘'} ${escapeHtml(chapter.title)}</h3>
    ${buildLessonMarkup(chapter)}
  `;
}

function renderProblemDescriptionPane(problem) {
  const ui = t();
  const title = problem.displayTitle || problem.title;
  const diffLabel = problem.displayDifficulty || problem.difficulty;
  const descHtml = problem.displayDescription || problem.description;
  const reqs = problem.displayRequirements || problem.requirements || [];
  const hints = problem.displayHints || problem.hints || [];

  els.problemDetailContent.innerHTML = `
    <h2>${escapeHtml(ui.problemNumberPrefix(problem.number))} ${escapeHtml(title)}</h2>
    <div class="problem-detail-meta">
      <span class="diff-badge diff-${problem.difficulty}">${escapeHtml(ui.diffPrefix)} ${escapeHtml(diffLabel)}</span>
      ${(problem.tags || []).map(tag => `<span class="tag-chip">${escapeHtml(tag)}</span>`).join('')}
    </div>

    <div class="problem-desc-box">
      ${descHtml}
    </div>

    <div class="req-section">
      <h4>${escapeHtml(ui.reqHeading)}</h4>
      <ul class="req-list">
        ${reqs.map(r => `<li>${r}</li>`).join('')}
      </ul>
    </div>

    <div class="hints-section">
      <h4>${escapeHtml(ui.hintsHeading)}</h4>
      ${hints
        .map(
          (hint, i) => `
        <div class="hint-card">
          <button class="hint-toggle-btn" type="button">
            <span>${escapeHtml(ui.hintItemLabel(i + 1))}</span>
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
  const ui = t();
  const tcs = problem.displayTestCases || problem.testCases || [];
  els.testTabBadge.textContent = `${tcs.length}`;
  els.testTabBadge.className = 'tab-badge';

  els.testResultsContainer.innerHTML = `
    <div style="margin-bottom: 14px; color: var(--text-secondary); font-size: 0.88rem;">
      ${ui.initialTestsInfo(tcs.length)}
    </div>
    ${tcs
      .map(
        (tc, i) => `
      <div class="test-case-card">
        <div class="test-case-header">
          <span>⏳ Test Case #${i + 1}: ${escapeHtml(tc.displayName || tc.name)}</span>
        </div>
      </div>
    `
      )
      .join('')}
  `;
}

function renderSolutionPane(problem) {
  const ui = t();
  if (!state.solutionRevealed) {
    els.solutionContainer.innerHTML = `
      <div class="solution-warning-box">
        <h3 style="margin-bottom: 8px;">${escapeHtml(ui.solutionHiddenTitle)}</h3>
        <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 16px;">
          ${ui.solutionHiddenDesc}
        </p>
        <button id="btn-reveal-solution" class="ws-btn secondary">
          ${escapeHtml(ui.btnRevealSolution)}
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
      <h3 style="font-size: 1rem;">${escapeHtml(ui.solutionCodeTitle)}</h3>
      <button id="btn-apply-solution" class="ws-btn secondary">
        ${escapeHtml(ui.btnApplySolution)}
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
    showToast(t().toastAppliedSolution, 'info');
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
  els.consoleLogs.innerHTML = `<div class="console-empty">${escapeHtml(t().consoleEmpty)}</div>`;
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
          send('error', [msg + (line ? ' (Line ' + line + ')' : '')]);
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
  const ui = t();
  const problem = getProblemById(state.currentProblemId);
  if (!problem) return;

  runLivePreview();
  switchLeftPaneTab('tests');

  const tcs = problem.displayTestCases || problem.testCases || [];
  const results = [];
  for (const tc of tcs) {
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
        name: tc.displayName || tc.name,
        passed: Boolean(outcome && outcome.passed),
        expected: outcome?.expected,
        actual: outcome?.actual
      });
    } catch (err) {
      results.push({
        name: tc.displayName || tc.name,
        passed: false,
        expected: ui.testErrorExpected,
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
    showToast(ui.toastAllPassed(totalCount), 'success');
  }

  const prog = getProblemProgress(problem.id);

  els.testResultsContainer.innerHTML = `
    <div class="test-summary-banner ${allPassed ? 'all-passed' : 'some-failed'}">
      <h3>
        ${escapeHtml(
          allPassed
            ? ui.bannerAllPassedTitle(passedCount, totalCount)
            : ui.bannerSomeFailedTitle(passedCount, totalCount)
        )}
      </h3>
      <p style="font-size: 0.85rem; color: var(--text-secondary);">
        ${allPassed ? ui.bannerAllPassedDesc(prog.reps) : escapeHtml(ui.bannerSomeFailedDesc)}
      </p>
      ${
        allPassed
          ? `
        <div class="test-summary-actions">
          <button id="btn-banner-practice-again" class="ws-btn secondary">
            ${escapeHtml(ui.btnBannerPracticeAgain)}
          </button>
          <button id="btn-banner-next-problem" class="ws-btn primary">
            ${escapeHtml(ui.btnBannerNextProblem)}
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
          <div class="test-diff-row"><strong>${escapeHtml(ui.labelExpected)}</strong> ${escapeHtml(res.expected)}</div>
          <div class="test-diff-row"><strong>${escapeHtml(ui.labelActual)}</strong> ${escapeHtml(res.actual)}</div>
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
  showToast(t().toastResetCode, 'info');
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

  if (els.btnLangToggle) {
    els.btnLangToggle.addEventListener('click', () => {
      toggleLanguage();
    });
  }

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
    showToast(t().toastPreviewUpdated, 'info');
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
      showToast(t().toastSavedAndPreview, 'info');
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
    showToast(t().toastExported, 'success');
  });

  els.btnResetAllProgress.addEventListener('click', () => {
    if (confirm(t().confirmResetAll)) {
      state.progress = {};
      saveProgress();
      updateGlobalHeaderStats();
      renderHomeView();
      if (state.currentView === 'subject') renderSubjectView();
      if (state.currentView === 'chapter') renderChapterView();
      if (state.currentView === 'workspace') loadProblemIntoWorkspace(state.currentProblemId);
      els.extendModal.classList.add('hidden');
      showToast(t().toastResetAll, 'info');
    }
  });
}

// Initialize App
initTheme();
applyStaticTranslations();
initEventListeners();
navigateToHome();
