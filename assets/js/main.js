//lib
/*
 * Copyright (c) 2006 Ho Ngoc Duc. All Rights Reserved.
 * Astronomical algorithms from the book "Astronomical Algorithms" by Jean Meeus, 1998
 *
 * Permission to use, copy, modify, and redistribute this software and its
 * documentation for personal, non-commercial use is hereby granted provided that
 * this copyright notice and appropriate documentation appears in all copies.
 */
var PI = Math.PI;

/* Discard the fractional part of a number, e.g., INT(3.2) = 3 */
function INT(d) {
	return Math.floor(d);
}

/* Compute the (integral) Julian day number of day dd/mm/yyyy, i.e., the number 
 * of days between 1/1/4713 BC (Julian calendar) and dd/mm/yyyy. 
 * Formula from http://www.tondering.dk/claus/calendar.html
 */
function jdFromDate(dd, mm, yy) {
	var a, y, m, jd;
	a = INT((14 - mm) / 12);
	y = yy+4800-a;
	m = mm+12*a-3;
	jd = dd + INT((153*m+2)/5) + 365*y + INT(y/4) - INT(y/100) + INT(y/400) - 32045;
	if (jd < 2299161) {
		jd = dd + INT((153*m+2)/5) + 365*y + INT(y/4) - 32083;
	}
	return jd;
}

/* Convert a Julian day number to day/month/year. Parameter jd is an integer */

/* Compute the time of the k-th new moon after the new moon of 1/1/1900 13:52 UCT 
 * (measured as the number of days since 1/1/4713 BC noon UCT, e.g., 2451545.125 is 1/1/2000 15:00 UTC).
 * Returns a floating number, e.g., 2415079.9758617813 for k=2 or 2414961.935157746 for k=-2
 * Algorithm from: "Astronomical Algorithms" by Jean Meeus, 1998
 */
function NewMoon(k) {
	var T, T2, T3, dr, Jd1, M, Mpr, F, C1, deltat, JdNew;
	T = k/1236.85; // Time in Julian centuries from 1900 January 0.5
	T2 = T * T;
	T3 = T2 * T;
	dr = PI/180;
	Jd1 = 2415020.75933 + 29.53058868*k + 0.0001178*T2 - 0.000000155*T3;
	Jd1 = Jd1 + 0.00033*Math.sin((166.56 + 132.87*T - 0.009173*T2)*dr); // Mean new moon
	M = 359.2242 + 29.10535608*k - 0.0000333*T2 - 0.00000347*T3; // Sun's mean anomaly
	Mpr = 306.0253 + 385.81691806*k + 0.0107306*T2 + 0.00001236*T3; // Moon's mean anomaly
	F = 21.2964 + 390.67050646*k - 0.0016528*T2 - 0.00000239*T3; // Moon's argument of latitude
	C1=(0.1734 - 0.000393*T)*Math.sin(M*dr) + 0.0021*Math.sin(2*dr*M);
	C1 = C1 - 0.4068*Math.sin(Mpr*dr) + 0.0161*Math.sin(dr*2*Mpr);
	C1 = C1 - 0.0004*Math.sin(dr*3*Mpr);
	C1 = C1 + 0.0104*Math.sin(dr*2*F) - 0.0051*Math.sin(dr*(M+Mpr));
	C1 = C1 - 0.0074*Math.sin(dr*(M-Mpr)) + 0.0004*Math.sin(dr*(2*F+M));
	C1 = C1 - 0.0004*Math.sin(dr*(2*F-M)) - 0.0006*Math.sin(dr*(2*F+Mpr));
	C1 = C1 + 0.0010*Math.sin(dr*(2*F-Mpr)) + 0.0005*Math.sin(dr*(2*Mpr+M));
	if (T < -11) {
		deltat= 0.001 + 0.000839*T + 0.0002261*T2 - 0.00000845*T3 - 0.000000081*T*T3;
	} else {
		deltat= -0.000278 + 0.000265*T + 0.000262*T2;
	};
	JdNew = Jd1 + C1 - deltat;
	return JdNew;
}

/* Compute the longitude of the sun at any time. 
 * Parameter: floating number jdn, the number of days since 1/1/4713 BC noon
 * Algorithm from: "Astronomical Algorithms" by Jean Meeus, 1998
 */
