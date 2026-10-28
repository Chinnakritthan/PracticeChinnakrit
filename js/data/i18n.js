/**
 * Bilingual Internationalization (TH / EN) for PracticeChinnakrit
 * Supports UI labels, Subject blocks, 5 Chapter Lesson Guides, and 175 Practice Problems.
 */

window.I18N_UI = {
  th: {
    pageTitle: 'PracticeChinnakrit — แพลตฟอร์มฝึกเขียนโค้ดและสร้างเว็บไซต์',
    brandTitleTooltip: 'กลับหน้าหลัก',
    statSolvedPrefix: 'ผ่านแล้ว:',
    statSolvedSuffix: 'โจทย์',
    statSolvedTooltip: 'จำนวนโจทย์ที่ทำผ่านอย่างน้อย 1 รอบ',
    statRepsPrefix: 'รอบที่ฝึกทั้งหมด:',
    statRepsSuffix: 'รอบ',
    statRepsTooltip: 'จำนวนรอบทั้งหมดที่คุณฝึกทำซ้ำจนผ่าน',
    btnExtend: '➕ วิธีเพิ่มโจทย์/วิชา',
    btnExtendTooltip: 'วิธีเพิ่มวิชาและโจทย์ใหม่ในอนาคต',
    btnLangTooltip: 'สลับภาษา ไทย / อังกฤษ (Switch Language TH/EN)',
    btnThemeTooltip: 'สลับโหมดสีมืด/สว่าง',

    breadcrumbHome: '🏠 หน้าแรก',
    breadcrumbProblemPrefix: 'ข้อที่',

    heroBadge: '🎯 Practice Makes Permanent',
    heroTitle: 'ฝึกทำโจทย์ซ้ำๆ จนเข้าใจลึกซึ้ง<br/>ตั้งแต่พื้นฐานจนสร้างเว็บไซต์ได้จริง',
    heroDesc:
      'แยกการเรียนเป็นรายวิชาและรายบท แต่ละบทมีสรุปเนื้อหา คำสั่งที่ต้องใช้ และตัวอย่างโค้ดให้ศึกษาก่อนลงมือทำโจทย์ พร้อมโจทย์ฝึกซ้ำบทละ 35 ข้อ (ง่าย 20 • ปานกลาง 10 • ยาก 5)',
    metricSolvedLabel: pct => `โจทย์ที่ทำผ่านแล้ว (${pct}%)`,
    metricRepsVal: reps => `${reps} รอบ`,
    metricRepsLabel: 'จำนวนรอบที่ฝึกซ้ำทั้งหมด',
    metricChaptersVal: count => `${count} บทเรียน`,
    metricChaptersLabel: 'เนื้อหา + ตัวอย่าง + โจทย์',
    metricPerChapVal: '35 ข้อ/บท',
    metricPerChapLabel: 'ง่าย 20 • ปานกลาง 10 • ยาก 5',

    homeSubjectsTitle: '📚 เลือกหมวดวิชาที่ต้องการฝึก (Subject Blocks)',
    homeSubjectsDesc: 'แยกเป็นบล็อกตามรายวิชา สามารถขยายเพิ่มวิชาใหม่ในอนาคตได้ตลอดเวลา',
    subjectProgressLabel: 'ความคืบหน้ารวมทุกบท',
    subjectProgressValue: (solved, total, pct) => `${solved}/${total} โจทย์ (${pct}%)`,
    subjectEnterBtn: 'เลือกบทเรียนและเริ่มฝึกทำโจทย์ →',
    subjectComingSoonBtn: '🔒 เตรียมเปิดใช้งานในอนาคต',

    subjectChaptersTitle: '🗂️ เลือกบทเรียนที่ต้องการศึกษาและฝึกทำโจทย์',
    subjectChaptersDesc:
      'แต่ละบทประกอบด้วย: เนื้อหาที่ต้องรู้ + คำสั่งที่ต้องใช้ + ตัวอย่างโค้ด + โจทย์ฝึกหัด 35 ข้อ (ง่าย 20, ปานกลาง 10, ยาก 5)',
    subjectStatTotal: (chCount, probCount) => `📚 ทั้งหมด: <strong>${chCount} บทเรียน (${probCount} ข้อ)</strong>`,
    subjectStatSolved: (solved, total) => `✅ ผ่านแล้ว: <strong>${solved}/${total}</strong>`,
    subjectStatReps: reps => `🔄 ฝึกซ้ำรวม: <strong>${reps} รอบ</strong>`,
    chapterBadgeReady: '35 โจทย์ + เนื้อหา',
    chapterDiffEasy: '🌱 ง่าย',
    chapterDiffMed: '⚡ ปานกลาง',
    chapterDiffHard: '🔥 ยาก',
    chapterProblemUnit: 'ข้อ',
    chapterProgressLabel: num => `ความคืบหน้าบทที่ ${num}`,
    chapterProgressValue: (solved, total, pct) => `${solved}/${total} ข้อ (${pct}%)`,
    chapterEnterBtn: num => `📖 เข้าเรียนเนื้อหา & ฝึกทำโจทย์บทที่ ${num} →`,

    btnBackToChapters: '← กลับหน้าเลือกบทเรียน',
    chapterStatSolved: (solved, total) => `✅ ผ่านแล้ว: <strong>${solved}/${total} ข้อ</strong>`,
    chapterStatReps: reps => `🔄 ฝึกซ้ำบทนี้: <strong>${reps} รอบ</strong>`,
    lessonHeaderTitle: num => `📚 สรุปเนื้อหา คำสั่งที่ต้องใช้ และตัวอย่างโค้ดประจำบทที่ ${num}`,
    lessonExpandBtn: '▼ กางดูเนื้อหาบทเรียน',
    lessonCollapseBtn: '▲ พับเก็บเนื้อหา',
    lessonOverviewLabel: '💡 ภาพรวมเนื้อหาบทนี้:',
    lessonSyntaxHeading: '🛠️ คำสั่งและเครื่องมือที่ต้องใช้ในบทนี้ (Syntax & Tools)',
    lessonExamplesHeading: '💻 ตัวอย่างโค้ดพร้อมคำอธิบาย (Code Examples)',

    chapterProblemsTitle: '🎯 โจทย์ฝึกหัดประจำบท (35 ข้อ)',
    chapterProblemsDesc: 'แบ่งระดับความยาก: ง่าย 20 ข้อ • ปานกลาง 10 ข้อ • ยาก 5 ข้อ (ฝึกทำซ้ำได้ไม่จำกัดรอบ)',
    diffTabAll: 'ทั้งหมด (35 ข้อ)',
    diffTabEasy: '🌱 ง่าย (20 ข้อ)',
    diffTabMed: '⚡ ปานกลาง (10 ข้อ)',
    diffTabHard: '🔥 ยาก (5 ข้อ)',
    searchPlaceholder: 'ค้นหาชื่อโจทย์ หรือคำสั่งในบทนี้...',
    filterStatusAll: 'ทุกสถานะ',
    filterStatusSolved: '✅ ผ่านแล้ว',
    filterStatusUnsolved: '⭕ ยังไม่ผ่าน',

    groupEasyTitle: '🌱 ระดับง่าย (20 ข้อ) — ฝึกพื้นฐานและคำสั่งหลักให้แม่นยำ',
    groupEasyDesc: 'ข้อที่ 1 – 20',
    groupMedTitle: '⚡ ระดับปานกลาง (10 ข้อ) — ประยุกต์ใช้หลายคำสั่งร่วมกัน',
    groupMedDesc: 'ข้อที่ 21 – 30',
    groupHardTitle: '🔥 ระดับยาก (5 ข้อ) — โจทย์ท้าทายและสร้างระบบใช้งานจริง',
    groupHardDesc: 'ข้อที่ 31 – 35',
    groupProgressPill: (solved, total) => `ผ่านแล้ว ${solved} / ${total} ข้อ`,
    problemNumberPrefix: num => `ข้อที่ ${num}:`,
    repPillText: reps => `🔄 ผ่านแล้ว ${reps} รอบ`,
    btnStartProblem: 'เริ่มทำโจทย์ →',
    btnPracticeAgainRow: 'ฝึกทำซ้ำ →',
    emptyFilterResult: 'ไม่พบโจทย์ที่ตรงกับตัวกรองของคุณ',

    btnBackToChapter: '← กลับหน้าบทเรียน',
    btnResetCode: '↺ รีเซ็ตโค้ดฝึกซ้ำ',
    btnRunPreview: '▶ รัน Preview',
    btnRunTests: '✓ ส่งตรวจคำตอบ (Run Tests)',
    tabDescription: '📖 โจทย์',
    tabLesson: '📘 เนื้อหาบทนี้',
    tabTests: '🧪 ผลตรวจ',
    tabSolution: '💡 เฉลย',
    shortcutHint: '⌘/Ctrl + Enter เพื่อตรวจคำตอบ',
    editorPlaceholder: 'เขียนโค้ดคำตอบของคุณที่นี่...',
    btnClearConsole: 'ล้าง Console',
    consoleEmpty: 'ผลลัพธ์จาก console.log() หรือแจ้งเตือน Error จะแสดงที่นี่',

    diffPrefix: 'ระดับ:',
    reqHeading: '🎯 สิ่งที่โจทย์ต้องการ (Requirements)',
    hintsHeading: '💡 คำใบ้ทีละขั้น (คลิกเพื่อดูเมื่อติดขัด)',
    hintItemLabel: idx => `คำใบ้ที่ ${idx}`,
    initialTestsInfo: count =>
      `โจทย์ข้อนี้มีชุดทดสอบทั้งหมด <strong>${count} ข้อ</strong> กดปุ่ม <strong>"✓ ส่งตรวจคำตอบ (Run Tests)"</strong> ด้านบนเพื่อตรวจโค้ดของคุณ`,

    solutionHiddenTitle: '🔒 เฉลยถูกซ่อนไว้',
    solutionHiddenDesc:
      'แนะนำให้ลองเปิดดู <strong>📘 เนื้อหาบทนี้</strong> หรือ <strong>คำใบ้ (Hints)</strong> ก่อนนะครับ หากยังติดขัดสามารถกดดูเฉลยด้านล่างได้เลย',
    btnRevealSolution: '👁 แสดงโค้ดเฉลย (Reveal Solution)',
    solutionCodeTitle: '✅ โค้ดเฉลยตัวอย่าง',
    btnApplySolution: '📋 นำเฉลยไปใส่ใน Editor',
    toastAppliedSolution: 'นำโค้ดเฉลยมาใส่ใน Editor เรียบร้อยแล้ว',

    testErrorExpected: 'ทำงานได้โดยไม่มี Error',
    toastAllPassed: total => `🎉 ยินดีด้วย! ผ่านครบ ${total}/${total} Test Cases`,
    bannerAllPassedTitle: (passed, total) => `🎉 ผ่านครบทุกข้อ! (${passed}/${total} Test Cases)`,
    bannerSomeFailedTitle: (passed, total) =>
      `⚠️ ผ่าน ${passed}/${total} Test Cases — ลองตรวจสอบจุดที่ยังไม่ผ่านด้านล่าง`,
    bannerAllPassedDesc: reps =>
      `คุณทำโจทย์ข้อนี้ผ่านแล้วทั้งหมด <strong>${reps} รอบ</strong> สามารถกดรีเซ็ตเพื่อฝึกทำซ้ำให้คล่องมือ หรือไปข้อถัดไปได้เลย!`,
    bannerSomeFailedDesc:
      'ดูค่าที่คาดหวัง (Expected) เทียบกับค่าที่ได้จริง (Actual) เพื่อปรับแก้โค้ดของคุณ',
    btnBannerPracticeAgain: '↺ ล้างโค้ดเพื่อฝึกซ้ำอีกรอบ',
    btnBannerNextProblem: 'ไปโจทย์ข้อถัดไป →',
    labelExpected: 'ค่าที่ต้องการ (Expected):',
    labelActual: 'ค่าที่ได้จริง (Actual):',

    toastResetCode: 'รีเซ็ตโค้ดเริ่มต้นแล้ว พร้อมฝึกทำซ้ำรอบใหม่ได้เลย!',
    toastPreviewUpdated: 'อัปเดตหน้าเว็บ Live Preview แล้ว',
    toastSavedAndPreview: 'บันทึกโค้ดและรัน Live Preview แล้ว',
    toastExported: 'ส่งออกไฟล์ประวัติการฝึกเรียบร้อยแล้ว',
    confirmResetAll: 'คุณต้องการล้างสถิติจำนวนรอบที่ฝึกทั้งหมดกลับเป็น 0 ใช่หรือไม่?',
    toastResetAll: 'ล้างสถิติการฝึกทั้งหมดเรียบร้อยแล้ว',
    toastLangSwitched: 'เปลี่ยนภาษาเป็น ภาษาไทย (TH) แล้ว',

    modalTitle: '🛠 วิธีเพิ่มบล็อกวิชาใหม่ หรือเพิ่มบทเรียนและโจทย์',
    modalIntro:
      'เว็บไซต์นี้ออกแบบโครงสร้างแบบ <strong>Modular</strong> แยกตามรายบทเรียนในโฟลเดอร์ <code>js/data/</code>:',
    modalStep1Title: '1. โครงสร้างบทเรียนและโจทย์',
    modalStep1Desc:
      'ไฟล์ <code>js/data/chapter1.js</code> ถึง <code>chapter5.js</code> เก็บเนื้อหาบทเรียน (<code>lesson</code>) และโจทย์ประจำบท 35 ข้อ (ง่าย 20, ปานกลาง 10, ยาก 5)',
    modalStep2Title: '2. จัดการข้อมูลความคืบหน้า (Backup / Reset Progress)',
    btnExportProgress: '⬇ ส่งออกประวัติการฝึก (Export JSON)',
    btnResetAllProgress: '🗑 ล้างสถิติการฝึกทั้งหมด'
  },

  en: {
    pageTitle: 'PracticeChinnakrit — Interactive Coding & Web Mastery Platform',
    brandTitleTooltip: 'Back to Home',
    statSolvedPrefix: 'Solved:',
    statSolvedSuffix: 'Problems',
    statSolvedTooltip: 'Number of problems solved at least once',
    statRepsPrefix: 'Total Reps:',
    statRepsSuffix: 'Runs',
    statRepsTooltip: 'Total number of successful practice repetitions',
    btnExtend: '➕ Extend & Backup',
    btnExtendTooltip: 'How to add new subjects/problems & manage progress',
    btnLangTooltip: 'Switch Language (TH / EN)',
    btnThemeTooltip: 'Toggle Dark / Light Theme',

    breadcrumbHome: '🏠 Home',
    breadcrumbProblemPrefix: 'Problem',

    heroBadge: '🎯 Practice Makes Permanent',
    heroTitle: 'Master Coding Through Repetition<br/>From Fundamentals to Building Real Websites',
    heroDesc:
      'Structured by subject and chapter. Each chapter includes a complete lesson overview, essential syntax & tools, code examples, and 35 hands-on problems (20 Easy • 10 Medium • 5 Hard).',
    metricSolvedLabel: pct => `Problems Solved (${pct}%)`,
    metricRepsVal: reps => `${reps} Reps`,
    metricRepsLabel: 'Total Practice Repetitions',
    metricChaptersVal: count => `${count} Chapters`,
    metricChaptersLabel: 'Lessons + Examples + Problems',
    metricPerChapVal: '35 / Chapter',
    metricPerChapLabel: '20 Easy • 10 Medium • 5 Hard',

    homeSubjectsTitle: '📚 Choose a Subject to Practice (Subject Blocks)',
    homeSubjectsDesc: 'Organized into modular subject blocks that can be expanded anytime.',
    subjectProgressLabel: 'Overall Subject Progress',
    subjectProgressValue: (solved, total, pct) => `${solved}/${total} Problems (${pct}%)`,
    subjectEnterBtn: 'Select Chapter & Start Practicing →',
    subjectComingSoonBtn: '🔒 Coming Soon',

    subjectChaptersTitle: '🗂️ Select a Chapter to Study & Practice',
    subjectChaptersDesc:
      'Each chapter includes: Core Concepts + Required Syntax + Code Examples + 35 Practice Problems (20 Easy, 10 Medium, 5 Hard)',
    subjectStatTotal: (chCount, probCount) =>
      `📚 Total: <strong>${chCount} Chapters (${probCount} Problems)</strong>`,
    subjectStatSolved: (solved, total) => `✅ Solved: <strong>${solved}/${total}</strong>`,
    subjectStatReps: reps => `🔄 Total Reps: <strong>${reps} Runs</strong>`,
    chapterBadgeReady: '35 Problems + Lesson',
    chapterDiffEasy: '🌱 Easy',
    chapterDiffMed: '⚡ Medium',
    chapterDiffHard: '🔥 Hard',
    chapterProblemUnit: 'probs',
    chapterProgressLabel: num => `Chapter ${num} Progress`,
    chapterProgressValue: (solved, total, pct) => `${solved}/${total} Solved (${pct}%)`,
    chapterEnterBtn: num => `📖 Study Lesson & Practice Chapter ${num} →`,

    btnBackToChapters: '← Back to Chapters',
    chapterStatSolved: (solved, total) => `✅ Solved: <strong>${solved}/${total} Problems</strong>`,
    chapterStatReps: reps => `🔄 Chapter Reps: <strong>${reps} Runs</strong>`,
    lessonHeaderTitle: num => `📚 Chapter ${num} Lesson Summary, Syntax & Code Examples`,
    lessonExpandBtn: '▼ Show Chapter Lesson',
    lessonCollapseBtn: '▲ Hide Chapter Lesson',
    lessonOverviewLabel: '💡 Chapter Overview:',
    lessonSyntaxHeading: '🛠️ Required Syntax & Tools in This Chapter',
    lessonExamplesHeading: '💻 Code Examples with Explanations',

    chapterProblemsTitle: '🎯 Chapter Practice Problems (35 Problems)',
    chapterProblemsDesc:
      'Split by difficulty: 20 Easy • 10 Medium • 5 Hard (Practice as many times as you like)',
    diffTabAll: 'All (35)',
    diffTabEasy: '🌱 Easy (20)',
    diffTabMed: '⚡ Medium (10)',
    diffTabHard: '🔥 Hard (5)',
    searchPlaceholder: 'Search problem title, tag, or syntax...',
    filterStatusAll: 'All Status',
    filterStatusSolved: '✅ Solved',
    filterStatusUnsolved: '⭕ Unsolved',

    groupEasyTitle: '🌱 Easy Level (20 Problems) — Master Core Syntax & Fundamentals',
    groupEasyDesc: 'Problems 1 – 20',
    groupMedTitle: '⚡ Medium Level (10 Problems) — Combine Multiple Concepts & Logic',
    groupMedDesc: 'Problems 21 – 30',
    groupHardTitle: '🔥 Hard Level (5 Problems) — Real-World Challenges & Mini Systems',
    groupHardDesc: 'Problems 31 – 35',
    groupProgressPill: (solved, total) => `Solved ${solved} / ${total}`,
    problemNumberPrefix: num => `Problem ${num}:`,
    repPillText: reps => `🔄 Passed ${reps}x`,
    btnStartProblem: 'Start →',
    btnPracticeAgainRow: 'Practice Again →',
    emptyFilterResult: 'No problems match your current filters.',

    btnBackToChapter: '← Back to Chapter',
    btnResetCode: '↺ Reset Code',
    btnRunPreview: '▶ Run Preview',
    btnRunTests: '✓ Run Tests',
    tabDescription: '📖 Problem',
    tabLesson: '📘 Lesson',
    tabTests: '🧪 Tests',
    tabSolution: '💡 Solution',
    shortcutHint: '⌘/Ctrl + Enter to Run Tests',
    editorPlaceholder: 'Write your solution code here...',
    btnClearConsole: 'Clear Console',
    consoleEmpty: 'Output from console.log() or runtime errors will appear here.',

    diffPrefix: 'Difficulty:',
    reqHeading: '🎯 Requirements',
    hintsHeading: '💡 Step-by-Step Hints (Click to reveal)',
    hintItemLabel: idx => `Hint #${idx}`,
    initialTestsInfo: count =>
      `This problem has <strong>${count} test cases</strong>. Click <strong>"✓ Run Tests"</strong> above to verify your solution.`,

    solutionHiddenTitle: '🔒 Solution is Hidden',
    solutionHiddenDesc:
      'We recommend checking the <strong>📘 Lesson</strong> tab or <strong>Hints</strong> first. If you are still stuck, click below to reveal the reference solution.',
    btnRevealSolution: '👁 Reveal Solution',
    solutionCodeTitle: '✅ Reference Solution Code',
    btnApplySolution: '📋 Copy Solution to Editor',
    toastAppliedSolution: 'Reference solution loaded into the Editor.',

    testErrorExpected: 'Executes without runtime errors',
    toastAllPassed: total => `🎉 Awesome! All ${total}/${total} Test Cases Passed!`,
    bannerAllPassedTitle: (passed, total) => `🎉 All Test Cases Passed! (${passed}/${total})`,
    bannerSomeFailedTitle: (passed, total) =>
      `⚠️ Passed ${passed}/${total} Test Cases — Check the failed cases below`,
    bannerAllPassedDesc: reps =>
      `You have solved this problem <strong>${reps} time(s)</strong>. Reset the code to practice again or move to the next problem!`,
    bannerSomeFailedDesc:
      'Compare the Expected output with your Actual output below to debug your code.',
    btnBannerPracticeAgain: '↺ Reset Code to Practice Again',
    btnBannerNextProblem: 'Next Problem →',
    labelExpected: 'Expected:',
    labelActual: 'Actual:',

    toastResetCode: 'Code reset to starter template. Ready for another round!',
    toastPreviewUpdated: 'Live Preview updated.',
    toastSavedAndPreview: 'Code saved & Live Preview updated.',
    toastExported: 'Practice progress exported as JSON.',
    confirmResetAll: 'Are you sure you want to reset all practice statistics back to 0?',
    toastResetAll: 'All practice statistics have been reset.',
    toastLangSwitched: 'Switched language to English (EN)',

    modalTitle: '🛠 How to Add New Subjects, Chapters & Backup Progress',
    modalIntro:
      'This platform uses a <strong>Modular</strong> data structure inside the <code>js/data/</code> folder:',
    modalStep1Title: '1. Chapter & Problem Structure',
    modalStep1Desc:
      'Files <code>js/data/chapter1.js</code> through <code>chapter5.js</code> store the chapter lesson (<code>lesson</code>) and 35 problems per chapter (20 Easy, 10 Medium, 5 Hard).',
    modalStep2Title: '2. Manage Your Progress (Backup / Reset)',
    btnExportProgress: '⬇ Export Progress (JSON)',
    btnResetAllProgress: '🗑 Reset All Progress'
  }
};

