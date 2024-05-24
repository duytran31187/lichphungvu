$(document).ready(function () {
  var date = new Date();
  var month = date.getMonth(); //months from 1-12
  var year = date.getFullYear();
  var firstDay = new Date(year, month, 1);
  var lastDay = new Date(year, month + 1, 0);
  var calendar = document.getElementById('calendar');

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
});
