# 💻 PracticeChinnakrit — แพลตฟอร์มฝึกทำโจทย์และสร้างเว็บไซต์

เว็บแอปพลิเคชันสำหรับฝึกเขียนโค้ดซ้ำๆ หลายรอบเพื่อให้เข้าใจลึกซึ้ง ตั้งแต่พื้นฐานไปจนถึงการสร้างเว็บแอปพลิเคชันใช้งานจริง โดยแบ่งแยกเป็นหมวดวิชา (Subject Blocks) และรองรับการขยายเพิ่มวิชาใหม่ในอนาคต

---

## ✨ ฟีเจอร์หลัก (Features)

1. **แยกหมวดวิชาเป็นบล็อก (Subject Blocks)**
   - **Frontend Web Development (JS & DOM Mastery)**: พร้อมฝึกทันที 5 บทเรียน (20 โจทย์คัดสรร 60 Test Cases)
   - โครงสร้างรองรับการเพิ่มบล็อกวิชาใหม่ในอนาคต (เช่น Backend Node.js, React, SQL) ได้ทันที
2. **Code Editor แยกแท็บ HTML / CSS / JS พร้อม Live Web Preview**
   - แก้ไขโค้ดแยกไฟล์ `index.html`, `style.css`, `script.js`
   - แสดงผลหน้าเว็บแบบเรียลไทม์ (Live Preview) พร้อมหน้าต่าง **Console Output** แสดงผลจาก `console.log()` และแจ้งเตือน Error
3. **ระบบตรวจคำตอบอัตโนมัติ (Automated Test Cases)**
   - แต่ละโจทย์มี Test Cases 3 ข้อที่ตรวจสอบทั้งค่าที่คืนจากฟังก์ชัน (Return Value), การเปลี่ยนแปลงของ DOM (`textContent`, `classList`, `disabled`), และการจำลองการคลิก/พิมพ์ของผู้ใช้ (Events)
4. **ระบบคำใบ้ทีละขั้น (Hints) และเฉลย (Solution)**
   - เปิดดูคำใบ้ทีละขั้นเมื่อติดขัด หรือกดดูโค้ดเฉลยพร้อมปุ่มนำเฉลยไปใส่ใน Editor เพื่อศึกษา
5. **รองรับการฝึกทำซ้ำหลายรอบ (Repetition Practice)**
   - บันทึกจำนวนรอบที่ทำผ่านของแต่ละข้อลงใน Browser (`localStorage`) อัตโนมัติ พร้อมปุ่ม **"↺ รีเซ็ตโค้ดฝึกซ้ำ"** เพื่อล้างโค้ดกลับมาฝึกทำใหม่ได้ไม่จำกัดรอบ

---

## 📚 โครงสร้างบทเรียนหมวด Frontend (20 โจทย์)

- **บทที่ 1: พื้นฐาน JavaScript & Logic (JS Fundamentals)** — ตัวแปร, Template Strings, เงื่อนไข `if/else`, ลูป `for`, และการจัดการข้อความ (URL Slug)
- **บทที่ 2: การจัดการข้อมูล Array, Object & Async** — `filter`, `map`, `reduce`, ระบบค้นหา/เรียงราคาสินค้า และ `async/await` + `try/catch`
- **บทที่ 3: การเชื่อม JS กับ HTML/CSS (DOM Manipulation)** — `querySelector`, `textContent`, `classList.toggle`, การสร้างรายการ `<li>` จาก Array และการควบคุม `disabled`
- **บทที่ 4: การโต้ตอบกับผู้ใช้ (Events, Inputs & Validation)** — ระบบ Counter, ตัวนับตัวอักษรแบบเรียลไทม์, การตรวจสอบฟอร์ม (Form Validation) และระบบสลับแท็บ (Tabs UI)
- **บทที่ 5: สร้างระบบเว็บใช้งานจริง (Mini Web Applications)** — Live Search Filter App, Expense Tracker App, Interactive Todo List App และ Mini Quiz Web App

---

## 🚀 วิธีเปิดใช้งานเว็บไซต์

### วิธีที่ 1: เปิดผ่าน GitHub Pages (ออนไลน์)
1. ไปที่หน้า Repository บน GitHub -> แท็บ **Settings** -> เมนู **Pages**
2. ในส่วน **Build and deployment** เลือก Source เป็น **Deploy from a branch**
3. เลือก Branch เป็น `main` และโฟลเดอร์ `/ (root)` แล้วกด **Save**
4. รอประมาณ 1 นาที จะได้ลิงก์เว็บไซต์พร้อมใช้งานทันที

### วิธีที่ 2: รันในเครื่องคอมพิวเตอร์ (Local Server)
```bash
# โคลนโปรเจกต์
git clone https://github.com/Chinnakritthan/PracticeChinnakrit.git
cd PracticeChinnakrit

# รันด้วย Python (มีติดเครื่อง Mac อยู่แล้ว)
python3 -m http.server 8080
```
จากนั้นเปิดเบราว์เซอร์ไปที่ `http://localhost:8080`

---

## 📁 โครงสร้างไฟล์โปรเจกต์

```text
PracticeChinnakrit/
├── index.html                  # หน้าเว็บหลัก (Home, Subject List, IDE Workspace)
├── css/
│   └── styles.css              # สไตล์ทั้งหมด (รองรับ Dark Mode / Light Mode)
└── js/
    ├── app.js                  # ระบบควบคุมหน้าเว็บ, Editor, Live Preview และ Test Runner
    └── data/
        ├── subjects.js         # ข้อมูลบล็อกรายวิชา (เพิ่มวิชาใหม่ที่นี่)
        ├── frontend-problems.js# รวมโจทย์ทั้งหมดของหมวด Frontend
        ├── problems-mod1-2.js  # โจทย์บทที่ 1 และ 2 (JS Fundamentals & Data)
        ├── problems-mod3-4.js  # โจทย์บทที่ 3 และ 4 (DOM & Events)
        └── problems-mod5.js    # โจทย์บทที่ 5 (Mini Web Applications)
```