// ============================================================================
// English Translations for Subject Blocks
// ============================================================================
window.SUBJECTS_EN = {
  frontend: {
    title: 'Frontend Web Development (JS, DOM & Web Apps)',
    badgeText: 'Ready (5 Chapters • 175 Problems)',
    description:
      'Learn step-by-step from JavaScript Fundamentals, Array & Object Mastery, DOM Manipulation, and Events & Async to building full interactive web apps. Each chapter includes a lesson guide, code examples, and 35 problems (20 Easy • 10 Medium • 5 Hard).',
    tags: ['5 Complete Chapters', 'Lessons + Code Examples', '20 Easy / 10 Med / 5 Hard per Chapter', '175 Total Problems']
  },
  'backend-nodejs': {
    title: 'Backend Development (Node.js & REST API)',
    badgeText: 'Coming Soon',
    description:
      'Practice building web servers, designing RESTful APIs, handling Request/Response, Middleware, and backend integration.',
    tags: ['Node.js', 'Express', 'REST API', 'JSON', 'Authentication']
  },
  'react-modern': {
    title: 'Modern Frontend Framework (React & State)',
    badgeText: 'Coming Soon',
    description:
      'Advance from vanilla JS & DOM to component-based web apps using React, Props, useState, useEffect, and Custom Hooks.',
    tags: ['React', 'Components', 'Hooks', 'State Management']
  },
  'sql-database': {
    title: 'Database & SQL Queries',
    badgeText: 'Coming Soon',
    description:
      'Practice writing SQL queries to fetch, filter, group, and join relational data (SELECT, WHERE, JOIN, GROUP BY) for web developers.',
    tags: ['SQL', 'Relational DB', 'JOINs', 'Data Modeling']
  }
};

