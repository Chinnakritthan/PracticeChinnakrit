/**
 * โจทย์บทที่ 3 (DOM Manipulation) และ บทที่ 4 (Events, Inputs & Validation)
 */

export const PROBLEMS_MOD_3_4 = [
  // =========================================================================
  // MODULE 3: การเชื่อม JS กับ HTML/CSS (DOM Manipulation)
  // =========================================================================
  {
    id: 'fe-09',
    number: 9,
    subjectId: 'frontend',
    moduleId: 'mod-dom-core',
    title: 'เลือกและอัปเดตข้อมูลบนการ์ดโปรไฟล์ (querySelector & textContent)',
    difficulty: 'พื้นฐาน',
    tags: ['DOM', 'querySelector', 'textContent'],
    defaultTab: 'js',
    description:
      'ก้าวแรกของการนำ JavaScript มาควบคุมหน้าเว็บ คือการอ้างอิง Element ใน HTML แล้วเปลี่ยนข้อความข้างใน ให้เขียนฟังก์ชัน <code>updateProfileCard(name, role, points)</code> เพื่ออัปเดตข้อมูลลงใน HTML',
    requirements: [
      'เปลี่ยนข้อความใน Element <code>#profile-name</code> ให้เป็นค่า <code>name</code>',
      'เปลี่ยนข้อความใน Element <code>#profile-role</code> ให้เป็นค่า <code>role</code>',
      'เปลี่ยนข้อความใน Element <code>#profile-points</code> ให้เป็นรูปแบบ <code>"[points] คะแนน"</code> เช่น <code>"250 คะแนน"</code>'
    ],
    starterCode: {
      html: `<div class="profile-card">
  <h2 id="profile-name">กำลังโหลดชื่อ...</h2>
  <p id="profile-role">ตำแหน่งงาน</p>
  <span class="badge" id="profile-points">0 คะแนน</span>
</div>`,
      css: `body { font-family: sans-serif; padding: 20px; background: #f1f5f9; }
.profile-card { background: white; padding: 24px; border-radius: 14px; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
#profile-name { margin: 0 0 6px; color: #0f172a; }
#profile-role { margin: 0 0 14px; color: #64748b; }
.badge { display: inline-block; background: #dbeafe; color: #1d4ed8; padding: 6px 14px; border-radius: 999px; font-weight: bold; }`,
      js: `function updateProfileCard(name, role, points) {
  // ใช้ document.getElementById หรือ document.querySelector เพื่อเปลี่ยน .textContent
  
}

// ทดลองเรียกใช้งานบนหน้า Preview
updateProfileCard("ชินกฤต", "Frontend Developer", 500);`
    },
    hints: [
      'ใช้ document.getElementById("profile-name").textContent = name;',
      'สำหรับคะแนน ให้ตั้งค่า document.getElementById("profile-points").textContent = `${points} คะแนน`;'
    ],
    solution: {
      html: `<div class="profile-card">
  <h2 id="profile-name">กำลังโหลดชื่อ...</h2>
  <p id="profile-role">ตำแหน่งงาน</p>
  <span class="badge" id="profile-points">0 คะแนน</span>
</div>`,
      css: `body { font-family: sans-serif; padding: 20px; background: #f1f5f9; }
.profile-card { background: white; padding: 24px; border-radius: 14px; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
#profile-name { margin: 0 0 6px; color: #0f172a; }
#profile-role { margin: 0 0 14px; color: #64748b; }
.badge { display: inline-block; background: #dbeafe; color: #1d4ed8; padding: 6px 14px; border-radius: 999px; font-weight: bold; }`,
      js: `function updateProfileCard(name, role, points) {
  document.getElementById("profile-name").textContent = name;
  document.getElementById("profile-role").textContent = role;
  document.getElementById("profile-points").textContent = \`\${points} คะแนน\`;
}

updateProfileCard("ชินกฤต", "Frontend Developer", 500);`
    },
    testCases: [
      {
        name: 'อัปเดต #profile-name ได้ถูกต้อง',
        run: ({ win, doc }) => {
          win.updateProfileCard('สมหญิง', 'UI Designer', 320);
          const actual = doc.getElementById('profile-name').textContent.trim();
          return { passed: actual === 'สมหญิง', expected: 'สมหญิง', actual };
        }
      },
      {
        name: 'อัปเดต #profile-role ได้ถูกต้อง',
        run: ({ win, doc }) => {
          win.updateProfileCard('สมหญิง', 'UI Designer', 320);
          const actual = doc.getElementById('profile-role').textContent.trim();
          return { passed: actual === 'UI Designer', expected: 'UI Designer', actual };
        }
      },
      {
        name: 'อัปเดต #profile-points เป็นรูปแบบ "[points] คะแนน"',
        run: ({ win, doc }) => {
          win.updateProfileCard('ก้องภพ', 'Fullstack Dev', 950);
          const actual = doc.getElementById('profile-points').textContent.trim();
          return { passed: actual === '950 คะแนน', expected: '950 คะแนน', actual };
        }
      }
    ]
  },

  {
    id: 'fe-10',
    number: 10,
    subjectId: 'frontend',
    moduleId: 'mod-dom-core',
    title: 'สลับโหมดมืด/สว่างด้วยการจัดการ CSS Class (classList.toggle)',
    difficulty: 'พื้นฐาน',
    tags: ['DOM', 'classList', 'CSS Integration'],
    defaultTab: 'js',
    description:
      'การเปลี่ยนหน้าตาเว็บที่ดีที่สุดคือการสลับ CSS Class บน Element ให้เขียนฟังก์ชัน <code>toggleThemeCard()</code> เพื่อสลับคลาส <code>dark-mode</code> บน <code>#theme-card</code> พร้อมอัปเดตข้อความสถานะ',
    requirements: [
      'สลับ (toggle) คลาส <code>dark-mode</code> บน Element <code>#theme-card</code>',
      'หลังจากสลับแล้ว ถ้า <code>#theme-card</code> มีคลาส <code>dark-mode</code> อยู่ ให้เปลี่ยนข้อความของ <code>#mode-label</code> เป็น <code>"โหมดปัจจุบัน: มืด"</code>',
      'ถ้าไม่มีคลาส <code>dark-mode</code> ให้เปลี่ยนข้อความของ <code>#mode-label</code> เป็น <code>"โหมดปัจจุบัน: สว่าง"</code>'
    ],
    starterCode: {
      html: `<div id="theme-card" class="box">
  <h3 id="mode-label">โหมดปัจจุบัน: สว่าง</h3>
  <p>คลิกปุ่มด้านล่างเพื่อทดสอบสลับคลาส CSS</p>
  <button onclick="toggleThemeCard()">สลับโหมด</button>
</div>`,
      css: `body { font-family: sans-serif; padding: 20px; background: #e2e8f0; }
.box { background: #ffffff; color: #0f172a; padding: 24px; border-radius: 12px; transition: all 0.2s; }
.box.dark-mode { background: #0f172a; color: #f8fafc; }
button { padding: 8px 16px; border-radius: 8px; border: none; background: #3b82f6; color: white; cursor: pointer; }`,
      js: `function toggleThemeCard() {
  const card = document.getElementById("theme-card");
  const label = document.getElementById("mode-label");
  // สลับคลาส dark-mode และเปลี่ยนข้อความ label ที่นี่
  
}`
    },
    hints: [
      'ใช้ card.classList.toggle("dark-mode") เพื่อสลับคลาส',
      'เช็กด้วย card.classList.contains("dark-mode") เพื่อกำหนดข้อความใน label.textContent'
    ],
    solution: {
      html: `<div id="theme-card" class="box">
  <h3 id="mode-label">โหมดปัจจุบัน: สว่าง</h3>
  <p>คลิกปุ่มด้านล่างเพื่อทดสอบสลับคลาส CSS</p>
  <button onclick="toggleThemeCard()">สลับโหมด</button>
</div>`,
      css: `body { font-family: sans-serif; padding: 20px; background: #e2e8f0; }
.box { background: #ffffff; color: #0f172a; padding: 24px; border-radius: 12px; transition: all 0.2s; }
.box.dark-mode { background: #0f172a; color: #f8fafc; }
button { padding: 8px 16px; border-radius: 8px; border: none; background: #3b82f6; color: white; cursor: pointer; }`,
      js: `function toggleThemeCard() {
  const card = document.getElementById("theme-card");
  const label = document.getElementById("mode-label");
  const isDark = card.classList.toggle("dark-mode");
  label.textContent = isDark ? "โหมดปัจจุบัน: มืด" : "โหมดปัจจุบัน: สว่าง";
}`
    },
    testCases: [
      {
        name: 'เรียก toggleThemeCard() ครั้งที่ 1: มีคลาส dark-mode และแสดง "โหมดปัจจุบัน: มืด"',
        run: ({ win, doc }) => {
          const card = doc.getElementById('theme-card');
          card.classList.remove('dark-mode');
          win.toggleThemeCard();
          const hasClass = card.classList.contains('dark-mode');
          const text = doc.getElementById('mode-label').textContent.trim();
          return {
            passed: hasClass && text === 'โหมดปัจจุบัน: มืด',
            expected: 'dark-mode=true, "โหมดปัจจุบัน: มืด"',
            actual: `dark-mode=${hasClass}, "${text}"`
          };
        }
      },
      {
        name: 'เรียก toggleThemeCard() ครั้งที่ 2: เอาคลาส dark-mode ออก และแสดง "โหมดปัจจุบัน: สว่าง"',
        run: ({ win, doc }) => {
          const card = doc.getElementById('theme-card');
          card.classList.add('dark-mode');
          win.toggleThemeCard();
          const hasClass = card.classList.contains('dark-mode');
          const text = doc.getElementById('mode-label').textContent.trim();
          return {
            passed: !hasClass && text === 'โหมดปัจจุบัน: สว่าง',
            expected: 'dark-mode=false, "โหมดปัจจุบัน: สว่าง"',
            actual: `dark-mode=${hasClass}, "${text}"`
          };
        }
      },
      {
        name: 'สลับไปมา 3 ครั้งทำงานต่อเนื่องได้ถูกต้อง',
        run: ({ win, doc }) => {
          const card = doc.getElementById('theme-card');
          card.classList.remove('dark-mode');
          win.toggleThemeCard();
          win.toggleThemeCard();
          win.toggleThemeCard();
          const hasClass = card.classList.contains('dark-mode');
          return {
            passed: hasClass === true,
            expected: 'dark-mode=true',
            actual: `dark-mode=${hasClass}`
          };
        }
      }
    ]
  },

  {
    id: 'fe-11',
    number: 11,
    subjectId: 'frontend',
    moduleId: 'mod-dom-core',
    title: 'สร้างรายการวิชาเรียนลงในหน้าเว็บจาก Array (Dynamic DOM Rendering)',
    difficulty: 'ปานกลาง',
    tags: ['DOM', 'createElement', 'innerHTML', 'Lists'],
    defaultTab: 'js',
    description:
      'เว็บแอปยุคใหม่สร้างหน้าเว็บจากข้อมูล Array ให้เขียนฟังก์ชัน <code>renderCourseList(courses)</code> เพื่อสร้างแท็ก <code>&lt;li class="course-item"&gt;</code> ใส่ลงใน <code>#course-list</code>',
    requirements: [
      'ล้างข้อมูลเก่าใน <code>#course-list</code> ก่อนทุกครั้งที่เรียกฟังก์ชัน',
      'ถ้า Array <code>courses</code> ว่างเปล่า <code>[]</code> ให้แสดง <code>&lt;li class="empty"&gt;ยังไม่มีวิชาเรียน&lt;/li&gt;</code>',
      'ถ้ามีข้อมูล ให้สร้าง <code>&lt;li class="course-item"&gt;[ชื่อวิชา]&lt;/li&gt;</code> ตามลำดับใน Array'
    ],
    starterCode: {
      html: `<div class="card">
  <h3>📚 รายวิชาที่ลงทะเบียน</h3>
  <ul id="course-list"></ul>
</div>`,
      css: `body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
.card { background: white; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0; }
ul { list-style: none; padding: 0; margin: 0; }
.course-item { padding: 10px 12px; background: #f1f5f9; margin-bottom: 8px; border-radius: 8px; font-weight: 500; }
.empty { color: #94a3b8; font-style: italic; }`,
      js: `function renderCourseList(courses) {
  const listEl = document.getElementById("course-list");
  // ล้างข้อมูลเดิมและสร้าง <li> ลงใน listEl ที่นี่
  
}

// ทดลองแสดงผลในหน้า Preview
renderCourseList(["HTML5 & CSS3", "JavaScript ES6", "DOM Manipulation"]);`
    },
    hints: [
      'เช็กก่อนว่า if (courses.length === 0) { listEl.innerHTML = `<li class="empty">ยังไม่มีวิชาเรียน</li>`; return; }',
      'ถ้ามีข้อมูล สามารถใช้ listEl.innerHTML = courses.map(c => `<li class="course-item">${c}</li>`).join(""); หรือใช้ document.createElement("li")'
    ],
    solution: {
      html: `<div class="card">
  <h3>📚 รายวิชาที่ลงทะเบียน</h3>
  <ul id="course-list"></ul>
</div>`,
      css: `body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
.card { background: white; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0; }
ul { list-style: none; padding: 0; margin: 0; }
.course-item { padding: 10px 12px; background: #f1f5f9; margin-bottom: 8px; border-radius: 8px; font-weight: 500; }
.empty { color: #94a3b8; font-style: italic; }`,
      js: `function renderCourseList(courses) {
  const listEl = document.getElementById("course-list");
  if (!courses || courses.length === 0) {
    listEl.innerHTML = '<li class="empty">ยังไม่มีวิชาเรียน</li>';
    return;
  }
  listEl.innerHTML = courses
    .map(course => \`<li class="course-item">\${course}</li>\`)
    .join("");
}

renderCourseList(["HTML5 & CSS3", "JavaScript ES6", "DOM Manipulation"]);`
    },
    testCases: [
      {
        name: 'เรนเดอร์วิชาเรียน 3 วิชาเป็น <li class="course-item"> ครบถ้วน',
        run: ({ win, doc }) => {
          win.renderCourseList(['JS Basic', 'DOM Mastery', 'Mini Web']);
          const items = doc.querySelectorAll('#course-list li.course-item');
          const texts = Array.from(items).map(el => el.textContent.trim());
          return {
            passed:
              items.length === 3 &&
              texts[0] === 'JS Basic' &&
              texts[2] === 'Mini Web',
            expected: '3 items: ["JS Basic", "DOM Mastery", "Mini Web"]',
            actual: `${items.length} items: ${JSON.stringify(texts)}`
          };
        }
      },
      {
        name: 'เมื่อส่ง Array ว่าง [] ต้องแสดง <li class="empty">ยังไม่มีวิชาเรียน</li>',
        run: ({ win, doc }) => {
          win.renderCourseList([]);
          const emptyEl = doc.querySelector('#course-list li.empty');
          const actual = emptyEl ? emptyEl.textContent.trim() : null;
          return {
            passed: actual === 'ยังไม่มีวิชาเรียน',
            expected: 'ยังไม่มีวิชาเรียน',
            actual
          };
        }
      },
      {
        name: 'เรียกซ้ำไม่ทำให้รายการเก่าค้างสะสม',
        run: ({ win, doc }) => {
          win.renderCourseList(['A', 'B', 'C']);
          win.renderCourseList(['Only One']);
          const items = doc.querySelectorAll('#course-list li.course-item');
          return {
            passed: items.length === 1 && items[0].textContent.trim() === 'Only One',
            expected: '1 item ("Only One")',
            actual: `${items.length} items`
          };
        }
      }
    ]
  },

  {
    id: 'fe-12',
    number: 12,
    subjectId: 'frontend',
    moduleId: 'mod-dom-core',
    title: 'ควบคุมสถานะปุ่มสั่งซื้อตามจำนวนสต็อก (DOM Attributes & Disabled)',
    difficulty: 'ปานกลาง',
    tags: ['DOM', 'disabled', 'Attributes', 'UI State'],
    defaultTab: 'js',
    description:
      'บนหน้าเว็บขายสินค้า เมื่อของหมดปุ่มสั่งซื้อต้องถูกปิดการใช้งาน (<code>disabled</code>) เพื่อป้องกันผู้ใช้กดซื้อ ให้เขียนฟังก์ชัน <code>updateStockUI(stockCount)</code>',
    requirements: [
      'ถ้า <code>stockCount &gt; 0</code>: ให้แสดงข้อความใน <code>#stock-status</code> ว่า <code>"มีสินค้าพร้อมส่ง ([stockCount] ชิ้น)"</code>, เปิดใช้งานปุ่ม <code>#buy-btn</code> (<code>disabled = false</code>) และเปลี่ยนข้อความปุ่มเป็น <code>"หยิบใส่ตะกร้า"</code>',
      'ถ้า <code>stockCount &lt;= 0</code>: ให้แสดงข้อความใน <code>#stock-status</code> ว่า <code>"สินค้าหมดชั่วคราว"</code>, ปิดการใช้งานปุ่ม <code>#buy-btn</code> (<code>disabled = true</code>) และเปลี่ยนข้อความปุ่มเป็น <code>"สินค้าหมด"</code>'
    ],
    starterCode: {
      html: `<div class="product-box">
  <h3>🎧 หูฟังตัดเสียงรบกวน Pro</h3>
  <p id="stock-status">กำลังตรวจสอบสต็อก...</p>
  <button id="buy-btn">หยิบใส่ตะกร้า</button>
</div>`,
      css: `body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
.product-box { background: white; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0; }
button { padding: 10px 18px; border-radius: 8px; border: none; background: #2563eb; color: white; font-weight: bold; cursor: pointer; }
button:disabled { background: #cbd5e1; color: #64748b; cursor: not-allowed; }`,
      js: `function updateStockUI(stockCount) {
  const statusEl = document.getElementById("stock-status");
  const buyBtn = document.getElementById("buy-btn");
  // เขียนโค้ดตรวจสอบ stockCount และอัปเดต DOM ที่นี่
  
}

updateStockUI(5);`
    },
    hints: [
      'ใช้ buyBtn.disabled = false; เมื่อมีสินค้า และ buyBtn.disabled = true; เมื่อสินค้าหมด',
      'อย่าลืมอัปเดตทั้ง statusEl.textContent และ buyBtn.textContent ตามที่โจทย์กำหนด'
    ],
    solution: {
      html: `<div class="product-box">
  <h3>🎧 หูฟังตัดเสียงรบกวน Pro</h3>
  <p id="stock-status">กำลังตรวจสอบสต็อก...</p>
  <button id="buy-btn">หยิบใส่ตะกร้า</button>
</div>`,
      css: `body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
.product-box { background: white; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0; }
button { padding: 10px 18px; border-radius: 8px; border: none; background: #2563eb; color: white; font-weight: bold; cursor: pointer; }
button:disabled { background: #cbd5e1; color: #64748b; cursor: not-allowed; }`,
      js: `function updateStockUI(stockCount) {
  const statusEl = document.getElementById("stock-status");
  const buyBtn = document.getElementById("buy-btn");

  if (stockCount > 0) {
    statusEl.textContent = \`มีสินค้าพร้อมส่ง (\${stockCount} ชิ้น)\`;
    buyBtn.disabled = false;
    buyBtn.textContent = "หยิบใส่ตะกร้า";
  } else {
    statusEl.textContent = "สินค้าหมดชั่วคราว";
    buyBtn.disabled = true;
    buyBtn.textContent = "สินค้าหมด";
  }
}

updateStockUI(5);`
    },
    testCases: [
      {
        name: 'เมื่อ stockCount = 8: แสดงจำนวนพร้อมส่ง และปุ่มไม่ถูก disabled',
        run: ({ win, doc }) => {
          win.updateStockUI(8);
          const status = doc.getElementById('stock-status').textContent.trim();
          const btn = doc.getElementById('buy-btn');
          return {
            passed:
              status === 'มีสินค้าพร้อมส่ง (8 ชิ้น)' &&
              btn.disabled === false &&
              btn.textContent.trim() === 'หยิบใส่ตะกร้า',
            expected: 'มีสินค้าพร้อมส่ง (8 ชิ้น), disabled=false, "หยิบใส่ตะกร้า"',
            actual: `${status}, disabled=${btn.disabled}, "${btn.textContent.trim()}"`
          };
        }
      },
      {
        name: 'เมื่อ stockCount = 0: แสดง "สินค้าหมดชั่วคราว" และปุ่มถูก disabled',
        run: ({ win, doc }) => {
          win.updateStockUI(0);
          const status = doc.getElementById('stock-status').textContent.trim();
          const btn = doc.getElementById('buy-btn');
          return {
            passed:
              status === 'สินค้าหมดชั่วคราว' &&
              btn.disabled === true &&
              btn.textContent.trim() === 'สินค้าหมด',
            expected: 'สินค้าหมดชั่วคราว, disabled=true, "สินค้าหมด"',
            actual: `${status}, disabled=${btn.disabled}, "${btn.textContent.trim()}"`
          };
        }
      },
      {
        name: 'เมื่อเติมสต็อกจาก 0 กลับมาเป็น 3 ปุ่มต้องกลับมาใช้งานได้',
        run: ({ win, doc }) => {
          win.updateStockUI(0);
          win.updateStockUI(3);
          const btn = doc.getElementById('buy-btn');
          return {
            passed: btn.disabled === false && btn.textContent.trim() === 'หยิบใส่ตะกร้า',
            expected: 'disabled=false, "หยิบใส่ตะกร้า"',
            actual: `disabled=${btn.disabled}, "${btn.textContent.trim()}"`
          };
        }
      }
    ]
  },

  // =========================================================================
  // MODULE 4: การโต้ตอบกับผู้ใช้ (Events, Inputs & Validation)
  // =========================================================================
  {
    id: 'fe-13',
    number: 13,
    subjectId: 'frontend',
    moduleId: 'mod-dom-events',
    title: 'สร้างแอปนับจำนวนสินค้าด้วย Click Events (Counter App)',
    difficulty: 'พื้นฐาน',
    tags: ['addEventListener', 'click', 'State & DOM'],
    defaultTab: 'js',
    description:
      'ฝึกการผูก Event Listener กับปุ่มบนหน้าเว็บ ให้คุณเขียนโค้ดดักจับการคลิกปุ่ม <code>#btn-inc</code>, <code>#btn-dec</code> และ <code>#btn-reset</code> เพื่ออัปเดตตัวเลขใน <code>#counter-value</code>',
    requirements: [
      'เมื่อคลิก <code>#btn-inc</code> ให้เพิ่มค่าทีละ 1 แล้วแสดงผลใน <code>#counter-value</code>',
      'เมื่อคลิก <code>#btn-dec</code> ให้ลดค่าทีละ 1 แต่ <strong>ห้ามลดต่ำกว่า 0</strong> (ถ้าเป็น 0 อยู่แล้วให้คงค่า 0 ไว้)',
      'เมื่อคลิก <code>#btn-reset</code> ให้รีเซ็ตค่ากลับเป็น <code>0</code>'
    ],
    starterCode: {
      html: `<div class="counter-card">
  <h3>🔢 จำนวนสินค้าที่เลือก</h3>
  <div id="counter-value" class="count-num">0</div>
  <div class="btn-row">
    <button id="btn-dec">- ลด</button>
    <button id="btn-reset">รีเซ็ต</button>
    <button id="btn-inc">+ เพิ่ม</button>
  </div>
</div>`,
      css: `body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
.counter-card { background: white; padding: 24px; border-radius: 14px; text-align: center; border: 1px solid #e2e8f0; }
.count-num { font-size: 2.5rem; font-weight: bold; color: #2563eb; margin: 12px 0; }
.btn-row { display: flex; gap: 10px; justify-content: center; }
button { padding: 8px 16px; border-radius: 8px; border: 1px solid #cbd5e1; background: #f1f5f9; cursor: pointer; font-weight: bold; }`,
      js: `let count = 0;
const valueEl = document.getElementById("counter-value");
const btnInc = document.getElementById("btn-inc");
const btnDec = document.getElementById("btn-dec");
const btnReset = document.getElementById("btn-reset");

// ผูก addEventListener('click', ...) ให้ปุ่มทั้ง 3 ที่นี่
`
    },
    hints: [
      'ใช้ btnInc.addEventListener("click", () => { count++; valueEl.textContent = count; });',
      'ในปุ่มลด ให้เช็ก if (count > 0) { count--; } ก่อนอัปเดต valueEl.textContent'
    ],
    solution: {
      html: `<div class="counter-card">
  <h3>🔢 จำนวนสินค้าที่เลือก</h3>
  <div id="counter-value" class="count-num">0</div>
  <div class="btn-row">
    <button id="btn-dec">- ลด</button>
    <button id="btn-reset">รีเซ็ต</button>
    <button id="btn-inc">+ เพิ่ม</button>
  </div>
</div>`,
      css: `body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
.counter-card { background: white; padding: 24px; border-radius: 14px; text-align: center; border: 1px solid #e2e8f0; }
.count-num { font-size: 2.5rem; font-weight: bold; color: #2563eb; margin: 12px 0; }
.btn-row { display: flex; gap: 10px; justify-content: center; }
button { padding: 8px 16px; border-radius: 8px; border: 1px solid #cbd5e1; background: #f1f5f9; cursor: pointer; font-weight: bold; }`,
      js: `let count = 0;
const valueEl = document.getElementById("counter-value");
const btnInc = document.getElementById("btn-inc");
const btnDec = document.getElementById("btn-dec");
const btnReset = document.getElementById("btn-reset");

function render() {
  valueEl.textContent = String(count);
}

btnInc.addEventListener("click", () => {
  count++;
  render();
});

btnDec.addEventListener("click", () => {
  if (count > 0) {
    count--;
    render();
  }
});

btnReset.addEventListener("click", () => {
  count = 0;
  render();
});`
    },
    testCases: [
      {
        name: 'กดปุ่ม #btn-inc 3 ครั้ง ค่าใน #counter-value ต้องเป็น "3"',
        run: ({ doc }) => {
          doc.getElementById('btn-reset').click();
          doc.getElementById('btn-inc').click();
          doc.getElementById('btn-inc').click();
          doc.getElementById('btn-inc').click();
          const actual = doc.getElementById('counter-value').textContent.trim();
          return { passed: actual === '3', expected: '3', actual };
        }
      },
      {
        name: 'กดลดจาก 3 ลง 1 ครั้ง เหลือ "2" และกดรีเซ็ตกลับเป็น "0"',
        run: ({ doc }) => {
          doc.getElementById('btn-reset').click();
          doc.getElementById('btn-inc').click();
          doc.getElementById('btn-inc').click();
          doc.getElementById('btn-dec').click();
          const afterDec = doc.getElementById('counter-value').textContent.trim();
          doc.getElementById('btn-reset').click();
          const afterReset = doc.getElementById('counter-value').textContent.trim();
          return {
            passed: afterDec === '1' && afterReset === '0',
            expected: 'afterDec="1", afterReset="0"',
            actual: `afterDec="${afterDec}", afterReset="${afterReset}"`
          };
        }
      },
      {
        name: 'เมื่อค่าเป็น 0 แล้วกด #btn-dec ค่าต้องไม่ติดลบ (คงเป็น "0")',
        run: ({ doc }) => {
          doc.getElementById('btn-reset').click();
          doc.getElementById('btn-dec').click();
          doc.getElementById('btn-dec').click();
          const actual = doc.getElementById('counter-value').textContent.trim();
          return { passed: actual === '0', expected: '0', actual };
        }
      }
    ]
  },

  {
    id: 'fe-14',
    number: 14,
    subjectId: 'frontend',
    moduleId: 'mod-dom-events',
    title: 'ระบบนับจำนวนตัวอักษรแบบเรียลไทม์ (Input Event & Live Counter)',
    difficulty: 'ปานกลาง',
    tags: ['input event', 'value.length', 'classList'],
    defaultTab: 'js',
    description:
      'เวลาพิมพ์โพสต์หรือตั้งชื่อโปรไฟล์ เว็บจะแสดงจำนวนตัวอักษรแบบสดๆ ให้เขียนโค้ดดักจับ Event <code>input</code> บน <code>#bio-input</code> เพื่ออัปเดต <code>#char-count</code>',
    requirements: [
      'ทุกครั้งที่ผู้ใช้พิมพ์ใน <code>#bio-input</code> ให้อัปเดตข้อความใน <code>#char-count</code> เป็นรูปแบบ <code>"[ความยาวข้อความ]/20"</code> เช่น <code>"5/20"</code>',
      'ถ้าความยาวข้อความ <strong>มากกว่า 20 ตัวอักษร</strong> ให้เพิ่มคลาส <code>limit-exceeded</code> ให้กับ <code>#char-count</code>',
      'ถ้าความยาวข้อความ <strong>ไม่เกิน 20 ตัวอักษร</strong> ให้ลบคลาส <code>limit-exceeded</code> ออกจาก <code>#char-count</code>'
    ],
    starterCode: {
      html: `<div class="card">
  <label for="bio-input">แนะนำตัวสั้นๆ (ไม่เกิน 20 ตัวอักษร):</label>
  <input id="bio-input" type="text" placeholder="พิมพ์ข้อความที่นี่..." />
  <div id="char-count" class="counter">0/20</div>
</div>`,
      css: `body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
.card { background: white; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0; }
input { width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box; }
.counter { font-size: 0.9rem; color: #64748b; font-weight: bold; }
.counter.limit-exceeded { color: #dc2626; }`,
      js: `const bioInput = document.getElementById("bio-input");
const charCount = document.getElementById("char-count");

// ดักจับ event 'input' บน bioInput ที่นี่
`
    },
    hints: [
      'ใช้ bioInput.addEventListener("input", () => { const len = bioInput.value.length; ... })',
      'อัปเดต charCount.textContent = `${len}/20`;',
      'ใช้ charCount.classList.toggle("limit-exceeded", len > 20); หรือใช้ if/else add/remove'
    ],
    solution: {
      html: `<div class="card">
  <label for="bio-input">แนะนำตัวสั้นๆ (ไม่เกิน 20 ตัวอักษร):</label>
  <input id="bio-input" type="text" placeholder="พิมพ์ข้อความที่นี่..." />
  <div id="char-count" class="counter">0/20</div>
</div>`,
      css: `body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
.card { background: white; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0; }
input { width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box; }
.counter { font-size: 0.9rem; color: #64748b; font-weight: bold; }
.counter.limit-exceeded { color: #dc2626; }`,
      js: `const bioInput = document.getElementById("bio-input");
const charCount = document.getElementById("char-count");

bioInput.addEventListener("input", () => {
  const len = bioInput.value.length;
  charCount.textContent = \`\${len}/20\`;
  if (len > 20) {
    charCount.classList.add("limit-exceeded");
  } else {
    charCount.classList.remove("limit-exceeded");
  }
});`
    },
    testCases: [
      {
        name: 'เมื่อพิมพ์ "Hello" (5 ตัวอักษร) แสดง "5/20" และไม่มีคลาส limit-exceeded',
        run: ({ win, doc }) => {
          const input = doc.getElementById('bio-input');
          const counter = doc.getElementById('char-count');
          input.value = 'Hello';
          input.dispatchEvent(new win.Event('input', { bubbles: true }));
          const text = counter.textContent.trim();
          const hasExceeded = counter.classList.contains('limit-exceeded');
          return {
            passed: text === '5/20' && !hasExceeded,
            expected: '5/20, limit-exceeded=false',
            actual: `${text}, limit-exceeded=${hasExceeded}`
          };
        }
      },
      {
        name: 'เมื่อพิมพ์เกิน 20 ตัวอักษร (25 ตัว) แสดง "25/20" และมีคลาส limit-exceeded',
        run: ({ win, doc }) => {
          const input = doc.getElementById('bio-input');
          const counter = doc.getElementById('char-count');
          input.value = 'abcdefghijklmnopqrstuvwxyz'.slice(0, 25);
          input.dispatchEvent(new win.Event('input', { bubbles: true }));
          const text = counter.textContent.trim();
          const hasExceeded = counter.classList.contains('limit-exceeded');
          return {
            passed: text === '25/20' && hasExceeded,
            expected: '25/20, limit-exceeded=true',
            actual: `${text}, limit-exceeded=${hasExceeded}`
          };
        }
      },
      {
        name: 'เมื่อลบข้อความกลับมาเหลือ 10 ตัวอักษร คลาส limit-exceeded ต้องถูกลบออก',
        run: ({ win, doc }) => {
          const input = doc.getElementById('bio-input');
          const counter = doc.getElementById('char-count');
          input.value = '1234567890123456789012345';
          input.dispatchEvent(new win.Event('input', { bubbles: true }));
          input.value = '1234567890';
          input.dispatchEvent(new win.Event('input', { bubbles: true }));
          const hasExceeded = counter.classList.contains('limit-exceeded');
          return {
            passed: counter.textContent.trim() === '10/20' && !hasExceeded,
            expected: '10/20, limit-exceeded=false',
            actual: `${counter.textContent.trim()}, limit-exceeded=${hasExceeded}`
          };
        }
      }
    ]
  },

  {
    id: 'fe-15',
    number: 15,
    subjectId: 'frontend',
    moduleId: 'mod-dom-events',
    title: 'ระบบตรวจสอบฟอร์มสมัครสมาชิก (Form Validation)',
    difficulty: 'ปานกลาง',
    tags: ['Forms', 'Validation', 'Events'],
    defaultTab: 'js',
    description:
      'ทุกเว็บไซต์ต้องมีการตรวจสอบความถูกต้องของข้อมูลก่อนส่งฟอร์ม ให้เขียนฟังก์ชัน <code>validateSignupForm()</code> และผูกกับปุ่ม <code>#submit-btn</code> เพื่อตรวจสอบอีเมลและรหัสผ่าน',
    requirements: [
      'อ่านค่าจาก <code>#email-input</code> (ตัดช่องว่างด้วย <code>trim()</code>) และ <code>#password-input</code>',
      'ถ้าอีเมลไม่มีเครื่องหมาย <code>"@"</code> ให้แสดงข้อความใน <code>#form-msg</code> ว่า <code>"รูปแบบอีเมลไม่ถูกต้อง"</code>',
      'แต่ถ้าอีเมลถูกต้องแล้ว ให้ตรวจรหัสผ่าน: ถ้ายาวน้อยกว่า 6 ตัวอักษร ให้แสดงใน <code>#form-msg</code> ว่า <code>"รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร"</code>',
      'ถ้าผ่านทั้งคู่ ให้แสดงใน <code>#form-msg</code> ว่า <code>"สมัครสมาชิกสำเร็จ"</code>'
    ],
    starterCode: {
      html: `<div class="form-card">
  <h3>🔐 สมัครสมาชิก</h3>
  <input id="email-input" type="text" placeholder="อีเมลของคุณ" />
  <input id="password-input" type="password" placeholder="รหัสผ่าน (อย่างน้อย 6 ตัว)" />
  <button id="submit-btn">ยืนยันการสมัคร</button>
  <p id="form-msg"></p>
</div>`,
      css: `body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
.form-card { background: white; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0; max-width: 360px; }
input { width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box; }
button { width: 100%; padding: 10px; background: #2563eb; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; }
#form-msg { margin-top: 12px; font-weight: 600; }`,
      js: `const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const submitBtn = document.getElementById("submit-btn");
const formMsg = document.getElementById("form-msg");

function validateSignupForm() {
  // ตรวจสอบ emailInput.value และ passwordInput.value แล้วแสดงผลใน formMsg
  
}

submitBtn.addEventListener("click", validateSignupForm);`
    },
    hints: [
      'ตรวจอีเมลก่อน: if (!emailInput.value.trim().includes("@")) { formMsg.textContent = "รูปแบบอีเมลไม่ถูกต้อง"; return; }',
      'ตรวจความยาวรหัสผ่าน: if (passwordInput.value.length < 6) { formMsg.textContent = "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร"; return; }',
      'ถ้าไม่ติดเงื่อนไขใดเลย ตั้งค่า formMsg.textContent = "สมัครสมาชิกสำเร็จ";'
    ],
    solution: {
      html: `<div class="form-card">
  <h3>🔐 สมัครสมาชิก</h3>
  <input id="email-input" type="text" placeholder="อีเมลของคุณ" />
  <input id="password-input" type="password" placeholder="รหัสผ่าน (อย่างน้อย 6 ตัว)" />
  <button id="submit-btn">ยืนยันการสมัคร</button>
  <p id="form-msg"></p>
</div>`,
      css: `body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
.form-card { background: white; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0; max-width: 360px; }
input { width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box; }
button { width: 100%; padding: 10px; background: #2563eb; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; }
#form-msg { margin-top: 12px; font-weight: 600; }`,
      js: `const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const submitBtn = document.getElementById("submit-btn");
const formMsg = document.getElementById("form-msg");

function validateSignupForm() {
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!email.includes("@")) {
    formMsg.textContent = "รูปแบบอีเมลไม่ถูกต้อง";
    return;
  }

  if (password.length < 6) {
    formMsg.textContent = "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร";
    return;
  }

  formMsg.textContent = "สมัครสมาชิกสำเร็จ";
}

submitBtn.addEventListener("click", validateSignupForm);`
    },
    testCases: [
      {
        name: 'กรณีอีเมลไม่มี "@" ต้องแสดง "รูปแบบอีเมลไม่ถูกต้อง"',
        run: ({ doc }) => {
          doc.getElementById('email-input').value = 'invalidemail.com';
          doc.getElementById('password-input').value = '12345678';
          doc.getElementById('submit-btn').click();
          const actual = doc.getElementById('form-msg').textContent.trim();
          const expected = 'รูปแบบอีเมลไม่ถูกต้อง';
          return { passed: actual === expected, expected, actual };
        }
      },
      {
        name: 'กรณีอีเมลถูกต้อง แต่รหัสผ่านสั้นกว่า 6 ตัว ต้องแสดง "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร"',
        run: ({ doc }) => {
          doc.getElementById('email-input').value = 'user@example.com';
          doc.getElementById('password-input').value = '12345';
          doc.getElementById('submit-btn').click();
          const actual = doc.getElementById('form-msg').textContent.trim();
          const expected = 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร';
          return { passed: actual === expected, expected, actual };
        }
      },
      {
        name: 'กรณีอีเมลและรหัสผ่านถูกต้องครบถ้วน ต้องแสดง "สมัครสมาชิกสำเร็จ"',
        run: ({ doc }) => {
          doc.getElementById('email-input').value = 'chinnakrit@dev.com';
          doc.getElementById('password-input').value = 'secret123';
          doc.getElementById('submit-btn').click();
          const actual = doc.getElementById('form-msg').textContent.trim();
          const expected = 'สมัครสมาชิกสำเร็จ';
          return { passed: actual === expected, expected, actual };
        }
      }
    ]
  },

  {
    id: 'fe-16',
    number: 16,
    subjectId: 'frontend',
    moduleId: 'mod-dom-events',
    title: 'ระบบสลับแท็บเนื้อหาบนหน้าเว็บ (Interactive Tabs UI)',
    difficulty: 'ปานกลาง',
    tags: ['querySelectorAll', 'dataset', 'Tabs UI'],
    defaultTab: 'js',
    description:
      'Component ที่พบบ่อยมากในเว็บจริงคือระบบ Tabs เมื่อคลิกปุ่มแท็บใด แท็บนั้นจะมีคลาส <code>active</code> และแสดงเฉพาะกล่องเนื้อหา <code>.tab-panel</code> ที่มี <code>id</code> ตรงกับ <code>data-target</code> ของปุ่มนั้น',
    requirements: [
      'เมื่อคลิกปุ่ม <code>.tab-btn</code> ใดๆ ให้ลบคลาส <code>active</code> ออกจากปุ่ม <code>.tab-btn</code> ทุกปุ่ม แล้วเพิ่มคลาส <code>active</code> ให้ปุ่มที่ถูกคลิก',
      'ลบคลาส <code>active</code> ออกจาก <code>.tab-panel</code> ทุกอัน แล้วเพิ่มคลาส <code>active</code> ให้กับ Element ที่มี <code>id</code> ตรงกับค่า <code>btn.dataset.target</code>'
    ],
    starterCode: {
      html: `<div class="tabs-card">
  <div class="tab-buttons">
    <button class="tab-btn active" data-target="panel-overview">ภาพรวม</button>
    <button class="tab-btn" data-target="panel-curriculum">เนื้อหา</button>
    <button class="tab-btn" data-target="panel-reviews">รีวิว</button>
  </div>
  <div id="panel-overview" class="tab-panel active">ยินดีต้อนรับสู่คอร์สฝึกทำเว็บจากพื้นฐาน</div>
  <div id="panel-curriculum" class="tab-panel">บทเรียนประกอบด้วย JS, DOM และ Mini Projects</div>
  <div id="panel-reviews" class="tab-panel">คะแนนรีวิว 5.0 ดาวจากผู้เรียนจริง</div>
</div>`,
      css: `body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
.tabs-card { background: white; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0; }
.tab-buttons { display: flex; gap: 8px; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 14px; }
.tab-btn { padding: 8px 14px; border: none; background: #f1f5f9; border-radius: 8px; cursor: pointer; font-weight: 600; }
.tab-btn.active { background: #2563eb; color: white; }
.tab-panel { display: none; padding: 10px 0; color: #334155; }
.tab-panel.active { display: block; }`,
      js: `const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

// วนลูปผูก click event ให้แต่ละปุ่มใน tabButtons ที่นี่
`
    },
    hints: [
      'ใช้ tabButtons.forEach(btn => { btn.addEventListener("click", () => { ... }); });',
      'ข้างใน click handler: ลบ active จากทุกปุ่มด้วย tabButtons.forEach(b => b.classList.remove("active")) แล้ว btn.classList.add("active")',
      'ลบ active จากทุก panel ด้วย tabPanels.forEach(p => p.classList.remove("active")) แล้ว document.getElementById(btn.dataset.target).classList.add("active")'
    ],
    solution: {
      html: `<div class="tabs-card">
  <div class="tab-buttons">
    <button class="tab-btn active" data-target="panel-overview">ภาพรวม</button>
    <button class="tab-btn" data-target="panel-curriculum">เนื้อหา</button>
    <button class="tab-btn" data-target="panel-reviews">รีวิว</button>
  </div>
  <div id="panel-overview" class="tab-panel active">ยินดีต้อนรับสู่คอร์สฝึกทำเว็บจากพื้นฐาน</div>
  <div id="panel-curriculum" class="tab-panel">บทเรียนประกอบด้วย JS, DOM และ Mini Projects</div>
  <div id="panel-reviews" class="tab-panel">คะแนนรีวิว 5.0 ดาวจากผู้เรียนจริง</div>
</div>`,
      css: `body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
.tabs-card { background: white; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0; }
.tab-buttons { display: flex; gap: 8px; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 14px; }
.tab-btn { padding: 8px 14px; border: none; background: #f1f5f9; border-radius: 8px; cursor: pointer; font-weight: 600; }
.tab-btn.active { background: #2563eb; color: white; }
.tab-panel { display: none; padding: 10px 0; color: #334155; }
.tab-panel.active { display: block; }`,
      js: `const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    tabButtons.forEach(b => b.classList.remove("active"));
    tabPanels.forEach(p => p.classList.remove("active"));

    btn.classList.add("active");
    const targetPanel = document.getElementById(btn.dataset.target);
    if (targetPanel) {
      targetPanel.classList.add("active");
    }
  });
});`
    },
    testCases: [
      {
        name: 'คลิกแท็บที่ 2 (เนื้อหา) แล้ว #panel-curriculum มีคลาส active และแท็บแรกไม่มี active',
        run: ({ doc }) => {
          const btns = doc.querySelectorAll('.tab-btn');
          btns[1].click();
          const btn1Active = btns[1].classList.contains('active');
          const btn0Active = btns[0].classList.contains('active');
          const panelActive = doc.getElementById('panel-curriculum').classList.contains('active');
          return {
            passed: btn1Active && !btn0Active && panelActive,
            expected: 'btn[1].active=true, panel-curriculum.active=true',
            actual: `btn[1].active=${btn1Active}, panel-curriculum.active=${panelActive}`
          };
        }
      },
      {
        name: 'คลิกแท็บที่ 3 (รีวิว) แล้ว #panel-reviews แสดงผลและ panel อื่นถูกซ่อน',
        run: ({ doc }) => {
          const btns = doc.querySelectorAll('.tab-btn');
          btns[2].click();
          const pOverview = doc.getElementById('panel-overview').classList.contains('active');
          const pCurr = doc.getElementById('panel-curriculum').classList.contains('active');
          const pRev = doc.getElementById('panel-reviews').classList.contains('active');
          return {
            passed: !pOverview && !pCurr && pRev,
            expected: 'only #panel-reviews active',
            actual: `overview=${pOverview}, curriculum=${pCurr}, reviews=${pRev}`
          };
        }
      },
      {
        name: 'คลิกกลับมาที่แท็บแรก (ภาพรวม) ทำงานได้ปกติ',
        run: ({ doc }) => {
          const btns = doc.querySelectorAll('.tab-btn');
          btns[2].click();
          btns[0].click();
          const pOverview = doc.getElementById('panel-overview').classList.contains('active');
          return {
            passed: pOverview && btns[0].classList.contains('active'),
            expected: '#panel-overview active',
            actual: `panel-overview.active=${pOverview}`
          };
        }
      }
    ]
  }
];
