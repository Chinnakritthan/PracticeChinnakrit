/**
 * บทที่ 3: การเชื่อม JS กับ HTML/CSS (DOM Manipulation)
 * ประกอบด้วย: เนื้อหาบทเรียน + คำสั่งที่ต้องใช้ + ตัวอย่างโค้ด + โจทย์ 35 ข้อ (ง่าย 20, ปานกลาง 10, ยาก 5)
 */

function makeDomProblem({
  num,
  id,
  title,
  difficulty,
  tags,
  description,
  requirements,
  html,
  css,
  starterJs,
  solutionJs,
  hints,
  testCases
}) {
  const defaultCss =
    css ||
    `body { font-family: 'Inter', sans-serif; padding: 20px; background: #f8fafc; color: #0f172a; margin: 0; }
.card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; box-shadow: 0 2px 6px rgba(0,0,0,0.04); }
.active, .highlight { background: #dbeafe; color: #1d4ed8; font-weight: 700; padding: 4px 8px; border-radius: 6px; }
.dark { background: #0f172a; color: #f8fafc; }
.hidden { display: none; }
.success { color: #059669; font-weight: 700; }
.error { color: #dc2626; font-weight: 700; }
input, button { padding: 8px 12px; border-radius: 8px; border: 1px solid #cbd5e1; }
button { background: #2563eb; color: white; border: none; cursor: pointer; }
button:disabled { background: #cbd5e1; color: #64748b; }`;

  return {
    id,
    number: num,
    chapterId: 'ch-3',
    subjectId: 'frontend',
    moduleId: 'ch-3',
    title,
    difficulty,
    tags,
    defaultTab: 'js',
    description,
    requirements,
    starterCode: { html, css: defaultCss, js: starterJs },
    hints,
    solution: { html, css: defaultCss, js: solutionJs },
    testCases
  };
}