// ============================================================================
// English Translations for Chapters & Lesson Guides
// ============================================================================
window.CHAPTERS_EN = {
  'ch-1': {
    title: 'Chapter 1: JavaScript Fundamentals & Logic',
    shortTitle: 'Ch 1: JS Fundamentals & Logic',
    description:
      'Build the most important foundation of coding: Variables, Data Types, Math & Modulo operations, String manipulation, Conditional logic (if/else), and Loops (for loop).',
    lesson: {
      overview:
        'Before controlling a webpage, you need to understand how to store data in variables, compute numbers, format text strings, write decision-making conditions (e.g., free shipping for orders over 1,000 THB), and use loops to repeat tasks automatically.',
      mustUse: [
        {
          syntax: 'const / let',
          usage: 'Declare variables to store data (use const by default, and let when the value needs to be reassigned).',
          example: 'const price = 150;\nlet count = 0;'
        },
        {
          syntax: 'Template Literal (`...${x}...`)',
          usage: 'Interpolate variables directly inside strings cleanly using backticks (`).',
          example: 'const msg = `สวัสดีคุณ ${name} ยอดรวม ${total} บาท`;'
        },
        {
          syntax: 'String Methods (.trim, .toLowerCase, .includes, .slice)',
          usage: 'Manipulate text such as trimming whitespace, changing case, checking substrings, or slicing characters.',
          example: '"  Hello JS ".trim().toLowerCase(); // "hello js"'
        },
        {
          syntax: 'if / else if / else & Ternary (? :)',
          usage: 'Evaluate conditions and execute different branches of logic.',
          example: 'if (score >= 80) {\n  return "A";\n} else {\n  return "B";\n}'
        },
        {
          syntax: 'for (let i = 1; i <= n; i++)',
          usage: 'Repeat instructions a specific number of times, such as summing numbers or counting matches.',
          example: 'let sum = 0;\nfor (let i = 1; i <= 5; i++) {\n  sum += i;\n}'
        }
      ],
      examples: [
        {
          title: 'Example 1: Creating a Function to Calculate & Return Formatted Text',
          explanation: 'A function receives parameters, computes the result, and returns the output using the return statement.',
          code: `function calculateTotalText(itemName, price, qty) {
  const total = price * qty;
  return \`สินค้า \${itemName} รวมเป็นเงิน \${total} บาท\`;
}

console.log(calculateTotalText("คีย์บอร์ด", 1200, 2));
// Output: "สินค้า คีย์บอร์ด รวมเป็นเงิน 2400 บาท"`
        },
        {
          title: 'Example 2: Multi-Branch Conditional Logic (if / else if / else)',
          explanation: 'Conditions are checked from top to bottom. Once a condition evaluates to true, its block runs and returns immediately.',
          code: `function getShippingFee(orderAmount) {
  if (orderAmount >= 1000) {
    return 0; // Free shipping
  } else if (orderAmount >= 500) {
    return 30; // Discounted shipping
  } else {
    return 60; // Standard shipping
  }
}`
        },
        {
          title: 'Example 3: Looping & Accumulating Values with Modulo (%)',
          explanation: 'Use a for loop together with the remainder operator (%) to check for even numbers.',
          code: `function sumEvenNumbers(maxNum) {
  let sum = 0;
  for (let i = 1; i <= maxNum; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}`
        }
      ]
    }
  },

  'ch-2': {
    title: 'Chapter 2: Array & Object Data Mastery',
    shortTitle: 'Ch 2: Array & Object',
    description:
      'The core of modern web development: transforming, filtering, searching, sorting, and grouping product lists, user records, and shopping carts with Array & Object methods.',
    lesson: {
      overview:
        'In real web applications, almost all data is stored as Arrays of Objects (such as products, articles, or cart items). Mastering .map(), .filter(), .reduce(), .find(), and .sort() lets you prepare any dataset for rendering on screen.',
      mustUse: [
        {
          syntax: 'array.map(item => ...)',
          usage: 'Transform every element in an Array into a new value (returns a new Array of the same length).',
          example: 'const prices = items.map(item => item.price);'
        },
        {
          syntax: 'array.filter(item => condition)',
          usage: 'Keep only the elements where the condition returns true.',
          example: 'const available = products.filter(p => p.inStock === true);'
        },
        {
          syntax: 'array.reduce((acc, item) => ..., initialValue)',
          usage: 'Accumulate all elements in an Array into a single value, such as a total sum or summary Object.',
          example: 'const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);'
        },
        {
          syntax: 'array.find(item => condition)',
          usage: 'Find and return the first element matching the condition (returns undefined if not found).',
          example: 'const user = users.find(u => u.id === targetId);'
        },
        {
          syntax: '[...array].sort((a, b) => a - b)',
          usage: 'Clone and sort an array (a - b for ascending order, b - a for descending order).',
          example: 'const sorted = [...nums].sort((a, b) => a - b);'
        },
        {
          syntax: 'Object & Spread ({ ...obj, key: newVal })',
          usage: 'Clone and update properties in an Object immutably without mutating the original object.',
          example: 'const updated = { ...user, score: 100 };'
        }
      ],
      examples: [
        {
          title: 'Example 1: Combining .filter() and .map() (Method Chaining)',
          explanation: 'First filter only in-stock products, then map them into formatted price labels.',
          code: `const products = [
  { name: "เมาส์", price: 450, inStock: true },
  { name: "คีย์บอร์ด", price: 1200, inStock: false },
  { name: "แผ่นรองเมาส์", price: 190, inStock: true }
];

const labels = products
  .filter(p => p.inStock)
  .map(p => \`\${p.name} (\${p.price} บาท)\`);

console.log(labels);
// ["เมาส์ (450 บาท)", "แผ่นรองเมาส์ (190 บาท)"]`
        },
        {
          title: 'Example 2: Calculating Shopping Cart Total with .reduce()',
          explanation: 'The second argument to reduce is the initial value (0), and sum accumulates the running total.',
          code: `const cart = [
  { name: "กาแฟ", price: 65, qty: 2 },
  { name: "ครัวซองต์", price: 85, qty: 1 }
];

const totalPrice = cart.reduce((sum, item) => {
  return sum + (item.price * item.qty);
}, 0);

console.log(totalPrice); // 215`
        },
        {
          title: 'Example 3: Grouping Data by Category with .reduce()',
          explanation: 'Use an empty Object {} as the accumulator and group item names under each category key.',
          code: `function groupByCategory(items) {
  return items.reduce((groups, item) => {
    if (!groups[item.category]) {
      groups[item.category] = [];
    }
    groups[item.category].push(item.name);
    return groups;
  }, {});
}`
        }
      ]
    }
  },

  'ch-3': {
    title: 'Chapter 3: Connecting JS to HTML/CSS (DOM Manipulation)',
    shortTitle: 'Ch 3: DOM Manipulation',
    description:
      'Learn how JavaScript controls HTML and CSS on the page: selecting elements, reading/updating text and input values, toggling CSS classes, and dynamically rendering HTML elements.',
    lesson: {
      overview:
        'The DOM (Document Object Model) is the bridge between JavaScript and HTML/CSS. Using DOM methods, your code can select elements on the webpage to update text, change styles, show/hide alerts, or render product cards dynamically.',
      mustUse: [
        {
          syntax: 'document.getElementById("id") / document.querySelector(".class")',
          usage: 'Select a specific HTML element on the page.',
          example: 'const titleEl = document.getElementById("title");\nconst firstBtn = document.querySelector(".btn");'
        },
        {
          syntax: 'element.textContent & input.value',
          usage: 'Read or update text inside normal elements with .textContent, and read/write <input> fields with .value.',
          example: 'titleEl.textContent = "หัวข้อใหม่";\nconst name = inputEl.value;'
        },
        {
          syntax: 'element.classList (.add / .remove / .toggle / .contains)',
          usage: 'Add, remove, or toggle CSS classes on an element to change its visual state.',
          example: 'card.classList.add("active");\ncard.classList.toggle("dark-mode");'
        },
        {
          syntax: 'element.style & element.disabled & setAttribute()',
          usage: 'Change inline styles, enable/disable buttons, or update HTML attributes like href, src, and data-*.',
          example: 'banner.style.display = "none";\nbuyBtn.disabled = true;'
        },
        {
          syntax: 'document.createElement("li") & parent.appendChild(li) / innerHTML',
          usage: 'Create new HTML elements dynamically and insert them into the DOM.',
          example: 'list.innerHTML = items.map(x => `<li>${x}</li>`).join("");'
        }
      ],
      examples: [
        {
          title: 'Example 1: Selecting an Element and Updating Text + CSS Class',
          explanation: 'Use getElementById to grab the status box, then update both its textContent and CSS class.',
          code: `// Assuming HTML has <div id="status-box">Checking...</div>
function showSuccessStatus() {
  const box = document.getElementById("status-box");
  box.textContent = "เชื่อมต่อระบบสำเร็จ!";
  box.classList.add("success");
}`
        },
        {
          title: 'Example 2: Rendering an Array of Items into a <ul> List',
          explanation: 'Map each item in the Array to an <li> HTML string and join them into .innerHTML.',
          code: `const courses = ["HTML5", "CSS3", "JavaScript"];
const listEl = document.getElementById("course-list");

listEl.innerHTML = courses
  .map(course => \`<li class="course-item">\${course}</li>\`)
  .join("");`
        },
        {
          title: 'Example 3: Reading <input> Values and Validating',
          explanation: 'Always use .value to read what the user typed inside an <input> element.',
          code: `function checkEmailInput() {
  const emailInput = document.getElementById("email-input");
  const msgEl = document.getElementById("msg");

  if (!emailInput.value.includes("@")) {
    msgEl.textContent = "อีเมลไม่ถูกต้อง";
  } else {
    msgEl.textContent = "ใช้งานได้";
  }
}`
        }
      ]
    }
  },

  'ch-4': {
    title: 'Chapter 4: User Interaction — Events, Forms & Async',
    shortTitle: 'Ch 4: Events, Forms & Async',
    description:
      'Bring webpages to life with real-time user interaction: click events, live typing inputs, dropdown/checkbox changes, form validation, and asynchronous programming (Promise / async-await).',
    lesson: {
      overview:
        'Interactive websites respond to user actions (Events) — such as clicking a buy button, typing in a search box, checking options, or submitting a form — as well as fetching data asynchronously with async / await.',
      mustUse: [
        {
          syntax: 'element.addEventListener("click", () => { ... })',
          usage: 'Run a callback function whenever the user clicks on the element.',
          example: 'btn.addEventListener("click", () => {\n  count++;\n  display.textContent = count;\n});'
        },
        {
          syntax: 'input.addEventListener("input", () => { ... })',
          usage: 'Trigger immediately every time the user types or deletes characters in an <input>.',
          example: 'searchInput.addEventListener("input", () => {\n  preview.textContent = searchInput.value;\n});'
        },
        {
          syntax: 'selectOrCheckbox.addEventListener("change", () => { ... })',
          usage: 'Run when the user changes a <select> option or toggles a checkbox.',
          example: 'agreeChk.addEventListener("change", () => {\n  submitBtn.disabled = !agreeChk.checked;\n});'
        },
        {
          syntax: 'form.addEventListener("submit", (e) => { e.preventDefault(); })',
          usage: 'Prevent the browser from reloading the page on form submission so JS can validate the form.',
          example: 'form.addEventListener("submit", (e) => {\n  e.preventDefault();\n  validateForm();\n});'
        },
        {
          syntax: 'async / await & try / catch',
          usage: 'Wait for asynchronous Promises to resolve and handle errors safely.',
          example: 'try {\n  const data = await fetchApi();\n} catch (err) {\n  showError();\n}'
        }
      ],
      examples: [
        {
          title: 'Example 1: Handling Click Events to Update Counter State',
          explanation: 'Keep the counter in a variable and update .textContent on every click.',
          code: `let count = 0;
const countEl = document.getElementById("count");
const incBtn = document.getElementById("inc-btn");

incBtn.addEventListener("click", () => {
  count++;
  countEl.textContent = String(count);
});`
        },
        {
          title: 'Example 2: Live Character Counter While Typing (Input Event)',
          explanation: 'Listen to the "input" event to check text length and toggle an error class when exceeding the limit.',
          code: `const bioInput = document.getElementById("bio-input");
const counterEl = document.getElementById("counter");

bioInput.addEventListener("input", () => {
  const len = bioInput.value.length;
  counterEl.textContent = \`\${len}/20\`;
  counterEl.classList.toggle("error", len > 20);
});`
        },
        {
          title: 'Example 3: Fetching Data with async / await and Loading State',
          explanation: 'Show a loading message first, then await the API call inside a try / catch block.',
          code: `async function loadProfile(apiCall) {
  const box = document.getElementById("profile-box");
  box.textContent = "กำลังโหลด...";
  try {
    const user = await apiCall();
    box.textContent = \`สวัสดีคุณ \${user.name}\`;
  } catch (err) {
    box.textContent = "ไม่สามารถโหลดข้อมูลได้";
  }
}`
        }
      ]
    }
  },

  'ch-5': {
    title: 'Chapter 5: Building Real Web Systems — Mini Components & Full Web Apps',
    shortTitle: 'Ch 5: Real Web Systems',
    description:
      'The capstone chapter! Combine JavaScript logic, Arrays/Objects, DOM manipulation, and Events to build complete UI components and real-world mini web applications.',
    lesson: {
      overview:
        'Real web applications follow the "State -> Render" pattern: keep your application data in state variables (like a todo list or shopping cart array), update the state when the user interacts, and call a render() function to synchronize the DOM with the latest state.',
      mustUse: [
        {
          syntax: 'State -> Render Pattern',
          usage: 'Separate your data state from the DOM rendering function so your UI stays predictable and easy to maintain.',
          example: 'let cart = [];\nfunction addToCart(item) {\n  cart.push(item);\n  renderCart();\n}'
        },
        {
          syntax: 'Modal / Accordion / Tabs Toggle',
          usage: 'Use classList.add("hidden"), classList.remove("hidden"), or .toggle("active") to control interactive UI components.',
          example: 'modal.classList.remove("hidden"); // Open modal'
        },
        {
          syntax: 'Live Filter & Sort Component',
          usage: 'Filter and sort your data array based on user search/select inputs before rendering to the DOM.',
          example: 'const filtered = items.filter(i => i.name.toLowerCase().includes(q));'
        },
        {
          syntax: 'Pagination (.slice)',
          usage: 'Split a dataset into pages using array.slice(start, start + pageSize).',
          example: 'const start = (page - 1) * pageSize;\nconst pageData = allData.slice(start, start + pageSize);'
        },
        {
          syntax: 'Dynamic List Item with Event Listener',
          usage: 'Create list items and attach click handlers so each item can be toggled or deleted interactively.',
          example: 'const li = document.createElement("li");\nli.addEventListener("click", () => li.classList.toggle("completed"));'
        }
      ],
      examples: [
        {
          title: 'Example 1: Standard Web App Architecture (State -> Render)',
          explanation: 'Whenever a new item is added to the cart array, call renderCart() to update both the list and total price.',
          code: `let cart = [];

function renderCart() {
  const listEl = document.getElementById("cart-list");
  const totalEl = document.getElementById("cart-total");

  listEl.innerHTML = cart.map(item => \`<li>\${item.name} - \${item.price} บาท</li>\`).join("");
  const sum = cart.reduce((acc, item) => acc + item.price, 0);
  totalEl.textContent = String(sum);
}

function addItem(name, price) {
  cart.push({ name, price });
  renderCart();
}`
        },
        {
          title: 'Example 2: Building a Pagination Component',
          explanation: 'Calculate the start index from the page number, then use .slice() to render only that page.',
          code: `const ALL_ITEMS = ["ชิ้น 1", "ชิ้น 2", "ชิ้น 3", "ชิ้น 4", "ชิ้น 5"];
const PAGE_SIZE = 2;

function showPage(pageNumber) {
  const start = (pageNumber - 1) * PAGE_SIZE;
  const currentItems = ALL_ITEMS.slice(start, start + PAGE_SIZE);
  document.getElementById("list").innerHTML = currentItems
    .map(item => \`<li>\${item}</li>\`)
    .join("");
}`
        },
        {
          title: 'Example 3: Counting Remaining Uncompleted Todo Items',
          explanation: 'Use the CSS selector .todo-item:not(.completed) to count only active tasks.',
          code: `function updateRemaining() {
  const left = document.querySelectorAll(".todo-item:not(.completed)").length;
  document.getElementById("remaining-count").textContent = String(left);
}`
        }
      ]
    }
  }
};

