/**
 * บทที่ 5: การสร้างระบบเว็บจริง — Mini Web Components & Full Web Apps
 * ประกอบด้วย: เนื้อหาบทเรียน + คำสั่งที่ต้องใช้ + ตัวอย่างโค้ด + โจทย์ 35 ข้อ (ง่าย 20, ปานกลาง 10, ยาก 5)
 */

function makeWebAppProblem({
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
.app-card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
button { padding: 8px 14px; border-radius: 8px; border: none; background: #2563eb; color: #fff; font-weight: 600; cursor: pointer; margin: 2px; }
input, select, textarea { padding: 8px 12px; border-radius: 8px; border: 1px solid #cbd5e1; margin: 4px 0; }
.hidden { display: none; }
.active, .selected { background: #10b981; color: #ffffff; font-weight: 700; }
.completed { text-decoration: line-through; color: #94a3b8; }
ul { list-style: none; padding: 0; margin: 10px 0; }
li { padding: 8px 12px; background: #f1f5f9; border-radius: 8px; margin-bottom: 6px; }`;

  return {
    id,
    number: num,
    chapterId: 'ch-5',
    subjectId: 'frontend',
    moduleId: 'ch-5',
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

const CHAPTER_5_PROBLEMS = [
  // ======================== ง่าย (20 ข้อ: 1 - 20) ========================
  makeWebAppProblem({
    num: 1,
    id: 'ch5-01',
    title: 'ป้ายแจ้งเตือนจำนวนข้อความใหม่ (Notification Badge Component)',
    difficulty: 'ง่าย',
    tags: ['UI Component', 'Badge'],
    description: 'เขียนฟังก์ชัน <code>updateBadge(count)</code> ถ้า <code>count &gt; 99</code> ให้แสดง <code>"99+"</code> ใน <code>#notif-badge</code> และถ้า <code>count &lt;= 0</code> ให้แสดง <code>"0"</code> นอกนั้นแสดงตัวเลขตามจริง',
    requirements: ['ถ้า <code>count &gt; 99</code> แสดง <code>"99+"</code>', 'ถ้า <code>count &lt;= 0</code> แสดง <code>"0"</code>', 'นอกนั้นแสดงตัวเลข <code>count</code>'],
    html: `<div class="app-card">🔔 แจ้งเตือน <span id="notif-badge">0</span></div>`,
    starterJs: `function updateBadge(count) {\n  // อัปเดต #notif-badge ที่นี่\n  \n}\nupdateBadge(120);`,
    solutionJs: `function updateBadge(count) {\n  const el = document.getElementById("notif-badge");\n  if (count <= 0) el.textContent = "0";\n  else if (count > 99) el.textContent = "99+";\n  else el.textContent = String(count);\n}\nupdateBadge(120);`,
    hints: ['เช็ก count <= 0 ก่อน แล้วเช็ก count > 99'],
    testCases: [
      {
        name: 'เมื่อ count = 15 แสดง "15"',
        run: ({ win, doc }) => {
          win.updateBadge(15);
          const actual = doc.getElementById('notif-badge').textContent;
          return { passed: actual === '15', expected: '15', actual };
        }
      },
      {
        name: 'เมื่อ count = 120 (เกิน 99) แสดง "99+"',
        run: ({ win, doc }) => {
          win.updateBadge(120);
          const actual = doc.getElementById('notif-badge').textContent;
          return { passed: actual === '99+', expected: '99+', actual };
        }
      },
      {
        name: 'เมื่อ count = -5 หรือ 0 แสดง "0"',
        run: ({ win, doc }) => {
          win.updateBadge(-5);
          const actual = doc.getElementById('notif-badge').textContent;
          return { passed: actual === '0', expected: '0', actual };
        }
      }
    ]
  }),
  makeWebAppProblem({
    num: 2,
    id: 'ch5-02',
    title: 'ระบบเปิดและปิดหน้าต่างป๊อปอัป (Modal Dialog Component)',
    difficulty: 'ง่าย',
    tags: ['Modal UI', 'classList'],
    description: 'เขียนฟังก์ชัน <code>openModal()</code> เพื่อลบคลาส <code>hidden</code> ออกจาก <code>#modal</code> และฟังก์ชัน <code>closeModal()</code> เพื่อเพิ่มคลาส <code>hidden</code> กลับเข้าไป',
    requirements: ['<code>openModal()</code> ลบคลาส <code>hidden</code>', '<code>closeModal()</code> เพิ่มคลาส <code>hidden</code>'],
    html: `<div class="app-card"><button onclick="openModal()">เปิด Modal</button><div id="modal" class="hidden"><p>เนื้อหาป๊อปอัป</p><button onclick="closeModal()">ปิด</button></div></div>`,
    starterJs: `function openModal() {\n  // เปิด #modal\n}\nfunction closeModal() {\n  // ปิด #modal\n}`,
    solutionJs: `function openModal() {\n  document.getElementById("modal").classList.remove("hidden");\n}\nfunction closeModal() {\n  document.getElementById("modal").classList.add("hidden");\n}`,
    hints: ['ใช้ classList.remove("hidden") และ classList.add("hidden")'],
    testCases: [
      {
        name: 'เรียก openModal() แล้ว #modal ไม่มีคลาส hidden',
        run: ({ win, doc }) => {
          const m = doc.getElementById('modal');
          m.classList.add('hidden');
          win.openModal();
          return { passed: !m.classList.contains('hidden'), expected: 'false (แสดงผล)', actual: String(m.classList.contains('hidden')) };
        }
      },
      {
        name: 'เรียก closeModal() แล้ว #modal มีคลาส hidden',
        run: ({ win, doc }) => {
          const m = doc.getElementById('modal');
          m.classList.remove('hidden');
          win.closeModal();
          return { passed: m.classList.contains('hidden'), expected: 'true (ซ่อน)', actual: String(m.classList.contains('hidden')) };
        }
      },
      {
        name: 'เปิดแล้วปิดต่อเนื่องทำงานถูกต้อง',
        run: ({ win, doc }) => {
          const m = doc.getElementById('modal');
          win.openModal();
          win.closeModal();
          return { passed: m.classList.contains('hidden'), expected: 'true', actual: String(m.classList.contains('hidden')) };
        }
      }
    ]
  }),
  makeWebAppProblem({
    num: 3,
    id: 'ch5-03',
    title: 'ระบบพับ/กางคำตอบคำถามที่พบบ่อย (FAQ Accordion)',
    difficulty: 'ง่าย',
    tags: ['Accordion', 'classList.toggle'],
    description: 'เขียนฟังก์ชัน <code>toggleFaq()</code> ที่สลับคลาส <code>hidden</code> บน <code>#faq-answer</code> และเปลี่ยนข้อความปุ่ม <code>#faq-btn</code> เป็น <code>"ซ่อนคำตอบ"</code> เมื่อแสดงอยู่ หรือ <code>"ดูคำตอบ"</code> เมื่อถูกซ่อน',
    requirements: ['สลับคลาส <code>hidden</code> บน <code>#faq-answer</code>', 'อัปเดตข้อความ <code>#faq-btn</code> ให้ตรงสถานะ'],
    html: `<div class="app-card"><button id="faq-btn" onclick="toggleFaq()">ดูคำตอบ</button><p id="faq-answer" class="hidden">เรียนจบสามารถสร้างเว็บได้จริงแน่นอนครับ!</p></div>`,
    starterJs: `function toggleFaq() {\n  // สลับคลาส hidden บน #faq-answer และเปลี่ยนข้อความ #faq-btn\n  \n}`,
    solutionJs: `function toggleFaq() {\n  const ans = document.getElementById("faq-answer");\n  const btn = document.getElementById("faq-btn");\n  const isHidden = ans.classList.toggle("hidden");\n  btn.textContent = isHidden ? "ดูคำตอบ" : "ซ่อนคำตอบ";\n}`,
    hints: ['const isHidden = ans.classList.toggle("hidden"); ถ้า isHidden เป็น false แปลว่ากำลังแสดงคำตอบอยู่'],
    testCases: [
      {
        name: 'เปิดคำตอบ: ไม่มี hidden และปุ่มแสดง "ซ่อนคำตอบ"',
        run: ({ win, doc }) => {
          const ans = doc.getElementById('faq-answer');
          ans.classList.add('hidden');
          win.toggleFaq();
          const btnText = doc.getElementById('faq-btn').textContent;
          return { passed: !ans.classList.contains('hidden') && btnText === 'ซ่อนคำตอบ', expected: 'hidden=false, "ซ่อนคำตอบ"', actual: `hidden=${ans.classList.contains('hidden')}, "${btnText}"` };
        }
      },
      {
        name: 'ปิดคำตอบ: มี hidden และปุ่มแสดง "ดูคำตอบ"',
        run: ({ win, doc }) => {
          const ans = doc.getElementById('faq-answer');
          ans.classList.remove('hidden');
          win.toggleFaq();
          const btnText = doc.getElementById('faq-btn').textContent;
          return { passed: ans.classList.contains('hidden') && btnText === 'ดูคำตอบ', expected: 'hidden=true, "ดูคำตอบ"', actual: `hidden=${ans.classList.contains('hidden')}, "${btnText}"` };
        }
      },
      {
        name: 'กดสลับ 2 ครั้งกลับมาสถานะเดิม',
        run: ({ win, doc }) => {
          const ans = doc.getElementById('faq-answer');
          ans.classList.add('hidden');
          win.toggleFaq();
          win.toggleFaq();
          return { passed: ans.classList.contains('hidden'), expected: 'true', actual: String(ans.classList.contains('hidden')) };
        }
      }
    ]
  }),
  makeWebAppProblem({
    num: 4,
    id: 'ch5-04',
    title: 'ระบบเปลี่ยนรูปหลักในแกลเลอรีสินค้า (Image Gallery Switcher)',
    difficulty: 'ง่าย',
    tags: ['Gallery UI', 'setAttribute'],
    description: 'เขียนฟังก์ชัน <code>selectThumbnail(imgUrl, caption)</code> เพื่อเปลี่ยน <code>src</code> ของ <code>#main-img</code> และแสดงคำอธิบายใน <code>#img-caption</code>',
    requirements: ['ตั้งค่า <code>#main-img</code> ให้มี <code>src = imgUrl</code>', 'ตั้งค่า <code>#img-caption.textContent = caption</code>'],
    html: `<div class="app-card"><img id="main-img" src="pic1.jpg" alt="main" width="120" /><p id="img-caption">มุมมองด้านหน้า</p></div>`,
    starterJs: `function selectThumbnail(imgUrl, caption) {\n  // อัปเดต #main-img และ #img-caption\n  \n}\nselectThumbnail("pic2.jpg", "มุมมองด้านข้าง");`,
    solutionJs: `function selectThumbnail(imgUrl, caption) {\n  document.getElementById("main-img").setAttribute("src", imgUrl);\n  document.getElementById("img-caption").textContent = caption;\n}\nselectThumbnail("pic2.jpg", "มุมมองด้านข้าง");`,
    hints: ['ใช้ setAttribute("src", imgUrl) และ .textContent = caption'],
    testCases: [
      {
        name: 'เปลี่ยนรูปเป็น "shoe-side.jpg" และคำอธิบาย "ด้านข้าง"',
        run: ({ win, doc }) => {
          win.selectThumbnail('shoe-side.jpg', 'ด้านข้าง');
          const src = doc.getElementById('main-img').getAttribute('src');
          const cap = doc.getElementById('img-caption').textContent;
          return { passed: src === 'shoe-side.jpg' && cap === 'ด้านข้าง', expected: 'shoe-side.jpg, ด้านข้าง', actual: `${src}, ${cap}` };
        }
      },
      {
        name: 'เปลี่ยนเป็นรูปที่ 3 ได้ถูกต้อง',
        run: ({ win, doc }) => {
          win.selectThumbnail('back.jpg', 'ด้านหลัง');
          const src = doc.getElementById('main-img').getAttribute('src');
          return { passed: src === 'back.jpg', expected: 'back.jpg', actual: src };
        }
      },
      {
        name: 'คำอธิบายอัปเดตตรงตามพารามิเตอร์',
        run: ({ win, doc }) => {
          win.selectThumbnail('top.jpg', 'มุมบน');
          const cap = doc.getElementById('img-caption').textContent;
          return { passed: cap === 'มุมบน', expected: 'มุมบน', actual: cap };
        }
      }
    ]
  }),
  makeWebAppProblem({
    num: 5,
    id: 'ch5-05',
    title: 'ระบบเลือกไซส์เสื้อผ้า S, M, L, XL (Product Size Selector)',
    difficulty: 'ง่าย',
    tags: ['Product UI', 'classList'],
    description: 'เขียนฟังก์ชัน <code>selectSize(size)</code> ที่ใส่คลาส <code>selected</code> ให้เฉพาะปุ่ม <code>.size-btn</code> ที่มีข้อความตรงกับ <code>size</code> และแสดง <code>"ไซส์ที่เลือก: [size]"</code> ใน <code>#selected-size</code>',
    requirements: ['วนลูป <code>.size-btn</code> ตั้งคลาส <code>selected</code> เฉพาะปุ่มที่ <code>btn.textContent === size</code>', 'อัปเดต <code>#selected-size.textContent = "ไซส์ที่เลือก: " + size</code>'],
    html: `<div class="app-card"><div><button class="size-btn">S</button><button class="size-btn selected">M</button><button class="size-btn">L</button><button class="size-btn">XL</button></div><p id="selected-size">ไซส์ที่เลือก: M</p></div>`,
    starterJs: `function selectSize(size) {\n  // อัปเดตปุ่ม .size-btn และข้อความ #selected-size\n  \n}\nselectSize("XL");`,
    solutionJs: `function selectSize(size) {\n  document.querySelectorAll(".size-btn").forEach(btn => {\n    btn.classList.toggle("selected", btn.textContent.trim() === size);\n  });\n  document.getElementById("selected-size").textContent = \`ไซส์ที่เลือก: \${size}\`;\n}\nselectSize("XL");`,
    hints: ['ใช้ btn.classList.toggle("selected", btn.textContent.trim() === size)'],
    testCases: [
      {
        name: 'เลือกไซส์ "L": ปุ่ม L มีคลาส selected และแสดง "ไซส์ที่เลือก: L"',
        run: ({ win, doc }) => {
          win.selectSize('L');
          const btns = Array.from(doc.querySelectorAll('.size-btn'));
          const lBtn = btns.find(b => b.textContent.trim() === 'L');
          const label = doc.getElementById('selected-size').textContent;
          return { passed: lBtn.classList.contains('selected') && label === 'ไซส์ที่เลือก: L', expected: 'L selected, "ไซส์ที่เลือก: L"', actual: label };
        }
      },
      {
        name: 'เลือกไซส์ "S": ปุ่มเดิมถูกเอา selected ออก เหลือแค่ปุ่ม S',
        run: ({ win, doc }) => {
          win.selectSize('S');
          const selectedBtns = doc.querySelectorAll('.size-btn.selected');
          return { passed: selectedBtns.length === 1 && selectedBtns[0].textContent.trim() === 'S', expected: 'only S selected', actual: `${selectedBtns.length} selected` };
        }
      },
      {
        name: 'เลือกไซส์ "XL" ทำงานถูกต้อง',
        run: ({ win, doc }) => {
          win.selectSize('XL');
          const label = doc.getElementById('selected-size').textContent;
          return { passed: label === 'ไซส์ที่เลือก: XL', expected: 'ไซส์ที่เลือก: XL', actual: label };
        }
      }
    ]
  }),
  makeWebAppProblem({
    num: 6,
    id: 'ch5-06',
    title: 'เว็บคำนวณค่าทิปและยอดรวมอาหาร (Tip Calculator)',
    difficulty: 'ง่าย',
    tags: ['Calculator UI', 'Math'],
    description: 'เขียนฟังก์ชัน <code>calculateTipBill(bill, tipPercent)</code> ที่คำนวณค่าทิป <code>tip = bill * (tipPercent / 100)</code> และยอดรวม <code>total = bill + tip</code> แล้วแสดงใน <code>#tip-val</code> และ <code>#bill-total</code>',
    requirements: ['แสดงค่าทิปใน <code>#tip-val</code>', 'แสดงยอดรวมสุทธิใน <code>#bill-total</code>'],
    html: `<div class="app-card"><p>ค่าทิป: <span id="tip-val">0</span> บาท</p><p>ยอดรวมสุทธิ: <strong id="bill-total">0</strong> บาท</p></div>`,
    starterJs: `function calculateTipBill(bill, tipPercent) {\n  // คำนวณและอัปเดต #tip-val และ #bill-total\n  \n}\ncalculateTipBill(1000, 10);`,
    solutionJs: `function calculateTipBill(bill, tipPercent) {\n  const tip = bill * (tipPercent / 100);\n  const total = bill + tip;\n  document.getElementById("tip-val").textContent = String(tip);\n  document.getElementById("bill-total").textContent = String(total);\n}\ncalculateTipBill(1000, 10);`,
    hints: ['const tip = bill * (tipPercent / 100); const total = bill + tip;'],
    testCases: [
      {
        name: 'ค่าอาหาร 1000 ทิป 10% ได้ทิป "100" และยอดรวม "1100"',
        run: ({ win, doc }) => {
          win.calculateTipBill(1000, 10);
          const tip = doc.getElementById('tip-val').textContent;
          const tot = doc.getElementById('bill-total').textContent;
          return { passed: tip === '100' && tot === '1100', expected: '100, 1100', actual: `${tip}, ${tot}` };
        }
      },
      {
        name: 'ค่าอาหาร 500 ทิป 20% ได้ทิป "100" และยอดรวม "600"',
        run: ({ win, doc }) => {
          win.calculateTipBill(500, 20);
          const tip = doc.getElementById('tip-val').textContent;
          const tot = doc.getElementById('bill-total').textContent;
          return { passed: tip === '100' && tot === '600', expected: '100, 600', actual: `${tip}, ${tot}` };
        }
      },
      {
        name: 'ทิป 0% ยอดรวมเท่ากับค่าอาหารเดิม',
        run: ({ win, doc }) => {
          win.calculateTipBill(850, 0);
          const tot = doc.getElementById('bill-total').textContent;
          return { passed: tot === '850', expected: '850', actual: tot };
        }
      }
    ]
  }),
  makeWebAppProblem({
    num: 7,
    id: 'ch5-07',
    title: 'ระบบแปลงอุณหภูมิ Celsius เป็น Fahrenheit บนหน้าเว็บ',
    difficulty: 'ง่าย',
    tags: ['Converter UI', 'Formula'],
    description: 'เขียนฟังก์ชัน <code>convertCtoF()</code> ที่อ่านค่าองศาเซลเซียสจาก <code>#celsius-input</code> แปลงเป็นฟาเรนไฮต์ด้วยสูตร <code>(C * 9 / 5) + 32</code> แล้วแสดงใน <code>#fahrenheit-out</code>',
    requirements: ['อ่าน <code>Number(document.getElementById("celsius-input").value)</code>', 'แสดงผลลัพธ์ใน <code>#fahrenheit-out.textContent</code>'],
    html: `<div class="app-card"><input id="celsius-input" type="number" value="0" /><p>ฟาเรนไฮต์: <strong id="fahrenheit-out">32</strong> °F</p></div>`,
    starterJs: `function convertCtoF() {\n  // อ่านค่าจาก #celsius-input คำนวณและแสดงใน #fahrenheit-out\n  \n}\nconvertCtoF();`,
    solutionJs: `function convertCtoF() {\n  const c = Number(document.getElementById("celsius-input").value);\n  const f = (c * 9) / 5 + 32;\n  document.getElementById("fahrenheit-out").textContent = String(f);\n}\nconvertCtoF();`,
    hints: ['ใช้สูตร const f = (c * 9) / 5 + 32;'],
    testCases: [
      {
        name: '0 °C แปลงได้ "32" °F',
        run: ({ win, doc }) => {
          doc.getElementById('celsius-input').value = '0';
          win.convertCtoF();
          const actual = doc.getElementById('fahrenheit-out').textContent;
          return { passed: actual === '32', expected: '32', actual };
        }
      },
      {
        name: '100 °C แปลงได้ "212" °F',
        run: ({ win, doc }) => {
          doc.getElementById('celsius-input').value = '100';
          win.convertCtoF();
          const actual = doc.getElementById('fahrenheit-out').textContent;
          return { passed: actual === '212', expected: '212', actual };
        }
      },
      {
        name: '25 °C แปลงได้ "77" °F',
        run: ({ win, doc }) => {
          doc.getElementById('celsius-input').value = '25';
          win.convertCtoF();
          const actual = doc.getElementById('fahrenheit-out').textContent;
          return { passed: actual === '77', expected: '77', actual };
        }
      }
    ]
  }),
  makeWebAppProblem({
    num: 8,
    id: 'ch5-08',
    title: 'ระบบแปลงสกุลเงินบาทเป็นดอลลาร์ (Currency Converter)',
    difficulty: 'ง่าย',
    tags: ['Converter UI', 'Math'],
    description: 'เขียนฟังก์ชัน <code>convertThbToUsd(rate)</code> ที่อ่านจำนวนเงินบาทจาก <code>#thb-input</code> แล้วหารด้วยอัตราแลกเปลี่ยน <code>rate</code> แสดงผลใน <code>#usd-out</code>',
    requirements: ['คำนวณ <code>Number(thbInput.value) / rate</code> แล้วแสดงใน <code>#usd-out</code>'],
    html: `<div class="app-card"><input id="thb-input" type="number" value="3500" /><p>ดอลลาร์: <strong id="usd-out">100</strong> USD</p></div>`,
    starterJs: `function convertThbToUsd(rate) {\n  // คำนวณและแสดงผลใน #usd-out\n  \n}\nconvertThbToUsd(35);`,
    solutionJs: `function convertThbToUsd(rate) {\n  const thb = Number(document.getElementById("thb-input").value);\n  document.getElementById("usd-out").textContent = String(thb / rate);\n}\nconvertThbToUsd(35);`,
    hints: ['นำค่าจาก #thb-input หารด้วย rate'],
    testCases: [
      {
        name: '3500 บาท ที่เรต 35 ได้ "100" USD',
        run: ({ win, doc }) => {
          doc.getElementById('thb-input').value = '3500';
          win.convertThbToUsd(35);
          const actual = doc.getElementById('usd-out').textContent;
          return { passed: actual === '100', expected: '100', actual };
        }
      },
      {
        name: '1750 บาท ที่เรต 35 ได้ "50" USD',
        run: ({ win, doc }) => {
          doc.getElementById('thb-input').value = '1750';
          win.convertThbToUsd(35);
          const actual = doc.getElementById('usd-out').textContent;
          return { passed: actual === '50', expected: '50', actual };
        }
      },
      {
        name: '0 บาท ได้ "0" USD',
        run: ({ win, doc }) => {
          doc.getElementById('thb-input').value = '0';
          win.convertThbToUsd(35);
          const actual = doc.getElementById('usd-out').textContent;
          return { passed: actual === '0', expected: '0', actual };
        }
      }
    ]
  }),
  makeWebAppProblem({
    num: 9,
    id: 'ch5-09',
    title: 'สร้างอักษรย่อโปรไฟล์ Avatar Initials จากชื่อเต็ม',
    difficulty: 'ง่าย',
    tags: ['Avatar UI', 'Strings'],
    description: 'เขียนฟังก์ชัน <code>renderAvatarInitials(fullName)</code> เพื่อดึงตัวอักษรแรกของแต่ละคำใน <code>fullName</code> มาต่อกันเป็นตัวพิมพ์ใหญ่ แล้วแสดงใน <code>#avatar-box</code>',
    requirements: ['เช่น <code>"Chinnakrit Thanakronkul"</code> ได้ <code>"CT"</code> แสดงใน <code>#avatar-box</code>'],
    html: `<div class="app-card"><div id="avatar-box" style="width:48px;height:48px;border-radius:50%;background:#2563eb;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:bold;">-</div></div>`,
    starterJs: `function renderAvatarInitials(fullName) {\n  // สร้างตัวอักษรย่อและแสดงใน #avatar-box\n  \n}\nrenderAvatarInitials("Chinnakrit Thanakronkul");`,
    solutionJs: `function renderAvatarInitials(fullName) {\n  const initials = fullName\n    .trim()\n    .split(/\\s+/)\n    .map(w => w.charAt(0).toUpperCase())\n    .join("");\n  document.getElementById("avatar-box").textContent = initials;\n}\nrenderAvatarInitials("Chinnakrit Thanakronkul");`,
    hints: ['ใช้ fullName.trim().split(/\\s+/).map(w => w[0].toUpperCase()).join("")'],
    testCases: [
      {
        name: '"Chinnakrit Thanakronkul" แสดง "CT"',
        run: ({ win, doc }) => {
          win.renderAvatarInitials('Chinnakrit Thanakronkul');
          const actual = doc.getElementById('avatar-box').textContent;
          return { passed: actual === 'CT', expected: 'CT', actual };
        }
      },
      {
        name: '"john doe" แสดง "JD"',
        run: ({ win, doc }) => {
          win.renderAvatarInitials('john doe');
          const actual = doc.getElementById('avatar-box').textContent;
          return { passed: actual === 'JD', expected: 'JD', actual };
        }
      },
      {
        name: 'ชื่อคำเดียว "Admin" แสดง "A"',
        run: ({ win, doc }) => {
          win.renderAvatarInitials('Admin');
          const actual = doc.getElementById('avatar-box').textContent;
          return { passed: actual === 'A', expected: 'A', actual };
        }
      }
    ]
  }),
  makeWebAppProblem({
    num: 10,
    id: 'ch5-10',
    title: 'ระบบปรับขนาดตัวอักษรบทความ (Font Size Controller)',
    difficulty: 'ง่าย',
    tags: ['Accessibility UI', 'style.fontSize'],
    description: 'เขียนฟังก์ชัน <code>setArticleFontSize(sizePx)</code> เพื่อกำหนด <code>style.fontSize = "[sizePx]px"</code> ให้กับ <code>#article-body</code> และแสดง <code>"[sizePx]px"</code> ใน <code>#size-label</code>',
    requirements: ['ตั้งค่า <code>#article-body.style.fontSize = sizePx + "px"</code>', 'ตั้งค่า <code>#size-label.textContent = sizePx + "px"</code>'],
    html: `<div class="app-card"><span id="size-label">16px</span><p id="article-body">เนื้อหาบทความสำหรับการฝึกอ่านบนเว็บไซต์</p></div>`,
    starterJs: `function setArticleFontSize(sizePx) {\n  // อัปเดต style.fontSize และ #size-label\n  \n}\nsetArticleFontSize(20);`,
    solutionJs: `function setArticleFontSize(sizePx) {\n  document.getElementById("article-body").style.fontSize = \`\${sizePx}px\`;\n  document.getElementById("size-label").textContent = \`\${sizePx}px\`;\n}\nsetArticleFontSize(20);`,
    hints: ['อย่าลืมต่อหน่วย "px" ท้ายตัวเลข'],
    testCases: [
      {
        name: 'ตั้งขนาด 20px ทั้ง style.fontSize และ #size-label เป็น "20px"',
        run: ({ win, doc }) => {
          win.setArticleFontSize(20);
          const fs = doc.getElementById('article-body').style.fontSize;
          const lbl = doc.getElementById('size-label').textContent;
          return { passed: fs === '20px' && lbl === '20px', expected: '20px', actual: `${fs}, ${lbl}` };
        }
      },
      {
        name: 'ตั้งขนาด 14px สำเร็จ',
        run: ({ win, doc }) => {
          win.setArticleFontSize(14);
          const fs = doc.getElementById('article-body').style.fontSize;
          return { passed: fs === '14px', expected: '14px', actual: fs };
        }
      },
      {
        name: 'ตั้งขนาด 24px สำเร็จ',
        run: ({ win, doc }) => {
          win.setArticleFontSize(24);
          const lbl = doc.getElementById('size-label').textContent;
          return { passed: lbl === '24px', expected: '24px', actual: lbl };
        }
      }
    ]
  }),
  makeWebAppProblem({
    num: 11,
    id: 'ch5-11',
    title: 'ระบบสลับมุมมอง Grid / List ของรายการสินค้า',
    difficulty: 'ง่าย',
    tags: ['Layout Switcher', 'classList'],
    description: 'เขียนฟังก์ชัน <code>setViewMode(mode)</code> ถ้า <code>mode === "grid"</code> ให้ <code>#catalog</code> มีคลาส <code>grid-view</code> (และไม่มี <code>list-view</code>) ถ้าเป็น <code>"list"</code> ให้มีคลาส <code>list-view</code> (และไม่มี <code>grid-view</code>)',
    requirements: ['สลับคลาส <code>grid-view</code> และ <code>list-view</code> บน <code>#catalog</code>'],
    html: `<div class="app-card"><div id="catalog" class="grid-view">รายการสินค้า</div></div>`,
    starterJs: `function setViewMode(mode) {\n  // สลับคลาส grid-view และ list-view บน #catalog\n  \n}\nsetViewMode("list");`,
    solutionJs: `function setViewMode(mode) {\n  const cat = document.getElementById("catalog");\n  cat.classList.toggle("grid-view", mode === "grid");\n  cat.classList.toggle("list-view", mode === "list");\n}\nsetViewMode("list");`,
    hints: ['ใช้ cat.classList.toggle("grid-view", mode === "grid") และ cat.classList.toggle("list-view", mode === "list")'],
    testCases: [
      {
        name: 'เมื่อ mode = "list" มีคลาส list-view และไม่มี grid-view',
        run: ({ win, doc }) => {
          win.setViewMode('list');
          const c = doc.getElementById('catalog');
          const ok = c.classList.contains('list-view') && !c.classList.contains('grid-view');
          return { passed: ok, expected: 'list-view only', actual: c.className };
        }
      },
      {
        name: 'เมื่อ mode = "grid" มีคลาส grid-view และไม่มี list-view',
        run: ({ win, doc }) => {
          win.setViewMode('grid');
          const c = doc.getElementById('catalog');
          const ok = c.classList.contains('grid-view') && !c.classList.contains('list-view');
          return { passed: ok, expected: 'grid-view only', actual: c.className };
        }
      },
      {
        name: 'สลับไปมาไม่ค้างคลาสเก่า',
        run: ({ win, doc }) => {
          win.setViewMode('list');
          win.setViewMode('grid');
          const c = doc.getElementById('catalog');
          return { passed: c.classList.contains('grid-view') && !c.classList.contains('list-view'), expected: 'grid-view', actual: c.className };
        }
      }
    ]
  }),
  makeWebAppProblem({
    num: 12,
    id: 'ch5-12',
    title: 'ปุ่มกดคัดลอกโค้ดส่วนลดพร้อมเปลี่ยนสถานะปุ่ม',
    difficulty: 'ง่าย',
    tags: ['Copy UI', 'DOM State'],
    description: 'เมื่อคลิกปุ่ม <code>#copy-code-btn</code> ให้อ่านข้อความจาก <code>#promo-code</code> ไปใส่ใน <code>#copied-text</code> และเปลี่ยนข้อความปุ่มเป็น <code>"คัดลอกแล้ว!"</code>',
    requirements: ['ตั้งค่า <code>#copied-text.textContent = promoCode.textContent</code>', 'เปลี่ยนข้อความปุ่มเป็น <code>"คัดลอกแล้ว!"</code>'],
    html: `<div class="app-card"><code id="promo-code">FREE2026</code> <button id="copy-code-btn">คัดลอกโค้ด</button><p id="copied-text"></p></div>`,
    starterJs: `const promoCode = document.getElementById("promo-code");\nconst copyBtn = document.getElementById("copy-code-btn");\nconst copiedText = document.getElementById("copied-text");\n// ผูก click event ที่นี่\n`,
    solutionJs: `const promoCode = document.getElementById("promo-code");\nconst copyBtn = document.getElementById("copy-code-btn");\nconst copiedText = document.getElementById("copied-text");\ncopyBtn.addEventListener("click", () => {\n  copiedText.textContent = promoCode.textContent;\n  copyBtn.textContent = "คัดลอกแล้ว!";\n});`,
    hints: ['ใน click handler อัปเดตทั้ง copiedText.textContent และ copyBtn.textContent'],
    testCases: [
      {
        name: 'หลังคลิก ปุ่มเปลี่ยนข้อความเป็น "คัดลอกแล้ว!"',
        run: ({ doc }) => {
          doc.getElementById('copy-code-btn').click();
          const actual = doc.getElementById('copy-code-btn').textContent;
          return { passed: actual === 'คัดลอกแล้ว!', expected: 'คัดลอกแล้ว!', actual };
        }
      },
      {
        name: 'นำรหัสใน #promo-code ไปแสดงใน #copied-text ถูกต้อง',
        run: ({ doc }) => {
          doc.getElementById('promo-code').textContent = 'SUPER99';
          doc.getElementById('copy-code-btn').click();
          const actual = doc.getElementById('copied-text').textContent;
          return { passed: actual === 'SUPER99', expected: 'SUPER99', actual };
        }
      },
      {
        name: 'ทำงานถูกต้องกับรหัสเริ่มต้น FREE2026',
        run: ({ doc }) => {
          doc.getElementById('promo-code').textContent = 'FREE2026';
          doc.getElementById('copy-code-btn').click();
          const actual = doc.getElementById('copied-text').textContent;
          return { passed: actual === 'FREE2026', expected: 'FREE2026', actual };
        }
      }
    ]
  }),
  makeWebAppProblem({
    num: 13,
    id: 'ch5-13',
    title: 'ระบบนับจำนวนผู้เข้าชมและแสดงข้อความต้อนรับ',
    difficulty: 'ง่าย',
    tags: ['Counter Component'],
    description: 'เขียนฟังก์ชัน <code>recordVisit()</code> ที่เพิ่มค่าตัวเลขใน <code>#visit-count</code> ขึ้น 1 และอัปเดต <code>#visit-msg</code> เป็น <code>"คุณคือผู้เข้าชมคนที่ [จำนวนใหม่]"</code>',
    requirements: ['อ่านตัวเลขเดิมจาก <code>#visit-count</code> บวก 1', 'อัปเดตทั้ง <code>#visit-count</code> และ <code>#visit-msg</code>'],
    html: `<div class="app-card"><span id="visit-count">0</span><p id="visit-msg">-</p></div>`,
    starterJs: `function recordVisit() {\n  // เพิ่มค่าใน #visit-count และอัปเดต #visit-msg\n  \n}\nrecordVisit();`,
    solutionJs: `function recordVisit() {\n  const countEl = document.getElementById("visit-count");\n  const next = Number(countEl.textContent) + 1;\n  countEl.textContent = String(next);\n  document.getElementById("visit-msg").textContent = \`คุณคือผู้เข้าชมคนที่ \${next}\`;\n}\nrecordVisit();`,
    hints: ['คำนวณ const next = Number(countEl.textContent) + 1; ก่อนอัปเดตทั้ง 2 จุด'],
    testCases: [
      {
        name: 'จาก 0 เรียก 1 ครั้ง แสดง "คุณคือผู้เข้าชมคนที่ 1"',
        run: ({ win, doc }) => {
          doc.getElementById('visit-count').textContent = '0';
          win.recordVisit();
          const msg = doc.getElementById('visit-msg').textContent;
          return { passed: msg === 'คุณคือผู้เข้าชมคนที่ 1', expected: 'คุณคือผู้เข้าชมคนที่ 1', actual: msg };
        }
      },
      {
        name: 'เรียก 3 ครั้งติดต่อกัน ตัวเลขเป็น "3"',
        run: ({ win, doc }) => {
          doc.getElementById('visit-count').textContent = '0';
          win.recordVisit();
          win.recordVisit();
          win.recordVisit();
          const cnt = doc.getElementById('visit-count').textContent;
          return { passed: cnt === '3', expected: '3', actual: cnt };
        }
      },
      {
        name: 'จาก 99 เรียก 1 ครั้ง แสดง "คุณคือผู้เข้าชมคนที่ 100"',
        run: ({ win, doc }) => {
          doc.getElementById('visit-count').textContent = '99';
          win.recordVisit();
          const msg = doc.getElementById('visit-msg').textContent;
          return { passed: msg === 'คุณคือผู้เข้าชมคนที่ 100', expected: 'คุณคือผู้เข้าชมคนที่ 100', actual: msg };
        }
      }
    ]
  }),
  makeWebAppProblem({
    num: 14,
    id: 'ch5-14',
    title: 'ระบบกดยอมรับคุกกี้และซ่อนแบนเนอร์ (Cookie Consent Banner)',
    difficulty: 'ง่าย',
    tags: ['Banner UI', 'classList'],
    description: 'เมื่อคลิกปุ่ม <code>#accept-cookie-btn</code> ให้เพิ่มคลาส <code>hidden</code> ให้กับ <code>#cookie-banner</code> และตั้งค่า <code>#cookie-status.textContent = "ยอมรับแล้ว"</code>',
    requirements: ['ซ่อน <code>#cookie-banner</code> ด้วยคลาส <code>hidden</code>', 'แสดง <code>"ยอมรับแล้ว"</code> ใน <code>#cookie-status</code>'],
    html: `<div class="app-card"><div id="cookie-banner">เว็บนี้ใช้คุกกี้ <button id="accept-cookie-btn">ยอมรับ</button></div><p id="cookie-status">รอยืนยัน</p></div>`,
    starterJs: `const btn = document.getElementById("accept-cookie-btn");\n// ผูก click event ที่นี่\n`,
    solutionJs: `const btn = document.getElementById("accept-cookie-btn");\nbtn.addEventListener("click", () => {\n  document.getElementById("cookie-banner").classList.add("hidden");\n  document.getElementById("cookie-status").textContent = "ยอมรับแล้ว";\n});`,
    hints: ['เพิ่มคลาส hidden ให้ #cookie-banner และเปลี่ยนข้อความใน #cookie-status'],
    testCases: [
      {
        name: 'คลิกปุ่มยอมรับแล้ว #cookie-banner มีคลาส hidden',
        run: ({ doc }) => {
          const banner = doc.getElementById('cookie-banner');
          banner.classList.remove('hidden');
          doc.getElementById('accept-cookie-btn').click();
          return { passed: banner.classList.contains('hidden'), expected: 'true', actual: String(banner.classList.contains('hidden')) };
        }
      },
      {
        name: 'ข้อความใน #cookie-status เปลี่ยนเป็น "ยอมรับแล้ว"',
        run: ({ doc }) => {
          doc.getElementById('accept-cookie-btn').click();
          const actual = doc.getElementById('cookie-status').textContent;
          return { passed: actual === 'ยอมรับแล้ว', expected: 'ยอมรับแล้ว', actual };
        }
      },
      {
        name: 'ทั้งการซ่อนแบนเนอร์และอัปเดตสถานะทำงานครบถ้วน',
        run: ({ doc }) => {
          doc.getElementById('accept-cookie-btn').click();
          const ok = doc.getElementById('cookie-banner').classList.contains('hidden') && doc.getElementById('cookie-status').textContent === 'ยอมรับแล้ว';
          return { passed: ok, expected: 'true', actual: String(ok) };
        }
      }
    ]
  }),
  makeWebAppProblem({
    num: 15,
    id: 'ch5-15',
    title: 'ระบบให้คะแนนดาว 1–5 ดาว (Star Rating Component)',
    difficulty: 'ง่าย',
    tags: ['Rating UI', 'dataset', 'classList'],
    description: 'เขียนฟังก์ชัน <code>setStarRating(rating)</code> ที่วนลูปทุก <code>.star</code> ถ้า <code>Number(star.dataset.val) &lt;= rating</code> ให้มีคลาส <code>active</code> นอกนั้นให้เอาคลาส <code>active</code> ออก และแสดง <code>"คะแนน: [rating]/5"</code> ใน <code>#rating-text</code>',
    requirements: ['ตั้งคลาส <code>active</code> ให้ดาวที่มีค่า <code>&lt;= rating</code>', 'แสดง <code>"คะแนน: [rating]/5"</code> ใน <code>#rating-text</code>'],
    html: `<div class="app-card"><div><button class="star" data-val="1">★</button><button class="star" data-val="2">★</button><button class="star" data-val="3">★</button><button class="star" data-val="4">★</button><button class="star" data-val="5">★</button></div><p id="rating-text">คะแนน: 0/5</p></div>`,
    starterJs: `function setStarRating(rating) {\n  // อัปเดตคลาส active บน .star และข้อความ #rating-text\n  \n}\nsetStarRating(4);`,
    solutionJs: `function setStarRating(rating) {\n  document.querySelectorAll(".star").forEach(star => {\n    star.classList.toggle("active", Number(star.dataset.val) <= rating);\n  });\n  document.getElementById("rating-text").textContent = \`คะแนน: \${rating}/5\`;\n}\nsetStarRating(4);`,
    hints: ['ใช้ star.classList.toggle("active", Number(star.dataset.val) <= rating)'],
    testCases: [
      {
        name: 'ให้คะแนน 4 ดาว: มี .star.active 4 ดวง และแสดง "คะแนน: 4/5"',
        run: ({ win, doc }) => {
          win.setStarRating(4);
          const activeCount = doc.querySelectorAll('.star.active').length;
          const text = doc.getElementById('rating-text').textContent;
          return { passed: activeCount === 4 && text === 'คะแนน: 4/5', expected: '4 stars, "คะแนน: 4/5"', actual: `${activeCount} stars, "${text}"` };
        }
      },
      {
        name: 'ลดเหลือ 2 ดาว: มี .star.active 2 ดวง และแสดง "คะแนน: 2/5"',
        run: ({ win, doc }) => {
          win.setStarRating(2);
          const activeCount = doc.querySelectorAll('.star.active').length;
          return { passed: activeCount === 2, expected: 2, actual: activeCount };
        }
      },
      {
        name: 'ให้ 5 ดาวเต็ม: ดาวทุกดวงมีคลาส active',
        run: ({ win, doc }) => {
          win.setStarRating(5);
          const activeCount = doc.querySelectorAll('.star.active').length;
          return { passed: activeCount === 5, expected: 5, actual: activeCount };
        }
      }
    ]
  }),
  makeWebAppProblem({
    num: 16,
    id: 'ch5-16',
    title: 'ระบบแลกคะแนนสะสมเป็นส่วนลด (10 คะแนน = 1 บาท)',
    difficulty: 'ง่าย',
    tags: ['Checkout UI', 'Math'],
    description: 'เขียนฟังก์ชัน <code>applyPointsDiscount(price, points)</code> โดยทุก 10 คะแนนลดได้ 1 บาท (<code>discount = Math.floor(points / 10)</code>) คำนวณราคาสุทธิ (ห้ามต่ำกว่า 0) แสดงใน <code>#net-price</code>',
    requirements: ['คำนวณส่วนลด <code>Math.floor(points / 10)</code>', 'แสดงราคาสุทธิ <code>Math.max(0, price - discount)</code> ใน <code>#net-price</code>'],
    html: `<div class="app-card"><p>ราคาหลังใช้คะแนน: <strong id="net-price">0</strong> บาท</p></div>`,
    starterJs: `function applyPointsDiscount(price, points) {\n  // คำนวณส่วนลดจากคะแนนและอัปเดต #net-price\n  \n}\napplyPointsDiscount(500, 1200);`,
    solutionJs: `function applyPointsDiscount(price, points) {\n  const discount = Math.floor(points / 10);\n  const net = Math.max(0, price - discount);\n  document.getElementById("net-price").textContent = String(net);\n}\napplyPointsDiscount(500, 1200);`,
    hints: ['ใช้ Math.floor(points / 10) และ Math.max(0, price - discount)'],
    testCases: [
      {
        name: 'ราคา 500 ใช้ 1200 คะแนน (ลด 120) เหลือ "380" บาท',
        run: ({ win, doc }) => {
          win.applyPointsDiscount(500, 1200);
          const actual = doc.getElementById('net-price').textContent;
          return { passed: actual === '380', expected: '380', actual };
        }
      },
      {
        name: 'กรณีคะแนนมากกว่าค่าสินค้า ราคาสุทธิต้องไม่ติดลบ (เป็น "0")',
        run: ({ win, doc }) => {
          win.applyPointsDiscount(100, 5000);
          const actual = doc.getElementById('net-price').textContent;
          return { passed: actual === '0', expected: '0', actual };
        }
      },
      {
        name: 'กรณีคะแนนไม่ถึง 10 แต้ม (เช่น 9 แต้ม) ไม่ได้ส่วนลด',
        run: ({ win, doc }) => {
          win.applyPointsDiscount(250, 9);
          const actual = doc.getElementById('net-price').textContent;
          return { passed: actual === '250', expected: '250', actual };
        }
      }
    ]
  }),
  makeWebAppProblem({
    num: 17,
    id: 'ch5-17',
    title: 'ตัววัดความแข็งแกร่งรหัสผ่าน (Password Strength Meter)',
    difficulty: 'ง่าย',
    tags: ['Security UI', 'Conditionals'],
    description: 'เขียนฟังก์ชัน <code>checkPasswordStrength(pwd)</code> เพื่อแสดงระดับความปลอดภัยใน <code>#pwd-strength</code>: ถ้ายาว <code>&lt; 6</code> แสดง <code>"อ่อนแอ"</code>, ถ้ายาว <code>6–9</code> แสดง <code>"ปานกลาง"</code>, ถ้ายาว <code>&gt;= 10</code> แสดง <code>"ปลอดภัยสูง"</code>',
    requirements: ['ตรวจสอบ <code>pwd.length</code> แล้วแสดงข้อความใน <code>#pwd-strength</code>'],
    html: `<div class="app-card"><p>ระดับรหัสผ่าน: <strong id="pwd-strength">-</strong></p></div>`,
    starterJs: `function checkPasswordStrength(pwd) {\n  // ตรวจสอบความยาว pwd และอัปเดต #pwd-strength\n  \n}\ncheckPasswordStrength("mySuperSecret123");`,
    solutionJs: `function checkPasswordStrength(pwd) {\n  const el = document.getElementById("pwd-strength");\n  if (pwd.length < 6) el.textContent = "อ่อนแอ";\n  else if (pwd.length < 10) el.textContent = "ปานกลาง";\n  else el.textContent = "ปลอดภัยสูง";\n}\ncheckPasswordStrength("mySuperSecret123");`,
    hints: ['เช็ก pwd.length < 6, < 10 และ >= 10 ตามลำดับ'],
    testCases: [
      {
        name: 'รหัสยาว 4 ตัว แสดง "อ่อนแอ"',
        run: ({ win, doc }) => {
          win.checkPasswordStrength('1234');
          const actual = doc.getElementById('pwd-strength').textContent;
          return { passed: actual === 'อ่อนแอ', expected: 'อ่อนแอ', actual };
        }
      },
      {
        name: 'รหัสยาว 8 ตัว แสดง "ปานกลาง"',
        run: ({ win, doc }) => {
          win.checkPasswordStrength('12345678');
          const actual = doc.getElementById('pwd-strength').textContent;
          return { passed: actual === 'ปานกลาง', expected: 'ปานกลาง', actual };
        }
      },
      {
        name: 'รหัสยาว 12 ตัว แสดง "ปลอดภัยสูง"',
        run: ({ win, doc }) => {
          win.checkPasswordStrength('123456789012');
          const actual = doc.getElementById('pwd-strength').textContent;
          return { passed: actual === 'ปลอดภัยสูง', expected: 'ปลอดภัยสูง', actual };
        }
      }
    ]
  }),
  makeWebAppProblem({
    num: 18,
    id: 'ch5-18',
    title: 'ระบบสลับภาษาหน้าเว็บ TH / EN (Language Switcher)',
    difficulty: 'ง่าย',
    tags: ['i18n UI', 'Objects'],
    description: 'เขียนฟังก์ชัน <code>switchLanguage(lang)</code> ถ้า <code>lang === "en"</code> ให้เปลี่ยน <code>#hero-title</code> เป็น <code>"Welcome"</code> แต่ถ้าเป็น <code>"th"</code> ให้เปลี่ยนเป็น <code>"ยินดีต้อนรับ"</code>',
    requirements: ['อัปเดตข้อความ <code>#hero-title</code> ตามรหัสภาษา <code>"th"</code> หรือ <code>"en"</code>'],
    html: `<div class="app-card"><h3 id="hero-title">ยินดีต้อนรับ</h3></div>`,
    starterJs: `function switchLanguage(lang) {\n  // เปลี่ยนข้อความใน #hero-title ตาม lang\n  \n}\nswitchLanguage("en");`,
    solutionJs: `function switchLanguage(lang) {\n  const title = document.getElementById("hero-title");\n  title.textContent = lang === "en" ? "Welcome" : "ยินดีต้อนรับ";\n}\nswitchLanguage("en");`,
    hints: ['ใช้ lang === "en" ? "Welcome" : "ยินดีต้อนรับ"'],
    testCases: [
      {
        name: 'เมื่อ lang = "en" แสดง "Welcome"',
        run: ({ win, doc }) => {
          win.switchLanguage('en');
          const actual = doc.getElementById('hero-title').textContent;
          return { passed: actual === 'Welcome', expected: 'Welcome', actual };
        }
      },
      {
        name: 'เมื่อ lang = "th" แสดง "ยินดีต้อนรับ"',
        run: ({ win, doc }) => {
          win.switchLanguage('th');
          const actual = doc.getElementById('hero-title').textContent;
          return { passed: actual === 'ยินดีต้อนรับ', expected: 'ยินดีต้อนรับ', actual };
        }
      },
      {
        name: 'สลับไปมาระหว่าง en และ th ได้ถูกต้อง',
        run: ({ win, doc }) => {
          win.switchLanguage('en');
          win.switchLanguage('th');
          const actual = doc.getElementById('hero-title').textContent;
          return { passed: actual === 'ยินดีต้อนรับ', expected: 'ยินดีต้อนรับ', actual };
        }
      }
    ]
  }),
  makeWebAppProblem({
    num: 19,
    id: 'ch5-19',
    title: 'ระบบนับจำนวนคำในกล่องเขียนบทความ (Word Counter)',
    difficulty: 'ง่าย',
    tags: ['Editor UI', 'split'],
    description: 'เขียนฟังก์ชัน <code>updateWordCount()</code> ที่อ่านข้อความจาก <code>#post-text</code> นับจำนวนคำที่คั่นด้วยช่องว่าง แล้วแสดงตัวเลขใน <code>#word-count</code> (ถ้าว่างเปล่าให้แสดง <code>"0"</code>)',
    requirements: ['ถ้า <code>postText.value.trim() === ""</code> แสดง <code>"0"</code>', 'ไม่เช่นนั้นแยกคำด้วย <code>.trim().split(/\\s+/).length</code>'],
    html: `<div class="app-card"><textarea id="post-text">สวัสดี นักพัฒนา เว็บ ทุกคน</textarea><p>จำนวนคำ: <strong id="word-count">0</strong></p></div>`,
    starterJs: `function updateWordCount() {\n  // นับจำนวนคำใน #post-text แล้วแสดงใน #word-count\n  \n}\nupdateWordCount();`,
    solutionJs: `function updateWordCount() {\n  const raw = document.getElementById("post-text").value.trim();\n  const count = raw ? raw.split(/\\s+/).length : 0;\n  document.getElementById("word-count").textContent = String(count);\n}\nupdateWordCount();`,
    hints: ['เช็กก่อนว่า raw ว่างหรือไม่ ถ้าว่างให้เป็น 0 ถ้าไม่ว่างใช้ raw.split(/\\s+/).length'],
    testCases: [
      {
        name: '"สวัสดี นักพัฒนา เว็บ ทุกคน" นับได้ "4" คำ',
        run: ({ win, doc }) => {
          doc.getElementById('post-text').value = 'สวัสดี นักพัฒนา เว็บ ทุกคน';
          win.updateWordCount();
          const actual = doc.getElementById('word-count').textContent;
          return { passed: actual === '4', expected: '4', actual };
        }
      },
      {
        name: 'กรณีช่องว่างเปล่า "   " นับได้ "0" คำ',
        run: ({ win, doc }) => {
          doc.getElementById('post-text').value = '   ';
          win.updateWordCount();
          const actual = doc.getElementById('word-count').textContent;
          return { passed: actual === '0', expected: '0', actual };
        }
      },
      {
        name: 'กรณีมีเว้นวรรคหลายช่องติดกัน นับคำได้ถูกต้อง',
        run: ({ win, doc }) => {
          doc.getElementById('post-text').value = 'Hello    World   JS';
          win.updateWordCount();
          const actual = doc.getElementById('word-count').textContent;
          return { passed: actual === '3', expected: '3', actual };
        }
      }
    ]
  }),
  makeWebAppProblem({
    num: 20,
    id: 'ch5-20',
    title: 'ระบบรีเซ็ตตัวกรองค้นหาทั้งหมดกลับเป็นค่าเริ่มต้น',
    difficulty: 'ง่าย',
    tags: ['Filter UI', 'Form Reset'],
    description: 'เขียนฟังก์ชัน <code>resetAllFilters()</code> เพื่อล้างค่า <code>#q-input.value = ""</code>, ตั้งค่า <code>#cat-select.value = "all"</code> และตั้งค่า <code>#in-stock-only.checked = false</code>',
    requirements: ['รีเซ็ตทั้ง 3 Element กลับเป็นค่าเริ่มต้น'],
    html: `<div class="app-card"><input id="q-input" type="text" value="mouse" /><select id="cat-select"><option value="all">ทั้งหมด</option><option value="it" selected>IT</option></select><input id="in-stock-only" type="checkbox" checked /></div>`,
    starterJs: `function resetAllFilters() {\n  // รีเซ็ต #q-input, #cat-select และ #in-stock-only\n  \n}\nresetAllFilters();`,
    solutionJs: `function resetAllFilters() {\n  document.getElementById("q-input").value = "";\n  document.getElementById("cat-select").value = "all";\n  document.getElementById("in-stock-only").checked = false;\n}\nresetAllFilters();`,
    hints: ['ตั้งค่า .value = "", .value = "all" และ .checked = false'],
    testCases: [
      {
        name: 'ล้างช่องค้นหา #q-input เป็น ""',
        run: ({ win, doc }) => {
          doc.getElementById('q-input').value = 'test';
          win.resetAllFilters();
          return { passed: doc.getElementById('q-input').value === '', expected: '""', actual: doc.getElementById('q-input').value };
        }
      },
      {
        name: 'รีเซ็ต #cat-select เป็น "all"',
        run: ({ win, doc }) => {
          doc.getElementById('cat-select').value = 'it';
          win.resetAllFilters();
          return { passed: doc.getElementById('cat-select').value === 'all', expected: 'all', actual: doc.getElementById('cat-select').value };
        }
      },
      {
        name: 'ยกเลิกติ๊ก #in-stock-only เป็น false',
        run: ({ win, doc }) => {
          doc.getElementById('in-stock-only').checked = true;
          win.resetAllFilters();
          return { passed: doc.getElementById('in-stock-only').checked === false, expected: 'false', actual: String(doc.getElementById('in-stock-only').checked) };
        }
      }
    ]
  }),

  // ======================== ปานกลาง (10 ข้อ: 21 - 30) ========================
  makeWebAppProblem({
    num: 21,
    id: 'ch5-21',
    title: 'ระบบค้นหาบทเรียนแบบเรียลไทม์ (Live Search Filter Component)',
    difficulty: 'ปานกลาง',
    tags: ['Live Search', 'Array.filter', 'DOM'],
    description: 'เมื่อพิมพ์ใน <code>#search-box</code> ให้กรองหัวข้อจาก <code>TOPICS</code> (ไม่สนตัวพิมพ์เล็ก-ใหญ่) สร้างเป็น <code>&lt;li class="topic-item"&gt;</code> ลงใน <code>#topic-list</code> และอัปเดตจำนวนที่พบใน <code>#found-count</code>',
    requirements: ['กรอง <code>TOPICS</code> ตามข้อความใน <code>#search-box</code>', 'อัปเดตทั้ง <code>#topic-list</code> และ <code>#found-count</code>'],
    html: `<div class="app-card"><input id="search-box" type="text" placeholder="ค้นหา..." /><p>พบ <strong id="found-count">3</strong> รายการ</p><ul id="topic-list"></ul></div>`,
    starterJs: `const TOPICS = ["HTML5 Layout", "CSS Flexbox", "JavaScript DOM"];\nconst searchBox = document.getElementById("search-box");\nconst foundCount = document.getElementById("found-count");\nconst topicList = document.getElementById("topic-list");\n\nfunction renderTopics(q = "") {\n  // กรอง TOPICS และอัปเดต DOM\n  \n}\nsearchBox.addEventListener("input", () => renderTopics(searchBox.value));\nrenderTopics("");`,
    solutionJs: `const TOPICS = ["HTML5 Layout", "CSS Flexbox", "JavaScript DOM"];\nconst searchBox = document.getElementById("search-box");\nconst foundCount = document.getElementById("found-count");\nconst topicList = document.getElementById("topic-list");\n\nfunction renderTopics(q = "") {\n  const clean = q.trim().toLowerCase();\n  const filtered = TOPICS.filter(t => t.toLowerCase().includes(clean));\n  foundCount.textContent = String(filtered.length);\n  topicList.innerHTML = filtered.map(t => \`<li class="topic-item">\${t}</li>\`).join("");\n}\nsearchBox.addEventListener("input", () => renderTopics(searchBox.value));\nrenderTopics("");`,
    hints: ['ใช้ TOPICS.filter(t => t.toLowerCase().includes(clean))'],
    testCases: [
      {
        name: 'เริ่มต้นแสดงครบ 3 รายการ',
        run: ({ win, doc }) => {
          const inp = doc.getElementById('search-box');
          inp.value = '';
          inp.dispatchEvent(new win.Event('input', { bubbles: true }));
          const cnt = doc.getElementById('found-count').textContent;
          return { passed: cnt === '3', expected: '3', actual: cnt };
        }
      },
      {
        name: 'พิมพ์ค้นหา "dom" พบ 1 รายการ ("JavaScript DOM")',
        run: ({ win, doc }) => {
          const inp = doc.getElementById('search-box');
          inp.value = 'dom';
          inp.dispatchEvent(new win.Event('input', { bubbles: true }));
          const items = doc.querySelectorAll('.topic-item');
          return { passed: items.length === 1 && items[0].textContent === 'JavaScript DOM', expected: 'JavaScript DOM', actual: items[0]?.textContent };
        }
      },
      {
        name: 'พิมพ์คำที่ไม่มีในระบบ แสดง 0 รายการ',
        run: ({ win, doc }) => {
          const inp = doc.getElementById('search-box');
          inp.value = 'python';
          inp.dispatchEvent(new win.Event('input', { bubbles: true }));
          const cnt = doc.getElementById('found-count').textContent;
          return { passed: cnt === '0', expected: '0', actual: cnt };
        }
      }
    ]
  }),
  makeWebAppProblem({
    num: 22,
    id: 'ch5-22',
    title: 'ระบบกรองสินค้าตามหมวดหมู่ (Category Filter Component)',
    difficulty: 'ปานกลาง',
    tags: ['Category Filter', 'DOM Rendering'],
    description: 'เขียนฟังก์ชัน <code>filterByCategory(category)</code> เพื่อเรนเดอร์สินค้าจาก <code>ITEMS</code> ลงใน <code>#item-list</code> เป็น <code>&lt;li&gt;[name]&lt;/li&gt;</code> (ถ้า <code>category === "all"</code> ให้แสดงทุกชิ้น)',
    requirements: ['ถ้า <code>category === "all"</code> แสดงทุกชิ้น', 'ไม่เช่นนั้นกรองเฉพาะ <code>item.category === category</code>'],
    html: `<div class="app-card"><ul id="item-list"></ul></div>`,
    starterJs: `const ITEMS = [\n  { name: "เมาส์", category: "it" },\n  { name: "สมุด", category: "book" },\n  { name: "คีย์บอร์ด", category: "it" }\n];\nfunction filterByCategory(category) {\n  // กรอง ITEMS และเรนเดอร์ <li> ลงใน #item-list\n  \n}\nfilterByCategory("all");`,
    solutionJs: `const ITEMS = [\n  { name: "เมาส์", category: "it" },\n  { name: "สมุด", category: "book" },\n  { name: "คีย์บอร์ด", category: "it" }\n];\nfunction filterByCategory(category) {\n  const list = category === "all" ? ITEMS : ITEMS.filter(i => i.category === category);\n  document.getElementById("item-list").innerHTML = list.map(i => \`<li>\${i.name}</li>\`).join("");\n}\nfilterByCategory("all");`,
    hints: ['ใช้ const list = category === "all" ? ITEMS : ITEMS.filter(i => i.category === category);'],
    testCases: [
      {
        name: 'เลือกหมวด "it" แสดง 2 รายการ ("เมาส์", "คีย์บอร์ด")',
        run: ({ win, doc }) => {
          win.filterByCategory('it');
          const items = doc.querySelectorAll('#item-list li');
          return { passed: items.length === 2 && items[0].textContent === 'เมาส์', expected: '2 items', actual: `${items.length} items` };
        }
      },
      {
        name: 'เลือกหมวด "book" แสดง 1 รายการ ("สมุด")',
        run: ({ win, doc }) => {
          win.filterByCategory('book');
          const items = doc.querySelectorAll('#item-list li');
          return { passed: items.length === 1 && items[0].textContent === 'สมุด', expected: 'สมุด', actual: items[0]?.textContent };
        }
      },
      {
        name: 'เลือกหมวด "all" แสดงครบ 3 รายการ',
        run: ({ win, doc }) => {
          win.filterByCategory('all');
          const items = doc.querySelectorAll('#item-list li');
          return { passed: items.length === 3, expected: 3, actual: items.length };
        }
      }
    ]
  }),
  makeWebAppProblem({
    num: 23,
    id: 'ch5-23',
    title: 'ระบบเรียงลำดับราคาสินค้าบนหน้าเว็บ (ถูกไปแพง / แพงไปถูก)',
    difficulty: 'ปานกลาง',
    tags: ['Sort UI', 'Array.sort'],
    description: 'เขียนฟังก์ชัน <code>sortProductList(order)</code> ที่เรียง <code>PRODUCTS</code> ตามราคา (ถ้า <code>order === "asc"</code> น้อยไปมาก, ถ้า <code>"desc"</code> มากไปน้อย) แล้วแสดง <code>&lt;li&gt;[name] - [price]&lt;/li&gt;</code> ใน <code>#sorted-list</code>',
    requirements: ['เรียงลำดับตาม <code>order</code> โดยไม่แก้ลำดับถาวรหากสลับไปมา', 'เรนเดอร์ <code>&lt;li&gt;[name] - [price]&lt;/li&gt;</code>'],
    html: `<div class="app-card"><ul id="sorted-list"></ul></div>`,
    starterJs: `const PRODUCTS = [\n  { name: "B", price: 500 },\n  { name: "A", price: 100 },\n  { name: "C", price: 300 }\n];\nfunction sortProductList(order) {\n  // เรียงลำดับและเรนเดอร์ลงใน #sorted-list\n  \n}\nsortProductList("asc");`,
    solutionJs: `const PRODUCTS = [\n  { name: "B", price: 500 },\n  { name: "A", price: 100 },\n  { name: "C", price: 300 }\n];\nfunction sortProductList(order) {\n  const sorted = [...PRODUCTS].sort((a, b) =>\n    order === "asc" ? a.price - b.price : b.price - a.price\n  );\n  document.getElementById("sorted-list").innerHTML = sorted\n    .map(p => \`<li>\${p.name} - \${p.price}</li>\`)\n    .join("");\n}\nsortProductList("asc");`,
    hints: ['ใช้ [...PRODUCTS].sort((a, b) => order === "asc" ? a.price - b.price : b.price - a.price)'],
    testCases: [
      {
        name: 'เรียงแบบ "asc" ตัวแรกคือ "A - 100"',
        run: ({ win, doc }) => {
          win.sortProductList('asc');
          const first = doc.querySelector('#sorted-list li')?.textContent;
          return { passed: first === 'A - 100', expected: 'A - 100', actual: first };
        }
      },
      {
        name: 'เรียงแบบ "desc" ตัวแรกคือ "B - 500"',
        run: ({ win, doc }) => {
          win.sortProductList('desc');
          const first = doc.querySelector('#sorted-list li')?.textContent;
          return { passed: first === 'B - 500', expected: 'B - 500', actual: first };
        }
      },
      {
        name: 'แสดงครบทั้ง 3 รายการเสมอ',
        run: ({ win, doc }) => {
          win.sortProductList('asc');
          const count = doc.querySelectorAll('#sorted-list li').length;
          return { passed: count === 3, expected: 3, actual: count };
        }
      }
    ]
  }),
  makeWebAppProblem({
    num: 24,
    id: 'ch5-24',
    title: 'ระบบสไลด์ข้อความ/แบนเนอร์แบบวนลูป (Carousel Next / Prev)',
    difficulty: 'ปานกลาง',
    tags: ['Carousel UI', 'Modulo %'],
    description: 'มีรายการสไลด์ <code>SLIDES = ["สไลด์ 1", "สไลด์ 2", "สไลด์ 3"]</code> เมื่อคลิก <code>#next-slide</code> ให้เลื่อนไปข้างหน้า (ถ้าถึงตัวท้ายให้วนกลับตัวแรก) และคลิก <code>#prev-slide</code> ให้ย้อนกลับ (ถ้าอยู่ที่ตัวแรกให้วนไปตัวท้าย) แสดงใน <code>#slide-view</code>',
    requirements: ['อัปเดตข้อความใน <code>#slide-view</code> เมื่อคลิกปุ่มถัดไปและก่อนหน้า'],
    html: `<div class="app-card"><h3 id="slide-view">สไลด์ 1</h3><button id="prev-slide">◀ ก่อนหน้า</button><button id="next-slide">ถัดไป ▶</button></div>`,
    starterJs: `const SLIDES = ["สไลด์ 1", "สไลด์ 2", "สไลด์ 3"];\nvar slideIdx = 0;\nconst slideView = document.getElementById("slide-view");\n// ผูก click event ให้ #prev-slide และ #next-slide\n`,
    solutionJs: `const SLIDES = ["สไลด์ 1", "สไลด์ 2", "สไลด์ 3"];\nvar slideIdx = 0;\nconst slideView = document.getElementById("slide-view");\ndocument.getElementById("next-slide").addEventListener("click", () => {\n  slideIdx = (slideIdx + 1) % SLIDES.length;\n  slideView.textContent = SLIDES[slideIdx];\n});\ndocument.getElementById("prev-slide").addEventListener("click", () => {\n  slideIdx = (slideIdx - 1 + SLIDES.length) % SLIDES.length;\n  slideView.textContent = SLIDES[slideIdx];\n});`,
    hints: ['เลื่อนหน้า: (slideIdx + 1) % SLIDES.length', 'ย้อนกลับ: (slideIdx - 1 + SLIDES.length) % SLIDES.length'],
    testCases: [
      {
        name: 'คลิก #next-slide 1 ครั้ง แสดง "สไลด์ 2"',
        run: ({ win, doc }) => {
          win.slideIdx = 0;
          doc.getElementById('next-slide').click();
          const actual = doc.getElementById('slide-view').textContent;
          return { passed: actual === 'สไลด์ 2', expected: 'สไลด์ 2', actual };
        }
      },
      {
        name: 'คลิก #next-slide 3 ครั้งจากตัวแรก วนกลับมาที่ "สไลด์ 1"',
        run: ({ win, doc }) => {
          win.slideIdx = 0;
          doc.getElementById('next-slide').click();
          doc.getElementById('next-slide').click();
          doc.getElementById('next-slide').click();
          const actual = doc.getElementById('slide-view').textContent;
          return { passed: actual === 'สไลด์ 1', expected: 'สไลด์ 1', actual };
        }
      },
      {
        name: 'จากสไลด์แรก คลิก #prev-slide วนไปที่ตัวท้ายสุด "สไลด์ 3"',
        run: ({ win, doc }) => {
          win.slideIdx = 0;
          doc.getElementById('prev-slide').click();
          const actual = doc.getElementById('slide-view').textContent;
          return { passed: actual === 'สไลด์ 3', expected: 'สไลด์ 3', actual };
        }
      }
    ]
  }),
  makeWebAppProblem({
    num: 25,
    id: 'ch5-25',
    title: 'ระบบแบ่งหน้าแสดงข้อมูล (Pagination Component — หน้าละ 2 รายการ)',
    difficulty: 'ปานกลาง',
    tags: ['Pagination UI', 'Array.slice'],
    description: 'เขียนฟังก์ชัน <code>renderPage(pageNumber)</code> โดยแสดงข้อมูลจาก <code>ALL_DATA</code> หน้าละ 2 รายการ (<code>pageSize = 2</code>) ลงใน <code>#page-list</code> เป็น <code>&lt;li&gt;[item]&lt;/li&gt;</code>',
    requirements: ['คำนวณ <code>start = (pageNumber - 1) * 2</code>', 'ตัดข้อมูลด้วย <code>ALL_DATA.slice(start, start + 2)</code> แล้วเรนเดอร์ลงใน <code>#page-list</code>'],
    html: `<div class="app-card"><ul id="page-list"></ul></div>`,
    starterJs: `const ALL_DATA = ["ข้อ 1", "ข้อ 2", "ข้อ 3", "ข้อ 4", "ข้อ 5"];\nfunction renderPage(pageNumber) {\n  // ตัดข้อมูลหน้าละ 2 รายการด้วย .slice() แล้วแสดงใน #page-list\n  \n}\nrenderPage(1);`,
    solutionJs: `const ALL_DATA = ["ข้อ 1", "ข้อ 2", "ข้อ 3", "ข้อ 4", "ข้อ 5"];\nfunction renderPage(pageNumber) {\n  const start = (pageNumber - 1) * 2;\n  const pageItems = ALL_DATA.slice(start, start + 2);\n  document.getElementById("page-list").innerHTML = pageItems.map(x => \`<li>\${x}</li>\`).join("");\n}\nrenderPage(1);`,
    hints: ['หน้าที่ 1 คือ slice(0, 2), หน้าที่ 2 คือ slice(2, 4), หน้าที่ 3 คือ slice(4, 6)'],
    testCases: [
      {
        name: 'หน้าที่ 1 แสดง ["ข้อ 1", "ข้อ 2"]',
        run: ({ win, doc }) => {
          win.renderPage(1);
          const texts = Array.from(doc.querySelectorAll('#page-list li')).map(el => el.textContent);
          return { passed: JSON.stringify(texts) === JSON.stringify(['ข้อ 1', 'ข้อ 2']), expected: '["ข้อ 1","ข้อ 2"]', actual: JSON.stringify(texts) };
        }
      },
      {
        name: 'หน้าที่ 2 แสดง ["ข้อ 3", "ข้อ 4"]',
        run: ({ win, doc }) => {
          win.renderPage(2);
          const texts = Array.from(doc.querySelectorAll('#page-list li')).map(el => el.textContent);
          return { passed: JSON.stringify(texts) === JSON.stringify(['ข้อ 3', 'ข้อ 4']), expected: '["ข้อ 3","ข้อ 4"]', actual: JSON.stringify(texts) };
        }
      },
      {
        name: 'หน้าที่ 3 (หน้าสุดท้าย) แสดง ["ข้อ 5"]',
        run: ({ win, doc }) => {
          win.renderPage(3);
          const texts = Array.from(doc.querySelectorAll('#page-list li')).map(el => el.textContent);
          return { passed: JSON.stringify(texts) === JSON.stringify(['ข้อ 5']), expected: '["ข้อ 5"]', actual: JSON.stringify(texts) };
        }
      }
    ]
  }),
  makeWebAppProblem({
    num: 26,
    id: 'ch5-26',
    title: 'ระบบเพิ่มแท็กคำสำคัญโดยไม่ให้ซ้ำกัน (Unique Tag Manager)',
    difficulty: 'ปานกลาง',
    tags: ['Tag UI', 'Unique State'],
    description: 'เขียนฟังก์ชัน <code>addTag(tagName)</code> เพื่อเพิ่มแท็กลงใน Array <code>tags</code> (ตัดช่องว่างและห้ามเพิ่มซ้ำกับที่มีอยู่แล้ว) แล้วเรนเดอร์ <code>&lt;span class="tag"&gt;[tag]&lt;/span&gt;</code> ลงใน <code>#tag-box</code>',
    requirements: ['ถ้า <code>tagName.trim()</code> ว่าง หรือมีอยู่ใน <code>tags</code> แล้ว ไม่ต้องเพิ่มซ้ำ', 'เรนเดอร์ทุกแท็กเป็น <code>&lt;span class="tag"&gt;</code> ใน <code>#tag-box</code>'],
    html: `<div class="app-card"><div id="tag-box"></div></div>`,
    starterJs: `var tags = [];\nfunction addTag(tagName) {\n  // ตรวจสอบไม่ให้ซ้ำและเรนเดอร์ลงใน #tag-box\n  \n}\naddTag("JavaScript");`,
    solutionJs: `var tags = [];\nfunction addTag(tagName) {\n  const clean = tagName.trim();\n  if (!clean || tags.includes(clean)) return;\n  tags.push(clean);\n  document.getElementById("tag-box").innerHTML = tags\n    .map(t => \`<span class="tag">\${t}</span>\`)\n    .join("");\n}\naddTag("JavaScript");`,
    hints: ['เช็ก if (!clean || tags.includes(clean)) return;'],
    testCases: [
      {
        name: 'เพิ่ม 2 แท็กที่ไม่ซ้ำกัน แสดง 2 .tag',
        run: ({ win, doc }) => {
          win.tags = [];
          win.addTag('HTML');
          win.addTag('CSS');
          const count = doc.querySelectorAll('#tag-box .tag').length;
          return { passed: count === 2, expected: 2, actual: count };
        }
      },
      {
        name: 'เพิ่มแท็กซ้ำ "HTML" ต้องไม่เพิ่มซ้ำ (ยังคงมี 2 แท็ก)',
        run: ({ win, doc }) => {
          win.tags = [];
          win.addTag('HTML');
          win.addTag('CSS');
          win.addTag('HTML');
          const count = doc.querySelectorAll('#tag-box .tag').length;
          return { passed: count === 2, expected: 2, actual: count };
        }
      },
      {
        name: 'กรณีส่งค่าว่าง "" ไม่ถูกเพิ่มเข้า #tag-box',
        run: ({ win, doc }) => {
          win.tags = [];
          doc.getElementById('tag-box').innerHTML = '';
          win.addTag('   ');
          const count = doc.querySelectorAll('#tag-box .tag').length;
          return { passed: count === 0, expected: 0, actual: count };
        }
      }
    ]
  }),
  makeWebAppProblem({
    num: 27,
    id: 'ch5-27',
    title: 'สมุดจดโน้ตด่วนพร้อมแสดงจำนวนโน้ตทั้งหมด (Quick Note Pad)',
    difficulty: 'ปานกลาง',
    tags: ['Note App', 'DOM & State'],
    description: 'เมื่อคลิก <code>#save-note-btn</code> ถ้ารายการใน <code>#note-input.value.trim()</code> ไม่ว่าง ให้สร้าง <code>&lt;li class="note-item"&gt;</code> ลงใน <code>#note-list</code>, ล้างช่อง Input และอัปเดตจำนวนโน้ตใน <code>#note-count</code>',
    requirements: ['เพิ่ม <code>.note-item</code> ลงใน <code>#note-list</code>', 'อัปเดตตัวเลขใน <code>#note-count</code> และล้าง <code>#note-input</code>'],
    html: `<div class="app-card"><input id="note-input" type="text" /><button id="save-note-btn">บันทึกโน้ต</button><p>ทั้งหมด <strong id="note-count">0</strong> โน้ต</p><ul id="note-list"></ul></div>`,
    starterJs: `const noteInput = document.getElementById("note-input");\nconst saveBtn = document.getElementById("save-note-btn");\nconst noteCount = document.getElementById("note-count");\nconst noteList = document.getElementById("note-list");\n// ผูก click event ที่นี่\n`,
    solutionJs: `const noteInput = document.getElementById("note-input");\nconst saveBtn = document.getElementById("save-note-btn");\nconst noteCount = document.getElementById("note-count");\nconst noteList = document.getElementById("note-list");\nsaveBtn.addEventListener("click", () => {\n  const text = noteInput.value.trim();\n  if (!text) return;\n  const li = document.createElement("li");\n  li.className = "note-item";\n  li.textContent = text;\n  noteList.appendChild(li);\n  noteInput.value = "";\n  noteCount.textContent = String(noteList.querySelectorAll(".note-item").length);\n});`,
    hints: ['นับจำนวนด้วย noteList.querySelectorAll(".note-item").length'],
    testCases: [
      {
        name: 'บันทึกโน้ต 1 รายการ แสดงใน #note-list และ #note-count เป็น "1"',
        run: ({ doc }) => {
          doc.getElementById('note-list').innerHTML = '';
          doc.getElementById('note-input').value = 'อ่านหนังสือ';
          doc.getElementById('save-note-btn').click();
          const cnt = doc.getElementById('note-count').textContent;
          return { passed: cnt === '1', expected: '1', actual: cnt };
        }
      },
      {
        name: 'บันทึกเพิ่มเป็น 2 รายการ และช่อง input ถูกล้างว่าง',
        run: ({ doc }) => {
          doc.getElementById('note-input').value = 'ส่งงาน';
          doc.getElementById('save-note-btn').click();
          const cnt = doc.getElementById('note-count').textContent;
          const val = doc.getElementById('note-input').value;
          return { passed: cnt === '2' && val === '', expected: '2, ""', actual: `${cnt}, "${val}"` };
        }
      },
      {
        name: 'กรณีไม่พิมพ์ข้อความ กดบันทึกต้องไม่เพิ่มจำนวน',
        run: ({ doc }) => {
          const before = doc.getElementById('note-count').textContent;
          doc.getElementById('note-input').value = '  ';
          doc.getElementById('save-note-btn').click();
          const after = doc.getElementById('note-count').textContent;
          return { passed: before === after, expected: before, actual: after };
        }
      }
    ]
  }),
  makeWebAppProblem({
    num: 28,
    id: 'ch5-28',
    title: 'ระบบโหวตสำรวจความคิดเห็นและคำนวณผลรวมโหวต (Live Poll Component)',
    difficulty: 'ปานกลาง',
    tags: ['Poll UI', 'State & DOM'],
    description: 'เขียนฟังก์ชัน <code>voteOption(optionKey)</code> ถ้า <code>optionKey === "js"</code> ให้เพิ่มคะแนนใน <code>#js-votes</code> ขึ้น 1, ถ้า <code>"ts"</code> ให้เพิ่มใน <code>#ts-votes</code> ขึ้น 1 พร้อมอัปเดตผลรวมทั้งหมดใน <code>#total-votes</code>',
    requirements: ['เพิ่มคะแนนตัวเลือกที่ถูกโหวตทีละ 1', 'อัปเดต <code>#total-votes</code> ให้เท่ากับผลรวมของทั้งสองตัวเลือก'],
    html: `<div class="app-card"><p>JS: <span id="js-votes">0</span> | TS: <span id="ts-votes">0</span></p><p>รวมทั้งหมด: <strong id="total-votes">0</strong> โหวต</p></div>`,
    starterJs: `function voteOption(optionKey) {\n  // อัปเดต #js-votes, #ts-votes และ #total-votes\n  \n}\nvoteOption("js");`,
    solutionJs: `function voteOption(optionKey) {\n  const jsEl = document.getElementById("js-votes");\n  const tsEl = document.getElementById("ts-votes");\n  let js = Number(jsEl.textContent);\n  let ts = Number(tsEl.textContent);\n  if (optionKey === "js") js++;\n  if (optionKey === "ts") ts++;\n  jsEl.textContent = String(js);\n  tsEl.textContent = String(ts);\n  document.getElementById("total-votes").textContent = String(js + ts);\n}\nvoteOption("js");`,
    hints: ['อ่านค่าเดิมด้วย Number() บวกเพิ่มตาม optionKey แล้วอัปเดตทั้ง 3 Element'],
    testCases: [
      {
        name: 'โหวต "js" 2 ครั้ง และ "ts" 1 ครั้ง ได้ js="2", ts="1", total="3"',
        run: ({ win, doc }) => {
          doc.getElementById('js-votes').textContent = '0';
          doc.getElementById('ts-votes').textContent = '0';
          win.voteOption('js');
          win.voteOption('js');
          win.voteOption('ts');
          const tot = doc.getElementById('total-votes').textContent;
          return { passed: tot === '3', expected: '3', actual: tot };
        }
      },
      {
        name: 'คะแนนของแต่ละตัวเลือกตรงตามจำนวนครั้งที่โหวต',
        run: ({ doc }) => {
          const j = doc.getElementById('js-votes').textContent;
          const t = doc.getElementById('ts-votes').textContent;
          return { passed: j === '2' && t === '1', expected: '2, 1', actual: `${j}, ${t}` };
        }
      },
      {
        name: 'โหวต "ts" เพิ่มอีก 1 ครั้ง รวมเป็น "4"',
        run: ({ win, doc }) => {
          win.voteOption('ts');
          const tot = doc.getElementById('total-votes').textContent;
          return { passed: tot === '4', expected: '4', actual: tot };
        }
      }
    ]
  }),
  makeWebAppProblem({
    num: 29,
    id: 'ch5-29',
    title: 'ระบบคำนวณยอดผ่อนชำระรายเดือน 0% (Installment Calculator)',
    difficulty: 'ปานกลาง',
    tags: ['Finance UI', 'Math'],
    description: 'เขียนฟังก์ชัน <code>calcInstallment(totalAmount, months)</code> เพื่อคำนวณยอดผ่อนต่อเดือน <code>Math.ceil(totalAmount / months)</code> แล้วแสดงข้อความใน <code>#monthly-pay</code> เป็น <code>"เดือนละ [ยอดต่อเดือน] บาท ([months] เดือน)"</code>',
    requirements: ['ปัดเศษขึ้นด้วย <code>Math.ceil(totalAmount / months)</code>', 'แสดงรูปแบบ <code>"เดือนละ [perMonth] บาท ([months] เดือน)"</code>'],
    html: `<div class="app-card"><p id="monthly-pay">-</p></div>`,
    starterJs: `function calcInstallment(totalAmount, months) {\n  // คำนวณและอัปเดต #monthly-pay\n  \n}\ncalcInstallment(12000, 10);`,
    solutionJs: `function calcInstallment(totalAmount, months) {\n  const perMonth = Math.ceil(totalAmount / months);\n  document.getElementById("monthly-pay").textContent = \`เดือนละ \${perMonth} บาท (\${months} เดือน)\`;\n}\ncalcInstallment(12000, 10);`,
    hints: ['ใช้ Math.ceil(totalAmount / months)'],
    testCases: [
      {
        name: 'ยอด 12000 ผ่อน 10 เดือน แสดง "เดือนละ 1200 บาท (10 เดือน)"',
        run: ({ win, doc }) => {
          win.calcInstallment(12000, 10);
          const actual = doc.getElementById('monthly-pay').textContent;
          return { passed: actual === 'เดือนละ 1200 บาท (10 เดือน)', expected: 'เดือนละ 1200 บาท (10 เดือน)', actual };
        }
      },
      {
        name: 'ยอด 1000 ผ่อน 3 เดือน ปัดเศษขึ้นเป็น "เดือนละ 334 บาท (3 เดือน)"',
        run: ({ win, doc }) => {
          win.calcInstallment(1000, 3);
          const actual = doc.getElementById('monthly-pay').textContent;
          return { passed: actual === 'เดือนละ 334 บาท (3 เดือน)', expected: 'เดือนละ 334 บาท (3 เดือน)', actual };
        }
      },
      {
        name: 'ยอด 6000 ผ่อน 6 เดือน แสดง "เดือนละ 1000 บาท (6 เดือน)"',
        run: ({ win, doc }) => {
          win.calcInstallment(6000, 6);
          const actual = doc.getElementById('monthly-pay').textContent;
          return { passed: actual === 'เดือนละ 1000 บาท (6 เดือน)', expected: 'เดือนละ 1000 บาท (6 เดือน)', actual };
        }
      }
    ]
  }),
  makeWebAppProblem({
    num: 30,
    id: 'ch5-30',
    title: 'ระบบสลับบันทึกบุ๊กมาร์กบทความโปรด (Bookmark Toggle List)',
    difficulty: 'ปานกลาง',
    tags: ['Bookmark UI', 'Array & DOM'],
    description: 'เขียนฟังก์ชัน <code>toggleBookmark(title)</code> ถ้ามี <code>title</code> อยู่ใน Array <code>bookmarks</code> แล้วให้ลบออก แต่ถ้ายังไม่มีให้เพิ่มเข้าไป จากนั้นเรนเดอร์ <code>&lt;li&gt;[title]&lt;/li&gt;</code> ลงใน <code>#bookmark-list</code>',
    requirements: ['สลับการเก็บชื่อบทความใน <code>bookmarks</code>', 'เรนเดอร์รายการลงใน <code>#bookmark-list</code>'],
    html: `<div class="app-card"><ul id="bookmark-list"></ul></div>`,
    starterJs: `var bookmarks = [];\nfunction toggleBookmark(title) {\n  // ถ้ามีอยู่แล้วให้เอาออก ถ้ายังไม่มีให้เพิ่ม แล้วเรนเดอร์ #bookmark-list\n  \n}\ntoggleBookmark("สรุปการใช้ Flexbox");`,
    solutionJs: `var bookmarks = [];\nfunction toggleBookmark(title) {\n  if (bookmarks.includes(title)) {\n    bookmarks = bookmarks.filter(b => b !== title);\n  } else {\n    bookmarks.push(title);\n  }\n  document.getElementById("bookmark-list").innerHTML = bookmarks\n    .map(b => \`<li>\${b}</li>\`)\n    .join("");\n}\ntoggleBookmark("สรุปการใช้ Flexbox");`,
    hints: ['เช็ก bookmarks.includes(title) ถ้ามีใช้ .filter() ลบออก ถ้าไม่มีใช้ .push()'],
    testCases: [
      {
        name: 'เพิ่ม 2 บทความ แสดง 2 รายการใน #bookmark-list',
        run: ({ win, doc }) => {
          win.bookmarks = [];
          win.toggleBookmark('บทความ A');
          win.toggleBookmark('บทความ B');
          const count = doc.querySelectorAll('#bookmark-list li').length;
          return { passed: count === 2, expected: 2, actual: count };
        }
      },
      {
        name: 'เรียกซ้ำด้วยชื่อเดิม "บทความ A" จะลบออกจากรายการ เหลือ 1 รายการ',
        run: ({ win, doc }) => {
          win.bookmarks = ['บทความ A', 'บทความ B'];
          win.toggleBookmark('บทความ A');
          const items = doc.querySelectorAll('#bookmark-list li');
          return { passed: items.length === 1 && items[0].textContent === 'บทความ B', expected: 'บทความ B', actual: items[0]?.textContent };
        }
      },
      {
        name: 'ลบออกจนหมด รายการใน #bookmark-list ว่างเปล่า',
        run: ({ win, doc }) => {
          win.bookmarks = ['บทความ B'];
          win.toggleBookmark('บทความ B');
          const count = doc.querySelectorAll('#bookmark-list li').length;
          return { passed: count === 0, expected: 0, actual: count };
        }
      }
    ]
  }),

  // ======================== ยาก (5 ข้อ: 31 - 35) ========================
  makeWebAppProblem({
    num: 31,
    id: 'ch5-31',
    title: 'โปรเจกต์ที่ 1: แอปจัดการงานที่ต้องทำ (Interactive Todo List Web App)',
    difficulty: 'ยาก',
    tags: ['Full Web App', 'Todo List'],
    description: 'สร้างเว็บแอป Todo List สมบูรณ์: คลิก <code>#add-todo-btn</code> เพื่อเพิ่ม <code>&lt;li class="todo-item"&gt;</code> ลงใน <code>#todo-list</code>, คลิกที่ <code>.todo-item</code> เพื่อสลับคลาส <code>completed</code> และอัปเดตจำนวนงานที่ยังไม่เสร็จใน <code>#remaining-count</code>',
    requirements: [
      'เพิ่ม <code>.todo-item</code> เมื่อพิมพ์ใน <code>#todo-input</code> แล้วคลิก <code>#add-todo-btn</code> พร้อมล้างช่อง Input',
      'คลิกที่ <code>.todo-item</code> เพื่อ toggle คลาส <code>completed</code>',
      'อัปเดต <code>#remaining-count</code> ให้แสดงจำนวน <code>.todo-item:not(.completed)</code> เสมอ'
    ],
    html: `<div class="app-card"><input id="todo-input" type="text" /><button id="add-todo-btn">เพิ่มงาน</button><p>งานที่เหลือ: <strong id="remaining-count">0</strong></p><ul id="todo-list"></ul></div>`,
    starterJs: `const todoInput = document.getElementById("todo-input");\nconst addTodoBtn = document.getElementById("add-todo-btn");\nconst todoList = document.getElementById("todo-list");\nconst remainingCount = document.getElementById("remaining-count");\n\n// เขียนโค้ดระบบ Todo List ที่นี่\n`,
    solutionJs: `const todoInput = document.getElementById("todo-input");\nconst addTodoBtn = document.getElementById("add-todo-btn");\nconst todoList = document.getElementById("todo-list");\nconst remainingCount = document.getElementById("remaining-count");\n\nfunction updateCount() {\n  remainingCount.textContent = String(todoList.querySelectorAll(".todo-item:not(.completed)").length);\n}\n\naddTodoBtn.addEventListener("click", () => {\n  const text = todoInput.value.trim();\n  if (!text) return;\n  const li = document.createElement("li");\n  li.className = "todo-item";\n  li.textContent = text;\n  li.addEventListener("click", () => {\n    li.classList.toggle("completed");\n    updateCount();\n  });\n  todoList.appendChild(li);\n  todoInput.value = "";\n  updateCount();\n});`,
    hints: ['สร้างฟังก์ชัน updateCount() ที่นับ .todo-item:not(.completed) แล้วเรียกใช้ทั้งตอนเพิ่มและตอนคลิกสลับสถานะ'],
    testCases: [
      {
        name: 'เพิ่มงาน 2 รายการ แสดงในรายการและงานที่เหลือเป็น "2"',
        run: ({ doc }) => {
          doc.getElementById('todo-list').innerHTML = '';
          const inp = doc.getElementById('todo-input');
          const btn = doc.getElementById('add-todo-btn');
          inp.value = 'งานที่ 1';
          btn.click();
          inp.value = 'งานที่ 2';
          btn.click();
          const rem = doc.getElementById('remaining-count').textContent;
          return { passed: rem === '2', expected: '2', actual: rem };
        }
      },
      {
        name: 'คลิกที่งานแรก มีคลาส completed และงานที่เหลือลดเป็น "1"',
        run: ({ doc }) => {
          const first = doc.querySelector('.todo-item');
          if (first) first.click();
          const rem = doc.getElementById('remaining-count').textContent;
          return { passed: first?.classList.contains('completed') && rem === '1', expected: 'completed=true, remaining="1"', actual: `remaining="${rem}"` };
        }
      },
      {
        name: 'คลิกซ้ำเพื่อยกเลิกสถานะเสร็จ งานที่เหลือกลับมาเป็น "2"',
        run: ({ doc }) => {
          const first = doc.querySelector('.todo-item');
          if (first && first.classList.contains('completed')) first.click();
          const rem = doc.getElementById('remaining-count').textContent;
          return { passed: rem === '2', expected: '2', actual: rem };
        }
      }
    ]
  }),
  makeWebAppProblem({
    num: 32,
    id: 'ch5-32',
    title: 'โปรเจกต์ที่ 2: เว็บแอปบันทึกรายจ่ายและคำนวณยอดรวม (Expense Tracker App)',
    difficulty: 'ยาก',
    tags: ['Full Web App', 'Expense Tracker'],
    description: 'เมื่อกรอกชื่อรายการใน <code>#exp-title</code> และจำนวนเงิน (<code>&gt; 0</code>) ใน <code>#exp-amount</code> แล้วคลิก <code>#add-exp-btn</code> ให้สร้าง <code>&lt;li class="exp-item"&gt;[title] - [amount] บาท&lt;/li&gt;</code> ลงใน <code>#exp-list</code> และอัปเดตยอดรวมสะสมใน <code>#total-amount</code>',
    requirements: [
      'ตรวจสอบว่าชื่อไม่ว่าง และจำนวนเงิน <code>&gt; 0</code>',
      'เพิ่ม <code>.exp-item</code> ลงใน <code>#exp-list</code>, อัปเดต <code>#total-amount</code> และล้างช่อง Input ทั้งคู่'
    ],
    html: `<div class="app-card"><input id="exp-title" type="text" /><input id="exp-amount" type="number" /><button id="add-exp-btn">+ เพิ่มรายจ่าย</button><ul id="exp-list"></ul><p>รวม: <strong id="total-amount">0</strong> บาท</p></div>`,
    starterJs: `const titleInput = document.getElementById("exp-title");\nconst amountInput = document.getElementById("exp-amount");\nconst addBtn = document.getElementById("add-exp-btn");\nconst expList = document.getElementById("exp-list");\nconst totalEl = document.getElementById("total-amount");\nvar total = 0;\n// เขียนโค้ดระบบบันทึกรายจ่ายที่นี่\n`,
    solutionJs: `const titleInput = document.getElementById("exp-title");\nconst amountInput = document.getElementById("exp-amount");\nconst addBtn = document.getElementById("add-exp-btn");\nconst expList = document.getElementById("exp-list");\nconst totalEl = document.getElementById("total-amount");\nvar total = 0;\n\naddBtn.addEventListener("click", () => {\n  const title = titleInput.value.trim();\n  const amount = Number(amountInput.value);\n  if (!title || !amount || amount <= 0) return;\n  const li = document.createElement("li");\n  li.className = "exp-item";\n  li.textContent = \`\${title} - \${amount} บาท\`;\n  expList.appendChild(li);\n  total += amount;\n  totalEl.textContent = String(total);\n  titleInput.value = "";\n  amountInput.value = "";\n});`,
    hints: ['บวก amount เข้ากับ total แล้วแสดงใน totalEl.textContent'],
    testCases: [
      {
        name: 'เพิ่มรายการ "ค่ากาแฟ" 65 บาท แสดงถูกต้องและยอดรวมเป็น "65"',
        run: ({ doc }) => {
          doc.getElementById('exp-title').value = 'ค่ากาแฟ';
          doc.getElementById('exp-amount').value = '65';
          doc.getElementById('add-exp-btn').click();
          const tot = doc.getElementById('total-amount').textContent;
          return { passed: tot === '65', expected: '65', actual: tot };
        }
      },
      {
        name: 'เพิ่มรายการที่ 2 "ค่าข้าว" 135 บาท ยอดรวมสะสมเป็น "200"',
        run: ({ doc }) => {
          doc.getElementById('exp-title').value = 'ค่าข้าว';
          doc.getElementById('exp-amount').value = '135';
          doc.getElementById('add-exp-btn').click();
          const tot = doc.getElementById('total-amount').textContent;
          return { passed: tot === '200', expected: '200', actual: tot };
        }
      },
      {
        name: 'กรณีไม่กรอกชื่อรายการ ยอดรวมและจำนวนรายการไม่เปลี่ยนแปลง',
        run: ({ doc }) => {
          const before = doc.querySelectorAll('.exp-item').length;
          doc.getElementById('exp-title').value = '';
          doc.getElementById('exp-amount').value = '500';
          doc.getElementById('add-exp-btn').click();
          const after = doc.querySelectorAll('.exp-item').length;
          return { passed: before === after, expected: before, actual: after };
        }
      }
    ]
  }),
  makeWebAppProblem({
    num: 33,
    id: 'ch5-33',
    title: 'โปรเจกต์ที่ 3: ระบบตะกร้าสินค้าออนไลน์ (Shopping Cart Web App)',
    difficulty: 'ยาก',
    tags: ['Full Web App', 'Shopping Cart'],
    description: 'เขียนฟังก์ชัน <code>addToCart(name, price)</code> เพื่อเพิ่มสินค้าเข้าตะกร้า และฟังก์ชัน <code>clearCart()</code> เพื่อล้างตะกร้า โดยอัปเดตรายการใน <code>#cart-list</code>, จำนวนชิ้นรวมใน <code>#cart-count</code> และราคารวมใน <code>#cart-total</code>',
    requirements: [
      '<code>addToCart(name, price)</code>: เพิ่มสินค้าเข้า Array <code>cart</code> แล้วอัปเดตทั้ง 3 จุดบน DOM',
      '<code>clearCart()</code>: ล้างตะกร้าให้ว่างและรีเซ็ตจำนวนชิ้นกับราคารวมเป็น <code>"0"</code>'
    ],
    html: `<div class="app-card"><p>จำนวน: <strong id="cart-count">0</strong> ชิ้น | รวม: <strong id="cart-total">0</strong> บาท</p><ul id="cart-list"></ul></div>`,
    starterJs: `var cart = [];\nfunction addToCart(name, price) {\n  // เพิ่มสินค้าเข้า cart และอัปเดต DOM\n  \n}\nfunction clearCart() {\n  // ล้างตะกร้าและอัปเดต DOM\n  \n}`,
    solutionJs: `var cart = [];\nfunction renderCart() {\n  document.getElementById("cart-count").textContent = String(cart.length);\n  const sum = cart.reduce((acc, item) => acc + item.price, 0);\n  document.getElementById("cart-total").textContent = String(sum);\n  document.getElementById("cart-list").innerHTML = cart\n    .map(item => \`<li>\${item.name} (\${item.price})</li>\`)\n    .join("");\n}\nfunction addToCart(name, price) {\n  cart.push({ name, price });\n  renderCart();\n}\nfunction clearCart() {\n  cart = [];\n  renderCart();\n}`,
    hints: ['สร้างฟังก์ชันช่วย renderCart() เพื่ออัปเดตทั้ง #cart-count, #cart-total และ #cart-list'],
    testCases: [
      {
        name: 'หยิบสินค้า 2 ชิ้น (500 และ 1200) จำนวนเป็น "2" และราคารวมเป็น "1700"',
        run: ({ win, doc }) => {
          win.clearCart();
          win.addToCart('เมาส์', 500);
          win.addToCart('คีย์บอร์ด', 1200);
          const cnt = doc.getElementById('cart-count').textContent;
          const tot = doc.getElementById('cart-total').textContent;
          return { passed: cnt === '2' && tot === '1700', expected: '2, 1700', actual: `${cnt}, ${tot}` };
        }
      },
      {
        name: 'แสดงรายการ <li> ใน #cart-list ครบ 2 รายการ',
        run: ({ doc }) => {
          const items = doc.querySelectorAll('#cart-list li').length;
          return { passed: items === 2, expected: 2, actual: items };
        }
      },
      {
        name: 'เรียก clearCart() รีเซ็ตจำนวนและราคารวมกลับเป็น "0"',
        run: ({ win, doc }) => {
          win.clearCart();
          const cnt = doc.getElementById('cart-count').textContent;
          const tot = doc.getElementById('cart-total').textContent;
          return { passed: cnt === '0' && tot === '0', expected: '0, 0', actual: `${cnt}, ${tot}` };
        }
      }
    ]
  }),
  makeWebAppProblem({
    num: 34,
    id: 'ch5-34',
    title: 'โปรเจกต์ที่ 4: เว็บแอปทำแบบทดสอบและสรุปคะแนน (Interactive Quiz App)',
    difficulty: 'ยาก',
    tags: ['Full Web App', 'Quiz Engine'],
    description: 'เขียนฟังก์ชัน <code>submitAnswer(choice)</code> เพื่อตรวจคำตอบกับ <code>QUESTIONS[currentIndex].answer</code> ถ้าถูกบวก <code>score</code> ขึ้น 1 แล้วเลื่อนไปข้อถัดไป เมื่อทำครบทุกข้อให้แสดง <code>"จบแบบทดสอบ! คุณได้ [score]/[จำนวนข้อทั้งหมด] คะแนน"</code> ใน <code>#question-text</code>',
    requirements: ['ตรวจคำตอบ เพิ่มคะแนน เลื่อนข้อ และเรียก <code>renderQuestion()</code>'],
    html: `<div class="app-card"><p id="question-text"></p><div id="choices-box"></div></div>`,
    starterJs: `const QUESTIONS = [\n  { q: "คำสั่งใดเลือก Element ด้วย ID?", choices: ["getElementById", "getId"], answer: "getElementById" },\n  { q: "เมธอดใดใช้กรอง Array?", choices: ["map", "filter"], answer: "filter" }\n];\nvar currentIndex = 0;\nvar score = 0;\nfunction renderQuestion() {\n  const qEl = document.getElementById("question-text");\n  const cBox = document.getElementById("choices-box");\n  if (currentIndex >= QUESTIONS.length) {\n    qEl.textContent = \`จบแบบทดสอบ! คุณได้ \${score}/\${QUESTIONS.length} คะแนน\`;\n    cBox.innerHTML = "";\n    return;\n  }\n  qEl.textContent = QUESTIONS[currentIndex].q;\n}\nfunction submitAnswer(choice) {\n  // ตรวจคำตอบ เพิ่มคะแนน เลื่อน currentIndex และเรียก renderQuestion()\n  \n}\nrenderQuestion();`,
    solutionJs: `const QUESTIONS = [\n  { q: "คำสั่งใดเลือก Element ด้วย ID?", choices: ["getElementById", "getId"], answer: "getElementById" },\n  { q: "เมธอดใดใช้กรอง Array?", choices: ["map", "filter"], answer: "filter" }\n];\nvar currentIndex = 0;\nvar score = 0;\nfunction renderQuestion() {\n  const qEl = document.getElementById("question-text");\n  const cBox = document.getElementById("choices-box");\n  if (currentIndex >= QUESTIONS.length) {\n    qEl.textContent = \`จบแบบทดสอบ! คุณได้ \${score}/\${QUESTIONS.length} คะแนน\`;\n    cBox.innerHTML = "";\n    return;\n  }\n  qEl.textContent = QUESTIONS[currentIndex].q;\n}\nfunction submitAnswer(choice) {\n  if (currentIndex >= QUESTIONS.length) return;\n  if (choice === QUESTIONS[currentIndex].answer) score++;\n  currentIndex++;\n  renderQuestion();\n}\nrenderQuestion();`,
    hints: ['เช็ก if (choice === QUESTIONS[currentIndex].answer) score++; แล้ว currentIndex++; renderQuestion();'],
    testCases: [
      {
        name: 'ตอบข้อแรกถูก เลื่อนไปยังคำถามข้อที่ 2',
        run: ({ win, doc }) => {
          win.currentIndex = 0;
          win.score = 0;
          win.renderQuestion();
          win.submitAnswer('getElementById');
          const actual = doc.getElementById('question-text').textContent;
          return { passed: actual === 'เมธอดใดใช้กรอง Array?', expected: 'เมธอดใดใช้กรอง Array?', actual };
        }
      },
      {
        name: 'ตอบถูกทั้ง 2 ข้อ แสดง "จบแบบทดสอบ! คุณได้ 2/2 คะแนน"',
        run: ({ win, doc }) => {
          win.currentIndex = 0;
          win.score = 0;
          win.renderQuestion();
          win.submitAnswer('getElementById');
          win.submitAnswer('filter');
          const actual = doc.getElementById('question-text').textContent;
          return { passed: actual === 'จบแบบทดสอบ! คุณได้ 2/2 คะแนน', expected: 'จบแบบทดสอบ! คุณได้ 2/2 คะแนน', actual };
        }
      },
      {
        name: 'ตอบถูก 1 ข้อ ผิด 1 ข้อ แสดง "จบแบบทดสอบ! คุณได้ 1/2 คะแนน"',
        run: ({ win, doc }) => {
          win.currentIndex = 0;
          win.score = 0;
          win.renderQuestion();
          win.submitAnswer('getElementById');
          win.submitAnswer('map');
          const actual = doc.getElementById('question-text').textContent;
          return { passed: actual === 'จบแบบทดสอบ! คุณได้ 1/2 คะแนน', expected: 'จบแบบทดสอบ! คุณได้ 1/2 คะแนน', actual };
        }
      }
    ]
  }),
  makeWebAppProblem({
    num: 35,
    id: 'ch5-35',
    title: 'โปรเจกต์ที่ 5: เว็บแอปสมุดรายชื่อผู้ติดต่อพร้อมระบบค้นหาสด (Contact Manager App)',
    difficulty: 'ยาก',
    tags: ['Full Web App', 'CRUD & Search'],
    description: 'เขียนฟังก์ชัน <code>addContact(name, phone)</code> เพื่อเพิ่มผู้ติดต่อลงใน <code>contacts</code> และฟังก์ชัน <code>renderContacts(keyword = "")</code> เพื่อกรองตามชื่อ (ไม่สนพิมพ์เล็ก-ใหญ่) แล้วแสดง <code>&lt;li class="contact-row"&gt;[name]: [phone]&lt;/li&gt;</code> ใน <code>#contact-list</code>',
    requirements: [
      '<code>addContact(name, phone)</code> เพิ่มข้อมูลแล้วเรียก <code>renderContacts("")</code>',
      '<code>renderContacts(keyword)</code> กรองรายชื่อที่มี <code>keyword</code> แล้วเรนเดอร์ <code>.contact-row</code>'
    ],
    html: `<div class="app-card"><ul id="contact-list"></ul></div>`,
    starterJs: `var contacts = [\n  { name: "Chinnakrit", phone: "081-111-2222" }\n];\nfunction renderContacts(keyword = "") {\n  // กรอง contacts ตาม keyword แล้วแสดง <li class="contact-row">[name]: [phone]</li>\n  \n}\nfunction addContact(name, phone) {\n  // เพิ่มผู้ติดต่อใหม่และอัปเดตหน้าเว็บ\n  \n}\nrenderContacts("");`,
    solutionJs: `var contacts = [\n  { name: "Chinnakrit", phone: "081-111-2222" }\n];\nfunction renderContacts(keyword = "") {\n  const q = keyword.trim().toLowerCase();\n  const list = contacts.filter(c => c.name.toLowerCase().includes(q));\n  document.getElementById("contact-list").innerHTML = list\n    .map(c => \`<li class="contact-row">\${c.name}: \${c.phone}</li>\`)\n    .join("");\n}\nfunction addContact(name, phone) {\n  if (!name.trim() || !phone.trim()) return;\n  contacts.push({ name: name.trim(), phone: phone.trim() });\n  renderContacts("");\n}\nrenderContacts("");`,
    hints: ['ใน addContact ให้ contacts.push({ name, phone }) แล้วเรียก renderContacts("")'],
    testCases: [
      {
        name: 'เพิ่มผู้ติดต่อใหม่ แสดงใน #contact-list รูปแบบ "[name]: [phone]"',
        run: ({ win, doc }) => {
          win.contacts = [{ name: 'Chinnakrit', phone: '081-111-2222' }];
          win.addContact('Suda', '089-999-8888');
          const rows = doc.querySelectorAll('#contact-list .contact-row');
          return { passed: rows.length === 2 && rows[1].textContent === 'Suda: 089-999-8888', expected: 'Suda: 089-999-8888', actual: rows[1]?.textContent };
        }
      },
      {
        name: 'ค้นหาด้วย renderContacts("chin") พบ 1 รายการ ("Chinnakrit: 081-111-2222")',
        run: ({ win, doc }) => {
          win.renderContacts('chin');
          const rows = doc.querySelectorAll('#contact-list .contact-row');
          return { passed: rows.length === 1 && rows[0].textContent === 'Chinnakrit: 081-111-2222', expected: 'Chinnakrit: 081-111-2222', actual: rows[0]?.textContent };
        }
      },
      {
        name: 'ค้นหาด้วยคำว่าง "" กลับมาแสดงครบทุกรายการ',
        run: ({ win, doc }) => {
          win.renderContacts('');
          const rows = doc.querySelectorAll('#contact-list .contact-row');
          return { passed: rows.length === 2, expected: 2, actual: rows.length };
        }
      }
    ]
  })
];

window.CHAPTER_5 = {
  id: 'ch-5',
  number: 5,
  title: 'บทที่ 5: การสร้างระบบเว็บจริง — Mini Web Components & Full Web Apps',
  shortTitle: 'บทที่ 5: สร้างระบบเว็บจริง',
  icon: '🚀',
  description:
    'บทสรุปของการฝึกทำเว็บ! รวมความรู้ทั้ง JavaScript Logic, Array/Object, DOM และ Events มาสร้าง UI Components และเว็บแอปพลิเคชันที่ทำงานได้ครบวงจร',
  tags: ['State -> Render Pattern', 'Modal & Accordion', 'Live Filter & Pagination', 'Shopping Cart', 'Todo & Quiz Apps'],
  lesson: {
    overview:
      'ในการสร้างเว็บแอปพลิเคชันจริง เราจะใช้แนวคิด "State -> Render" คือเก็บข้อมูลของแอปไว้ในตัวแปร (เช่น Array ของงานที่ต้องทำ หรือรายการในตะกร้าสินค้า) เมื่อผู้ใช้คลิกหรือพิมพ์ข้อมูล เราจะอัปเดตตัวแปร State นั้น แล้วเรียกฟังก์ชัน render() เพื่อวาดหน้าเว็บใหม่ให้ตรงกับข้อมูลล่าสุดเสมอ',
    mustUse: [
      {
        syntax: 'State -> Render Pattern',
        usage: 'แยกตัวแปรเก็บข้อมูล (State) ออกจากฟังก์ชันอัปเดตหน้าจอ (render) เพื่อให้โค้ดดูแลง่าย',
        example: 'let cart = [];\nfunction addToCart(item) {\n  cart.push(item);\n  renderCart();\n}'
      },
      {
        syntax: 'Modal / Accordion / Tabs Toggle',
        usage: 'ใช้ classList.add("hidden") / classList.remove("hidden") หรือ .toggle("active") ควบคุมการเปิด-ปิดส่วนประกอบหน้าเว็บ',
        example: 'modal.classList.remove("hidden"); // เปิดป๊อปอัป'
      },
      {
        syntax: 'Live Filter & Sort Component',
        usage: 'นำค่าจากช่องค้นหาหรือตัวเลือกมา .filter() และ .sort() ข้อมูลก่อนเรนเดอร์ลงใน DOM',
        example: 'const filtered = items.filter(i => i.name.toLowerCase().includes(q));'
      },
      {
        syntax: 'Pagination (.slice)',
        usage: 'แบ่งข้อมูลจำนวนมากออกเป็นหน้าๆ ด้วย array.slice(start, start + pageSize)',
        example: 'const start = (page - 1) * pageSize;\nconst pageData = allData.slice(start, start + pageSize);'
      },
      {
        syntax: 'Dynamic List Item with Event Listener',
        usage: 'สร้าง <li> ด้วย createElement พร้อมผูก click event ให้แต่ละรายการทำงานได้ทันที',
        example: 'const li = document.createElement("li");\nli.addEventListener("click", () => li.classList.toggle("completed"));'
      }
    ],
    examples: [
      {
        title: 'ตัวอย่างที่ 1: โครงสร้างมาตรฐานของเว็บแอป (State -> Render)',
        explanation: 'เมื่อเพิ่มข้อมูลเข้า Array แล้ว เราเพียงเรียกฟังก์ชัน render() เพื่อวาดรายการและสรุปยอดใหม่ทั้งหมด',
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
        title: 'ตัวอย่างที่ 2: การทำระบบแบ่งหน้า (Pagination)',
        explanation: 'คำนวณตำแหน่งเริ่มต้นจากเลขหน้า แล้วใช้ .slice() ตัดเฉพาะข้อมูลของหน้านั้นมาแสดง',
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
        title: 'ตัวอย่างที่ 3: การทำระบบ Todo ที่คลิกขีดฆ่าและนับงานที่เหลือ',
        explanation: 'ใช้ Selector .todo-item:not(.completed) เพื่อนับเฉพาะงานที่ยังไม่ถูกขีดฆ่าว่าเสร็จ',
        code: `function updateRemaining() {
  const left = document.querySelectorAll(".todo-item:not(.completed)").length;
  document.getElementById("remaining-count").textContent = String(left);
}`
      }
    ]
  },
  problems: CHAPTER_5_PROBLEMS
};
