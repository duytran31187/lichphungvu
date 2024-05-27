import { tinhNamPhungVu } from './dist/index.mjs'
////  
$(document).ready(function () {
  var date = new Date();
  var month = date.getMonth(); //months from 1-12
  var year = date.getFullYear();
  var firstDay = new Date(year, month, 1);
  var lastDay = new Date(year, month + 1, 0);
  var calendar = document.getElementById('calendar');
  var calendarTitle = document.getElementById('calender-title');
  if (calendarTitle) {
    calendarTitle.innerHTML = date.toISOString().substring(0,7);
  }
  var lichphungvuTable = document.getElementById('lichphungvuTable');
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

  // add lich phung vu
  var colums = [
      'year( Năm)',
      'A|B|C (năm A|B|C)',
      'Odd|Even (Năm chẵn lẻ)',
      'The Epiphany of the Lord (Lễ Chúa Hiển Linh)',
      'Lễ Chúa chịu phép rửa',
      'Ash Wednesday (Thứ tư lễ tro)',
      'First Sunday of Lent (Chúa nhật thứ nhất mùa chay)',
      'Second Sunday of Lent (Chúa nhật thứ 2 mùa chay)',
      'Third Sunday of Lent (Chúa nhật thứ 3 mùa chay)',
      'Fourth Sunday of Lent (Chúa nhật thứ 4 mùa chay)',
      'Fifth Sunday of Lent (Chúa nhật thứ 5 mùa chay)',
      'Palm Sunday (Lễ Lá)',
      'Easter Sunda (Phục sinh)',
      'Second Sunday of Easter (Chúa nhật thứ 2 phục sinh)',
      'Third Sunday of Easter (Chúa nhật thứ 3 phục sinh)',
      'Fourth Sunday of Easter (Chúa nhật thứ 4 phục sinh)',
      'Fifth Sunday of Easter (Chúa nhật thứ 5 phục sinh)',
      'Sixth Sunday of Easter (Chúa nhật thứ 6 phục sinh)',
      'The Ascention of the Lord (Lễ Chúa Lên Trời)',
      'Pentecost Sunday (Lễ Chúa Thánh Thần hiện xuống)',
      'First Sunday of Advent (Chúa nhật thứ nhất mùa vọng)',
      'Second Sunday of Advent (Chúa nhật thứ 2 mùa vọng)',
      'Third Sunday of Advent (Chúa nhật thứ 3 mùa vọng)',
      'Fourth Sunday of Advent (Chúa nhật thứ tư mùa vọng)',
      'Christmas (Giáng sinh)',
      'Lễ Thánh Gia'
  ];
  
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
//   var tuanmuaVong = tinh4TuanMuaVong(y);
//   var year = tuanmuaVong.yearABC;
//   var easter = tinhNgayPhucSinh(y);
//   var ashWednesday = tinhThuTuLeTro(easter);
  var namphungVuIns = tinhNamPhungVu(y);
  
  // const trItem =document.createElement('tr');
  // for( let key in colums) 
  // {
  //   const tdItem = document.createElement('td');
  //   tdItem.textContent = colums[key];
  //   trItem.appendChild(tdItem);
  // }
  // lichphungvuTable.appendChild(trItem);
    
  
  
  let count = 0;
  for( let key in namphungVuIns) 
  {
    const trItemBody =document.createElement('tr');
    const tdItemLabel = document.createElement('th');
    tdItemLabel.textContent = colums[count];
    trItemBody.appendChild(tdItemLabel);

    const tdItemVal = document.createElement('td');
    tdItemVal.textContent = namphungVuIns[key] instanceof Date ? namphungVuIns[key].toDateString() : namphungVuIns[key];
    trItemBody.appendChild(tdItemVal);
    lichphungvuTable.appendChild(trItemBody);
    count++;
  }
  
});