// ============================================================================
// English Titles for All 175 Practice Problems (ch1-01 to ch5-35)
// ============================================================================
window.PROBLEM_TITLES_EN = {
  // Chapter 1 (35)
  'ch1-01': 'Add Two Numbers Together',
  'ch1-02': 'Calculate Rectangle Area',
  'ch1-03': 'Convert Minutes to Seconds',
  'ch1-04': 'Create a User Greeting Message',
  'ch1-05': 'Calculate Total Price and Format Price Tag',
  'ch1-06': 'Check if a Number is Even (Modulo %)',
  'ch1-07': 'Check Minimum Age Requirement (Comparison)',
  'ch1-08': 'Count Characters in a String (.length)',
  'ch1-09': 'Convert Coupon Code to Uppercase',
  'ch1-10': 'Sanitize Username (trim & toLowerCase)',
  'ch1-11': 'Combine First Name and Last Name',
  'ch1-12': 'Calculate Change from a Purchase',
  'ch1-13': 'Check if a Number is Positive, Negative, or Zero',
  'ch1-14': 'Find the Greater of Two Numbers',
  'ch1-15': 'Check if a Sentence Contains a Keyword (.includes)',
  'ch1-16': 'Get the First Character of a String',
  'ch1-17': 'Get the Last Character of a String',
  'ch1-18': 'Repeat a String N Times (.repeat)',
  'ch1-19': 'Sum Numbers from 1 to n Using a Loop',
  'ch1-20': 'Count Even Numbers from 1 to n',
  'ch1-21': 'Grade Calculator from Exam Score (A, B, C, D, F)',
  'ch1-22': 'Calculate Shipping Fee by Order Total and Zone',
  'ch1-23': 'Calculate Net Price After Member Discount',
  'ch1-24': 'Convert Article Title to URL Slug',
  'ch1-25': 'Count English Vowels (a, e, i, o, u)',
  'ch1-26': 'Reverse a String',
  'ch1-27': 'Leap Year Checker',
  'ch1-28': 'Sum Numbers Divisible by 3 from 1 to n',
  'ch1-29': 'Mask Credit Card Number Except Last 4 Digits',
  'ch1-30': 'Calculate BMI and Health Category',
  'ch1-31': 'Palindrome Checker (Case & Space Insensitive)',
  'ch1-32': 'Generate FizzBuzz Array from 1 to n',
  'ch1-33': 'Progressive Tier Electricity Bill Calculator',
  'ch1-34': 'Convert Sentence to Title Case',
  'ch1-35': 'Prime Number Checker',

  // Chapter 2 (35)
  'ch2-01': 'Count Total Elements in an Array',
  'ch2-02': 'Get the First Element of an Array',
  'ch2-03': 'Get the Last Element of an Array',
  'ch2-04': 'Double Every Number in an Array (.map)',
  'ch2-05': 'Filter Only Even Numbers from an Array (.filter)',
  'ch2-06': 'Filter Numbers Greater Than or Equal to Minimum',
  'ch2-07': 'Sum All Numbers in an Array (.reduce)',
  'ch2-08': 'Check if an Array Contains a Target Item (.includes)',
  'ch2-09': 'Join Words in an Array into a Sentence (.join)',
  'ch2-10': 'Extract Username from a User Object',
  'ch2-11': 'Extract Product Names from an Array of Objects (.map)',
  'ch2-12': 'Create a Product Object with inStock Status',
  'ch2-13': 'Find the First Number Greater Than 100 (.find)',
  'ch2-14': 'Check if All Numbers Are Positive (.every)',
  'ch2-15': 'Check if Any Budget Product Exists (.some)',
  'ch2-16': 'Merge Two Arrays Together (Spread / concat)',
  'ch2-17': 'Get the First n Elements of an Array (.slice)',
  'ch2-18': 'Convert All Names in an Array to Uppercase',
  'ch2-19': 'Count Words Longer Than 3 Characters',
  'ch2-20': 'Get All Property Keys of an Object (Object.keys)',
  'ch2-21': 'Filter In-Stock Products and Format Price Labels (filter + map)',
  'ch2-22': 'Calculate Total Cart Price (price × qty)',
  'ch2-23': 'Find User Object by ID (.find)',
  'ch2-24': 'Sort Numbers Ascending Without Mutating Original Array',
  'ch2-25': 'Sort Products by Price High to Low (Sort Objects)',
  'ch2-26': 'Remove Duplicate Values from an Array (Unique Array)',
  'ch2-27': 'Find Min and Max Values in an Array as { min, max }',
  'ch2-28': 'Update User Score by ID Immutably (.map + Spread)',
  'ch2-29': 'Case-Insensitive Product Search Filter',
  'ch2-30': 'Calculate Average Score from an Array',
  'ch2-31': 'Generate Cart Summary Object (totalItems, totalPrice, itemNames)',
  'ch2-32': 'Group Product Names by Category (Group By Category)',
  'ch2-33': 'Count Word Frequency in an Array (Word Frequency Counter)',
  'ch2-34': 'Flatten Nested Array and Sort Ascending',
  'ch2-35': 'Filter Passing Students and Sort Names by Score Descending',

  // Chapter 3 (35)
  'ch3-01': 'Change Heading Text in #title with textContent',
  'ch3-02': 'Read Text Content from #message',
  'ch3-03': 'Display User Greeting Inside #greeting',
  'ch3-04': 'Add "active" Class to #menu-item (classList.add)',
  'ch3-05': 'Remove "hidden" Class to Show Alert Box (classList.remove)',
  'ch3-06': 'Toggle "dark" Class on #card (classList.toggle)',
  'ch3-07': 'Check if #panel Has "open" Class (classList.contains)',
  'ch3-08': 'Change Text Color of #status with .style.color',
  'ch3-09': 'Hide #banner with style.display = "none"',
  'ch3-10': 'Show #banner with style.display = "block"',
  'ch3-11': 'Read Value Typed in #username-input',
  'ch3-12': 'Set Value Inside #search-input',
  'ch3-13': 'Disable Button #submit-btn (disabled = true)',
  'ch3-14': 'Enable Button #submit-btn (disabled = false)',
  'ch3-15': 'Update URL of #profile-link (setAttribute / href)',
  'ch3-16': 'Update Image src and alt Attributes on #avatar',
  'ch3-17': 'Count All .item Elements on the Page (querySelectorAll)',
  'ch3-18': 'Clear All HTML Content Inside #container',
  'ch3-19': 'Read data-id Attribute from #product-card (dataset)',
  'ch3-20': 'Set data-status Attribute on #order-box (dataset)',
  'ch3-21': 'Update Profile Card (#name, #role, #points)',
  'ch3-22': 'Toggle Dark/Light Theme and Update Status Label',
  'ch3-23': 'Create and Append New <li> to #todo-list (createElement & appendChild)',
  'ch3-24': 'Render Course List Array into #course-list',
  'ch3-25': 'Control Buy Button and Stock Label Based on Quantity',
  'ch3-26': 'Add "highlight" Class to All .item Elements (forEach)',
  'ch3-27': 'Update Progress Bar Width and Text (#progress-fill & #progress-text)',
  'ch3-28': 'Display Notification Message and Toggle success / error Classes',
  'ch3-29': 'Remove Last Item from #item-list (lastElementChild.remove)',
  'ch3-30': 'Sum All .price Elements in DOM and Display in #total-price',
  'ch3-31': 'Render Product Cards with Empty State Handling',
  'ch3-32': 'Filter <li> Items in DOM by Hiding Non-Matching Items',
  'ch3-33': 'Render User Table Rows <tr><td> into #user-tbody',
  'ch3-34': 'Switch Active Tab and Content Panel by tabId (Tabs Controller)',
  'ch3-35': 'Validate Form Inputs in DOM and Show Status with CSS Classes',

  // Chapter 4 (35)
  'ch4-01': 'Click #btn to Change #output Text to "คลิกแล้ว!"',
  'ch4-02': 'Click #inc-btn to Increment Counter in #count by 1',
  'ch4-03': 'Click #like-btn to Toggle "liked" Class',
  'ch4-04': 'Click #toggle-btn to Show/Hide #secret-box',
  'ch4-05': 'Live Mirror Input from #name-input into #mirror-text (Input Event)',
  'ch4-06': 'Display Live Character Count of #text-input in #char-len',
  'ch4-07': 'Click #clear-btn to Clear #msg-input Value',
  'ch4-08': 'Click #copy-btn to Copy Text from #source-input to #result',
  'ch4-09': 'Handle Dropdown Selection Change on <select id="city-select">',
  'ch4-10': 'Check #agree-chk Checkbox to Enable #next-btn',
  'ch4-11': 'Click #double-btn to Double the Number in #num-box',
  'ch4-12': 'Click #upper-btn to Uppercase Text in #text-box',
  'ch4-13': 'Click Color Buttons to Update data-color on #color-preview',
  'ch4-14': 'Click #calc-btn to Add Two Inputs (#num1 + #num2)',
  'ch4-15': 'Prevent Page Reload on Form Submit (event.preventDefault)',
  'ch4-16': 'Click #toggle-pwd to Toggle Password Visibility (password <-> text)',
  'ch4-17': 'Click #once-btn to Show "กำลังส่ง..." and Disable Button Immediately',
  'ch4-18': 'Create a Promise Resolving to "โหลดสำเร็จ" (Promise.resolve)',
  'ch4-19': 'Use async / await to Await getNumberAsync() and Multiply by 10',
  'ch4-20': 'Parse JSON String and Extract User Name (JSON.parse)',
  'ch4-21': 'Interactive Counter: Increment, Decrement (Min 0), and Reset',
  'ch4-22': 'Live Character Counter with Over-Limit Warning (> 20 chars)',
  'ch4-23': 'Login Form Validation (Email with @ and Password >= 6 chars)',
  'ch4-24': 'Real-Time Password & Confirm Password Match Checker',
  'ch4-25': 'Live Total Price Calculation When Quantity Changes (#qty-input)',
  'ch4-26': 'Click .tab-btn to Set Active Class Only on Clicked Button',
  'ch4-27': 'Click #add-btn to Append New <li> Item from #item-input',
  'ch4-28': 'Click Any .removable-item to Remove It from DOM',
  'ch4-29': 'Fetch User Data Asynchronously with try / catch Error Handling',
  'ch4-30': 'Click #select-all-btn to Check All .task-chk Checkboxes',
  'ch4-31': 'Complete Interactive Tabs & Content Panels System',
  'ch4-32': 'Async Data Loader with Loading State and Error Handling on DOM',
  'ch4-33': 'Apply Discount Coupon Code on #apply-coupon-btn Click',
  'ch4-34': 'Use Event Delegation on #item-container to Highlight Clicked Item',
  'ch4-35': 'Calculate Total Add-On Price from Checked Checkboxes',

  // Chapter 5 (35)
  'ch5-01': 'Notification Badge Component',
  'ch5-02': 'Modal Dialog Open & Close Component',
  'ch5-03': 'FAQ Accordion Toggle Component',
  'ch5-04': 'Product Image Gallery Switcher',
  'ch5-05': 'Product Size Selector (S, M, L, XL)',
  'ch5-06': 'Restaurant Tip & Total Bill Calculator',
  'ch5-07': 'Celsius to Fahrenheit Temperature Converter UI',
  'ch5-08': 'THB to USD Currency Converter UI',
  'ch5-09': 'Generate Avatar Initials from Full Name',
  'ch5-10': 'Article Font Size Controller (+2px / -2px)',
  'ch5-11': 'Product Catalog Grid / List View Switcher',
  'ch5-12': 'Copy Discount Code Button with Status Feedback',
  'ch5-13': 'Visitor Counter & Welcome Message Banner',
  'ch5-14': 'Cookie Consent Banner Component',
  'ch5-15': 'Interactive 1–5 Star Rating Component',
  'ch5-16': 'Loyalty Points to Discount Redeemer (10 pts = 1 THB)',
  'ch5-17': 'Password Strength Meter Component',
  'ch5-18': 'Webpage Language Switcher Component (TH / EN)',
  'ch5-19': 'Live Article Word Counter Component',
  'ch5-20': 'Reset All Search Filters Component',
  'ch5-21': 'Live Topic Search Filter Component',
  'ch5-22': 'Product Category Filter Component',
  'ch5-23': 'Product Price Sort UI (Low-to-High / High-to-Low)',
  'ch5-24': 'Looping Banner Carousel Component (Next / Prev)',
  'ch5-25': 'Pagination Component (2 Items Per Page)',
  'ch5-26': 'Unique Tag Manager Component',
  'ch5-27': 'Quick Note Pad with Total Counter',
  'ch5-28': 'Live Poll Voting & Total Votes Component',
  'ch5-29': '0% Monthly Installment Calculator UI',
  'ch5-30': 'Bookmark Toggle List Component',
  'ch5-31': 'Project 1: Interactive Todo List Web App',
  'ch5-32': 'Project 2: Expense Tracker & Total Calculator Web App',
  'ch5-33': 'Project 3: Online Shopping Cart Web App',
  'ch5-34': 'Project 4: Interactive Quiz & Score Summary Web App',
  'ch5-35': 'Project 5: Contact Manager with Live Search Web App'
};

