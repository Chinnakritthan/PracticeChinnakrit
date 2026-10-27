# ⚡ PracticeChinnakrit — Interactive Web & Coding Practice Platform

แพลตฟอร์มฝึกทำโจทย์เขียนโค้ดและสร้างเว็บไซต์แบบ Interactive (Repetition Mastery) ที่ออกแบบมาให้แยกเป็นวิชาและแยกเป็นบทเรียนอย่างชัดเจน พร้อมเนื้อหาสรุป สิ่งที่ต้องใช้ ตัวอย่างโค้ด และโจทย์ฝึกทำซ้ำตั้งแต่พื้นฐานไปจนถึงการสร้างระบบเว็บจริง

🌐 **เข้าใช้งานผ่าน GitHub Pages ได้ทันที:**  
👉 **[https://chinnakritthan.github.io/PracticeChinnakrit/](https://chinnakritthan.github.io/PracticeChinnakrit/)**

---

## 🎯 โครงสร้างวิชา Frontend Web Development (5 บทเรียน • 175 โจทย์ • 525 Test Cases)

ในวิชา **Frontend Web Development** แบ่งออกเป็น **5 บทเรียนหลัก** โดยในแต่ละบทประกอบด้วย:
1. **📘 เนื้อหาประจำบท (Lesson Guide)**:
   - ภาพรวมและแนวคิดหลักของบทเรียน
   - คำสั่งและเครื่องมือที่ต้องใช้ (`Syntax & Tools`) พร้อมคำอธิบาย
   - ตัวอย่างโค้ดพร้อมคำอธิบาย (`Code Examples`) ที่สามารถเปิดดูเทียบระหว่างทำโจทย์ได้ตลอดเวลา
2. **🧪 โจทย์ฝึกหัดประจำบท บทละ 35 ข้อ** (รวมทั้งสิ้น **175 ข้อ**):
   - 🌱 **ระดับง่าย (Easy)**: 20 ข้อ — ฝึกพื้นฐานคำสั่งให้แม่นยำและคล่องมือ
   - ⚡ **ระดับปานกลาง (Medium)**: 10 ข้อ — ประยุกต์ใช้หลายคำสั่งร่วมกันและแก้โจทย์เชิงตรรกะ
   - 🔥 **ระดับยาก (Hard)**: 5 ข้อ — โจทย์ท้าทายและสร้างระบบ/Component ที่ใช้งานได้จริง

### รายละเอียดทั้ง 5 บทเรียน
| บทที่ | ชื่อบทเรียน | เนื้อหาหลัก | จำนวนโจทย์ |
| :--- | :--- | :--- | :--- |
| **บทที่ 1** | พื้นฐาน JavaScript & Logic | ตัวแปร, ชนิดข้อมูล, Operators, String/Math, `if/else`, Loops, Functions | 35 ข้อ (ง่าย 20 / ปานกลาง 10 / ยาก 5) |
| **บทที่ 2** | การจัดการข้อมูล Array & Object Mastery | Array Methods (`map`, `filter`, `reduce`, `find`, `sort`), Object Manipulation, Destructuring | 35 ข้อ (ง่าย 20 / ปานกลาง 10 / ยาก 5) |
| **บทที่ 3** | การเชื่อม JS กับ HTML/CSS (DOM Manipulation) | `querySelector`, `textContent`, `style`, `classList`, `createElement`, Dynamic Rendering | 35 ข้อ (ง่าย 20 / ปานกลาง 10 / ยาก 5) |
| **บทที่ 4** | การโต้ตอบกับผู้ใช้ (Events, Forms & Async) | `addEventListener`, Form Validation, Live Filter, Timer, JSON & State Management | 35 ข้อ (ง่าย 20 / ปานกลาง 10 / ยาก 5) |
| **บทที่ 5** | การสร้างระบบเว็บจริง (Mini Web Components & Full Web Apps) | Counter, Tabs, Modal, Accordion, Todo App, Shopping Cart, Expense Tracker, Kanban Board ฯลฯ | 35 ข้อ (ง่าย 20 / ปานกลาง 10 / ยาก 5) |

---

## ✨ ฟีเจอร์หลักของระบบ

- **🗂️ Subject & Chapter Architecture**: หน้าแรกแบ่งเป็น Block ของแต่ละวิชา (`Frontend Web Development` พร้อมใช้งานทันที และรองรับการเพิ่มวิชาอื่นในอนาคต) เมื่อกดเข้าวิชาจะพบการ์ดแยกเป็นบทๆ พร้อมแถบความคืบหน้าแยกตามระดับความยาก
- **📘 Built-in Lesson & Quick Reference**: อ่านเนื้อหา คำสั่งที่ต้องใช้ และตัวอย่างโค้ดได้ทั้งในหน้าบทเรียนและในแท็บ **`📘 เนื้อหาบทนี้`** ขณะกำลังเขียนโค้ดทำโจทย์
- **💻 Multi-Tab Code Editor & Live Web Preview**: แก้ไขได้ทั้ง `index.html`, `style.css`, และ `script.js` พร้อมหน้าจอพรีวิวเว็บไซต์แบบเรียลไทม์และ Console Output
- **✅ Automated Test Case Runner**: ตรวจคำตอบอัตโนมัติ (ข้อละ 3 Test Cases) แสดงค่าที่คาดหวัง (Expected) เทียบกับค่าที่ได้จริง (Actual)
- **🔁 ระบบฝึกทำซ้ำ (Repetition Tracking)**:
  - นับจำนวนรอบที่ทำผ่าน (`Passed X รอบ`) ในแต่ละข้อ
  - ปุ่ม **🔄 ล้างโค้ดฝึกทำซ้ำรอบใหม่** เพื่อรีเซ็ตเฉพาะโค้ดกลับเป็นโจทย์ตั้งต้นโดยไม่เสียสถิติจำนวนรอบที่เคยผ่าน
  - บันทึกความคืบหน้าและโค้ดล่าสุดอัตโนมัติใน `localStorage` พร้อมระบบ **Export / Import Backup (JSON)**

---

## 📁 โครงสร้างโปรเจกต์

```text
PracticeChinnakrit/
├── index.html                    # หน้าเว็บหลัก (Home -> Subject -> Chapter -> Workspace IDE)
├── css/
│   └── styles.css                # สไตล์ของระบบทั้งหมด (Dark IDE Theme + Lesson & Difficulty Badges)
└── js/
    ├── app.js                    # ระบบจัดการ View, Lesson Viewer, Code Editor, Test Runner, Repetition Tracker
    └── data/
        ├── subjects.js           # ข้อมูลกลุ่มวิชา (Subject Blocks)
        ├── frontend-problems.js  # ตัวรวมบทเรียนทั้ง 5 บท และรายการโจทย์ทั้งหมด 175 ข้อ
        ├── chapter1.js           # บทที่ 1: เนื้อหา + โจทย์ 35 ข้อ (ง่าย 20, ปานกลาง 10, ยาก 5)
        ├── chapter2.js           # บทที่ 2: เนื้อหา + โจทย์ 35 ข้อ (ง่าย 20, ปานกลาง 10, ยาก 5)
        ├── chapter3.js           # บทที่ 3: เนื้อหา + โจทย์ 35 ข้อ (ง่าย 20, ปานกลาง 10, ยาก 5)
        ├── chapter4.js           # บทที่ 4: เนื้อหา + โจทย์ 35 ข้อ (ง่าย 20, ปานกลาง 10, ยาก 5)
        └── chapter5.js           # บทที่ 5: เนื้อหา + โจทย์ 35 ข้อ (ง่าย 20, ปานกลาง 10, ยาก 5)
```
