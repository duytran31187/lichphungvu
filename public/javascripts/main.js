import {  getTinhNamPhungVuInstant, nameOfDays } from '../../lichphungvu/dist/index.mjs'
function printDate(d) {
  const weekdays = ["CN","T2","T3","T4","T5","T6","T7"];

  let day;
  let month;
  day = d.getDate();
  month = d.getMonth() + 1;
  let year = d.getFullYear();
  
  let weekday = d.getDay();
  day = day < 10 ? '0'+day : day;
  month = month < 10 ? '0' + month : month;
  return `${weekdays[weekday]}, ${day}-${month}-${year}`;
}
$(document).ready(function () {
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  
  
  var currentDate = new Date();
  var defaultYear = currentDate.getFullYear();
  let params = new URLSearchParams(window.location.search);
  let searchYear = params.get('searchYear') ? params.get('searchYear') : defaultYear;
  const searchYearField = $('#searchYear');
  if (searchYearField) {
    searchYearField.val(searchYear);
  }

  var date = new Date(searchYear + '-' + currentDate.getMonth() + '-01');
  
  console.log(searchYear);
  let namPhungvu = getTinhNamPhungVuInstant(searchYear);
  var namphungVuIns = namPhungvu.getNamPhungVu();
  
  const printHeadOfMonth = (month) => {
    const trItemBody =document.createElement('tr');
    const th = document.createElement('th');
    th.colSpan = 2;
    th.className = 'th-month';
    th.textContent = 'Tháng ' + month;
    trItemBody.appendChild(th);
    lichphungvuTable.appendChild(trItemBody);
  }
  const printABC = () => {
    const trItemBody =document.createElement('tr');
    const th = document.createElement('th');
    th.colSpan = 2;
    th.className = 'summary_month';
    th.textContent = namphungVuIns.year + ' - Năm ' + namphungVuIns.yearABC + ' - ' + namphungVuIns.oddEven;
    trItemBody.appendChild(th);
    lichphungvuTable.appendChild(trItemBody);
  }
  const printByMonth = (month, chuaNhatTuanThuongNien, chuaNhatThuongNienMua2) => {
    printHeadOfMonth(month);
    const classMonth = month%2 == 1 ? 'odd-cls' : 'even-cls';
    const monthInNum = month-1;
    const firstDay = new Date(namphungVuIns.year, monthInNum, 1);
    const lastDay = new Date(namphungVuIns.year, month, 0);
    const ngayPhungVuTheoThang = [];
    // lay danh sach ngay phung vu từ library
    const leChuaThanhThanHienxuong = namphungVuIns.pentecostSunday;
    const chuaChiuPhepRua = namphungVuIns.leChuaChiuPhepRua;
    const leTro = namphungVuIns.ashWed;
    for( let key in namphungVuIns) 
    {
      
      if (namphungVuIns[key] instanceof Date && namphungVuIns[key].getMonth() == monthInNum) {
        ngayPhungVuTheoThang[namphungVuIns[key].toDateString()] = nameOfDays[key];
      }
    }
    for (let d = 0; d < 32; d++ ) {
      const currentDate = new Date(firstDay.getTime());
      currentDate.setDate(currentDate.getDate() + d);
      if (currentDate.getTime() <= lastDay.getTime()) { // if > last day => skip
        const trItemBody =document.createElement('tr');
        trItemBody.className = weekday[currentDate.getDay()] + ' ' + classMonth; // set class name theo weekday
        const td1 = document.createElement('td');
        // const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        td1.innerText = printDate(currentDate); // ngay 1/thang
        if (ngayPhungVuTheoThang[currentDate.toDateString()]) { // neu co trong danh sach in ra
          // td2.innerText = currentDate.toDateString();
          td3.innerText = ngayPhungVuTheoThang[currentDate.toDateString()];
        } else {
          if (
            currentDate.getDay() == 0 // sunday
            && currentDate.getTime() > leChuaThanhThanHienxuong.getTime() // sau le chua thanh than hien xuong
          ) {
            // td2.innerText = currentDate.toDateString();
            td3.innerText = 'Chua Nhat thu ' + chuaNhatThuongNienMua2 + ' mua Thuong Nien';
            chuaNhatThuongNienMua2++;
          } else if (
            currentDate.getDay() == 0 // sunday
            && currentDate.getTime() > chuaChiuPhepRua.getTime() // chua nhat dau tien sau chua chiu phep rua la tuan 2 thuogn nien
            && currentDate.getTime() < leTro.getTime()
          ) {
            td3.innerText = 'Chua Nhat thu ' + chuaNhatTuanThuongNien + ' mua Thuong Nien';
            chuaNhatTuanThuongNien++;
          }
        }
        trItemBody.appendChild(td1);
        // trItemBody.appendChild(td2);
        trItemBody.appendChild(td3);
        lichphungvuTable.appendChild(trItemBody);
      }
    }
    return [
      chuaNhatTuanThuongNien,
      chuaNhatThuongNienMua2
    ];
  }
  printABC();
  
  const printFullLichPhungVuTheoNam = (year) => {
    const fullYear = namPhungvu.getFullLichPhungVuTheoNam();
    let currentMonth = 0;
    // printHeadOfMonth(currentMonth);
    for (let idx in fullYear) {
      const currentDate  = fullYear[idx].date;
      const m = currentDate.getMonth() + 1;
      const classMonth = m%2 == 1 ? 'odd-cls' : 'even-cls';
      const trItemBody =document.createElement('tr');
      // print month if need
      console.log( currentDate.getMonth());
      if (m !== currentMonth) {
        currentMonth = m;
        printHeadOfMonth(currentMonth);
      }
      // print date
      trItemBody.className = weekday[currentDate.getDay()] + ' ' + classMonth; // set class name theo weekday
      const td1 = document.createElement('td');
      const td3 = document.createElement('td');
      td1.innerText = printDate(currentDate); // ngay 1/thang
      trItemBody.appendChild(td1);
      if (fullYear[idx].cacNgayLe.length > 0) {
        let txt = '';
        for (let i in fullYear[idx].cacNgayLe) {
          txt += fullYear[idx].cacNgayLe[i]['name'] +/* '-' + fullYear[idx].cacNgayLe[i]['type'] + */ '<br />';
        }
        td3.innerHTML = txt;
      } else {
        
        td3.innerHTML = '';
      }
      trItemBody.appendChild(td3);
      lichphungvuTable.appendChild(trItemBody);
    }
    
  };
  printFullLichPhungVuTheoNam(currentDate.getFullYear());
});