// ============================================================================
// Smart Thai -> English Translator for Problem Descriptions, Requirements, Hints & Test Names
// Preserves all <code>...</code> blocks and quoted string literals ("...")
// ============================================================================
const RAW_TH_TO_EN = [
  ['ที่รับตัวเลข 2 ตัว แล้วคืนค่าผลบวกของตัวเลขทั้งสอง', 'that takes 2 numbers and returns their sum.'],
  ['เพื่อคำนวณพื้นที่สี่เหลี่ยมผืนผ้า (กว้าง × ยาว)', 'to calculate the area of a rectangle (width × height).'],
  ['เพื่อแปลงจำนวนนาทีให้เป็นวินาที', 'to convert minutes into seconds.'],
  ['ที่รับชื่อผู้ใช้ แล้วคืนค่าข้อความทักทายในรูปแบบที่กำหนด', 'that takes a username and returns the formatted greeting string.'],
  ['โดยไม่แก้ลำดับถาวรหากสลับไปมา', 'without permanently mutating the original order'],
  ['หน้าไปหลังเหมือนกับหลังมาหน้า', 'the same forwards and backwards'],
  ['เปรียบเทียบกับข้อความที่กลับด้าน', 'Compare with the reversed string'],
  ['จำนวนครั้งที่แต่ละคำปรากฏ', 'how many times each word appears'],
  ['ตัวเลขที่ซ้อนกันหลายชั้น', 'deeply nested numbers'],
  ['เพื่อยุบทุกระดับชั้น', 'to flatten all nested levels'],
  ['โดยไม่แก้ไข Array ต้นฉบับ', 'without mutating the original Array'],
  ['โดยไม่แก้ Array ต้นฉบับ', 'without mutating the original Array'],
  ['โดยไม่สนใจตัวพิมพ์เล็ก-ใหญ่', 'case-insensitively'],
  ['ไม่สนตัวพิมพ์เล็ก-ใหญ่', 'case-insensitively'],
  ['ไม่สนใจพิมพ์เล็ก-ใหญ่', 'case-insensitively'],
  ['ไม่สนพิมพ์เล็ก-ใหญ่', 'case-insensitively'],
  ['ไม่สนพิมพ์เล็ก', 'case-insensitively'],
  ['ตัดช่องว่างหน้า-หลังออก', 'trim leading and trailing whitespace'],
  ['ตัดช่องว่างหน้า-หลัง', 'trim leading and trailing whitespace'],
  ['ลบช่องว่างทั้งหมดออก', 'remove all whitespace'],
  ['ค่าไฟตามจำนวนหน่วยแบบขั้นบันได', 'progressive electricity bill by units'],
  ['กับตัวมันเองที่หารลงตัว', 'and itself as divisors'],
  ['คลาสอื่นที่มีอยู่เดิมไม่ถูกลบหายไป', 'existing classes are preserved'],
  ['ครั้งติดต่อกันกลับสู่สถานะเดิม', 'times in a row returns to the initial state'],
  ['แต่ละตัวเลือกตรงตามจำนวนครั้งที่โหวต', 'each option matches the number of votes'],
  ['รีเซ็ตจำนวนชิ้นกับราคารวม', 'reset both item count and total price'],
  ['คลิกซ้ำเพื่อยกเลิกสถานะเสร็จ', 'click again to unmark completed status'],
  ['จำนวนรายการไม่เปลี่ยนแปลง', 'item count remains unchanged'],
  ['ห้ามเพิ่มซ้ำกับที่มีอยู่', 'do not add duplicates'],
  ['กดบันทึกต้องไม่เพิ่มจำนวน', 'clicking save must not increase the count'],
  ['เพิ่มคะแนนตัวเลือกที่ถูกโหวตทีละ', 'increment the voted option by'],
  ['สลับการเก็บชื่อบทความ', 'toggle bookmarking the article title'],
  ['จำนวนงานที่ยังไม่เสร็จ', 'number of remaining tasks'],
  ['เลื่อนไปยังคำถามข้อที่', 'advance to question'],
  ['ตัวท้ายให้วนกลับตัวแรก', 'wrap around to the first item'],
  ['อยู่ที่ตัวแรกให้วนไปตัวท้าย', 'wrap around to the last item'],
  ['คำนวณผลคูณ', 'Calculate the product'],
  ['พื้นที่สี่เหลี่ยมผืนผ้า', 'rectangle area'],
  ['พื้นที่ที่คำนวณ', 'calculated area'],
  ['ด้านใดด้านหนึ่ง', 'either side'],
  ['บวกเลขจำนวนเต็มบวก', 'Add positive integers'],
  ['บวกเลขที่มีค่า', 'Add number with'],
  ['บวกเลขติดลบ', 'Add negative numbers'],
  ['เพื่อแปลงเวลา', 'to convert time'],
  ['จำนวนวินาที', 'number of seconds'],
  ['ข้อความทักทาย', 'greeting message'],
  ['การต่อข้อความ', 'string concatenation'],
  ['ครอบข้อความ', 'wrap the string'],
  ['แทรกตัวแปรด้วย', 'interpolate variables with'],
  ['ทักทายชื่อภาษาอังกฤษ', 'Greet English name'],
  ['ทักทายคุณ', 'Greet'],
  ['ที่คำนวณราคารวม', 'that calculates total price'],
  ['ส่งคืนข้อความ', 'return the string'],
  ['หารเอาเศษ', 'modulo remainder'],
  ['จะเหลือเศษ', 'leaves a remainder of'],
  ['หารด้วย', 'divisible by'],
  ['หารลงตัว', 'divisible evenly'],
  ['ไม่ลงตัว', 'not divisible'],
  ['ปีขึ้นไป', 'years or older'],
  ['ปีพอดี', 'years old exactly'],
  ['จำนวนตัวอักษร', 'character count'],
  ['ตัวเลขจำนวนตัวอักษร', 'number of characters'],
  ['ทุกตัวมีพร็อพเพอร์ตี้', 'every string has property'],
  ['รวมช่องว่าง', 'including spaces'],
  ['ข้อความว่างให้', 'for empty string,'],
  ['ข้อความว่าง', 'empty string'],
  ['แปลงตัวอักษร', 'convert characters'],
  ['เรียกเมธอดต่อกัน', 'chain methods together'],
  ['นามสกุลคั่นด้วยช่องว่าง', 'last name separated by a space'],
  ['โดยมีเว้นวรรคคั่นกลาง', 'with a space in between'],
  ['เชื่อมชื่อภาษาไทยถูกต้อง', 'Combine Thai name correctly'],
  ['เชื่อมชื่อภาษาอังกฤษถูกต้อง', 'Combine English name correctly'],
  ['เชื่อมชื่อสั้นๆ', 'Combine short name'],
  ['ราคาสินค้า', 'product price'],
  ['จ่ายไม่พอให้', 'if payment is insufficient,'],
  ['จ่ายไม่พอ', 'insufficient payment'],
  ['จ่ายพอดี', 'exact payment'],
  ['จ่ายเงิน', 'paid amount'],
  ['เงินทอน', 'change'],
  ['ตรวจสอบค่า', 'Check value'],
  ['ตัวเลขที่มีค่า', 'number with value'],
  ['เปรียบเทียบค่าเท่ากัน', 'Compare equal values'],
  ['เปรียบเทียบค่า', 'Compare values'],
  ['เปรียบเทียบ', 'Compare'],
  ['เท่ากันให้', 'if equal,'],
  ['ตัวใดก็', 'either one'],
  ['พบคำภาษาอังกฤษ', 'Found English word'],
  ['ไม่พบคำว่า', 'Did not find word'],
  ['พบคำว่า', 'Found word'],
  ['มีคำว่า', 'contains word'],
  ['บนข้อความ', 'on the string'],
  ['ดึงตัวอักษรตำแหน่งที่', 'Get character at index'],
  ['ตัวอักษรตัวแรกสุดของ', 'the first character of'],
  ['ตัวอักษรตัวสุดท้ายของ', 'the last character of'],
  ['ตัวแรกคือ', 'first item is'],
  ['ตัวสุดท้ายคือ', 'last item is'],
  ['ตัวท้ายคือ', 'last item is'],
  ['ซ้ำติดกันจำนวน', 'repeated'],
  ['ต่อข้อความ', 'concatenate string'],
  ['บวกสะสมค่า', 'accumulate sum'],
  ['มีเลขคู่', 'has even numbers'],
  ['นับตัวเลขที่หารด้วย', 'Count numbers divisible by'],
  ['สร้างตัวแปร', 'Create a variable'],
  ['เกรดตามเกณฑ์คะแนนดังนี้', 'grade based on the following score criteria'],
  ['คะแนนมากไปน้อย', 'highest to lowest score'],
  ['ค่าส่งสินค้า', 'shipping fee'],
  ['ส่งฟรีทุกพื้นที่', 'free shipping for all zones'],
  ['ต่างจังหวัด', 'upcountry'],
  ['คิดค่าส่ง', 'shipping fee is'],
  ['กรุงเทพฯ', 'Bangkok'],
  ['ซื้อครบ', 'Order reaches'],
  ['ส่งฟรี', 'free shipping'],
  ['ราคาสุทธิ', 'net price'],
  ['ไม่ใช่สมาชิก', 'Non-member'],
  ['นอกนั้นไม่ลดราคา', 'otherwise no discount'],
  ['เพื่อแปลงข้อความ', 'to convert text'],
  ['คั่นคำด้วยขีดกลาง', 'join words with hyphens'],
  ['เปลี่ยนช่องว่าง', 'replace spaces'],
  ['แม้มีหลายช่องติดกัน', 'even with multiple consecutive spaces'],
  ['เพื่อยุบช่องว่าง', 'to collapse spaces'],
  ['เพียงตัวเดียว', 'only one'],
  ['ขีดเดียว', 'single hyphen'],
  ['จำนวนสระ', 'vowel count'],
  ['ก่อนตรวจสอบ', 'before checking'],
  ['นับตัวอักษรที่อยู่', 'count characters matching'],
  ['ไม่มีสระเลย', 'no vowels at all'],
  ['มีสระ', 'has vowels'],
  ['ข้อความที่เรียงตัวอักษรย้อนกลับ', 'reversed string'],
  ['หลังมาหน้า', 'backwards'],
  ['ท้ายมาหน้า', 'from end to start'],
  ['กลับด้านด้วย', 'reverse using'],
  ['กลับด้าน', 'reverse'],
  ['ปีอธิกสุรทินคือปีที่หารด้วย', 'A leap year is divisible by'],
  ['ปีอธิกสุรทินเสมอ', 'always a leap year'],
  ['ที่บวกสะสมเฉพาะตัวเลข', 'that sums only numbers'],
  ['ไม่มีเลขที่หาร', 'no numbers divisible'],
  ['ที่แทนที่ตัวเลขด้านหน้า', 'that masks leading digits'],
  ['ตัวท้ายด้วย', 'last digits using'],
  ['ตัวตามด้วย', 'characters followed by'],
  ['ตัวสุดท้าย', 'last digits'],
  ['ตัวท้าย', 'last digits'],
  ['เกณฑ์สุขภาพ', 'health category'],
  ['ตามลำดับ', 'respectively'],
  ['ลบช่องว่างด้วย', 'remove spaces using'],
  ['ลบช่องว่าง', 'remove spaces'],
  ['เทียบว่าเท่ากัน', 'check equality'],
  ['ที่สร้างข้อความเรียง', 'that builds a sequence'],
  ['ตัวเลขปกติ', 'normal number'],
  ['เชื่อมทุกค่าด้วย', 'join all values with'],
  ['ลงตัวก่อนเสมอ', 'divisibility first'],
  ['เก็บผลลัพธ์ลง', 'push results into'],
  ['หน่วยแรก', 'first units'],
  ['หน่วยถัดมา', 'next units'],
  ['หน่วยที่', 'units'],
  ['หน่วยละ', 'per unit'],
  ['ขั้นแรก', 'first tier'],
  ['ที่แปลงตัวอักษรแรก', 'that capitalizes the first letter'],
  ['ตัวอักษรที่เหลือ', 'remaining characters'],
  ['แยกคำด้วยช่องว่าง', 'split words by spaces'],
  ['แยกคำด้วย', 'split words using'],
  ['แปลงแต่ละคำด้วย', 'transform each word using'],
  ['จำนวนเฉพาะเพราะ', 'prime because'],
  ['จำนวนเฉพาะ', 'prime number'],
  ['จำนวนเต็มที่', 'integer'],
  ['มีตัวใดหาร', 'any number divides'],
  ['เลขติดลบ', 'negative numbers'],
  ['จำนวนสมาชิก', 'number of elements'],
  ['พร็อพเพอร์ตี้', 'property'],
  ['สมาชิกตัวแรกสุดของ', 'the first element of'],
  ['สมาชิกตัวสุดท้ายของ', 'the last element of'],
  ['สมาชิกทุกตัวใน', 'every element in'],
  ['สมาชิกตัวแรก', 'first element'],
  ['ดึงค่าตำแหน่ง', 'access index'],
  ['ใหม่โดยนำตัวเลขทุกตัว', 'by multiplying every number'],
  ['เพื่อแปลงค่าทุกตัว', 'to transform every element'],
  ['ใหม่เฉพาะตัวเลขที่', 'with only numbers that'],
  ['ร่วมกับเงื่อนไข', 'with the condition'],
  ['ไม่มีเลขคู่', 'no even numbers'],
  ['เฉพาะตัวเลขที่มีค่า', 'only numbers with value'],
  ['กรองค่าที่', 'filter values that'],
  ['เพื่อหาผลรวม', 'to calculate the sum'],
  ['ตัวเลขทุกตัว', 'all numbers'],
  ['ค้นหาตัวเลข', 'find the number'],
  ['ที่นำคำแต่ละคำ', 'that joins each word'],
  ['มาต่อกันโดยคั่นด้วยช่องว่าง', 'separated by spaces'],
  ['ชื่อสินค้าอย่างเดียว', 'product names only'],
  ['ดึงชื่อสินค้า', 'Extract product names'],
  ['ใหม่ที่มีข้อมูลเดิม', 'containing existing properties'],
  ['เพื่อหาตัวเลขตัวแรก', 'to find the first number'],
  ['ไม่มีเลยให้', 'if none found,'],
  ['ไม่มีตัวใด', 'none match'],
  ['มีค่าติดลบ', 'has negative number'],
  ['มีราคาสินค้า', 'has product price'],
  ['ที่นำสมาชิก', 'that combines elements'],
  ['ที่แปลงข้อความทุกตัว', 'that converts all strings'],
  ['ที่มีความยาว', 'with length'],
  ['กรองคำที่', 'filter words that'],
  ['นับจำนวนด้วย', 'count using'],
  ['ไม่มีคำที่ยาว', 'no words longer than'],
  ['คำที่ยาว', 'words longer than'],
  ['ที่คัดเฉพาะสินค้าที่', 'that filters products where'],
  ['คัดเฉพาะสินค้าพร้อมขาย', 'Filter in-stock products'],
  ['จัดรูปแบบถูกต้อง', 'formatted correctly'],
  ['หมดทุกชิ้น', 'all out of stock'],
  ['ที่รับรายการสินค้า', 'that takes cart items'],
  ['คำนวณราคารวม', 'calculate total price'],
  ['นำมารวมกัน', 'sum them up'],
  ['ตะกร้าว่างให้', 'for empty cart,'],
  ['ตะกร้าว่าง', 'empty cart'],
  ['ใหม่ที่เรียงตัวเลข', 'with sorted numbers'],
  ['เรียงเลขติดลบ', 'Sort negative numbers'],
  ['เพื่อเรียงสินค้าตาม', 'to sort products by'],
  ['แพงไปถูก', 'highest to lowest price'],
  ['ถูกไปแพง', 'lowest to highest price'],
  ['เรียงสินค้า', 'Sort products'],
  ['สินค้าชิ้นเดียวแต่หลายจำนวน', 'Single item with multiple quantity'],
  ['สินค้าชิ้นเดียว', 'Single product'],
  ['ที่ลบสมาชิกที่ซ้ำกันออก', 'that removes duplicate elements'],
  ['โดยรักษาลำดับเดิมไว้', 'preserving original order'],
  ['จะเก็บเฉพาะค่าที่ไม่ซ้ำกัน', 'stores only unique values'],
  ['โดยที่คนอื่นคงเดิม', 'keeping other users unchanged'],
  ['ข้อมูลทุกคนคงเดิม', 'all users remain unchanged'],
  ['ที่กรองสินค้าที่', 'that filters products'],
  ['ค้นหาคำที่ไม่มีเลย', 'Search for non-existent keyword'],
  ['ค้นหาคำที่ไม่มี', 'Search for non-existent keyword'],
  ['ค้นหาด้วยช่องว่าง', 'Search with empty space'],
  ['ค้นหาด้วยคำว่าง', 'Search with empty string'],
  ['ค้นหาด้วย', 'Search with'],
  ['คะแนนเฉลี่ย', 'average score'],
  ['ผลรวมหารด้วยจำนวนสมาชิก', 'sum divided by element count'],
  ['หาผลรวมด้วย', 'find the sum using'],
  ['ค่าเฉลี่ยคือ', 'average is'],
  ['โดยมีค่าเริ่มต้น', 'with initial value'],
  ['สรุปตะกร้า', 'Summarize cart'],
  ['ครบทั้งจำนวนชิ้น', 'including total items'],
  ['ชื่อหมวดหมู่', 'category name'],
  ['จัดกลุ่มสินค้า', 'Group products'],
  ['หมวดเดียว', 'Single category'],
  ['การนับเพิ่มทีละ', 'increment count by'],
  ['นับความถี่ผลไม้', 'Count fruit frequency'],
  ['คัดเฉพาะคนที่', 'filter students who'],
  ['ชื่อนักเรียน', 'student names'],
  ['คัดคนผ่าน', 'Filter passing students'],
  ['คะแนนสูงสุดลงมา', 'highest score down'],
  ['ใครผ่านเกณฑ์เลย', 'anyone passing'],
  ['อ่านข้อความเริ่มต้น', 'Read initial text'],
  ['ต้องอ่านค่าใหม่', 'must read updated text'],
  ['ยินดีต้อนรับคุณ', 'Welcome'],
  ['เรียกซ้ำไม่ทำให้เกิดปัญหา', 'calling repeatedly works safely'],
  ['ยังอยู่ครบ', 'remain intact'],
  ['สีข้อความ', 'text color'],
  ['ที่รับเข้ามา', 'passed in'],
  ['เปลี่ยนสี', 'Change color'],
  ['ไม่ถูกลบทิ้ง', 'is not deleted'],
  ['แบนเนอร์ยังคงอยู่เหมือนเดิม', 'banner element remains in DOM'],
  ['อ่านค่าเริ่มต้น', 'Read initial value'],
  ['ปุ่มไม่สูญหาย', 'button remains in DOM'],
  ['เพื่อปลดล็อกปุ่ม', 'to enable the button'],
  ['ให้กลับมาคลิก', 'so it can be clicked again'],
  ['ค่าแอตทริบิวต์', 'attribute value'],
  ['ตั้งค่าแอตทริบิวต์', 'Set attribute'],
  ['แอตทริบิวต์', 'attribute'],
  ['รูปที่สอง', 'Second image'],
  ['ข้อมูลบนการ์ดโปรไฟล์ทั้ง', 'profile card fields at all'],
  ['ซ้ำด้วยข้อมูลชุดใหม่', 'again with new data'],
  ['หลังสลับ', 'after toggling'],
  ['สลับกลับ', 'Toggle back'],
  ['สลับไปมาไม่ทำให้ค่า', 'Toggling back and forth does not lose'],
  ['สลับไปมาไม่ค้างคลาสเก่า', 'Toggling back and forth cleans up old classes'],
  ['สลับไปมาระหว่าง', 'Toggle back and forth between'],
  ['สลับไปมาทำงาน', 'Toggling back and forth works'],
  ['สลับไปมา', 'Toggling back and forth'],
  ['ครั้งทำงานสอดคล้องกัน', 'times works consistently'],
  ['โดยไม่ลบรายการเดิม', 'without removing existing items'],
  ['เพิ่มรายการใหม่ต่อท้ายรายการเดิม', 'Append new item to existing list'],
  ['เพิ่มต่อเนื่องอีก', 'Append another'],
  ['รายการที่ว่างเปล่า', 'empty list'],
  ['ล้างข้อมูลเดิม', 'clear existing content'],
  ['ข้อมูลเก่าต้องถูกล้างออก', 'old content must be cleared'],
  ['ข้อมูลเก่า', 'old content'],
  ['ต้องว่างเปล่า', 'must be empty'],
  ['เพื่อตั้งค่าข้อความ', 'to set text'],
  ['สถานะปุ่ม', 'button state'],
  ['ปุ่มไม่ถูก', 'button is not'],
  ['ปุ่มถูก', 'button is'],
  ['เติมสต็อก', 'Restock'],
  ['ปุ่มกลับมาคลิก', 'button is clickable again'],
  ['รายการใหม่ก็', 'new items also'],
  ['เพื่อปรับความกว้าง', 'to set the width'],
  ['ตัวเลขเปอร์เซ็นต์', 'percentage number'],
  ['เพื่อคุมขอบเขต', 'to clamp the range'],
  ['ต้องถูกจำกัดไว้ที่', 'must be clamped to'],
  ['ส่งค่าเกิน', 'Passing value above'],
  ['ส่งค่าติดลบ', 'Passing negative value'],
  ['พร้อมตั้งคลาสให้ตรงกับสถานะ', 'and set the matching status class'],
  ['โดยไม่ค้างคลาสเก่า', 'without leaving old classes'],
  ['ไม่มีรายการอยู่เลยไม่ต้องทำอะไร', 'if the list is empty, do nothing'],
  ['ลบรายการสุดท้าย', 'Remove the last item'],
  ['รายการว่างเปล่าไม่เกิด', 'empty list does not throw'],
  ['ลบต่อเนื่อง', 'Remove consecutively'],
  ['เพื่ออ่านตัวเลข', 'to read numbers'],
  ['ค่าผลรวมออกมาด้วย', 'the total sum as well'],
  ['คำนวณผลรวมใหม่', 'Recalculate new sum'],
  ['รายการสินค้า', 'product list'],
  ['ไม่พบสินค้า', 'No products found'],
  ['เรนเดอร์สินค้า', 'Render products'],
  ['ที่ตรวจสอบทุก', 'that checks every'],
  ['ไม่ตรงกับคำค้นหา', 'does not match keyword'],
  ['เฉพาะรายการแรก', 'only the first item'],
  ['ทุกรายการถูกซ่อนด้วยคลาส', 'all items are hidden with class'],
  ['สร้างแถวตาราง', 'Create table rows'],
  ['สำหรับแต่ละคน', 'for each user'],
  ['สำหรับแต่ละชิ้น', 'for each item'],
  ['แถวพร้อมข้อมูล', 'rows with data'],
  ['ต้องไม่มีแถว', 'must have no rows'],
  ['เรียกซ้ำแทนที่ข้อมูลเก่า', 'Calling again replaces old rows'],
  ['กล่องเนื้อหาที่ตรงกับ', 'content panel matching'],
  ['เพื่อเปิดแท็บ', 'to activate tab'],
  ['เฉพาะปุ่มที่เพิ่งถูกคลิก', 'only to the clicked button'],
  ['เฉพาะปุ่มที่', 'only the button that'],
  ['เฉพาะกล่องที่', 'only the panel that'],
  ['ทุกแท็บจะถูกเอา', 'all tabs have'],
  ['ตรวจชื่อว่างก่อน', 'Check empty name first'],
  ['ข้อมูลถูกต้องครบถ้วน', 'All inputs are valid'],
  ['ข้อมูลถูกต้องครบ', 'All inputs are valid'],
  ['ก่อนคลิกข้อความยัง', 'Before click, text is still'],
  ['ทุกครั้งที่คลิกปุ่ม', 'Every time the button is clicked'],
  ['ให้เพิ่มค่าตัวเลข', 'increment the number'],
  ['อ่านค่าเดิมด้วย', 'Read current value using'],
  ['เพื่อบวกเพิ่ม', 'to increment'],
  ['ค่าปัจจุบัน', 'current value'],
  ['คลิกครั้งที่', 'Click #'],
  ['นำข้อความที่พิมพ์ไป', 'mirror typed text to'],
  ['ลบข้อความจนว่าง', 'Clearing input text'],
  ['ต้องว่างตาม', 'must also become empty'],
  ['แบบเรียลไทม์', 'in real time'],
  ['เพื่อหาจำนวนตัวอักษร', 'to get character count'],
  ['พิมพ์ข้อความใหม่', 'Type new text'],
  ['คลิกซ้ำไม่เกิดปัญหา', 'Clicking repeatedly works safely'],
  ['เพื่อป้องกันผู้', 'to prevent user from'],
  ['กดปุ่มส่งข้อมูลซ้ำ', 'submitting multiple times'],
  ['ให้เปลี่ยนข้อความปุ่ม', 'change button text'],
  ['ข้อความปุ่ม', 'button text'],
  ['ปุ่มมีสถานะ', 'button has state'],
  ['ทำงานพร้อมกันถูกต้อง', 'both work together Properly'],
  ['ฟังก์ชันที่ใส่', 'An async function'],
  ['โดยอัตโนมัติ', 'automatically'],
  ['ผลลัพธ์ที่คูณด้วย', 'result multiplied by'],
  ['เวลาเว็บรับข้อมูล', 'When a web app receives data'],
  ['แต่ห้ามต่ำกว่า', 'but never below'],
  ['ห้ามต่ำกว่า', 'never below'],
  ['เพิ่มค่าทีละ', 'Increment by'],
  ['ลดค่าทีละ', 'Decrement by'],
  ['ต้องไม่ติดลบ', 'must not be negative'],
  ['ตรวจอีเมลก่อน', 'Validate email first'],
  ['จึงตรวจความยาวรหัสผ่าน', 'then validate password length'],
  ['อีเมลไม่มี', 'Email missing'],
  ['รหัสผ่านสั้นกว่า', 'Password shorter than'],
  ['ค่าทั้งสองช่องตรงกัน', 'both inputs match'],
  ['พิมพ์รหัสเหมือนกันทั้ง', 'Typing matching passwords in both'],
  ['พิมพ์รหัสต่างกัน', 'Typing different passwords'],
  ['แก้ไขที่ช่องแรก', 'Editing the first input'],
  ['ราคาต่อชิ้นอยู่', 'unit price is'],
  ['ราคาต่อชิ้น', 'unit price'],
  ['ให้คำนวณราคารวม', 'calculate total price'],
  ['เปลี่ยนจำนวน', 'Change quantity'],
  ['ข้อความว่างไม่ต้องเพิ่ม', 'do not add empty text'],
  ['หลังเพิ่มเสร็จต้องล้าง', 'clear input after adding'],
  ['มีแต่ช่องว่าง', 'whitespace only'],
  ['ต้องไม่เพิ่มรายการ', 'must not add item'],
  ['เพิ่มหลายรายการต่อเนื่อง', 'Add multiple items consecutively'],
  ['คลิกรายการแรก', 'Click first item'],
  ['คลิกรายการที่เหลืออีกรายการ', 'Click another remaining item'],
  ['คลิกรายการสุดท้ายจนเหลือ', 'Click last item leaving'],
  ['หลังคลิกทุกตัวต้องติ๊กครบ', 'after click, all checkboxes must be checked'],
  ['มีบางตัวติ๊กอยู่', 'some already checked'],
  ['เพิ่มให้ปุ่มที่คลิก', 'add to clicked button'],
  ['เพิ่มให้ตัวที่มี', 'add to element with'],
  ['คลิกแท็บที่', 'Click tab #'],
  ['คลิกกลับมาที่แท็บแรก', 'Click back on first tab'],
  ['ตามขั้นตอนการโหลด', 'following the loading lifecycle'],
  ['ทันทีที่เริ่มเรียกฟังก์ชัน', 'immediately when the function starts'],
  ['ขณะกำลังรอ', 'While awaiting'],
  ['ราคาตั้งต้นคือ', 'Initial price is'],
  ['ก่อนเปรียบเทียบ', 'before comparing'],
  ['กรอกรหัสผิด', 'Enter invalid code'],
  ['เพียงจุดเดียว', 'at a single parent element'],
  ['คลิกซ้ำที่ตัวเดิมจะสลับเอาคลาส', 'Clicking the same item again toggles class'],
  ['ทุกตัวที่ถูกติ๊ก', 'all checked items'],
  ['ติ๊กเลือกตัวที่', 'Check item #'],
  ['ติ๊กครบทั้ง', 'Check all'],
  ['เอาติ๊กออก', 'Uncheck'],
  ['ตัวเลขตามจริง', 'exact number'],
  ['ครั้งกลับมาสถานะเดิม', 'times returns to original state'],
  ['ตรงตามพารามิเตอร์', 'matching the arguments'],
  ['ที่มีข้อความตรงกับ', 'whose text matches'],
  ['ปุ่มเดิมถูกเอา', 'previous button has'],
  ['ที่คำนวณค่าทิป', 'that calculates tip'],
  ['ยอดรวมสุทธิ', 'net total bill'],
  ['ค่าอาหารเดิม', 'original bill'],
  ['ค่าอาหาร', 'bill amount'],
  ['ค่าทิป', 'tip amount'],
  ['ที่อ่านค่าองศาเซลเซียส', 'that reads Celsius value'],
  ['ฟาเรนไฮต์ด้วยสูตร', 'Fahrenheit using formula'],
  ['ที่อ่านจำนวนเงินบาท', 'that reads THB amount'],
  ['หารด้วยอัตราแลกเปลี่ยน', 'divide by exchange rate'],
  ['ตัวอักษรแรก', 'first letter'],
  ['ชื่อคำเดียว', 'Single-word name'],
  ['อย่าลืมต่อหน่วย', 'remember to append unit'],
  ['ท้ายตัวเลข', 'after the number'],
  ['ปุ่มเปลี่ยนข้อความ', 'button changes text'],
  ['กับรหัสเริ่มต้น', 'with initial code'],
  ['ที่เพิ่มค่าตัวเลข', 'that increments counter'],
  ['อ่านตัวเลขเดิม', 'Read current number'],
  ['คลิกปุ่มยอมรับ', 'Click accept button'],
  ['ทั้งการซ่อนแบนเนอร์', 'both hiding banner'],
  ['สถานะทำงานครบถ้วน', 'and status work properly'],
  ['นอกนั้นให้เอาคลาส', 'otherwise remove class'],
  ['ให้ดาวที่มีค่า', 'for stars with value'],
  ['ราคาสุทธิต้องไม่ติดลบ', 'net price must not be negative'],
  ['ระดับความปลอดภัย', 'password strength'],
  ['ตามรหัสภาษา', 'by language code'],
  ['ที่อ่านข้อความ', 'that reads text'],
  ['นับจำนวนคำที่คั่นด้วยช่องว่าง', 'count words separated by whitespace'],
  ['มีเว้นวรรคหลายช่องติดกัน', 'Multiple consecutive spaces'],
  ['ช่องว่างเปล่า', 'Empty whitespace'],
  ['ล้างช่องค้นหา', 'clear search input'],
  ['ให้กรองหัวข้อ', 'filter topics'],
  ['จำนวนที่พบ', 'number of matches'],
  ['พิมพ์คำที่ไม่มี', 'Type non-matching keyword'],
  ['พิมพ์ค้นหา', 'Type search query'],
  ['เลือกหมวด', 'Select category'],
  ['ตามราคา', 'by price'],
  ['น้อยไปมาก', 'lowest to highest'],
  ['มากไปน้อย', 'highest to lowest'],
  ['เรียงลำดับตาม', 'Sort by'],
  ['เรียงแบบ', 'Sort'],
  ['รายการเสมอ', 'items always'],
  ['มีรายการสไลด์', 'Given slides array'],
  ['ให้เลื่อนไปข้างหน้า', 'advance to next slide'],
  ['ให้ย้อนกลับ', 'go to previous slide'],
  ['วนกลับมาที่', 'wraps back to'],
  ['วนไปที่ตัวท้ายสุด', 'wraps to the last slide'],
  ['สไลด์แรก', 'From first slide'],
  ['ตัดข้อมูลด้วย', 'Slice data using'],
  ['หน้าสุดท้าย', 'Last page'],
  ['หน้าที่', 'Page'],
  ['หน้าละ', 'per page'],
  ['ไม่ต้องเพิ่มซ้ำ', 'do not add duplicate'],
  ['เรนเดอร์ทุกแท็ก', 'Render all tags'],
  ['แท็กที่ไม่ซ้ำกัน', 'unique tags'],
  ['เพิ่มแท็กซ้ำ', 'Adding duplicate tag'],
  ['ต้องไม่เพิ่มซ้ำ', 'must not duplicate'],
  ['ไม่ถูกเพิ่มเข้า', 'is not added to'],
  ['จำนวนโน้ต', 'note count'],
  ['บันทึกโน้ต', 'Save note'],
  ['บันทึกเพิ่ม', 'Save another note'],
  ['ถูกล้างว่าง', 'is cleared'],
  ['ไม่พิมพ์ข้อความ', 'Empty note input'],
  ['ให้เพิ่มคะแนน', 'increment vote count'],
  ['ทั้งสองตัวเลือก', 'both options'],
  ['ยอดผ่อนต่อเดือน', 'monthly installment'],
  ['ปัดเศษขึ้นด้วย', 'Round up using'],
  ['ปัดเศษขึ้น', 'rounded up'],
  ['ยังไม่มีให้เพิ่มเข้าไป', 'if not present, add it'],
  ['เรียกซ้ำด้วยชื่อเดิม', 'Calling again with same title'],
  ['ลบออกจนหมด', 'Remove all items'],
  ['สร้างเว็บแอป', 'Build web app'],
  ['พร้อมล้างช่อง', 'and clear input'],
  ['ตอนคลิกสลับสถานะ', 'when toggling completion'],
  ['งานที่เหลือกลับมา', 'remaining count returns to'],
  ['งานที่เหลือลด', 'remaining count decreases'],
  ['งานที่เหลือ', 'remaining count'],
  ['คลิกที่งานแรก', 'Click first task'],
  ['เพิ่มงาน', 'Add task'],
  ['กรอกชื่อรายการ', 'Enter expense name'],
  ['ไม่กรอกชื่อรายการ', 'Empty expense name'],
  ['ยอดรวมสะสม', 'running total'],
  ['จำนวนเงิน', 'amount'],
  ['ชื่อไม่ว่าง', 'name is not empty'],
  ['เพิ่มรายการที่', 'Add item #'],
  ['เพิ่มรายการ', 'Add item'],
  ['สินค้าเข้าตะกร้า', 'item to cart'],
  ['เพิ่มสินค้าเข้า', 'Add product to'],
  ['จำนวนชิ้นรวม', 'total item count'],
  ['ล้างตะกร้าให้ว่าง', 'Clear cart'],
  ['สร้างฟังก์ชันช่วย', 'Create helper function'],
  ['หยิบสินค้า', 'Add items'],
  ['ราคารวมกลับ', 'total price back'],
  ['เพื่อตรวจคำตอบกับ', 'to check answer against'],
  ['เลื่อนไปข้อถัดไป', 'move to next question'],
  ['ทำครบทุกข้อให้', 'when all questions are finished,'],
  ['ตรวจคำตอบ', 'check answer'],
  ['เพิ่มคะแนน', 'increment score'],
  ['ตอบข้อแรกถูก', 'Answer 1st question correctly'],
  ['ตอบถูกทั้ง', 'Answer all'],
  ['ตอบถูก', 'Correct answer'],
  ['ผู้ติดต่อลง', 'contact into'],
  ['กรองรายชื่อที่มี', 'filter contacts matching'],
  ['เพิ่มผู้ติดต่อใหม่', 'Add new contact'],
  ['ครบทุกรายการ', 'all items'],
  ['ผลบวก', 'sum'],
  ['บวกค่า', 'add'],
  ['ผลรวม', 'sum'],
  ['ผลลัพธ์', 'result'],
  ['กว้าง', 'width'],
  ['ยาว', 'height'],
  ['พื้นที่', 'area'],
  ['นาทีมี', 'minute has'],
  ['นาที', 'minutes'],
  ['วินาที', 'seconds'],
  ['มาคูณด้วย', 'multiply by'],
  ['คูณด้วย', 'multiplied by'],
  ['คูณ', 'multiply'],
  ['รูปแบบ', 'format'],
  ['ข้อความ', 'text'],
  ['คำนวณ', 'calculate'],
  ['ราคารวม', 'total price'],
  ['ราคา', 'price'],
  ['จำนวน', 'count'],
  ['ชิ้นที่', 'item #'],
  ['ชิ้น', 'items'],
  ['บาท', 'THB'],
  ['เลขคู่', 'even number'],
  ['เลขคี่', 'odd number'],
  ['อายุ', 'age'],
  ['ปี', 'years'],
  ['คุณสมบัติ', 'property'],
  ['ตัวอักษร', 'characters'],
  ['ขอบหน้า', 'leading'],
  ['สำหรับเก็บ', 'to store'],
  ['เชื่อม', 'join'],
  ['ถูกต้อง', 'correctly'],
  ['จ่าย', 'paid'],
  ['ทอน', 'change'],
  ['เมธอด', 'method'],
  ['ประโยค', 'sentence'],
  ['ตำแหน่ง', 'index'],
  ['สามารถ', 'can'],
  ['รอบ', 'times'],
  ['ซ้ำ', 'repeat'],
  ['ตัวเลข', 'number'],
  ['ลูป', 'loop'],
  ['สร้าง', 'create'],
  ['กี่ตัว', 'how many'],
  ['ลงตัว', 'evenly'],
  ['เกรด', 'grade'],
  ['คะแนน', 'score'],
  ['ขึ้นไป', 'or above'],
  ['ต่ำกว่า', 'below'],
  ['ยอดซื้อ', 'order total'],
  ['ค่าส่ง', 'shipping fee'],
  ['ซื้อ', 'order'],
  ['สมาชิก', 'member'],
  ['แต่ละ', 'each'],
  ['ยอดรวม', 'total'],
  ['ยอด', 'amount'],
  ['เหลือ', 'remaining'],
  ['รวมทั้ง', 'including'],
  ['เงื่อนไข', 'condition'],
  ['บัตร', 'card'],
  ['หลัก', 'digits'],
  ['รหัสผ่าน', 'password'],
  ['รหัส', 'code'],
  ['หนัก', 'weight'],
  ['สูง', 'height'],
  ['คำว่า', 'word'],
  ['นอกนั้น', 'otherwise'],
  ['หน่วย', 'units'],
  ['ทุกคำ', 'every word'],
  ['คำนั้น', 'that word'],
  ['มีเพียง', 'has only'],
  ['ทันที', 'immediately'],
  ['ว่างเปล่า', 'empty'],
  ['ว่างให้', 'if empty,'],
  ['ว่าง', 'empty'],
  ['ก่อนดึง', 'before accessing'],
  ['รายการ', 'items'],
  ['สินค้า', 'product'],
  ['ครบถ้วน', 'completely'],
  ['เพิ่มเข้าไป', 'add it'],
  ['เพิ่มขึ้น', 'increases'],
  ['เพิ่มอีก', 'add another'],
  ['เพิ่ม', 'add'],
  ['ค่าบวก', 'positive'],
  ['กรองเฉพาะ', 'Filter only'],
  ['กรอง', 'filter'],
  ['ตะกร้า', 'cart'],
  ['ค้นหา', 'search'],
  ['ไม่พบ', 'not found'],
  ['สำเนา', 'copy'],
  ['ระวัง', 'Note:'],
  ['เสมอ', 'always'],
  ['เรียงลำดับ', 'sort'],
  ['เรียง', 'sort'],
  ['ทุกชิ้น', 'all items'],
  ['สรุปผล', 'summary'],
  ['รายชื่อ', 'names'],
  ['จัดกลุ่ม', 'group'],
  ['หมวดหมู่', 'categories'],
  ['แปลงด้วย', 'transform with'],
  ['แปลงค่า', 'convert value'],
  ['แปลง', 'convert'],
  ['ขั้นตอน', 'steps'],
  ['เลือก', 'Select'],
  ['ตั้งค่า', 'Set'],
  ['เปลี่ยน', 'Change'],
  ['ส่งชื่อ', 'Pass name'],
  ['คลาส', 'class'],
  ['ให้กับ', 'to'],
  ['เรียกฟังก์ชัน', 'Call function'],
  ['เรียกซ้ำ', 'Call again'],
  ['ทำงาน', 'works'],
  ['ปกติ', 'normally'],
  ['สลับ', 'toggle'],
  ['โดยกำหนด', 'by setting'],
  ['ล้างค่า', 'Clear value'],
  ['ล้างช่อง', 'Clear input'],
  ['ล้าง', 'clear'],
  ['ปุ่ม', 'button'],
  ['หน้าเว็บ', 'webpage'],
  ['เริ่มต้น', 'initial'],
  ['เนื้อหา', 'content'],
  ['อ่านค่า', 'Read value'],
  ['อ่าน', 'read'],
  ['โหมดมืด', 'Dark mode'],
  ['โหมดสว่าง', 'Light mode'],
  ['นำไปต่อท้าย', 'append to'],
  ['เรนเดอร์ลง', 'render into'],
  ['เรนเดอร์', 'render'],
  ['ทุกรายการ', 'all items'],
  ['ความกว้าง', 'width'],
  ['ความยาว', 'length'],
  ['ครั้ง', 'times'],
  ['มารวมกัน', 'together'],
  ['รวมราคา', 'Sum prices'],
  ['รวมค่า', 'Sum values'],
  ['รวม', 'total'],
  ['ตาราง', 'table'],
  ['ทุกปุ่ม', 'all buttons'],
  ['ทุกกล่อง', 'all panels'],
  ['ทุกตัว', 'all elements'],
  ['เปิด', 'open'],
  ['ปิด', 'close'],
  ['ซ่อน', 'hide'],
  ['หลังคลิก', 'After click'],
  ['คลิก', 'Click'],
  ['พิมพ์', 'Type'],
  ['สถานะ', 'status'],
  ['ติ๊กเลือก', 'Check'],
  ['ติ๊กถูก', 'Check'],
  ['ยกเลิก', 'uncheck'],
  ['บรรทัดแรก', 'first line'],
  ['รีเซ็ต', 'reset'],
  ['กดเพิ่ม', 'Click increment'],
  ['กดลด', 'Click decrement'],
  ['กดรีเซ็ต', 'Click reset'],
  ['อย่าลืม', 'Remember to'],
  ['โยน', 'throws'],
  ['โหลด', 'load'],
  ['กรอก', 'Enter'],
  ['คำตอบ', 'answer'],
  ['ตัวเลือก', 'option'],
  ['สูตร', 'formula'],
  ['คำ', 'words'],
  ['ถัดไป', 'next'],
  ['ก่อนหน้า', 'previous'],
  ['ข้อมูล', 'data'],
  ['แท็ก', 'tag'],
  ['โหวต', 'vote'],
  ['ผ่อน', 'installment'],
  ['เดือน', 'months'],
  ['ลบออก', 'remove'],
  ['ลบ', 'remove'],
  ['บทความ', 'article'],
  ['สมบูรณ์', 'complete'],
  ['ทั้งคู่', 'both'],
  ['ผิด', 'wrong'],
  ['ถูก', 'correct'],
  ['ข้อ', 'items'],
  ['ดาว', 'stars'],
  ['ดวง', 'stars'],
  ['แต้ม', 'points'],
  ['ส่วนลด', 'discount'],
  ['ลด', 'discount']
].sort((a, b) => b[0].length - a[0].length);