const CHAPTER_3_PROBLEMS = [
  // ======================== ง่าย (20 ข้อ: 1 - 20) ========================
  makeDomProblem({
    num: 1,
    id: 'ch3-01',
    title: 'เปลี่ยนข้อความในหัวข้อ #title ด้วย textContent',
    difficulty: 'ง่าย',
    tags: ['getElementById', 'textContent'],
    description: 'เขียนฟังก์ชัน <code>setHeadingText(text)</code> เพื่อเปลี่ยนข้อความข้างใน Element <code>#title</code> ให้เป็นค่า <code>text</code>',
    requirements: ['เลือก Element <code>#title</code>', 'ตั้งค่า <code>.textContent = text</code>'],
    html: `<div class="card"><h2 id="title">ข้อความเดิม</h2></div>`,
    starterJs: `function setHeadingText(text) {\n  // เขียนโค้ดที่นี่\n  \n}\nsetHeadingText("สวัสดี DOM!");`,
    solutionJs: `function setHeadingText(text) {\n  document.getElementById("title").textContent = text;\n}\nsetHeadingText("สวัสดี DOM!");`,
    hints: ['ใช้ document.getElementById("title").textContent = text;'],
    testCases: [
      {
        name: 'เปลี่ยนข้อความเป็น "สวัสดีครับ"',
        run: ({ win, doc }) => {
          win.setHeadingText('สวัสดีครับ');
          const actual = doc.getElementById('title').textContent;
          return { passed: actual === 'สวัสดีครับ', expected: 'สวัสดีครับ', actual };
        }
      },
      {
        name: 'เปลี่ยนข้อความเป็น "Frontend Mastery"',
        run: ({ win, doc }) => {
          win.setHeadingText('Frontend Mastery');
          const actual = doc.getElementById('title').textContent;
          return { passed: actual === 'Frontend Mastery', expected: 'Frontend Mastery', actual };
        }
      },
      {
        name: 'เปลี่ยนเป็นข้อความว่าง ""',
        run: ({ win, doc }) => {
          win.setHeadingText('');
          const actual = doc.getElementById('title').textContent;
          return { passed: actual === '', expected: '', actual };
        }
      }
    ]
  }),
  makeDomProblem({
    num: 2,
    id: 'ch3-02',
    title: 'อ่านข้อความจาก Element #message',
    difficulty: 'ง่าย',
    tags: ['querySelector', 'textContent'],
    description: 'เขียนฟังก์ชัน <code>readBoxText()</code> เพื่ออ่านและคืนค่าข้อความที่อยู่ใน <code>#message</code> (ตัดช่องว่างด้วย <code>.trim()</code>)',
    requirements: ['คืนค่า <code>document.getElementById("message").textContent.trim()</code>'],
    html: `<div class="card"><p id="message">โค้ดลับวันนี้คือ 1234</p></div>`,
    starterJs: `function readBoxText() {\n  // อ่านและ return ข้อความจาก #message\n  \n}\nconsole.log(readBoxText());`,
    solutionJs: `function readBoxText() {\n  return document.getElementById("message").textContent.trim();\n}\nconsole.log(readBoxText());`,
    hints: ['ใช้ return document.getElementById("message").textContent.trim();'],
    testCases: [
      {
        name: 'อ่านข้อความเริ่มต้นได้ถูกต้อง',
        run: ({ win }) => {
          const actual = win.readBoxText();
          return { passed: actual === 'โค้ดลับวันนี้คือ 1234', expected: 'โค้ดลับวันนี้คือ 1234', actual };
        }
      },
      {
        name: 'เมื่อข้อความใน DOM เปลี่ยน ต้องอ่านค่าใหม่ได้ถูกต้อง',
        run: ({ win, doc }) => {
          doc.getElementById('message').textContent = '  ข้อความใหม่  ';
          const actual = win.readBoxText();
          return { passed: actual === 'ข้อความใหม่', expected: 'ข้อความใหม่', actual };
        }
      },
      {
        name: 'กรณีข้อความว่าง คืนค่า ""',
        run: ({ win, doc }) => {
          doc.getElementById('message').textContent = '';
          const actual = win.readBoxText();
          return { passed: actual === '', expected: '', actual };
        }
      }
    ]
  }),
  makeDomProblem({
    num: 3,
    id: 'ch3-03',
    title: 'แสดงข้อความทักทายชื่อผู้ใช้ลงใน #greeting',
    difficulty: 'ง่าย',
    tags: ['DOM', 'Template Literal'],
    description: 'เขียนฟังก์ชัน <code>showGreeting(name)</code> เพื่อเปลี่ยนข้อความใน <code>#greeting</code> เป็น <code>"ยินดีต้อนรับคุณ [name]"</code>',
    requirements: ['ตั้งค่า <code>#greeting</code> เป็น <code>"ยินดีต้อนรับคุณ [name]"</code>'],
    html: `<div class="card"><h3 id="greeting">-</h3></div>`,
    starterJs: `function showGreeting(name) {\n  // เขียนโค้ดที่นี่\n  \n}\nshowGreeting("ชินกฤต");`,
    solutionJs: `function showGreeting(name) {\n  document.getElementById("greeting").textContent = \`ยินดีต้อนรับคุณ \${name}\`;\n}\nshowGreeting("ชินกฤต");`,
    hints: ['ใช้ document.getElementById("greeting").textContent = `ยินดีต้อนรับคุณ ${name}`;'],
    testCases: [
      {
        name: 'ส่งชื่อ "ชินกฤต" แสดง "ยินดีต้อนรับคุณ ชินกฤต"',
        run: ({ win, doc }) => {
          win.showGreeting('ชินกฤต');
          const actual = doc.getElementById('greeting').textContent;
          return { passed: actual === 'ยินดีต้อนรับคุณ ชินกฤต', expected: 'ยินดีต้อนรับคุณ ชินกฤต', actual };
        }
      },
      {
        name: 'ส่งชื่อ "สมหญิง" แสดง "ยินดีต้อนรับคุณ สมหญิง"',
        run: ({ win, doc }) => {
          win.showGreeting('สมหญิง');
          const actual = doc.getElementById('greeting').textContent;
          return { passed: actual === 'ยินดีต้อนรับคุณ สมหญิง', expected: 'ยินดีต้อนรับคุณ สมหญิง', actual };
        }
      },
      {
        name: 'ส่งชื่อ "Admin" แสดง "ยินดีต้อนรับคุณ Admin"',
        run: ({ win, doc }) => {
          win.showGreeting('Admin');
          const actual = doc.getElementById('greeting').textContent;
          return { passed: actual === 'ยินดีต้อนรับคุณ Admin', expected: 'ยินดีต้อนรับคุณ Admin', actual };
        }
      }
    ]
  }),
  makeDomProblem({
    num: 4,
    id: 'ch3-04',
    title: 'เพิ่มคลาส active ให้กับเมนู #menu-item (classList.add)',
    difficulty: 'ง่าย',
    tags: ['classList.add'],
    description: 'เขียนฟังก์ชัน <code>activateItem()</code> เพื่อเพิ่มคลาส <code>active</code> ให้กับ Element <code>#menu-item</code>',
    requirements: ['ใช้ <code>classList.add("active")</code> บน <code>#menu-item</code>'],
    html: `<div class="card"><div id="menu-item">หน้าแรก</div></div>`,
    starterJs: `function activateItem() {\n  // เพิ่มคลาส active ให้ #menu-item\n  \n}\nactivateItem();`,
    solutionJs: `function activateItem() {\n  document.getElementById("menu-item").classList.add("active");\n}\nactivateItem();`,
    hints: ['ใช้ document.getElementById("menu-item").classList.add("active");'],
    testCases: [
      {
        name: '#menu-item มีคลาส active หลังจากเรียกฟังก์ชัน',
        run: ({ win, doc }) => {
          const el = doc.getElementById('menu-item');
          el.classList.remove('active');
          win.activateItem();
          const actual = el.classList.contains('active');
          return { passed: actual === true, expected: 'true', actual: String(actual) };
        }
      },
      {
        name: 'เรียกซ้ำไม่ทำให้เกิดปัญหาและยังมีคลาส active',
        run: ({ win, doc }) => {
          win.activateItem();
          win.activateItem();
          const actual = doc.getElementById('menu-item').classList.contains('active');
          return { passed: actual === true, expected: 'true', actual: String(actual) };
        }
      },
      {
        name: 'คลาสอื่นที่มีอยู่เดิมไม่ถูกลบหายไป',
        run: ({ win, doc }) => {
          const el = doc.getElementById('menu-item');
          el.className = 'nav-link';
          win.activateItem();
          const actual = el.classList.contains('nav-link') && el.classList.contains('active');
          return { passed: actual === true, expected: 'true', actual: String(actual) };
        }
      }
    ]
  }),
  makeDomProblem({
    num: 5,
    id: 'ch3-05',
    title: 'ลบคลาส hidden เพื่อแสดงกล่องแจ้งเตือน (classList.remove)',
    difficulty: 'ง่าย',
    tags: ['classList.remove'],
    description: 'เขียนฟังก์ชัน <code>showAlertBox()</code> เพื่อลบคลาส <code>hidden</code> ออกจาก Element <code>#alert-box</code>',
    requirements: ['ใช้ <code>classList.remove("hidden")</code> บน <code>#alert-box</code>'],
    html: `<div class="card"><div id="alert-box" class="hidden">🔔 แจ้งเตือนสำคัญ!</div></div>`,
    starterJs: `function showAlertBox() {\n  // ลบคลาส hidden ออกจาก #alert-box\n  \n}\nshowAlertBox();`,
    solutionJs: `function showAlertBox() {\n  document.getElementById("alert-box").classList.remove("hidden");\n}\nshowAlertBox();`,
    hints: ['ใช้ document.getElementById("alert-box").classList.remove("hidden");'],
    testCases: [
      {
        name: 'ลบคลาส hidden ออกจาก #alert-box สำเร็จ',
        run: ({ win, doc }) => {
          const el = doc.getElementById('alert-box');
          el.classList.add('hidden');
          win.showAlertBox();
          const actual = el.classList.contains('hidden');
          return { passed: actual === false, expected: 'false (ไม่มี hidden)', actual: String(actual) };
        }
      },
      {
        name: 'กรณีไม่มีคลาส hidden อยู่แล้วทำงานได้ปกติ',
        run: ({ win, doc }) => {
          const el = doc.getElementById('alert-box');
          el.classList.remove('hidden');
          win.showAlertBox();
          return { passed: !el.classList.contains('hidden'), expected: 'false', actual: 'false' };
        }
      },
      {
        name: 'คลาสอื่นบน #alert-box ยังอยู่ครบ',
        run: ({ win, doc }) => {
          const el = doc.getElementById('alert-box');
          el.className = 'box hidden';
          win.showAlertBox();
          const ok = el.classList.contains('box') && !el.classList.contains('hidden');
          return { passed: ok, expected: 'true', actual: String(ok) };
        }
      }
    ]
  }),
  makeDomProblem({
    num: 6,
    id: 'ch3-06',
    title: 'สลับคลาส dark บน #card (classList.toggle)',
    difficulty: 'ง่าย',
    tags: ['classList.toggle'],
    description: 'เขียนฟังก์ชัน <code>toggleDarkCard()</code> เพื่อสลับคลาส <code>dark</code> บน Element <code>#card</code>',
    requirements: ['ใช้ <code>classList.toggle("dark")</code> บน <code>#card</code>'],
    html: `<div id="card" class="card">การ์ดตัวอย่าง</div>`,
    starterJs: `function toggleDarkCard() {\n  // สลับคลาส dark บน #card\n  \n}\ntoggleDarkCard();`,
    solutionJs: `function toggleDarkCard() {\n  document.getElementById("card").classList.toggle("dark");\n}\ntoggleDarkCard();`,
    hints: ['ใช้ document.getElementById("card").classList.toggle("dark");'],
    testCases: [
      {
        name: 'เมื่อไม่มีคลาส dark แล้วเรียกฟังก์ชัน จะเพิ่มคลาส dark',
        run: ({ win, doc }) => {
          const el = doc.getElementById('card');
          el.classList.remove('dark');
          win.toggleDarkCard();
          return { passed: el.classList.contains('dark'), expected: 'true', actual: String(el.classList.contains('dark')) };
        }
      },
      {
        name: 'เมื่อมีคลาส dark อยู่แล้ว เรียกฟังก์ชันจะลบคลาส dark ออก',
        run: ({ win, doc }) => {
          const el = doc.getElementById('card');
          el.classList.add('dark');
          win.toggleDarkCard();
          return { passed: !el.classList.contains('dark'), expected: 'false', actual: String(el.classList.contains('dark')) };
        }
      },
      {
        name: 'สลับ 2 ครั้งติดต่อกันกลับสู่สถานะเดิม',
        run: ({ win, doc }) => {
          const el = doc.getElementById('card');
          el.classList.remove('dark');
          win.toggleDarkCard();
          win.toggleDarkCard();
          return { passed: !el.classList.contains('dark'), expected: 'false', actual: String(el.classList.contains('dark')) };
        }
      }
    ]
  }),
  makeDomProblem({
    num: 7,
    id: 'ch3-07',
    title: 'ตรวจสอบว่า #panel มีคลาส open หรือไม่ (classList.contains)',
    difficulty: 'ง่าย',
    tags: ['classList.contains'],
    description: 'เขียนฟังก์ชัน <code>isPanelOpen()</code> ที่คืนค่า <code>true</code> ถ้า <code>#panel</code> มีคลาส <code>open</code> และ <code>false</code> ถ้าไม่มี',
    requirements: ['ใช้ <code>document.getElementById("panel").classList.contains("open")</code>'],
    html: `<div class="card"><div id="panel" class="open">เนื้อหาในพาเนล</div></div>`,
    starterJs: `function isPanelOpen() {\n  // คืนค่าผลการเช็กคลาส open\n  \n}\nconsole.log("เปิดอยู่หรือไม่:", isPanelOpen());`,
    solutionJs: `function isPanelOpen() {\n  return document.getElementById("panel").classList.contains("open");\n}\nconsole.log("เปิดอยู่หรือไม่:", isPanelOpen());`,
    hints: ['เขียน return document.getElementById("panel").classList.contains("open");'],
    testCases: [
      {
        name: 'เมื่อมีคลาส open คืนค่า true',
        run: ({ win, doc }) => {
          doc.getElementById('panel').classList.add('open');
          const actual = win.isPanelOpen();
          return { passed: actual === true, expected: 'true', actual: String(actual) };
        }
      },
      {
        name: 'เมื่อไม่มีคลาส open คืนค่า false',
        run: ({ win, doc }) => {
          doc.getElementById('panel').classList.remove('open');
          const actual = win.isPanelOpen();
          return { passed: actual === false, expected: 'false', actual: String(actual) };
        }
      },
      {
        name: 'คืนค่าเป็นชนิด Boolean เสมอ',
        run: ({ win }) => {
          const actual = typeof win.isPanelOpen();
          return { passed: actual === 'boolean', expected: 'boolean', actual };
        }
      }
    ]
  }),
  makeDomProblem({
    num: 8,
    id: 'ch3-08',
    title: 'เปลี่ยนสีข้อความของ #status ด้วย .style.color',
    difficulty: 'ง่าย',
    tags: ['style.color', 'Inline Style'],
    description: 'เขียนฟังก์ชัน <code>setStatusColor(color)</code> เพื่อเปลี่ยนสีข้อความของ <code>#status</code> เป็นค่า <code>color</code> ที่รับเข้ามา',
    requirements: ['ตั้งค่า <code>document.getElementById("status").style.color = color</code>'],
    html: `<div class="card"><p id="status">สถานะระบบออนไลน์</p></div>`,
    starterJs: `function setStatusColor(color) {\n  // ตั้งค่า style.color ที่นี่\n  \n}\nsetStatusColor("green");`,
    solutionJs: `function setStatusColor(color) {\n  document.getElementById("status").style.color = color;\n}\nsetStatusColor("green");`,
    hints: ['ใช้ document.getElementById("status").style.color = color;'],
    testCases: [
      {
        name: 'เปลี่ยนสีเป็น "red"',
        run: ({ win, doc }) => {
          win.setStatusColor('red');
          const actual = doc.getElementById('status').style.color;
          return { passed: actual === 'red', expected: 'red', actual };
        }
      },
      {
        name: 'เปลี่ยนสีเป็น "blue"',
        run: ({ win, doc }) => {
          win.setStatusColor('blue');
          const actual = doc.getElementById('status').style.color;
          return { passed: actual === 'blue', expected: 'blue', actual };
        }
      },
      {
        name: 'เปลี่ยนสีเป็น "green"',
        run: ({ win, doc }) => {
          win.setStatusColor('green');
          const actual = doc.getElementById('status').style.color;
          return { passed: actual === 'green', expected: 'green', actual };
        }
      }
    ]
  }),
  makeDomProblem({
    num: 9,
    id: 'ch3-09',
    title: 'ซ่อนแบนเนอร์ #banner ด้วย style.display = "none"',
    difficulty: 'ง่าย',
    tags: ['style.display'],
    description: 'เขียนฟังก์ชัน <code>hideBanner()</code> เพื่อซ่อน Element <code>#banner</code> โดยกำหนด <code>style.display</code> เป็น <code>"none"</code>',
    requirements: ['ตั้งค่า <code>document.getElementById("banner").style.display = "none"</code>'],
    html: `<div class="card"><div id="banner">🎉 โปรโมชันลดราคาพิเศษ!</div></div>`,
    starterJs: `function hideBanner() {\n  // ซ่อน #banner ที่นี่\n  \n}`,
    solutionJs: `function hideBanner() {\n  document.getElementById("banner").style.display = "none";\n}`,
    hints: ['เขียน document.getElementById("banner").style.display = "none";'],
    testCases: [
      {
        name: 'เรียก hideBanner() แล้ว style.display เป็น "none"',
        run: ({ win, doc }) => {
          win.hideBanner();
          const actual = doc.getElementById('banner').style.display;
          return { passed: actual === 'none', expected: 'none', actual };
        }
      },
      {
        name: 'แม้เดิมเป็น "block" ก็เปลี่ยนเป็น "none" ได้',
        run: ({ win, doc }) => {
          doc.getElementById('banner').style.display = 'block';
          win.hideBanner();
          const actual = doc.getElementById('banner').style.display;
          return { passed: actual === 'none', expected: 'none', actual };
        }
      },
      {
        name: 'Element #banner ยังอยู่ใน DOM ไม่ถูกลบทิ้ง',
        run: ({ win, doc }) => {
          win.hideBanner();
          const exists = Boolean(doc.getElementById('banner'));
          return { passed: exists, expected: 'true', actual: String(exists) };
        }
      }
    ]
  }),
  makeDomProblem({
    num: 10,
    id: 'ch3-10',
    title: 'แสดงแบนเนอร์ #banner ด้วย style.display = "block"',
    difficulty: 'ง่าย',
    tags: ['style.display'],
    description: 'เขียนฟังก์ชัน <code>showBanner()</code> เพื่อแสดง Element <code>#banner</code> โดยกำหนด <code>style.display</code> เป็น <code>"block"</code>',
    requirements: ['ตั้งค่า <code>document.getElementById("banner").style.display = "block"</code>'],
    html: `<div class="card"><div id="banner" style="display:none;">🎉 แบนเนอร์แสดงแล้ว!</div></div>`,
    starterJs: `function showBanner() {\n  // แสดง #banner ที่นี่\n  \n}\nshowBanner();`,
    solutionJs: `function showBanner() {\n  document.getElementById("banner").style.display = "block";\n}\nshowBanner();`,
    hints: ['เขียน document.getElementById("banner").style.display = "block";'],
    testCases: [
      {
        name: 'เรียก showBanner() แล้ว style.display เป็น "block"',
        run: ({ win, doc }) => {
          doc.getElementById('banner').style.display = 'none';
          win.showBanner();
          const actual = doc.getElementById('banner').style.display;
          return { passed: actual === 'block', expected: 'block', actual };
        }
      },
      {
        name: 'เรียกซ้ำยังคงเป็น "block"',
        run: ({ win, doc }) => {
          win.showBanner();
          const actual = doc.getElementById('banner').style.display;
          return { passed: actual === 'block', expected: 'block', actual };
        }
      },
      {
        name: 'ข้อความภายในแบนเนอร์ยังคงอยู่เหมือนเดิม',
        run: ({ win, doc }) => {
          win.showBanner();
          const hasText = doc.getElementById('banner').textContent.includes('แบนเนอร์');
          return { passed: hasText, expected: 'true', actual: String(hasText) };
        }
      }
    ]
  }),
  makeDomProblem({
    num: 11,
    id: 'ch3-11',
    title: 'อ่านค่าที่ผู้ใช้พิมพ์ในช่อง Input (#username-input)',
    difficulty: 'ง่าย',
    tags: ['input.value'],
    description: 'เขียนฟังก์ชัน <code>getInputValue()</code> เพื่ออ่านและคืนค่าข้อความใน <code>&lt;input id="username-input"&gt;</code>',
    requirements: ['คืนค่า <code>document.getElementById("username-input").value</code>'],
    html: `<div class="card"><input id="username-input" type="text" value="chinnakrit" /></div>`,
    starterJs: `function getInputValue() {\n  // อ่านค่า .value จาก #username-input\n  \n}\nconsole.log(getInputValue());`,
    solutionJs: `function getInputValue() {\n  return document.getElementById("username-input").value;\n}\nconsole.log(getInputValue());`,
    hints: ['สำหรับ <input> ต้องใช้ .value ไม่ใช่ .textContent'],
    testCases: [
      {
        name: 'อ่านค่าเริ่มต้น "chinnakrit" ได้ถูกต้อง',
        run: ({ win }) => {
          const actual = win.getInputValue();
          return { passed: actual === 'chinnakrit', expected: 'chinnakrit', actual };
        }
      },
      {
        name: 'เมื่อเปลี่ยนค่าใน input เป็น "developer" อ่านได้ "developer"',
        run: ({ win, doc }) => {
          doc.getElementById('username-input').value = 'developer';
          const actual = win.getInputValue();
          return { passed: actual === 'developer', expected: 'developer', actual };
        }
      },
      {
        name: 'เมื่อค่าใน input ว่าง "" อ่านได้ ""',
        run: ({ win, doc }) => {
          doc.getElementById('username-input').value = '';
          const actual = win.getInputValue();
          return { passed: actual === '', expected: '', actual };
        }
      }
    ]
  }),
  makeDomProblem({
    num: 12,
    id: 'ch3-12',
    title: 'กำหนดค่าลงในช่อง Input (#search-input)',
    difficulty: 'ง่าย',
    tags: ['input.value'],
    description: 'เขียนฟังก์ชัน <code>setInputValue(val)</code> เพื่อกำหนดค่าใน <code>#search-input</code> ให้เป็น <code>val</code>',
    requirements: ['ตั้งค่า <code>document.getElementById("search-input").value = val</code>'],
    html: `<div class="card"><input id="search-input" type="text" value="" placeholder="ค้นหา..." /></div>`,
    starterJs: `function setInputValue(val) {\n  // ตั้งค่า .value ให้ #search-input\n  \n}\nsetInputValue("JavaScript DOM");`,
    solutionJs: `function setInputValue(val) {\n  document.getElementById("search-input").value = val;\n}\nsetInputValue("JavaScript DOM");`,
    hints: ['เขียน document.getElementById("search-input").value = val;'],
    testCases: [
      {
        name: 'ตั้งค่าเป็น "React" สำเร็จ',
        run: ({ win, doc }) => {
          win.setInputValue('React');
          const actual = doc.getElementById('search-input').value;
          return { passed: actual === 'React', expected: 'React', actual };
        }
      },
      {
        name: 'ล้างค่าเป็น "" สำเร็จ',
        run: ({ win, doc }) => {
          win.setInputValue('');
          const actual = doc.getElementById('search-input').value;
          return { passed: actual === '', expected: '', actual };
        }
      },
      {
        name: 'ตั้งค่าเป็นภาษาไทย "เรียนทำเว็บ" สำเร็จ',
        run: ({ win, doc }) => {
          win.setInputValue('เรียนทำเว็บ');
          const actual = doc.getElementById('search-input').value;
          return { passed: actual === 'เรียนทำเว็บ', expected: 'เรียนทำเว็บ', actual };
        }
      }
    ]
  }),
  makeDomProblem({
    num: 13,
    id: 'ch3-13',
    title: 'ปิดการใช้งานปุ่ม #submit-btn (disabled = true)',
    difficulty: 'ง่าย',
    tags: ['button.disabled'],
    description: 'เขียนฟังก์ชัน <code>disableSubmitBtn()</code> เพื่อปิดการใช้งานปุ่ม <code>#submit-btn</code>',
    requirements: ['ตั้งค่า <code>document.getElementById("submit-btn").disabled = true</code>'],
    html: `<div class="card"><button id="submit-btn">ส่งข้อมูล</button></div>`,
    starterJs: `function disableSubmitBtn() {\n  // ปิดการใช้งานปุ่ม #submit-btn\n  \n}\ndisableSubmitBtn();`,
    solutionJs: `function disableSubmitBtn() {\n  document.getElementById("submit-btn").disabled = true;\n}\ndisableSubmitBtn();`,
    hints: ['เขียน document.getElementById("submit-btn").disabled = true;'],
    testCases: [
      {
        name: 'ปุ่ม #submit-btn มีสถานะ disabled === true',
        run: ({ win, doc }) => {
          const btn = doc.getElementById('submit-btn');
          btn.disabled = false;
          win.disableSubmitBtn();
          return { passed: btn.disabled === true, expected: 'true', actual: String(btn.disabled) };
        }
      },
      {
        name: 'เรียกซ้ำยังคงเป็น disabled === true',
        run: ({ win, doc }) => {
          win.disableSubmitBtn();
          const btn = doc.getElementById('submit-btn');
          return { passed: btn.disabled === true, expected: 'true', actual: String(btn.disabled) };
        }
      },
      {
        name: 'ข้อความของปุ่มไม่สูญหาย',
        run: ({ win, doc }) => {
          win.disableSubmitBtn();
          const actual = doc.getElementById('submit-btn').textContent;
          return { passed: actual === 'ส่งข้อมูล', expected: 'ส่งข้อมูล', actual };
        }
      }
    ]
  }),
  makeDomProblem({
    num: 14,
    id: 'ch3-14',
    title: 'เปิดการใช้งานปุ่ม #submit-btn (disabled = false)',
    difficulty: 'ง่าย',
    tags: ['button.disabled'],
    description: 'เขียนฟังก์ชัน <code>enableSubmitBtn()</code> เพื่อปลดล็อกปุ่ม <code>#submit-btn</code> ให้กลับมาคลิกได้',
    requirements: ['ตั้งค่า <code>document.getElementById("submit-btn").disabled = false</code>'],
    html: `<div class="card"><button id="submit-btn" disabled>ส่งข้อมูล</button></div>`,
    starterJs: `function enableSubmitBtn() {\n  // เปิดการใช้งานปุ่ม #submit-btn\n  \n}\nenableSubmitBtn();`,
    solutionJs: `function enableSubmitBtn() {\n  document.getElementById("submit-btn").disabled = false;\n}\nenableSubmitBtn();`,
    hints: ['เขียน document.getElementById("submit-btn").disabled = false;'],
    testCases: [
      {
        name: 'ปุ่ม #submit-btn มีสถานะ disabled === false',
        run: ({ win, doc }) => {
          const btn = doc.getElementById('submit-btn');
          btn.disabled = true;
          win.enableSubmitBtn();
          return { passed: btn.disabled === false, expected: 'false', actual: String(btn.disabled) };
        }
      },
      {
        name: 'เรียกซ้ำยังคงเป็น disabled === false',
        run: ({ win, doc }) => {
          win.enableSubmitBtn();
          const btn = doc.getElementById('submit-btn');
          return { passed: btn.disabled === false, expected: 'false', actual: String(btn.disabled) };
        }
      },
      {
        name: 'แอตทริบิวต์ disabled ถูกลบออกจากปุ่ม',
        run: ({ win, doc }) => {
          win.enableSubmitBtn();
          const hasAttr = doc.getElementById('submit-btn').hasAttribute('disabled');
          return { passed: hasAttr === false, expected: 'false', actual: String(hasAttr) };
        }
      }
    ]
  }),
  makeDomProblem({
    num: 15,
    id: 'ch3-15',
    title: 'เปลี่ยน URL ของลิงก์ #profile-link (setAttribute / href)',
    difficulty: 'ง่าย',
    tags: ['Attributes', 'href'],
    description: 'เขียนฟังก์ชัน <code>updateLinkUrl(url)</code> เพื่อเปลี่ยนค่าแอตทริบิวต์ <code>href</code> ของ <code>#profile-link</code>',
    requirements: ['ใช้ <code>setAttribute("href", url)</code> หรือ <code>.href = url</code>'],
    html: `<div class="card"><a id="profile-link" href="#">ไปยังโปรไฟล์</a></div>`,
    starterJs: `function updateLinkUrl(url) {\n  // เปลี่ยน href ของ #profile-link\n  \n}\nupdateLinkUrl("https://github.com/Chinnakritthan");`,
    solutionJs: `function updateLinkUrl(url) {\n  document.getElementById("profile-link").setAttribute("href", url);\n}\nupdateLinkUrl("https://github.com/Chinnakritthan");`,
    hints: ['ใช้ document.getElementById("profile-link").setAttribute("href", url);'],
    testCases: [
      {
        name: 'เปลี่ยน href เป็น "https://example.com" สำเร็จ',
        run: ({ win, doc }) => {
          win.updateLinkUrl('https://example.com');
          const actual = doc.getElementById('profile-link').getAttribute('href');
          return { passed: actual === 'https://example.com', expected: 'https://example.com', actual };
        }
      },
      {
        name: 'เปลี่ยน href เป็น "/about" สำเร็จ',
        run: ({ win, doc }) => {
          win.updateLinkUrl('/about');
          const actual = doc.getElementById('profile-link').getAttribute('href');
          return { passed: actual === '/about', expected: '/about', actual };
        }
      },
      {
        name: 'เปลี่ยน href เป็น "https://github.com" สำเร็จ',
        run: ({ win, doc }) => {
          win.updateLinkUrl('https://github.com');
          const actual = doc.getElementById('profile-link').getAttribute('href');
          return { passed: actual === 'https://github.com', expected: 'https://github.com', actual };
        }
      }
    ]
  }),
  makeDomProblem({
    num: 16,
    id: 'ch3-16',
    title: 'อัปเดต src และคำอธิบาย alt ของรูปภาพ #avatar',
    difficulty: 'ง่าย',
    tags: ['Attributes', 'img src & alt'],
    description: 'เขียนฟังก์ชัน <code>updateAvatar(src, alt)</code> เพื่อกำหนดทั้ง <code>src</code> และ <code>alt</code> ให้กับ <code>&lt;img id="avatar"&gt;</code>',
    requirements: ['ตั้งค่าแอตทริบิวต์ <code>src</code> และ <code>alt</code> ให้กับ <code>#avatar</code>'],
    html: `<div class="card"><img id="avatar" src="old.png" alt="Old" width="60" /></div>`,
    starterJs: `function updateAvatar(src, alt) {\n  // อัปเดต src และ alt ของ #avatar\n  \n}\nupdateAvatar("profile.png", "รูปโปรไฟล์ชินกฤต");`,
    solutionJs: `function updateAvatar(src, alt) {\n  const img = document.getElementById("avatar");\n  img.setAttribute("src", src);\n  img.setAttribute("alt", alt);\n}\nupdateAvatar("profile.png", "รูปโปรไฟล์ชินกฤต");`,
    hints: ['ใช้ img.setAttribute("src", src) และ img.setAttribute("alt", alt)'],
    testCases: [
      {
        name: 'อัปเดต src เป็น "user1.jpg" และ alt เป็น "User 1"',
        run: ({ win, doc }) => {
          win.updateAvatar('user1.jpg', 'User 1');
          const img = doc.getElementById('avatar');
          const ok = img.getAttribute('src') === 'user1.jpg' && img.getAttribute('alt') === 'User 1';
          return { passed: ok, expected: 'src="user1.jpg", alt="User 1"', actual: `src="${img.getAttribute('src')}", alt="${img.getAttribute('alt')}"` };
        }
      },
      {
        name: 'อัปเดตเป็นรูปที่สองได้ถูกต้อง',
        run: ({ win, doc }) => {
          win.updateAvatar('hero.png', 'Hero Image');
          const img = doc.getElementById('avatar');
          const ok = img.getAttribute('src') === 'hero.png' && img.getAttribute('alt') === 'Hero Image';
          return { passed: ok, expected: 'src="hero.png", alt="Hero Image"', actual: `src="${img.getAttribute('src')}", alt="${img.getAttribute('alt')}"` };
        }
      },
      {
        name: 'กรณี alt เป็นค่าว่าง "" ก็ตั้งค่าได้ถูกต้อง',
        run: ({ win, doc }) => {
          win.updateAvatar('icon.svg', '');
          const img = doc.getElementById('avatar');
          return { passed: img.getAttribute('alt') === '', expected: '""', actual: `"${img.getAttribute('alt')}"` };
        }
      }
    ]
  }),
  makeDomProblem({
    num: 17,
    id: 'ch3-17',
    title: 'นับจำนวนรายการ .item ทั้งหมดในหน้าเว็บ (querySelectorAll)',
    difficulty: 'ง่าย',
    tags: ['querySelectorAll', '.length'],
    description: 'เขียนฟังก์ชัน <code>countListItems()</code> เพื่อนับและคืนค่าจำนวน Element ที่มีคลาส <code>.item</code> ทั้งหมดในหน้าเว็บ',
    requirements: ['ใช้ <code>document.querySelectorAll(".item").length</code>'],
    html: `<div class="card"><ul><li class="item">ชิ้นที่ 1</li><li class="item">ชิ้นที่ 2</li><li class="item">ชิ้นที่ 3</li></ul></div>`,
    starterJs: `function countListItems() {\n  // นับและ return จำนวน .item\n  \n}\nconsole.log("จำนวนรายการ:", countListItems());`,
    solutionJs: `function countListItems() {\n  return document.querySelectorAll(".item").length;\n}\nconsole.log("จำนวนรายการ:", countListItems());`,
    hints: ['เขียน return document.querySelectorAll(".item").length;'],
    testCases: [
      {
        name: 'นับจำนวน .item เริ่มต้นได้ 3 รายการ',
        run: ({ win }) => {
          const actual = win.countListItems();
          return { passed: actual === 3, expected: 3, actual };
        }
      },
      {
        name: 'เมื่อเพิ่ม .item เป็น 4 รายการ นับได้ 4',
        run: ({ win, doc }) => {
          doc.querySelector('ul').innerHTML = '<li class="item">1</li><li class="item">2</li><li class="item">3</li><li class="item">4</li>';
          const actual = win.countListItems();
          return { passed: actual === 4, expected: 4, actual };
        }
      },
      {
        name: 'เมื่อไม่มี .item เลย นับได้ 0',
        run: ({ win, doc }) => {
          doc.querySelector('ul').innerHTML = '';
          const actual = win.countListItems();
          return { passed: actual === 0, expected: 0, actual };
        }
      }
    ]
  }),
  makeDomProblem({
    num: 18,
    id: 'ch3-18',
    title: 'ล้างเนื้อหาทั้งหมดภายใน #container ให้ว่างเปล่า',
    difficulty: 'ง่าย',
    tags: ['innerHTML'],
    description: 'เขียนฟังก์ชัน <code>clearContainer()</code> เพื่อลบเนื้อหาและ Element ลูกทั้งหมดภายใน <code>#container</code>',
    requirements: ['ตั้งค่า <code>document.getElementById("container").innerHTML = ""</code>'],
    html: `<div class="card"><div id="container"><p>ข้อมูลเก่า 1</p><p>ข้อมูลเก่า 2</p></div></div>`,
    starterJs: `function clearContainer() {\n  // ล้างเนื้อหาใน #container\n  \n}\nclearContainer();`,
    solutionJs: `function clearContainer() {\n  document.getElementById("container").innerHTML = "";\n}\nclearContainer();`,
    hints: ['ใช้ document.getElementById("container").innerHTML = "";'],
    testCases: [
      {
        name: 'เรียก clearContainer() แล้ว #container ว่างเปล่า',
        run: ({ win, doc }) => {
          win.clearContainer();
          const actual = doc.getElementById('container').innerHTML;
          return { passed: actual === '', expected: '', actual };
        }
      },
      {
        name: 'จำนวน children ใน #container เป็น 0',
        run: ({ win, doc }) => {
          doc.getElementById('container').innerHTML = '<span>A</span><span>B</span>';
          win.clearContainer();
          const count = doc.getElementById('container').children.length;
          return { passed: count === 0, expected: 0, actual: count };
        }
      },
      {
        name: 'ตัว #container เองยังอยู่ในหน้าเว็บ',
        run: ({ win, doc }) => {
          win.clearContainer();
          const exists = Boolean(doc.getElementById('container'));
          return { passed: exists, expected: 'true', actual: String(exists) };
        }
      }
    ]
  }),
  makeDomProblem({
    num: 19,
    id: 'ch3-19',
    title: 'อ่านค่า data-id จาก #product-card (dataset)',
    difficulty: 'ง่าย',
    tags: ['dataset', 'getAttribute'],
    description: 'เขียนฟังก์ชัน <code>getProductId()</code> เพื่ออ่านและคืนค่าแอตทริบิวต์ <code>data-id</code> ของ <code>#product-card</code>',
    requirements: ['ใช้ <code>document.getElementById("product-card").dataset.id</code>'],
    html: `<div id="product-card" class="card" data-id="SKU-909">สินค้าตัวอย่าง</div>`,
    starterJs: `function getProductId() {\n  // อ่านค่า data-id จาก #product-card\n  \n}\nconsole.log("รหัสสินค้า:", getProductId());`,
    solutionJs: `function getProductId() {\n  return document.getElementById("product-card").dataset.id;\n}\nconsole.log("รหัสสินค้า:", getProductId());`,
    hints: ['แอตทริบิวต์ data-id สามารถเข้าถึงได้ผ่าน element.dataset.id'],
    testCases: [
      {
        name: 'อ่านค่า data-id เริ่มต้นได้ "SKU-909"',
        run: ({ win }) => {
          const actual = win.getProductId();
          return { passed: actual === 'SKU-909', expected: 'SKU-909', actual };
        }
      },
      {
        name: 'เมื่อเปลี่ยน data-id เป็น "SKU-101" อ่านได้ "SKU-101"',
        run: ({ win, doc }) => {
          doc.getElementById('product-card').setAttribute('data-id', 'SKU-101');
          const actual = win.getProductId();
          return { passed: actual === 'SKU-101', expected: 'SKU-101', actual };
        }
      },
      {
        name: 'เมื่อเปลี่ยน data-id เป็น "PRO-55" อ่านได้ "PRO-55"',
        run: ({ win, doc }) => {
          doc.getElementById('product-card').setAttribute('data-id', 'PRO-55');
          const actual = win.getProductId();
          return { passed: actual === 'PRO-55', expected: 'PRO-55', actual };
        }
      }
    ]
  }),
  makeDomProblem({
    num: 20,
    id: 'ch3-20',
    title: 'ตั้งค่า data-status ให้กับ #order-box (dataset)',
    difficulty: 'ง่าย',
    tags: ['dataset', 'setAttribute'],
    description: 'เขียนฟังก์ชัน <code>setOrderStatus(status)</code> เพื่อกำหนดค่า <code>data-status</code> บน <code>#order-box</code> ให้เป็นค่า <code>status</code>',
    requirements: ['ตั้งค่า <code>document.getElementById("order-box").dataset.status = status</code>'],
    html: `<div id="order-box" class="card" data-status="pending">คำสั่งซื้อ #1001</div>`,
    starterJs: `function setOrderStatus(status) {\n  // กำหนดค่า data-status ให้ #order-box\n  \n}\nsetOrderStatus("shipped");`,
    solutionJs: `function setOrderStatus(status) {\n  document.getElementById("order-box").dataset.status = status;\n}\nsetOrderStatus("shipped");`,
    hints: ['ใช้ document.getElementById("order-box").dataset.status = status;'],
    testCases: [
      {
        name: 'ตั้งค่า data-status เป็น "shipped" สำเร็จ',
        run: ({ win, doc }) => {
          win.setOrderStatus('shipped');
          const actual = doc.getElementById('order-box').getAttribute('data-status');
          return { passed: actual === 'shipped', expected: 'shipped', actual };
        }
      },
      {
        name: 'ตั้งค่า data-status เป็น "delivered" สำเร็จ',
        run: ({ win, doc }) => {
          win.setOrderStatus('delivered');
          const actual = doc.getElementById('order-box').getAttribute('data-status');
          return { passed: actual === 'delivered', expected: 'delivered', actual };
        }
      },
      {
        name: 'ตั้งค่า data-status เป็น "cancelled" สำเร็จ',
        run: ({ win, doc }) => {
          win.setOrderStatus('cancelled');
          const actual = doc.getElementById('order-box').getAttribute('data-status');
          return { passed: actual === 'cancelled', expected: 'cancelled', actual };
        }
      }
    ]
  }),

  // ======================== ปานกลาง (10 ข้อ: 21 - 30) ========================
  makeDomProblem({
    num: 21,
    id: 'ch3-21',
    title: 'อัปเดตการ์ดโปรไฟล์พร้อมกัน 3 จุด (#name, #role, #points)',
    difficulty: 'ปานกลาง',
    tags: ['DOM', 'Multiple Elements'],
    description: 'เขียนฟังก์ชัน <code>updateProfile(name, role, points)</code> เพื่ออัปเดตข้อมูลบนการ์ดโปรไฟล์ทั้ง 3 จุด',
    requirements: [
      '<code>#name</code> แสดงค่า <code>name</code>, <code>#role</code> แสดงค่า <code>role</code>',
      '<code>#points</code> แสดงข้อความรูปแบบ <code>"[points] คะแนน"</code>'
    ],
    html: `<div class="card"><h3 id="name">-</h3><p id="role">-</p><span id="points">0 คะแนน</span></div>`,
    starterJs: `function updateProfile(name, role, points) {\n  // อัปเดต #name, #role และ #points\n  \n}\nupdateProfile("ชินกฤต", "Frontend Developer", 500);`,
    solutionJs: `function updateProfile(name, role, points) {\n  document.getElementById("name").textContent = name;\n  document.getElementById("role").textContent = role;\n  document.getElementById("points").textContent = \`\${points} คะแนน\`;\n}\nupdateProfile("ชินกฤต", "Frontend Developer", 500);`,
    hints: ['อัปเดต .textContent ทั้ง 3 Element โดยตรง'],
    testCases: [
      {
        name: 'อัปเดตชื่อและตำแหน่งได้ถูกต้อง',
        run: ({ win, doc }) => {
          win.updateProfile('ก้องภพ', 'Engineer', 250);
          const n = doc.getElementById('name').textContent;
          const r = doc.getElementById('role').textContent;
          return { passed: n === 'ก้องภพ' && r === 'Engineer', expected: 'ก้องภพ, Engineer', actual: `${n}, ${r}` };
        }
      },
      {
        name: 'อัปเดตคะแนนเป็น "[points] คะแนน" ถูกต้อง',
        run: ({ win, doc }) => {
          win.updateProfile('ก้องภพ', 'Engineer', 250);
          const p = doc.getElementById('points').textContent;
          return { passed: p === '250 คะแนน', expected: '250 คะแนน', actual: p };
        }
      },
      {
        name: 'อัปเดตซ้ำด้วยข้อมูลชุดใหม่ทำงานถูกต้อง',
        run: ({ win, doc }) => {
          win.updateProfile('มินตรา', 'Designer', 900);
          const p = doc.getElementById('points').textContent;
          return { passed: p === '900 คะแนน', expected: '900 คะแนน', actual: p };
        }
      }
    ]
  }),
  makeDomProblem({
    num: 22,
    id: 'ch3-22',
    title: 'สลับโหมดมืด/สว่างพร้อมเปลี่ยนข้อความป้ายสถานะ',
    difficulty: 'ปานกลาง',
    tags: ['classList.toggle', 'Conditional DOM'],
    description: 'เขียนฟังก์ชัน <code>toggleThemeWithLabel()</code> ที่สลับคลาส <code>dark</code> บน <code>#theme-box</code> แล้วเปลี่ยนข้อความใน <code>#theme-label</code>',
    requirements: [
      'ถ้ามีคลาส <code>dark</code> ให้แสดง <code>"โหมดมืด"</code> ใน <code>#theme-label</code>',
      'ถ้าไม่มีคลาส <code>dark</code> ให้แสดง <code>"โหมดสว่าง"</code> ใน <code>#theme-label</code>'
    ],
    html: `<div id="theme-box" class="card"><strong id="theme-label">โหมดสว่าง</strong></div>`,
    starterJs: `function toggleThemeWithLabel() {\n  // สลับคลาส dark และอัปเดต #theme-label\n  \n}\ntoggleThemeWithLabel();`,
    solutionJs: `function toggleThemeWithLabel() {\n  const box = document.getElementById("theme-box");\n  const isDark = box.classList.toggle("dark");\n  document.getElementById("theme-label").textContent = isDark ? "โหมดมืด" : "โหมดสว่าง";\n}\ntoggleThemeWithLabel();`,
    hints: ['const isDark = box.classList.toggle("dark"); จะคืนค่า true ถ้ามีคลาส dark หลังสลับ'],
    testCases: [
      {
        name: 'สลับเป็นโหมดมืด: มีคลาส dark และข้อความเป็น "โหมดมืด"',
        run: ({ win, doc }) => {
          const box = doc.getElementById('theme-box');
          box.classList.remove('dark');
          win.toggleThemeWithLabel();
          const label = doc.getElementById('theme-label').textContent;
          return { passed: box.classList.contains('dark') && label === 'โหมดมืด', expected: 'dark=true, "โหมดมืด"', actual: `dark=${box.classList.contains('dark')}, "${label}"` };
        }
      },
      {
        name: 'สลับกลับเป็นโหมดสว่าง: ไม่มีคลาส dark และข้อความเป็น "โหมดสว่าง"',
        run: ({ win, doc }) => {
          const box = doc.getElementById('theme-box');
          box.classList.add('dark');
          win.toggleThemeWithLabel();
          const label = doc.getElementById('theme-label').textContent;
          return { passed: !box.classList.contains('dark') && label === 'โหมดสว่าง', expected: 'dark=false, "โหมดสว่าง"', actual: `dark=${box.classList.contains('dark')}, "${label}"` };
        }
      },
      {
        name: 'สลับไปมา 3 ครั้งทำงานสอดคล้องกัน',
        run: ({ win, doc }) => {
          const box = doc.getElementById('theme-box');
          box.classList.remove('dark');
          win.toggleThemeWithLabel();
          win.toggleThemeWithLabel();
          win.toggleThemeWithLabel();
          const label = doc.getElementById('theme-label').textContent;
          return { passed: label === 'โหมดมืด', expected: 'โหมดมืด', actual: label };
        }
      }
    ]
  }),
  makeDomProblem({
    num: 23,
    id: 'ch3-23',
    title: 'สร้าง <li> ใหม่ต่อท้ายรายการ #todo-list (createElement & appendChild)',
    difficulty: 'ปานกลาง',
    tags: ['createElement', 'appendChild'],
    description: 'เขียนฟังก์ชัน <code>appendTodoItem(text)</code> เพื่อสร้าง Element <code>&lt;li&gt;</code> ที่มีข้อความ <code>text</code> แล้วนำไปต่อท้าย <code>#todo-list</code> (โดยไม่ลบรายการเดิม)',
    requirements: ['สร้าง <code>document.createElement("li")</code>', 'กำหนด <code>li.textContent = text</code> แล้ว <code>appendChild(li)</code> ลงใน <code>#todo-list</code>'],
    html: `<div class="card"><ul id="todo-list"><li>อ่านบทเรียน DOM</li></ul></div>`,
    starterJs: `function appendTodoItem(text) {\n  // สร้าง <li> และ appendChild เข้าไปใน #todo-list\n  \n}\nappendTodoItem("ฝึกทำโจทย์ครบ 35 ข้อ");`,
    solutionJs: `function appendTodoItem(text) {\n  const li = document.createElement("li");\n  li.textContent = text;\n  document.getElementById("todo-list").appendChild(li);\n}\nappendTodoItem("ฝึกทำโจทย์ครบ 35 ข้อ");`,
    hints: ['const li = document.createElement("li"); li.textContent = text; document.getElementById("todo-list").appendChild(li);'],
    testCases: [
      {
        name: 'เพิ่มรายการใหม่ต่อท้ายรายการเดิมได้ถูกต้อง',
        run: ({ win, doc }) => {
          const ul = doc.getElementById('todo-list');
          ul.innerHTML = '<li>งานที่ 1</li>';
          win.appendTodoItem('งานที่ 2');
          const items = ul.querySelectorAll('li');
          return { passed: items.length === 2 && items[1].textContent === 'งานที่ 2', expected: '2 items, last="งานที่ 2"', actual: `${items.length} items, last="${items[1]?.textContent}"` };
        }
      },
      {
        name: 'เพิ่มต่อเนื่องอีก 2 รายการ รวมเป็น 4 รายการ',
        run: ({ win, doc }) => {
          const ul = doc.getElementById('todo-list');
          ul.innerHTML = '<li>1</li>';
          win.appendTodoItem('2');
          win.appendTodoItem('3');
          win.appendTodoItem('4');
          const count = ul.querySelectorAll('li').length;
          return { passed: count === 4, expected: 4, actual: count };
        }
      },
      {
        name: 'เพิ่มในรายการที่ว่างเปล่าได้สำเร็จ',
        run: ({ win, doc }) => {
          const ul = doc.getElementById('todo-list');
          ul.innerHTML = '';
          win.appendTodoItem('เริ่มต้นใหม่');
          const items = ul.querySelectorAll('li');
          return { passed: items.length === 1 && items[0].textContent === 'เริ่มต้นใหม่', expected: 'เริ่มต้นใหม่', actual: items[0]?.textContent };
        }
      }
    ]
  }),
  makeDomProblem({
    num: 24,
    id: 'ch3-24',
    title: 'เรนเดอร์รายการวิชาเรียนจาก Array ลงใน #course-list',
    difficulty: 'ปานกลาง',
    tags: ['DOM Rendering', 'Array.map'],
    description: 'เขียนฟังก์ชัน <code>renderCourses(courses)</code> เพื่อล้างข้อมูลเก่าใน <code>#course-list</code> แล้วสร้าง <code>&lt;li class="course"&gt;[ชื่อวิชา]&lt;/li&gt;</code> จาก Array <code>courses</code>',
    requirements: ['ล้างข้อมูลเดิมใน <code>#course-list</code>', 'สร้าง <code>&lt;li class="course"&gt;</code> ตามลำดับใน Array'],
    html: `<div class="card"><ul id="course-list"></ul></div>`,
    starterJs: `function renderCourses(courses) {\n  // เรนเดอร์ <li class="course"> ลงใน #course-list\n  \n}\nrenderCourses(["HTML5", "CSS3", "JavaScript"]);`,
    solutionJs: `function renderCourses(courses) {\n  const list = document.getElementById("course-list");\n  list.innerHTML = courses.map(c => \`<li class="course">\${c}</li>\`).join("");\n}\nrenderCourses(["HTML5", "CSS3", "JavaScript"]);`,
    hints: ['ใช้ list.innerHTML = courses.map(c => `<li class="course">${c}</li>`).join("");'],
    testCases: [
      {
        name: 'เรนเดอร์ 3 วิชาพร้อมคลาส .course ครบถ้วน',
        run: ({ win, doc }) => {
          win.renderCourses(['JS', 'DOM', 'Web']);
          const items = doc.querySelectorAll('#course-list li.course');
          return { passed: items.length === 3 && items[0].textContent === 'JS', expected: '3 items', actual: `${items.length} items` };
        }
      },
      {
        name: 'เมื่อเรียกซ้ำ ข้อมูลเก่าต้องถูกล้างออก',
        run: ({ win, doc }) => {
          win.renderCourses(['A', 'B', 'C']);
          win.renderCourses(['OnlyOne']);
          const items = doc.querySelectorAll('#course-list li.course');
          return { passed: items.length === 1 && items[0].textContent === 'OnlyOne', expected: '1 item ("OnlyOne")', actual: `${items.length} items` };
        }
      },
      {
        name: 'เมื่อส่ง Array ว่าง [] รายการใน #course-list ต้องว่างเปล่า',
        run: ({ win, doc }) => {
          win.renderCourses([]);
          const count = doc.querySelectorAll('#course-list li').length;
          return { passed: count === 0, expected: 0, actual: count };
        }
      }
    ]
  }),
  makeDomProblem({
    num: 25,
    id: 'ch3-25',
    title: 'ควบคุมปุ่มสั่งซื้อและข้อความสต็อกตามจำนวนสินค้า',
    difficulty: 'ปานกลาง',
    tags: ['DOM State', 'disabled'],
    description: 'เขียนฟังก์ชัน <code>updateStockStatus(stock)</code> เพื่ออัปเดตข้อความใน <code>#stock-msg</code> และสถานะปุ่ม <code>#buy-btn</code>',
    requirements: [
      'ถ้า <code>stock &gt; 0</code>: <code>#stock-msg</code> แสดง <code>"มีสินค้า [stock] ชิ้น"</code> และ <code>#buy-btn.disabled = false</code>',
      'ถ้า <code>stock &lt;= 0</code>: <code>#stock-msg</code> แสดง <code>"สินค้าหมด"</code> และ <code>#buy-btn.disabled = true</code>'
    ],
    html: `<div class="card"><p id="stock-msg">-</p><button id="buy-btn">สั่งซื้อ</button></div>`,
    starterJs: `function updateStockStatus(stock) {\n  // อัปเดต #stock-msg และ #buy-btn.disabled\n  \n}\nupdateStockStatus(5);`,
    solutionJs: `function updateStockStatus(stock) {\n  const msg = document.getElementById("stock-msg");\n  const btn = document.getElementById("buy-btn");\n  if (stock > 0) {\n    msg.textContent = \`มีสินค้า \${stock} ชิ้น\`;\n    btn.disabled = false;\n  } else {\n    msg.textContent = "สินค้าหมด";\n    btn.disabled = true;\n  }\n}\nupdateStockStatus(5);`,
    hints: ['เช็ก if (stock > 0) เพื่อตั้งค่าข้อความและ btn.disabled = false;'],
    testCases: [
      {
        name: 'เมื่อ stock = 10 แสดง "มีสินค้า 10 ชิ้น" และปุ่มไม่ถูก disabled',
        run: ({ win, doc }) => {
          win.updateStockStatus(10);
          const msg = doc.getElementById('stock-msg').textContent;
          const dis = doc.getElementById('buy-btn').disabled;
          return { passed: msg === 'มีสินค้า 10 ชิ้น' && dis === false, expected: 'มีสินค้า 10 ชิ้น, disabled=false', actual: `${msg}, disabled=${dis}` };
        }
      },
      {
        name: 'เมื่อ stock = 0 แสดง "สินค้าหมด" และปุ่มถูก disabled',
        run: ({ win, doc }) => {
          win.updateStockStatus(0);
          const msg = doc.getElementById('stock-msg').textContent;
          const dis = doc.getElementById('buy-btn').disabled;
          return { passed: msg === 'สินค้าหมด' && dis === true, expected: 'สินค้าหมด, disabled=true', actual: `${msg}, disabled=${dis}` };
        }
      },
      {
        name: 'เมื่อเติมสต็อกจาก 0 เป็น 2 ปุ่มกลับมาคลิกได้',
        run: ({ win, doc }) => {
          win.updateStockStatus(0);
          win.updateStockStatus(2);
          const dis = doc.getElementById('buy-btn').disabled;
          return { passed: dis === false, expected: 'false', actual: String(dis) };
        }
      }
    ]
  }),
  makeDomProblem({
    num: 26,
    id: 'ch3-26',
    title: 'เพิ่มคลาส highlight ให้กับทุก .item ในหน้าเว็บ (forEach)',
    difficulty: 'ปานกลาง',
    tags: ['querySelectorAll', 'forEach', 'classList'],
    description: 'เขียนฟังก์ชัน <code>highlightAllItems()</code> ที่วนลูปเพิ่มคลาส <code>highlight</code> ให้กับทุก Element ที่มีคลาส <code>.item</code>',
    requirements: ['ใช้ <code>document.querySelectorAll(".item").forEach(...)</code>'],
    html: `<div class="card"><ul><li class="item">หัวข้อ 1</li><li class="item">หัวข้อ 2</li><li class="item">หัวข้อ 3</li></ul></div>`,
    starterJs: `function highlightAllItems() {\n  // เพิ่มคลาส highlight ให้ทุก .item\n  \n}\nhighlightAllItems();`,
    solutionJs: `function highlightAllItems() {\n  document.querySelectorAll(".item").forEach(el => {\n    el.classList.add("highlight");\n  });\n}\nhighlightAllItems();`,
    hints: ['ใช้ document.querySelectorAll(".item").forEach(el => el.classList.add("highlight"));'],
    testCases: [
      {
        name: 'ทุกรายการ .item มีคลาส highlight ครบ',
        run: ({ win, doc }) => {
          doc.querySelectorAll('.item').forEach(el => el.classList.remove('highlight'));
          win.highlightAllItems();
          const allHave = Array.from(doc.querySelectorAll('.item')).every(el => el.classList.contains('highlight'));
          return { passed: allHave, expected: 'true', actual: String(allHave) };
        }
      },
      {
        name: 'จำนวน .item.highlight เท่ากับจำนวน .item ทั้งหมด',
        run: ({ win, doc }) => {
          win.highlightAllItems();
          const count = doc.querySelectorAll('.item.highlight').length;
          return { passed: count === 3, expected: 3, actual: count };
        }
      },
      {
        name: 'เมื่อเพิ่ม .item ใหม่แล้วเรียกฟังก์ชัน รายการใหม่ก็ได้รับคลาส highlight',
        run: ({ win, doc }) => {
          const li = doc.createElement('li');
          li.className = 'item';
          doc.querySelector('ul').appendChild(li);
          win.highlightAllItems();
          return { passed: li.classList.contains('highlight'), expected: 'true', actual: String(li.classList.contains('highlight')) };
        }
      }
    ]
  }),
  makeDomProblem({
    num: 27,
    id: 'ch3-27',
    title: 'อัปเดตแถบความคืบหน้า Progress Bar (#progress-fill & #progress-text)',
    difficulty: 'ปานกลาง',
    tags: ['style.width', 'textContent'],
    description: 'เขียนฟังก์ชัน <code>setProgressBar(percent)</code> เพื่อปรับความกว้างของ <code>#progress-fill</code> และแสดงตัวเลขเปอร์เซ็นต์ใน <code>#progress-text</code>',
    requirements: [
      'กำหนดให้ <code>percent</code> อยู่ระหว่าง 0 ถึง 100 (ถ้าต่ำกว่า 0 ให้เป็น 0, ถ้าเกิน 100 ให้เป็น 100)',
      'ตั้งค่า <code>#progress-fill.style.width = "[val]%"</code> และ <code>#progress-text.textContent = "[val]%"</code>'
    ],
    html: `<div class="card"><div style="background:#e2e8f0;height:14px;border-radius:99px;overflow:hidden;"><div id="progress-fill" style="background:#2563eb;height:100%;width:0%;"></div></div><p id="progress-text">0%</p></div>`,
    starterJs: `function setProgressBar(percent) {\n  // จำกัดค่าระหว่าง 0-100 แล้วอัปเดต style.width และ textContent\n  \n}\nsetProgressBar(65);`,
    solutionJs: `function setProgressBar(percent) {\n  const val = Math.max(0, Math.min(100, percent));\n  document.getElementById("progress-fill").style.width = \`\${val}%\`;\n  document.getElementById("progress-text").textContent = \`\${val}%\`;\n}\nsetProgressBar(65);`,
    hints: ['ใช้ const val = Math.max(0, Math.min(100, percent)); เพื่อคุมขอบเขต 0-100'],
    testCases: [
      {
        name: 'ตั้งค่า 75% แสดงความกว้าง "75%" และข้อความ "75%"',
        run: ({ win, doc }) => {
          win.setProgressBar(75);
          const w = doc.getElementById('progress-fill').style.width;
          const t = doc.getElementById('progress-text').textContent;
          return { passed: w === '75%' && t === '75%', expected: '75%, 75%', actual: `${w}, ${t}` };
        }
      },
      {
        name: 'กรณีส่งค่าเกิน 100 (เช่น 150) ต้องถูกจำกัดไว้ที่ "100%"',
        run: ({ win, doc }) => {
          win.setProgressBar(150);
          const t = doc.getElementById('progress-text').textContent;
          return { passed: t === '100%', expected: '100%', actual: t };
        }
      },
      {
        name: 'กรณีส่งค่าติดลบ (เช่น -20) ต้องถูกจำกัดไว้ที่ "0%"',
        run: ({ win, doc }) => {
          win.setProgressBar(-20);
          const t = doc.getElementById('progress-text').textContent;
          return { passed: t === '0%', expected: '0%', actual: t };
        }
      }
    ]
  }),
  makeDomProblem({
    num: 28,
    id: 'ch3-28',
    title: 'แสดงข้อความแจ้งเตือนพร้อมสลับคลาส success / error',
    difficulty: 'ปานกลาง',
    tags: ['classList', 'Notification UI'],
    description: 'เขียนฟังก์ชัน <code>showNotification(message, isSuccess)</code> เพื่อแสดงข้อความใน <code>#notify-box</code> พร้อมตั้งคลาสให้ตรงกับสถานะ',
    requirements: [
      'เปลี่ยนข้อความใน <code>#notify-box</code> เป็น <code>message</code>',
      'ถ้า <code>isSuccess === true</code> ให้มีคลาส <code>success</code> (และลบคลาส <code>error</code>)',
      'ถ้า <code>isSuccess === false</code> ให้มีคลาส <code>error</code> (และลบคลาส <code>success</code>)'
    ],
    html: `<div class="card"><div id="notify-box">รอสถานะ...</div></div>`,
    starterJs: `function showNotification(message, isSuccess) {\n  // อัปเดตข้อความและคลาส success / error\n  \n}\nshowNotification("บันทึกข้อมูลสำเร็จ!", true);`,
    solutionJs: `function showNotification(message, isSuccess) {\n  const box = document.getElementById("notify-box");\n  box.textContent = message;\n  box.classList.toggle("success", Boolean(isSuccess));\n  box.classList.toggle("error", !isSuccess);\n}\nshowNotification("บันทึกข้อมูลสำเร็จ!", true);`,
    hints: ['ลบคลาสเก่าออกก่อนด้วย box.classList.remove("success", "error") แล้วค่อย .add(isSuccess ? "success" : "error")'],
    testCases: [
      {
        name: 'เมื่อ isSuccess = true มีคลาส success และไม่มีคลาส error',
        run: ({ win, doc }) => {
          win.showNotification('ผ่านแล้ว', true);
          const box = doc.getElementById('notify-box');
          const ok = box.textContent === 'ผ่านแล้ว' && box.classList.contains('success') && !box.classList.contains('error');
          return { passed: ok, expected: 'success=true, error=false', actual: `success=${box.classList.contains('success')}, error=${box.classList.contains('error')}` };
        }
      },
      {
        name: 'เมื่อ isSuccess = false มีคลาส error และไม่มีคลาส success',
        run: ({ win, doc }) => {
          win.showNotification('เกิดข้อผิดพลาด', false);
          const box = doc.getElementById('notify-box');
          const ok = box.textContent === 'เกิดข้อผิดพลาด' && box.classList.contains('error') && !box.classList.contains('success');
          return { passed: ok, expected: 'error=true, success=false', actual: `error=${box.classList.contains('error')}, success=${box.classList.contains('success')}` };
        }
      },
      {
        name: 'สลับจาก error กลับมาเป็น success ได้โดยไม่ค้างคลาสเก่า',
        run: ({ win, doc }) => {
          win.showNotification('ผิดพลาด', false);
          win.showNotification('สำเร็จ', true);
          const box = doc.getElementById('notify-box');
          return { passed: box.classList.contains('success') && !box.classList.contains('error'), expected: 'only success', actual: box.className };
        }
      }
    ]
  }),
  makeDomProblem({
    num: 29,
    id: 'ch3-29',
    title: 'ลบรายการสุดท้ายออกจาก #item-list (lastElementChild.remove)',
    difficulty: 'ปานกลาง',
    tags: ['DOM Removal', 'lastElementChild'],
    description: 'เขียนฟังก์ชัน <code>removeLastItem()</code> เพื่อลบ Element ตัวสุดท้ายใน <code>#item-list</code> (ถ้าไม่มีรายการอยู่เลยไม่ต้องทำอะไร)',
    requirements: ['เช็ก <code>list.lastElementChild</code> ถ้ามีให้สั่ง <code>.remove()</code>'],
    html: `<div class="card"><ul id="item-list"><li>ชิ้นที่ 1</li><li>ชิ้นที่ 2</li><li>ชิ้นที่ 3</li></ul></div>`,
    starterJs: `function removeLastItem() {\n  // ลบ <li> ตัวสุดท้ายใน #item-list\n  \n}\nremoveLastItem();`,
    solutionJs: `function removeLastItem() {\n  const list = document.getElementById("item-list");\n  if (list.lastElementChild) {\n    list.lastElementChild.remove();\n  }\n}\nremoveLastItem();`,
    hints: ['ใช้ const list = document.getElementById("item-list"); if (list.lastElementChild) list.lastElementChild.remove();'],
    testCases: [
      {
        name: 'ลบรายการสุดท้ายจาก 3 รายการ เหลือ 2 รายการ ("ชิ้นที่ 1", "ชิ้นที่ 2")',
        run: ({ win, doc }) => {
          const ul = doc.getElementById('item-list');
          ul.innerHTML = '<li>ชิ้นที่ 1</li><li>ชิ้นที่ 2</li><li>ชิ้นที่ 3</li>';
          win.removeLastItem();
          const items = ul.querySelectorAll('li');
          return { passed: items.length === 2 && items[1].textContent === 'ชิ้นที่ 2', expected: '2 items', actual: `${items.length} items` };
        }
      },
      {
        name: 'เรียกเมื่อรายการว่างเปล่าไม่เกิด Error',
        run: ({ win, doc }) => {
          const ul = doc.getElementById('item-list');
          ul.innerHTML = '';
          win.removeLastItem();
          return { passed: ul.children.length === 0, expected: 0, actual: ul.children.length };
        }
      },
      {
        name: 'ลบต่อเนื่อง 2 ครั้งจาก 2 รายการ จนเหลือ 0 รายการ',
        run: ({ win, doc }) => {
          const ul = doc.getElementById('item-list');
          ul.innerHTML = '<li>A</li><li>B</li>';
          win.removeLastItem();
          win.removeLastItem();
          return { passed: ul.children.length === 0, expected: 0, actual: ul.children.length };
        }
      }
    ]
  }),
  makeDomProblem({
    num: 30,
    id: 'ch3-30',
    title: 'อ่านตัวเลขจาก .price ทุกตัวใน DOM มารวมกันแล้วแสดงใน #total-price',
    difficulty: 'ปานกลาง',
    tags: ['querySelectorAll', 'Number()', 'DOM Sum'],
    description: 'เขียนฟังก์ชัน <code>sumAllPricesInDOM()</code> เพื่ออ่านตัวเลขจากทุก Element ที่มีคลาส <code>.price</code> มารวมกัน แล้วแสดงผลลัพธ์ใน <code>#total-price</code>',
    requirements: ['แปลงข้อความในแต่ละ <code>.price</code> เป็นตัวเลขด้วย <code>Number(el.textContent)</code>', 'นำผลรวมไปแสดงใน <code>#total-price.textContent</code> และ return ค่าผลรวมออกมาด้วย'],
    html: `<div class="card"><div>สินค้า A: <span class="price">150</span></div><div>สินค้า B: <span class="price">250</span></div><div>สินค้า C: <span class="price">100</span></div><hr/><strong>รวม: <span id="total-price">0</span> บาท</strong></div>`,
    starterJs: `function sumAllPricesInDOM() {\n  // รวมค่าจากทุก .price แสดงใน #total-price และ return ผลรวม\n  \n}\nsumAllPricesInDOM();`,
    solutionJs: `function sumAllPricesInDOM() {\n  let sum = 0;\n  document.querySelectorAll(".price").forEach(el => {\n    sum += Number(el.textContent);\n  });\n  document.getElementById("total-price").textContent = String(sum);\n  return sum;\n}\nsumAllPricesInDOM();`,
    hints: ['วนลูป document.querySelectorAll(".price") แล้วบวก Number(el.textContent) เข้ากับ sum'],
    testCases: [
      {
        name: 'รวมราคา 150 + 250 + 100 ได้ 500 และแสดงใน #total-price',
        run: ({ win, doc }) => {
          const res = win.sumAllPricesInDOM();
          const text = doc.getElementById('total-price').textContent;
          return { passed: text === '500' && res === 500, expected: '500', actual: text };
        }
      },
      {
        name: 'เมื่อค่าใน DOM เปลี่ยน คำนวณผลรวมใหม่ได้ถูกต้อง',
        run: ({ win, doc }) => {
          doc.querySelectorAll('.price')[0].textContent = '500';
          win.sumAllPricesInDOM();
          const text = doc.getElementById('total-price').textContent;
          return { passed: text === '850', expected: '850', actual: text };
        }
      },
      {
        name: 'กรณีไม่มี .price เลย แสดง "0"',
        run: ({ win, doc }) => {
          doc.querySelectorAll('.price').forEach(el => el.remove());
          win.sumAllPricesInDOM();
          const text = doc.getElementById('total-price').textContent;
          return { passed: text === '0', expected: '0', actual: text };
        }
      }
    ]
  }),

  // ======================== ยาก (5 ข้อ: 31 - 35) ========================
  makeDomProblem({
    num: 31,
    id: 'ch3-31',
    title: 'เรนเดอร์การ์ดสินค้าพร้อมจัดการกรณีไม่มีสินค้า (Empty State)',
    difficulty: 'ยาก',
    tags: ['DOM Template', 'Conditional Rendering'],
    description: 'เขียนฟังก์ชัน <code>renderProductCards(products)</code> เพื่อแสดงรายการสินค้าใน <code>#product-grid</code>',
    requirements: [
      'ถ้า <code>products.length === 0</code> ให้แสดง <code>&lt;p class="empty-msg"&gt;ไม่พบสินค้า&lt;/p&gt;</code> ใน <code>#product-grid</code>',
      'ถ้ามีสินค้า ให้สร้าง <code>&lt;div class="prod-card"&gt;&lt;h4&gt;[name]&lt;/h4&gt;&lt;span&gt;[price] บาท&lt;/span&gt;&lt;/div&gt;</code> สำหรับแต่ละชิ้น'
    ],
    html: `<div class="card"><div id="product-grid"></div></div>`,
    starterJs: `function renderProductCards(products) {\n  // เรนเดอร์การ์ดสินค้าหรือข้อความไม่พบสินค้าลงใน #product-grid\n  \n}\nrenderProductCards([{ name: "คีย์บอร์ด", price: 1290 }, { name: "เมาส์", price: 590 }]);`,
    solutionJs: `function renderProductCards(products) {\n  const grid = document.getElementById("product-grid");\n  if (!products || products.length === 0) {\n    grid.innerHTML = '<p class="empty-msg">ไม่พบสินค้า</p>';\n    return;\n  }\n  grid.innerHTML = products\n    .map(p => \`<div class="prod-card"><h4>\${p.name}</h4><span>\${p.price} บาท</span></div>\`)\n    .join("");\n}\nrenderProductCards([{ name: "คีย์บอร์ด", price: 1290 }, { name: "เมาส์", price: 590 }]);`,
    hints: ['เช็ก products.length === 0 ก่อนเพื่อใส่ <p class="empty-msg">ไม่พบสินค้า</p>'],
    testCases: [
      {
        name: 'เรนเดอร์สินค้า 2 ชิ้นเป็น .prod-card พร้อม <h4> และ <span>',
        run: ({ win, doc }) => {
          win.renderProductCards([{ name: 'จอภาพ', price: 4500 }, { name: 'ลำโพง', price: 990 }]);
          const cards = doc.querySelectorAll('#product-grid .prod-card');
          const ok = cards.length === 2 && cards[0].querySelector('h4')?.textContent === 'จอภาพ' && cards[0].querySelector('span')?.textContent === '4500 บาท';
          return { passed: ok, expected: '2 cards ("จอภาพ", "4500 บาท")', actual: `${cards.length} cards` };
        }
      },
      {
        name: 'กรณี Array ว่าง [] แสดง <p class="empty-msg">ไม่พบสินค้า</p>',
        run: ({ win, doc }) => {
          win.renderProductCards([]);
          const empty = doc.querySelector('#product-grid .empty-msg');
          return { passed: empty && empty.textContent === 'ไม่พบสินค้า', expected: 'ไม่พบสินค้า', actual: empty?.textContent };
        }
      },
      {
        name: 'สลับจากว่างกลับมาแสดงสินค้าใหม่ได้ถูกต้อง',
        run: ({ win, doc }) => {
          win.renderProductCards([]);
          win.renderProductCards([{ name: 'โต๊ะทำงาน', price: 2500 }]);
          const cards = doc.querySelectorAll('#product-grid .prod-card');
          return { passed: cards.length === 1, expected: 1, actual: cards.length };
        }
      }
    ]
  }),
  makeDomProblem({
    num: 32,
    id: 'ch3-32',
    title: 'กรองรายการ <li> ใน DOM ด้วยการซ่อน/แสดงตามคำค้นหา',
    difficulty: 'ยาก',
    tags: ['DOM Filter', 'classList', 'toLowerCase'],
    description: 'เขียนฟังก์ชัน <code>filterDOMList(keyword)</code> ที่ตรวจสอบทุก <code>&lt;li class="member-item"&gt;</code> ในหน้าเว็บ',
    requirements: [
      'ถ้าข้อความของ <code>li</code> มีคำว่า <code>keyword</code> (ไม่สนใจพิมพ์เล็ก-ใหญ่) ให้ลบคลาส <code>hidden</code> ออก',
      'ถ้าไม่ตรงกับคำค้นหา ให้เพิ่มคลาส <code>hidden</code> เพื่อซ่อนรายการนั้น'
    ],
    html: `<div class="card"><ul id="member-list"><li class="member-item">Chinnakrit (Admin)</li><li class="member-item">Suda (Designer)</li><li class="member-item">Kong (Developer)</li></ul></div>`,
    starterJs: `function filterDOMList(keyword) {\n  // วนลูป .member-item แล้วสลับคลาส hidden ตามคำค้นหา\n  \n}\nfilterDOMList("admin");`,
    solutionJs: `function filterDOMList(keyword) {\n  const q = keyword.trim().toLowerCase();\n  document.querySelectorAll(".member-item").forEach(li => {\n    const match = li.textContent.toLowerCase().includes(q);\n    li.classList.toggle("hidden", !match);\n  });\n}\nfilterDOMList("admin");`,
    hints: ['ใช้ li.classList.toggle("hidden", !match) เมื่อ match = li.textContent.toLowerCase().includes(q)'],
    testCases: [
      {
        name: 'ค้นหา "admin" แสดงเฉพาะรายการแรก รายการอื่นมีคลาส hidden',
        run: ({ win, doc }) => {
          win.filterDOMList('admin');
          const items = doc.querySelectorAll('.member-item');
          const ok = !items[0].classList.contains('hidden') && items[1].classList.contains('hidden') && items[2].classList.contains('hidden');
          return { passed: ok, expected: 'only item[0] visible', actual: `hidden=[${items[0].classList.contains('hidden')}, ${items[1].classList.contains('hidden')}, ${items[2].classList.contains('hidden')}]` };
        }
      },
      {
        name: 'เมื่อส่งคำว่าง "" ทุกรายการแสดงผลครบ (ไม่มี hidden)',
        run: ({ win, doc }) => {
          win.filterDOMList('');
          const hiddenCount = doc.querySelectorAll('.member-item.hidden').length;
          return { passed: hiddenCount === 0, expected: 0, actual: hiddenCount };
        }
      },
      {
        name: 'เมื่อค้นหาคำที่ไม่มีเลย ทุกรายการถูกซ่อนด้วยคลาส hidden',
        run: ({ win, doc }) => {
          win.filterDOMList('xyz999');
          const hiddenCount = doc.querySelectorAll('.member-item.hidden').length;
          return { passed: hiddenCount === 3, expected: 3, actual: hiddenCount };
        }
      }
    ]
  }),
  makeDomProblem({
    num: 33,
    id: 'ch3-33',
    title: 'สร้างแถวตาราง <tr><td> จากข้อมูลผู้ใช้งานลงใน #user-tbody',
    difficulty: 'ยาก',
    tags: ['Table DOM', 'innerHTML'],
    description: 'เขียนฟังก์ชัน <code>renderUserTable(users)</code> ที่รับ Array ของ <code>{ name, role }</code> แล้วสร้างแถวตาราง <code>&lt;tr&gt;&lt;td&gt;[name]&lt;/td&gt;&lt;td&gt;[role]&lt;/td&gt;&lt;/tr&gt;</code> ลงใน <code>#user-tbody</code>',
    requirements: ['ล้างข้อมูลเดิมใน <code>#user-tbody</code>', 'สร้าง <code>&lt;tr&gt;</code> ที่มี 2 <code>&lt;td&gt;</code> สำหรับแต่ละคน'],
    html: `<div class="card"><table border="1" cellpadding="8" style="border-collapse:collapse;width:100%;"><thead><tr><th>ชื่อ</th><th>ตำแหน่ง</th></tr></thead><tbody id="user-tbody"></tbody></table></div>`,
    starterJs: `function renderUserTable(users) {\n  // สร้าง <tr><td>...</td><td>...</td></tr> ลงใน #user-tbody\n  \n}\nrenderUserTable([{ name: "ชินกฤต", role: "Lead Dev" }, { name: "สุดา", role: "UX Designer" }]);`,
    solutionJs: `function renderUserTable(users) {\n  const tbody = document.getElementById("user-tbody");\n  tbody.innerHTML = users\n    .map(u => \`<tr><td>\${u.name}</td><td>\${u.role}</td></tr>\`)\n    .join("");\n}\nrenderUserTable([{ name: "ชินกฤต", role: "Lead Dev" }, { name: "สุดา", role: "UX Designer" }]);`,
    hints: ['ใช้ tbody.innerHTML = users.map(u => `<tr><td>${u.name}</td><td>${u.role}</td></tr>`).join("");'],
    testCases: [
      {
        name: 'สร้างตาราง 2 แถวพร้อมข้อมูลใน <td> ถูกต้อง',
        run: ({ win, doc }) => {
          win.renderUserTable([{ name: 'เอ', role: 'Dev' }, { name: 'บี', role: 'QA' }]);
          const rows = doc.querySelectorAll('#user-tbody tr');
          const cells0 = rows[0] ? rows[0].querySelectorAll('td') : [];
          const ok = rows.length === 2 && cells0[0]?.textContent === 'เอ' && cells0[1]?.textContent === 'Dev';
          return { passed: ok, expected: '2 rows, ["เอ", "Dev"]', actual: `${rows.length} rows` };
        }
      },
      {
        name: 'กรณี Array ว่าง [] ตารางใน #user-tbody ต้องไม่มีแถว',
        run: ({ win, doc }) => {
          win.renderUserTable([]);
          const rows = doc.querySelectorAll('#user-tbody tr');
          return { passed: rows.length === 0, expected: 0, actual: rows.length };
        }
      },
      {
        name: 'เรียกซ้ำแทนที่ข้อมูลเก่าได้ถูกต้อง',
        run: ({ win, doc }) => {
          win.renderUserTable([{ name: '1', role: 'R1' }, { name: '2', role: 'R2' }]);
          win.renderUserTable([{ name: 'Only', role: 'One' }]);
          const rows = doc.querySelectorAll('#user-tbody tr');
          return { passed: rows.length === 1, expected: 1, actual: rows.length };
        }
      }
    ]
  }),
  makeDomProblem({
    num: 34,
    id: 'ch3-34',
    title: 'สลับแท็บและกล่องเนื้อหาตามรหัส tabId (Tabs Controller)',
    difficulty: 'ยาก',
    tags: ['Tabs DOM', 'dataset', 'classList'],
    description: 'เขียนฟังก์ชัน <code>activateTabById(tabId)</code> เพื่อเปิดแท็บและกล่องเนื้อหาที่ตรงกับ <code>tabId</code>',
    requirements: [
      'วนลูป <code>.tab-btn</code> ทุกปุ่ม: ให้มีคลาส <code>active</code> เฉพาะปุ่มที่ <code>btn.dataset.tab === tabId</code>',
      'วนลูป <code>.tab-content</code> ทุกกล่อง: ให้มีคลาส <code>active</code> เฉพาะกล่องที่ <code>panel.id === tabId</code>'
    ],
    html: `<div class="card"><div style="display:flex;gap:8px;margin-bottom:10px;"><button class="tab-btn active" data-tab="tab-1">แท็บ 1</button><button class="tab-btn" data-tab="tab-2">แท็บ 2</button></div><div id="tab-1" class="tab-content active">เนื้อหาที่ 1</div><div id="tab-2" class="tab-content">เนื้อหาที่ 2</div></div>`,
    starterJs: `function activateTabById(tabId) {\n  // สลับคลาส active ของ .tab-btn และ .tab-content ตาม tabId\n  \n}\nactivateTabById("tab-2");`,
    solutionJs: `function activateTabById(tabId) {\n  document.querySelectorAll(".tab-btn").forEach(btn => {\n    btn.classList.toggle("active", btn.dataset.tab === tabId);\n  });\n  document.querySelectorAll(".tab-content").forEach(panel => {\n    panel.classList.toggle("active", panel.id === tabId);\n  });\n}\nactivateTabById("tab-2");`,
    hints: ['ใช้ btn.classList.toggle("active", btn.dataset.tab === tabId)', 'ใช้ panel.classList.toggle("active", panel.id === tabId)'],
    testCases: [
      {
        name: 'เปิด "tab-2": ปุ่มที่ 2 และ #tab-2 มีคลาส active ส่วนแท็บ 1 ไม่มี',
        run: ({ win, doc }) => {
          win.activateTabById('tab-2');
          const btns = doc.querySelectorAll('.tab-btn');
          const p1 = doc.getElementById('tab-1');
          const p2 = doc.getElementById('tab-2');
          const ok = !btns[0].classList.contains('active') && btns[1].classList.contains('active') && !p1.classList.contains('active') && p2.classList.contains('active');
          return { passed: ok, expected: 'tab-2 active only', actual: `p1=${p1.classList.contains('active')}, p2=${p2.classList.contains('active')}` };
        }
      },
      {
        name: 'สลับกลับมาเปิด "tab-1" ได้ถูกต้อง',
        run: ({ win, doc }) => {
          win.activateTabById('tab-2');
          win.activateTabById('tab-1');
          const p1 = doc.getElementById('tab-1');
          const p2 = doc.getElementById('tab-2');
          return { passed: p1.classList.contains('active') && !p2.classList.contains('active'), expected: 'tab-1 active', actual: `p1=${p1.classList.contains('active')}` };
        }
      },
      {
        name: 'กรณีระบุ tabId ที่ไม่มีอยู่ ทุกแท็บจะถูกเอา active ออก',
        run: ({ win, doc }) => {
          win.activateTabById('none');
          const activeCount = doc.querySelectorAll('.tab-content.active').length;
          return { passed: activeCount === 0, expected: 0, actual: activeCount };
        }
      }
    ]
  }),
  makeDomProblem({
    num: 35,
    id: 'ch3-35',
    title: 'อ่านค่าจากฟอร์มใน DOM และแสดงสถานะการตรวจสอบพร้อมคลาสสี',
    difficulty: 'ยาก',
    tags: ['DOM Validation', 'input.value', 'classList'],
    description: 'เขียนฟังก์ชัน <code>validateAndShowDOMForm()</code> ที่อ่านค่าจาก <code>#user-input</code> และ <code>#age-input</code> แล้วแสดงผลใน <code>#validation-result</code>',
    requirements: [
      'ถ้า <code>#user-input.value.trim()</code> ว่างเปล่า ให้แสดง <code>"กรุณากรอกชื่อ"</code> พร้อมคลาส <code>error</code> (ลบ <code>success</code>)',
      'ถ้า <code>Number(#age-input.value) &lt; 18</code> ให้แสดง <code>"อายุต้อง 18 ปีขึ้นไป"</code> พร้อมคลาส <code>error</code> (ลบ <code>success</code>)',
      'ถ้าผ่านทั้งคู่ ให้แสดง <code>"ข้อมูลถูกต้อง"</code> พร้อมคลาส <code>success</code> (ลบ <code>error</code>)'
    ],
    html: `<div class="card"><input id="user-input" type="text" value="ชินกฤต" /><input id="age-input" type="number" value="22" /><p id="validation-result"></p></div>`,
    starterJs: `function validateAndShowDOMForm() {\n  // อ่านค่าจาก #user-input และ #age-input แล้วอัปเดต #validation-result\n  \n}\nvalidateAndShowDOMForm();`,
    solutionJs: `function validateAndShowDOMForm() {\n  const name = document.getElementById("user-input").value.trim();\n  const age = Number(document.getElementById("age-input").value);\n  const res = document.getElementById("validation-result");\n\n  if (!name) {\n    res.textContent = "กรุณากรอกชื่อ";\n    res.className = "error";\n    return;\n  }\n  if (age < 18) {\n    res.textContent = "อายุต้อง 18 ปีขึ้นไป";\n    res.className = "error";\n    return;\n  }\n  res.textContent = "ข้อมูลถูกต้อง";\n  res.className = "success";\n}\nvalidateAndShowDOMForm();`,
    hints: ['ตรวจชื่อว่างก่อน แล้วตรวจอายุ < 18 จากนั้นตั้งค่า res.textContent และสลับคลาส error / success'],
    testCases: [
      {
        name: 'กรณีชื่อว่าง แสดง "กรุณากรอกชื่อ" และมีคลาส error',
        run: ({ win, doc }) => {
          doc.getElementById('user-input').value = '   ';
          doc.getElementById('age-input').value = '25';
          win.validateAndShowDOMForm();
          const res = doc.getElementById('validation-result');
          return { passed: res.textContent === 'กรุณากรอกชื่อ' && res.classList.contains('error'), expected: 'กรุณากรอกชื่อ (error)', actual: `${res.textContent} (${res.className})` };
        }
      },
      {
        name: 'กรณีอายุน้อยกว่า 18 แสดง "อายุต้อง 18 ปีขึ้นไป" และมีคลาส error',
        run: ({ win, doc }) => {
          doc.getElementById('user-input').value = 'สมชาย';
          doc.getElementById('age-input').value = '15';
          win.validateAndShowDOMForm();
          const res = doc.getElementById('validation-result');
          return { passed: res.textContent === 'อายุต้อง 18 ปีขึ้นไป' && res.classList.contains('error'), expected: 'อายุต้อง 18 ปีขึ้นไป (error)', actual: `${res.textContent} (${res.className})` };
        }
      },
      {
        name: 'กรณีข้อมูลถูกต้องครบถ้วน แสดง "ข้อมูลถูกต้อง" และมีคลาส success',
        run: ({ win, doc }) => {
          doc.getElementById('user-input').value = 'ชินกฤต';
          doc.getElementById('age-input').value = '20';
          win.validateAndShowDOMForm();
          const res = doc.getElementById('validation-result');
          return { passed: res.textContent === 'ข้อมูลถูกต้อง' && res.classList.contains('success') && !res.classList.contains('error'), expected: 'ข้อมูลถูกต้อง (success)', actual: `${res.textContent} (${res.className})` };
        }
      }
    ]
  })
];

