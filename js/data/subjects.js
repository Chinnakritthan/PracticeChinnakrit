/**
 * รายการหมวดวิชา (Subject Blocks) บนหน้าแรก
 * สามารถเพิ่มวิชาใหม่ในอนาคตได้ง่ายๆ โดยเพิ่ม Object ลงใน SUBJECTS
 */
export const SUBJECTS = [
  {
    id: 'frontend',
    title: 'Frontend Web Development (JS & DOM Mastery)',
    icon: '💻',
    status: 'available',
    badgeText: 'พร้อมฝึก (20 โจทย์)',
    description:
      'ปูพื้นฐาน JavaScript ตั้งแต่ตัวแปร เงื่อนไข ฟังก์ชัน การจัดการ Array/Object ไปจนถึงการควบคุม HTML/CSS ด้วย DOM Manipulation, Events, Async และการสร้าง Mini Web Apps ใช้งานจริง',
    tags: ['JavaScript ES6+', 'DOM Manipulation', 'Events & Forms', 'HTML/CSS Integration', 'Mini Web Apps'],
    modules: [
      {
        id: 'mod-js-basic',
        title: 'บทที่ 1: พื้นฐาน JavaScript & Logic (JS Fundamentals)',
        description: 'ฝึกตัวแปร การคำนวณ เงื่อนไข if/else ฟังก์ชัน และลูปพื้นฐานที่จำเป็นต้องใช้ในทุกเว็บไซต์'
      },
      {
        id: 'mod-js-data',
        title: 'บทที่ 2: การจัดการข้อมูล Array, Object & Async',
        description: 'จัดการรายการข้อมูลสินค้า ผู้ใช้งาน ด้วย map, filter, reduce, Object และการดึงข้อมูลแบบ Async'
      },
      {
        id: 'mod-dom-core',
        title: 'บทที่ 3: การเชื่อม JS กับ HTML/CSS (DOM Manipulation)',
        description: 'เลือก Element บนหน้าเว็บ เปลี่ยนข้อความ สลับคลาส CSS และสร้าง Element ใหม่จากข้อมูลจริง'
      },
      {
        id: 'mod-dom-events',
        title: 'บทที่ 4: การโต้ตอบกับผู้ใช้ (Events, Inputs & Validation)',
        description: 'ดักจับการคลิก การพิมพ์ข้อความแบบเรียลไทม์ ตรวจสอบฟอร์ม และการสลับแท็บเนื้อหาบนเว็บ'
      },
      {
        id: 'mod-web-projects',
        title: 'บทที่ 5: สร้างระบบเว็บใช้งานจริง (Mini Web Applications)',
        description: 'รวมทุกทักษะมาสร้างระบบเว็บสมบูรณ์: ระบบค้นหาสินค้าสด, ตะกร้าคำนวณราคา, Todo Web App และเว็บทำควิซ'
      }
    ]
  },
  {
    id: 'backend-nodejs',
    title: 'Backend Development (Node.js & REST API)',
    icon: '⚙️',
    status: 'coming-soon',
    badgeText: 'เร็วๆ นี้ (อนาคต)',
    description:
      'ฝึกสร้าง Web Server, การออกแบบ RESTful API, การจัดการ Request/Response, Middleware และการเชื่อมต่อระบบหลังบ้าน',
    tags: ['Node.js', 'Express', 'REST API', 'JSON', 'Authentication'],
    modules: []
  },
  {
    id: 'react-modern',
    title: 'Modern Frontend Framework (React & State)',
    icon: '⚛️',
    status: 'coming-soon',
    badgeText: 'เร็วๆ นี้ (อนาคต)',
    description:
      'ต่อยอดจาก JS & DOM สู่การสร้าง Component-Based Web App ด้วย React, Props, useState, useEffect และ Custom Hooks',
    tags: ['React', 'Components', 'Hooks', 'State Management'],
    modules: []
  },
  {
    id: 'sql-database',
    title: 'Database & SQL Queries',
    icon: '🗄️',
    status: 'coming-soon',
    badgeText: 'เร็วๆ นี้ (อนาคต)',
    description:
      'ฝึกเขียนคำสั่งดึงข้อมูล จัดกลุ่ม กรองข้อมูล และเชื่อมตาราง (SELECT, WHERE, JOIN, GROUP BY) สำหรับนักพัฒนาเว็บ',
    tags: ['SQL', 'Relational DB', 'JOINs', 'Data Modeling'],
    modules: []
  }
];