const TH_TO_EN_PHRASES = [
  ...RAW_TH_TO_EN,
  ['เขียนฟังก์ชัน', 'Write a function'],
  ['ที่คืนค่า', 'that returns'],
  ['เพื่อตรวจสอบว่า', 'to check whether'],
  ['เพื่อเช็กว่า', 'to check whether'],
  ['เพื่ออัปเดต', 'to update'],
  ['เพื่อแสดง', 'to display'],
  ['เพื่อซ่อน', 'to hide'],
  ['เพื่อเปิดใช้งาน', 'to enable'],
  ['เพื่อปิดการใช้งาน', 'to disable'],
  ['เพื่อล้าง', 'to clear'],
  ['เพื่อลบ', 'to remove'],
  ['เพื่อเพิ่ม', 'to add'],
  ['เพื่อนับ', 'to count'],
  ['เพื่อดึง', 'to get'],
  ['เพื่ออ่านและคืนค่า', 'to read and return'],
  ['เพื่ออ่านค่า', 'to read the value'],
  ['เพื่อกำหนดค่า', 'to set the value'],
  ['เพื่อเปลี่ยน', 'to change'],
  ['เพื่อสลับ', 'to toggle'],
  ['เพื่อสร้าง', 'to create'],
  ['เพื่อเรนเดอร์', 'to render'],
  ['เพื่อกรอง', 'to filter'],
  ['เพื่อค้นหา', 'to find'],
  ['เพื่อเรียงลำดับ', 'to sort'],
  ['เพื่อคำนวณ', 'to calculate'],
  ['เมื่อคลิกปุ่ม', 'When clicking button'],
  ['เมื่อคลิกที่', 'When clicking on'],
  ['เมื่อคลิก', 'When clicking'],
  ['เมื่อพิมพ์ใน', 'When typing in'],
  ['เมื่อมีการพิมพ์ใน', 'When typing in'],
  ['เมื่อเปลี่ยนค่าใน', 'When changing the value in'],
  ['เมื่อเปลี่ยนตัวเลือกใน', 'When changing the selection in'],
  ['เมื่อกดส่งฟอร์ม', 'When submitting the form'],
  ['รับพารามิเตอร์', 'Accept parameter(s)'],
  ['คืนค่า (<code>return</code>)', 'Return (<code>return</code>)'],
  ['คืนค่าเป็น', 'Return as'],
  ['คืนค่าเฉพาะ', 'Return only'],
  ['คืนค่า', 'Return'],
  ['ให้คืนค่า', 'return'],
  ['ต้องคืนค่า', 'must return'],
  ['ถ้าข้อความว่างให้คืนค่า', 'if the string is empty, return'],
  ['ถ้าเป็นเลขคู่ และ', 'if it is an even number, and'],
  ['ถ้าเป็นเลขคี่', 'if it is an odd number'],
  ['ไม่เช่นนั้นคืนค่า', 'otherwise return'],
  ['ไม่เช่นนั้นให้', 'otherwise'],
  ['ไม่เช่นนั้น', 'otherwise'],
  ['ใช้เครื่องหมาย', 'Use operator'],
  ['ในฟังก์ชัน', 'inside the function'],
  ['เขียน', 'Write'],
  ['ใช้', 'Use'],
  ['เช็กว่า', 'Check if'],
  ['เช็ก', 'Check'],
  ['ตรวจสอบว่า', 'Check whether'],
  ['ตรวจสอบ', 'Check'],
  ['วนลูป', 'Loop'],
  ['ตั้งแต่ 1 ถึง', 'from 1 to'],
  ['ตั้งแต่', 'from'],
  ['ถึง', 'to'],
  ['ทั้งหมดใน', 'all in'],
  ['ทั้งหมด', 'all'],
  ['ตัวพิมพ์ใหญ่ทั้งหมด', 'all uppercase'],
  ['ตัวพิมพ์เล็กทั้งหมด', 'all lowercase'],
  ['ตัวพิมพ์เล็ก', 'lowercase'],
  ['ตัวพิมพ์ใหญ่', 'uppercase'],
  ['ตัดช่องว่าง', 'trim whitespace'],
  ['จากน้อยไปมาก', 'in ascending order'],
  ['จากมากไปน้อย', 'in descending order'],
  ['จากแพงไปถูก', 'from highest to lowest price'],
  ['จากถูกไปแพง', 'from lowest to highest price'],
  ['กรณี Array ว่าง', 'For an empty Array'],
  ['กรณีไม่มี', 'When there are no'],
  ['กรณีส่งค่าว่าง', 'When passing an empty string'],
  ['กรณี', 'Case:'],
  ['ได้ถูกต้อง', 'correctly'],
  ['ทำงานถูกต้อง', 'works correctly'],
  ['สำเร็จ', 'successfully'],
  ['แสดงข้อความ', 'displays text'],
  ['แสดงผลลัพธ์ใน', 'displays the result in'],
  ['แสดงใน', 'displayed in'],
  ['แสดง', 'displays'],
  ['เปลี่ยนข้อความใน', 'Change the text in'],
  ['เปลี่ยนเป็น', 'changes to'],
  ['อัปเดตข้อความใน', 'Update the text in'],
  ['อัปเดต', 'Update'],
  ['เพิ่มคลาส', 'Add class'],
  ['ลบคลาส', 'Remove class'],
  ['สลับคลาส', 'Toggle class'],
  ['มีคลาส', 'has class'],
  ['ไม่มีคลาส', 'does not have class'],
  ['ผูก click event ให้', 'Attach a click event listener to'],
  ['ผูก', 'Attach'],
  ['ดักจับ event', 'Listen for event'],
  ['ดักจับ', 'Listen for'],
  ['บนหน้าเว็บ', 'on the webpage'],
  ['ในหน้าเว็บ', 'on the page'],
  ['อย่างน้อย', 'at least'],
  ['มากกว่าหรือเท่ากับ', 'greater than or equal to'],
  ['น้อยกว่าหรือเท่ากับ', 'less than or equal to'],
  ['มากกว่า', 'greater than'],
  ['น้อยกว่า', 'less than'],
  ['เท่ากับ', 'equal to'],
  ['และ', 'and'],
  ['หรือ', 'or'],
  ['ถ้า', 'If'],
  ['เมื่อ', 'When'],
  ['แล้ว', 'then'],
  ['ของ', 'of'],
  ['ใน', 'in'],
  ['จาก', 'from'],
  ['ให้เป็น', 'to'],
  ['เป็น', 'is'],
  ['ได้', 'returns'],
  ['เพื่อ', 'to'],
  ['ที่', 'that'],
  ['ให้', 'to'],
  ['บน', 'on'],
  ['กับ', 'with'],
  ['ด้วย', 'with'],
  ['ตาม', 'by'],
  ['ค่า', 'value'],
  ['มี', 'has'],
  ['ไม่', 'not'],
  ['คือ', 'is'],
  ['ต้อง', 'must'],
  ['ก่อน', 'first'],
  ['หลัง', 'after'],
  ['ใหม่', 'new'],
  ['เดิม', 'original'],
  ['ออก', 'out'],
  ['เข้า', 'in'],
  ['ลง', 'into'],
  ['ตัว', 'items'],
  ['จุด', 'fields'],
  ['ชื่อ', 'name'],
  ['อยู่ระหว่าง', 'is between'],
  ['ระหว่าง', 'between'],
  ['แปลว่ากำลัง', 'means currently'],
  ['ทั้งสองช่อง', 'both inputs'],
  ['มาบวกกัน', 'add together'],
  ['ติดต่อกัน', 'in a row'],
  ['ขึ้นทีละ', 'by'],
  ['มาต่อกัน', 'joined together'],
  ['ชั้นเดียว', 'single-level'],
  ['กำหนดทั้ง', 'set both'],
  ['วิชาพร้อม', 'courses with'],
  ['ส่วนแท็บ', 'tab panels'],
  ['ส่งฟอร์ม', 'submit form'],
  ['ตรงกัน', 'matching'],
  ['ข้างหน้า', 'in front'],
  ['ฟังก์ชัน', 'function'],
  ['ภาษาไทย', 'Thai'],
  ['ชินกฤต', 'Chinnakrit'],
  ['สมชาย', 'Somchai'],
  ['เลื่อนหน้า', 'Next'],
  ['ย้อนกลับ', 'Previous'],
  ['ตั้งขนาด', 'Set size'],
  ['ครบทั้ง', 'all'],
  ['ทั้งตอน', 'both when'],
  ['อนาคตก็', 'future items also'],
  ['โดนลูก', 'hits a child'],
  ['หมวดนั้น', 'that category'],
  ['จะบวก', 'adds'],
  ['จะถือ', 'is considered'],
  ['ยกเว้น', 'except'],
  ['ดังนั้น', 'so'],
  ['เปล่าๆ', 'alone'],
  ['โดยตรง', 'directly'],
  ['กลับมา', 'returns to'],
  ['ผลครบ', 'all results'],
  ['ตัวแปร', 'variable'],
  ['ต่อเนื่อง', 'consecutively'],
  ['ไปใส่', 'into'],
  ['ไปมา', 'back and forth'],
  ['ผลกลับ', 'result back'],
  ['กลับไป', 'back to'],
  ['ใหญ่อยู่', 'already uppercase'],
  ['บวกกัน', 'added together'],
  ['แน่นอน', 'reliably'],
  ['มักจะ', 'usually'],
  ['มันเอง', 'itself'],
  ['รอผล', 'await result'],
  ['อธิบาย', 'alt text'],
  ['ชินกฤต', 'Chinnakrit'],
  ['กาแฟ', 'Coffee'],
  ['เค้ก', 'Cake'],
  ['ระบบ', 'system'],
  ['ช่อง', 'input'],
  ['นั้น', 'that'],
  ['อยู่', 'is'],
  ['การ', ''],
  ['แยก', 'separate'],
  ['วัน', 'days'],
  ['หาร', 'divide'],
  ['ดึง', 'extract'],
  ['อื่นๆ', 'others'],
  ['คั่น', 'separated'],
  ['ต้นไป', 'onwards'],
  ['เกิน', 'exceeds'],
  ['กลาย', 'becomes'],
  ['เปล่า', 'empty'],
  ['เจอ', 'found'],
  ['แรก', 'first'],
  ['เลข', 'number'],
  ['ซึ่ง', 'which'],
  ['เดียว', 'single'],
  ['สั่ง', 'call'],
  ['ผู้', 'user'],
  ['ตรง', 'matches'],
  ['พบ', 'found'],
  ['ใส่', 'set'],
  ['โดย', 'by'],
  ['คน', 'users'],
  ['ใช่', 'matched'],
  ['พร้อม', 'with'],
  ['ทั้ง', 'all'],
  ['นับ', 'count'],
  ['ยุบ', 'flatten'],
  ['ข้าง', 'inside'],
  ['อื่น', 'other'],
  ['ชนิด', 'type'],
  ['เรียก', 'call'],
  ['แม้', 'even if'],
  ['คง', 'stays'],
  ['ภาย', 'inside'],
  ['สำหรับ', 'for'],
  ['ลูก', 'children'],
  ['เอง', 'itself'],
  ['ผ่าน', 'passes'],
  ['กำหนด', 'set'],
  ['ส่ง', 'pass'],
  ['ครบ', 'all'],
  ['เก่า', 'old'],
  ['ค่อย', 'then'],
  ['จน', 'until'],
  ['บวก', 'add'],
  ['ระบุ', 'specify'],
  ['ตรวจ', 'check'],
  ['เก็บ', 'store'],
  ['แปร', 'variable'],
  ['อีก', 'again'],
  ['เกิด', 'occurs'],
  ['งาน', 'tasks'],
  ['ติ๊ก', 'check'],
  ['กลับ', 'back'],
  ['หาย', 'lost'],
  ['คืน', 'returns'],
  ['หลาย', 'multiple'],
  ['รอ', 'await'],
  ['ตอน', 'when'],
  ['เพียง', 'only'],
  ['ส่วน', 'part'],
  ['จริง', 'actual'],
  ['ตั้ง', 'set'],
  ['เฉพาะ', 'only'],
  ['หา', 'find'],
  ['บล็อก', 'block'],
  ['เล็ก', 'lowercase'],
  ['ไว้', ''],
  ['แม่', 'parent'],
  ['ทำ', 'done'],
  ['กด', 'click'],
  ['รูป', 'image'],
  ['ไซส์', 'size'],
  ['แค่', 'only'],
  ['ทิป', 'tip'],
  ['เรต', 'rate'],
  ['ขึ้น', 'up'],
  ['เต็ม', 'full'],
  ['เลื่อน', 'advance'],
  ['นำ', 'take'],
  ['หมด', 'all'],
  ['เลย', 'at all'],
  ['ว่า', 'whether'],
  ['ไฟ', 'electricity'],
  ['มา', ''],
  ['รับ', 'takes'],
  ['จะ', 'will'],
  ['กี่', 'how many'],
  ['ต่อ', 'per'],
  ['ก็', 'also'],
  ['ไป', 'to'],
  ['ผล', 'result'],
  ['ใด', 'any'],
  ['ค.ศ.', 'year'],
  ['ค', ''],
  ['ศ', ''],
  ['เช่น', 'e.g.'],
  ['แต่', 'but'],
  ['ยัง', 'still'],
  ['ทุก', 'every']
].sort((a, b) => b[0].length - a[0].length);

