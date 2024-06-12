import {  getTinhNamPhungVuInstant, nameOfDays } from './dist-lichphungvu/index.mjs'
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
  
  var namPhungvu = getTinhNamPhungVuInstant(searchYear);
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
  printABC();
  
  const printFullLichPhungVuTheoNam = () => {
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
      const td1 = document.createElement('th');
      td1.className = 'th-date';
      const td3 = document.createElement('td');
      td1.innerText = printDate(currentDate); // ngay 1/thang
      trItemBody.appendChild(td1);
      if (fullYear[idx].cacNgayLe.length > 0) {
        let txt = '';
        for (let i in fullYear[idx].cacNgayLe) {
          if (fullYear[idx].cacNgayLe[i]['type']) {
            txt +=  '<i class="loai_ngay_le">'+ fullYear[idx].cacNgayLe[i]['type'] + ' </i>| ';
          }
          txt += fullYear[idx].cacNgayLe[i]['name'] + '<br />';
        }
        td3.innerHTML = txt;
      } else {
        
        td3.innerHTML = '';
      }
      trItemBody.appendChild(td3);
      lichphungvuTable.appendChild(trItemBody);
    }
    
  };
  printFullLichPhungVuTheoNam();
});
