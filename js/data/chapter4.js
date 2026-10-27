/**
 * บทที่ 4: การโต้ตอบกับผู้ใช้ — Events, Forms & Async
 * ประกอบด้วย: เนื้อหาบทเรียน + คำสั่งที่ต้องใช้ + ตัวอย่างโค้ด + โจทย์ 35 ข้อ (ง่าย 20, ปานกลาง 10, ยาก 5)
 */

function makeEventProblem({
  num,
  id,
  title,
  difficulty,
  tags,
  description,
  requirements,
  html,
  starterJs,
  solutionJs,
  hints,
  testCases
}) {
  const css = `body { font-family: 'Inter', sans-serif; padding: 20px; background: #f8fafc; color: #0f172a; margin: 0; }
.card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; box-shadow: 0 2px 6px rgba(0,0,0,0.04); }
button { padding: 8px 14px; border-radius: 8px; border: none; background: #2563eb; color: #fff; font-weight: 600; cursor: pointer; margin-right: 6px; }
button:disabled { background: #cbd5e1; color: #64748b; }
input, select { padding: 8px 12px; border-radius: 8px; border: 1px solid #cbd5e1; margin-bottom: 8px; }
.active, .liked { background: #10b981; color: white; }
.hidden { display: none; }
.error { color: #dc2626; font-weight: 700; }
.success { color: #059669; font-weight: 700; }`;

  return {
    id,
    number: num,
    chapterId: 'ch-4',
    subjectId: 'frontend',
    moduleId: 'ch-4',
    title,
    difficulty,
    tags,
    defaultTab: 'js',
    description,
    requirements,
    starterCode: { html, css, js: starterJs },
    hints,
    solution: { html, css, js: solutionJs },
    testCases
  };
}

