import { tinhNamPhungVu, nameOfDays } from './dist/index.mjs'
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
  
  let count = 0;
  for( let key in namphungVuIns) 
  {
    const trItemBody =document.createElement('tr');
    const tdItemLabel = document.createElement('th');
    tdItemLabel.textContent = nameOfDays[count];
    trItemBody.appendChild(tdItemLabel);

    const tdItemVal = document.createElement('td');
    tdItemVal.textContent = namphungVuIns[key] instanceof Date ? namphungVuIns[key].toDateString() : namphungVuIns[key];
    trItemBody.appendChild(tdItemVal);
    lichphungvuTable.appendChild(trItemBody);
    count++;
  }
  
});