function translateTextSegmentToEn(text) {
  if (!text) return text;
  // Preserve <code>...</code> and "..." tokens while translating surrounding Thai phrases
  const tokens = [];
  let tokenized = String(text).replace(/(<code[\s\S]*?<\/code>|"[^"]*")/g, match => {
    const idx = tokens.length;
    tokens.push(match);
    return `__TOKEN_${idx}__`;
  });

  for (const [th, en] of TH_TO_EN_PHRASES) {
    if (tokenized.includes(th)) {
      tokenized = tokenized.split(th).join(` ${en} `);
    }
  }

  tokenized = tokenized.replace(/\s+/g, ' ').trim();

  return tokenized.replace(/__TOKEN_(\d+)__/g, (_, idx) => tokens[Number(idx)]);
}

window.localizeDifficulty = function localizeDifficulty(diff, lang) {
  if (lang !== 'en') return diff;
  if (diff === 'ง่าย') return 'Easy';
  if (diff === 'ปานกลาง') return 'Medium';
  if (diff === 'ยาก') return 'Hard';
  return diff;
};

window.localizeSubject = function localizeSubject(subj, lang) {
  if (!subj || lang !== 'en') return subj;
  const en = window.SUBJECTS_EN[subj.id];
  if (!en) return subj;
  return {
    ...subj,
    title: en.title || subj.title,
    badgeText: en.badgeText || subj.badgeText,
    description: en.description || subj.description,
    tags: en.tags || subj.tags
  };
};

window.localizeChapter = function localizeChapter(chap, lang) {
  if (!chap || lang !== 'en') return chap;
  const en = window.CHAPTERS_EN[chap.id];
  if (!en) return chap;
  return {
    ...chap,
    title: en.title || chap.title,
    shortTitle: en.shortTitle || chap.shortTitle,
    description: en.description || chap.description,
    lesson: en.lesson || chap.lesson
  };
};

window.localizeProblem = function localizeProblem(prob, lang) {
  if (!prob || lang !== 'en') return prob;
  const enTitle = window.PROBLEM_TITLES_EN[prob.id] || translateTextSegmentToEn(prob.title);
  return {
    ...prob,
    displayTitle: enTitle,
    displayDifficulty: window.localizeDifficulty(prob.difficulty, 'en'),
    displayDescription: translateTextSegmentToEn(prob.description),
    displayRequirements: (prob.requirements || []).map(r => translateTextSegmentToEn(r)),
    displayHints: (prob.hints || []).map(h => translateTextSegmentToEn(h)),
    displayTestCases: (prob.testCases || []).map(tc => ({
      ...tc,
      displayName: translateTextSegmentToEn(tc.name)
    }))
  };
};