window.CHAPTER_3 = {
  id: 'ch-3',
  number: 3,
  title: 'บทที่ 3: การเชื่อม JS กับ HTML/CSS (DOM Manipulation)',
  shortTitle: 'บทที่ 3: DOM Manipulation',
  icon: '🎨',
  description:
    'เรียนรู้วิธีใช้ JavaScript สั่งงานหน้าเว็บ HTML และ CSS: การเลือก Element, การอ่าน/แก้ไขข้อความและค่าใน Input, การสลับคลาส CSS และการสร้าง Element ใหม่จากข้อมูล',
  tags: ['getElementById', 'querySelector', 'textContent & value', 'classList', 'createElement'],
  lesson: {
    overview:
      'DOM (Document Object Model) คือสะพานเชื่อมระหว่างโค้ด JavaScript กับหน้าเว็บ HTML/CSS เมื่อผู้ใช้เปิดหน้าเว็บ เราสามารถใช้ JS ค้นหา Element บนหน้าเว็บเพื่อเปลี่ยนข้อความ เปลี่ยนสี ซ่อน/แสดงกล่องแจ้งเตือน หรือสร้างรายการสินค้าขึ้นมาแสดงบนหน้าจอได้แบบอัตโนมัติ',
    mustUse: [
      {
        syntax: 'document.getElementById("id") / document.querySelector(".class")',
        usage: 'อ้างอิงไปยัง Element ตัวที่ต้องการบนหน้าเว็บ',
        example: 'const titleEl = document.getElementById("title");\nconst firstBtn = document.querySelector(".btn");'
      },
      {
        syntax: 'element.textContent & input.value',
        usage: 'อ่านหรือเปลี่ยนข้อความในแท็กทั่วไปด้วย .textContent และอ่านค่าที่พิมพ์ใน <input> ด้วย .value',
        example: 'titleEl.textContent = "หัวข้อใหม่";\nconst name = inputEl.value;'
      },
      {
        syntax: 'element.classList (.add / .remove / .toggle / .contains)',
        usage: 'เพิ่ม ลบ หรือสลับคลาส CSS บน Element เพื่อเปลี่ยนดีไซน์ตามสถานะ',
        example: 'card.classList.add("active");\ncard.classList.toggle("dark-mode");'
      },
      {
        syntax: 'element.style & element.disabled & setAttribute()',
        usage: 'เปลี่ยน Inline Style, เปิด/ปิดปุ่มกด หรือแก้ไขแอตทริบิวต์ เช่น href, src, data-*',
        example: 'banner.style.display = "none";\nbuyBtn.disabled = true;'
      },
      {
        syntax: 'document.createElement("li") & parent.appendChild(li) / innerHTML',
        usage: 'สร้าง Element HTML ใหม่ด้วย JS แล้วนำไปแสดงผลในหน้าเว็บ',
        example: 'list.innerHTML = items.map(x => `<li>${x}</li>`).join("");'
      }
    ],
    examples: [
      {
        title: 'ตัวอย่างที่ 1: การเลือก Element และเปลี่ยนข้อความ + คลาส CSS',
        explanation: 'ใช้ getElementById เลือกกล่องสถานะ แล้วเปลี่ยนทั้งข้อความและคลาสสี',
        code: `// สมมติใน HTML มี <div id="status-box">กำลังตรวจสอบ...</div>
function showSuccessStatus() {
  const box = document.getElementById("status-box");
  box.textContent = "เชื่อมต่อระบบสำเร็จ!";
  box.classList.add("success");
}`
      },
      {
        title: 'ตัวอย่างที่ 2: การเรนเดอร์รายการจาก Array ลงใน <ul>',
        explanation: 'แปลงข้อมูลใน Array ให้เป็นสายอักขระ HTML <li> แล้วใส่ลงใน .innerHTML',
        code: `const courses = ["HTML5", "CSS3", "JavaScript"];
const listEl = document.getElementById("course-list");

listEl.innerHTML = courses
  .map(course => \`<li class="course-item">\${course}</li>\`)
  .join("");`
      },
      {
        title: 'ตัวอย่างที่ 3: การอ่านค่าจาก <input> และตรวจสอบความถูกต้อง',
        explanation: 'ช่องกรอกข้อมูล <input> ต้องใช้ .value ในการอ่านค่าเสมอ',
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
  },
  problems: CHAPTER_3_PROBLEMS
};