const CHAPTER_4_PROBLEMS = [
  // ======================== ง่าย (20 ข้อ: 1 - 20) ========================
  makeEventProblem({
    num: 1,
    id: 'ch4-01',
    title: 'คลิกปุ่ม #btn แล้วเปลี่ยนข้อความใน #output เป็น "คลิกแล้ว!"',
    difficulty: 'ง่าย',
    tags: ['addEventListener', 'click'],
    description: 'ผูก Event <code>click</code> ให้กับปุ่ม <code>#btn</code> เมื่อคลิกให้เปลี่ยนข้อความใน <code>#output</code> เป็น <code>"คลิกแล้ว!"</code>',
    requirements: ['ใช้ <code>addEventListener("click", ...)</code> บน <code>#btn</code>'],
    html: `<div class="card"><button id="btn">คลิกฉัน</button><p id="output">รอการคลิก...</p></div>`,
    starterJs: `const btn = document.getElementById("btn");\nconst output = document.getElementById("output");\n// ผูก click event ที่นี่\n`,
    solutionJs: `const btn = document.getElementById("btn");\nconst output = document.getElementById("output");\nbtn.addEventListener("click", () => {\n  output.textContent = "คลิกแล้ว!";\n});`,
    hints: ['ใช้ btn.addEventListener("click", () => { output.textContent = "คลิกแล้ว!"; });'],
    testCases: [
      {
        name: 'ก่อนคลิกข้อความยังเป็นค่าเริ่มต้น และหลังคลิกเปลี่ยนเป็น "คลิกแล้ว!"',
        run: ({ doc }) => {
          doc.getElementById('btn').click();
          const actual = doc.getElementById('output').textContent;
          return { passed: actual === 'คลิกแล้ว!', expected: 'คลิกแล้ว!', actual };
        }
      },
      {
        name: 'คลิกซ้ำยังคงแสดง "คลิกแล้ว!"',
        run: ({ doc }) => {
          doc.getElementById('btn').click();
          doc.getElementById('btn').click();
          const actual = doc.getElementById('output').textContent;
          return { passed: actual === 'คลิกแล้ว!', expected: 'คลิกแล้ว!', actual };
        }
      },
      {
        name: 'เมื่อเปลี่ยนข้อความอื่นแล้วคลิกใหม่ ต้องกลับมาเป็น "คลิกแล้ว!"',
        run: ({ doc }) => {
          doc.getElementById('output').textContent = 'รีเซ็ต';
          doc.getElementById('btn').click();
          const actual = doc.getElementById('output').textContent;
          return { passed: actual === 'คลิกแล้ว!', expected: 'คลิกแล้ว!', actual };
        }
      }
    ]
  }),
  makeEventProblem({
    num: 2,
    id: 'ch4-02',
    title: 'คลิกปุ่ม #inc-btn เพื่อเพิ่มตัวเลขใน #count ทีละ 1',
    difficulty: 'ง่าย',
    tags: ['click', 'Counter'],
    description: 'ทุกครั้งที่คลิกปุ่ม <code>#inc-btn</code> ให้เพิ่มค่าตัวเลขใน <code>#count</code> ขึ้นทีละ 1',
    requirements: ['อ่านค่าเดิมด้วย <code>Number(countEl.textContent)</code> หรือเก็บตัวแปร แล้วบวก 1 เมื่อคลิก'],
    html: `<div class="card"><h3 id="count">0</h3><button id="inc-btn">+ เพิ่ม</button></div>`,
    starterJs: `const countEl = document.getElementById("count");\nconst incBtn = document.getElementById("inc-btn");\n// ผูก click event ที่นี่\n`,
    solutionJs: `const countEl = document.getElementById("count");\nconst incBtn = document.getElementById("inc-btn");\nincBtn.addEventListener("click", () => {\n  countEl.textContent = String(Number(countEl.textContent) + 1);\n});`,
    hints: ['ใช้ Number(countEl.textContent) + 1 เพื่อบวกเพิ่มจากค่าปัจจุบัน'],
    testCases: [
      {
        name: 'คลิก 1 ครั้ง กลายเป็น "1"',
        run: ({ doc }) => {
          doc.getElementById('count').textContent = '0';
          doc.getElementById('inc-btn').click();
          const actual = doc.getElementById('count').textContent;
          return { passed: actual === '1', expected: '1', actual };
        }
      },
      {
        name: 'คลิก 3 ครั้งติดต่อกัน กลายเป็น "3"',
        run: ({ doc }) => {
          doc.getElementById('count').textContent = '0';
          doc.getElementById('inc-btn').click();
          doc.getElementById('inc-btn').click();
          doc.getElementById('inc-btn').click();
          const actual = doc.getElementById('count').textContent;
          return { passed: actual === '3', expected: '3', actual };
        }
      },
      {
        name: 'คลิก 5 ครั้ง กลายเป็น "5"',
        run: ({ doc }) => {
          doc.getElementById('count').textContent = '0';
          for (let i = 0; i < 5; i++) doc.getElementById('inc-btn').click();
          const actual = doc.getElementById('count').textContent;
          return { passed: actual === '5', expected: '5', actual };
        }
      }
    ]
  }),
  makeEventProblem({
    num: 3,
    id: 'ch4-03',
    title: 'คลิกปุ่ม #like-btn เพื่อสลับคลาส liked',
    difficulty: 'ง่าย',
    tags: ['click', 'classList.toggle'],
    description: 'เมื่อคลิกปุ่ม <code>#like-btn</code> ให้สลับ (toggle) คลาส <code>liked</code> บนปุ่มนั้น',
    requirements: ['ใช้ <code>likeBtn.classList.toggle("liked")</code> ใน click event'],
    html: `<div class="card"><button id="like-btn">❤️ ถูกใจ</button></div>`,
    starterJs: `const likeBtn = document.getElementById("like-btn");\n// ผูก click event สลับคลาส liked ที่นี่\n`,
    solutionJs: `const likeBtn = document.getElementById("like-btn");\nlikeBtn.addEventListener("click", () => {\n  likeBtn.classList.toggle("liked");\n});`,
    hints: ['ใช้ likeBtn.addEventListener("click", () => likeBtn.classList.toggle("liked"));'],
    testCases: [
      {
        name: 'คลิกครั้งที่ 1 มีคลาส liked',
        run: ({ doc }) => {
          const btn = doc.getElementById('like-btn');
          btn.classList.remove('liked');
          btn.click();
          return { passed: btn.classList.contains('liked'), expected: 'true', actual: String(btn.classList.contains('liked')) };
        }
      },
      {
        name: 'คลิกครั้งที่ 2 ลบคลาส liked ออก',
        run: ({ doc }) => {
          const btn = doc.getElementById('like-btn');
          btn.classList.add('liked');
          btn.click();
          return { passed: !btn.classList.contains('liked'), expected: 'false', actual: String(btn.classList.contains('liked')) };
        }
      },
      {
        name: 'คลิก 3 ครั้ง มีคลาส liked',
        run: ({ doc }) => {
          const btn = doc.getElementById('like-btn');
          btn.classList.remove('liked');
          btn.click();
          btn.click();
          btn.click();
          return { passed: btn.classList.contains('liked'), expected: 'true', actual: String(btn.classList.contains('liked')) };
        }
      }
    ]
  }),
  makeEventProblem({
    num: 4,
    id: 'ch4-04',
    title: 'คลิกปุ่ม #toggle-btn เพื่อซ่อน/แสดงกล่อง #secret-box',
    difficulty: 'ง่าย',
    tags: ['click', 'classList.toggle'],
    description: 'เมื่อคลิกปุ่ม <code>#toggle-btn</code> ให้สลับคลาส <code>hidden</code> บน Element <code>#secret-box</code>',
    requirements: ['ใช้ <code>secretBox.classList.toggle("hidden")</code> เมื่อคลิก <code>#toggle-btn</code>'],
    html: `<div class="card"><button id="toggle-btn">ซ่อน/แสดง</button><p id="secret-box">ข้อความลับสุดยอด</p></div>`,
    starterJs: `const toggleBtn = document.getElementById("toggle-btn");\nconst secretBox = document.getElementById("secret-box");\n// ผูก click event ที่นี่\n`,
    solutionJs: `const toggleBtn = document.getElementById("toggle-btn");\nconst secretBox = document.getElementById("secret-box");\ntoggleBtn.addEventListener("click", () => {\n  secretBox.classList.toggle("hidden");\n});`,
    hints: ['ใช้ secretBox.classList.toggle("hidden") ใน click handler'],
    testCases: [
      {
        name: 'คลิก 1 ครั้ง ซ่อน #secret-box ด้วยคลาส hidden',
        run: ({ doc }) => {
          const box = doc.getElementById('secret-box');
          box.classList.remove('hidden');
          doc.getElementById('toggle-btn').click();
          return { passed: box.classList.contains('hidden'), expected: 'true', actual: String(box.classList.contains('hidden')) };
        }
      },
      {
        name: 'คลิกอีก 1 ครั้ง แสดง #secret-box กลับมา',
        run: ({ doc }) => {
          const box = doc.getElementById('secret-box');
          box.classList.add('hidden');
          doc.getElementById('toggle-btn').click();
          return { passed: !box.classList.contains('hidden'), expected: 'false', actual: String(box.classList.contains('hidden')) };
        }
      },
      {
        name: 'สลับไปมาทำงานได้ต่อเนื่อง',
        run: ({ doc }) => {
          const box = doc.getElementById('secret-box');
          box.classList.remove('hidden');
          doc.getElementById('toggle-btn').click();
          doc.getElementById('toggle-btn').click();
          return { passed: !box.classList.contains('hidden'), expected: 'false', actual: String(box.classList.contains('hidden')) };
        }
      }
    ]
  }),
  makeEventProblem({
    num: 5,
    id: 'ch4-05',
    title: 'แสดงข้อความสดตามที่พิมพ์ใน #name-input ลงใน #mirror-text (Input Event)',
    difficulty: 'ง่าย',
    tags: ['input event', 'Live Preview'],
    description: 'ดักจับ Event <code>input</code> บน <code>#name-input</code> แล้วนำข้อความที่พิมพ์ไปแสดงใน <code>#mirror-text</code> ทันที',
    requirements: ['ใช้ <code>addEventListener("input", ...)</code> บน <code>#name-input</code>'],
    html: `<div class="card"><input id="name-input" type="text" placeholder="พิมพ์ข้อความ..." /><p id="mirror-text"></p></div>`,
    starterJs: `const nameInput = document.getElementById("name-input");\nconst mirrorText = document.getElementById("mirror-text");\n// ดักจับ event 'input' ที่นี่\n`,
    solutionJs: `const nameInput = document.getElementById("name-input");\nconst mirrorText = document.getElementById("mirror-text");\nnameInput.addEventListener("input", () => {\n  mirrorText.textContent = nameInput.value;\n});`,
    hints: ['ใช้ nameInput.addEventListener("input", () => { mirrorText.textContent = nameInput.value; });'],
    testCases: [
      {
        name: 'พิมพ์ "สวัสดี" แสดง "สวัสดี" ใน #mirror-text',
        run: ({ win, doc }) => {
          const inp = doc.getElementById('name-input');
          inp.value = 'สวัสดี';
          inp.dispatchEvent(new win.Event('input', { bubbles: true }));
          const actual = doc.getElementById('mirror-text').textContent;
          return { passed: actual === 'สวัสดี', expected: 'สวัสดี', actual };
        }
      },
      {
        name: 'พิมพ์ "Frontend 101" แสดง "Frontend 101"',
        run: ({ win, doc }) => {
          const inp = doc.getElementById('name-input');
          inp.value = 'Frontend 101';
          inp.dispatchEvent(new win.Event('input', { bubbles: true }));
          const actual = doc.getElementById('mirror-text').textContent;
          return { passed: actual === 'Frontend 101', expected: 'Frontend 101', actual };
        }
      },
      {
        name: 'ลบข้อความจนว่าง #mirror-text ต้องว่างตาม',
        run: ({ win, doc }) => {
          const inp = doc.getElementById('name-input');
          inp.value = '';
          inp.dispatchEvent(new win.Event('input', { bubbles: true }));
          const actual = doc.getElementById('mirror-text').textContent;
          return { passed: actual === '', expected: '', actual };
        }
      }
    ]
  }),
  makeEventProblem({
    num: 6,
    id: 'ch4-06',
    title: 'แสดงจำนวนตัวอักษรที่พิมพ์ใน #text-input ลงใน #char-len',
    difficulty: 'ง่าย',
    tags: ['input event', '.length'],
    description: 'เมื่อผู้ใช้พิมพ์ใน <code>#text-input</code> ให้อัปเดตตัวเลขจำนวนตัวอักษรใน <code>#char-len</code> แบบเรียลไทม์',
    requirements: ['ตั้งค่า <code>charLen.textContent = String(textInput.value.length)</code> เมื่อเกิด <code>input</code> event'],
    html: `<div class="card"><input id="text-input" type="text" /><p>ความยาว: <span id="char-len">0</span> ตัวอักษร</p></div>`,
    starterJs: `const textInput = document.getElementById("text-input");\nconst charLen = document.getElementById("char-len");\n// ดักจับ event 'input' ที่นี่\n`,
    solutionJs: `const textInput = document.getElementById("text-input");\nconst charLen = document.getElementById("char-len");\ntextInput.addEventListener("input", () => {\n  charLen.textContent = String(textInput.value.length);\n});`,
    hints: ['ใช้ textInput.value.length เพื่อหาจำนวนตัวอักษร'],
    testCases: [
      {
        name: 'พิมพ์ "Hello" แสดง "5"',
        run: ({ win, doc }) => {
          const inp = doc.getElementById('text-input');
          inp.value = 'Hello';
          inp.dispatchEvent(new win.Event('input', { bubbles: true }));
          const actual = doc.getElementById('char-len').textContent;
          return { passed: actual === '5', expected: '5', actual };
        }
      },
      {
        name: 'พิมพ์ "1234567890" แสดง "10"',
        run: ({ win, doc }) => {
          const inp = doc.getElementById('text-input');
          inp.value = '1234567890';
          inp.dispatchEvent(new win.Event('input', { bubbles: true }));
          const actual = doc.getElementById('char-len').textContent;
          return { passed: actual === '10', expected: '10', actual };
        }
      },
      {
        name: 'ลบข้อความจนว่าง แสดง "0"',
        run: ({ win, doc }) => {
          const inp = doc.getElementById('text-input');
          inp.value = '';
          inp.dispatchEvent(new win.Event('input', { bubbles: true }));
          const actual = doc.getElementById('char-len').textContent;
          return { passed: actual === '0', expected: '0', actual };
        }
      }
    ]
  }),
  makeEventProblem({
    num: 7,
    id: 'ch4-07',
    title: 'คลิกปุ่ม #clear-btn เพื่อล้างข้อความใน #msg-input',
    difficulty: 'ง่าย',
    tags: ['click', 'input.value'],
    description: 'เมื่อคลิกปุ่ม <code>#clear-btn</code> ให้ล้างค่าในช่อง <code>#msg-input</code> ให้เป็นค่าว่าง <code>""</code>',
    requirements: ['ตั้งค่า <code>msgInput.value = ""</code> เมื่อคลิก <code>#clear-btn</code>'],
    html: `<div class="card"><input id="msg-input" type="text" value="ข้อความตั้งต้น" /><button id="clear-btn">ล้างข้อความ</button></div>`,
    starterJs: `const msgInput = document.getElementById("msg-input");\nconst clearBtn = document.getElementById("clear-btn");\n// ผูก click event ที่นี่\n`,
    solutionJs: `const msgInput = document.getElementById("msg-input");\nconst clearBtn = document.getElementById("clear-btn");\nclearBtn.addEventListener("click", () => {\n  msgInput.value = "";\n});`,
    hints: ['เขียน clearBtn.addEventListener("click", () => { msgInput.value = ""; });'],
    testCases: [
      {
        name: 'คลิก #clear-btn แล้วค่าใน #msg-input กลายเป็น ""',
        run: ({ doc }) => {
          const inp = doc.getElementById('msg-input');
          inp.value = 'ทดสอบ';
          doc.getElementById('clear-btn').click();
          return { passed: inp.value === '', expected: '""', actual: `"${inp.value}"` };
        }
      },
      {
        name: 'พิมพ์ข้อความใหม่แล้วคลิก #clear-btn อีกครั้งก็ล้างได้',
        run: ({ doc }) => {
          const inp = doc.getElementById('msg-input');
          inp.value = 'รอบสอง';
          doc.getElementById('clear-btn').click();
          return { passed: inp.value === '', expected: '""', actual: `"${inp.value}"` };
        }
      },
      {
        name: 'กรณีว่างอยู่แล้วคลิกซ้ำไม่เกิดปัญหา',
        run: ({ doc }) => {
          const inp = doc.getElementById('msg-input');
          inp.value = '';
          doc.getElementById('clear-btn').click();
          return { passed: inp.value === '', expected: '""', actual: `"${inp.value}"` };
        }
      }
    ]
  }),
  makeEventProblem({
    num: 8,
    id: 'ch4-08',
    title: 'คลิกปุ่ม #copy-btn เพื่อนำค่าจาก #source-input ไปแสดงใน #result',
    difficulty: 'ง่าย',
    tags: ['click', 'input.value'],
    description: 'เมื่อคลิกปุ่ม <code>#copy-btn</code> ให้อ่านค่าจาก <code>#source-input</code> ไปใส่ใน <code>#result.textContent</code>',
    requirements: ['ตั้งค่า <code>result.textContent = sourceInput.value</code> เมื่อคลิกปุ่ม'],
    html: `<div class="card"><input id="source-input" type="text" value="Hello Web" /><button id="copy-btn">ส่งข้อความ</button><p id="result">-</p></div>`,
    starterJs: `const sourceInput = document.getElementById("source-input");\nconst copyBtn = document.getElementById("copy-btn");\nconst result = document.getElementById("result");\n// ผูก click event ที่นี่\n`,
    solutionJs: `const sourceInput = document.getElementById("source-input");\nconst copyBtn = document.getElementById("copy-btn");\nconst result = document.getElementById("result");\ncopyBtn.addEventListener("click", () => {\n  result.textContent = sourceInput.value;\n});`,
    hints: ['ใช้ result.textContent = sourceInput.value; ใน click listener'],
    testCases: [
      {
        name: 'คลิกปุ่มแล้วนำค่า "Hello Web" ไปแสดงใน #result',
        run: ({ doc }) => {
          doc.getElementById('source-input').value = 'Hello Web';
          doc.getElementById('copy-btn').click();
          const actual = doc.getElementById('result').textContent;
          return { passed: actual === 'Hello Web', expected: 'Hello Web', actual };
        }
      },
      {
        name: 'เปลี่ยนข้อความเป็น "ชินกฤต" แล้วคลิกปุ่ม แสดง "ชินกฤต"',
        run: ({ doc }) => {
          doc.getElementById('source-input').value = 'ชินกฤต';
          doc.getElementById('copy-btn').click();
          const actual = doc.getElementById('result').textContent;
          return { passed: actual === 'ชินกฤต', expected: 'ชินกฤต', actual };
        }
      },
      {
        name: 'กรณี input ว่างเปล่า แสดง ""',
        run: ({ doc }) => {
          doc.getElementById('source-input').value = '';
          doc.getElementById('copy-btn').click();
          const actual = doc.getElementById('result').textContent;
          return { passed: actual === '', expected: '', actual };
        }
      }
    ]
  }),
  makeEventProblem({
    num: 9,
    id: 'ch4-09',
    title: 'ดักจับการเปลี่ยนตัวเลือกใน <select id="city-select"> (Change Event)',
    difficulty: 'ง่าย',
    tags: ['change event', 'select'],
    description: 'เมื่อผู้ใช้เปลี่ยนตัวเลือกใน <code>#city-select</code> ให้อัปเดต <code>#selected-city</code> เป็นค่า <code>citySelect.value</code>',
    requirements: ['ใช้ <code>addEventListener("change", ...)</code> บน <code>#city-select</code>'],
    html: `<div class="card"><select id="city-select"><option value="กรุงเทพฯ">กรุงเทพฯ</option><option value="เชียงใหม่">เชียงใหม่</option><option value="ภูเก็ต">ภูเก็ต</option></select><p id="selected-city">กรุงเทพฯ</p></div>`,
    starterJs: `const citySelect = document.getElementById("city-select");\nconst selectedCity = document.getElementById("selected-city");\n// ดักจับ event 'change' ที่นี่\n`,
    solutionJs: `const citySelect = document.getElementById("city-select");\nconst selectedCity = document.getElementById("selected-city");\ncitySelect.addEventListener("change", () => {\n  selectedCity.textContent = citySelect.value;\n});`,
    hints: ['ใช้ citySelect.addEventListener("change", () => { selectedCity.textContent = citySelect.value; });'],
    testCases: [
      {
        name: 'เลือก "เชียงใหม่" แสดง "เชียงใหม่" ใน #selected-city',
        run: ({ win, doc }) => {
          const sel = doc.getElementById('city-select');
          sel.value = 'เชียงใหม่';
          sel.dispatchEvent(new win.Event('change', { bubbles: true }));
          const actual = doc.getElementById('selected-city').textContent;
          return { passed: actual === 'เชียงใหม่', expected: 'เชียงใหม่', actual };
        }
      },
      {
        name: 'เลือก "ภูเก็ต" แสดง "ภูเก็ต"',
        run: ({ win, doc }) => {
          const sel = doc.getElementById('city-select');
          sel.value = 'ภูเก็ต';
          sel.dispatchEvent(new win.Event('change', { bubbles: true }));
          const actual = doc.getElementById('selected-city').textContent;
          return { passed: actual === 'ภูเก็ต', expected: 'ภูเก็ต', actual };
        }
      },
      {
        name: 'เปลี่ยนกลับมาเป็น "กรุงเทพฯ" แสดง "กรุงเทพฯ"',
        run: ({ win, doc }) => {
          const sel = doc.getElementById('city-select');
          sel.value = 'กรุงเทพฯ';
          sel.dispatchEvent(new win.Event('change', { bubbles: true }));
          const actual = doc.getElementById('selected-city').textContent;
          return { passed: actual === 'กรุงเทพฯ', expected: 'กรุงเทพฯ', actual };
        }
      }
    ]
  }),
  makeEventProblem({
    num: 10,
    id: 'ch4-10',
    title: 'ติ๊กถูก Checkbox #agree-chk เพื่อเปิดใช้งานปุ่ม #next-btn',
    difficulty: 'ง่าย',
    tags: ['checkbox.checked', 'change event'],
    description: 'เมื่อสถานะของ <code>#agree-chk</code> เปลี่ยนแปลง (<code>change</code>) ถ้าติ๊กถูก (<code>checked === true</code>) ให้เปิดใช้งาน <code>#next-btn</code> (<code>disabled = false</code>) ถ้าไม่ติ๊กให้ปิดการใช้งาน',
    requirements: ['ตั้งค่า <code>nextBtn.disabled = !agreeChk.checked</code> ใน event <code>change</code>'],
    html: `<div class="card"><label><input id="agree-chk" type="checkbox" /> ยอมรับเงื่อนไข</label><br/><button id="next-btn" disabled>ถัดไป</button></div>`,
    starterJs: `const agreeChk = document.getElementById("agree-chk");\nconst nextBtn = document.getElementById("next-btn");\n// ดักจับ event 'change' บน agreeChk ที่นี่\n`,
    solutionJs: `const agreeChk = document.getElementById("agree-chk");\nconst nextBtn = document.getElementById("next-btn");\nagreeChk.addEventListener("change", () => {\n  nextBtn.disabled = !agreeChk.checked;\n});`,
    hints: ['ใช้ nextBtn.disabled = !agreeChk.checked;'],
    testCases: [
      {
        name: 'เมื่อติ๊กถูก (checked = true) ปุ่ม #next-btn ไม่ถูก disabled',
        run: ({ win, doc }) => {
          const chk = doc.getElementById('agree-chk');
          chk.checked = true;
          chk.dispatchEvent(new win.Event('change', { bubbles: true }));
          const dis = doc.getElementById('next-btn').disabled;
          return { passed: dis === false, expected: 'false', actual: String(dis) };
        }
      },
      {
        name: 'เมื่อเอาติ๊กออก (checked = false) ปุ่ม #next-btn ถูก disabled',
        run: ({ win, doc }) => {
          const chk = doc.getElementById('agree-chk');
          chk.checked = false;
          chk.dispatchEvent(new win.Event('change', { bubbles: true }));
          const dis = doc.getElementById('next-btn').disabled;
          return { passed: dis === true, expected: 'true', actual: String(dis) };
        }
      },
      {
        name: 'ติ๊กซ้ำไปมาทำงานถูกต้อง',
        run: ({ win, doc }) => {
          const chk = doc.getElementById('agree-chk');
          chk.checked = true;
          chk.dispatchEvent(new win.Event('change', { bubbles: true }));
          const dis = doc.getElementById('next-btn').disabled;
          return { passed: dis === false, expected: 'false', actual: String(dis) };
        }
      }
    ]
  }),
  makeEventProblem({
    num: 11,
    id: 'ch4-11',
    title: 'คลิกปุ่ม #double-btn เพื่อคูณสองตัวเลขใน #num-box',
    difficulty: 'ง่าย',
    tags: ['click', 'Math'],
    description: 'ทุกครั้งที่คลิกปุ่ม <code>#double-btn</code> ให้นำตัวเลขใน <code>#num-box</code> มาคูณ 2 แล้วแสดงผลกลับลงไป',
    requirements: ['อ่าน <code>Number(numBox.textContent)</code> คูณ 2 แล้วอัปเดตกลับไป'],
    html: `<div class="card"><h3 id="num-box">2</h3><button id="double-btn">× 2</button></div>`,
    starterJs: `const numBox = document.getElementById("num-box");\nconst doubleBtn = document.getElementById("double-btn");\n// ผูก click event ที่นี่\n`,
    solutionJs: `const numBox = document.getElementById("num-box");\nconst doubleBtn = document.getElementById("double-btn");\ndoubleBtn.addEventListener("click", () => {\n  numBox.textContent = String(Number(numBox.textContent) * 2);\n});`,
    hints: ['ใช้ numBox.textContent = String(Number(numBox.textContent) * 2);'],
    testCases: [
      {
        name: 'คลิก 1 ครั้ง จาก 2 กลายเป็น "4"',
        run: ({ doc }) => {
          doc.getElementById('num-box').textContent = '2';
          doc.getElementById('double-btn').click();
          const actual = doc.getElementById('num-box').textContent;
          return { passed: actual === '4', expected: '4', actual };
        }
      },
      {
        name: 'คลิก 3 ครั้ง จาก 2 กลายเป็น "16"',
        run: ({ doc }) => {
          doc.getElementById('num-box').textContent = '2';
          doc.getElementById('double-btn').click();
          doc.getElementById('double-btn').click();
          doc.getElementById('double-btn').click();
          const actual = doc.getElementById('num-box').textContent;
          return { passed: actual === '16', expected: '16', actual };
        }
      },
      {
        name: 'จาก 5 คลิก 1 ครั้ง กลายเป็น "10"',
        run: ({ doc }) => {
          doc.getElementById('num-box').textContent = '5';
          doc.getElementById('double-btn').click();
          const actual = doc.getElementById('num-box').textContent;
          return { passed: actual === '10', expected: '10', actual };
        }
      }
    ]
  }),
  makeEventProblem({
    num: 12,
    id: 'ch4-12',
    title: 'คลิกปุ่ม #upper-btn เพื่อแปลงข้อความใน #text-box เป็นตัวพิมพ์ใหญ่',
    difficulty: 'ง่าย',
    tags: ['click', 'toUpperCase'],
    description: 'เมื่อคลิกปุ่ม <code>#upper-btn</code> ให้แปลงข้อความใน <code>#text-box</code> ให้เป็นตัวพิมพ์ใหญ่ทั้งหมด',
    requirements: ['ใช้ <code>textBox.textContent = textBox.textContent.toUpperCase()</code>'],
    html: `<div class="card"><p id="text-box">hello frontend</p><button id="upper-btn">แปลงตัวใหญ่</button></div>`,
    starterJs: `const textBox = document.getElementById("text-box");\nconst upperBtn = document.getElementById("upper-btn");\n// ผูก click event ที่นี่\n`,
    solutionJs: `const textBox = document.getElementById("text-box");\nconst upperBtn = document.getElementById("upper-btn");\nupperBtn.addEventListener("click", () => {\n  textBox.textContent = textBox.textContent.toUpperCase();\n});`,
    hints: ['ใช้ textBox.textContent = textBox.textContent.toUpperCase();'],
    testCases: [
      {
        name: 'แปลง "hello frontend" เป็น "HELLO FRONTEND"',
        run: ({ doc }) => {
          doc.getElementById('text-box').textContent = 'hello frontend';
          doc.getElementById('upper-btn').click();
          const actual = doc.getElementById('text-box').textContent;
          return { passed: actual === 'HELLO FRONTEND', expected: 'HELLO FRONTEND', actual };
        }
      },
      {
        name: 'แปลง "javascript" เป็น "JAVASCRIPT"',
        run: ({ doc }) => {
          doc.getElementById('text-box').textContent = 'javascript';
          doc.getElementById('upper-btn').click();
          const actual = doc.getElementById('text-box').textContent;
          return { passed: actual === 'JAVASCRIPT', expected: 'JAVASCRIPT', actual };
        }
      },
      {
        name: 'กรณีเป็นตัวใหญ่อยู่แล้วยังคงเดิม',
        run: ({ doc }) => {
          doc.getElementById('text-box').textContent = 'DOM';
          doc.getElementById('upper-btn').click();
          const actual = doc.getElementById('text-box').textContent;
          return { passed: actual === 'DOM', expected: 'DOM', actual };
        }
      }
    ]
  }),
  makeEventProblem({
    num: 13,
    id: 'ch4-13',
    title: 'คลิกปุ่มสีเพื่อเปลี่ยน data-color ของ #color-preview',
    difficulty: 'ง่าย',
    tags: ['click', 'dataset'],
    description: 'เมื่อคลิกปุ่ม <code>#red-btn</code> ให้ตั้งค่า <code>#color-preview.dataset.color = "red"</code> และเมื่อคลิก <code>#blue-btn</code> ให้ตั้งค่าเป็น <code>"blue"</code>',
    requirements: ['ผูก click event ให้ทั้ง <code>#red-btn</code> และ <code>#blue-btn</code>'],
    html: `<div class="card"><div id="color-preview" data-color="none">กล่องตัวอย่างสี</div><button id="red-btn">สีแดง</button><button id="blue-btn">สีน้ำเงิน</button></div>`,
    starterJs: `const preview = document.getElementById("color-preview");\nconst redBtn = document.getElementById("red-btn");\nconst blueBtn = document.getElementById("blue-btn");\n// ผูก click event ให้ปุ่มทั้งสองที่นี่\n`,
    solutionJs: `const preview = document.getElementById("color-preview");\nconst redBtn = document.getElementById("red-btn");\nconst blueBtn = document.getElementById("blue-btn");\nredBtn.addEventListener("click", () => { preview.dataset.color = "red"; });\nblueBtn.addEventListener("click", () => { preview.dataset.color = "blue"; });`,
    hints: ['ตั้งค่า preview.dataset.color = "red" และ "blue" ตามปุ่มที่ถูกคลิก'],
    testCases: [
      {
        name: 'คลิก #red-btn แล้ว data-color เป็น "red"',
        run: ({ doc }) => {
          doc.getElementById('red-btn').click();
          const actual = doc.getElementById('color-preview').dataset.color;
          return { passed: actual === 'red', expected: 'red', actual };
        }
      },
      {
        name: 'คลิก #blue-btn แล้ว data-color เป็น "blue"',
        run: ({ doc }) => {
          doc.getElementById('blue-btn').click();
          const actual = doc.getElementById('color-preview').dataset.color;
          return { passed: actual === 'blue', expected: 'blue', actual };
        }
      },
      {
        name: 'สลับคลิก #red-btn อีกครั้งกลับมาเป็น "red"',
        run: ({ doc }) => {
          doc.getElementById('blue-btn').click();
          doc.getElementById('red-btn').click();
          const actual = doc.getElementById('color-preview').dataset.color;
          return { passed: actual === 'red', expected: 'red', actual };
        }
      }
    ]
  }),
  makeEventProblem({
    num: 14,
    id: 'ch4-14',
    title: 'คลิกปุ่ม #calc-btn เพื่อบวกตัวเลขจาก Input 2 ช่อง (#num1 + #num2)',
    difficulty: 'ง่าย',
    tags: ['click', 'Number()', 'input.value'],
    description: 'เมื่อคลิกปุ่ม <code>#calc-btn</code> ให้นำตัวเลขจาก <code>#num1</code> และ <code>#num2</code> มาบวกกัน แล้วแสดงใน <code>#sum-result</code>',
    requirements: ['แปลงค่า <code>.value</code> ทั้งสองช่องด้วย <code>Number()</code> ก่อนบวกกัน'],
    html: `<div class="card"><input id="num1" type="number" value="10" /><input id="num2" type="number" value="25" /><button id="calc-btn">หาผลบวก</button><p id="sum-result">0</p></div>`,
    starterJs: `const num1 = document.getElementById("num1");\nconst num2 = document.getElementById("num2");\nconst calcBtn = document.getElementById("calc-btn");\nconst sumResult = document.getElementById("sum-result");\n// ผูก click event ที่นี่\n`,
    solutionJs: `const num1 = document.getElementById("num1");\nconst num2 = document.getElementById("num2");\nconst calcBtn = document.getElementById("calc-btn");\nconst sumResult = document.getElementById("sum-result");\ncalcBtn.addEventListener("click", () => {\n  const total = Number(num1.value) + Number(num2.value);\n  sumResult.textContent = String(total);\n});`,
    hints: ['ระวัง! num1.value เป็น String ต้องใช้ Number(num1.value) + Number(num2.value)'],
    testCases: [
      {
        name: '10 + 25 แสดง "35"',
        run: ({ doc }) => {
          doc.getElementById('num1').value = '10';
          doc.getElementById('num2').value = '25';
          doc.getElementById('calc-btn').click();
          const actual = doc.getElementById('sum-result').textContent;
          return { passed: actual === '35', expected: '35', actual };
        }
      },
      {
        name: '100 + 250 แสดง "350" (ไม่ต่อ String เป็น 100250)',
        run: ({ doc }) => {
          doc.getElementById('num1').value = '100';
          doc.getElementById('num2').value = '250';
          doc.getElementById('calc-btn').click();
          const actual = doc.getElementById('sum-result').textContent;
          return { passed: actual === '350', expected: '350', actual };
        }
      },
      {
        name: '-5 + 15 แสดง "10"',
        run: ({ doc }) => {
          doc.getElementById('num1').value = '-5';
          doc.getElementById('num2').value = '15';
          doc.getElementById('calc-btn').click();
          const actual = doc.getElementById('sum-result').textContent;
          return { passed: actual === '10', expected: '10', actual };
        }
      }
    ]
  }),
  makeEventProblem({
    num: 15,
    id: 'ch4-15',
    title: 'ป้องกันการรีเฟรชหน้าเว็บเมื่อกด Submit ฟอร์ม (event.preventDefault)',
    difficulty: 'ง่าย',
    tags: ['submit event', 'preventDefault'],
    description: 'ดักจับ Event <code>submit</code> บน <code>#my-form</code> สั่ง <code>event.preventDefault()</code> แล้วเปลี่ยนข้อความใน <code>#form-status</code> เป็น <code>"ส่งฟอร์มเรียบร้อย"</code>',
    requirements: ['ใช้ <code>form.addEventListener("submit", (e) =&gt; { e.preventDefault(); ... })</code>'],
    html: `<div class="card"><form id="my-form"><input type="text" value="test" /><button type="submit">ส่งฟอร์ม</button></form><p id="form-status">-</p></div>`,
    starterJs: `const form = document.getElementById("my-form");\nconst statusEl = document.getElementById("form-status");\n// ดักจับ event 'submit' พร้อม e.preventDefault() ที่นี่\n`,
    solutionJs: `const form = document.getElementById("my-form");\nconst statusEl = document.getElementById("form-status");\nform.addEventListener("submit", (e) => {\n  e.preventDefault();\n  statusEl.textContent = "ส่งฟอร์มเรียบร้อย";\n});`,
    hints: ['เรียก e.preventDefault() บรรทัดแรกในฟังก์ชัน submit เสมอ'],
    testCases: [
      {
        name: 'เมื่อเกิด submit event เรียก preventDefault() และแสดง "ส่งฟอร์มเรียบร้อย"',
        run: ({ win, doc }) => {
          const form = doc.getElementById('my-form');
          const ev = new win.Event('submit', { bubbles: true, cancelable: true });
          form.dispatchEvent(ev);
          const actual = doc.getElementById('form-status').textContent;
          return { passed: ev.defaultPrevented && actual === 'ส่งฟอร์มเรียบร้อย', expected: 'defaultPrevented=true, "ส่งฟอร์มเรียบร้อย"', actual: `defaultPrevented=${ev.defaultPrevented}, "${actual}"` };
        }
      },
      {
        name: 'ข้อความใน #form-status เปลี่ยนเป็น "ส่งฟอร์มเรียบร้อย" แน่นอน',
        run: ({ win, doc }) => {
          doc.getElementById('form-status').textContent = '';
          const form = doc.getElementById('my-form');
          form.dispatchEvent(new win.Event('submit', { bubbles: true, cancelable: true }));
          const actual = doc.getElementById('form-status').textContent;
          return { passed: actual === 'ส่งฟอร์มเรียบร้อย', expected: 'ส่งฟอร์มเรียบร้อย', actual };
        }
      },
      {
        name: 'ส่งฟอร์มซ้ำทำงานได้ปกติ',
        run: ({ win, doc }) => {
          const form = doc.getElementById('my-form');
          form.dispatchEvent(new win.Event('submit', { bubbles: true, cancelable: true }));
          const actual = doc.getElementById('form-status').textContent;
          return { passed: actual === 'ส่งฟอร์มเรียบร้อย', expected: 'ส่งฟอร์มเรียบร้อย', actual };
        }
      }
    ]
  }),
  makeEventProblem({
    num: 16,
    id: 'ch4-16',
    title: 'คลิกปุ่ม #toggle-pwd เพื่อสลับชนิด Input รหัสผ่าน (password <-> text)',
    difficulty: 'ง่าย',
    tags: ['click', 'input.type'],
    description: 'เมื่อคลิกปุ่ม <code>#toggle-pwd</code> ถ้า <code>#pwd-input.type</code> เป็น <code>"password"</code> ให้เปลี่ยนเป็น <code>"text"</code> และถ้าเป็น <code>"text"</code> ให้เปลี่ยนกลับเป็น <code>"password"</code>',
    requirements: ['สลับค่า <code>pwdInput.type</code> ระหว่าง <code>"password"</code> และ <code>"text"</code>'],
    html: `<div class="card"><input id="pwd-input" type="password" value="secret123" /><button id="toggle-pwd">👁 แสดง/ซ่อน</button></div>`,
    starterJs: `const pwdInput = document.getElementById("pwd-input");\nconst toggleBtn = document.getElementById("toggle-pwd");\n// ผูก click event สลับ type ที่นี่\n`,
    solutionJs: `const pwdInput = document.getElementById("pwd-input");\nconst toggleBtn = document.getElementById("toggle-pwd");\ntoggleBtn.addEventListener("click", () => {\n  pwdInput.type = pwdInput.type === "password" ? "text" : "password";\n});`,
    hints: ['ใช้ pwdInput.type = pwdInput.type === "password" ? "text" : "password";'],
    testCases: [
      {
        name: 'คลิกครั้งที่ 1 เปลี่ยนจาก "password" เป็น "text"',
        run: ({ doc }) => {
          const inp = doc.getElementById('pwd-input');
          inp.type = 'password';
          doc.getElementById('toggle-pwd').click();
          return { passed: inp.type === 'text', expected: 'text', actual: inp.type };
        }
      },
      {
        name: 'คลิกครั้งที่ 2 เปลี่ยนจาก "text" กลับเป็น "password"',
        run: ({ doc }) => {
          const inp = doc.getElementById('pwd-input');
          inp.type = 'text';
          doc.getElementById('toggle-pwd').click();
          return { passed: inp.type === 'password', expected: 'password', actual: inp.type };
        }
      },
      {
        name: 'สลับไปมาไม่ทำให้ค่า value ใน input หาย',
        run: ({ doc }) => {
          const inp = doc.getElementById('pwd-input');
          inp.value = 'myPass99';
          doc.getElementById('toggle-pwd').click();
          return { passed: inp.value === 'myPass99', expected: 'myPass99', actual: inp.value };
        }
      }
    ]
  }),
  makeEventProblem({
    num: 17,
    id: 'ch4-17',
    title: 'คลิกปุ่ม #once-btn แล้วเปลี่ยนข้อความเป็น "กำลังส่ง..." และปิดปุ่มทันที',
    difficulty: 'ง่าย',
    tags: ['click', 'disabled', 'Button State'],
    description: 'เพื่อป้องกันผู้ใช้กดปุ่มส่งข้อมูลซ้ำ เมื่อคลิก <code>#once-btn</code> ให้เปลี่ยนข้อความปุ่มเป็น <code>"กำลังส่ง..."</code> และตั้งค่า <code>disabled = true</code>',
    requirements: ['เมื่อคลิก <code>#once-btn</code>: เปลี่ยน <code>textContent = "กำลังส่ง..."</code> และ <code>disabled = true</code>'],
    html: `<div class="card"><button id="once-btn">ยืนยันการชำระเงิน</button></div>`,
    starterJs: `const onceBtn = document.getElementById("once-btn");\n// ผูก click event ที่นี่\n`,
    solutionJs: `const onceBtn = document.getElementById("once-btn");\nonceBtn.addEventListener("click", () => {\n  onceBtn.textContent = "กำลังส่ง...";\n  onceBtn.disabled = true;\n});`,
    hints: ['ตั้งค่าทั้ง onceBtn.textContent และ onceBtn.disabled = true ใน click listener'],
    testCases: [
      {
        name: 'หลังคลิก ข้อความปุ่มเป็น "กำลังส่ง..."',
        run: ({ doc }) => {
          const btn = doc.getElementById('once-btn');
          btn.disabled = false;
          btn.click();
          return { passed: btn.textContent === 'กำลังส่ง...', expected: 'กำลังส่ง...', actual: btn.textContent };
        }
      },
      {
        name: 'หลังคลิก ปุ่มมีสถานะ disabled === true',
        run: ({ doc }) => {
          const btn = doc.getElementById('once-btn');
          btn.disabled = false;
          btn.click();
          return { passed: btn.disabled === true, expected: 'true', actual: String(btn.disabled) };
        }
      },
      {
        name: 'ทั้งข้อความและสถานะ disabled ทำงานพร้อมกันถูกต้อง',
        run: ({ doc }) => {
          const btn = doc.getElementById('once-btn');
          const ok = btn.disabled === true && btn.textContent === 'กำลังส่ง...';
          return { passed: ok, expected: 'true', actual: String(ok) };
        }
      }
    ]
  }),
  makeEventProblem({
    num: 18,
    id: 'ch4-18',
    title: 'สร้าง Promise ที่คืนค่าข้อความ "โหลดสำเร็จ" (Promise.resolve)',
    difficulty: 'ง่าย',
    tags: ['Promise', 'Async'],
    description: 'เขียนฟังก์ชัน <code>fetchWelcomeMessage()</code> ที่คืนค่า Promise ซึ่ง resolve ด้วยข้อความ <code>"โหลดสำเร็จ"</code>',
    requirements: ['คืนค่า <code>Promise.resolve("โหลดสำเร็จ")</code> หรือใช้ <code>async function</code>'],
    html: `<div class="card"><p id="async-text">กำลังรอ Promise...</p></div>`,
    starterJs: `function fetchWelcomeMessage() {\n  // คืนค่า Promise ที่ resolve "โหลดสำเร็จ"\n  \n}\nfetchWelcomeMessage().then(msg => {\n  if (msg) document.getElementById("async-text").textContent = msg;\n});`,
    solutionJs: `async function fetchWelcomeMessage() {\n  return "โหลดสำเร็จ";\n}\nfetchWelcomeMessage().then(msg => {\n  if (msg) document.getElementById("async-text").textContent = msg;\n});`,
    hints: ['ฟังก์ชันที่ใส่ async ข้างหน้า จะคืนค่าเป็น Promise โดยอัตโนมัติ หรือใช้ return Promise.resolve("โหลดสำเร็จ");'],
    testCases: [
      {
        name: 'คืนค่าที่ได้จากการ await เป็น "โหลดสำเร็จ"',
        run: async ({ win }) => {
          const actual = await win.fetchWelcomeMessage();
          return { passed: actual === 'โหลดสำเร็จ', expected: 'โหลดสำเร็จ', actual };
        }
      },
      {
        name: 'ค่าที่คืนจากฟังก์ชันเป็น Promise (มีเมธอด .then)',
        run: ({ win }) => {
          const p = win.fetchWelcomeMessage();
          const isPromise = Boolean(p && typeof p.then === 'function');
          return { passed: isPromise, expected: 'true (Promise)', actual: String(isPromise) };
        }
      },
      {
        name: 'เรียกใช้หลายครั้งยังคงได้ "โหลดสำเร็จ"',
        run: async ({ win }) => {
          const r1 = await win.fetchWelcomeMessage();
          const r2 = await win.fetchWelcomeMessage();
          return { passed: r1 === 'โหลดสำเร็จ' && r2 === 'โหลดสำเร็จ', expected: 'โหลดสำเร็จ', actual: r2 };
        }
      }
    ]
  }),
  makeEventProblem({
    num: 19,
    id: 'ch4-19',
    title: 'ใช้ async / await รอรับตัวเลขจาก getNumberAsync() แล้วคูณ 10',
    difficulty: 'ง่าย',
    tags: ['async / await'],
    description: 'เขียนฟังก์ชัน <code>async function multiplyAsyncResult(getNumberAsync)</code> ที่รอค่าจาก <code>await getNumberAsync()</code> แล้วคืนค่าผลลัพธ์ที่คูณด้วย 10',
    requirements: ['ใช้ <code>const num = await getNumberAsync();</code> แล้ว <code>return num * 10;</code>'],
    html: `<div class="card"><p id="res-async">กำลังคำนวณ Async...</p></div>`,
    starterJs: `async function multiplyAsyncResult(getNumberAsync) {\n  // ใช้ await รอค่าจาก getNumberAsync() แล้วคูณ 10\n  \n}\nmultiplyAsyncResult(async () => 7).then(v => {\n  document.getElementById("res-async").textContent = "ผลลัพธ์: " + v;\n});`,
    solutionJs: `async function multiplyAsyncResult(getNumberAsync) {\n  const num = await getNumberAsync();\n  return num * 10;\n}\nmultiplyAsyncResult(async () => 7).then(v => {\n  document.getElementById("res-async").textContent = "ผลลัพธ์: " + v;\n});`,
    hints: ['เขียน const val = await getNumberAsync(); return val * 10;'],
    testCases: [
      {
        name: 'เมื่อ getNumberAsync() คืนค่า 7 ต้องได้ 70',
        run: async ({ win }) => {
          const actual = await win.multiplyAsyncResult(async () => 7);
          return { passed: actual === 70, expected: 70, actual };
        }
      },
      {
        name: 'เมื่อ getNumberAsync() คืนค่า 15 ต้องได้ 150',
        run: async ({ win }) => {
          const actual = await win.multiplyAsyncResult(async () => 15);
          return { passed: actual === 150, expected: 150, actual };
        }
      },
      {
        name: 'เมื่อ getNumberAsync() คืนค่า 0 ต้องได้ 0',
        run: async ({ win }) => {
          const actual = await win.multiplyAsyncResult(async () => 0);
          return { passed: actual === 0, expected: 0, actual };
        }
      }
    ]
  }),
  makeEventProblem({
    num: 20,
    id: 'ch4-20',
    title: 'แปลงข้อความ JSON ให้เป็น Object แล้วดึงชื่อออกมา (JSON.parse)',
    difficulty: 'ง่าย',
    tags: ['JSON.parse', 'API Data'],
    description: 'เวลาเว็บรับข้อมูลจาก Server มักจะได้เป็น JSON String ให้เขียนฟังก์ชัน <code>parseUserName(jsonStr)</code> ที่แปลงด้วย <code>JSON.parse(jsonStr)</code> แล้วคืนค่าพร็อพเพอร์ตี้ <code>name</code>',
    requirements: ['ใช้ <code>const obj = JSON.parse(jsonStr);</code> แล้วคืนค่า <code>obj.name</code>'],
    html: `<div class="card"><p id="json-out">-</p></div>`,
    starterJs: `function parseUserName(jsonStr) {\n  // แปลง jsonStr ด้วย JSON.parse แล้ว return .name\n  \n}\ndocument.getElementById("json-out").textContent = parseUserName('{"name":"ชินกฤต","role":"Dev"}');`,
    solutionJs: `function parseUserName(jsonStr) {\n  const data = JSON.parse(jsonStr);\n  return data.name;\n}\ndocument.getElementById("json-out").textContent = parseUserName('{"name":"ชินกฤต","role":"Dev"}');`,
    hints: ['เขียน return JSON.parse(jsonStr).name;'],
    testCases: [
      {
        name: 'ดึงชื่อ "ชินกฤต" จาก JSON String ได้ถูกต้อง',
        run: ({ win }) => {
          const actual = win.parseUserName('{"name":"ชินกฤต","role":"Dev"}');
          return { passed: actual === 'ชินกฤต', expected: 'ชินกฤต', actual };
        }
      },
      {
        name: 'ดึงชื่อ "Alice" จาก JSON String ได้ถูกต้อง',
        run: ({ win }) => {
          const actual = win.parseUserName('{"id":2,"name":"Alice"}');
          return { passed: actual === 'Alice', expected: 'Alice', actual };
        }
      },
      {
        name: 'ดึงชื่อ "สมชาย" ได้ถูกต้อง',
        run: ({ win }) => {
          const actual = win.parseUserName('{"name":"สมชาย"}');
          return { passed: actual === 'สมชาย', expected: 'สมชาย', actual };
        }
      }
    ]
  }),

  // ======================== ปานกลาง (10 ข้อ: 21 - 30) ========================
  makeEventProblem({
    num: 21,
    id: 'ch4-21',
    title: 'ระบบ Counter เพิ่ม / ลด / รีเซ็ต (ห้ามลดต่ำกว่า 0)',
    difficulty: 'ปานกลาง',
    tags: ['Events', 'Counter State'],
    description: 'ผูก click event ให้ปุ่ม <code>#btn-inc</code> (+1), <code>#btn-dec</code> (-1 แต่ห้ามต่ำกว่า 0) และ <code>#btn-reset</code> (กลับเป็น 0) โดยแสดงค่าใน <code>#counter-val</code>',
    requirements: ['เพิ่มค่าทีละ 1 เมื่อคลิก <code>#btn-inc</code>', 'ลดค่าทีละ 1 เมื่อคลิก <code>#btn-dec</code> (ห้ามต่ำกว่า 0)', 'รีเซ็ตเป็น 0 เมื่อคลิก <code>#btn-reset</code>'],
    html: `<div class="card"><h2 id="counter-val">0</h2><button id="btn-dec">- ลด</button><button id="btn-reset">รีเซ็ต</button><button id="btn-inc">+ เพิ่ม</button></div>`,
    starterJs: `let count = 0;\nconst valEl = document.getElementById("counter-val");\n// ผูก click event ให้ #btn-inc, #btn-dec, #btn-reset ที่นี่\n`,
    solutionJs: `let count = 0;\nconst valEl = document.getElementById("counter-val");\ndocument.getElementById("btn-inc").addEventListener("click", () => {\n  count++;\n  valEl.textContent = String(count);\n});\ndocument.getElementById("btn-dec").addEventListener("click", () => {\n  if (count > 0) count--;\n  valEl.textContent = String(count);\n});\ndocument.getElementById("btn-reset").addEventListener("click", () => {\n  count = 0;\n  valEl.textContent = "0";\n});`,
    hints: ['ในปุ่มลด เช็ก if (count > 0) count--; ก่อนอัปเดตหน้าเว็บ'],
    testCases: [
      {
        name: 'กดเพิ่ม 3 ครั้ง แสดง "3"',
        run: ({ doc }) => {
          doc.getElementById('btn-reset').click();
          doc.getElementById('btn-inc').click();
          doc.getElementById('btn-inc').click();
          doc.getElementById('btn-inc').click();
          const actual = doc.getElementById('counter-val').textContent;
          return { passed: actual === '3', expected: '3', actual };
        }
      },
      {
        name: 'กดลดจาก 2 ลง 1 ครั้ง เหลือ "1" และกดรีเซ็ตเป็น "0"',
        run: ({ doc }) => {
          doc.getElementById('btn-reset').click();
          doc.getElementById('btn-inc').click();
          doc.getElementById('btn-inc').click();
          doc.getElementById('btn-dec').click();
          const d = doc.getElementById('counter-val').textContent;
          doc.getElementById('btn-reset').click();
          const r = doc.getElementById('counter-val').textContent;
          return { passed: d === '1' && r === '0', expected: '1 then 0', actual: `${d} then ${r}` };
        }
      },
      {
        name: 'กดลดตอนเป็น 0 ต้องไม่ติดลบ (ยังคงเป็น "0")',
        run: ({ doc }) => {
          doc.getElementById('btn-reset').click();
          doc.getElementById('btn-dec').click();
          doc.getElementById('btn-dec').click();
          const actual = doc.getElementById('counter-val').textContent;
          return { passed: actual === '0', expected: '0', actual };
        }
      }
    ]
  }),
  makeEventProblem({
    num: 22,
    id: 'ch4-22',
    title: 'ตัวนับจำนวนตัวอักษรแบบสดพร้อมแจ้งเตือนเมื่อเกิน 20 ตัวอักษร',
    difficulty: 'ปานกลาง',
    tags: ['input event', 'classList'],
    description: 'เมื่อพิมพ์ใน <code>#bio-input</code> ให้อัปเดต <code>#bio-count</code> เป็น <code>"[ความยาว]/20"</code> และถ้าความยาว <code>&gt; 20</code> ให้เพิ่มคลาส <code>error</code> ให้ <code>#bio-count</code>',
    requirements: ['แสดงรูปแบบ <code>"[len]/20"</code>', 'สลับคลาส <code>error</code> เมื่อ <code>len &gt; 20</code>'],
    html: `<div class="card"><input id="bio-input" type="text" /><p id="bio-count">0/20</p></div>`,
    starterJs: `const bioInput = document.getElementById("bio-input");\nconst bioCount = document.getElementById("bio-count");\n// ดักจับ event 'input' ที่นี่\n`,
    solutionJs: `const bioInput = document.getElementById("bio-input");\nconst bioCount = document.getElementById("bio-count");\nbioInput.addEventListener("input", () => {\n  const len = bioInput.value.length;\n  bioCount.textContent = \`\${len}/20\`;\n  bioCount.classList.toggle("error", len > 20);\n});`,
    hints: ['ใช้ bioCount.classList.toggle("error", len > 20);'],
    testCases: [
      {
        name: 'พิมพ์ 5 ตัวอักษร แสดง "5/20" และไม่มีคลาส error',
        run: ({ win, doc }) => {
          const inp = doc.getElementById('bio-input');
          const cnt = doc.getElementById('bio-count');
          inp.value = 'Hello';
          inp.dispatchEvent(new win.Event('input', { bubbles: true }));
          return { passed: cnt.textContent === '5/20' && !cnt.classList.contains('error'), expected: '5/20, error=false', actual: `${cnt.textContent}, error=${cnt.classList.contains('error')}` };
        }
      },
      {
        name: 'พิมพ์ 25 ตัวอักษร แสดง "25/20" และมีคลาส error',
        run: ({ win, doc }) => {
          const inp = doc.getElementById('bio-input');
          const cnt = doc.getElementById('bio-count');
          inp.value = '1234567890123456789012345';
          inp.dispatchEvent(new win.Event('input', { bubbles: true }));
          return { passed: cnt.textContent === '25/20' && cnt.classList.contains('error'), expected: '25/20, error=true', actual: `${cnt.textContent}, error=${cnt.classList.contains('error')}` };
        }
      },
      {
        name: 'ลบกลับมาเหลือ 10 ตัวอักษร คลาส error ถูกลบออก',
        run: ({ win, doc }) => {
          const inp = doc.getElementById('bio-input');
          const cnt = doc.getElementById('bio-count');
          inp.value = '1234567890123456789012345';
          inp.dispatchEvent(new win.Event('input', { bubbles: true }));
          inp.value = '1234567890';
          inp.dispatchEvent(new win.Event('input', { bubbles: true }));
          return { passed: cnt.textContent === '10/20' && !cnt.classList.contains('error'), expected: '10/20, error=false', actual: `${cnt.textContent}, error=${cnt.classList.contains('error')}` };
        }
      }
    ]
  }),
  makeEventProblem({
    num: 23,
    id: 'ch4-23',
    title: 'ตรวจสอบฟอร์มเข้าสู่ระบบ (อีเมลต้องมี @ และรหัสผ่าน >= 6 ตัว)',
    difficulty: 'ปานกลาง',
    tags: ['Form Validation', 'click'],
    description: 'เมื่อคลิก <code>#login-btn</code> ให้ตรวจค่าจาก <code>#email</code> และ <code>#pwd</code> แล้วแสดงข้อความใน <code>#login-msg</code>',
    requirements: [
      'ถ้า <code>#email.value.trim()</code> ไม่มี <code>"@"</code> แสดง <code>"อีเมลไม่ถูกต้อง"</code>',
      'ถ้า <code>#pwd.value.length &lt; 6</code> แสดง <code>"รหัสผ่านสั้นเกินไป"</code>',
      'ถ้าผ่านทั้งคู่ แสดง <code>"เข้าสู่ระบบสำเร็จ"</code>'
    ],
    html: `<div class="card"><input id="email" type="text" /><input id="pwd" type="password" /><button id="login-btn">เข้าสู่ระบบ</button><p id="login-msg"></p></div>`,
    starterJs: `const email = document.getElementById("email");\nconst pwd = document.getElementById("pwd");\nconst loginBtn = document.getElementById("login-btn");\nconst loginMsg = document.getElementById("login-msg");\n// ผูก click event ตรวจสอบข้อมูลที่นี่\n`,
    solutionJs: `const email = document.getElementById("email");\nconst pwd = document.getElementById("pwd");\nconst loginBtn = document.getElementById("login-btn");\nconst loginMsg = document.getElementById("login-msg");\nloginBtn.addEventListener("click", () => {\n  if (!email.value.trim().includes("@")) {\n    loginMsg.textContent = "อีเมลไม่ถูกต้อง";\n    return;\n  }\n  if (pwd.value.length < 6) {\n    loginMsg.textContent = "รหัสผ่านสั้นเกินไป";\n    return;\n  }\n  loginMsg.textContent = "เข้าสู่ระบบสำเร็จ";\n});`,
    hints: ['ตรวจอีเมลก่อน ถ้าไม่ผ่านให้ return ทันที แล้วจึงตรวจความยาวรหัสผ่าน'],
    testCases: [
      {
        name: 'อีเมลไม่มี @ แสดง "อีเมลไม่ถูกต้อง"',
        run: ({ doc }) => {
          doc.getElementById('email').value = 'wrongemail.com';
          doc.getElementById('pwd').value = '123456';
          doc.getElementById('login-btn').click();
          const actual = doc.getElementById('login-msg').textContent;
          return { passed: actual === 'อีเมลไม่ถูกต้อง', expected: 'อีเมลไม่ถูกต้อง', actual };
        }
      },
      {
        name: 'รหัสผ่านสั้นกว่า 6 ตัว แสดง "รหัสผ่านสั้นเกินไป"',
        run: ({ doc }) => {
          doc.getElementById('email').value = 'test@dev.com';
          doc.getElementById('pwd').value = '123';
          doc.getElementById('login-btn').click();
          const actual = doc.getElementById('login-msg').textContent;
          return { passed: actual === 'รหัสผ่านสั้นเกินไป', expected: 'รหัสผ่านสั้นเกินไป', actual };
        }
      },
      {
        name: 'ข้อมูลถูกต้องครบ แสดง "เข้าสู่ระบบสำเร็จ"',
        run: ({ doc }) => {
          doc.getElementById('email').value = 'chinnakrit@dev.com';
          doc.getElementById('pwd').value = 'secret123';
          doc.getElementById('login-btn').click();
          const actual = doc.getElementById('login-msg').textContent;
          return { passed: actual === 'เข้าสู่ระบบสำเร็จ', expected: 'เข้าสู่ระบบสำเร็จ', actual };
        }
      }
    ]
  }),
  makeEventProblem({
    num: 24,
    id: 'ch4-24',
    title: 'ตรวจสอบรหัสผ่านและยืนยันรหัสผ่านตรงกันแบบเรียลไทม์',
    difficulty: 'ปานกลาง',
    tags: ['input event', 'Password Match'],
    description: 'เมื่อพิมพ์ใน <code>#pass1</code> หรือ <code>#pass2</code> ถ้าค่าทั้งสองช่องตรงกัน (และไม่ว่างเปล่า) ให้แสดงใน <code>#match-msg</code> ว่า <code>"รหัสผ่านตรงกัน"</code> ถ้าไม่ตรงกันให้แสดง <code>"รหัสผ่านไม่ตรงกัน"</code>',
    requirements: ['ดักจับ event <code>input</code> ทั้งบน <code>#pass1</code> และ <code>#pass2</code>'],
    html: `<div class="card"><input id="pass1" type="password" placeholder="รหัสผ่าน" /><input id="pass2" type="password" placeholder="ยืนยันรหัสผ่าน" /><p id="match-msg">-</p></div>`,
    starterJs: `const pass1 = document.getElementById("pass1");\nconst pass2 = document.getElementById("pass2");\nconst matchMsg = document.getElementById("match-msg");\n// เขียนฟังก์ชันเช็กรหัสผ่านและผูกกับ input ทั้งสองช่อง\n`,
    solutionJs: `const pass1 = document.getElementById("pass1");\nconst pass2 = document.getElementById("pass2");\nconst matchMsg = document.getElementById("match-msg");\nfunction checkMatch() {\n  if (pass1.value && pass1.value === pass2.value) {\n    matchMsg.textContent = "รหัสผ่านตรงกัน";\n  } else {\n    matchMsg.textContent = "รหัสผ่านไม่ตรงกัน";\n  }\n}\npass1.addEventListener("input", checkMatch);\npass2.addEventListener("input", checkMatch);`,
    hints: ['สร้างฟังก์ชัน checkMatch() แล้วผูกกับทั้ง pass1 และ pass2'],
    testCases: [
      {
        name: 'พิมพ์รหัสเหมือนกันทั้ง 2 ช่อง แสดง "รหัสผ่านตรงกัน"',
        run: ({ win, doc }) => {
          const p1 = doc.getElementById('pass1');
          const p2 = doc.getElementById('pass2');
          p1.value = 'abc123';
          p2.value = 'abc123';
          p2.dispatchEvent(new win.Event('input', { bubbles: true }));
          const actual = doc.getElementById('match-msg').textContent;
          return { passed: actual === 'รหัสผ่านตรงกัน', expected: 'รหัสผ่านตรงกัน', actual };
        }
      },
      {
        name: 'พิมพ์รหัสต่างกัน แสดง "รหัสผ่านไม่ตรงกัน"',
        run: ({ win, doc }) => {
          const p1 = doc.getElementById('pass1');
          const p2 = doc.getElementById('pass2');
          p1.value = 'abc123';
          p2.value = 'xyz999';
          p2.dispatchEvent(new win.Event('input', { bubbles: true }));
          const actual = doc.getElementById('match-msg').textContent;
          return { passed: actual === 'รหัสผ่านไม่ตรงกัน', expected: 'รหัสผ่านไม่ตรงกัน', actual };
        }
      },
      {
        name: 'แก้ไขที่ช่องแรก #pass1 ให้ตรงกับ #pass2 ก็อัปเดตเป็น "รหัสผ่านตรงกัน"',
        run: ({ win, doc }) => {
          const p1 = doc.getElementById('pass1');
          const p2 = doc.getElementById('pass2');
          p2.value = 'same99';
          p1.value = 'same99';
          p1.dispatchEvent(new win.Event('input', { bubbles: true }));
          const actual = doc.getElementById('match-msg').textContent;
          return { passed: actual === 'รหัสผ่านตรงกัน', expected: 'รหัสผ่านตรงกัน', actual };
        }
      }
    ]
  }),
  makeEventProblem({
    num: 25,
    id: 'ch4-25',
    title: 'คำนวณราคารวมแบบสดเมื่อเปลี่ยนจำนวนชิ้นใน #qty-input',
    difficulty: 'ปานกลาง',
    tags: ['input event', 'Live Calculation'],
    description: 'ราคาต่อชิ้นอยู่ใน <code>#unit-price</code> (250) เมื่อผู้ใช้เปลี่ยนค่าใน <code>#qty-input</code> (event <code>input</code>) ให้คำนวณราคารวมแสดงใน <code>#live-total</code>',
    requirements: ['คำนวณ <code>Number(unitPrice.textContent) * Number(qtyInput.value)</code> แล้วแสดงใน <code>#live-total</code>'],
    html: `<div class="card"><p>ราคาต่อชิ้น: <span id="unit-price">250</span> บาท</p><input id="qty-input" type="number" value="1" /><p>ราคารวม: <strong id="live-total">250</strong> บาท</p></div>`,
    starterJs: `const unitPrice = document.getElementById("unit-price");\nconst qtyInput = document.getElementById("qty-input");\nconst liveTotal = document.getElementById("live-total");\n// ดักจับ event 'input' บน qtyInput ที่นี่\n`,
    solutionJs: `const unitPrice = document.getElementById("unit-price");\nconst qtyInput = document.getElementById("qty-input");\nconst liveTotal = document.getElementById("live-total");\nqtyInput.addEventListener("input", () => {\n  const total = Number(unitPrice.textContent) * Number(qtyInput.value);\n  liveTotal.textContent = String(total);\n});`,
    hints: ['คูณ Number(unitPrice.textContent) กับ Number(qtyInput.value)'],
    testCases: [
      {
        name: 'เปลี่ยนจำนวนเป็น 4 ชิ้น แสดงราคารวม "1000"',
        run: ({ win, doc }) => {
          const inp = doc.getElementById('qty-input');
          inp.value = '4';
          inp.dispatchEvent(new win.Event('input', { bubbles: true }));
          const actual = doc.getElementById('live-total').textContent;
          return { passed: actual === '1000', expected: '1000', actual };
        }
      },
      {
        name: 'เปลี่ยนจำนวนเป็น 0 ชิ้น แสดงราคารวม "0"',
        run: ({ win, doc }) => {
          const inp = doc.getElementById('qty-input');
          inp.value = '0';
          inp.dispatchEvent(new win.Event('input', { bubbles: true }));
          const actual = doc.getElementById('live-total').textContent;
          return { passed: actual === '0', expected: '0', actual };
        }
      },
      {
        name: 'เมื่อราคาต่อชิ้นใน DOM เปลี่ยนเป็น 100 และจำนวนเป็น 3 แสดง "300"',
        run: ({ win, doc }) => {
          doc.getElementById('unit-price').textContent = '100';
          const inp = doc.getElementById('qty-input');
          inp.value = '3';
          inp.dispatchEvent(new win.Event('input', { bubbles: true }));
          const actual = doc.getElementById('live-total').textContent;
          return { passed: actual === '300', expected: '300', actual };
        }
      }
    ]
  }),
  makeEventProblem({
    num: 26,
    id: 'ch4-26',
    title: 'คลิกปุ่มแท็บ .tab-btn เพื่อสลับคลาส active เฉพาะปุ่มที่คลิก',
    difficulty: 'ปานกลาง',
    tags: ['querySelectorAll', 'click', 'classList'],
    description: 'เมื่อคลิกปุ่ม <code>.tab-btn</code> ปุ่มใด ให้ลบคลาส <code>active</code> ออกจากทุกปุ่มก่อน แล้วเพิ่มคลาส <code>active</code> ให้เฉพาะปุ่มที่เพิ่งถูกคลิก',
    requirements: ['วนลูปผูก click event ให้ทุก <code>.tab-btn</code>'],
    html: `<div class="card"><button class="tab-btn active">แท็บ A</button><button class="tab-btn">แท็บ B</button><button class="tab-btn">แท็บ C</button></div>`,
    starterJs: `const tabBtns = document.querySelectorAll(".tab-btn");\n// วนลูปผูก click event ที่นี่\n`,
    solutionJs: `const tabBtns = document.querySelectorAll(".tab-btn");\ntabBtns.forEach(btn => {\n  btn.addEventListener("click", () => {\n    tabBtns.forEach(b => b.classList.remove("active"));\n    btn.classList.add("active");\n  });\n});`,
    hints: ['ใช้ tabBtns.forEach(b => b.classList.remove("active")); แล้วตามด้วย btn.classList.add("active");'],
    testCases: [
      {
        name: 'คลิกปุ่มที่ 2 แล้วเฉพาะปุ่มที่ 2 มีคลาส active',
        run: ({ doc }) => {
          const btns = doc.querySelectorAll('.tab-btn');
          btns[1].click();
          const ok = !btns[0].classList.contains('active') && btns[1].classList.contains('active') && !btns[2].classList.contains('active');
          return { passed: ok, expected: 'only btns[1] active', actual: `[${btns[0].classList.contains('active')}, ${btns[1].classList.contains('active')}, ${btns[2].classList.contains('active')}]` };
        }
      },
      {
        name: 'คลิกปุ่มที่ 3 แล้วเฉพาะปุ่มที่ 3 มีคลาส active',
        run: ({ doc }) => {
          const btns = doc.querySelectorAll('.tab-btn');
          btns[2].click();
          const ok = !btns[0].classList.contains('active') && !btns[1].classList.contains('active') && btns[2].classList.contains('active');
          return { passed: ok, expected: 'only btns[2] active', actual: `btns[2].active=${btns[2].classList.contains('active')}` };
        }
      },
      {
        name: 'มีปุ่มที่มีคลาส active เพียง 1 ปุ่มเสมอ',
        run: ({ doc }) => {
          const btns = doc.querySelectorAll('.tab-btn');
          btns[0].click();
          const count = doc.querySelectorAll('.tab-btn.active').length;
          return { passed: count === 1, expected: 1, actual: count };
        }
      }
    ]
  }),
  makeEventProblem({
    num: 27,
    id: 'ch4-27',
    title: 'คลิกปุ่ม #add-btn เพื่อนำข้อความจาก #item-input ไปสร้าง <li> ใน #list',
    difficulty: 'ปานกลาง',
    tags: ['click', 'createElement', 'Input Reset'],
    description: 'เมื่อคลิก <code>#add-btn</code> ถ้ารายการใน <code>#item-input.value.trim()</code> ไม่ว่างเปล่า ให้สร้าง <code>&lt;li&gt;</code> เพิ่มใน <code>#list</code> แล้วล้างช่อง Input ให้ว่าง',
    requirements: ['ถ้าข้อความว่างไม่ต้องเพิ่ม <code>&lt;li&gt;</code>', 'หลังเพิ่มเสร็จต้องล้าง <code>itemInput.value = ""</code>'],
    html: `<div class="card"><input id="item-input" type="text" /><button id="add-btn">เพิ่ม</button><ul id="list"></ul></div>`,
    starterJs: `const itemInput = document.getElementById("item-input");\nconst addBtn = document.getElementById("add-btn");\nconst list = document.getElementById("list");\n// ผูก click event ที่นี่\n`,
    solutionJs: `const itemInput = document.getElementById("item-input");\nconst addBtn = document.getElementById("add-btn");\nconst list = document.getElementById("list");\naddBtn.addEventListener("click", () => {\n  const val = itemInput.value.trim();\n  if (!val) return;\n  const li = document.createElement("li");\n  li.textContent = val;\n  list.appendChild(li);\n  itemInput.value = "";\n});`,
    hints: ['เช็ก if (!val) return; ก่อนสร้าง li และอย่าลืม itemInput.value = "";'],
    testCases: [
      {
        name: 'เพิ่ม "ซื้อนม" ลงใน #list และล้างช่อง input สำเร็จ',
        run: ({ doc }) => {
          doc.getElementById('list').innerHTML = '';
          const inp = doc.getElementById('item-input');
          inp.value = 'ซื้อนม';
          doc.getElementById('add-btn').click();
          const items = doc.querySelectorAll('#list li');
          return { passed: items.length === 1 && items[0].textContent === 'ซื้อนม' && inp.value === '', expected: '1 item ("ซื้อนม"), input=""', actual: `${items.length} items, input="${inp.value}"` };
        }
      },
      {
        name: 'กรณีช่อง input มีแต่ช่องว่าง "   " ต้องไม่เพิ่มรายการ',
        run: ({ doc }) => {
          doc.getElementById('list').innerHTML = '';
          doc.getElementById('item-input').value = '   ';
          doc.getElementById('add-btn').click();
          const count = doc.querySelectorAll('#list li').length;
          return { passed: count === 0, expected: 0, actual: count };
        }
      },
      {
        name: 'เพิ่มหลายรายการต่อเนื่องได้ถูกต้อง',
        run: ({ doc }) => {
          doc.getElementById('list').innerHTML = '';
          const inp = doc.getElementById('item-input');
          inp.value = 'A';
          doc.getElementById('add-btn').click();
          inp.value = 'B';
          doc.getElementById('add-btn').click();
          const count = doc.querySelectorAll('#list li').length;
          return { passed: count === 2, expected: 2, actual: count };
        }
      }
    ]
  }),
  makeEventProblem({
    num: 28,
    id: 'ch4-28',
    title: 'คลิกที่รายการ .removable-item ตัวใด ให้ลบรายการนั้นออกจากหน้าเว็บ',
    difficulty: 'ปานกลาง',
    tags: ['click', 'element.remove()'],
    description: 'ผูก click event ให้ทุก <code>.removable-item</code> เมื่อคลิกที่รายการใดให้สั่ง <code>item.remove()</code> เพื่อลบตัวมันเองออกจาก DOM',
    requirements: ['วนลูป <code>document.querySelectorAll(".removable-item")</code> แล้วผูก click event สั่ง <code>.remove()</code>'],
    html: `<div class="card"><ul id="rem-list"><li class="removable-item">คลิกเพื่อลบฉัน 1</li><li class="removable-item">คลิกเพื่อลบฉัน 2</li><li class="removable-item">คลิกเพื่อลบฉัน 3</li></ul></div>`,
    starterJs: `const items = document.querySelectorAll(".removable-item");\n// ผูก click event เพื่อลบรายการที่คลิก\n`,
    solutionJs: `const items = document.querySelectorAll(".removable-item");\nitems.forEach(item => {\n  item.addEventListener("click", () => {\n    item.remove();\n  });\n});`,
    hints: ['ใช้ items.forEach(item => item.addEventListener("click", () => item.remove()));'],
    testCases: [
      {
        name: 'คลิกรายการแรก ถูกลบออกเหลือ 2 รายการ',
        run: ({ doc }) => {
          const first = doc.querySelectorAll('.removable-item')[0];
          if (first) first.click();
          const count = doc.querySelectorAll('.removable-item').length;
          return { passed: count === 2, expected: 2, actual: count };
        }
      },
      {
        name: 'คลิกรายการที่เหลืออีกรายการ เหลือ 1 รายการ',
        run: ({ doc }) => {
          const first = doc.querySelectorAll('.removable-item')[0];
          if (first) first.click();
          const count = doc.querySelectorAll('.removable-item').length;
          return { passed: count === 1, expected: 1, actual: count };
        }
      },
      {
        name: 'คลิกรายการสุดท้ายจนเหลือ 0 รายการ',
        run: ({ doc }) => {
          doc.querySelectorAll('.removable-item').forEach(el => el.click());
          const count = doc.querySelectorAll('.removable-item').length;
          return { passed: count === 0, expected: 0, actual: count };
        }
      }
    ]
  }),
  makeEventProblem({
    num: 29,
    id: 'ch4-29',
    title: 'ดึงข้อมูลผู้ใช้แบบ Async พร้อมจัดการ Error ด้วย try / catch',
    difficulty: 'ปานกลาง',
    tags: ['async / await', 'try / catch'],
    description: 'เขียนฟังก์ชัน <code>async function safeFetchUser(apiFn)</code> ที่เรียก <code>await apiFn()</code> ถ้าสำเร็จคืนค่า <code>data.username</code> ถ้าเกิด Error คืนค่า <code>"เกิดข้อผิดพลาด"</code>',
    requirements: ['ใช้ <code>try { ... } catch (err) { return "เกิดข้อผิดพลาด"; }</code>'],
    html: `<div class="card"><p id="safe-out">-</p></div>`,
    starterJs: `async function safeFetchUser(apiFn) {\n  // ใช้ try / catch ร่วมกับ await apiFn()\n  \n}\nsafeFetchUser(async () => ({ username: "chinnakrit" })).then(res => {\n  document.getElementById("safe-out").textContent = res;\n});`,
    solutionJs: `async function safeFetchUser(apiFn) {\n  try {\n    const data = await apiFn();\n    return data.username;\n  } catch (err) {\n    return "เกิดข้อผิดพลาด";\n  }\n}\nsafeFetchUser(async () => ({ username: "chinnakrit" })).then(res => {\n  document.getElementById("safe-out").textContent = res;\n});`,
    hints: ['ใน try ให้ const data = await apiFn(); return data.username; ส่วนใน catch ให้ return "เกิดข้อผิดพลาด";'],
    testCases: [
      {
        name: 'กรณี API สำเร็จ คืนค่า username ได้ถูกต้อง',
        run: async ({ win }) => {
          const actual = await win.safeFetchUser(async () => ({ username: 'chinnakrit' }));
          return { passed: actual === 'chinnakrit', expected: 'chinnakrit', actual };
        }
      },
      {
        name: 'กรณี API โยน Error ดักจับได้และคืนค่า "เกิดข้อผิดพลาด"',
        run: async ({ win }) => {
          const actual = await win.safeFetchUser(async () => {
            throw new Error('500 Server Error');
          });
          return { passed: actual === 'เกิดข้อผิดพลาด', expected: 'เกิดข้อผิดพลาด', actual };
        }
      },
      {
        name: 'กรณี API สำเร็จด้วยชื่ออื่น คืนค่าตรงตามจริง',
        run: async ({ win }) => {
          const actual = await win.safeFetchUser(async () => ({ username: 'admin_01' }));
          return { passed: actual === 'admin_01', expected: 'admin_01', actual };
        }
      }
    ]
  }),
  makeEventProblem({
    num: 30,
    id: 'ch4-30',
    title: 'คลิกปุ่ม #select-all-btn เพื่อติ๊กถูก Checkbox .task-chk ทุกตัว',
    difficulty: 'ปานกลาง',
    tags: ['querySelectorAll', 'checkbox.checked'],
    description: 'เมื่อคลิกปุ่ม <code>#select-all-btn</code> ให้ตั้งค่า <code>.checked = true</code> ให้กับ Checkbox ที่มีคลาส <code>.task-chk</code> ทุกตัวในหน้าเว็บ',
    requirements: ['วนลูป <code>document.querySelectorAll(".task-chk")</code> แล้วตั้งค่า <code>chk.checked = true</code>'],
    html: `<div class="card"><button id="select-all-btn">เลือกทั้งหมด</button><div><input type="checkbox" class="task-chk" /><input type="checkbox" class="task-chk" /><input type="checkbox" class="task-chk" /></div></div>`,
    starterJs: `const selectAllBtn = document.getElementById("select-all-btn");\n// ผูก click event ที่นี่\n`,
    solutionJs: `const selectAllBtn = document.getElementById("select-all-btn");\nselectAllBtn.addEventListener("click", () => {\n  document.querySelectorAll(".task-chk").forEach(chk => {\n    chk.checked = true;\n  });\n});`,
    hints: ['ใช้ document.querySelectorAll(".task-chk").forEach(chk => { chk.checked = true; });'],
    testCases: [
      {
        name: 'คลิก #select-all-btn แล้ว .task-chk ทุกตัวมี checked === true',
        run: ({ doc }) => {
          doc.querySelectorAll('.task-chk').forEach(c => (c.checked = false));
          doc.getElementById('select-all-btn').click();
          const allChecked = Array.from(doc.querySelectorAll('.task-chk')).every(c => c.checked === true);
          return { passed: allChecked, expected: 'true', actual: String(allChecked) };
        }
      },
      {
        name: 'กรณีมีบางตัวติ๊กอยู่แล้ว หลังคลิกทุกตัวต้องติ๊กครบ',
        run: ({ doc }) => {
          const chks = doc.querySelectorAll('.task-chk');
          chks[0].checked = true;
          chks[1].checked = false;
          doc.getElementById('select-all-btn').click();
          const allChecked = Array.from(chks).every(c => c.checked === true);
          return { passed: allChecked, expected: 'true', actual: String(allChecked) };
        }
      },
      {
        name: 'นับจำนวน .task-chk:checked ได้ครบ 3 ตัว',
        run: ({ doc }) => {
          doc.getElementById('select-all-btn').click();
          const count = doc.querySelectorAll('.task-chk:checked').length;
          return { passed: count === 3, expected: 3, actual: count };
        }
      }
    ]
  }),

  // ======================== ยาก (5 ข้อ: 31 - 35) ========================
  makeEventProblem({
    num: 31,
    id: 'ch4-31',
    title: 'ระบบสลับแท็บเนื้อหาสมบูรณ์ (Tabs + Content Panels)',
    difficulty: 'ยาก',
    tags: ['Tabs UI', 'dataset', 'Events'],
    description: 'เมื่อคลิกปุ่ม <code>.tab-trigger</code> ปุ่มใด ให้ตั้งคลาส <code>active</code> เฉพาะปุ่มนั้น และแสดงเฉพาะ <code>.tab-pane</code> ที่มี <code>id</code> ตรงกับ <code>btn.dataset.target</code>',
    requirements: [
      'ลบ <code>active</code> จากทุก <code>.tab-trigger</code> แล้วเพิ่มให้ปุ่มที่คลิก',
      'ลบ <code>active</code> จากทุก <code>.tab-pane</code> แล้วเพิ่มให้ตัวที่มี <code>id === btn.dataset.target</code>'
    ],
    html: `<div class="card"><div style="margin-bottom:10px;"><button class="tab-trigger active" data-target="p-1">ข้อมูล</button><button class="tab-trigger" data-target="p-2">ตั้งค่า</button><button class="tab-trigger" data-target="p-3">ประวัติ</button></div><div id="p-1" class="tab-pane active">เนื้อหาข้อมูล</div><div id="p-2" class="tab-pane">เนื้อหาตั้งค่า</div><div id="p-3" class="tab-pane">เนื้อหาประวัติ</div></div>`,
    starterJs: `const triggers = document.querySelectorAll(".tab-trigger");\nconst panes = document.querySelectorAll(".tab-pane");\n// ผูก click event สลับแท็บและเนื้อหาที่นี่\n`,
    solutionJs: `const triggers = document.querySelectorAll(".tab-trigger");\nconst panes = document.querySelectorAll(".tab-pane");\ntriggers.forEach(btn => {\n  btn.addEventListener("click", () => {\n    triggers.forEach(b => b.classList.remove("active"));\n    panes.forEach(p => p.classList.remove("active"));\n    btn.classList.add("active");\n    const target = document.getElementById(btn.dataset.target);\n    if (target) target.classList.add("active");\n  });\n});`,
    hints: ['ใช้ btn.dataset.target เพื่อหา id ของ .tab-pane ที่ต้องเปิด'],
    testCases: [
      {
        name: 'คลิกแท็บที่ 2 แล้ว #p-2 มีคลาส active และ #p-1 ไม่มี',
        run: ({ doc }) => {
          doc.querySelectorAll('.tab-trigger')[1].click();
          const p1 = doc.getElementById('p-1').classList.contains('active');
          const p2 = doc.getElementById('p-2').classList.contains('active');
          return { passed: !p1 && p2, expected: 'p-2 active', actual: `p1=${p1}, p2=${p2}` };
        }
      },
      {
        name: 'คลิกแท็บที่ 3 แล้ว #p-3 มีคลาส active',
        run: ({ doc }) => {
          doc.querySelectorAll('.tab-trigger')[2].click();
          const p3 = doc.getElementById('p-3').classList.contains('active');
          return { passed: p3 === true, expected: 'true', actual: String(p3) };
        }
      },
      {
        name: 'คลิกกลับมาที่แท็บแรก #p-1 กลับมา active',
        run: ({ doc }) => {
          doc.querySelectorAll('.tab-trigger')[0].click();
          const p1 = doc.getElementById('p-1').classList.contains('active');
          return { passed: p1 === true, expected: 'true', actual: String(p1) };
        }
      }
    ]
  }),
  makeEventProblem({
    num: 32,
    id: 'ch4-32',
    title: 'ระบบดึงข้อมูล Async พร้อมสถานะ Loading และจัดการ Error บน DOM',
    difficulty: 'ยาก',
    tags: ['Async UI', 'Loading State', 'try/catch'],
    description: 'เขียนฟังก์ชัน <code>async function loadDataToDOM(fetchFn)</code> เพื่ออัปเดตข้อความใน <code>#data-view</code> ตามขั้นตอนการโหลด',
    requirements: [
      'ทันทีที่เริ่มเรียกฟังก์ชัน ให้ตั้งค่า <code>#data-view.textContent = "กำลังโหลด..."</code>',
      'รอผลจาก <code>await fetchFn()</code> ถ้าสำเร็จให้แสดงข้อความที่ได้ลงใน <code>#data-view.textContent</code>',
      'ถ้าเกิด Error ให้แสดง <code>"โหลดข้อมูลล้มเหลว"</code> ใน <code>#data-view.textContent</code>'
    ],
    html: `<div class="card"><p id="data-view">พร้อมโหลด</p></div>`,
    starterJs: `async function loadDataToDOM(fetchFn) {\n  const view = document.getElementById("data-view");\n  // ตั้งค่า "กำลังโหลด..." แล้วรอ await fetchFn() ใน try/catch\n  \n}\nloadDataToDOM(async () => "ข้อมูลสินค้าพร้อมแล้ว!");`,
    solutionJs: `async function loadDataToDOM(fetchFn) {\n  const view = document.getElementById("data-view");\n  view.textContent = "กำลังโหลด...";\n  try {\n    const result = await fetchFn();\n    view.textContent = result;\n  } catch (err) {\n    view.textContent = "โหลดข้อมูลล้มเหลว";\n  }\n}\nloadDataToDOM(async () => "ข้อมูลสินค้าพร้อมแล้ว!");`,
    hints: ['ตั้งค่า view.textContent = "กำลังโหลด..."; ก่อนเข้าบล็อก try'],
    testCases: [
      {
        name: 'ขณะกำลังรอ Promise ข้อความต้องเปลี่ยนเป็น "กำลังโหลด..." ทันที',
        run: async ({ win, doc }) => {
          let duringLoading = '';
          await win.loadDataToDOM(() => {
            duringLoading = doc.getElementById('data-view').textContent;
            return Promise.resolve('เสร็จสิ้น');
          });
          return { passed: duringLoading === 'กำลังโหลด...', expected: 'กำลังโหลด...', actual: duringLoading };
        }
      },
      {
        name: 'เมื่อโหลดสำเร็จ แสดงผลลัพธ์ที่ได้จาก fetchFn()',
        run: async ({ win, doc }) => {
          await win.loadDataToDOM(async () => 'รายการสินค้า 20 ชิ้น');
          const actual = doc.getElementById('data-view').textContent;
          return { passed: actual === 'รายการสินค้า 20 ชิ้น', expected: 'รายการสินค้า 20 ชิ้น', actual };
        }
      },
      {
        name: 'เมื่อเกิด Error แสดง "โหลดข้อมูลล้มเหลว"',
        run: async ({ win, doc }) => {
          await win.loadDataToDOM(async () => {
            throw new Error('Network fail');
          });
          const actual = doc.getElementById('data-view').textContent;
          return { passed: actual === 'โหลดข้อมูลล้มเหลว', expected: 'โหลดข้อมูลล้มเหลว', actual };
        }
      }
    ]
  }),
  makeEventProblem({
    num: 33,
    id: 'ch4-33',
    title: 'ระบบใช้โค้ดส่วนลดคูปองเมื่อคลิกปุ่ม #apply-coupon-btn',
    difficulty: 'ยาก',
    tags: ['Events', 'Coupon Logic', 'DOM'],
    description: 'ราคาตั้งต้นคือ <code>1000</code> บาท เมื่อคลิก <code>#apply-coupon-btn</code> ให้อ่านรหัสจาก <code>#coupon-input</code> (ไม่สนตัวพิมพ์เล็ก-ใหญ่และตัดช่องว่าง) แล้วอัปเดต <code>#final-price</code> และ <code>#coupon-msg</code>',
    requirements: [
      'ถ้ารหัสคือ <code>"SAVE20"</code>: แสดง <code>#final-price</code> เป็น <code>"800"</code> และ <code>#coupon-msg</code> เป็น <code>"ลด 20% สำเร็จ"</code>',
      'ถ้ารหัสคือ <code>"SAVE50"</code>: แสดง <code>#final-price</code> เป็น <code>"500"</code> และ <code>#coupon-msg</code> เป็น <code>"ลด 50% สำเร็จ"</code>',
      'ถ้ารหัสอื่น: แสดง <code>#final-price</code> เป็น <code>"1000"</code> และ <code>#coupon-msg</code> เป็น <code>"รหัสคูปองไม่ถูกต้อง"</code>'
    ],
    html: `<div class="card"><input id="coupon-input" type="text" placeholder="กรอกโค้ด เช่น SAVE20" /><button id="apply-coupon-btn">ใช้คูปอง</button><p>ราคาสุทธิ: <strong id="final-price">1000</strong> บาท</p><p id="coupon-msg"></p></div>`,
    starterJs: `const couponInput = document.getElementById("coupon-input");\nconst applyBtn = document.getElementById("apply-coupon-btn");\nconst finalPrice = document.getElementById("final-price");\nconst couponMsg = document.getElementById("coupon-msg");\n// ผูก click event ตรวจสอบคูปองที่นี่\n`,
    solutionJs: `const couponInput = document.getElementById("coupon-input");\nconst applyBtn = document.getElementById("apply-coupon-btn");\nconst finalPrice = document.getElementById("final-price");\nconst couponMsg = document.getElementById("coupon-msg");\napplyBtn.addEventListener("click", () => {\n  const code = couponInput.value.trim().toUpperCase();\n  if (code === "SAVE20") {\n    finalPrice.textContent = "800";\n    couponMsg.textContent = "ลด 20% สำเร็จ";\n  } else if (code === "SAVE50") {\n    finalPrice.textContent = "500";\n    couponMsg.textContent = "ลด 50% สำเร็จ";\n  } else {\n    finalPrice.textContent = "1000";\n    couponMsg.textContent = "รหัสคูปองไม่ถูกต้อง";\n  }\n});`,
    hints: ['แปลงรหัสด้วย couponInput.value.trim().toUpperCase() ก่อนเปรียบเทียบ'],
    testCases: [
      {
        name: 'กรอก "save20" (ตัวเล็ก) ได้ราคา "800" และข้อความ "ลด 20% สำเร็จ"',
        run: ({ doc }) => {
          doc.getElementById('coupon-input').value = '  save20 ';
          doc.getElementById('apply-coupon-btn').click();
          const p = doc.getElementById('final-price').textContent;
          const m = doc.getElementById('coupon-msg').textContent;
          return { passed: p === '800' && m === 'ลด 20% สำเร็จ', expected: '800, ลด 20% สำเร็จ', actual: `${p}, ${m}` };
        }
      },
      {
        name: 'กรอก "SAVE50" ได้ราคา "500" และข้อความ "ลด 50% สำเร็จ"',
        run: ({ doc }) => {
          doc.getElementById('coupon-input').value = 'SAVE50';
          doc.getElementById('apply-coupon-btn').click();
          const p = doc.getElementById('final-price').textContent;
          const m = doc.getElementById('coupon-msg').textContent;
          return { passed: p === '500' && m === 'ลด 50% สำเร็จ', expected: '500, ลด 50% สำเร็จ', actual: `${p}, ${m}` };
        }
      },
      {
        name: 'กรอกรหัสผิด "INVALID" ได้ราคา "1000" และข้อความ "รหัสคูปองไม่ถูกต้อง"',
        run: ({ doc }) => {
          doc.getElementById('coupon-input').value = 'INVALID';
          doc.getElementById('apply-coupon-btn').click();
          const p = doc.getElementById('final-price').textContent;
          const m = doc.getElementById('coupon-msg').textContent;
          return { passed: p === '1000' && m === 'รหัสคูปองไม่ถูกต้อง', expected: '1000, รหัสคูปองไม่ถูกต้อง', actual: `${p}, ${m}` };
        }
      }
    ]
  }),
  makeEventProblem({
    num: 34,
    id: 'ch4-34',
    title: 'ใช้ Event Delegation บน #item-container เพื่อไฮไลต์รายการที่ถูกคลิก',
    difficulty: 'ยาก',
    tags: ['Event Delegation', 'event.target'],
    description: 'ผูก click event ไว้ที่ตัวแม่ <code>#item-container</code> เพียงจุดเดียว เมื่อคลิกโดนลูกที่มีคลาส <code>.box-item</code> ให้สลับคลาส <code>active</code> บนลูกตัวนั้น และแสดงข้อความของลูกใน <code>#clicked-name</code>',
    requirements: [
      'เช็กว่า <code>e.target.classList.contains("box-item")</code> หรือไม่',
      'ถ้าใช่ ให้สลับคลาส <code>active</code> บน <code>e.target</code> และตั้งค่า <code>#clicked-name.textContent = e.target.textContent</code>'
    ],
    html: `<div class="card"><div id="item-container"><button class="box-item">ไอเทม 1</button><button class="box-item">ไอเทม 2</button></div><p>คลิกล่าสุด: <span id="clicked-name">-</span></p></div>`,
    starterJs: `const container = document.getElementById("item-container");\nconst clickedName = document.getElementById("clicked-name");\n// ผูก click event ที่ container (Event Delegation)\n`,
    solutionJs: `const container = document.getElementById("item-container");\nconst clickedName = document.getElementById("clicked-name");\ncontainer.addEventListener("click", (e) => {\n  if (e.target.classList.contains("box-item")) {\n    e.target.classList.toggle("active");\n    clickedName.textContent = e.target.textContent;\n  }\n});`,
    hints: ['การผูกที่ container ทำให้แม้สร้าง .box-item เพิ่มในอนาคตก็ยังคลิกได้ทันที!'],
    testCases: [
      {
        name: 'คลิก .box-item ตัวแรก มีคลาส active และแสดงชื่อใน #clicked-name',
        run: ({ doc }) => {
          const item1 = doc.querySelectorAll('.box-item')[0];
          item1.classList.remove('active');
          item1.click();
          const name = doc.getElementById('clicked-name').textContent;
          return { passed: item1.classList.contains('active') && name === 'ไอเทม 1', expected: 'active=true, "ไอเทม 1"', actual: `active=${item1.classList.contains('active')}, "${name}"` };
        }
      },
      {
        name: 'เมื่อสร้าง .box-item ใหม่เพิ่มเข้า container แล้วคลิก ก็ทำงานได้ด้วย Event Delegation',
        run: ({ doc }) => {
          const newBtn = doc.createElement('button');
          newBtn.className = 'box-item';
          newBtn.textContent = 'ไอเทมใหม่ 3';
          doc.getElementById('item-container').appendChild(newBtn);
          newBtn.click();
          const name = doc.getElementById('clicked-name').textContent;
          return { passed: newBtn.classList.contains('active') && name === 'ไอเทมใหม่ 3', expected: 'ไอเทมใหม่ 3', actual: name };
        }
      },
      {
        name: 'คลิกซ้ำที่ตัวเดิมจะสลับเอาคลาส active ออก',
        run: ({ doc }) => {
          const item1 = doc.querySelectorAll('.box-item')[0];
          item1.classList.add('active');
          item1.click();
          return { passed: !item1.classList.contains('active'), expected: 'false', actual: String(item1.classList.contains('active')) };
        }
      }
    ]
  }),
  makeEventProblem({
    num: 35,
    id: 'ch4-35',
    title: 'ระบบคำนวณยอดรวมจาก Checkbox บริการเสริมที่ถูกติ๊กเลือกทั้งหมด',
    difficulty: 'ยาก',
    tags: ['change event', 'dataset', 'Dynamic Total'],
    description: 'เมื่อผู้ใช้ติ๊กเลือกหรือยกเลิก Checkbox <code>.addon-chk</code> ตัวใดก็ตาม ให้รวมค่าจาก <code>data-price</code> เฉพาะตัวที่ <code>checked === true</code> แล้วแสดงใน <code>#addon-total</code>',
    requirements: ['ดักจับ event <code>change</code> บนทุก <code>.addon-chk</code>', 'รวมค่า <code>Number(chk.dataset.price)</code> ของทุกตัวที่ถูกติ๊กแสดงใน <code>#addon-total</code>'],
    html: `<div class="card"><div><label><input type="checkbox" class="addon-chk" data-price="100" /> ห่อของขวัญ (+100)</label><br/><label><input type="checkbox" class="addon-chk" data-price="250" /> ประกันสินค้า (+250)</label><br/><label><input type="checkbox" class="addon-chk" data-price="50" /> ส่งด่วน (+50)</label></div><p>รวมค่าบริการเสริม: <strong id="addon-total">0</strong> บาท</p></div>`,
    starterJs: `const checkboxes = document.querySelectorAll(".addon-chk");\nconst addonTotal = document.getElementById("addon-total");\n// คำนวณผลรวมเมื่อมีการเปลี่ยนแปลง checkbox\n`,
    solutionJs: `const checkboxes = document.querySelectorAll(".addon-chk");\nconst addonTotal = document.getElementById("addon-total");\nfunction calcTotal() {\n  let sum = 0;\n  checkboxes.forEach(chk => {\n    if (chk.checked) sum += Number(chk.dataset.price);\n  });\n  addonTotal.textContent = String(sum);\n}\ncheckboxes.forEach(chk => chk.addEventListener("change", calcTotal));`,
    hints: ['เขียนฟังก์ชัน calcTotal() ที่วนลูปเช็ก if (chk.checked) sum += Number(chk.dataset.price);'],
    testCases: [
      {
        name: 'ติ๊กเลือกตัวที่ 1 (100) และตัวที่ 2 (250) แสดงยอดรวม "350"',
        run: ({ win, doc }) => {
          const chks = doc.querySelectorAll('.addon-chk');
          chks.forEach(c => (c.checked = false));
          chks[0].checked = true;
          chks[1].checked = true;
          chks[1].dispatchEvent(new win.Event('change', { bubbles: true }));
          const actual = doc.getElementById('addon-total').textContent;
          return { passed: actual === '350', expected: '350', actual };
        }
      },
      {
        name: 'ติ๊กครบทั้ง 3 ตัว (100 + 250 + 50) แสดงยอดรวม "400"',
        run: ({ win, doc }) => {
          const chks = doc.querySelectorAll('.addon-chk');
          chks.forEach(c => (c.checked = true));
          chks[2].dispatchEvent(new win.Event('change', { bubbles: true }));
          const actual = doc.getElementById('addon-total').textContent;
          return { passed: actual === '400', expected: '400', actual };
        }
      },
      {
        name: 'เอาติ๊กออกทั้งหมด แสดงยอดรวม "0"',
        run: ({ win, doc }) => {
          const chks = doc.querySelectorAll('.addon-chk');
          chks.forEach(c => (c.checked = false));
          chks[0].dispatchEvent(new win.Event('change', { bubbles: true }));
          const actual = doc.getElementById('addon-total').textContent;
          return { passed: actual === '0', expected: '0', actual };
        }
      }
    ]
  })
];

