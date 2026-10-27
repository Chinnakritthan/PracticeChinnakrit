/**
 * โจทย์บทที่ 1 (JS Fundamentals) และ บทที่ 2 (Arrays, Objects & Async)
 * ทุกโจทย์มี Live Preview ให้เห็นผลบนหน้าเว็บจริง พร้อม Test Cases พอเหมาะ (3 ข้อต่อโจทย์)
 */

export const PROBLEMS_MOD_1_2 = [
  // =========================================================================
  // MODULE 1: พื้นฐาน JavaScript & Logic (JS Fundamentals)
  // =========================================================================
  {
    id: 'fe-01',
    number: 1,
    subjectId: 'frontend',
    moduleId: 'mod-js-basic',
    title: 'สร้างข้อความต้อนรับและคำนวณราคารวม (Variables & Strings)',
    difficulty: 'พื้นฐาน',
    tags: ['Variables', 'Template Literal', 'Math'],
    defaultTab: 'js',
    description:
      'พื้นฐานแรกของการทำเว็บคือการนำชื่อผู้ใช้และข้อมูลตัวเลขมาประกอบเป็นข้อความและคำนวณผลลัพธ์ ในโจทย์นี้ให้คุณเขียนฟังก์ชัน <code>createOrderSummary(customerName, price, quantity)</code> เพื่อคืนค่าข้อความสรุปคำสั่งซื้อ',
    requirements: [
      'คำนวณราคารวม <code>total = price * quantity</code>',
      'คืนค่า (return) ข้อความในรูปแบบ: <code>"สวัสดีคุณ [customerName] ยอดชำระทั้งหมด [total] บาท"</code>',
      'ตัวอย่าง: <code>createOrderSummary("ชินกฤต", 150, 2)</code> ต้องได้ <code>"สวัสดีคุณ ชินกฤต ยอดชำระทั้งหมด 300 บาท"</code>'
    ],
    starterCode: {
      html: `<div class="card">
  <h3>🛒 ระบบสรุปคำสั่งซื้อ</h3>
  <p id="preview-output">ผลลัพธ์จากฟังก์ชันของคุณจะแสดงที่นี่...</p>
</div>`,
      css: `body { font-family: sans-serif; padding: 20px; background: #f8fafc; color: #0f172a; }
.card { background: white; padding: 20px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
h3 { margin-top: 0; color: #2563eb; }`,
      js: `function createOrderSummary(customerName, price, quantity) {
  // เขียนโค้ดของคุณที่นี่
  
}

// ทดลองแสดงผลบนหน้าเว็บ Preview
const sampleText = createOrderSummary("ชินกฤต", 150, 2);
console.log("ผลลัพธ์:", sampleText);
const el = document.getElementById("preview-output");
if (el && sampleText) el.textContent = sampleText;`
    },
    hints: [
      'สร้างตัวแปรเก็บผลคูณ เช่น const total = price * quantity;',
      'ใช้ Template Literal (เครื่องหมาย Backtick ` `) เช่น `สวัสดีคุณ ${customerName} ยอดชำระทั้งหมด ${total} บาท`'
    ],
    solution: {
      html: `<div class="card">
  <h3>🛒 ระบบสรุปคำสั่งซื้อ</h3>
  <p id="preview-output">ผลลัพธ์จากฟังก์ชันของคุณจะแสดงที่นี่...</p>
</div>`,
      css: `body { font-family: sans-serif; padding: 20px; background: #f8fafc; color: #0f172a; }
.card { background: white; padding: 20px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
h3 { margin-top: 0; color: #2563eb; }`,
      js: `function createOrderSummary(customerName, price, quantity) {
  const total = price * quantity;
  return \`สวัสดีคุณ \${customerName} ยอดชำระทั้งหมด \${total} บาท\`;
}

const sampleText = createOrderSummary("ชินกฤต", 150, 2);
console.log("ผลลัพธ์:", sampleText);
const el = document.getElementById("preview-output");
if (el && sampleText) el.textContent = sampleText;`
    },
    testCases: [
      {
        name: 'กรณีทั่วไป: ชินกฤต ซื้อสินค้าชิ้นละ 150 จำนวน 2 ชิ้น',
        run: ({ win }) => {
          const actual = win.createOrderSummary('ชินกฤต', 150, 2);
          const expected = 'สวัสดีคุณ ชินกฤต ยอดชำระทั้งหมด 300 บาท';
          return { passed: actual === expected, expected, actual };
        }
      },
      {
        name: 'กรณีซื้อหลายชิ้น: สมชาย ซื้อสินค้าชิ้นละ 99 จำนวน 5 ชิ้น',
        run: ({ win }) => {
          const actual = win.createOrderSummary('สมชาย', 99, 5);
          const expected = 'สวัสดีคุณ สมชาย ยอดชำระทั้งหมด 495 บาท';
          return { passed: actual === expected, expected, actual };
        }
      },
      {
        name: 'กรณีราคาเป็น 0: ทดสอบเมื่อราคาเป็น 0 บาท',
        run: ({ win }) => {
          const actual = win.createOrderSummary('มินตรา', 0, 3);
          const expected = 'สวัสดีคุณ มินตรา ยอดชำระทั้งหมด 0 บาท';
          return { passed: actual === expected, expected, actual };
        }
      }
    ]
  },

  {
    id: 'fe-02',
    number: 2,
    subjectId: 'frontend',
    moduleId: 'mod-js-basic',
    title: 'ระบบคำนวณส่วนลดสมาชิก (Conditionals if / else)',
    difficulty: 'พื้นฐาน',
    tags: ['if/else', 'Conditionals', 'Functions'],
    defaultTab: 'js',
    description:
      'ในการสร้างเว็บขายของออนไลน์ เราต้องตรวจสอบเงื่อนไขเพื่อลดราคาสินค้า ให้เขียนฟังก์ชัน <code>calculateFinalPrice(totalPrice, isMember)</code> เพื่อคำนวณราคาสุทธิหลังหักส่วนลดตามเงื่อนไข',
    requirements: [
      'ถ้า <code>totalPrice</code> ตั้งแต่ 1000 ขึ้นไป และ <code>isMember</code> เป็น <code>true</code> ให้ลดราคา 20% (คูณ 0.8)',
      'ถ้า <code>totalPrice</code> ตั้งแต่ 1000 ขึ้นไป แต่ไม่ได้เป็นสมาชิก (<code>isMember</code> เป็น <code>false</code>) ให้ลดราคา 10% (คูณ 0.9)',
      'ถ้ายอดน้อยกว่า 1000 บาท จะไม่ได้รับส่วนลด (คืนค่า <code>totalPrice</code> เดิม)'
    ],
    starterCode: {
      html: `<div class="card">
  <h3>🏷️ ระบบคำนวณส่วนลดหน้าร้าน</h3>
  <div id="result-box">กำลังรอผลการคำนวณ...</div>
</div>`,
      css: `body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
.card { background: white; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0; }
#result-box { margin-top: 10px; font-weight: bold; color: #059669; }`,
      js: `function calculateFinalPrice(totalPrice, isMember) {
  // เขียนเงื่อนไข if / else ที่นี่
  
}

// ทดสอบแสดงผล
const demoPrice = calculateFinalPrice(1500, true);
console.log("ราคาสุทธิ:", demoPrice);
document.getElementById("result-box").textContent = "ยอดสุทธิตัวอย่าง (1500, สมาชิก): " + demoPrice + " บาท";`
    },
    hints: [
      'ตรวจสอบก่อนว่า totalPrice >= 1000 หรือไม่',
      'ถ้า >= 1000 ให้เช็กต่อว่า isMember เป็น true หรือไม่ ถ้าใช่ return totalPrice * 0.8 ถ้าไม่ใช่ return totalPrice * 0.9',
      'ถ้าน้อยกว่า 1000 ให้ return totalPrice ได้เลย'
    ],
    solution: {
      html: `<div class="card">
  <h3>🏷️ ระบบคำนวณส่วนลดหน้าร้าน</h3>
  <div id="result-box">กำลังรอผลการคำนวณ...</div>
</div>`,
      css: `body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
.card { background: white; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0; }
#result-box { margin-top: 10px; font-weight: bold; color: #059669; }`,
      js: `function calculateFinalPrice(totalPrice, isMember) {
  if (totalPrice >= 1000) {
    if (isMember) {
      return totalPrice * 0.8;
    }
    return totalPrice * 0.9;
  }
  return totalPrice;
}

const demoPrice = calculateFinalPrice(1500, true);
console.log("ราคาสุทธิ:", demoPrice);
document.getElementById("result-box").textContent = "ยอดสุทธิตัวอย่าง (1500, สมาชิก): " + demoPrice + " บาท";`
    },
    testCases: [
      {
        name: 'ยอด 1000 บาท และเป็นสมาชิก (ลด 20% เหลือ 800)',
        run: ({ win }) => {
          const actual = win.calculateFinalPrice(1000, true);
          return { passed: actual === 800, expected: 800, actual };
        }
      },
      {
        name: 'ยอด 2000 บาท แต่ไม่เป็นสมาชิก (ลด 10% เหลือ 1800)',
        run: ({ win }) => {
          const actual = win.calculateFinalPrice(2000, false);
          return { passed: actual === 1800, expected: 1800, actual };
        }
      },
      {
        name: 'ยอด 500 บาท แม้เป็นสมาชิกก็ไม่ลด (เหลือ 500)',
        run: ({ win }) => {
          const actual = win.calculateFinalPrice(500, true);
          return { passed: actual === 500, expected: 500, actual };
        }
      }
    ]
  },

  {
    id: 'fe-03',
    number: 3,
    subjectId: 'frontend',
    moduleId: 'mod-js-basic',
    title: 'วนลูปหาผลรวมเฉพาะยอดขายที่ผ่านเกณฑ์ (Loops & Array Basics)',
    difficulty: 'พื้นฐาน',
    tags: ['for loop', 'Array', 'Conditionals'],
    defaultTab: 'js',
    description:
      'บ่อยครั้งที่หน้าเว็บต้องแสดงผลรวมจากรายการข้อมูลที่เข้าเงื่อนไขเท่านั้น ให้เขียนฟังก์ชัน <code>sumQualifiedSales(sales, minAmount)</code> ที่รับ Array ของยอดขาย <code>sales</code> แล้วคืนค่าผลรวมของยอดขายที่มีค่า <strong>มากกว่าหรือเท่ากับ</strong> <code>minAmount</code>',
    requirements: [
      'วนลูปตรวจสอบตัวเลขแต่ละตัวใน Array <code>sales</code>',
      'บวกสะสมเฉพาะตัวเลขที่มีค่า <code>>= minAmount</code>',
      'ถ้าไม่มีตัวเลขใดผ่านเกณฑ์เลย หรือ Array ว่าง ให้คืนค่า <code>0</code>'
    ],
    starterCode: {
      html: `<div class="card">
  <h3>📊 สรุปยอดขายที่ผ่านเกณฑ์</h3>
  <p>ข้อมูลตัวอย่าง: <code>[120, 500, 80, 900, 300]</code> (เกณฑ์ขั้นต่ำ 300)</p>
  <p id="sum-display">ผลรวม: -</p>
</div>`,
      css: `body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
.card { background: white; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0; }
#sum-display { font-size: 1.2rem; font-weight: bold; color: #2563eb; }`,
      js: `function sumQualifiedSales(sales, minAmount) {
  // เขียนลูปคำนวณผลรวมที่นี่
  
}

const result = sumQualifiedSales([120, 500, 80, 900, 300], 300);
console.log("ผลรวมที่ผ่านเกณฑ์:", result);
document.getElementById("sum-display").textContent = "ผลรวม: " + result;`
    },
    hints: [
      'ประกาศตัวแปร let sum = 0; ไว้ก่อนเริ่มลูป',
      'ใช้ลูป for (let i = 0; i < sales.length; i++) หรือ for (const item of sales)',
      'เช็ก if (item >= minAmount) { sum += item; } แล้ว return sum หลังจบลูป'
    ],
    solution: {
      html: `<div class="card">
  <h3>📊 สรุปยอดขายที่ผ่านเกณฑ์</h3>
  <p>ข้อมูลตัวอย่าง: <code>[120, 500, 80, 900, 300]</code> (เกณฑ์ขั้นต่ำ 300)</p>
  <p id="sum-display">ผลรวม: -</p>
</div>`,
      css: `body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
.card { background: white; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0; }
#sum-display { font-size: 1.2rem; font-weight: bold; color: #2563eb; }`,
      js: `function sumQualifiedSales(sales, minAmount) {
  let sum = 0;
  for (const amount of sales) {
    if (amount >= minAmount) {
      sum += amount;
    }
  }
  return sum;
}

const result = sumQualifiedSales([120, 500, 80, 900, 300], 300);
console.log("ผลรวมที่ผ่านเกณฑ์:", result);
document.getElementById("sum-display").textContent = "ผลรวม: " + result;`
    },
    testCases: [
      {
        name: 'รวมเฉพาะยอดที่ >= 300 จาก [120, 500, 80, 900, 300]',
        run: ({ win }) => {
          const actual = win.sumQualifiedSales([120, 500, 80, 900, 300], 300);
          return { passed: actual === 1700, expected: 1700, actual };
        }
      },
      {
        name: 'กรณีไม่มีค่าใดถึงเกณฑ์เลย ต้องได้ 0',
        run: ({ win }) => {
          const actual = win.sumQualifiedSales([50, 100, 200], 500);
          return { passed: actual === 0, expected: 0, actual };
        }
      },
      {
        name: 'กรณี Array ว่าง [] ต้องได้ 0',
        run: ({ win }) => {
          const actual = win.sumQualifiedSales([], 100);
          return { passed: actual === 0, expected: 0, actual };
        }
      }
    ]
  },

  {
    id: 'fe-04',
    number: 4,
    subjectId: 'frontend',
    moduleId: 'mod-js-basic',
    title: 'แปลงข้อความชื่อบทความเป็น Slug สำหรับ URL (String Methods)',
    difficulty: 'พื้นฐาน',
    tags: ['Strings', 'trim', 'toLowerCase', 'replaceAll'],
    defaultTab: 'js',
    description:
      'เวลาสร้างระบบบล็อกหรือเว็บไซต์ ชื่อบทความมักจะถูกแปลงเป็น URL Slug เช่น <code>"  Learn JS Today "</code> กลายเป็น <code>"learn-js-today"</code> ให้เขียนฟังก์ชัน <code>createUrlSlug(title)</code>',
    requirements: [
      'ตัดช่องว่างหน้า-หลังข้อความออกด้วย <code>trim()</code>',
      'แปลงตัวอักษรภาษาอังกฤษทั้งหมดเป็นตัวพิมพ์เล็ก (<code>toLowerCase()</code>)',
      'เปลี่ยนช่องว่าง (แม้มีหลายช่องติดกัน) ให้กลายเป็นเครื่องหมายขีดกลาง <code>-</code> เพียงตัวเดียว'
    ],
    starterCode: {
      html: `<div class="card">
  <h3>🔗 ตัวแปลง URL Slug</h3>
  <p>URL ที่ได้: <code id="slug-preview">-</code></p>
</div>`,
      css: `body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
.card { background: white; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0; }
code { background: #eff6ff; color: #1d4ed8; padding: 4px 8px; border-radius: 6px; }`,
      js: `function createUrlSlug(title) {
  // เขียนโค้ดแปลง title เป็น slug ที่นี่
  
}

const slug = createUrlSlug("  Frontend Web   Development 101 ");
console.log("Slug:", slug);
document.getElementById("slug-preview").textContent = "https://example.com/posts/" + slug;`
    },
    hints: [
      'ใช้ title.trim().toLowerCase() เพื่อตัดขอบและแปลงเป็นตัวพิมพ์เล็กก่อน',
      'สามารถใช้ .split(/\\s+/).join("-") หรือ .replace(/\\s+/g, "-") เพื่อยุบช่องว่างทั้งหมดให้เป็น "-" ตัวเดียว'
    ],
    solution: {
      html: `<div class="card">
  <h3>🔗 ตัวแปลง URL Slug</h3>
  <p>URL ที่ได้: <code id="slug-preview">-</code></p>
</div>`,
      css: `body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
.card { background: white; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0; }
code { background: #eff6ff; color: #1d4ed8; padding: 4px 8px; border-radius: 6px; }`,
      js: `function createUrlSlug(title) {
  return title.trim().toLowerCase().split(/\\s+/).join("-");
}

const slug = createUrlSlug("  Frontend Web   Development 101 ");
console.log("Slug:", slug);
document.getElementById("slug-preview").textContent = "https://example.com/posts/" + slug;`
    },
    testCases: [
      {
        name: 'แปลงข้อความปกติ "Hello World JavaScript" เป็น "hello-world-javascript"',
        run: ({ win }) => {
          const actual = win.createUrlSlug('Hello World JavaScript');
          const expected = 'hello-world-javascript';
          return { passed: actual === expected, expected, actual };
        }
      },
      {
        name: 'จัดการช่องว่างหน้าหลังและเว้นวรรคซ้ำ "  Frontend   Mastery 2026  "',
        run: ({ win }) => {
          const actual = win.createUrlSlug('  Frontend   Mastery 2026  ');
          const expected = 'frontend-mastery-2026';
          return { passed: actual === expected, expected, actual };
        }
      },
      {
        name: 'กรณีคำเดียว "React" ต้องได้ "react"',
        run: ({ win }) => {
          const actual = win.createUrlSlug('React');
          const expected = 'react';
          return { passed: actual === expected, expected, actual };
        }
      }
    ]
  },

  // =========================================================================
  // MODULE 2: การจัดการข้อมูล Array, Object & Async
  // =========================================================================
  {
    id: 'fe-05',
    number: 5,
    subjectId: 'frontend',
    moduleId: 'mod-js-data',
    title: 'กรองและแปลงรายการสินค้าพร้อมขาย (Array filter & map)',
    difficulty: 'พื้นฐาน',
    tags: ['Array.filter', 'Array.map', 'Objects'],
    defaultTab: 'js',
    description:
      'ในการแสดงสินค้าบนหน้าเว็บ เรามักต้องคัดกรองเฉพาะสินค้าที่มีของในสต็อก แล้วแปลงรูปแบบข้อมูลเพื่อนำไปแสดงผล ให้เขียนฟังก์ชัน <code>getAvailableProductLabels(products)</code>',
    requirements: [
      '<code>products</code> เป็น Array ของ Object รูปแบบ <code>{ name: "เมาส์", price: 500, inStock: true }</code>',
      'กรองเอาเฉพาะสินค้าที่ <code>inStock === true</code>',
      'แปลงสินค้าที่ผ่านการกรองแต่ละชิ้นให้เป็นข้อความรูปแบบ <code>"[name] ([price] บาท)"</code> เช่น <code>"เมาส์ (500 บาท)"</code> แล้วคืนค่าเป็น Array ของข้อความ'
    ],
    starterCode: {
      html: `<div class="card">
  <h3>📦 สินค้าพร้อมส่ง</h3>
  <ul id="product-list"></ul>
</div>`,
      css: `body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
.card { background: white; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0; }
li { margin-bottom: 6px; color: #1e293b; }`,
      js: `function getAvailableProductLabels(products) {
  // ใช้ .filter() และ .map() ที่นี่
  
}

const sampleProducts = [
  { name: "คีย์บอร์ดไร้สาย", price: 1290, inStock: true },
  { name: "จอมอนิเตอร์", price: 4500, inStock: false },
  { name: "เมาส์เกมมิ่ง", price: 890, inStock: true }
];

const labels = getAvailableProductLabels(sampleProducts) || [];
console.log("สินค้าพร้อมส่ง:", labels);
document.getElementById("product-list").innerHTML = labels.map(item => \`<li>✅ \${item}</li>\`).join("");`
    },
    hints: [
      'ใช้ products.filter(item => item.inStock) เพื่อคัดเฉพาะสินค้าที่มีของ',
      'ต่อด้วย .map(item => `${item.name} (${item.price} บาท)`) เพื่อแปลงเป็นข้อความ'
    ],
    solution: {
      html: `<div class="card">
  <h3>📦 สินค้าพร้อมส่ง</h3>
  <ul id="product-list"></ul>
</div>`,
      css: `body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
.card { background: white; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0; }
li { margin-bottom: 6px; color: #1e293b; }`,
      js: `function getAvailableProductLabels(products) {
  return products
    .filter(product => product.inStock === true)
    .map(product => \`\${product.name} (\${product.price} บาท)\`);
}

const sampleProducts = [
  { name: "คีย์บอร์ดไร้สาย", price: 1290, inStock: true },
  { name: "จอมอนิเตอร์", price: 4500, inStock: false },
  { name: "เมาส์เกมมิ่ง", price: 890, inStock: true }
];

const labels = getAvailableProductLabels(sampleProducts) || [];
console.log("สินค้าพร้อมส่ง:", labels);
document.getElementById("product-list").innerHTML = labels.map(item => \`<li>✅ \${item}</li>\`).join("");`
    },
    testCases: [
      {
        name: 'กรองเฉพาะสินค้าที่ inStock เป็น true และจัดรูปแบบถูกต้อง',
        run: ({ win }) => {
          const input = [
            { name: 'คีย์บอร์ด', price: 1200, inStock: true },
            { name: 'จอภาพ', price: 4500, inStock: false },
            { name: 'เมาส์', price: 500, inStock: true }
          ];
          const actual = win.getAvailableProductLabels(input);
          const expected = ['คีย์บอร์ด (1200 บาท)', 'เมาส์ (500 บาท)'];
          return {
            passed: JSON.stringify(actual) === JSON.stringify(expected),
            expected: JSON.stringify(expected),
            actual: JSON.stringify(actual)
          };
        }
      },
      {
        name: 'กรณีสินค้าหมดทุกชิ้น ต้องได้ Array ว่าง []',
        run: ({ win }) => {
          const input = [{ name: 'หูฟัง', price: 990, inStock: false }];
          const actual = win.getAvailableProductLabels(input);
          return {
            passed: Array.isArray(actual) && actual.length === 0,
            expected: '[]',
            actual: JSON.stringify(actual)
          };
        }
      },
      {
        name: 'กรณีสินค้าพร้อมขายทุกชิ้น',
        run: ({ win }) => {
          const input = [
            { name: 'สมุด', price: 40, inStock: true },
            { name: 'ปากกา', price: 15, inStock: true }
          ];
          const actual = win.getAvailableProductLabels(input);
          const expected = ['สมุด (40 บาท)', 'ปากกา (15 บาท)'];
          return {
            passed: JSON.stringify(actual) === JSON.stringify(expected),
            expected: JSON.stringify(expected),
            actual: JSON.stringify(actual)
          };
        }
      }
    ]
  },

  {
    id: 'fe-06',
    number: 6,
    subjectId: 'frontend',
    moduleId: 'mod-js-data',
    title: 'สรุปข้อมูลตะกร้าสินค้า (Array reduce & Object Summary)',
    difficulty: 'ปานกลาง',
    tags: ['Array.reduce', 'Objects', 'Cart Logic'],
    defaultTab: 'js',
    description:
      'ในหน้าตะกร้าสินค้า เราต้องคำนวณทั้ง "จำนวนชิ้นรวม" และ "ราคารวมทั้งหมด" ออกมาพร้อมกัน ให้เขียนฟังก์ชัน <code>summarizeCart(cartItems)</code> ที่คืนค่าเป็น Object สรุปผล',
    requirements: [
      '<code>cartItems</code> เป็น Array ของ <code>{ name: string, price: number, qty: number }</code>',
      'คืนค่าเป็น Object รูปแบบ <code>{ totalItems: จำนวนชิ้นรวมทั้งหมด, totalPrice: ราคารวมทั้งหมด }</code>',
      'ถ้าตะกร้าว่าง <code>[]</code> ให้คืนค่า <code>{ totalItems: 0, totalPrice: 0 }</code>'
    ],
    starterCode: {
      html: `<div class="card">
  <h3>🛍️ สรุปตะกร้าสินค้า</h3>
  <p id="cart-summary">กำลังคำนวณ...</p>
</div>`,
      css: `body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
.card { background: white; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0; }`,
      js: `function summarizeCart(cartItems) {
  // คำนวณ totalItems และ totalPrice แล้วคืนค่าเป็น Object
  
}

const demoCart = [
  { name: "เสื้อยืด", price: 250, qty: 2 },
  { name: "กางเกง", price: 600, qty: 1 }
];
const summary = summarizeCart(demoCart);
console.log("สรุปตะกร้า:", summary);
if (summary) {
  document.getElementById("cart-summary").textContent =
    \`จำนวนรวม \${summary.totalItems} ชิ้น | ยอดสุทธิ \${summary.totalPrice} บาท\`;
}`
    },
    hints: [
      'เริ่มต้นด้วย let totalItems = 0; และ let totalPrice = 0; หรือใช้ .reduce()',
      'ในแต่ละรายการ ให้บวก item.qty เข้ากับ totalItems และบวก (item.price * item.qty) เข้ากับ totalPrice',
      'สุดท้าย return { totalItems, totalPrice }'
    ],
    solution: {
      html: `<div class="card">
  <h3>🛍️ สรุปตะกร้าสินค้า</h3>
  <p id="cart-summary">กำลังคำนวณ...</p>
</div>`,
      css: `body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
.card { background: white; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0; }`,
      js: `function summarizeCart(cartItems) {
  return cartItems.reduce(
    (acc, item) => {
      acc.totalItems += item.qty;
      acc.totalPrice += item.price * item.qty;
      return acc;
    },
    { totalItems: 0, totalPrice: 0 }
  );
}

const demoCart = [
  { name: "เสื้อยืด", price: 250, qty: 2 },
  { name: "กางเกง", price: 600, qty: 1 }
];
const summary = summarizeCart(demoCart);
console.log("สรุปตะกร้า:", summary);
if (summary) {
  document.getElementById("cart-summary").textContent =
    \`จำนวนรวม \${summary.totalItems} ชิ้น | ยอดสุทธิ \${summary.totalPrice} บาท\`;
}`
    },
    testCases: [
      {
        name: 'คำนวณตะกร้าที่มีสินค้า 2 รายการถูกต้อง',
        run: ({ win }) => {
          const actual = win.summarizeCart([
            { name: 'เสื้อยืด', price: 250, qty: 2 },
            { name: 'กางเกง', price: 600, qty: 1 }
          ]);
          const expected = { totalItems: 3, totalPrice: 1100 };
          return {
            passed:
              actual &&
              actual.totalItems === expected.totalItems &&
              actual.totalPrice === expected.totalPrice,
            expected: JSON.stringify(expected),
            actual: JSON.stringify(actual)
          };
        }
      },
      {
        name: 'กรณีตะกร้าว่าง [] ต้องได้ { totalItems: 0, totalPrice: 0 }',
        run: ({ win }) => {
          const actual = win.summarizeCart([]);
          const expected = { totalItems: 0, totalPrice: 0 };
          return {
            passed:
              actual &&
              actual.totalItems === 0 &&
              actual.totalPrice === 0,
            expected: JSON.stringify(expected),
            actual: JSON.stringify(actual)
          };
        }
      },
      {
        name: 'คำนวณตะกร้าหลายชิ้นและหลายจำนวน',
        run: ({ win }) => {
          const actual = win.summarizeCart([
            { name: 'กาแฟ', price: 65, qty: 3 },
            { name: 'ขนมปัง', price: 40, qty: 2 },
            { name: 'น้ำดื่ม', price: 15, qty: 4 }
          ]);
          const expected = { totalItems: 9, totalPrice: 335 };
          return {
            passed:
              actual &&
              actual.totalItems === 9 &&
              actual.totalPrice === 335,
            expected: JSON.stringify(expected),
            actual: JSON.stringify(actual)
          };
        }
      }
    ]
  },

  {
    id: 'fe-07',
    number: 7,
    subjectId: 'frontend',
    moduleId: 'mod-js-data',
    title: 'ระบบค้นหาและเรียงลำดับข้อมูลตามราคา (Search & Sort)',
    difficulty: 'ปานกลาง',
    tags: ['filter', 'includes', 'sort', 'Immutability'],
    defaultTab: 'js',
    description:
      'ฟีเจอร์หลักของเว็บอีคอมเมิร์ซคือการค้นหาชื่อสินค้าโดยไม่สนใจตัวพิมพ์เล็ก-ใหญ่ และเรียงราคาจากน้อยไปมาก ให้เขียนฟังก์ชัน <code>searchAndSortProducts(products, keyword)</code>',
    requirements: [
      'กรองเฉพาะสินค้าที่ <code>product.title</code> มีคำว่า <code>keyword</code> อยู่ข้างใน (โดยไม่สนใจตัวพิมพ์เล็ก/ใหญ่)',
      'เรียงลำดับผลลัพธ์ตาม <code>price</code> จาก <strong>น้อยไปมาก (Ascending)</strong>',
      'ห้ามแก้ไขลำดับใน Array ต้นฉบับโดยตรง (ควรคัดลอกหรือผ่าน <code>filter</code> ก่อน <code>sort</code>)'
    ],
    starterCode: {
      html: `<div class="card">
  <h3>🔍 ทดสอบค้นหาและเรียงราคา</h3>
  <div id="search-output"></div>
</div>`,
      css: `body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
.card { background: white; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0; }`,
      js: `function searchAndSortProducts(products, keyword) {
  // กรองตาม keyword (ไม่สนพิมพ์เล็ก-ใหญ่) และเรียงตาม price น้อยไปมาก
  
}

const items = [
  { title: "Pro Gaming Mouse", price: 1500 },
  { title: "Basic Office Mouse", price: 350 },
  { title: "Mechanical Keyboard", price: 2200 }
];
const found = searchAndSortProducts(items, "mouse") || [];
console.log("ผลการค้นหา:", found);
document.getElementById("search-output").innerHTML = found
  .map(p => \`<div>\${p.title} - \${p.price} บาท</div>\`).join("");`
    },
    hints: [
      'แปลง keyword เป็นตัวพิมพ์เล็กก่อน: const q = keyword.trim().toLowerCase();',
      'ใช้ products.filter(p => p.title.toLowerCase().includes(q))',
      'ต่อด้วย .sort((a, b) => a.price - b.price) เพื่อเรียงราคาจากน้อยไปมาก'
    ],
    solution: {
      html: `<div class="card">
  <h3>🔍 ทดสอบค้นหาและเรียงราคา</h3>
  <div id="search-output"></div>
</div>`,
      css: `body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
.card { background: white; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0; }`,
      js: `function searchAndSortProducts(products, keyword) {
  const q = keyword.trim().toLowerCase();
  return products
    .filter(p => p.title.toLowerCase().includes(q))
    .sort((a, b) => a.price - b.price);
}

const items = [
  { title: "Pro Gaming Mouse", price: 1500 },
  { title: "Basic Office Mouse", price: 350 },
  { title: "Mechanical Keyboard", price: 2200 }
];
const found = searchAndSortProducts(items, "mouse") || [];
console.log("ผลการค้นหา:", found);
document.getElementById("search-output").innerHTML = found
  .map(p => \`<div>\${p.title} - \${p.price} บาท</div>\`).join("");`
    },
    testCases: [
      {
        name: 'ค้นหาคำว่า "mouse" (ตัวเล็ก) แล้วเจอทั้ง Mouse ราคา 350 และ 1500 เรียงจากถูกไปแพง',
        run: ({ win }) => {
          const items = [
            { title: 'Pro Gaming Mouse', price: 1500 },
            { title: 'Basic Office Mouse', price: 350 },
            { title: 'Mechanical Keyboard', price: 2200 }
          ];
          const actual = win.searchAndSortProducts(items, 'mouse');
          const expected = [
            { title: 'Basic Office Mouse', price: 350 },
            { title: 'Pro Gaming Mouse', price: 1500 }
          ];
          return {
            passed: JSON.stringify(actual) === JSON.stringify(expected),
            expected: JSON.stringify(expected),
            actual: JSON.stringify(actual)
          };
        }
      },
      {
        name: 'เมื่อ keyword เป็นค่าว่าง "" ให้คืนสินค้าทุกชิ้นเรียงตามราคาจากน้อยไปมาก',
        run: ({ win }) => {
          const items = [
            { title: 'Item B', price: 900 },
            { title: 'Item A', price: 200 },
            { title: 'Item C', price: 500 }
          ];
          const actual = win.searchAndSortProducts(items, '');
          const expected = [
            { title: 'Item A', price: 200 },
            { title: 'Item C', price: 500 },
            { title: 'Item B', price: 900 }
          ];
          return {
            passed: JSON.stringify(actual) === JSON.stringify(expected),
            expected: JSON.stringify(expected),
            actual: JSON.stringify(actual)
          };
        }
      },
      {
        name: 'ค้นหาคำที่ไม่มีในรายการ ต้องได้ []',
        run: ({ win }) => {
          const items = [{ title: 'Laptop Stand', price: 790 }];
          const actual = win.searchAndSortProducts(items, 'phone');
          return {
            passed: Array.isArray(actual) && actual.length === 0,
            expected: '[]',
            actual: JSON.stringify(actual)
          };
        }
      }
    ]
  },

  {
    id: 'fe-08',
    number: 8,
    subjectId: 'frontend',
    moduleId: 'mod-js-data',
    title: 'การดึงข้อมูลด้วย Async / Await และจัดการ Error',
    difficulty: 'ปานกลาง',
    tags: ['Async/Await', 'Promise', 'try/catch'],
    defaultTab: 'js',
    description:
      'ในการพัฒนาเว็บจริง เราต้องดึงข้อมูลจาก API ซึ่งใช้เวลาและอาจเกิด Error ได้ ให้เขียนฟังก์ชัน <code>async function loadUserProfile(fetchUserFn, userId)</code> ที่เรียกใช้ฟังก์ชันจำลอง API <code>fetchUserFn(userId)</code>',
    requirements: [
      'รอผลลัพธ์จาก <code>await fetchUserFn(userId)</code> ซึ่งจะคืนค่า Object เช่น <code>{ id: 1, name: "Chinnakrit", role: "Admin" }</code>',
      'ถ้าสำเร็จ ให้คืนค่าข้อความ <code>"User: [name] ([role])"</code>',
      'ถ้า <code>fetchUserFn</code> โยน Error (reject) ให้ดักจับด้วย <code>try / catch</code> แล้วคืนค่าข้อความ <code>"ไม่พบข้อมูลผู้ใช้"</code>'
    ],
    starterCode: {
      html: `<div class="card">
  <h3>🌐 ทดสอบดึงข้อมูลผู้ใช้ (Async/Await)</h3>
  <p id="async-status">กำลังโหลดข้อมูล...</p>
</div>`,
      css: `body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
.card { background: white; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0; }`,
      js: `async function loadUserProfile(fetchUserFn, userId) {
  // ใช้ try { ... } catch (error) { ... } ร่วมกับ await
  
}

// จำลอง API สำหรับแสดงผลในหน้า Preview
const mockApi = async (id) => {
  if (id === 1) return { id: 1, name: "Chinnakrit", role: "Developer" };
  throw new Error("Not found");
};

loadUserProfile(mockApi, 1).then(res => {
  console.log("ผลลัพธ์ Async:", res);
  const el = document.getElementById("async-status");
  if (el && res) el.textContent = res;
});`
    },
    hints: [
      'ครอบโค้ดภายในฟังก์ชันด้วย try { ... } catch (err) { ... }',
      'ในบล็อก try ให้เขียน const user = await fetchUserFn(userId); แล้ว return `User: ${user.name} (${user.role})`;',
      'ในบล็อก catch ให้ return "ไม่พบข้อมูลผู้ใช้";'
    ],
    solution: {
      html: `<div class="card">
  <h3>🌐 ทดสอบดึงข้อมูลผู้ใช้ (Async/Await)</h3>
  <p id="async-status">กำลังโหลดข้อมูล...</p>
</div>`,
      css: `body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
.card { background: white; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0; }`,
      js: `async function loadUserProfile(fetchUserFn, userId) {
  try {
    const user = await fetchUserFn(userId);
    return \`User: \${user.name} (\${user.role})\`;
  } catch (error) {
    return "ไม่พบข้อมูลผู้ใช้";
  }
}

const mockApi = async (id) => {
  if (id === 1) return { id: 1, name: "Chinnakrit", role: "Developer" };
  throw new Error("Not found");
};

loadUserProfile(mockApi, 1).then(res => {
  console.log("ผลลัพธ์ Async:", res);
  const el = document.getElementById("async-status");
  if (el && res) el.textContent = res;
});`
    },
    testCases: [
      {
        name: 'กรณีดึงข้อมูลสำเร็จ คืนค่า "User: Chinnakrit (Admin)"',
        run: async ({ win }) => {
          const fakeApi = async () => ({ id: 1, name: 'Chinnakrit', role: 'Admin' });
          const actual = await win.loadUserProfile(fakeApi, 1);
          const expected = 'User: Chinnakrit (Admin)';
          return { passed: actual === expected, expected, actual };
        }
      },
      {
        name: 'กรณีดึงข้อมูลผู้ใช้คนอื่นสำเร็จ คืนค่าตรงตามชื่อและตำแหน่ง',
        run: async ({ win }) => {
          const fakeApi = async () => ({ id: 2, name: 'Suda', role: 'Designer' });
          const actual = await win.loadUserProfile(fakeApi, 2);
          const expected = 'User: Suda (Designer)';
          return { passed: actual === expected, expected, actual };
        }
      },
      {
        name: 'กรณี API เกิด Error ต้องดักจับด้วย try/catch แล้วคืนค่า "ไม่พบข้อมูลผู้ใช้"',
        run: async ({ win }) => {
          const failingApi = async () => {
            throw new Error('404 User Not Found');
          };
          const actual = await win.loadUserProfile(failingApi, 999);
          const expected = 'ไม่พบข้อมูลผู้ใช้';
          return { passed: actual === expected, expected, actual };
        }
      }
    ]
  }
];
