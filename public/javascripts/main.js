import { nameOfDays, tinhNamPhungVu } from './dist/index.mjs'
////  
$(document).ready(function () {

  // add lich phung vu
  const printCalendarMonth = (year, month) => {
    const calendar = document.createElement('table');
    const thead = document.createElement('thead');
    const headTr = document.createElement('tr');
    for(let wd of ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']) {
      const th = document.createElement('th');
      th.innerText = wd;
      headTr.appendChild(th);
    }
    thead.appendChild(headTr);
    calendar.appendChild(thead);
    // print date
    var firstDay = new Date(year, month-1, 1);
    var lastDay = new Date(year, month, 0);
    for (var i = firstDay.getDay(); i > 0; i--) {
        var cell = document.createElement('td');
        cell.textContent = ' ';
        calendar.appendChild(cell);
    }

    for (var i = 1; i <= lastDay.getDate(); i++) {
        if ((i + firstDay.getDay() - 1) % 7 === 0) {
            var row = document.createElement('tr');
            calendar.appendChild(row);
        }
        var cell = document.createElement('td');
        cell.textContent = i;
        calendar.appendChild(cell);
    }
    return calendar;
  }
  
  var currentDate = new Date();
  var defaultYear = currentDate.getFullYear();
  let params = new URLSearchParams(window.location.search);
  let searchYear = params.get('searchYear') ? params.get('searchYear') : defaultYear;
  const searchYearField = $('#searchYear');
  if (searchYearField) {
    searchYearField.val(searchYear);
  }

  var date = new Date(searchYear + '-' + currentDate.getMonth() + '-01');
  var y = date.getFullYear();

  var namphungVuIns = tinhNamPhungVu(y);
  
  const printHeadOfMonth = (month) => {
    const trItemBody =document.createElement('tr');
    const th = document.createElement('th');
    th.colSpan = 3;
    th.className = 'th-month';
    th.textContent = 'thang ' + month;
    trItemBody.appendChild(th);
    lichphungvuTable.appendChild(trItemBody);
  }
  const printABC = () => {
    const trItemBody =document.createElement('tr');
    const th = document.createElement('th');
    th.colSpan = 3;
    th.className = 'summary_month';
    th.textContent = namphungVuIns.year + ' - Năm ' + namphungVuIns.yearABC + ' - ' + namphungVuIns.oddEven;
    trItemBody.appendChild(th);
    lichphungvuTable.appendChild(trItemBody);
  }
  const printByMonth = (month) => {
    printHeadOfMonth(month);
    
    const monthInNum = month-1;
    const firstDay = new Date(namphungVuIns.year, monthInNum, 1);
    const lastDay = new Date(namphungVuIns.year, month, 0);
    const ngayPhungVuTheoThang = [];
    console.log( 'last ' + lastDay.toDateString());
    for( let key in namphungVuIns) 
      {
        if (namphungVuIns[key] instanceof Date && namphungVuIns[key].getMonth() == monthInNum) {
          ngayPhungVuTheoThang[namphungVuIns[key].toDateString()] = nameOfDays[key];
          // const trItemBody =document.createElement('tr');
          // const td1 = document.createElement('td');
          // const td2 = document.createElement('td');
          // const td3 = document.createElement('td');
          // td1.innerText = namphungVuIns[key].toDateString();
          // td2.innerText = namphungVuIns[key].toDateString();
          // td3.innerText = nameOfDays[key];
          // trItemBody.appendChild(td1);
          // trItemBody.appendChild(td2);
          // trItemBody.appendChild(td3);
          // lichphungvuTable.appendChild(trItemBody);
        }
      }
      for (let d = 0; d < 32; d++ ) {
        const currentDate = new Date(firstDay.getTime());
        currentDate.setDate(currentDate.getDate() + d);
        if (currentDate.getTime() <= lastDay.getTime()) { // if > last day => skip
          const trItemBody =document.createElement('tr');
          const td1 = document.createElement('td');
          const td2 = document.createElement('td');
          const td3 = document.createElement('td');
          td1.innerText = (d+1); // ngay 1/thang
          if (ngayPhungVuTheoThang[currentDate.toDateString()]) {
            td2.innerText = currentDate.toDateString();
            td3.innerText = ngayPhungVuTheoThang[currentDate.toDateString()];
          }
          trItemBody.appendChild(td1);
          trItemBody.appendChild(td2);
          trItemBody.appendChild(td3);
          lichphungvuTable.appendChild(trItemBody);
        }
      }
  }
  printABC();
  for (let i=1; i<=12;i++) {
    printByMonth(i);
  }
  // print full calendar by year
  // for( let imonth=1; imonth<=12;imonth++) {
  //   const divCalendar = document.getElementById('divCalendar');
  //   const h5 = document.createElement('h5');
  //   h5.innerText = 'Thang '+ imonth + ' / ' + searchYear;
  //   divCalendar.appendChild(h5);
  //   const fullMonth = printCalendarMonth(searchYear, imonth);
  //   divCalendar.appendChild(fullMonth);
  // }
});
