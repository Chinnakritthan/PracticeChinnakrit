/**
 * รายการหมวดวิชา (Subject Blocks) บนหน้าแรก
 */
window.SUBJECTS = [
  {
    id: 'frontend',
    title: 'Frontend Web Development (JS, DOM & Web Apps)',
    icon: '💻',
    status: 'available',
    badgeText: 'พร้อมฝึก (5 บท • 175 โจทย์)',
    description:
      'แยกเรียนทีละบทตั้งแต่พื้นฐาน JavaScript, Array & Object, DOM Manipulation, Events & Async ไปจนถึงการสร้างเว็บจริง โดยแต่ละบทมีสรุปเนื้อหา ตัวอย่างโค้ด และโจทย์ฝึกซ้ำ 35 ข้อ (ง่าย 20 • ปานกลาง 10 • ยาก 5)',
    tags: ['5 บทเรียนครบวงจร', 'เนื้อหา + ตัวอย่างโค้ด', 'ง่าย 20 / ปานกลาง 10 / ยาก 5 ต่อบท', 'รวม 175 โจทย์']
  },
  {
    id: 'backend-nodejs',
    title: 'Backend Development (Node.js & REST API)',
    icon: '⚙️',
    status: 'coming-soon',
    badgeText: 'เร็วๆ นี้ (อนาคต)',
    description:
      'ฝึกสร้าง Web Server, การออกแบบ RESTful API, การจัดการ Request/Response, Middleware และการเชื่อมต่อระบบหลังบ้าน',
    tags: ['Node.js', 'Express', 'REST API', 'JSON', 'Authentication']
  },
  {
    id: 'react-modern',
    title: 'Modern Frontend Framework (React & State)',
    icon: '⚛️',
    status: 'coming-soon',
    badgeText: 'เร็วๆ นี้ (อนาคต)',
    description:
      'ต่อยอดจาก JS & DOM สู่การสร้าง Component-Based Web App ด้วย React, Props, useState, useEffect และ Custom Hooks',
    tags: ['React', 'Components', 'Hooks', 'State Management']
  },
  {
    id: 'sql-database',
    title: 'Database & SQL Queries',
    icon: '🗄️',
    status: 'coming-soon',
    badgeText: 'เร็วๆ นี้ (อนาคต)',
    description:
      'ฝึกเขียนคำสั่งดึงข้อมูล จัดกลุ่ม กรองข้อมูล และเชื่อมตาราง (SELECT, WHERE, JOIN, GROUP BY) สำหรับนักพัฒนาเว็บ',
    tags: ['SQL', 'Relational DB', 'JOINs', 'Data Modeling']
  }
];