function SunLongitude(jdn) {
	var T, T2, dr, M, L0, DL, L;
	T = (jdn - 2451545.0 ) / 36525; // Time in Julian centuries from 2000-01-01 12:00:00 GMT
	T2 = T*T;
	dr = PI/180; // degree to radian
	M = 357.52910 + 35999.05030*T - 0.0001559*T2 - 0.00000048*T*T2; // mean anomaly, degree
	L0 = 280.46645 + 36000.76983*T + 0.0003032*T2; // mean longitude, degree
	DL = (1.914600 - 0.004817*T - 0.000014*T2)*Math.sin(dr*M);
	DL = DL + (0.019993 - 0.000101*T)*Math.sin(dr*2*M) + 0.000290*Math.sin(dr*3*M);
	L = L0 + DL; // true longitude, degree
	L = L*dr;
	L = L - PI*2*(INT(L/(PI*2))); // Normalize to (0, 2*PI)
	return L;
}

/* Compute sun position at midnight of the day with the given Julian day number. 
 * The time zone if the time difference between local time and UTC: 7.0 for UTC+7:00.
 * The function returns a number between 0 and 11. 
 * From the day after March equinox and the 1st major term after March equinox, 0 is returned. 
 * After that, return 1, 2, 3 ... 
 */
function getSunLongitude(dayNumber, timeZone) {
	return INT(SunLongitude(dayNumber - 0.5 - timeZone/24)/PI*6);
}

/* Compute the day of the k-th new moon in the given time zone.
 * The time zone if the time difference between local time and UTC: 7.0 for UTC+7:00
 */
function getNewMoonDay(k, timeZone) {
	return INT(NewMoon(k) + 0.5 + timeZone/24);
}

/* Find the day that starts the luner month 11 of the given year for the given time zone */
function getLunarMonth11(yy, timeZone) {
	var k, off, nm, sunLong;
	//off = jdFromDate(31, 12, yy) - 2415021.076998695;
	off = jdFromDate(31, 12, yy) - 2415021;
	k = INT(off / 29.530588853);
	nm = getNewMoonDay(k, timeZone);
	sunLong = getSunLongitude(nm, timeZone); // sun longitude at local midnight
	if (sunLong >= 9) {
		nm = getNewMoonDay(k-1, timeZone);
	}
	return nm;
}

/* Find the index of the leap month after the month starting on the day a11. */
function getLeapMonthOffset(a11, timeZone) {
	var k, last, arc, i;
	k = INT((a11 - 2415021.076998695) / 29.530588853 + 0.5);
	last = 0;
	i = 1; // We start with the month following lunar month 11
	arc = getSunLongitude(getNewMoonDay(k+i, timeZone), timeZone);
	do {
		last = arc;
		i++;
		arc = getSunLongitude(getNewMoonDay(k+i, timeZone), timeZone);
	} while (arc != last && i < 14);
	return i-1;
}

/* Comvert solar date dd/mm/yyyy to the corresponding lunar date */
function convertSolar2Lunar(dd, mm, yy, timeZone) {
	var k, dayNumber, monthStart, a11, b11, lunarDay, lunarMonth, lunarYear, lunarLeap;
	dayNumber = jdFromDate(dd, mm, yy);
	k = INT((dayNumber - 2415021.076998695) / 29.530588853);
	monthStart = getNewMoonDay(k+1, timeZone);
	if (monthStart > dayNumber) {
		monthStart = getNewMoonDay(k, timeZone);
	}
	//alert(dayNumber+" -> "+monthStart);
	a11 = getLunarMonth11(yy, timeZone);
	b11 = a11;
	if (a11 >= monthStart) {
		lunarYear = yy;
		a11 = getLunarMonth11(yy-1, timeZone);
	} else {
		lunarYear = yy+1;
		b11 = getLunarMonth11(yy+1, timeZone);
	}
	lunarDay = dayNumber-monthStart+1;
	diff = INT((monthStart - a11)/29);
	lunarLeap = 0;
	lunarMonth = diff+11;
	if (b11 - a11 > 365) {
		leapMonthDiff = getLeapMonthOffset(a11, timeZone);
		if (diff >= leapMonthDiff) {
			lunarMonth = diff + 10;
			if (diff == leapMonthDiff) {
				lunarLeap = 1;
			}
		}
	}
	if (lunarMonth > 12) {
		lunarMonth = lunarMonth - 12;
	}
	if (lunarMonth >= 11 && diff < 4) {
		lunarYear -= 1;
	}
	return new Array(lunarDay, lunarMonth, lunarYear, lunarLeap);
}
// end lib

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
  
  var currntDate = new Date();
  var defaultYear = currntDate.getFullYear();
  let params = new URLSearchParams(window.location.search);
  let searchYear = params.get('searchYear') ? params.get('searchYear') : defaultYear;
  const searchYearField = $('#searchYear');
  if (searchYearField) {
    searchYearField.val(searchYear);
  }

  var date = new Date(searchYear + '-' + currntDate.getMonth() + '-01');
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
      theEpiphanyOfTheLord: tinhLeChuaHienLinh(y),
  };
  
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
