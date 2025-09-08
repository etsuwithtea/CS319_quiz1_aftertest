

const signupForm = document.getElementById('signupForm');
const smessages = document.getElementById('smessages');

function showSMessages(list, type = 'error') {
  smessages.innerHTML = '';
  const ul = document.createElement('ul');
  list.forEach(msg => {
    const li = document.createElement('li');
    li.textContent = msg;
    li.className = type === 'error' ? 'error' : 'success';
    ul.appendChild(li);
  });
  smessages.appendChild(ul);
}

signupForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const errors = [];
  const name = document.getElementById('name').value.trim();
  const surname = document.getElementById('surname').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.querySelector('input#email[type=email]').value.trim();
  const address = document.querySelector('input#email[type=text]').value.trim();
  const province = document.getElementById('province').value;
  const zip = document.getElementById('zip').value.trim();
  const birthday = document.getElementById('birthday').value.trim();
  const school = document.getElementById('school').value.trim();
  const education = document.getElementById('education').value;

  // สถานะผู้เข้าร่วม
  const roles = document.querySelectorAll('input[name="role"]:checked');
  // เพศ
  const msex = document.querySelector('input[name="msex"]:checked');
  // วันเข้าใช้งาน
  const day1 = document.querySelector('input[name="day1"]:checked');
  const day2 = document.querySelector('input[name="day2"]:checked');
  const day3 = document.querySelector('input[name="day3"]:checked');
  // ที่จอดรถ
  const park1 = document.querySelector('input[name="park1"]:checked');
  // ของที่ระลึก
  const gift1 = document.querySelector('input[name="gift1"]:checked');
  const gift2 = document.querySelector('input[name="gift2"]:checked');
  const gift3 = document.querySelector('input[name="gift3"]:checked');
  // ยินยอม
  const check1 = document.querySelector('input[name="check1"]:checked');

  if (!name) errors.push('กรุณากรอกชื่อ');
  if (!surname) errors.push('กรุณากรอกนามสกุล');
  if (!phone) errors.push('กรุณากรอกเบอร์โทรศัพท์');
  else if (!/^\d{9,10}$/.test(phone)) errors.push('เบอร์โทรศัพท์ไม่ถูกต้อง');
  if (!email) errors.push('กรุณากรอกอีเมล');
  else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) errors.push('รูปแบบอีเมลไม่ถูกต้อง');
  if (!address) errors.push('กรุณากรอกที่อยู่');
  if (!province) errors.push('กรุณาเลือกจังหวัด');
  if (!zip) errors.push('กรุณากรอกรหัสไปรษณีย์');
  if (!roles.length) errors.push('กรุณาเลือกสถานะผู้เข้าร่วม');
  if (!msex) errors.push('กรุณาเลือกเพศ');
  if (!birthday) errors.push('กรุณากรอกวันเกิด');
  if (!education) errors.push('กรุณาเลือกระดับการศึกษา');
  if (!day1 && !day2 && !day3) errors.push('กรุณาเลือกวันเข้าใช้งาน');
  if (!park1) errors.push('กรุณาเลือกความต้องการที่จอดรถ');
  if (!gift1 && !gift2 && !gift3) errors.push('กรุณาเลือกของที่ระลึก');
  if (!check1) errors.push('กรุณายินยอมข้อตกลง');

  if (errors.length) {
    showSMessages(errors, 'error');
    return;
  }
  showSMessages(['ส่งข้อมูลสำเร็จ!'], 'success');
  signupForm.reset();
});