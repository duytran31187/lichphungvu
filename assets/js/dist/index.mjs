var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// src/lephucsinhlib.js
var require_lephucsinhlib = __commonJS({
  "src/lephucsinhlib.js"(exports, module) {
    "use strict";
    var PI = Math.PI;
    function INT(d) {
      return Math.floor(d);
    }
    function jdFromDate(dd, mm, yy) {
      var a, y, m, jd;
      a = INT((14 - mm) / 12);
      y = yy + 4800 - a;
      m = mm + 12 * a - 3;
      jd = dd + INT((153 * m + 2) / 5) + 365 * y + INT(y / 4) - INT(y / 100) + INT(y / 400) - 32045;
      if (jd < 2299161) {
        jd = dd + INT((153 * m + 2) / 5) + 365 * y + INT(y / 4) - 32083;
      }
      return jd;
    }
    function NewMoon(k) {
      var T, T2, T3, dr, Jd1, M, Mpr, F, C1, deltat, JdNew;
      T = k / 1236.85;
      T2 = T * T;
      T3 = T2 * T;
      dr = PI / 180;
      Jd1 = 241502075933e-5 + 29.53058868 * k + 1178e-7 * T2 - 155e-9 * T3;
      Jd1 = Jd1 + 33e-5 * Math.sin((166.56 + 132.87 * T - 9173e-6 * T2) * dr);
      M = 359.2242 + 29.10535608 * k - 333e-7 * T2 - 347e-8 * T3;
      Mpr = 306.0253 + 385.81691806 * k + 0.0107306 * T2 + 1236e-8 * T3;
      F = 21.2964 + 390.67050646 * k - 16528e-7 * T2 - 239e-8 * T3;
      C1 = (0.1734 - 393e-6 * T) * Math.sin(M * dr) + 21e-4 * Math.sin(2 * dr * M);
      C1 = C1 - 0.4068 * Math.sin(Mpr * dr) + 0.0161 * Math.sin(dr * 2 * Mpr);
      C1 = C1 - 4e-4 * Math.sin(dr * 3 * Mpr);
      C1 = C1 + 0.0104 * Math.sin(dr * 2 * F) - 51e-4 * Math.sin(dr * (M + Mpr));
      C1 = C1 - 74e-4 * Math.sin(dr * (M - Mpr)) + 4e-4 * Math.sin(dr * (2 * F + M));
      C1 = C1 - 4e-4 * Math.sin(dr * (2 * F - M)) - 6e-4 * Math.sin(dr * (2 * F + Mpr));
      C1 = C1 + 1e-3 * Math.sin(dr * (2 * F - Mpr)) + 5e-4 * Math.sin(dr * (2 * Mpr + M));
      if (T < -11) {
        deltat = 1e-3 + 839e-6 * T + 2261e-7 * T2 - 845e-8 * T3 - 81e-9 * T * T3;
      } else {
        deltat = -278e-6 + 265e-6 * T + 262e-6 * T2;
      }
      ;
      JdNew = Jd1 + C1 - deltat;
      return JdNew;
    }
    function SunLongitude(jdn) {
      var T, T2, dr, M, L0, DL, L;
      T = (jdn - 2451545) / 36525;
      T2 = T * T;
      dr = PI / 180;
      M = 357.5291 + 35999.0503 * T - 1559e-7 * T2 - 48e-8 * T * T2;
      L0 = 280.46645 + 36000.76983 * T + 3032e-7 * T2;
      DL = (1.9146 - 4817e-6 * T - 14e-6 * T2) * Math.sin(dr * M);
      DL = DL + (0.019993 - 101e-6 * T) * Math.sin(dr * 2 * M) + 29e-5 * Math.sin(dr * 3 * M);
      L = L0 + DL;
      L = L * dr;
      L = L - PI * 2 * INT(L / (PI * 2));
      return L;
    }
    function getSunLongitude(dayNumber, timeZone) {
      return INT(SunLongitude(dayNumber - 0.5 - timeZone / 24) / PI * 6);
    }
    function getNewMoonDay(k, timeZone) {
      return INT(NewMoon(k) + 0.5 + timeZone / 24);
    }
    function getLunarMonth11(yy, timeZone) {
      var k, off, nm, sunLong;
      off = jdFromDate(31, 12, yy) - 2415021;
      k = INT(off / 29.530588853);
      nm = getNewMoonDay(k, timeZone);
      sunLong = getSunLongitude(nm, timeZone);
      if (sunLong >= 9) {
        nm = getNewMoonDay(k - 1, timeZone);
      }
      return nm;
    }
    function getLeapMonthOffset(a11, timeZone) {
      var k, last, arc, i;
      k = INT((a11 - 2415021076998695e-9) / 29.530588853 + 0.5);
      last = 0;
      i = 1;
      arc = getSunLongitude(getNewMoonDay(k + i, timeZone), timeZone);
      do {
        last = arc;
        i++;
        arc = getSunLongitude(getNewMoonDay(k + i, timeZone), timeZone);
      } while (arc != last && i < 14);
      return i - 1;
    }
    function convertSolar2Lunar2(dd, mm, yy, timeZone) {
      var k, dayNumber, monthStart, a11, b11, lunarDay, lunarMonth, lunarYear, lunarLeap;
      dayNumber = jdFromDate(dd, mm, yy);
      k = INT((dayNumber - 2415021076998695e-9) / 29.530588853);
      monthStart = getNewMoonDay(k + 1, timeZone);
      if (monthStart > dayNumber) {
        monthStart = getNewMoonDay(k, timeZone);
      }
      a11 = getLunarMonth11(yy, timeZone);
      b11 = a11;
      if (a11 >= monthStart) {
        lunarYear = yy;
        a11 = getLunarMonth11(yy - 1, timeZone);
      } else {
        lunarYear = yy + 1;
        b11 = getLunarMonth11(yy + 1, timeZone);
      }
      lunarDay = dayNumber - monthStart + 1;
      const diff = INT((monthStart - a11) / 29);
      lunarLeap = 0;
      lunarMonth = diff + 11;
      if (b11 - a11 > 365) {
        const leapMonthDiff = getLeapMonthOffset(a11, timeZone);
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
    module.exports = {
      convertSolar2Lunar: convertSolar2Lunar2
    };
  }
});

// src/tinh4TuanMuaVong.ts
function tinh4TuanMuaVong(y) {
  let yearStr = y.toString();
  let yearNums = Array.from(yearStr);
  let countNum = 0;
  yearNums.forEach((element) => {
    countNum += parseInt(element);
  });
  let year;
  let finalResult;
  switch (countNum % 3) {
    case 1:
      year = "A";
      break;
    case 2:
      year = "B";
      break;
    default:
      year = "C";
  }
  let chrismastDate = /* @__PURE__ */ new Date(y + "-12-25");
  let sundayFound = false;
  let count = 0;
  do {
    var closestSunday_1 = chrismastDate;
    closestSunday_1.setDate(chrismastDate.getDate() - 1);
    if (closestSunday_1.getDay() === 0) {
      var sunday4 = new Date(closestSunday_1.getTime());
      var sunday3 = new Date(sunday4.getTime());
      sunday3.setDate(sunday3.getDate() - 7);
      var sunday2 = new Date(sunday3.getTime());
      sunday2.setDate(sunday2.getDate() - 7);
      var sunday1 = new Date(sunday2.getTime());
      sunday1.setDate(sunday2.getDate() - 7);
      sundayFound = true;
      finalResult = {
        week1: sunday1,
        week2: sunday2,
        week3: sunday3,
        week4: sunday4,
        yearABC: year
      };
      break;
    }
    count++;
  } while (!sundayFound);
  return finalResult;
}

// src/utils.ts
function cloneDate(d) {
  return new Date(d.getTime());
}
function addDate(currentDate, numOfDate) {
  const newDate = cloneDate(currentDate);
  newDate.setDate(newDate.getDate() + numOfDate);
  return newDate;
}
function getChristmasDay(year) {
  return /* @__PURE__ */ new Date(year + "12-25");
}

// src/tinhlephucsinh.ts
var { convertSolar2Lunar } = require_lephucsinhlib();
var tinhngayramsau21thang3 = (y) => {
  let ngayRamFound = false;
  let count = 0;
  let dateFrom21 = 21;
  let month = 3;
  do {
    const ngayAm = convertSolar2Lunar(
      dateFrom21,
      month,
      y,
      7
      // UTC+7
    );
    const lunarDay = ngayAm[0];
    if (lunarDay === 16) {
      ngayRamFound = true;
    }
    count++;
    dateFrom21++;
    if (dateFrom21 == 32) {
      dateFrom21 = 1;
      month = 4;
    }
  } while (!ngayRamFound);
  return {
    year: y,
    month,
    day: dateFrom21
  };
};
function tinhThuTuLeTro(ngayLePhucSinh) {
  const thutuLeTro = cloneDate(ngayLePhucSinh);
  thutuLeTro.setDate(thutuLeTro.getDate() - 46);
  return thutuLeTro;
}
var timChuaNhatGanNhatTuNgay = (d) => {
  let sundayFound = false;
  let closestSunday = cloneDate(d);
  do {
    if (closestSunday.getDay() === 0) {
      sundayFound = true;
      break;
    }
    closestSunday.setDate(closestSunday.getDate() + 1);
  } while (!sundayFound);
  return closestSunday;
};
var tinhNgayPhucSinh = (year) => {
  const simpleDateParam = tinhngayramsau21thang3(year);
  let closestSunday = /* @__PURE__ */ new Date(simpleDateParam.year + "-" + simpleDateParam.month + "-" + simpleDateParam.day);
  closestSunday.setDate(closestSunday.getDate() + 1);
  return timChuaNhatGanNhatTuNgay(closestSunday);
};
function tinhLeChuaHienLinh(y) {
  const christmasDate = getChristmasDay(y);
  const chuaNhatSauGiangsinh = timChuaNhatGanNhatTuNgay(christmasDate);
  chuaNhatSauGiangsinh.setDate(chuaNhatSauGiangsinh.getDate());
  return addDate(chuaNhatSauGiangsinh, 7);
}

// src/index.ts
function tinhNamPhungVu(y) {
  const tuanmuaVong = tinh4TuanMuaVong(y);
  const year = tuanmuaVong.yearABC;
  const easter = tinhNgayPhucSinh(y);
  const ashWednesday = tinhThuTuLeTro(easter);
  return {
    year: y,
    yearABC: year,
    oddEven: y % 2 == 0 ? "Even" : "Odd",
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
    christmas: getChristmasDay(y),
    theEpiphanyOfTheLord: tinhLeChuaHienLinh(y)
  };
}
export {
  tinhNamPhungVu
};
//# sourceMappingURL=index.mjs.map