
// tinhlephucsinh
// chuyen doi ngay duong sang ngay âm
var cloneDate = function (d) {
    return new Date(d.getTime());
};
var tinhngayramsau21thang3 = function (y) {
    // tim ngay rằm
    var ngayRamFound = false;
    var count = 0;
    var dateFrom21 = 21;
    var month = 3;
    var results = [];
    do {
        var ngayAm = convertSolar2Lunar(dateFrom21, month, y, 7 // UTC+7
        );
        var lunarDay = ngayAm[0];
        if (lunarDay === 16) { // month can be different
            ngayRamFound = true;
            // console.log(`${y} NGAY RAM: ${dateFrom21}/${month}`);
            results = [dateFrom21, month, y];
        }
        count++;
        dateFrom21++;
        if (dateFrom21 == 32) { // qua thang 4
            dateFrom21 = 1;
            month = 4;
        }
    } while (!ngayRamFound);
    return {
        year: y,
        month: month,
        day: dateFrom21
    };
};
function tinhThuTuLeTro(ngayLePhucSinh) {
    var thutuLeTro = cloneDate(ngayLePhucSinh);
    thutuLeTro.setDate(thutuLeTro.getDate() - 46);
    return thutuLeTro;
};
function addDate(currentDate, numOfDate) {
    var newDate = cloneDate(currentDate);
    newDate.setDate(newDate.getDate() + numOfDate);
    return newDate;
};
var timChuaNhatGanNhatTuNgay = function (d) {
    // chua nhat gan nhat sau ngay d, có thể là ngày d
    var sundayFound = false;
    var closestSunday = cloneDate(d);
    do {
        if (closestSunday.getDay() === 0) { //sunday
            sundayFound = true;
            break;
        }
        closestSunday.setDate(closestSunday.getDate() + 1);
    } while (!sundayFound);
    return closestSunday;
};
function tinhNgayPhucSinh(year) {
    var simpleDateParam = tinhngayramsau21thang3(year);
    var closestSunday = new Date(simpleDateParam.year + '-' + simpleDateParam.month + '-' + simpleDateParam.day);
    closestSunday.setDate(closestSunday.getDate() + 1);
    return timChuaNhatGanNhatTuNgay(closestSunday);
};
function tinhLeChuaHienLinh(y) {
    var christmasDate = new Date(y + '-12-25');
    var chuaNhatSauGiangsinh = timChuaNhatGanNhatTuNgay(christmasDate);
    chuaNhatSauGiangsinh.setDate(chuaNhatSauGiangsinh.getDate());
    return addDate(chuaNhatSauGiangsinh, 7);
};
//// 4 tuan mua vong
var cloneDate = function (d) {
  return new Date(d.getTime());
};
function tinh4TuanMuaVong (y) {
  /////////////////////////////////////A|B|C///
  var yearStr = y.toString();
  var yearNums = Array.from(yearStr);
  var countNum = 0;
  yearNums.forEach(function (element) {
      countNum += parseInt(element);
  });
  var year;
  var finalResult;
  switch (countNum % 3) {
      case 1:
          year = 'A';
          break;
      case 2:
          year = 'B';
          break;
      default:
          year = 'C';
  }
  ///////////
  var chrismastDate = new Date(y + '-12-25');
  var closestSunday = chrismastDate;
  // console.log(`vong giang sinh: %s`, chrismastDate.toDateString());
  // tuan thu 4 mua vong5
  var sundayFound = false;
  var count = 0;
  do {
      var closestSunday_1 = chrismastDate;
      closestSunday_1.setDate(chrismastDate.getDate() - 1);
      if (closestSunday_1.getDay() === 0) { //sunday
          var sunday4 = new Date(closestSunday_1.getTime());
          var sunday3 = new Date(sunday4.getTime());
          sunday3.setDate(sunday3.getDate() - (7));
          var sunday2 = new Date(sunday3.getTime());
          sunday2.setDate(sunday2.getDate() - (7));
          var sunday1 = new Date(sunday2.getTime());
          sunday1.setDate(sunday2.getDate() - (7));
          sundayFound = true;
          finalResult = {
              week1: sunday1,
              week2: sunday2,
              week3: sunday3,
              week4: sunday4,
              yearABC: year
          };
          break;
          // console.log(`${year}    | ${sunday1.toDateString()} | ${sunday2.toDateString()} | ${sunday3.toDateString()} | ${sunday4.toDateString()} | ${chrismastDate.toDateString()}`)
      }
      count++;
  } while (!sundayFound);
  return finalResult;
};

////  
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
  var easter = function(y);
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