window.CHAPTER_4 = {
  id: 'ch-4',
  number: 4,
  title: 'บทที่ 4: การโต้ตอบกับผู้ใช้ — Events, Forms & Async',
  shortTitle: 'บทที่ 4: Events, Forms & Async',
  icon: '⚡',
  description:
    'ทำให้หน้าเว็บมีชีวิตและโต้ตอบกับผู้ใช้ได้แบบเรียลไทม์: การดักจับการคลิก, การพิมพ์ข้อความสด, การเลือกตัวเลือก, การตรวจสอบฟอร์ม และการทำงานแบบ Asynchronous (Promise / async-await)',
  tags: ['addEventListener', 'click & input', 'Form Validation', 'Event Delegation', 'async / await'],
  lesson: {
    overview:
      'เว็บไซต์ที่ใช้งานได้จริงต้องตอบสนองต่อการกระทำของผู้ใช้ (Events) เช่น เมื่อผู้ใช้คลิกปุ่มสั่งซื้อ พิมพ์ค้นหาสินค้า ติ๊กเลือกเงื่อนไข หรือกดส่งฟอร์ม นอกจากนี้ยังต้องรู้จักการดึงข้อมูลแบบไม่บล็อกหน้าเว็บด้วย async / await',
    mustUse: [
      {
        syntax: 'element.addEventListener("click", () => { ... })',
        usage: 'สั่งให้โค้ดทำงานเมื่อผู้ใช้คลิกที่ปุ่มหรือ Element นั้น',
        example: 'btn.addEventListener("click", () => {\n  count++;\n  display.textContent = count;\n});'
      },
      {
        syntax: 'input.addEventListener("input", () => { ... })',
        usage: 'ทำงานทันทีทุกครั้งที่ผู้ใช้พิมพ์หรือลบตัวอักษรในช่อง <input>',
        example: 'searchInput.addEventListener("input", () => {\n  preview.textContent = searchInput.value;\n});'
      },
      {
        syntax: 'selectOrCheckbox.addEventListener("change", () => { ... })',
        usage: 'ทำงานเมื่อเปลี่ยนตัวเลือกใน <select> หรือติ๊กถูก/ยกเลิก <input type="checkbox">',
        example: 'agreeChk.addEventListener("change", () => {\n  submitBtn.disabled = !agreeChk.checked;\n});'
      },
      {
        syntax: 'form.addEventListener("submit", (e) => { e.preventDefault(); })',
        usage: 'ป้องกันไม่ให้หน้าเว็บกระพริบรีเฟรชเมื่อกดส่งฟอร์ม เพื่อตรวจสอบข้อมูลด้วย JS ก่อน',
        example: 'form.addEventListener("submit", (e) => {\n  e.preventDefault();\n  validateForm();\n});'
      },
      {
        syntax: 'async / await & try / catch',
        usage: 'รอผลลัพธ์จากการดึงข้อมูล API (Promise) และดักจับข้อผิดพลาดอย่างปลอดภัย',
        example: 'try {\n  const data = await fetchApi();\n} catch (err) {\n  showError();\n}'
      }
    ],
    examples: [
      {
        title: 'ตัวอย่างที่ 1: การดักจับการคลิกเพื่อเพิ่มค่าตัวเลข (Counter)',
        explanation: 'เก็บค่าไว้ในตัวแปร state แล้วอัปเดต .textContent ทุกครั้งที่เกิดการคลิก',
        code: `let count = 0;
const countEl = document.getElementById("count");
const incBtn = document.getElementById("inc-btn");

incBtn.addEventListener("click", () => {
  count++;
  countEl.textContent = String(count);
});`
      },
      {
        title: 'ตัวอย่างที่ 2: การตรวจสอบข้อมูลแบบสดขณะพิมพ์ (Live Input)',
        explanation: 'ใช้ event "input" เพื่อเช็กความยาวข้อความและเปลี่ยนสีทันทีเมื่อเกินกำหนด',
        code: `const bioInput = document.getElementById("bio-input");
const counterEl = document.getElementById("counter");

bioInput.addEventListener("input", () => {
  const len = bioInput.value.length;
  counterEl.textContent = \`\${len}/20\`;
  counterEl.classList.toggle("error", len > 20);
});`
      },
      {
        title: 'ตัวอย่างที่ 3: การดึงข้อมูลด้วย async / await และแสดงสถานะ Loading',
        explanation: 'แสดงข้อความกำลังโหลดก่อน แล้วจึงรอข้อมูลด้วย await ในบล็อก try / catch',
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
  },
  problems: CHAPTER_4_PROBLEMS
};
