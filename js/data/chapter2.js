/**
 * บทที่ 2: การจัดการข้อมูล Array & Object Mastery
 * ประกอบด้วย: เนื้อหาบทเรียน + คำสั่งที่ต้องใช้ + ตัวอย่างโค้ด + โจทย์ 35 ข้อ (ง่าย 20, ปานกลาง 10, ยาก 5)
 */

function makeDataProblem({
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
if (outEl) {
  outEl.textContent = typeof previewResult === "object"
    ? JSON.stringify(previewResult, null, 2)
    : String(previewResult ?? "ยังไม่มีค่าที่ return");
}`;

  const solutionJs = `function ${fnName}(${params}) {
${solutionBody}
}

const previewResult = ${sampleCall};
console.log("ผลลัพธ์จาก ${fnName}:", previewResult);
const outEl = document.getElementById("output-val");
if (outEl) {
  outEl.textContent = typeof previewResult === "object"
    ? JSON.stringify(previewResult, null, 2)
    : String(previewResult ?? "");
}`;

  const html = `<div class="preview-card">
  <div class="badge">${difficulty} • ข้อที่ ${num}</div>
  <h3>📦 ทดสอบฟังก์ชันจัดการข้อมูล <code>${fnName}()</code></h3>
  <p class="call-text">คำสั่งที่เรียก: <code>${sampleCall}</code></p>
  <pre class="result-box" id="output-val">-</pre>
</div>`;

  const css = `body { font-family: 'Inter', sans-serif; padding: 20px; background: #f8fafc; color: #0f172a; margin: 0; }
.preview-card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
.badge { display: inline-block; font-size: 12px; font-weight: 700; padding: 3px 10px; border-radius: 99px; background: #fef3c7; color: #b45309; margin-bottom: 10px; }
h3 { margin: 0 0 8px; font-size: 16px; }
.call-text { font-size: 13px; color: #475569; margin: 0 0 12px; word-break: break-all; }
code { background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-family: monospace; }
.result-box { background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px; font-size: 13px; font-family: monospace; margin: 0; white-space: pre-wrap; }`;

  return {
    id,
    number: num,
    chapterId: 'ch-2',
    subjectId: 'frontend',
    moduleId: 'ch-2',
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
          return { passed: false, expected: JSON.stringify(t.expected), actual: `ไม่พบฟังก์ชัน ${fnName}` };
        }
        const clonedArgs = JSON.parse(JSON.stringify(t.args));
        const actual = fn(...clonedArgs);
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

const CHAPTER_2_PROBLEMS = [
  // ======================== ง่าย (20 ข้อ: 1 - 20) ========================
  makeDataProblem({
    num: 1,
    id: 'ch2-01',
    title: 'นับจำนวนสมาชิกทั้งหมดใน Array',
    difficulty: 'ง่าย',
    tags: ['Array', '.length'],
    description: 'เขียนฟังก์ชัน <code>getArrayCount(arr)</code> เพื่อคืนค่าจำนวนสมาชิกทั้งหมดใน Array',
    requirements: ['ใช้พร็อพเพอร์ตี้ <code>.length</code> บน Array'],
    fnName: 'getArrayCount',
    params: 'arr',
    sampleCall: 'getArrayCount(["HTML", "CSS", "JS"])',
    solutionBody: '  return arr.length;',
    hints: ['เขียน return arr.length;'],
    tests: [
      { name: 'Array 3 สมาชิก คืนค่า 3', args: [['HTML', 'CSS', 'JS']], expected: 3 },
      { name: 'Array ว่าง [] คืนค่า 0', args: [[]], expected: 0 },
      { name: 'Array ตัวเลข 5 ตัว คืนค่า 5', args: [[1, 2, 3, 4, 5]], expected: 5 }
    ]
  }),
  makeDataProblem({
    num: 2,
    id: 'ch2-02',
    title: 'ดึงสมาชิกตัวแรกสุดของ Array',
    difficulty: 'ง่าย',
    tags: ['Array', 'Indexing'],
    description: 'เขียนฟังก์ชัน <code>getFirstElement(arr)</code> ที่คืนค่าสมาชิกตัวแรกของ Array (ถ้า Array ว่างให้คืนค่า <code>null</code>)',
    requirements: ['ถ้า <code>arr.length === 0</code> ให้คืนค่า <code>null</code>', 'ไม่เช่นนั้นคืนค่า <code>arr[0]</code>'],
    fnName: 'getFirstElement',
    params: 'arr',
    sampleCall: 'getFirstElement([10, 20, 30])',
    solutionBody: '  return arr.length > 0 ? arr[0] : null;',
    hints: ['เช็ก arr.length > 0 ก่อนดึง arr[0]'],
    tests: [
      { name: '[10, 20, 30] ตัวแรกคือ 10', args: [[10, 20, 30]], expected: 10 },
      { name: '["A", "B"] ตัวแรกคือ "A"', args: [['A', 'B']], expected: 'A' },
      { name: 'Array ว่าง [] คืนค่า null', args: [[]], expected: null }
    ]
  }),
  makeDataProblem({
    num: 3,
    id: 'ch2-03',
    title: 'ดึงสมาชิกตัวสุดท้ายของ Array',
    difficulty: 'ง่าย',
    tags: ['Array', 'Indexing'],
    description: 'เขียนฟังก์ชัน <code>getLastElement(arr)</code> ที่คืนค่าสมาชิกตัวสุดท้ายของ Array (ถ้าว่างให้คืนค่า <code>null</code>)',
    requirements: ['ดึงค่าตำแหน่ง <code>arr[arr.length - 1]</code>'],
    fnName: 'getLastElement',
    params: 'arr',
    sampleCall: 'getLastElement(["แดง", "เขียว", "น้ำเงิน"])',
    solutionBody: '  return arr.length > 0 ? arr[arr.length - 1] : null;',
    hints: ['ใช้ arr[arr.length - 1] เมื่อ arr.length > 0'],
    tests: [
      { name: '["แดง", "เขียว", "น้ำเงิน"] ตัวท้ายคือ "น้ำเงิน"', args: [['แดง', 'เขียว', 'น้ำเงิน']], expected: 'น้ำเงิน' },
      { name: '[99] ตัวท้ายคือ 99', args: [[99]], expected: 99 },
      { name: '[] คืนค่า null', args: [[]], expected: null }
    ]
  }),
  makeDataProblem({
    num: 4,
    id: 'ch2-04',
    title: 'คูณสองให้ตัวเลขทุกตัวใน Array (.map)',
    difficulty: 'ง่าย',
    tags: ['Array.map'],
    description: 'เขียนฟังก์ชัน <code>doubleNumbers(nums)</code> ที่สร้าง Array ใหม่โดยนำตัวเลขทุกตัวใน <code>nums</code> มาคูณ 2',
    requirements: ['ใช้เมธอด <code>.map()</code> เพื่อแปลงค่าทุกตัวใน Array'],
    fnName: 'doubleNumbers',
    params: 'nums',
    sampleCall: 'doubleNumbers([1, 2, 3, 4])',
    solutionBody: '  return nums.map(n => n * 2);',
    hints: ['เขียน return nums.map(n => n * 2);'],
    tests: [
      { name: '[1, 2, 3, 4] กลายเป็น [2, 4, 6, 8]', args: [[1, 2, 3, 4]], expected: [2, 4, 6, 8] },
      { name: '[0, -5, 10] กลายเป็น [0, -10, 20]', args: [[0, -5, 10]], expected: [0, -10, 20] },
      { name: '[] กลายเป็น []', args: [[]], expected: [] }
    ]
  }),
  makeDataProblem({
    num: 5,
    id: 'ch2-05',
    title: 'กรองเอาเฉพาะเลขคู่จาก Array (.filter)',
    difficulty: 'ง่าย',
    tags: ['Array.filter'],
    description: 'เขียนฟังก์ชัน <code>filterEvenNumbers(nums)</code> ที่คืนค่า Array ใหม่เฉพาะตัวเลขที่เป็นเลขคู่',
    requirements: ['ใช้เมธอด <code>.filter()</code> ร่วมกับเงื่อนไข <code>n % 2 === 0</code>'],
    fnName: 'filterEvenNumbers',
    params: 'nums',
    sampleCall: 'filterEvenNumbers([1, 2, 3, 4, 5, 6])',
    solutionBody: '  return nums.filter(n => n % 2 === 0);',
    hints: ['ใช้ nums.filter(n => n % 2 === 0)'],
    tests: [
      { name: '[1, 2, 3, 4, 5, 6] ได้ [2, 4, 6]', args: [[1, 2, 3, 4, 5, 6]], expected: [2, 4, 6] },
      { name: '[1, 3, 5] ไม่มีเลขคู่ ได้ []', args: [[1, 3, 5]], expected: [] },
      { name: '[10, 20] ได้ [10, 20]', args: [[10, 20]], expected: [10, 20] }
    ]
  }),
  makeDataProblem({
    num: 6,
    id: 'ch2-06',
    title: 'กรองตัวเลขที่มีค่ามากกว่าเกณฑ์ขั้นต่ำ',
    difficulty: 'ง่าย',
    tags: ['Array.filter'],
    description: 'เขียนฟังก์ชัน <code>filterGreaterThan(nums, min)</code> ที่คืนค่าเฉพาะตัวเลขที่มีค่ามากกว่า <code>min</code> (<code>&gt; min</code>)',
    requirements: ['ใช้ <code>nums.filter(n =&gt; n &gt; min)</code>'],
    fnName: 'filterGreaterThan',
    params: 'nums, min',
    sampleCall: 'filterGreaterThan([10, 50, 30, 80], 40)',
    solutionBody: '  return nums.filter(n => n > min);',
    hints: ['เขียน return nums.filter(n => n > min);'],
    tests: [
      { name: 'กรองค่าที่ > 40 จาก [10, 50, 30, 80] ได้ [50, 80]', args: [[10, 50, 30, 80], 40], expected: [50, 80] },
      { name: 'กรองค่าที่ > 100 จาก [10, 20] ได้ []', args: [[10, 20], 100], expected: [] },
      { name: 'กรองค่าที่ > 0 จาก [-5, 0, 5] ได้ [5]', args: [[-5, 0, 5], 0], expected: [5] }
    ]
  }),
  makeDataProblem({
    num: 7,
    id: 'ch2-07',
    title: 'หาผลรวมตัวเลขทั้งหมดใน Array (.reduce)',
    difficulty: 'ง่าย',
    tags: ['Array.reduce', 'Loops'],
    description: 'เขียนฟังก์ชัน <code>sumArray(nums)</code> เพื่อหาผลรวมของตัวเลขทุกตัวใน Array (ถ้า Array ว่างให้คืนค่า 0)',
    requirements: ['ใช้ <code>.reduce((sum, n) =&gt; sum + n, 0)</code> หรือวนลูปบวกค่า'],
    fnName: 'sumArray',
    params: 'nums',
    sampleCall: 'sumArray([10, 20, 30, 40])',
    solutionBody: '  return nums.reduce((sum, n) => sum + n, 0);',
    hints: ['ใช้ nums.reduce((sum, n) => sum + n, 0)'],
    tests: [
      { name: '[10, 20, 30, 40] รวมได้ 100', args: [[10, 20, 30, 40]], expected: 100 },
      { name: '[] รวมได้ 0', args: [[]], expected: 0 },
      { name: '[5, -2, 7] รวมได้ 10', args: [[5, -2, 7]], expected: 10 }
    ]
  }),
  makeDataProblem({
    num: 8,
    id: 'ch2-08',
    title: 'ตรวจสอบว่ามีไอเทมที่ต้องการอยู่ใน Array หรือไม่ (.includes)',
    difficulty: 'ง่าย',
    tags: ['Array.includes'],
    description: 'เขียนฟังก์ชัน <code>hasItem(items, target)</code> ที่คืนค่า <code>true</code> ถ้ามี <code>target</code> ใน Array และ <code>false</code> ถ้าไม่มี',
    requirements: ['ใช้เมธอด <code>items.includes(target)</code>'],
    fnName: 'hasItem',
    params: 'items, target',
    sampleCall: 'hasItem(["apple", "banana", "orange"], "banana")',
    solutionBody: '  return items.includes(target);',
    hints: ['เขียน return items.includes(target);'],
    tests: [
      { name: 'มี "banana" ในรายการ (true)', args: [['apple', 'banana', 'orange'], 'banana'], expected: true },
      { name: 'ไม่มี "grape" ในรายการ (false)', args: [['apple', 'banana'], 'grape'], expected: false },
      { name: 'ค้นหาตัวเลข 42 ใน [10, 42, 99] (true)', args: [[10, 42, 99], 42], expected: true }
    ]
  }),
  makeDataProblem({
    num: 9,
    id: 'ch2-09',
    title: 'รวมคำใน Array ให้เป็นประโยคเดียว (.join)',
    difficulty: 'ง่าย',
    tags: ['Array.join'],
    description: 'เขียนฟังก์ชัน <code>joinWords(words)</code> ที่นำคำแต่ละคำใน Array มาต่อกันโดยคั่นด้วยช่องว่าง 1 ช่อง <code>" "</code>',
    requirements: ['ใช้เมธอด <code>words.join(" ")</code>'],
    fnName: 'joinWords',
    params: 'words',
    sampleCall: 'joinWords(["สวัสดี", "นักพัฒนา", "เว็บ"])',
    solutionBody: '  return words.join(" ");',
    hints: ['เขียน return words.join(" ");'],
    tests: [
      { name: '["สวัสดี", "นักพัฒนา", "เว็บ"] ได้ "สวัสดี นักพัฒนา เว็บ"', args: [['สวัสดี', 'นักพัฒนา', 'เว็บ']], expected: 'สวัสดี นักพัฒนา เว็บ' },
      { name: '["Hello", "World"] ได้ "Hello World"', args: [['Hello', 'World']], expected: 'Hello World' },
      { name: '[] ได้ ""', args: [[]], expected: '' }
    ]
  }),
  makeDataProblem({
    num: 10,
    id: 'ch2-10',
    title: 'ดึงชื่อผู้ใช้งานจาก Object',
    difficulty: 'ง่าย',
    tags: ['Object', 'Properties'],
    description: 'เขียนฟังก์ชัน <code>getUserName(user)</code> ที่รับ Object รูปแบบ <code>{ name: "...", age: 20 }</code> แล้วคืนค่าพร็อพเพอร์ตี้ <code>name</code> (ถ้าไม่มีให้คืนค่า <code>"Guest"</code>)',
    requirements: ['เข้าถึง <code>user.name</code> ถ้าไม่มีหรือเป็นค่าว่างให้คืนค่า <code>"Guest"</code>'],
    fnName: 'getUserName',
    params: 'user',
    sampleCall: 'getUserName({ name: "ชินกฤต", role: "Admin" })',
    solutionBody: '  return user && user.name ? user.name : "Guest";',
    hints: ['ใช้ user.name || "Guest"'],
    tests: [
      { name: '{ name: "ชินกฤต" } ได้ "ชินกฤต"', args: [{ name: 'ชินกฤต', role: 'Admin' }], expected: 'ชินกฤต' },
      { name: '{} ไม่มี name ได้ "Guest"', args: [{}], expected: 'Guest' },
      { name: '{ name: "" } ชื่อว่าง ได้ "Guest"', args: [{ name: '' }], expected: 'Guest' }
    ]
  }),
  makeDataProblem({
    num: 11,
    id: 'ch2-11',
    title: 'ดึงเฉพาะรายชื่อสินค้าจาก Array ของ Object (.map)',
    difficulty: 'ง่าย',
    tags: ['Array.map', 'Objects'],
    description: 'เขียนฟังก์ชัน <code>getProductNames(products)</code> ที่รับ Array ของสินค้า <code>{ name, price }</code> แล้วคืนค่า Array ของชื่อสินค้าอย่างเดียว',
    requirements: ['ใช้ <code>products.map(p =&gt; p.name)</code>'],
    fnName: 'getProductNames',
    params: 'products',
    sampleCall: 'getProductNames([{ name: "เมาส์", price: 300 }, { name: "คีย์บอร์ด", price: 900 }])',
    solutionBody: '  return products.map(p => p.name);',
    hints: ['เขียน return products.map(p => p.name);'],
    tests: [
      {
        name: 'ดึงชื่อสินค้า 2 ชิ้นได้ ["เมาส์", "คีย์บอร์ด"]',
        args: [[{ name: 'เมาส์', price: 300 }, { name: 'คีย์บอร์ด', price: 900 }]],
        expected: ['เมาส์', 'คีย์บอร์ด']
      },
      { name: 'กรณี Array ว่าง [] ได้ []', args: [[]], expected: [] },
      { name: 'ดึงชื่อสินค้า 1 ชิ้นได้ ["จอภาพ"]', args: [[{ name: 'จอภาพ', price: 4500 }]], expected: ['จอภาพ'] }
    ]
  }),
  makeDataProblem({
    num: 12,
    id: 'ch2-12',
    title: 'สร้าง Object สินค้าใหม่พร้อมเพิ่มสถานะ inStock',
    difficulty: 'ง่าย',
    tags: ['Object', 'Spread ...'],
    description: 'เขียนฟังก์ชัน <code>markInStock(product)</code> ที่คืนค่า Object ใหม่ที่มีข้อมูลเดิมของ <code>product</code> ครบถ้วน และมี <code>inStock: true</code> เพิ่มเข้าไป',
    requirements: ['ใช้ Spread Operator <code>{ ...product, inStock: true }</code>'],
    fnName: 'markInStock',
    params: 'product',
    sampleCall: 'markInStock({ name: "หูฟัง", price: 590 })',
    solutionBody: '  return { ...product, inStock: true };',
    hints: ['เขียน return { ...product, inStock: true };'],
    tests: [
      {
        name: 'เพิ่ม inStock: true ให้สินค้า',
        args: [{ name: 'หูฟัง', price: 590 }],
        expected: { name: 'หูฟัง', price: 590, inStock: true }
      },
      {
        name: 'กรณีเดิมเป็น inStock: false ต้องถูกเปลี่ยนเป็น true',
        args: [{ name: 'สายชาร์จ', price: 190, inStock: false }],
        expected: { name: 'สายชาร์จ', price: 190, inStock: true }
      },
      {
        name: 'กรณี Object เปล่า {} ได้ { inStock: true }',
        args: [{}],
        expected: { inStock: true }
      }
    ]
  }),
  makeDataProblem({
    num: 13,
    id: 'ch2-13',
    title: 'ค้นหาตัวเลขตัวแรกที่มากกว่า 100 (.find)',
    difficulty: 'ง่าย',
    tags: ['Array.find'],
    description: 'เขียนฟังก์ชัน <code>findFirstOver100(nums)</code> เพื่อหาตัวเลขตัวแรกใน Array ที่มีค่า <code>&gt; 100</code> (ถ้าไม่มีเลยให้คืนค่า <code>null</code>)',
    requirements: ['ใช้ <code>nums.find(n =&gt; n &gt; 100) ?? null</code>'],
    fnName: 'findFirstOver100',
    params: 'nums',
    sampleCall: 'findFirstOver100([25, 80, 150, 200])',
    solutionBody: '  const found = nums.find(n => n > 100);\n  return found !== undefined ? found : null;',
    hints: ['เมธอด .find() จะคืนค่า undefined ถ้าไม่เจอ ดังนั้นแปลงเป็น null ด้วย ?? null'],
    tests: [
      { name: '[25, 80, 150, 200] ตัวแรกที่ > 100 คือ 150', args: [[25, 80, 150, 200]], expected: 150 },
      { name: '[10, 50, 100] ไม่มีตัวใด > 100 คืนค่า null', args: [[10, 50, 100]], expected: null },
      { name: '[101, 99] ได้ 101', args: [[101, 99]], expected: 101 }
    ]
  }),
  makeDataProblem({
    num: 14,
    id: 'ch2-14',
    title: 'ตรวจสอบว่าตัวเลขทุกตัวเป็นค่าบวกหรือไม่ (.every)',
    difficulty: 'ง่าย',
    tags: ['Array.every'],
    description: 'เขียนฟังก์ชัน <code>areAllPositive(nums)</code> ที่คืนค่า <code>true</code> ถ้าตัวเลขทุกตัวใน Array มีค่า <code>&gt; 0</code>',
    requirements: ['ใช้เมธอด <code>nums.every(n =&gt; n &gt; 0)</code>'],
    fnName: 'areAllPositive',
    params: 'nums',
    sampleCall: 'areAllPositive([5, 12, 8])',
    solutionBody: '  return nums.every(n => n > 0);',
    hints: ['เขียน return nums.every(n => n > 0);'],
    tests: [
      { name: '[5, 12, 8] เป็นค่าบวกทั้งหมด (true)', args: [[5, 12, 8]], expected: true },
      { name: '[5, -1, 8] มีค่าติดลบ (false)', args: [[5, -1, 8]], expected: false },
      { name: '[0, 5] มีเลข 0 ซึ่งไม่มากกว่า 0 (false)', args: [[0, 5]], expected: false }
    ]
  }),
  makeDataProblem({
    num: 15,
    id: 'ch2-15',
    title: 'ตรวจสอบว่ามีสินค้าราคาประหยัดอย่างน้อย 1 ชิ้นหรือไม่ (.some)',
    difficulty: 'ง่าย',
    tags: ['Array.some'],
    description: 'เขียนฟังก์ชัน <code>hasCheapItem(prices)</code> ที่คืนค่า <code>true</code> ถ้ามีราคาสินค้าอย่างน้อย 1 ชิ้นที่น้อยกว่า 100 บาท (<code>&lt; 100</code>)',
    requirements: ['ใช้เมธอด <code>prices.some(p =&gt; p &lt; 100)</code>'],
    fnName: 'hasCheapItem',
    params: 'prices',
    sampleCall: 'hasCheapItem([250, 89, 500])',
    solutionBody: '  return prices.some(p => p < 100);',
    hints: ['เขียน return prices.some(p => p < 100);'],
    tests: [
      { name: '[250, 89, 500] มี 89 ที่ < 100 (true)', args: [[250, 89, 500]], expected: true },
      { name: '[100, 200, 300] ไม่มีตัวใด < 100 (false)', args: [[100, 200, 300]], expected: false },
      { name: '[] คืนค่า false', args: [[]], expected: false }
    ]
  }),
  makeDataProblem({
    num: 16,
    id: 'ch2-16',
    title: 'รวม Array สองชุดเข้าด้วยกัน (Spread / concat)',
    difficulty: 'ง่าย',
    tags: ['Array', 'Spread ...'],
    description: 'เขียนฟังก์ชัน <code>mergeArrays(arr1, arr2)</code> ที่นำสมาชิกของ <code>arr1</code> และ <code>arr2</code> มาต่อกันเป็น Array เดียว',
    requirements: ['ใช้ <code>[...arr1, ...arr2]</code> หรือ <code>arr1.concat(arr2)</code>'],
    fnName: 'mergeArrays',
    params: 'arr1, arr2',
    sampleCall: 'mergeArrays([1, 2], [3, 4])',
    solutionBody: '  return [...arr1, ...arr2];',
    hints: ['เขียน return [...arr1, ...arr2];'],
    tests: [
      { name: 'รวม [1, 2] กับ [3, 4] ได้ [1, 2, 3, 4]', args: [[1, 2], [3, 4]], expected: [1, 2, 3, 4] },
      { name: 'รวม ["a"] กับ [] ได้ ["a"]', args: [['a'], []], expected: ['a'] },
      { name: 'รวม [] กับ ["b"] ได้ ["b"]', args: [[], ['b']], expected: ['b'] }
    ]
  }),
  makeDataProblem({
    num: 17,
    id: 'ch2-17',
    title: 'ดึงสมาชิก n ตัวแรกจาก Array (.slice)',
    difficulty: 'ง่าย',
    tags: ['Array.slice'],
    description: 'เขียนฟังก์ชัน <code>takeFirstN(arr, n)</code> ที่คืนค่า Array ของสมาชิก <code>n</code> ตัวแรก',
    requirements: ['ใช้ <code>arr.slice(0, n)</code>'],
    fnName: 'takeFirstN',
    params: 'arr, n',
    sampleCall: 'takeFirstN(["A", "B", "C", "D"], 2)',
    solutionBody: '  return arr.slice(0, n);',
    hints: ['เขียน return arr.slice(0, n);'],
    tests: [
      { name: 'ดึง 2 ตัวแรกจาก ["A", "B", "C", "D"] ได้ ["A", "B"]', args: [['A', 'B', 'C', 'D'], 2], expected: ['A', 'B'] },
      { name: 'ดึง 3 ตัวแรกจาก [10, 20] ได้ [10, 20]', args: [[10, 20], 3], expected: [10, 20] },
      { name: 'ดึง 0 ตัว ได้ []', args: [[1, 2, 3], 0], expected: [] }
    ]
  }),
  makeDataProblem({
    num: 18,
    id: 'ch2-18',
    title: 'แปลงรายชื่อใน Array ให้เป็นตัวพิมพ์ใหญ่ทั้งหมด',
    difficulty: 'ง่าย',
    tags: ['Array.map', 'Strings'],
    description: 'เขียนฟังก์ชัน <code>upperCaseNames(names)</code> ที่แปลงข้อความทุกตัวใน Array ให้เป็นตัวพิมพ์ใหญ่',
    requirements: ['ใช้ <code>names.map(name =&gt; name.toUpperCase())</code>'],
    fnName: 'upperCaseNames',
    params: 'names',
    sampleCall: 'upperCaseNames(["html", "css", "js"])',
    solutionBody: '  return names.map(name => name.toUpperCase());',
    hints: ['เขียน return names.map(name => name.toUpperCase());'],
    tests: [
      { name: '["html", "css", "js"] ได้ ["HTML", "CSS", "JS"]', args: [['html', 'css', 'js']], expected: ['HTML', 'CSS', 'JS'] },
      { name: '[" React "] ได้ [" REACT "]', args: [[' React ']], expected: [' REACT '] },
      { name: '[] ได้ []', args: [[]], expected: [] }
    ]
  }),
  makeDataProblem({
    num: 19,
    id: 'ch2-19',
    title: 'นับจำนวนคำที่มีความยาวมากกว่า 3 ตัวอักษร',
    difficulty: 'ง่าย',
    tags: ['Array.filter', '.length'],
    description: 'เขียนฟังก์ชัน <code>countLongWords(words)</code> เพื่อนับว่ามีกี่คำใน Array ที่มีความยาว <code>&gt; 3</code> ตัวอักษร',
    requirements: ['ใช้ <code>words.filter(w =&gt; w.length &gt; 3).length</code>'],
    fnName: 'countLongWords',
    params: 'words',
    sampleCall: 'countLongWords(["JS", "HTML", "CSS", "React", "Node"])',
    solutionBody: '  return words.filter(w => w.length > 3).length;',
    hints: ['กรองคำที่ w.length > 3 แล้วนับจำนวนด้วย .length'],
    tests: [
      { name: '["JS", "HTML", "CSS", "React", "Node"] มี 3 คำที่ยาว > 3', args: [['JS', 'HTML', 'CSS', 'React', 'Node']], expected: 3 },
      { name: '["a", "ab", "abc"] ไม่มีคำที่ยาว > 3 ได้ 0', args: [['a', 'ab', 'abc']], expected: 0 },
      { name: '["Code", "Test"] ได้ 2', args: [['Code', 'Test']], expected: 2 }
    ]
  }),
  makeDataProblem({
    num: 20,
    id: 'ch2-20',
    title: 'ดึงชื่อพร็อพเพอร์ตี้ (Keys) ทั้งหมดของ Object',
    difficulty: 'ง่าย',
    tags: ['Object.keys'],
    description: 'เขียนฟังก์ชัน <code>getObjectKeys(obj)</code> ที่คืนค่า Array ของชื่อ Key ทั้งหมดใน Object',
    requirements: ['ใช้คำสั่ง <code>Object.keys(obj)</code>'],
    fnName: 'getObjectKeys',
    params: 'obj',
    sampleCall: 'getObjectKeys({ id: 1, title: "Web", active: true })',
    solutionBody: '  return Object.keys(obj);',
    hints: ['เขียน return Object.keys(obj);'],
    tests: [
      { name: '{ id: 1, title: "Web", active: true } ได้ ["id", "title", "active"]', args: [{ id: 1, title: 'Web', active: true }], expected: ['id', 'title', 'active'] },
      { name: '{} ได้ []', args: [{}], expected: [] },
      { name: '{ a: 10, b: 20 } ได้ ["a", "b"]', args: [{ a: 10, b: 20 }], expected: ['a', 'b'] }
    ]
  }),

  // ======================== ปานกลาง (10 ข้อ: 21 - 30) ========================
  makeDataProblem({
    num: 21,
    id: 'ch2-21',
    title: 'กรองสินค้าพร้อมขายและสร้างป้ายชื่อราคา (filter + map)',
    difficulty: 'ปานกลาง',
    tags: ['filter', 'map', 'Chaining'],
    description: 'เขียนฟังก์ชัน <code>getAvailableLabels(products)</code> ที่คัดเฉพาะสินค้าที่ <code>inStock === true</code> แล้วแปลงเป็นข้อความ <code>"[name]: [price] บาท"</code>',
    requirements: [
      'กรองเฉพาะ <code>p.inStock === true</code>',
      'แปลงเป็นข้อความรูปแบบ <code>"[name]: [price] บาท"</code>'
    ],
    fnName: 'getAvailableLabels',
    params: 'products',
    sampleCall: 'getAvailableLabels([{ name: "เมาส์", price: 500, inStock: true }, { name: "จอ", price: 4000, inStock: false }])',
    solutionBody: '  return products.filter(p => p.inStock).map(p => `${p.name}: ${p.price} บาท`);',
    hints: ['ใช้ .filter(p => p.inStock) ต่อด้วย .map(p => `${p.name}: ${p.price} บาท`)'],
    tests: [
      {
        name: 'คัดเฉพาะสินค้าพร้อมขายและจัดรูปแบบถูกต้อง',
        args: [[
          { name: 'เมาส์', price: 500, inStock: true },
          { name: 'จอ', price: 4000, inStock: false },
          { name: 'คีย์บอร์ด', price: 1200, inStock: true }
        ]],
        expected: ['เมาส์: 500 บาท', 'คีย์บอร์ด: 1200 บาท']
      },
      {
        name: 'กรณีของหมดทุกชิ้น ได้ []',
        args: [[{ name: 'หูฟัง', price: 800, inStock: false }]],
        expected: []
      },
      {
        name: 'กรณี Array ว่าง [] ได้ []',
        args: [[]],
        expected: []
      }
    ]
  }),
  makeDataProblem({
    num: 22,
    id: 'ch2-22',
    title: 'คำนวณยอดเงินรวมในตะกร้าสินค้า (price × qty)',
    difficulty: 'ปานกลาง',
    tags: ['Array.reduce', 'Objects'],
    description: 'เขียนฟังก์ชัน <code>calculateCartTotal(cart)</code> ที่รับรายการสินค้า <code>{ name, price, qty }</code> แล้วคำนวณราคารวมทั้งหมด',
    requirements: ['คูณ <code>item.price * item.qty</code> ของแต่ละชิ้นแล้วนำมารวมกัน'],
    fnName: 'calculateCartTotal',
    params: 'cart',
    sampleCall: 'calculateCartTotal([{ name: "กาแฟ", price: 60, qty: 2 }, { name: "เค้ก", price: 95, qty: 1 }])',
    solutionBody: '  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);',
    hints: ['ใช้ cart.reduce((sum, item) => sum + item.price * item.qty, 0)'],
    tests: [
      {
        name: 'กาแฟ 60×2 + เค้ก 95×1 = 215 บาท',
        args: [[{ name: 'กาแฟ', price: 60, qty: 2 }, { name: 'เค้ก', price: 95, qty: 1 }]],
        expected: 215
      },
      { name: 'ตะกร้าว่าง [] ได้ 0 บาท', args: [[]], expected: 0 },
      {
        name: 'สินค้า 3 รายการ รวมเป็น 1000 บาท',
        args: [[{ name: 'A', price: 200, qty: 2 }, { name: 'B', price: 300, qty: 2 }]],
        expected: 1000
      }
    ]
  }),
  makeDataProblem({
    num: 23,
    id: 'ch2-23',
    title: 'ค้นหา Object ผู้ใช้จาก ID (.find)',
    difficulty: 'ปานกลาง',
    tags: ['Array.find', 'Objects'],
    description: 'เขียนฟังก์ชัน <code>findUserById(users, id)</code> เพื่อค้นหา Object ผู้ใช้ที่มี <code>user.id === id</code> ถ้าไม่พบให้คืนค่า <code>null</code>',
    requirements: ['คืนค่า Object ผู้ใช้ที่ตรงกับ <code>id</code> หรือ <code>null</code> ถ้าไม่พบ'],
    fnName: 'findUserById',
    params: 'users, id',
    sampleCall: 'findUserById([{ id: 1, name: "ก้อง" }, { id: 2, name: "ฟ้า" }], 2)',
    solutionBody: '  return users.find(u => u.id === id) || null;',
    hints: ['ใช้ users.find(u => u.id === id) || null'],
    tests: [
      {
        name: 'ค้นหา id = 2 พบ { id: 2, name: "ฟ้า" }',
        args: [[{ id: 1, name: 'ก้อง' }, { id: 2, name: 'ฟ้า' }], 2],
        expected: { id: 2, name: 'ฟ้า' }
      },
      {
        name: 'ค้นหา id = 99 ที่ไม่มีในระบบ คืนค่า null',
        args: [[{ id: 1, name: 'ก้อง' }], 99],
        expected: null
      },
      { name: 'ค้นหาใน Array ว่าง [] คืนค่า null', args: [[], 1], expected: null }
    ]
  }),
  makeDataProblem({
    num: 24,
    id: 'ch2-24',
    title: 'เรียงลำดับตัวเลขจากน้อยไปมากโดยไม่แก้ Array ต้นฉบับ',
    difficulty: 'ปานกลาง',
    tags: ['Array.sort', 'Immutability'],
    description: 'เขียนฟังก์ชัน <code>sortNumbersAsc(nums)</code> เพื่อคืนค่า Array ใหม่ที่เรียงตัวเลขจากน้อยไปมาก',
    requirements: ['สำเนา Array ด้วย <code>[...nums]</code> ก่อนใช้ <code>.sort((a, b) =&gt; a - b)</code>'],
    fnName: 'sortNumbersAsc',
    params: 'nums',
    sampleCall: 'sortNumbersAsc([40, 5, 100, 12])',
    solutionBody: '  return [...nums].sort((a, b) => a - b);',
    hints: ['ระวัง! .sort() เปล่าๆ จะเรียงเป็นตัวอักษร ต้องใส่ (a, b) => a - b เสมอ'],
    tests: [
      { name: '[40, 5, 100, 12] เรียงเป็น [5, 12, 40, 100]', args: [[40, 5, 100, 12]], expected: [5, 12, 40, 100] },
      { name: 'เรียงเลขติดลบ [0, -10, 5, -2] เป็น [-10, -2, 0, 5]', args: [[0, -10, 5, -2]], expected: [-10, -2, 0, 5] },
      { name: '[] ได้ []', args: [[]], expected: [] }
    ]
  }),
  makeDataProblem({
    num: 25,
    id: 'ch2-25',
    title: 'เรียงลำดับสินค้าตามราคาจากแพงไปถูก (Sort Objects)',
    difficulty: 'ปานกลาง',
    tags: ['Array.sort', 'Objects'],
    description: 'เขียนฟังก์ชัน <code>sortProductsByPriceDesc(products)</code> เพื่อเรียงสินค้าตาม <code>price</code> จากมากไปน้อย (แพงไปถูก)',
    requirements: ['ใช้ <code>[...products].sort((a, b) =&gt; b.price - a.price)</code>'],
    fnName: 'sortProductsByPriceDesc',
    params: 'products',
    sampleCall: 'sortProductsByPriceDesc([{ name: "A", price: 100 }, { name: "B", price: 500 }, { name: "C", price: 300 }])',
    solutionBody: '  return [...products].sort((a, b) => b.price - a.price);',
    hints: ['เรียงจากมากไปน้อยใช้ b.price - a.price'],
    tests: [
      {
        name: 'เรียงสินค้าจากราคา 500 -> 300 -> 100 ถูกต้อง',
        args: [[
          { name: 'A', price: 100 },
          { name: 'B', price: 500 },
          { name: 'C', price: 300 }
        ]],
        expected: [
          { name: 'B', price: 500 },
          { name: 'C', price: 300 },
          { name: 'A', price: 100 }
        ]
      },
      { name: '[] ได้ []', args: [[]], expected: [] },
      {
        name: 'สินค้าชิ้นเดียวคืนค่าเดิม',
        args: [[{ name: 'Solo', price: 99 }]],
        expected: [{ name: 'Solo', price: 99 }]
      }
    ]
  }),
  makeDataProblem({
    num: 26,
    id: 'ch2-26',
    title: 'คัดค่าที่ซ้ำกันใน Array ออก (Unique Array)',
    difficulty: 'ปานกลาง',
    tags: ['Set', 'Array'],
    description: 'เขียนฟังก์ชัน <code>getUniqueValues(arr)</code> ที่ลบสมาชิกที่ซ้ำกันออก โดยรักษาลำดับเดิมไว้',
    requirements: ['สามารถใช้ <code>[...new Set(arr)]</code>'],
    fnName: 'getUniqueValues',
    params: 'arr',
    sampleCall: 'getUniqueValues(["JS", "CSS", "JS", "HTML", "CSS"])',
    solutionBody: '  return [...new Set(arr)];',
    hints: ['Set ใน JavaScript จะเก็บเฉพาะค่าที่ไม่ซ้ำกัน: [...new Set(arr)]'],
    tests: [
      { name: '["JS", "CSS", "JS", "HTML", "CSS"] ได้ ["JS", "CSS", "HTML"]', args: [['JS', 'CSS', 'JS', 'HTML', 'CSS']], expected: ['JS', 'CSS', 'HTML'] },
      { name: '[1, 1, 2, 3, 3] ได้ [1, 2, 3]', args: [[1, 1, 2, 3, 3]], expected: [1, 2, 3] },
      { name: '[] ได้ []', args: [[]], expected: [] }
    ]
  }),
  makeDataProblem({
    num: 27,
    id: 'ch2-27',
    title: 'หาค่าต่ำสุดและสูงสุดใน Array คืนค่าเป็น Object { min, max }',
    difficulty: 'ปานกลาง',
    tags: ['Math.min/max', 'Objects'],
    description: 'เขียนฟังก์ชัน <code>getMinMax(nums)</code> ที่คืนค่า Object <code>{ min: ค่าต่ำสุด, max: ค่าสูงสุด }</code> (ถ้า Array ว่างคืนค่า <code>{ min: 0, max: 0 }</code>)',
    requirements: ['ใช้ <code>Math.min(...nums)</code> และ <code>Math.max(...nums)</code>'],
    fnName: 'getMinMax',
    params: 'nums',
    sampleCall: 'getMinMax([15, 3, 42, 8])',
    solutionBody: '  if (nums.length === 0) return { min: 0, max: 0 };\n  return { min: Math.min(...nums), max: Math.max(...nums) };',
    hints: ['เช็ก nums.length === 0 ก่อน', 'ใช้ Math.min(...nums) และ Math.max(...nums)'],
    tests: [
      { name: '[15, 3, 42, 8] ได้ { min: 3, max: 42 }', args: [[15, 3, 42, 8]], expected: { min: 3, max: 42 } },
      { name: '[-10, 0, 10] ได้ { min: -10, max: 10 }', args: [[-10, 0, 10]], expected: { min: -10, max: 10 } },
      { name: '[] ได้ { min: 0, max: 0 }', args: [[]], expected: { min: 0, max: 0 } }
    ]
  }),
  makeDataProblem({
    num: 28,
    id: 'ch2-28',
    title: 'อัปเดตคะแนนของผู้ใช้ตาม ID ที่ระบุ (.map + Spread)',
    difficulty: 'ปานกลาง',
    tags: ['Array.map', 'Immutable Update'],
    description: 'เขียนฟังก์ชัน <code>updateUserScore(users, targetId, newScore)</code> ที่คืนค่า Array ของผู้ใช้โดยเปลี่ยน <code>score</code> ของคนที่มี <code>id === targetId</code> เป็น <code>newScore</code>',
    requirements: ['ใช้ <code>users.map(u =&gt; u.id === targetId ? { ...u, score: newScore } : u)</code>'],
    fnName: 'updateUserScore',
    params: 'users, targetId, newScore',
    sampleCall: 'updateUserScore([{ id: 1, name: "เอ", score: 50 }, { id: 2, name: "บี", score: 70 }], 1, 99)',
    solutionBody: '  return users.map(u => (u.id === targetId ? { ...u, score: newScore } : u));',
    hints: ['ใช้ .map() เช็กว่า u.id === targetId หรือไม่ ถ้าใช่ให้สร้าง Object ใหม่พร้อม score: newScore'],
    tests: [
      {
        name: 'อัปเดตคะแนนของ id = 1 เป็น 99 โดยที่คนอื่นคงเดิม',
        args: [[{ id: 1, name: 'เอ', score: 50 }, { id: 2, name: 'บี', score: 70 }], 1, 99],
        expected: [{ id: 1, name: 'เอ', score: 99 }, { id: 2, name: 'บี', score: 70 }]
      },
      {
        name: 'กรณีไม่มี targetId ที่ตรง ข้อมูลทุกคนคงเดิม',
        args: [[{ id: 1, name: 'เอ', score: 50 }], 99, 100],
        expected: [{ id: 1, name: 'เอ', score: 50 }]
      },
      { name: 'กรณี Array ว่าง [] ได้ []', args: [[], 1, 50], expected: [] }
    ]
  }),
  makeDataProblem({
    num: 29,
    id: 'ch2-29',
    title: 'ค้นหาสินค้าตามคำค้นหาแบบไม่สนตัวพิมพ์เล็ก-ใหญ่',
    difficulty: 'ปานกลาง',
    tags: ['filter', 'toLowerCase', 'includes'],
    description: 'เขียนฟังก์ชัน <code>searchProducts(products, keyword)</code> ที่กรองสินค้าที่ <code>p.title</code> มีคำว่า <code>keyword</code> อยู่โดยไม่สนใจตัวพิมพ์เล็ก-ใหญ่',
    requirements: ['แปลงทั้ง <code>p.title</code> และ <code>keyword.trim()</code> เป็น <code>.toLowerCase()</code> ก่อนเช็ก <code>.includes()</code>'],
    fnName: 'searchProducts',
    params: 'products, keyword',
    sampleCall: 'searchProducts([{ title: "Gaming Mouse" }, { title: "Office Chair" }], "mouse")',
    solutionBody: '  const q = keyword.trim().toLowerCase();\n  return products.filter(p => p.title.toLowerCase().includes(q));',
    hints: ['const q = keyword.trim().toLowerCase();', 'return products.filter(p => p.title.toLowerCase().includes(q));'],
    tests: [
      {
        name: 'ค้นหา "mouse" พบ Gaming Mouse และ Wireless Mouse',
        args: [[{ title: 'Gaming Mouse' }, { title: 'Office Chair' }, { title: 'Wireless MOUSE' }], 'mouse'],
        expected: [{ title: 'Gaming Mouse' }, { title: 'Wireless MOUSE' }]
      },
      {
        name: 'ค้นหาคำที่ไม่มี ได้ []',
        args: [[{ title: 'Keyboard' }], 'monitor'],
        expected: []
      },
      {
        name: 'ค้นหาด้วยช่องว่าง "" คืนค่าทุกชิ้น',
        args: [[{ title: 'Item 1' }], '  '],
        expected: [{ title: 'Item 1' }]
      }
    ]
  }),
  makeDataProblem({
    num: 30,
    id: 'ch2-30',
    title: 'คำนวณค่าเฉลี่ยคะแนนสอบใน Array',
    difficulty: 'ปานกลาง',
    tags: ['reduce', 'Math'],
    description: 'เขียนฟังก์ชัน <code>getAverageScore(scores)</code> ที่คืนค่าคะแนนเฉลี่ย (ผลรวมหารด้วยจำนวนสมาชิก) ถ้า Array ว่างให้คืนค่า <code>0</code>',
    requirements: ['ถ้า <code>scores.length === 0</code> คืนค่า <code>0</code>', 'คำนวณ <code>sum / scores.length</code>'],
    fnName: 'getAverageScore',
    params: 'scores',
    sampleCall: 'getAverageScore([80, 90, 70, 100])',
    solutionBody: '  if (scores.length === 0) return 0;\n  const sum = scores.reduce((acc, s) => acc + s, 0);\n  return sum / scores.length;',
    hints: ['หาผลรวมด้วย .reduce() แล้วหารด้วย scores.length'],
    tests: [
      { name: '[80, 90, 70, 100] ค่าเฉลี่ยคือ 85', args: [[80, 90, 70, 100]], expected: 85 },
      { name: '[50, 100] ค่าเฉลี่ยคือ 75', args: [[50, 100]], expected: 75 },
      { name: '[] คืนค่า 0', args: [[]], expected: 0 }
    ]
  }),

  // ======================== ยาก (5 ข้อ: 31 - 35) ========================
  makeDataProblem({
    num: 31,
    id: 'ch2-31',
    title: 'สรุปข้อมูลตะกร้าสินค้าเชิงลึก (totalItems, totalPrice, itemNames)',
    difficulty: 'ยาก',
    tags: ['reduce', 'Object Summary'],
    description: 'เขียนฟังก์ชัน <code>summarizeCartDetail(cart)</code> ที่รับ Array ของ <code>{ name, price, qty }</code> แล้วคืนค่า Object สรุปผล 3 ค่า',
    requirements: [
      'คืนค่า <code>{ totalItems: จำนวนชิ้นรวม, totalPrice: ราคารวม, itemNames: Array ชื่อสินค้าทั้งหมด }</code>',
      'ถ้าตะกร้าว่างให้คืนค่า <code>{ totalItems: 0, totalPrice: 0, itemNames: [] }</code>'
    ],
    fnName: 'summarizeCartDetail',
    params: 'cart',
    sampleCall: 'summarizeCartDetail([{ name: "สมุด", price: 40, qty: 2 }, { name: "ปากกา", price: 15, qty: 3 }])',
    solutionBody: '  return cart.reduce(\n    (acc, item) => {\n      acc.totalItems += item.qty;\n      acc.totalPrice += item.price * item.qty;\n      acc.itemNames.push(item.name);\n      return acc;\n    },\n    { totalItems: 0, totalPrice: 0, itemNames: [] }\n  );',
    hints: ['ใช้ .reduce() โดยมีค่าเริ่มต้นเป็น { totalItems: 0, totalPrice: 0, itemNames: [] }'],
    tests: [
      {
        name: 'สรุปตะกร้า 2 รายการได้ครบทั้งจำนวนชิ้น ราคารวม และรายชื่อ',
        args: [[{ name: 'สมุด', price: 40, qty: 2 }, { name: 'ปากกา', price: 15, qty: 3 }]],
        expected: { totalItems: 5, totalPrice: 125, itemNames: ['สมุด', 'ปากกา'] }
      },
      {
        name: 'กรณีตะกร้าว่าง []',
        args: [[]],
        expected: { totalItems: 0, totalPrice: 0, itemNames: [] }
      },
      {
        name: 'กรณีสินค้าชิ้นเดียวแต่หลายจำนวน',
        args: [[{ name: 'เมาส์', price: 500, qty: 4 }]],
        expected: { totalItems: 4, totalPrice: 2000, itemNames: ['เมาส์'] }
      }
    ]
  }),
  makeDataProblem({
    num: 32,
    id: 'ch2-32',
    title: 'จัดกลุ่มชื่อสินค้าตามหมวดหมู่ (Group By Category)',
    difficulty: 'ยาก',
    tags: ['reduce', 'Data Grouping'],
    description: 'เขียนฟังก์ชัน <code>groupByCategory(products)</code> ที่รับ Array ของ <code>{ name, category }</code> แล้วจัดกลุ่มเป็น Object ที่มี Key เป็นชื่อหมวดหมู่ และ Value เป็น Array ของชื่อสินค้าในหมวดนั้น',
    requirements: [
      'เช่น <code>[{ name: "ชา", category: "น้ำ" }, { name: "เค้ก", category: "ขนม" }]</code>',
      'จะได้ <code>{ น้ำ: ["ชา"], ขนม: ["เค้ก"] }</code>'
    ],
    fnName: 'groupByCategory',
    params: 'products',
    sampleCall: 'groupByCategory([{ name: "ชาเขียว", category: "เครื่องดื่ม" }, { name: "กาแฟ", category: "เครื่องดื่ม" }, { name: "เค้ก", category: "ของหวาน" }])',
    solutionBody: '  return products.reduce((acc, p) => {\n    if (!acc[p.category]) acc[p.category] = [];\n    acc[p.category].push(p.name);\n    return acc;\n  }, {});',
    hints: ['สร้าง Object ว่าง {} แล้ววนลูปเช็กว่า if (!acc[p.category]) acc[p.category] = [];', 'จากนั้น acc[p.category].push(p.name);'],
    tests: [
      {
        name: 'จัดกลุ่มสินค้า 2 หมวดหมู่ได้ถูกต้อง',
        args: [[
          { name: 'ชาเขียว', category: 'เครื่องดื่ม' },
          { name: 'กาแฟ', category: 'เครื่องดื่ม' },
          { name: 'เค้ก', category: 'ของหวาน' }
        ]],
        expected: { เครื่องดื่ม: ['ชาเขียว', 'กาแฟ'], ของหวาน: ['เค้ก'] }
      },
      { name: 'กรณี Array ว่าง [] ได้ {}', args: [[]], expected: {} },
      {
        name: 'กรณีหมวดเดียวทั้งหมด',
        args: [[{ name: 'HTML', category: 'Web' }, { name: 'CSS', category: 'Web' }]],
        expected: { Web: ['HTML', 'CSS'] }
      }
    ]
  }),
  makeDataProblem({
    num: 33,
    id: 'ch2-33',
    title: 'นับความถี่ของคำแต่ละคำใน Array (Word Frequency Counter)',
    difficulty: 'ยาก',
    tags: ['Object', 'Frequency Map'],
    description: 'เขียนฟังก์ชัน <code>countWordFrequency(words)</code> ที่คืนค่า Object นับจำนวนครั้งที่แต่ละคำปรากฏใน Array',
    requirements: [
      'เช่น <code>["js", "css", "js"]</code> ได้ <code>{ js: 2, css: 1 }</code>'
    ],
    fnName: 'countWordFrequency',
    params: 'words',
    sampleCall: 'countWordFrequency(["apple", "banana", "apple", "orange", "banana", "apple"])',
    solutionBody: '  return words.reduce((acc, w) => {\n    acc[w] = (acc[w] || 0) + 1;\n    return acc;\n  }, {});',
    hints: ['ใช้ acc[w] = (acc[w] || 0) + 1; ในการนับเพิ่มทีละ 1'],
    tests: [
      {
        name: 'นับความถี่ผลไม้ได้ถูกต้อง',
        args: [['apple', 'banana', 'apple', 'orange', 'banana', 'apple']],
        expected: { apple: 3, banana: 2, orange: 1 }
      },
      { name: '[] ได้ {}', args: [[]], expected: {} },
      { name: '["x", "x"] ได้ { x: 2 }', args: [['x', 'x']], expected: { x: 2 } }
    ]
  }),
  makeDataProblem({
    num: 34,
    id: 'ch2-34',
    title: 'ยุบ Array ซ้อนหลายชั้นให้เป็นชั้นเดียวและเรียงจากน้อยไปมาก',
    difficulty: 'ยาก',
    tags: ['Array.flat', 'sort'],
    description: 'เขียนฟังก์ชัน <code>flattenAndSort(nestedArr)</code> ที่ยุบ Array ตัวเลขที่ซ้อนกันหลายชั้นให้เป็น Array ชั้นเดียว แล้วเรียงจากน้อยไปมาก',
    requirements: ['ใช้ <code>nestedArr.flat(Infinity).sort((a, b) =&gt; a - b)</code>'],
    fnName: 'flattenAndSort',
    params: 'nestedArr',
    sampleCall: 'flattenAndSort([[3, 1], [4, [2, 5]]])',
    solutionBody: '  return nestedArr.flat(Infinity).sort((a, b) => a - b);',
    hints: ['ใช้ .flat(Infinity) เพื่อยุบทุกระดับชั้น แล้วต่อด้วย .sort((a, b) => a - b)'],
    tests: [
      { name: '[[3, 1], [4, [2, 5]]] ได้ [1, 2, 3, 4, 5]', args: [[[3, 1], [4, [2, 5]]]], expected: [1, 2, 3, 4, 5] },
      { name: '[[10], [], [2, 8]] ได้ [2, 8, 10]', args: [[[10], [], [2, 8]]], expected: [2, 8, 10] },
      { name: '[] ได้ []', args: [[]], expected: [] }
    ]
  }),
  makeDataProblem({
    num: 35,
    id: 'ch2-35',
    title: 'คัดรายชื่อนักเรียนที่สอบผ่านและเรียงตามคะแนนจากมากไปน้อย',
    difficulty: 'ยาก',
    tags: ['filter', 'sort', 'map'],
    description: 'เขียนฟังก์ชัน <code>getTopPassedStudents(students)</code> ที่รับ Array ของ <code>{ name, score }</code> คัดเฉพาะคนที่ได้คะแนน <code>&gt;= 60</code> เรียงลำดับจากคะแนนมากไปน้อย แล้วคืนค่าเป็น Array ของชื่อนักเรียน',
    requirements: [
      'กรองเฉพาะ <code>s.score &gt;= 60</code>',
      'เรียงจากคะแนนมากไปน้อย (<code>b.score - a.score</code>)',
      'แปลงด้วย <code>.map(s =&gt; s.name)</code> เพื่อคืนค่าเฉพาะรายชื่อ'
    ],
    fnName: 'getTopPassedStudents',
    params: 'students',
    sampleCall: 'getTopPassedStudents([{ name: "ก้อง", score: 75 }, { name: "บีม", score: 45 }, { name: "ฟ้า", score: 92 }])',
    solutionBody: '  return students\n    .filter(s => s.score >= 60)\n    .sort((a, b) => b.score - a.score)\n    .map(s => s.name);',
    hints: ['ต่อเมธอด 3 ขั้นตอน: .filter(...) -> .sort(...) -> .map(...)'],
    tests: [
      {
        name: 'คัดคนผ่านและเรียงชื่อจากคะแนนสูงสุดลงมาได้ ["ฟ้า", "ก้อง"]',
        args: [[
          { name: 'ก้อง', score: 75 },
          { name: 'บีม', score: 45 },
          { name: 'ฟ้า', score: 92 },
          { name: 'นนท์', score: 60 }
        ]],
        expected: ['ฟ้า', 'ก้อง', 'นนท์']
      },
      {
        name: 'กรณีไม่มีใครผ่านเกณฑ์เลย ได้ []',
        args: [[{ name: 'เอ', score: 59 }, { name: 'บี', score: 40 }]],
        expected: []
      },
      { name: 'กรณี Array ว่าง [] ได้ []', args: [[]], expected: [] }
    ]
  })
];

window.CHAPTER_2 = {
  id: 'ch-2',
  number: 2,
  title: 'บทที่ 2: การจัดการข้อมูล Array & Object Mastery',
  shortTitle: 'บทที่ 2: Array & Object',
  icon: '📦',
  description:
    'หัวใจสำคัญของการทำเว็บยุคใหม่คือการนำข้อมูลรายการสินค้า ผู้ใช้งาน หรือตะกร้าสินค้า มาแปลงค่า คัดกรอง ค้นหา เรียงลำดับ และจัดกลุ่มด้วย Array & Object Methods',
  tags: ['Array.map', 'Array.filter', 'Array.reduce', 'find & sort', 'Objects & Set'],
  lesson: {
    overview:
      'บนเว็บไซต์จริง ข้อมูลเกือบทั้งหมดจะอยู่ในรูปของ Array ของ Object เช่น รายการสินค้า รายชื่อบทความ หรือรายการในตะกร้าสินค้า หากเราเชี่ยวชาญ .map(), .filter(), .reduce(), .find() และ .sort() เราจะสามารถจัดการข้อมูลทุกรูปแบบเพื่อนำไปแสดงผลบนหน้าเว็บได้อย่างง่ายดาย',
    mustUse: [
      {
        syntax: 'array.map(item => ...)',
        usage: 'แปลงสมาชิกทุกตัวใน Array ให้เป็นค่าใหม่ (ได้ Array ใหม่ที่มีจำนวนเท่าเดิม)',
        example: 'const prices = items.map(item => item.price);'
      },
      {
        syntax: 'array.filter(item => เงื่อนไข)',
        usage: 'คัดกรองเอาเฉพาะสมาชิกที่ทำให้เงื่อนไขเป็น true',
        example: 'const available = products.filter(p => p.inStock === true);'
      },
      {
        syntax: 'array.reduce((acc, item) => ..., ค่าเริ่มต้น)',
        usage: 'ยุบรวมข้อมูลใน Array ให้เป็นค่าเดียว เช่น ผลรวมตัวเลข หรือ Object สรุปผล',
        example: 'const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);'
      },
      {
        syntax: 'array.find(item => เงื่อนไข)',
        usage: 'ค้นหาสมาชิกตัวแรกที่ตรงเงื่อนไข (ถ้าไม่เจอจะได้ undefined)',
        example: 'const user = users.find(u => u.id === targetId);'
      },
      {
        syntax: '[...array].sort((a, b) => a - b)',
        usage: 'เรียงลำดับข้อมูล (a - b คือเรียงน้อยไปมาก, b - a คือเรียงมากไปน้อย)',
        example: 'const sorted = [...nums].sort((a, b) => a - b);'
      },
      {
        syntax: 'Object & Spread ({ ...obj, key: newVal })',
        usage: 'คัดลอกและอัปเดตข้อมูลใน Object โดยไม่ทำลายข้อมูลเดิม',
        example: 'const updated = { ...user, score: 100 };'
      }
    ],
    examples: [
      {
        title: 'ตัวอย่างที่ 1: การใช้ .filter() ร่วมกับ .map() (Method Chaining)',
        explanation: 'กรองเฉพาะสินค้าที่มีในสต็อกก่อน แล้วจึงแปลงเป็นข้อความป้ายราคา',
        code: `const products = [
  { name: "เมาส์", price: 450, inStock: true },
  { name: "คีย์บอร์ด", price: 1200, inStock: false },
  { name: "แผ่นรองเมาส์", price: 190, inStock: true }
];

const labels = products
  .filter(p => p.inStock)
  .map(p => \`\${p.name} (\${p.price} บาท)\`);

console.log(labels);
// ["เมาส์ (450 บาท)", "แผ่นรองเมาส์ (190 บาท)"]`
      },
      {
        title: 'ตัวอย่างที่ 2: การคำนวณยอดรวมตะกร้าด้วย .reduce()',
        explanation: 'พารามิเตอร์ตัวที่ 2 ของ reduce คือค่าเริ่มต้น (0) โดย acc จะเก็บผลบวกสะสมไปเรื่อยๆ',
        code: `const cart = [
  { name: "กาแฟ", price: 65, qty: 2 },
  { name: "ครัวซองต์", price: 85, qty: 1 }
];

const totalPrice = cart.reduce((sum, item) => {
  return sum + (item.price * item.qty);
}, 0);

console.log(totalPrice); // 215`
      },
      {
        title: 'ตัวอย่างที่ 3: การจัดกลุ่มข้อมูล (Group By) ด้วย Object',
        explanation: 'สร้าง Object ว่าง แล้วใช้ชื่อหมวดหมู่เป็น Key เพื่อเก็บ Array ของรายการในหมวดนั้น',
        code: `function groupByCategory(items) {
  return items.reduce((groups, item) => {
    if (!groups[item.category]) {
      groups[item.category] = [];
    }
    groups[item.category].push(item.name);
    return groups;
  }, {});
}`
      }
    ]
  },
  problems: CHAPTER_2_PROBLEMS
};
