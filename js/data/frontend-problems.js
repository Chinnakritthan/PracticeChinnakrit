/**
 * รวมบทเรียนทั้งหมดของหมวด Frontend (5 บทเรียน × 35 ข้อ = 175 ข้อ)
 * ในแต่ละบทแบ่งเป็น: ง่าย 20 ข้อ, ปานกลาง 10 ข้อ, ยาก 5 ข้อ
 */
window.FRONTEND_CHAPTERS = [
  window.CHAPTER_1,
  window.CHAPTER_2,
  window.CHAPTER_3,
  window.CHAPTER_4,
  window.CHAPTER_5
].filter(Boolean);

window.FRONTEND_PROBLEMS = window.FRONTEND_CHAPTERS.flatMap(ch => ch.problems || []);
