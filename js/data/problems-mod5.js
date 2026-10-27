/**
 * โจทย์บทที่ 5 (Mini Web Applications) — รวมทุกทักษะมาสร้างเว็บแอปที่ทำงานได้จริง
 */

window.PROBLEMS_MOD_5 = [
  {
    id: 'fe-17',
    number: 17,
    subjectId: 'frontend',
    moduleId: 'mod-web-projects',
    title: 'เว็บระบบค้นหารายชื่อบทเรียนแบบสด (Live Search Filter App)',
    difficulty: 'ใช้งานจริง',
    tags: ['Live Filter', 'DOM + Array', 'Input Event'],
    defaultTab: 'js',
    description:
      'สร้างระบบค้นหาแบบเรียลไทม์บนหน้าเว็บ เมื่อผู้ใช้พิมพ์คำค้นหาใน <code>#search-box</code> ให้กรองรายการจากตัวแปร <code>ALL_TOPICS</code> แล้วเรนเดอร์เฉพาะรายการที่ตรงเงื่อนไขลงใน <code>#topic-list</code>',
    requirements: [
      'เมื่อพิมพ์ใน <code>#search-box</code> ให้กรองรายการใน <code>ALL_TOPICS</code> ที่มีคำค้นหาอยู่ (ไม่สนใจตัวพิมพ์เล็ก-ใหญ่)',
      'นำรายการที่ผ่านการกรองมาสร้างเป็น <code>&lt;li class="topic-item"&gt;[ชื่อหัวข้อ]&lt;/li&gt;</code> ใส่ใน <code>#topic-list</code>',
      'อัปเดตตัวเลขจำนวนที่พบใน <code>#found-count</code> ให้ตรงกับจำนวนรายการที่แสดงอยู่'
    ],
    starterCode: {
      html: `<div class="app-box">
  <h3>🔍 ค้นหาบทเรียน Frontend</h3>
  <input id="search-box" type="text" placeholder="พิมพ์ค้นหา เช่น CSS, DOM, React..." />
  <p class="meta">พบทั้งหมด <strong id="found-count">4</strong> รายการ</p>
  <ul id="topic-list"></ul>
</div>`,
      css: `body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
.app-box { background: white; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0; }
input { width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box; }
.meta { font-size: 0.85rem; color: #64748b; margin: 10px 0; }
ul { list-style: none; padding: 0; margin: 0; }
.topic-item { padding: 10px; background: #f1f5f9; border-radius: 8px; margin-bottom: 6px; }`,
      js: `const ALL_TOPICS = [
  "HTML5 Semantic Layout",
  "CSS Flexbox & Grid",
  "JavaScript Fundamentals",
  "DOM Manipulation & Events"
];

const searchBox = document.getElementById("search-box");
const foundCount = document.getElementById("found-count");
const topicList = document.getElementById("topic-list");

function renderTopics(keyword = "") {
  // กรอง ALL_TOPICS ตาม keyword แล้วอัปเดต #topic-list และ #found-count
  
}

searchBox.addEventListener("input", () => {
  renderTopics(searchBox.value);
});

// เรียกแสดงผลครั้งแรก
renderTopics("");`
    },
    hints: [
      'ใน renderTopics(keyword): แปลง keyword เป็นตัวพิมพ์เล็ก const q = keyword.trim().toLowerCase();',
      'กรองด้วย const filtered = ALL_TOPICS.filter(t => t.toLowerCase().includes(q));',
      'ตั้งค่า foundCount.textContent = String(filtered.length); และสร้าง <li class="topic-item"> ลงใน topicList.innerHTML'
    ],
    solution: {
      html: `<div class="app-box">
  <h3>🔍 ค้นหาบทเรียน Frontend</h3>
  <input id="search-box" type="text" placeholder="พิมพ์ค้นหา เช่น CSS, DOM, React..." />
  <p class="meta">พบทั้งหมด <strong id="found-count">4</strong> รายการ</p>
  <ul id="topic-list"></ul>
</div>`,
      css: `body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
.app-box { background: white; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0; }
input { width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box; }
.meta { font-size: 0.85rem; color: #64748b; margin: 10px 0; }
ul { list-style: none; padding: 0; margin: 0; }
.topic-item { padding: 10px; background: #f1f5f9; border-radius: 8px; margin-bottom: 6px; }`,
      js: `const ALL_TOPICS = [
  "HTML5 Semantic Layout",
  "CSS Flexbox & Grid",
  "JavaScript Fundamentals",
  "DOM Manipulation & Events"
];

const searchBox = document.getElementById("search-box");
const foundCount = document.getElementById("found-count");
const topicList = document.getElementById("topic-list");

function renderTopics(keyword = "") {
  const q = keyword.trim().toLowerCase();
  const filtered = ALL_TOPICS.filter(topic =>
    topic.toLowerCase().includes(q)
  );

  foundCount.textContent = String(filtered.length);
  topicList.innerHTML = filtered
    .map(topic => \`<li class="topic-item">\${topic}</li>\`)
    .join("");
}

searchBox.addEventListener("input", () => {
  renderTopics(searchBox.value);
});

renderTopics("");`
    },
    testCases: [
      {
        name: 'เริ่มต้นเมื่อยังไม่ค้นหา แสดงครบ 4 รายการ และ #found-count เป็น "4"',
        run: ({ win, doc }) => {
          const input = doc.getElementById('search-box');
          input.value = '';
          input.dispatchEvent(new win.Event('input', { bubbles: true }));
          const count = doc.getElementById('found-count').textContent.trim();
          const items = doc.querySelectorAll('#topic-list .topic-item');
          return {
            passed: count === '4' && items.length === 4,
            expected: 'count="4", items=4',
            actual: `count="${count}", items=${items.length}`
          };
        }
      },
      {
        name: 'พิมพ์ค้นหา "dom" (ตัวพิมพ์เล็ก) พบ 1 รายการ ("DOM Manipulation & Events")',
        run: ({ win, doc }) => {
          const input = doc.getElementById('search-box');
          input.value = 'dom';
          input.dispatchEvent(new win.Event('input', { bubbles: true }));
          const count = doc.getElementById('found-count').textContent.trim();
          const items = doc.querySelectorAll('#topic-list .topic-item');
          const firstText = items[0] ? items[0].textContent.trim() : '';
          return {
            passed:
              count === '1' &&
              items.length === 1 &&
              firstText === 'DOM Manipulation & Events',
            expected: 'count="1", ["DOM Manipulation & Events"]',
            actual: `count="${count}", ["${firstText}"]`
          };
        }
      },
      {
        name: 'พิมพ์คำที่ไม่มีในระบบ แสดง 0 รายการ',
        run: ({ win, doc }) => {
          const input = doc.getElementById('search-box');
          input.value = 'python';
          input.dispatchEvent(new win.Event('input', { bubbles: true }));
          const count = doc.getElementById('found-count').textContent.trim();
          const items = doc.querySelectorAll('#topic-list .topic-item');
          return {
            passed: count === '0' && items.length === 0,
            expected: 'count="0", items=0',
            actual: `count="${count}", items=${items.length}`
          };
        }
      }
    ]
  },

  {
    id: 'fe-18',
    number: 18,
    subjectId: 'frontend',
    moduleId: 'mod-web-projects',
    title: 'เว็บแอปบันทึกรายจ่ายและคำนวณยอดรวม (Expense Tracker App)',
    difficulty: 'ใช้งานจริง',
    tags: ['Web App', 'Forms & Lists', 'Dynamic Total'],
    defaultTab: 'js',
    description:
      'สร้างมินิเว็บแอปบันทึกรายจ่ายประจำวัน เมื่อกรอกชื่อรายการใน <code>#exp-title</code> และจำนวนเงินใน <code>#exp-amount</code> แล้วคลิกปุ่ม <code>#add-exp-btn</code> ให้เพิ่มรายการลงใน <code>#exp-list</code> และอัปเดตยอดรวมใน <code>#total-amount</code>',
    requirements: [
      'ตรวจสอบก่อนว่าชื่อรายการไม่ว่าง และจำนวนเงินที่แปลงด้วย <code>Number()</code> ต้องมีค่า <code>&gt; 0</code> (ถ้าไม่ถูกต้องไม่ต้องเพิ่มรายการ)',
      'เพิ่ม <code>&lt;li class="exp-item"&gt;[ชื่อรายการ] - [จำนวนเงิน] บาท&lt;/li&gt;</code> ลงใน <code>#exp-list</code>',
      'คำนวณยอดรวมทั้งหมดแล้วแสดงตัวเลขใน <code>#total-amount</code> จากนั้นล้างค่าในช่อง Input ทั้งสองช่องให้ว่าง'
    ],
    starterCode: {
      html: `<div class="tracker-card">
  <h3>💰 บันทึกรายจ่ายประจำวัน</h3>
  <div class="input-row">
    <input id="exp-title" type="text" placeholder="ชื่อรายการ เช่น ค่ากาแฟ" />
    <input id="exp-amount" type="number" placeholder="จำนวนเงิน" />
    <button id="add-exp-btn">+ เพิ่ม</button>
  </div>
  <ul id="exp-list"></ul>
  <div class="total-bar">ยอดรวมทั้งหมด: <strong id="total-amount">0</strong> บาท</div>
</div>`,
      css: `body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
.tracker-card { background: white; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0; }
.input-row { display: flex; gap: 8px; margin-bottom: 14px; }
input { flex: 1; padding: 8px 10px; border: 1px solid #cbd5e1; border-radius: 8px; }
button { padding: 8px 16px; background: #10b981; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; }
ul { list-style: none; padding: 0; margin: 0 0 14px; }
.exp-item { padding: 8px 12px; background: #f1f5f9; border-radius: 6px; margin-bottom: 6px; }
.total-bar { font-size: 1.05rem; color: #0f172a; border-top: 1px solid #e2e8f0; padding-top: 12px; }`,
      js: `const titleInput = document.getElementById("exp-title");
const amountInput = document.getElementById("exp-amount");
const addBtn = document.getElementById("add-exp-btn");
const expList = document.getElementById("exp-list");
const totalAmountEl = document.getElementById("total-amount");

let total = 0;

// เขียนโค้ดเมื่อคลิกปุ่ม addBtn ที่นี่
`
    },
    hints: [
      'อ่านค่า const title = titleInput.value.trim(); และ const amount = Number(amountInput.value);',
      'เช็ก if (!title || amount <= 0) return;',
      'สร้าง <li> เพิ่มเข้า expList, บวก amount เข้ากับ total, อัปเดต totalAmountEl.textContent = String(total) แล้วล้าง titleInput.value = "" และ amountInput.value = ""'
    ],
    solution: {
      html: `<div class="tracker-card">
  <h3>💰 บันทึกรายจ่ายประจำวัน</h3>
  <div class="input-row">
    <input id="exp-title" type="text" placeholder="ชื่อรายการ เช่น ค่ากาแฟ" />
    <input id="exp-amount" type="number" placeholder="จำนวนเงิน" />
    <button id="add-exp-btn">+ เพิ่ม</button>
  </div>
  <ul id="exp-list"></ul>
  <div class="total-bar">ยอดรวมทั้งหมด: <strong id="total-amount">0</strong> บาท</div>
</div>`,
      css: `body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
.tracker-card { background: white; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0; }
.input-row { display: flex; gap: 8px; margin-bottom: 14px; }
input { flex: 1; padding: 8px 10px; border: 1px solid #cbd5e1; border-radius: 8px; }
button { padding: 8px 16px; background: #10b981; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; }
ul { list-style: none; padding: 0; margin: 0 0 14px; }
.exp-item { padding: 8px 12px; background: #f1f5f9; border-radius: 6px; margin-bottom: 6px; }
.total-bar { font-size: 1.05rem; color: #0f172a; border-top: 1px solid #e2e8f0; padding-top: 12px; }`,
      js: `const titleInput = document.getElementById("exp-title");
const amountInput = document.getElementById("exp-amount");
const addBtn = document.getElementById("add-exp-btn");
const expList = document.getElementById("exp-list");
const totalAmountEl = document.getElementById("total-amount");

let total = 0;

addBtn.addEventListener("click", () => {
  const title = titleInput.value.trim();
  const amount = Number(amountInput.value);

  if (!title || !amount || amount <= 0) {
    return;
  }

  const li = document.createElement("li");
  li.className = "exp-item";
  li.textContent = \`\${title} - \${amount} บาท\`;
  expList.appendChild(li);

  total += amount;
  totalAmountEl.textContent = String(total);

  titleInput.value = "";
  amountInput.value = "";
});`
    },
    testCases: [
      {
        name: 'เพิ่มรายการ "ค่ากาแฟ" 65 บาท แล้วแสดงใน #exp-list และยอดรวมเป็น "65"',
        run: ({ doc }) => {
          doc.getElementById('exp-title').value = 'ค่ากาแฟ';
          doc.getElementById('exp-amount').value = '65';
          doc.getElementById('add-exp-btn').click();
          const items = doc.querySelectorAll('#exp-list .exp-item');
          const total = doc.getElementById('total-amount').textContent.trim();
          return {
            passed:
              items.length >= 1 &&
              items[items.length - 1].textContent.trim() === 'ค่ากาแฟ - 65 บาท' &&
              total === '65',
            expected: '"ค่ากาแฟ - 65 บาท", total="65"',
            actual: `"${items[items.length - 1]?.textContent.trim()}", total="${total}"`
          };
        }
      },
      {
        name: 'เพิ่มรายการที่ 2 "ค่าอาหาร" 120 บาท ยอดรวมสะสมต้องอัปเดตถูกต้อง',
        run: ({ doc }) => {
          const prevTotal = Number(doc.getElementById('total-amount').textContent.trim()) || 0;
          doc.getElementById('exp-title').value = 'ค่าอาหาร';
          doc.getElementById('exp-amount').value = '120';
          doc.getElementById('add-exp-btn').click();
          const newTotal = doc.getElementById('total-amount').textContent.trim();
          const expectedTotal = String(prevTotal + 120);
          return {
            passed: newTotal === expectedTotal && doc.getElementById('exp-title').value === '',
            expected: `total="${expectedTotal}", input cleared`,
            actual: `total="${newTotal}", input="${doc.getElementById('exp-title').value}"`
          };
        }
      },
      {
        name: 'กรณีไม่กรอกชื่อรายการ หรือจำนวนเงิน <= 0 ต้องไม่เพิ่มรายการใหม่',
        run: ({ doc }) => {
          const beforeCount = doc.querySelectorAll('#exp-list .exp-item').length;
          doc.getElementById('exp-title').value = '';
          doc.getElementById('exp-amount').value = '100';
          doc.getElementById('add-exp-btn').click();
          const afterCount = doc.querySelectorAll('#exp-list .exp-item').length;
          return {
            passed: beforeCount === afterCount,
            expected: `${beforeCount} items`,
            actual: `${afterCount} items`
          };
        }
      }
    ]
  },

  {
    id: 'fe-19',
    number: 19,
    subjectId: 'frontend',
    moduleId: 'mod-web-projects',
    title: 'เว็บแอปจัดการงานที่ต้องทำ (Interactive Todo List App)',
    difficulty: 'ใช้งานจริง',
    tags: ['Todo App', 'Event Delegation', 'State Management'],
    defaultTab: 'js',
    description:
      'โปรเจกต์คลาสสิกสำหรับนักพัฒนาเว็บทุกคน! สร้างระบบ Todo List ที่สามารถเพิ่มงานใหม่ คลิกที่รายการเพื่อสลับสถานะทำเสร็จแล้ว (<code>completed</code>) และนับจำนวนงานที่ยังทำไม่เสร็จ',
    requirements: [
      'เมื่อพิมพ์งานใน <code>#todo-input</code> (ไม่ว่างเปล่า) แล้วคลิก <code>#add-todo-btn</code> ให้สร้าง <code>&lt;li class="todo-item"&gt;[ชื่องาน]&lt;/li&gt;</code> ลงใน <code>#todo-list</code> และล้างช่อง Input',
      'เมื่อคลิกที่ <code>.todo-item</code> ใดๆ ให้สลับ (toggle) คลาส <code>completed</code> บนรายการนั้น',
      'อัปเดตตัวเลขใน <code>#remaining-count</code> ให้แสดงจำนวน <code>.todo-item</code> ที่ <strong>ยังไม่มีคลาส</strong> <code>completed</code> เสมอ'
    ],
    starterCode: {
      html: `<div class="todo-app">
  <h3>✅ Todo List ของฉัน</h3>
  <div class="todo-form">
    <input id="todo-input" type="text" placeholder="เพิ่มงานที่ต้องทำ..." />
    <button id="add-todo-btn">เพิ่มงาน</button>
  </div>
  <p class="status-text">งานที่เหลือ: <strong id="remaining-count">0</strong> งาน</p>
  <ul id="todo-list"></ul>
</div>`,
      css: `body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
.todo-app { background: white; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0; }
.todo-form { display: flex; gap: 8px; }
input { flex: 1; padding: 9px 12px; border: 1px solid #cbd5e1; border-radius: 8px; }
button { padding: 9px 16px; background: #2563eb; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; }
.status-text { font-size: 0.88rem; color: #64748b; margin: 12px 0; }
ul { list-style: none; padding: 0; margin: 0; }
.todo-item { padding: 10px 12px; background: #f1f5f9; border-radius: 8px; margin-bottom: 8px; cursor: pointer; user-select: none; }
.todo-item.completed { text-decoration: line-through; color: #94a3b8; background: #f8fafc; }`,
      js: `const todoInput = document.getElementById("todo-input");
const addTodoBtn = document.getElementById("add-todo-btn");
const todoList = document.getElementById("todo-list");
const remainingCount = document.getElementById("remaining-count");

function updateRemainingCount() {
  // นับจำนวน .todo-item ที่ไม่มีคลาส .completed แล้วแสดงใน remainingCount
  
}

// เขียนโค้ดเพิ่มรายการ และคลิกเพื่อ toggle คลาส completed ที่นี่
`
    },
    hints: [
      'ใน updateRemainingCount(): ใช้ const activeItems = todoList.querySelectorAll(".todo-item:not(.completed)"); remainingCount.textContent = String(activeItems.length);',
      'ตอนสร้าง const li = document.createElement("li"); li.className = "todo-item"; ให้ผูก li.addEventListener("click", () => { li.classList.toggle("completed"); updateRemainingCount(); });',
      'อย่าลืมเรียก updateRemainingCount() ทันทีหลังจาก appendChild(li) ด้วย'
    ],
    solution: {
      html: `<div class="todo-app">
  <h3>✅ Todo List ของฉัน</h3>
  <div class="todo-form">
    <input id="todo-input" type="text" placeholder="เพิ่มงานที่ต้องทำ..." />
    <button id="add-todo-btn">เพิ่มงาน</button>
  </div>
  <p class="status-text">งานที่เหลือ: <strong id="remaining-count">0</strong> งาน</p>
  <ul id="todo-list"></ul>
</div>`,
      css: `body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
.todo-app { background: white; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0; }
.todo-form { display: flex; gap: 8px; }
input { flex: 1; padding: 9px 12px; border: 1px solid #cbd5e1; border-radius: 8px; }
button { padding: 9px 16px; background: #2563eb; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; }
.status-text { font-size: 0.88rem; color: #64748b; margin: 12px 0; }
ul { list-style: none; padding: 0; margin: 0; }
.todo-item { padding: 10px 12px; background: #f1f5f9; border-radius: 8px; margin-bottom: 8px; cursor: pointer; user-select: none; }
.todo-item.completed { text-decoration: line-through; color: #94a3b8; background: #f8fafc; }`,
      js: `const todoInput = document.getElementById("todo-input");
const addTodoBtn = document.getElementById("add-todo-btn");
const todoList = document.getElementById("todo-list");
const remainingCount = document.getElementById("remaining-count");

function updateRemainingCount() {
  const remaining = todoList.querySelectorAll(".todo-item:not(.completed)").length;
  remainingCount.textContent = String(remaining);
}

addTodoBtn.addEventListener("click", () => {
  const text = todoInput.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.className = "todo-item";
  li.textContent = text;

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
    updateRemainingCount();
  });

  todoList.appendChild(li);
  todoInput.value = "";
  updateRemainingCount();
});`
    },
    testCases: [
      {
        name: 'เพิ่มงาน 2 รายการ แสดงใน #todo-list และ #remaining-count เป็น "2"',
        run: ({ doc }) => {
          doc.getElementById('todo-list').innerHTML = '';
          const input = doc.getElementById('todo-input');
          const btn = doc.getElementById('add-todo-btn');

          input.value = 'ฝึกทำโจทย์ JS';
          btn.click();
          input.value = 'สร้างเว็บพอร์ตโฟลิโอ';
          btn.click();

          const items = doc.querySelectorAll('#todo-list .todo-item');
          const rem = doc.getElementById('remaining-count').textContent.trim();
          return {
            passed: items.length === 2 && rem === '2',
            expected: '2 items, remaining="2"',
            actual: `${items.length} items, remaining="${rem}"`
          };
        }
      },
      {
        name: 'คลิกที่รายการแรกเพื่อขีดฆ่าว่าเสร็จ (มีคลาส completed) และงานที่เหลือลดลงเป็น "1"',
        run: ({ doc }) => {
          const items = doc.querySelectorAll('#todo-list .todo-item');
          if (items.length === 0) {
            return { passed: false, expected: 'มีรายการให้คลิก', actual: 'ไม่มีรายการ' };
          }
          items[0].click();
          const hasCompleted = items[0].classList.contains('completed');
          const rem = doc.getElementById('remaining-count').textContent.trim();
          return {
            passed: hasCompleted && rem === '1',
            expected: 'completed=true, remaining="1"',
            actual: `completed=${hasCompleted}, remaining="${rem}"`
          };
        }
      },
      {
        name: 'คลิกซ้ำที่รายการเดิมเพื่อยกเลิกสถานะเสร็จ งานที่เหลือกลับมาเป็น "2"',
        run: ({ doc }) => {
          const items = doc.querySelectorAll('#todo-list .todo-item');
          if (items.length === 0) {
            return { passed: false, expected: 'มีรายการให้คลิก', actual: 'ไม่มีรายการ' };
          }
          if (!items[0].classList.contains('completed')) {
            items[0].click();
          }
          items[0].click();
          const hasCompleted = items[0].classList.contains('completed');
          const rem = doc.getElementById('remaining-count').textContent.trim();
          return {
            passed: !hasCompleted && rem === '2',
            expected: 'completed=false, remaining="2"',
            actual: `completed=${hasCompleted}, remaining="${rem}"`
          };
        }
      }
    ]
  },

  {
    id: 'fe-20',
    number: 20,
    subjectId: 'frontend',
    moduleId: 'mod-web-projects',
    title: 'เว็บแอปทำแบบทดสอบและตรวจคะแนน (Mini Quiz Web App)',
    difficulty: 'ใช้งานจริง',
    tags: ['Quiz App', 'Full Web Logic', 'DOM & State'],
    defaultTab: 'js',
    description:
      'โปรเจกต์จบหมวดพื้นฐานสู่การสร้างเว็บจริง! สร้างระบบตรวจคำตอบแบบทดสอบ เมื่อผู้ใช้คลิกเลือกตัวเลือก <code>.choice-btn</code> ระบบจะตรวจคำตอบกับเฉลย เพิ่มคะแนน และเปลี่ยนไปข้อถัดไปจนจบ',
    requirements: [
      'สร้างฟังก์ชัน <code>submitAnswer(selectedChoice)</code> ที่ตรวจสอบว่า <code>selectedChoice</code> ตรงกับคำตอบที่ถูกของข้อปัจจุบัน (<code>QUESTIONS[currentIndex].answer</code>) หรือไม่ ถ้าตรงให้เพิ่ม <code>score</code> ขึ้น 1',
      'เลื่อน <code>currentIndex</code> ขึ้น 1 หากยังมีข้อถัดไป ให้แสดงคำถามข้อใหม่ใน <code>#question-text</code>',
      'หากทำครบทุกข้อแล้ว (<code>currentIndex &gt;= QUESTIONS.length</code>) ให้แสดงข้อความใน <code>#question-text</code> ว่า <code>"จบแบบทดสอบ! คุณได้ [score]/[จำนวนข้อทั้งหมด] คะแนน"</code>'
    ],
    starterCode: {
      html: `<div class="quiz-card">
  <h3>🏆 แบบทดสอบความเข้าใจ Frontend</h3>
  <p id="question-text" class="q-text"></p>
  <div id="choices-box" class="choices-box"></div>
</div>`,
      css: `body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
.quiz-card { background: white; padding: 22px; border-radius: 14px; border: 1px solid #e2e8f0; }
.q-text { font-size: 1.05rem; font-weight: 600; color: #0f172a; margin-bottom: 14px; }
.choices-box { display: grid; gap: 8px; }
.choice-btn { padding: 10px; border: 1px solid #cbd5e1; border-radius: 8px; background: #f8fafc; cursor: pointer; text-align: left; font-weight: 500; }
.choice-btn:hover { background: #dbeafe; border-color: #3b82f6; }`,
      js: `const QUESTIONS = [
  {
    q: "คำสั่งใดใช้เลือก Element ด้วย CSS Selector?",
    choices: ["querySelector", "getElement", "selectNode"],
    answer: "querySelector"
  },
  {
    q: "เมธอดใดใช้สร้าง Array ใหม่ที่ผ่านการกรองเงื่อนไข?",
    choices: ["map", "filter", "forEach"],
    answer: "filter"
  }
];

var currentIndex = 0;
var score = 0;

const questionText = document.getElementById("question-text");
const choicesBox = document.getElementById("choices-box");

function renderQuestion() {
  if (currentIndex >= QUESTIONS.length) {
    questionText.textContent = \`จบแบบทดสอบ! คุณได้ \${score}/\${QUESTIONS.length} คะแนน\`;
    choicesBox.innerHTML = "";
    return;
  }
  const item = QUESTIONS[currentIndex];
  questionText.textContent = item.q;
  choicesBox.innerHTML = item.choices
    .map(c => \`<button class="choice-btn" onclick="submitAnswer('\${c}')">\${c}</button>\`)
    .join("");
}

function submitAnswer(selectedChoice) {
  // ตรวจคำตอบ เพิ่มคะแนน เลื่อนข้อถัดไป และเรียก renderQuestion() ที่นี่
  
}

renderQuestion();`
    },
    hints: [
      'ตรวจสอบก่อนว่า if (currentIndex >= QUESTIONS.length) return;',
      'เช็กว่า if (selectedChoice === QUESTIONS[currentIndex].answer) { score++; }',
      'เพิ่มค่า currentIndex++; แล้วเรียก renderQuestion(); เพื่ออัปเดตหน้าเว็บ'
    ],
    solution: {
      html: `<div class="quiz-card">
  <h3>🏆 แบบทดสอบความเข้าใจ Frontend</h3>
  <p id="question-text" class="q-text"></p>
  <div id="choices-box" class="choices-box"></div>
</div>`,
      css: `body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
.quiz-card { background: white; padding: 22px; border-radius: 14px; border: 1px solid #e2e8f0; }
.q-text { font-size: 1.05rem; font-weight: 600; color: #0f172a; margin-bottom: 14px; }
.choices-box { display: grid; gap: 8px; }
.choice-btn { padding: 10px; border: 1px solid #cbd5e1; border-radius: 8px; background: #f8fafc; cursor: pointer; text-align: left; font-weight: 500; }
.choice-btn:hover { background: #dbeafe; border-color: #3b82f6; }`,
      js: `const QUESTIONS = [
  {
    q: "คำสั่งใดใช้เลือก Element ด้วย CSS Selector?",
    choices: ["querySelector", "getElement", "selectNode"],
    answer: "querySelector"
  },
  {
    q: "เมธอดใดใช้สร้าง Array ใหม่ที่ผ่านการกรองเงื่อนไข?",
    choices: ["map", "filter", "forEach"],
    answer: "filter"
  }
];

var currentIndex = 0;
var score = 0;

const questionText = document.getElementById("question-text");
const choicesBox = document.getElementById("choices-box");

function renderQuestion() {
  if (currentIndex >= QUESTIONS.length) {
    questionText.textContent = \`จบแบบทดสอบ! คุณได้ \${score}/\${QUESTIONS.length} คะแนน\`;
    choicesBox.innerHTML = "";
    return;
  }
  const item = QUESTIONS[currentIndex];
  questionText.textContent = item.q;
  choicesBox.innerHTML = item.choices
    .map(c => \`<button class="choice-btn" onclick="submitAnswer('\${c}')">\${c}</button>\`)
    .join("");
}

function submitAnswer(selectedChoice) {
  if (currentIndex >= QUESTIONS.length) return;
  if (selectedChoice === QUESTIONS[currentIndex].answer) {
    score++;
  }
  currentIndex++;
  renderQuestion();
}

renderQuestion();`
    },
    testCases: [
      {
        name: 'ตอบข้อแรกถูก ระบบเลื่อนไปยังคำถามข้อที่ 2',
        run: ({ win, doc }) => {
          win.currentIndex = 0;
          win.score = 0;
          win.renderQuestion();
          win.submitAnswer('querySelector');
          const actual = doc.getElementById('question-text').textContent.trim();
          const expected = 'เมธอดใดใช้สร้าง Array ใหม่ที่ผ่านการกรองเงื่อนไข?';
          return { passed: actual === expected, expected, actual };
        }
      },
      {
        name: 'ตอบถูกทั้ง 2 ข้อ แสดงสรุป "จบแบบทดสอบ! คุณได้ 2/2 คะแนน"',
        run: ({ win, doc }) => {
          win.currentIndex = 0;
          win.score = 0;
          win.renderQuestion();
          win.submitAnswer('querySelector');
          win.submitAnswer('filter');
          const actual = doc.getElementById('question-text').textContent.trim();
          const expected = 'จบแบบทดสอบ! คุณได้ 2/2 คะแนน';
          return { passed: actual === expected, expected, actual };
        }
      },
      {
        name: 'กรณีตอบถูก 1 ข้อ ผิด 1 ข้อ แสดงสรุป "จบแบบทดสอบ! คุณได้ 1/2 คะแนน"',
        run: ({ win, doc }) => {
          win.currentIndex = 0;
          win.score = 0;
          win.renderQuestion();
          win.submitAnswer('querySelector');
          win.submitAnswer('map');
          const actual = doc.getElementById('question-text').textContent.trim();
          const expected = 'จบแบบทดสอบ! คุณได้ 1/2 คะแนน';
          return { passed: actual === expected, expected, actual };
        }
      }
    ]
  }
];
