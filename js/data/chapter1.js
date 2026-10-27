/**
 * บทที่ 1: พื้นฐาน JavaScript & Logic
 * ประกอบด้วย: เนื้อหาบทเรียน + คำสั่งที่ต้องใช้ + ตัวอย่างโค้ด + โจทย์ 35 ข้อ (ง่าย 20, ปานกลาง 10, ยาก 5)
 */

function makeLogicProblem({
  num,
  id,
  title,
  difficulty,
  tags,
  description,
  requirements,
  fnName,
  params,
  sampleCall,
  solutionBody,
  hints,
  tests
}) {
  const starterJs = `function ${fnName}(${params}) {
  // เขียนโค้ดของคุณที่นี่
  
}

// ทดลองรันและแสดงผลในหน้า Preview
const previewResult = ${sampleCall};
console.log("ผลลัพธ์จาก ${fnName}:", previewResult);
const outEl = document.getElementById("output-val");
if (outEl) outEl.textContent = String(previewResult ?? "ยังไม่มีค่าที่ return");`;

  const solutionJs = `function ${fnName}(${params}) {
${solutionBody}
}

const previewResult = ${sampleCall};
console.log("ผลลัพธ์จาก ${fnName}:", previewResult);
const outEl = document.getElementById("output-val");
if (outEl) outEl.textContent = String(previewResult ?? "");`;

  const html = `<div class="preview-card">
  <div class="badge">${difficulty} • ข้อที่ ${num}</div>
  <h3>🧪 ทดสอบฟังก์ชัน <code>${fnName}()</code></h3>
  <p class="call-text">คำสั่งที่เรียก: <code>${sampleCall}</code></p>
  <div class="result-box">ผลลัพธ์: <strong id="output-val">-</strong></div>
</div>`;

  const css = `body { font-family: 'Inter', sans-serif; padding: 20px; background: #f8fafc; color: #0f172a; margin: 0; }
.preview-card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
.badge { display: inline-block; font-size: 12px; font-weight: 700; padding: 3px 10px; border-radius: 99px; background: #dbeafe; color: #1d4ed8; margin-bottom: 10px; }
h3 { margin: 0 0 8px; font-size: 16px; }
.call-text { font-size: 13px; color: #475569; margin: 0 0 12px; }
code { background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-family: monospace; }
.result-box { background: #f0fdf4; border: 1px solid #bbf7d0; padding: 12px; border-radius: 8px; color: #166534; font-size: 15px; }`;

  return {
    id,
    number: num,
    chapterId: 'ch-1',
    subjectId: 'frontend',
    moduleId: 'ch-1',
    title,
    difficulty,
    tags,
    defaultTab: 'js',
    description,
    requirements,
    starterCode: { html, css, js: starterJs },
    hints,
    solution: { html, css, js: solutionJs },
    testCases: tests.map(t => ({
      name: t.name,
      run: ({ win }) => {
        const fn = win[fnName];
        if (typeof fn !== 'function') {
          return { passed: false, expected: t.expected, actual: `ไม่พบฟังก์ชัน ${fnName}` };
        }
        const actual = fn(...t.args);
        const passed = JSON.stringify(actual) === JSON.stringify(t.expected);
        return {
          passed,
          expected: typeof t.expected === 'object' ? JSON.stringify(t.expected) : String(t.expected),
          actual: typeof actual === 'object' ? JSON.stringify(actual) : String(actual)
        };
      }
    }))
  };
}

