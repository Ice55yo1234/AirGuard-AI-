AirGuard Website — อัปขึ้น GitHub Pages
ZIP นี้เป็นเว็บครบชุดรุ่นล่าสุด วางไฟล์ทั้งหมดใน root ของ repository หน้าแรกของ repository ต้องเห็น index.html, style.css, app.js, core.mjs, data-client.mjs, provinces.json และ assets/

เปิดเว็บ: Settings > Pages > Deploy from a branch > main > /(root) > Save รอ deployment สำเร็จและเปิด URL ที่ GitHub แสดง

รันในเครื่อง: python -m http.server 8000 แล้วเปิด http://localhost:8000 ไม่ต้อง npm install และไม่ใช้การดับเบิลคลิก file://

ใช้เน็ตเพื่อเรียก Open-Meteo/CAMS, ไม่มี API key สำหรับเว็บรุ่นนี้ GPS ต้อง HTTPS และผู้ใช้อนุญาต มีแดชบอร์ด แนวโน้ม24/48/72ชั่วโมง ตัววางแผน พื้นที่โปรด เปรียบเทียบพื้นที่ CSV และไฟล์ปฏิทิน ค่าพยากรณ์บนเว็บมาจาก Open-Meteo โมเดล ML งานวิจัยยังไม่เชื่อม ไม่มีระบบสมาชิก ชำระเงิน หรือแจ้งเตือนเมื่อปิดเว็บ ZIP นี้เฉพาะเว็บ ไม่รวมแอปมือถือ/LINE bot ซึ่งต้องรันแยก
