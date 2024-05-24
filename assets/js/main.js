import {tinh4TuanMuaVong} from ('./tinh4TuanMuaVong.js');
import {tinhNgayPhucSinh, tinhThuTuLeTro, addDate, tinhLeChuaHienLinh} from ('./tinhlephucsinh.js');
  
// $(document).ready(function () {
  var date = new Date();
  var month = date.getMonth(); //months from 1-12
  var year = date.getFullYear();
  var firstDay = new Date(year, month, 1);
  var lastDay = new Date(year, month + 1, 0);
  var calendar = document.getElementById('calendar');
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
      'year',
      'A|B|C',
      'Odd|Even',
      'Ash Wednesday',
      'First Sunday of Lent',
      'Second Sunday of Lent',
      'Third Sunday of Lent',
      'Fourth Sunday of Lent',
      'Fifth Sunday of Lent',
      'Palm Sunday (Lễ Lá)',
      'Easter Sunday',
      'Second Sunday of Easter',
      'Third Sunday of Easter',
      'Fourth Sunday of Easter',
      'Fifth Sunday of Easter',
      'Sixth Sunday of Easter',
      'The Ascention of the Lord',
      'Pentecost Sunday',
      'First Sunday of Advent',
      'Second Sunday of Advent',
      'Third Sunday of Advent',
      'Fourth Sunday of Advent',
      'christmas',
      'The Epiphany of the Lord (Hiển Linh)'
  ];
  
  
  var date = new Date();
  var y = date.getFullYear();
  var tuanmuaVong = tinh4TuanMuaVong(y);
  var year = tuanmuaVong.yearABC;
  var easter = tinhNgayPhucSinh(y);
  var ashWednesday = tinhThuTuLeTro(easter);
  var namphungVuIns = {
      year: y,
      yearABC: year,
      oddEven: y % 2 == 0 ? 'Even' : 'Odd',
      ashWed: ashWednesday,
      firstSundayOfLent: addDate(ashWednesday, 4),
      secondSundayOfLent: addDate(ashWednesday, 11),
      thirdSundayOfLent: addDate(ashWednesday, 18),
      fourthSundayOfLent: addDate(ashWednesday, 25),
      fifthSundayOfLent: addDate(ashWednesday, 32),
      palmSunday: addDate(ashWednesday, 40),
      easterSunday: easter,
      secondSundayOfEaster: addDate(easter, 7),
      thirdSundayOfEaster: addDate(easter, 14),
      fourthSundayOfEaster: addDate(easter, 21),
      fifthSundayOfEaster: addDate(easter, 28),
      sixthSundayOfEaster: addDate(easter, 35),
      theAscentionOfTheLord: addDate(easter, 42),
      pentecostSunday: addDate(easter, 49),
      firstSundayOfAdvent: tuanmuaVong.week1,
      secondSundayOfAdvent: tuanmuaVong.week2,
      thirdSundayOfAdvent: tuanmuaVong.week3,
      fourthSundayOfAdvent: tuanmuaVong.week4,
      christmas: new Date(y + '-12-25'),
      theEpiphanyOfTheLord: tinhLeChuaHienLinh(),
  };
  
  const trItem =document.createElement('tr');
  for( let key in colums) 
  {
    const tdItem = document.createElement('td');
    tdItem.textContent = colums[key];
    trItem.appendChild(tdItem);
  }
  lichphungvuTable.appendChild(trItem);
    
  
  const trItemBody =document.createElement('tr');
  for( let key in namphungVuIns) 
  {
    const tdItem = document.createElement('td');
    tdItem.textContent = namphungVuIns[key] instanceof Date ? namphungVuIns[key].toDateString() : namphungVuIns[key];
    trItemBody.appendChild(tdItem);
  }
  lichphungvuTable.appendChild(trItemBody);
// });