const CHAPTER_1_PROBLEMS = [
  // ======================== ง่าย (20 ข้อ: 1 - 20) ========================
  makeLogicProblem({
    num: 1,
    id: 'ch1-01',
    title: 'หาผลบวกของตัวเลขสองจำนวน',
    difficulty: 'ง่าย',
    tags: ['Variables', 'Math', 'return'],
    description: 'เขียนฟังก์ชัน <code>addNumbers(a, b)</code> ที่รับตัวเลข 2 ตัว แล้วคืนค่าผลบวกของตัวเลขทั้งสอง',
    requirements: ['รับพารามิเตอร์ <code>a</code> และ <code>b</code>', 'คืนค่า (<code>return</code>) ผลบวก <code>a + b</code>'],
    fnName: 'addNumbers',
    params: 'a, b',
    sampleCall: 'addNumbers(15, 25)',
    solutionBody: '  return a + b;',
    hints: ['ใช้เครื่องหมาย + บวกค่า a และ b', 'เขียน return a + b; ในฟังก์ชัน'],
    tests: [
      { name: 'บวกเลขจำนวนเต็มบวก 15 + 25 = 40', args: [15, 25], expected: 40 },
      { name: 'บวกเลขที่มีค่า 0: 100 + 0 = 100', args: [100, 0], expected: 100 },
      { name: 'บวกเลขติดลบ: -10 + 30 = 20', args: [-10, 30], expected: 20 }
    ]
  }),
  makeLogicProblem({
    num: 2,
    id: 'ch1-02',
    title: 'คำนวณพื้นที่สี่เหลี่ยมผืนผ้า',
    difficulty: 'ง่าย',
    tags: ['Math', 'Functions'],
    description: 'เขียนฟังก์ชัน <code>getRectangleArea(width, height)</code> เพื่อคำนวณพื้นที่สี่เหลี่ยมผืนผ้า (กว้าง × ยาว)',
    requirements: ['คำนวณผลคูณของ <code>width</code> และ <code>height</code>', 'คืนค่าพื้นที่ที่คำนวณได้'],
    fnName: 'getRectangleArea',
    params: 'width, height',
    sampleCall: 'getRectangleArea(8, 5)',
    solutionBody: '  return width * height;',
    hints: ['พื้นที่สี่เหลี่ยมผืนผ้า = กว้าง * ยาว', 'เขียน return width * height;'],
    tests: [
      { name: 'กว้าง 8 ยาว 5 ได้พื้นที่ 40', args: [8, 5], expected: 40 },
      { name: 'กว้าง 12 ยาว 10 ได้พื้นที่ 120', args: [12, 10], expected: 120 },
      { name: 'กรณีด้านใดด้านหนึ่งเป็น 0 ได้ 0', args: [0, 15], expected: 0 }
    ]
  }),
  makeLogicProblem({
    num: 3,
    id: 'ch1-03',
    title: 'แปลงจำนวนนาทีให้เป็นวินาที',
    difficulty: 'ง่าย',
    tags: ['Math', 'Operators'],
    description: 'เขียนฟังก์ชัน <code>minutesToSeconds(minutes)</code> เพื่อแปลงเวลาจากนาทีเป็นวินาที (1 นาที = 60 วินาที)',
    requirements: ['นำ <code>minutes</code> มาคูณด้วย 60', 'คืนค่าจำนวนวินาที'],
    fnName: 'minutesToSeconds',
    params: 'minutes',
    sampleCall: 'minutesToSeconds(5)',
    solutionBody: '  return minutes * 60;',
    hints: ['1 นาทีมี 60 วินาที', 'เขียน return minutes * 60;'],
    tests: [
      { name: '5 นาที เท่ากับ 300 วินาที', args: [5], expected: 300 },
      { name: '1 นาที เท่ากับ 60 วินาที', args: [1], expected: 60 },
      { name: '0 นาที เท่ากับ 0 วินาที', args: [0], expected: 0 }
    ]
  }),
  makeLogicProblem({
    num: 4,
    id: 'ch1-04',
    title: 'สร้างข้อความทักทายชื่อผู้ใช้',
    difficulty: 'ง่าย',
    tags: ['Strings', 'Template Literal'],
    description: 'เขียนฟังก์ชัน <code>greetUser(name)</code> เพื่อคืนค่าข้อความทักทายในรูปแบบ <code>"สวัสดีคุณ [name] ยินดีต้อนรับ!"</code>',
    requirements: ['ใช้ Template Literal หรือการต่อข้อความ', 'คืนค่าข้อความ <code>"สวัสดีคุณ [name] ยินดีต้อนรับ!"</code>'],
    fnName: 'greetUser',
    params: 'name',
    sampleCall: 'greetUser("ชินกฤต")',
    solutionBody: '  return `สวัสดีคุณ ${name} ยินดีต้อนรับ!`;',
    hints: ['ใช้เครื่องหมาย Backtick (`) ครอบข้อความ', 'แทรกตัวแปรด้วย ${name}'],
    tests: [
      { name: 'ทักทายคุณ ชินกฤต', args: ['ชินกฤต'], expected: 'สวัสดีคุณ ชินกฤต ยินดีต้อนรับ!' },
      { name: 'ทักทายคุณ สมชาย', args: ['สมชาย'], expected: 'สวัสดีคุณ สมชาย ยินดีต้อนรับ!' },
      { name: 'ทักทายชื่อภาษาอังกฤษ Alex', args: ['Alex'], expected: 'สวัสดีคุณ Alex ยินดีต้อนรับ!' }
    ]
  }),
  makeLogicProblem({
    num: 5,
    id: 'ch1-05',
    title: 'คำนวณราคารวมสินค้าและสร้างป้ายราคา',
    difficulty: 'ง่าย',
    tags: ['Math', 'Template Literal'],
    description: 'เขียนฟังก์ชัน <code>formatOrderTotal(price, qty)</code> ที่คำนวณราคารวม (<code>price * qty</code>) แล้วคืนค่าข้อความ <code>"รวมทั้งหมด [total] บาท"</code>',
    requirements: ['คำนวณ <code>total = price * qty</code>', 'คืนค่าข้อความ <code>"รวมทั้งหมด [total] บาท"</code>'],
    fnName: 'formatOrderTotal',
    params: 'price, qty',
    sampleCall: 'formatOrderTotal(120, 3)',
    solutionBody: '  return `รวมทั้งหมด ${price * qty} บาท`;',
    hints: ['คำนวณ price * qty ก่อน', 'ส่งคืนข้อความ `รวมทั้งหมด ${price * qty} บาท`'],
    tests: [
      { name: 'ราคา 120 จำนวน 3 ชิ้น ได้ "รวมทั้งหมด 360 บาท"', args: [120, 3], expected: 'รวมทั้งหมด 360 บาท' },
      { name: 'ราคา 50 จำนวน 1 ชิ้น ได้ "รวมทั้งหมด 50 บาท"', args: [50, 1], expected: 'รวมทั้งหมด 50 บาท' },
      { name: 'ราคา 99 จำนวน 0 ชิ้น ได้ "รวมทั้งหมด 0 บาท"', args: [99, 0], expected: 'รวมทั้งหมด 0 บาท' }
    ]
  }),
  makeLogicProblem({
    num: 6,
    id: 'ch1-06',
    title: 'ตรวจสอบว่าเป็นเลขคู่หรือไม่ (Modulo %)',
    difficulty: 'ง่าย',
    tags: ['Modulo %', 'Boolean'],
    description: 'เขียนฟังก์ชัน <code>isEven(n)</code> ที่คืนค่า <code>true</code> ถ้า <code>n</code> เป็นเลขคู่ และคืนค่า <code>false</code> ถ้าเป็นเลขคี่',
    requirements: ['ใช้เครื่องหมายหารเอาเศษ <code>% 2</code>', 'คืนค่าเป็น Boolean (<code>true</code> หรือ <code>false</code>)'],
    fnName: 'isEven',
    params: 'n',
    sampleCall: 'isEven(10)',
    solutionBody: '  return n % 2 === 0;',
    hints: ['เลขคู่เมื่อหารด้วย 2 จะเหลือเศษ 0', 'ใช้ n % 2 === 0'],
    tests: [
      { name: '10 เป็นเลขคู่ (true)', args: [10], expected: true },
      { name: '7 เป็นเลขคี่ (false)', args: [7], expected: false },
      { name: '0 เป็นเลขคู่ (true)', args: [0], expected: true }
    ]
  }),
  makeLogicProblem({
    num: 7,
    id: 'ch1-07',
    title: 'ตรวจสอบเกณฑ์อายุเข้าใช้งาน (Comparison)',
    difficulty: 'ง่าย',
    tags: ['Comparison', 'if/else'],
    description: 'เขียนฟังก์ชัน <code>canAccessSite(age)</code> ที่คืนค่า <code>"อนุญาต"</code> ถ้าอายุตั้งแต่ 18 ปีขึ้นไป และคืนค่า <code>"ไม่อนุญาต"</code> ถ้าอายุน้อยกว่า 18 ปี',
    requirements: ['ตรวจสอบ <code>age &gt;= 18</code>', 'คืนค่าข้อความ <code>"อนุญาต"</code> หรือ <code>"ไม่อนุญาต"</code>'],
    fnName: 'canAccessSite',
    params: 'age',
    sampleCall: 'canAccessSite(20)',
    solutionBody: '  return age >= 18 ? "อนุญาต" : "ไม่อนุญาต";',
    hints: ['ใช้ if (age >= 18) return "อนุญาต";', 'ไม่เช่นนั้น return "ไม่อนุญาต";'],
    tests: [
      { name: 'อายุ 20 ปี ได้ "อนุญาต"', args: [20], expected: 'อนุญาต' },
      { name: 'อายุ 18 ปีพอดี ได้ "อนุญาต"', args: [18], expected: 'อนุญาต' },
      { name: 'อายุ 15 ปี ได้ "ไม่อนุญาต"', args: [15], expected: 'ไม่อนุญาต' }
    ]
  }),
  makeLogicProblem({
    num: 8,
    id: 'ch1-08',
    title: 'นับจำนวนตัวอักษรในข้อความ (.length)',
    difficulty: 'ง่าย',
    tags: ['Strings', '.length'],
    description: 'เขียนฟังก์ชัน <code>getTextLength(text)</code> เพื่อคืนค่าจำนวนตัวอักษรทั้งหมดใน <code>text</code>',
    requirements: ['ใช้คุณสมบัติ <code>.length</code> ของ String', 'คืนค่าเป็นตัวเลขจำนวนตัวอักษร'],
    fnName: 'getTextLength',
    params: 'text',
    sampleCall: 'getTextLength("Frontend")',
    solutionBody: '  return text.length;',
    hints: ['String ทุกตัวมีพร็อพเพอร์ตี้ .length', 'เขียน return text.length;'],
    tests: [
      { name: '"Frontend" มี 8 ตัวอักษร', args: ['Frontend'], expected: 8 },
      { name: 'ข้อความว่าง "" มี 0 ตัวอักษร', args: [''], expected: 0 },
      { name: '"JS 101" มี 6 ตัวอักษร (รวมช่องว่าง)', args: ['JS 101'], expected: 6 }
    ]
  }),
  makeLogicProblem({
    num: 9,
    id: 'ch1-09',
    title: 'แปลงรหัสคูปองเป็นตัวพิมพ์ใหญ่ทั้งหมด',
    difficulty: 'ง่าย',
    tags: ['Strings', 'toUpperCase'],
    description: 'เขียนฟังก์ชัน <code>formatCouponCode(code)</code> ที่ตัดช่องว่างหน้า-หลังออก แล้วแปลงตัวอักษรเป็นตัวพิมพ์ใหญ่ทั้งหมด',
    requirements: ['ใช้ <code>.trim()</code> ตัดช่องว่างขอบหน้า-หลัง', 'ใช้ <code>.toUpperCase()</code> แปลงเป็นตัวพิมพ์ใหญ่'],
    fnName: 'formatCouponCode',
    params: 'code',
    sampleCall: 'formatCouponCode("  save20  ")',
    solutionBody: '  return code.trim().toUpperCase();',
    hints: ['เรียกเมธอดต่อกันได้เลย: code.trim().toUpperCase()'],
    tests: [
      { name: '"  save20  " แปลงเป็น "SAVE20"', args: ['  save20  '], expected: 'SAVE20' },
      { name: '"welcome" แปลงเป็น "WELCOME"', args: ['welcome'], expected: 'WELCOME' },
      { name: '" Sale50 " แปลงเป็น "SALE50"', args: [' Sale50 '], expected: 'SALE50' }
    ]
  }),
  makeLogicProblem({
    num: 10,
    id: 'ch1-10',
    title: 'ทำความสะอาดชื่อผู้ใช้งาน (trim & toLowerCase)',
    difficulty: 'ง่าย',
    tags: ['Strings', 'trim', 'toLowerCase'],
    description: 'เขียนฟังก์ชัน <code>cleanUsername(rawName)</code> เพื่อตัดช่องว่างหน้า-หลัง และแปลงเป็นตัวพิมพ์เล็กทั้งหมดสำหรับเก็บในระบบ',
    requirements: ['ตัดช่องว่างหน้า-หลังด้วย <code>.trim()</code>', 'แปลงเป็นตัวพิมพ์เล็กด้วย <code>.toLowerCase()</code>'],
    fnName: 'cleanUsername',
    params: 'rawName',
    sampleCall: 'cleanUsername("  Chinnakrit_Dev  ")',
    solutionBody: '  return rawName.trim().toLowerCase();',
    hints: ['ใช้ rawName.trim().toLowerCase()'],
    tests: [
      { name: '"  Chinnakrit_Dev  " ได้ "chinnakrit_dev"', args: ['  Chinnakrit_Dev  '], expected: 'chinnakrit_dev' },
      { name: '"ADMIN" ได้ "admin"', args: ['ADMIN'], expected: 'admin' },
      { name: '" User01 " ได้ "user01"', args: [' User01 '], expected: 'user01' }
    ]
  }),
  makeLogicProblem({
    num: 11,
    id: 'ch1-11',
    title: 'เชื่อมชื่อจริงและนามสกุลเข้าด้วยกัน',
    difficulty: 'ง่าย',
    tags: ['Strings', 'Concatenation'],
    description: 'เขียนฟังก์ชัน <code>getFullName(firstName, lastName)</code> ที่คืนค่าชื่อและนามสกุลคั่นด้วยช่องว่าง 1 ช่อง',
    requirements: ['เชื่อม <code>firstName</code> และ <code>lastName</code> โดยมีเว้นวรรคคั่นกลาง'],
    fnName: 'getFullName',
    params: 'firstName, lastName',
    sampleCall: 'getFullName("ชินกฤต", "ธนกรกุล")',
    solutionBody: '  return `${firstName} ${lastName}`;',
    hints: ['ใช้ `${firstName} ${lastName}` หรือ firstName + " " + lastName'],
    tests: [
      { name: 'เชื่อมชื่อภาษาไทยถูกต้อง', args: ['ชินกฤต', 'ธนกรกุล'], expected: 'ชินกฤต ธนกรกุล' },
      { name: 'เชื่อมชื่อภาษาอังกฤษถูกต้อง', args: ['John', 'Doe'], expected: 'John Doe' },
      { name: 'เชื่อมชื่อสั้นๆ ถูกต้อง', args: ['ก', 'ข'], expected: 'ก ข' }
    ]
  }),
  makeLogicProblem({
    num: 12,
    id: 'ch1-12',
    title: 'คำนวณเงินทอนจากการซื้อสินค้า',
    difficulty: 'ง่าย',
    tags: ['Math', 'if/else'],
    description: 'เขียนฟังก์ชัน <code>calculateChange(paid, cost)</code> ถ้าจ่ายเงิน <code>paid</code> มากกว่าหรือเท่ากับราคาสินค้า <code>cost</code> ให้คืนค่าเงินทอน (<code>paid - cost</code>) แต่ถ้าจ่ายไม่พอให้คืนค่า <code>-1</code>',
    requirements: ['ถ้า <code>paid &gt;= cost</code> คืนค่า <code>paid - cost</code>', 'ถ้า <code>paid &lt; cost</code> คืนค่า <code>-1</code>'],
    fnName: 'calculateChange',
    params: 'paid, cost',
    sampleCall: 'calculateChange(500, 320)',
    solutionBody: '  return paid >= cost ? paid - cost : -1;',
    hints: ['เช็ก if (paid < cost) return -1;', 'จากนั้น return paid - cost;'],
    tests: [
      { name: 'จ่าย 500 ราคา 320 ทอน 180', args: [500, 320], expected: 180 },
      { name: 'จ่ายพอดี 100 ราคา 100 ทอน 0', args: [100, 100], expected: 0 },
      { name: 'จ่ายไม่พอ 50 ราคา 120 ได้ -1', args: [50, 120], expected: -1 }
    ]
  }),
  makeLogicProblem({
    num: 13,
    id: 'ch1-13',
    title: 'ตรวจสอบสถานะตัวเลข บวก ลบ หรือ ศูนย์',
    difficulty: 'ง่าย',
    tags: ['if / else if / else'],
    description: 'เขียนฟังก์ชัน <code>checkNumberSign(n)</code> ที่คืนค่า <code>"บวก"</code> ถ้ามากกว่า 0, <code>"ลบ"</code> ถ้าน้อยกว่า 0, และ <code>"ศูนย์"</code> ถ้าเท่ากับ 0',
    requirements: ['ตรวจสอบค่า <code>n &gt; 0</code>, <code>n &lt; 0</code> และ <code>n === 0</code>'],
    fnName: 'checkNumberSign',
    params: 'n',
    sampleCall: 'checkNumberSign(-5)',
    solutionBody: '  if (n > 0) return "บวก";\n  if (n < 0) return "ลบ";\n  return "ศูนย์";',
    hints: ['ใช้ if (n > 0) return "บวก"; else if (n < 0) return "ลบ"; else return "ศูนย์";'],
    tests: [
      { name: '25 เป็นค่า "บวก"', args: [25], expected: 'บวก' },
      { name: '-5 เป็นค่า "ลบ"', args: [-5], expected: 'ลบ' },
      { name: '0 เป็นค่า "ศูนย์"', args: [0], expected: 'ศูนย์' }
    ]
  }),
  makeLogicProblem({
    num: 14,
    id: 'ch1-14',
    title: 'หาค่าที่มากกว่าระหว่างตัวเลข 2 ตัว',
    difficulty: 'ง่าย',
    tags: ['Conditionals', 'Math.max'],
    description: 'เขียนฟังก์ชัน <code>findMaxOfTwo(a, b)</code> เพื่อคืนค่าตัวเลขที่มีค่ามากกว่า (ถ้าเท่ากันให้คืนค่าตัวใดก็ได้)',
    requirements: ['เปรียบเทียบค่า <code>a</code> กับ <code>b</code> แล้วคืนค่าที่มากกว่า'],
    fnName: 'findMaxOfTwo',
    params: 'a, b',
    sampleCall: 'findMaxOfTwo(42, 19)',
    solutionBody: '  return a > b ? a : b;',
    hints: ['ใช้ a > b ? a : b หรือ Math.max(a, b)'],
    tests: [
      { name: 'เปรียบเทียบ 42 กับ 19 ได้ 42', args: [42, 19], expected: 42 },
      { name: 'เปรียบเทียบ -10 กับ -3 ได้ -3', args: [-10, -3], expected: -3 },
      { name: 'เปรียบเทียบค่าเท่ากัน 7 กับ 7 ได้ 7', args: [7, 7], expected: 7 }
    ]
  }),
  makeLogicProblem({
    num: 15,
    id: 'ch1-15',
    title: 'ตรวจสอบว่าประโยคมีคำที่ค้นหาหรือไม่ (.includes)',
    difficulty: 'ง่าย',
    tags: ['Strings', 'includes'],
    description: 'เขียนฟังก์ชัน <code>containsWord(sentence, word)</code> เพื่อเช็กว่าใน <code>sentence</code> มีคำว่า <code>word</code> อยู่หรือไม่ (คืนค่าเป็น <code>true</code> หรือ <code>false</code>)',
    requirements: ['ใช้เมธอด <code>.includes(word)</code> บนข้อความ'],
    fnName: 'containsWord',
    params: 'sentence, word',
    sampleCall: 'containsWord("เรียนเขียนเว็บสนุกมาก", "เว็บ")',
    solutionBody: '  return sentence.includes(word);',
    hints: ['เขียน return sentence.includes(word);'],
    tests: [
      { name: 'พบคำว่า "เว็บ" ในประโยค (true)', args: ['เรียนเขียนเว็บสนุกมาก', 'เว็บ'], expected: true },
      { name: 'ไม่พบคำว่า "Python" ในประโยค (false)', args: ['ฉันชอบ JavaScript', 'Python'], expected: false },
      { name: 'พบคำภาษาอังกฤษ "DOM" (true)', args: ['Master DOM today', 'DOM'], expected: true }
    ]
  }),
  makeLogicProblem({
    num: 16,
    id: 'ch1-16',
    title: 'ดึงตัวอักษรตัวแรกของข้อความ',
    difficulty: 'ง่าย',
    tags: ['Strings', 'Indexing'],
    description: 'เขียนฟังก์ชัน <code>getFirstChar(str)</code> ที่คืนค่าตัวอักษรตัวแรกสุดของ <code>str</code> (ถ้าข้อความว่างให้คืนค่า <code>""</code>)',
    requirements: ['ดึงตัวอักษรตำแหน่งที่ 0 เช่น <code>str[0]</code> หรือ <code>str.charAt(0)</code>'],
    fnName: 'getFirstChar',
    params: 'str',
    sampleCall: 'getFirstChar("JavaScript")',
    solutionBody: '  return str.charAt(0);',
    hints: ['ใช้ str.charAt(0) หรือ str[0] || ""'],
    tests: [
      { name: '"JavaScript" ตัวแรกคือ "J"', args: ['JavaScript'], expected: 'J' },
      { name: '"ไทย" ตัวแรกคือ "ไ"', args: ['ไทย'], expected: 'ไ' },
      { name: 'ข้อความว่าง "" คืนค่า ""', args: [''], expected: '' }
    ]
  }),
  makeLogicProblem({
    num: 17,
    id: 'ch1-17',
    title: 'ดึงตัวอักษรตัวสุดท้ายของข้อความ',
    difficulty: 'ง่าย',
    tags: ['Strings', 'length'],
    description: 'เขียนฟังก์ชัน <code>getLastChar(str)</code> ที่คืนค่าตัวอักษรตัวสุดท้ายของ <code>str</code> (ถ้าข้อความว่างให้คืนค่า <code>""</code>)',
    requirements: ['เข้าถึงตำแหน่ง <code>str.length - 1</code> หรือใช้ <code>str.slice(-1)</code>'],
    fnName: 'getLastChar',
    params: 'str',
    sampleCall: 'getLastChar("HTML5")',
    solutionBody: '  return str.slice(-1);',
    hints: ['สามารถใช้ str.slice(-1) หรือ str[str.length - 1] || ""'],
    tests: [
      { name: '"HTML5" ตัวสุดท้ายคือ "5"', args: ['HTML5'], expected: '5' },
      { name: '"Hello" ตัวสุดท้ายคือ "o"', args: ['Hello'], expected: 'o' },
      { name: 'ข้อความว่าง "" คืนค่า ""', args: [''], expected: '' }
    ]
  }),
  makeLogicProblem({
    num: 18,
    id: 'ch1-18',
    title: 'ทำซ้ำข้อความตามจำนวนรอบ (.repeat)',
    difficulty: 'ง่าย',
    tags: ['Strings', 'repeat', 'Loops'],
    description: 'เขียนฟังก์ชัน <code>repeatWord(word, times)</code> เพื่อคืนค่าข้อความ <code>word</code> ซ้ำติดกันจำนวน <code>times</code> รอบ (ถ้า <code>times &lt;= 0</code> คืนค่า <code>""</code>)',
    requirements: ['ใช้ <code>word.repeat(times)</code> หรือวนลูปต่อข้อความ'],
    fnName: 'repeatWord',
    params: 'word, times',
    sampleCall: 'repeatWord("ฮ่า", 3)',
    solutionBody: '  return times > 0 ? word.repeat(times) : "";',
    hints: ['เช็ก if (times <= 0) return ""; แล้วใช้ word.repeat(times)'],
    tests: [
      { name: '"ฮ่า" ซ้ำ 3 รอบ ได้ "ฮ่าฮ่าฮ่า"', args: ['ฮ่า', 3], expected: 'ฮ่าฮ่าฮ่า' },
      { name: '"*" ซ้ำ 5 รอบ ได้ "*****"', args: ['*', 5], expected: '*****' },
      { name: 'ซ้ำ 0 รอบ ได้ ""', args: ['test', 0], expected: '' }
    ]
  }),
  makeLogicProblem({
    num: 19,
    id: 'ch1-19',
    title: 'หาผลรวมตัวเลขตั้งแต่ 1 ถึง n ด้วยลูป',
    difficulty: 'ง่าย',
    tags: ['for loop', 'Math'],
    description: 'เขียนฟังก์ชัน <code>sumOneToN(n)</code> เพื่อคำนวณผลรวมของตัวเลขตั้งแต่ 1 ถึง <code>n</code> เช่น <code>n = 5</code> คือ <code>1 + 2 + 3 + 4 + 5 = 15</code>',
    requirements: ['ใช้ลูป <code>for</code> บวกสะสมค่าตั้งแต่ 1 ถึง <code>n</code>', 'ถ้า <code>n &lt;= 0</code> ให้คืนค่า <code>0</code>'],
    fnName: 'sumOneToN',
    params: 'n',
    sampleCall: 'sumOneToN(5)',
    solutionBody: '  let sum = 0;\n  for (let i = 1; i <= n; i++) sum += i;\n  return sum;',
    hints: ['สร้าง let sum = 0;', 'วนลูป for (let i = 1; i <= n; i++) { sum += i; } แล้ว return sum;'],
    tests: [
      { name: 'ผลรวม 1 ถึง 5 ได้ 15', args: [5], expected: 15 },
      { name: 'ผลรวม 1 ถึง 10 ได้ 55', args: [10], expected: 55 },
      { name: 'เมื่อ n = 0 ได้ 0', args: [0], expected: 0 }
    ]
  }),
  makeLogicProblem({
    num: 20,
    id: 'ch1-20',
    title: 'นับจำนวนเลขคู่ตั้งแต่ 1 ถึง n',
    difficulty: 'ง่าย',
    tags: ['for loop', 'Conditionals'],
    description: 'เขียนฟังก์ชัน <code>countEvensUpTo(n)</code> เพื่อนับว่าตั้งแต่ 1 ถึง <code>n</code> มีเลขคู่ทั้งหมดกี่ตัว',
    requirements: ['วนลูปตั้งแต่ 1 ถึง <code>n</code> และนับตัวเลขที่หารด้วย 2 ลงตัว'],
    fnName: 'countEvensUpTo',
    params: 'n',
    sampleCall: 'countEvensUpTo(10)',
    solutionBody: '  let count = 0;\n  for (let i = 1; i <= n; i++) {\n    if (i % 2 === 0) count++;\n  }\n  return count;',
    hints: ['สร้างตัวแปร let count = 0;', 'ในลูปเช็ก if (i % 2 === 0) count++;'],
    tests: [
      { name: 'ตั้งแต่ 1 ถึง 10 มีเลขคู่ 5 ตัว (2, 4, 6, 8, 10)', args: [10], expected: 5 },
      { name: 'ตั้งแต่ 1 ถึง 7 มีเลขคู่ 3 ตัว (2, 4, 6)', args: [7], expected: 3 },
      { name: 'ตั้งแต่ 1 ถึง 1 มีเลขคู่ 0 ตัว', args: [1], expected: 0 }
    ]
  }),

  // ======================== ปานกลาง (10 ข้อ: 21 - 30) ========================
  makeLogicProblem({
    num: 21,
    id: 'ch1-21',
    title: 'ระบบตัดเกรดจากคะแนนสอบ (A, B, C, D, F)',
    difficulty: 'ปานกลาง',
    tags: ['if / else if', 'Conditions'],
    description: 'เขียนฟังก์ชัน <code>calculateGrade(score)</code> เพื่อคืนค่าเกรดตามเกณฑ์คะแนนดังนี้',
    requirements: [
      'ตั้งแต่ 80 ขึ้นไป ได้ <code>"A"</code>, 70–79 ได้ <code>"B"</code>, 60–69 ได้ <code>"C"</code>, 50–59 ได้ <code>"D"</code>',
      'ต่ำกว่า 50 ได้ <code>"F"</code>'
    ],
    fnName: 'calculateGrade',
    params: 'score',
    sampleCall: 'calculateGrade(75)',
    solutionBody: '  if (score >= 80) return "A";\n  if (score >= 70) return "B";\n  if (score >= 60) return "C";\n  if (score >= 50) return "D";\n  return "F";',
    hints: ['เรียงการเช็กจากคะแนนมากไปน้อย: >= 80, >= 70, >= 60, >= 50'],
    tests: [
      { name: 'คะแนน 85 ได้เกรด "A"', args: [85], expected: 'A' },
      { name: 'คะแนน 75 ได้เกรด "B" และ 60 ได้เกรด "C"', args: [75], expected: 'B' },
      { name: 'คะแนน 49 ได้เกรด "F"', args: [49], expected: 'F' }
    ]
  }),
  makeLogicProblem({
    num: 22,
    id: 'ch1-22',
    title: 'คำนวณค่าจัดส่งสินค้าตามยอดซื้อและพื้นที่',
    difficulty: 'ปานกลาง',
    tags: ['Conditionals', 'Logical Operators'],
    description: 'เขียนฟังก์ชัน <code>calculateShipping(orderTotal, isUpcountry)</code> เพื่อคำนวณค่าส่งสินค้า',
    requirements: [
      'ถ้ายอดซื้อ <code>orderTotal &gt;= 1000</code> ส่งฟรีทุกพื้นที่ (คืนค่า <code>0</code>)',
      'ถ้ายอดซื้อน้อยกว่า 1000: กรณีต่างจังหวัด (<code>isUpcountry === true</code>) คิดค่าส่ง <code>80</code> บาท, กรณีกรุงเทพฯ (<code>false</code>) คิดค่าส่ง <code>50</code> บาท'
    ],
    fnName: 'calculateShipping',
    params: 'orderTotal, isUpcountry',
    sampleCall: 'calculateShipping(650, true)',
    solutionBody: '  if (orderTotal >= 1000) return 0;\n  return isUpcountry ? 80 : 50;',
    hints: ['เช็ก orderTotal >= 1000 ก่อนเพื่อคืนค่า 0', 'จากนั้นเช็ก isUpcountry เพื่อคืนค่า 80 หรือ 50'],
    tests: [
      { name: 'ซื้อครบ 1200 ต่างจังหวัด ส่งฟรี (0 บาท)', args: [1200, true], expected: 0 },
      { name: 'ซื้อ 650 ต่างจังหวัด ค่าส่ง 80 บาท', args: [650, true], expected: 80 },
      { name: 'ซื้อ 650 กรุงเทพฯ ค่าส่ง 50 บาท', args: [650, false], expected: 50 }
    ]
  }),
  makeLogicProblem({
    num: 23,
    id: 'ch1-23',
    title: 'คำนวณราคาสุทธิหลังหักส่วนลดสมาชิก',
    difficulty: 'ปานกลาง',
    tags: ['Conditionals', 'Math'],
    description: 'เขียนฟังก์ชัน <code>getDiscountedPrice(price, isMember)</code> เพื่อคำนวณราคาสุทธิ',
    requirements: [
      'ถ้าราคา <code>price &gt;= 1000</code> และเป็นสมาชิก (<code>isMember === true</code>) ลด 20% (คูณ 0.8)',
      'ถ้าราคา <code>price &gt;= 1000</code> แต่ไม่เป็นสมาชิก ลด 10% (คูณ 0.9)',
      'ถ้าราคาน้อยกว่า 1000 แต่เป็นสมาชิก ลด 5% (คูณ 0.95) นอกนั้นไม่ลดราคา'
    ],
    fnName: 'getDiscountedPrice',
    params: 'price, isMember',
    sampleCall: 'getDiscountedPrice(1000, true)',
    solutionBody: '  if (price >= 1000) return isMember ? price * 0.8 : price * 0.9;\n  return isMember ? price * 0.95 : price;',
    hints: ['แยกกรณี price >= 1000 กับ price < 1000', 'ในแต่ละกรณีเช็กว่า isMember เป็น true หรือไม่'],
    tests: [
      { name: 'ยอด 1000 สมาชิก ลด 20% เหลือ 800', args: [1000, true], expected: 800 },
      { name: 'ยอด 1000 ไม่ใช่สมาชิก ลด 10% เหลือ 900', args: [1000, false], expected: 900 },
      { name: 'ยอด 200 สมาชิก ลด 5% เหลือ 190', args: [200, true], expected: 190 }
    ]
  }),
  makeLogicProblem({
    num: 24,
    id: 'ch1-24',
    title: 'แปลงชื่อบทความเป็น URL Slug',
    difficulty: 'ปานกลาง',
    tags: ['Strings', 'split', 'join'],
    description: 'เขียนฟังก์ชัน <code>createSlug(title)</code> เพื่อแปลงข้อความเป็น URL ตัวพิมพ์เล็กและคั่นคำด้วยขีดกลาง <code>-</code>',
    requirements: [
      'ตัดช่องว่างหน้า-หลังด้วย <code>.trim()</code> และแปลงเป็นตัวพิมพ์เล็ก',
      'เปลี่ยนช่องว่าง (แม้มีหลายช่องติดกัน) ให้เป็น <code>"-"</code> เพียงตัวเดียว'
    ],
    fnName: 'createSlug',
    params: 'title',
    sampleCall: 'createSlug("  Learn JavaScript   Fast ")',
    solutionBody: '  return title.trim().toLowerCase().split(/\\s+/).join("-");',
    hints: ['ใช้ .trim().toLowerCase()', 'ใช้ .split(/\\s+/).join("-") เพื่อยุบช่องว่างทั้งหมดเป็นขีดเดียว'],
    tests: [
      { name: '"  Learn JavaScript   Fast " ได้ "learn-javascript-fast"', args: ['  Learn JavaScript   Fast '], expected: 'learn-javascript-fast' },
      { name: '"Hello World" ได้ "hello-world"', args: ['Hello World'], expected: 'hello-world' },
      { name: '"Frontend" ได้ "frontend"', args: ['Frontend'], expected: 'frontend' }
    ]
  }),
  makeLogicProblem({
    num: 25,
    id: 'ch1-25',
    title: 'นับจำนวนสระภาษาอังกฤษ (a, e, i, o, u)',
    difficulty: 'ปานกลาง',
    tags: ['Loops', 'Strings', 'includes'],
    description: 'เขียนฟังก์ชัน <code>countVowels(text)</code> เพื่อนับจำนวนสระ <code>a, e, i, o, u</code> (รวมทั้งตัวพิมพ์เล็กและตัวพิมพ์ใหญ่) ในข้อความ',
    requirements: ['แปลงข้อความเป็นตัวพิมพ์เล็กก่อนตรวจสอบ', 'วนลูปนับตัวอักษรที่อยู่ใน <code>"aeiou"</code>'],
    fnName: 'countVowels',
    params: 'text',
    sampleCall: 'countVowels("JavaScript Awesome")',
    solutionBody: '  let count = 0;\n  const vowels = "aeiou";\n  for (const ch of text.toLowerCase()) {\n    if (vowels.includes(ch)) count++;\n  }\n  return count;',
    hints: ['สร้างตัวแปร const vowels = "aeiou";', 'วนลูปตัวอักษรใน text.toLowerCase() แล้วเช็ก vowels.includes(ch)'],
    tests: [
      { name: '"Hello World" มีสระ 3 ตัว (e, o, o)', args: ['Hello World'], expected: 3 },
      { name: '"AEIOU" (ตัวพิมพ์ใหญ่) มีสระ 5 ตัว', args: ['AEIOU'], expected: 5 },
      { name: '"rhythm" ไม่มีสระเลย ได้ 0', args: ['rhythm'], expected: 0 }
    ]
  }),
  makeLogicProblem({
    num: 26,
    id: 'ch1-26',
    title: 'กลับด้านข้อความจากหลังมาหน้า (Reverse String)',
    difficulty: 'ปานกลาง',
    tags: ['Strings', 'Loops / Array'],
    description: 'เขียนฟังก์ชัน <code>reverseString(str)</code> ที่คืนค่าข้อความที่เรียงตัวอักษรย้อนกลับจากหลังมาหน้า',
    requirements: ['เช่น <code>"abcd"</code> ต้องได้ <code>"dcba"</code>'],
    fnName: 'reverseString',
    params: 'str',
    sampleCall: 'reverseString("Frontend")',
    solutionBody: '  return str.split("").reverse().join("");',
    hints: ['ใช้ str.split("").reverse().join("") หรือวนลูปจากท้ายมาหน้า'],
    tests: [
      { name: '"Frontend" กลับด้านเป็น "dnetnorF"', args: ['Frontend'], expected: 'dnetnorF' },
      { name: '"12345" กลับด้านเป็น "54321"', args: ['12345'], expected: '54321' },
      { name: 'ข้อความว่าง "" ได้ ""', args: [''], expected: '' }
    ]
  }),
  makeLogicProblem({
    num: 27,
    id: 'ch1-27',
    title: 'ตรวจสอบปีอธิกสุรทิน (Leap Year)',
    difficulty: 'ปานกลาง',
    tags: ['Logical Operators', 'Modulo %'],
    description: 'เขียนฟังก์ชัน <code>isLeapYear(year)</code> เพื่อตรวจสอบว่าปี ค.ศ. นั้นมี 366 วันหรือไม่',
    requirements: [
      'ปีอธิกสุรทินคือปีที่หารด้วย 4 ลงตัว และหารด้วย 100 ไม่ลงตัว',
      'ยกเว้นปีที่หารด้วย 400 ลงตัว จะถือเป็นปีอธิกสุรทินเสมอ'
    ],
    fnName: 'isLeapYear',
    params: 'year',
    sampleCall: 'isLeapYear(2024)',
    solutionBody: '  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;',
    hints: ['ใช้เงื่อนไข (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)'],
    tests: [
      { name: 'ปี 2024 เป็น Leap Year (true)', args: [2024], expected: true },
      { name: 'ปี 1900 หาร 100 ลงตัวแต่หาร 400 ไม่ลงตัว (false)', args: [1900], expected: false },
      { name: 'ปี 2000 หาร 400 ลงตัว (true)', args: [2000], expected: true }
    ]
  }),
  makeLogicProblem({
    num: 28,
    id: 'ch1-28',
    title: 'หาผลรวมเฉพาะตัวเลขที่หารด้วย 3 ลงตัวตั้งแต่ 1 ถึง n',
    difficulty: 'ปานกลาง',
    tags: ['for loop', 'Modulo %'],
    description: 'เขียนฟังก์ชัน <code>sumMultiplesOfThree(n)</code> ที่บวกสะสมเฉพาะตัวเลขตั้งแต่ 1 ถึง <code>n</code> ที่หารด้วย 3 ลงตัว',
    requirements: ['เช่น <code>n = 10</code> จะบวก <code>3 + 6 + 9 = 18</code>'],
    fnName: 'sumMultiplesOfThree',
    params: 'n',
    sampleCall: 'sumMultiplesOfThree(10)',
    solutionBody: '  let sum = 0;\n  for (let i = 1; i <= n; i++) {\n    if (i % 3 === 0) sum += i;\n  }\n  return sum;',
    hints: ['วนลูป i = 1 ถึง n และเช็ก if (i % 3 === 0) sum += i;'],
    tests: [
      { name: 'n = 10 ได้ผลรวม 3 + 6 + 9 = 18', args: [10], expected: 18 },
      { name: 'n = 15 ได้ผลรวม 3 + 6 + 9 + 12 + 15 = 45', args: [15], expected: 45 },
      { name: 'n = 2 ไม่มีเลขที่หาร 3 ลงตัว ได้ 0', args: [2], expected: 0 }
    ]
  }),
  makeLogicProblem({
    num: 29,
    id: 'ch1-29',
    title: 'ซ่อนหมายเลขบัตรเครดิตให้เหลือแค่ 4 ตัวท้าย',
    difficulty: 'ปานกลาง',
    tags: ['Strings', 'slice', 'padStart'],
    description: 'เขียนฟังก์ชัน <code>maskCardNumber(cardNum)</code> ที่แทนที่ตัวเลขด้านหน้าทั้งหมดด้วย <code>"*"</code> ยกเว้น 4 ตัวสุดท้าย',
    requirements: [
      'เช่น <code>"1234567812345678"</code> ต้องได้ <code>"************5678"</code>',
      'ถ้ายาวน้อยกว่าหรือเท่ากับ 4 ตัวอักษร ให้คืนค่าเดิม'
    ],
    fnName: 'maskCardNumber',
    params: 'cardNum',
    sampleCall: 'maskCardNumber("4532111122228899")',
    solutionBody: '  if (cardNum.length <= 4) return cardNum;\n  return cardNum.slice(-4).padStart(cardNum.length, "*");',
    hints: ['ดึง 4 ตัวท้ายด้วย cardNum.slice(-4)', 'ใช้ .padStart(cardNum.length, "*") หรือ "*".repeat(cardNum.length - 4) + cardNum.slice(-4)'],
    tests: [
      { name: 'บัตร 16 หลัก แสดง * 12 ตัวตามด้วย 4 ตัวท้าย', args: ['4532111122228899'], expected: '************8899' },
      { name: 'รหัส 8 หลัก แสดง * 4 ตัวตามด้วย 4 ตัวท้าย', args: ['12345678'], expected: '****5678' },
      { name: 'รหัส 4 หลัก คืนค่าเดิม', args: ['9999'], expected: '9999' }
    ]
  }),
  makeLogicProblem({
    num: 30,
    id: 'ch1-30',
    title: 'คำนวณค่า BMI และแปลผลเกณฑ์สุขภาพ',
    difficulty: 'ปานกลาง',
    tags: ['Math', 'Conditionals'],
    description: 'เขียนฟังก์ชัน <code>evaluateBMI(weightKg, heightM)</code> คำนวณ <code>bmi = weightKg / (heightM * heightM)</code> แล้วคืนค่าเกณฑ์สุขภาพ',
    requirements: [
      'ถ้า <code>bmi &lt; 18.5</code> คืนค่า <code>"น้ำหนักน้อย"</code>',
      'ถ้า <code>bmi &lt; 25</code> คืนค่า <code>"สมส่วน"</code>',
      'ถ้า <code>bmi &gt;= 25</code> คืนค่า <code>"น้ำหนักเกิน"</code>'
    ],
    fnName: 'evaluateBMI',
    params: 'weightKg, heightM',
    sampleCall: 'evaluateBMI(65, 1.72)',
    solutionBody: '  const bmi = weightKg / (heightM * heightM);\n  if (bmi < 18.5) return "น้ำหนักน้อย";\n  if (bmi < 25) return "สมส่วน";\n  return "น้ำหนักเกิน";',
    hints: ['คำนวณ const bmi = weightKg / (heightM * heightM); ก่อน', 'เช็กตามลำดับ < 18.5, < 25 และอื่นๆ'],
    tests: [
      { name: 'หนัก 65 สูง 1.72 (BMI ~21.97) ได้ "สมส่วน"', args: [65, 1.72], expected: 'สมส่วน' },
      { name: 'หนัก 45 สูง 1.70 (BMI ~15.57) ได้ "น้ำหนักน้อย"', args: [45, 1.7], expected: 'น้ำหนักน้อย' },
      { name: 'หนัก 85 สูง 1.70 (BMI ~29.41) ได้ "น้ำหนักเกิน"', args: [85, 1.7], expected: 'น้ำหนักเกิน' }
    ]
  }),

  // ======================== ยาก (5 ข้อ: 31 - 35) ========================
  makeLogicProblem({
    num: 31,
    id: 'ch1-31',
    title: 'ตรวจสอบคำ Palindrome (ไม่สนพิมพ์เล็ก-ใหญ่และช่องว่าง)',
    difficulty: 'ยาก',
    tags: ['Algorithm', 'Strings', 'replace'],
    description: 'เขียนฟังก์ชัน <code>isPalindrome(text)</code> เพื่อเช็กว่าเมื่อตัดช่องว่างออกและแปลงเป็นตัวพิมพ์เล็กแล้ว อ่านจากหน้าไปหลังเหมือนกับหลังมาหน้าหรือไม่',
    requirements: [
      'ลบช่องว่างทั้งหมดออก และแปลงเป็นตัวพิมพ์เล็ก',
      'เปรียบเทียบกับข้อความที่กลับด้านแล้ว คืนค่า <code>true</code> หรือ <code>false</code>'
    ],
    fnName: 'isPalindrome',
    params: 'text',
    sampleCall: 'isPalindrome("Race car")',
    solutionBody: '  const clean = text.toLowerCase().replace(/\\s+/g, "");\n  const rev = clean.split("").reverse().join("");\n  return clean === rev;',
    hints: ['ลบช่องว่างด้วย text.toLowerCase().replace(/\\s+/g, "")', 'กลับด้านด้วย .split("").reverse().join("") แล้วเทียบว่าเท่ากันหรือไม่'],
    tests: [
      { name: '"Race car" เป็น Palindrome (true)', args: ['Race car'], expected: true },
      { name: '"nurses run" เป็น Palindrome (true)', args: ['nurses run'], expected: true },
      { name: '"Frontend" ไม่เป็น Palindrome (false)', args: ['Frontend'], expected: false }
    ]
  }),
  makeLogicProblem({
    num: 32,
    id: 'ch1-32',
    title: 'สร้างลำดับข้อความ FizzBuzz ตั้งแต่ 1 ถึง n',
    difficulty: 'ยาก',
    tags: ['Loops', 'Conditionals', 'FizzBuzz'],
    description: 'เขียนฟังก์ชัน <code>generateFizzBuzz(n)</code> ที่สร้างข้อความเรียงจาก 1 ถึง <code>n</code> คั่นด้วย <code>", "</code>',
    requirements: [
      'ถ้าหารด้วย 3 และ 5 ลงตัว ใช้คำว่า <code>"FizzBuzz"</code>',
      'ถ้าหารด้วย 3 ลงตัว ใช้ <code>"Fizz"</code>, ถ้าหารด้วย 5 ลงตัว ใช้ <code>"Buzz"</code>, นอกนั้นใช้ตัวเลขปกติ',
      'เชื่อมทุกค่าด้วย <code>", "</code> เช่น <code>n = 5</code> ได้ <code>"1, 2, Fizz, 4, Buzz"</code>'
    ],
    fnName: 'generateFizzBuzz',
    params: 'n',
    sampleCall: 'generateFizzBuzz(15)',
    solutionBody: '  const res = [];\n  for (let i = 1; i <= n; i++) {\n    if (i % 15 === 0) res.push("FizzBuzz");\n    else if (i % 3 === 0) res.push("Fizz");\n    else if (i % 5 === 0) res.push("Buzz");\n    else res.push(String(i));\n  }\n  return res.join(", ");',
    hints: ['ต้องเช็กหารด้วย 15 (3 และ 5) ลงตัวก่อนเสมอ!', 'เก็บผลลัพธ์ลงใน Array แล้ว return res.join(", ");'],
    tests: [
      { name: 'n = 5 ได้ "1, 2, Fizz, 4, Buzz"', args: [5], expected: '1, 2, Fizz, 4, Buzz' },
      { name: 'n = 15 ตัวสุดท้ายต้องเป็น "FizzBuzz"', args: [15], expected: '1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz' },
      { name: 'n = 3 ได้ "1, 2, Fizz"', args: [3], expected: '1, 2, Fizz' }
    ]
  }),
  makeLogicProblem({
    num: 33,
    id: 'ch1-33',
    title: 'คำนวณค่าไฟฟ้าแบบขั้นบันได (Progressive Tier Pricing)',
    difficulty: 'ยาก',
    tags: ['Math', 'Tiered Logic'],
    description: 'เขียนฟังก์ชัน <code>calculateElectricityBill(units)</code> เพื่อคำนวณค่าไฟตามจำนวนหน่วยแบบขั้นบันได',
    requirements: [
      '50 หน่วยแรก (หน่วยที่ 1–50): หน่วยละ 3 บาท',
      '50 หน่วยถัดมา (หน่วยที่ 51–100): หน่วยละ 4 บาท',
      'ตั้งแต่หน่วยที่ 101 เป็นต้นไป: หน่วยละ 5 บาท (เช่น 120 หน่วย = (50×3) + (50×4) + (20×5) = 450 บาท)'
    ],
    fnName: 'calculateElectricityBill',
    params: 'units',
    sampleCall: 'calculateElectricityBill(120)',
    solutionBody: '  if (units <= 0) return 0;\n  if (units <= 50) return units * 3;\n  if (units <= 100) return 50 * 3 + (units - 50) * 4;\n  return 50 * 3 + 50 * 4 + (units - 100) * 5;',
    hints: ['ถ้า units <= 50 คืนค่า units * 3', 'ถ้า units <= 100 คืนค่า (50 * 3) + (units - 50) * 4', 'ถ้าเกิน 100 คืนค่า (50 * 3) + (50 * 4) + (units - 100) * 5'],
    tests: [
      { name: 'ใช้ไฟ 40 หน่วย (ขั้นแรก) = 120 บาท', args: [40], expected: 120 },
      { name: 'ใช้ไฟ 80 หน่วย (50×3 + 30×4) = 270 บาท', args: [80], expected: 270 },
      { name: 'ใช้ไฟ 120 หน่วย (150 + 200 + 100) = 450 บาท', args: [120], expected: 450 }
    ]
  }),
  makeLogicProblem({
    num: 34,
    id: 'ch1-34',
    title: 'แปลงประโยคเป็น Title Case (ตัวแรกของทุกคำเป็นตัวใหญ่)',
    difficulty: 'ยาก',
    tags: ['Strings', 'split & map', 'slice'],
    description: 'เขียนฟังก์ชัน <code>toTitleCase(sentence)</code> ที่แปลงตัวอักษรแรกของทุกคำเป็นตัวพิมพ์ใหญ่ และตัวอักษรที่เหลือของคำนั้นเป็นตัวพิมพ์เล็ก',
    requirements: [
      'ตัดช่องว่างหน้า-หลังออก และแยกคำด้วยช่องว่าง',
      'เช่น <code>"hELLo wORLD from js"</code> ต้องได้ <code>"Hello World From Js"</code>'
    ],
    fnName: 'toTitleCase',
    params: 'sentence',
    sampleCall: 'toTitleCase("hELLo wORLD from js")',
    solutionBody: '  if (!sentence.trim()) return "";\n  return sentence\n    .trim()\n    .split(/\\s+/)\n    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())\n    .join(" ");',
    hints: ['แยกคำด้วย .trim().split(/\\s+/)', 'แปลงแต่ละคำด้วย w.charAt(0).toUpperCase() + w.slice(1).toLowerCase() แล้ว .join(" ")'],
    tests: [
      { name: '"hELLo wORLD from js" ได้ "Hello World From Js"', args: ['hELLo wORLD from js'], expected: 'Hello World From Js' },
      { name: '"frontend web developer" ได้ "Frontend Web Developer"', args: ['frontend web developer'], expected: 'Frontend Web Developer' },
      { name: 'ข้อความว่าง "" ได้ ""', args: ['   '], expected: '' }
    ]
  }),
  makeLogicProblem({
    num: 35,
    id: 'ch1-35',
    title: 'ตรวจสอบจำนวนเฉพาะ (Prime Number Checker)',
    difficulty: 'ยาก',
    tags: ['Loops', 'Math', 'Algorithm'],
    description: 'เขียนฟังก์ชัน <code>isPrime(n)</code> เพื่อตรวจสอบว่า <code>n</code> เป็นจำนวนเฉพาะหรือไม่ (จำนวนเต็มที่มากกว่า 1 และมีเพียง 1 กับตัวมันเองที่หารลงตัว)',
    requirements: [
      'ถ้า <code>n &lt;= 1</code> ให้คืนค่า <code>false</code>',
      'วนลูปตรวจสอบตั้งแต่ 2 ถึง <code>Math.sqrt(n)</code> ถ้ามีตัวใดหาร <code>n</code> ลงตัวให้คืนค่า <code>false</code> ทันที'
    ],
    fnName: 'isPrime',
    params: 'n',
    sampleCall: 'isPrime(17)',
    solutionBody: '  if (n <= 1) return false;\n  for (let i = 2; i * i <= n; i++) {\n    if (n % i === 0) return false;\n  }\n  return true;',
    hints: ['เช็ก if (n <= 1) return false;', 'วนลูป for (let i = 2; i * i <= n; i++) ถ้า n % i === 0 ให้ return false;'],
    tests: [
      { name: '17 และ 2 เป็นจำนวนเฉพาะ (true)', args: [17], expected: true },
      { name: '15 ไม่เป็นจำนวนเฉพาะเพราะ 3 และ 5 หารลงตัว (false)', args: [15], expected: false },
      { name: '1 และเลขติดลบ ไม่เป็นจำนวนเฉพาะ (false)', args: [1], expected: false }
    ]
  })
];

window.CHAPTER_1 = {
  id: 'ch-1',
  number: 1,
  title: 'บทที่ 1: พื้นฐาน JavaScript & Logic',
  shortTitle: 'บทที่ 1: พื้นฐาน JS & Logic',
  icon: '🌱',
  description:
    'ปูพื้นฐานสำคัญที่สุดของการเขียนโค้ด: ตัวแปร, ชนิดข้อมูล, การคำนวณทางคณิตศาสตร์, การจัดการข้อความ (String), เงื่อนไขตัดสินใจ (if/else) และการวนลูป (for loop)',
  tags: ['Variables', 'Math & Modulo', 'Strings', 'if / else', 'for Loops'],
  lesson: {
    overview:
      'ก่อนจะสั่งให้หน้าเว็บทำงานตามใจเราได้ เราต้องเข้าใจวิธีเก็บข้อมูลลงตัวแปร การนำข้อมูลมาคำนวณหรือปรับแต่งข้อความ และการเขียนเงื่อนไขตัดสินใจ เช่น ถ้าซื้อครบ 1,000 บาทให้ลดราคา หรือการวนลูปเพื่อประมวลผลข้อมูลซ้ำๆ',
    mustUse: [
      {
        syntax: 'const / let',
        usage: 'ประกาศตัวแปรเก็บข้อมูล (ใช้ const เป็นหลัก และใช้ let เมื่อต้องเปลี่ยนค่าทีหลัง)',
        example: 'const price = 150;\nlet count = 0;'
      },
      {
        syntax: 'Template Literal (`...${x}...`)',
        usage: 'แทรกค่าตัวแปรลงในข้อความได้อย่างอ่านง่ายโดยใช้เครื่องหมาย Backtick (`)',
        example: 'const msg = `สวัสดีคุณ ${name} ยอดรวม ${total} บาท`;'
      },
      {
        syntax: 'String Methods (.trim, .toLowerCase, .includes, .slice)',
        usage: 'จัดการข้อความ เช่น ตัดช่องว่าง แปลงตัวพิมพ์เล็ก-ใหญ่ ค้นหาคำ หรือตัดบางส่วนของคำ',
        example: '"  Hello JS ".trim().toLowerCase(); // "hello js"'
      },
      {
        syntax: 'if / else if / else & Ternary (? :)',
        usage: 'ตรวจสอบเงื่อนไขเพื่อเลือกทำงานตามกรณีต่างๆ',
        example: 'if (score >= 80) {\n  return "A";\n} else {\n  return "B";\n}'
      },
      {
        syntax: 'for (let i = 1; i <= n; i++)',
        usage: 'วนลูปทำคำสั่งซ้ำตามจำนวนรอบที่กำหนด เช่น หาผลรวมหรือนับจำนวนที่เข้าเงื่อนไข',
        example: 'let sum = 0;\nfor (let i = 1; i <= 5; i++) {\n  sum += i;\n}'
      }
    ],
    examples: [
      {
        title: 'ตัวอย่างที่ 1: การสร้างฟังก์ชันคำนวณและคืนค่าข้อความ',
        explanation: 'ฟังก์ชันจะรับค่าพารามิเตอร์เข้ามา คำนวณผลลัพธ์ แล้วส่งค่ากลับด้วยคำสั่ง return',
        code: `function calculateTotalText(itemName, price, qty) {
  const total = price * qty;
  return \`สินค้า \${itemName} รวมเป็นเงิน \${total} บาท\`;
}

console.log(calculateTotalText("คีย์บอร์ด", 1200, 2));
// ผลลัพธ์: "สินค้า คีย์บอร์ด รวมเป็นเงิน 2400 บาท"`
      },
      {
        title: 'ตัวอย่างที่ 2: การตรวจสอบเงื่อนไขหลายระดับ (if / else if / else)',
        explanation: 'โปรแกรมจะไล่ตรวจเงื่อนไขจากบนลงล่าง เมื่อเจอเงื่อนไขแรกที่เป็นจริงจะ return ค่าทันที',
        code: `function getShippingFee(orderAmount) {
  if (orderAmount >= 1000) {
    return 0; // ส่งฟรี
  } else if (orderAmount >= 500) {
    return 30; // ค่าส่งพิเศษ
  } else {
    return 60; // ค่าส่งปกติ
  }
}`
      },
      {
        title: 'ตัวอย่างที่ 3: การวนลูปตรวจสอบและบวกสะสมค่า',
        explanation: 'ใช้ลูป for ร่วมกับเครื่องหมาย % (หารเอาเศษ) เพื่อเช็กเลขคู่',
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
  },
  problems: CHAPTER_1_PROBLEMS
};
