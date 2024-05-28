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
  return /* @__PURE__ */ new Date(year + "-12-25");
}
function timNgayTrongTuanSauNgay(d, dayOfWeek) {
  let count = 1;
  let resultDay;
  let breakTheLoop = false;
  do {
    const testDate = addDate(d, count);
    if (testDate.getDay() == dayOfWeek) {
      breakTheLoop = true;
      resultDay = cloneDate(testDate);
    }
    count++;
    if (count > 7) {
      breakTheLoop = true;
    }
  } while (!breakTheLoop);
  if (!resultDay) {
    console.log("invalid date");
  }
  return resultDay;
}
var timChuaNhatGanNhatTuNgay = (d) => {
  d.setDate(d.getDate() - 1);
  return timNgayTrongTuanSauNgay(d, 0);
};

// src/cacNgayLeNamPhungVu.ts
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
  const d = cloneDate(ngayLePhucSinh);
  d.setDate(d.getDate() - 46);
  return d;
}
var tinhNgayPhucSinh = (year) => {
  const simpleDateParam = tinhngayramsau21thang3(year);
  let closestSunday = /* @__PURE__ */ new Date(simpleDateParam.year + "-" + simpleDateParam.month + "-" + simpleDateParam.day);
  return timChuaNhatGanNhatTuNgay(closestSunday);
};
function tinhLeChuaHienLinh(y) {
  const ngayLeHienLinh = /* @__PURE__ */ new Date(y + "-01-06");
  switch (ngayLeHienLinh.getDay()) {
    case 1:
      return /* @__PURE__ */ new Date(y + "-01-05");
    case 2:
      return /* @__PURE__ */ new Date(y + "-01-04");
    case 3:
      return /* @__PURE__ */ new Date(y + "-01-03");
    case 4:
      return /* @__PURE__ */ new Date(y + "-01-02");
    case 5:
      return /* @__PURE__ */ new Date(y + "-01-8");
    case 6:
      return /* @__PURE__ */ new Date(y + "-01-7");
    default:
      return ngayLeHienLinh;
  }
}
function tinhLeThanhGia(y) {
  const christMas = getChristmasDay(y);
  let count = 1;
  let breakTheLoop = false;
  let foundDate = /* @__PURE__ */ new Date(y + "-12-30");
  do {
    let octaveDay = addDate(christMas, count);
    if (octaveDay.getDay() == 0) {
      breakTheLoop = true;
      foundDate = octaveDay;
    }
    count++;
    if (count > 6) {
      breakTheLoop = true;
    }
  } while (!breakTheLoop);
  return foundDate;
}
function tinhLeChuaChiuPhepRua(y) {
  const leHienLinh = tinhLeChuaHienLinh(y);
  const day7 = /* @__PURE__ */ new Date(y + "-1-7");
  const day8 = /* @__PURE__ */ new Date(y + "-1-8");
  let ngayLe;
  if (leHienLinh.getTime() == day7.getTime()) {
    ngayLe = timNgayTrongTuanSauNgay(day7, 1);
  } else if (leHienLinh.getTime() == day8.getTime()) {
    ngayLe = timNgayTrongTuanSauNgay(day8, 1);
  } else {
    ngayLe = timNgayTrongTuanSauNgay(leHienLinh, 0);
  }
  return ngayLe;
}
var tinhLeChuaKiToVua = (chuaNhatThuNhatMuaVong) => {
  chuaNhatThuNhatMuaVong.setDate(chuaNhatThuNhatMuaVong.getDate() - 7);
  return chuaNhatThuNhatMuaVong;
};
var tinhLeChuaThanhThanHienxuong = (easter) => {
  const d = cloneDate(easter);
  return addDate(d, 49);
};
var tinhChuaNhatThuongNienDauTienSauLeChuaThanhThanHienXuong = (leKiToVua, leChuatthienxuong) => {
  let count = 33;
  let found = false;
  const chuaNhatThuongNienDauTienMua2 = cloneDate(leChuatthienxuong);
  chuaNhatThuongNienDauTienMua2.setDate(chuaNhatThuongNienDauTienMua2.getDate() + 7);
  if (leChuatthienxuong.getDay() != 0 || leKiToVua.getDay() != 0) {
    console.error("invalid params");
    return 100;
  }
  do {
    let sunday34 = cloneDate(leKiToVua);
    sunday34.setDate(sunday34.getDate() - (34 - count) * 7);
    count--;
    if (sunday34.toDateString() == chuaNhatThuongNienDauTienMua2.toDateString()) {
      found = true;
      count++;
    }
  } while (!found);
  return count;
};
function tinhNamABC(y) {
  let yearStr = y.toString();
  let yearNums = Array.from(yearStr);
  let countNum = 0;
  let year;
  yearNums.forEach((element) => {
    countNum += parseInt(element);
  });
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
  return year;
}
function tinh4TuanMuaVong(y) {
  let chrismastDate = getChristmasDay(y);
  let sundayFound = false;
  let count = 0;
  let finalResult;
  do {
    let closestSunday_1 = chrismastDate;
    closestSunday_1.setDate(chrismastDate.getDate() - 1);
    if (closestSunday_1.getDay() === 0) {
      let sunday4 = new Date(closestSunday_1.getTime());
      let sunday3 = new Date(sunday4.getTime());
      sunday3.setDate(sunday3.getDate() - 7);
      let sunday2 = new Date(sunday3.getTime());
      sunday2.setDate(sunday2.getDate() - 7);
      let sunday1 = new Date(sunday2.getTime());
      sunday1.setDate(sunday2.getDate() - 7);
      sundayFound = true;
      finalResult = {
        week1: sunday1,
        week2: sunday2,
        week3: sunday3,
        week4: sunday4
      };
      break;
    }
    count++;
  } while (!sundayFound);
  return finalResult;
}
var firstSundayOfLent = (ashWednesday) => {
  return addDate(ashWednesday, 4);
};
var secondSundayOfLent = (ashWednesday) => {
  return addDate(ashWednesday, 11);
};
var thirdSundayOfLent = (ashWednesday) => {
  return addDate(ashWednesday, 18);
};
var fourthSundayOfLent = (ashWednesday) => {
  return addDate(ashWednesday, 25);
};
var fifthSundayOfLent = (ashWednesday) => {
  return addDate(ashWednesday, 32);
};
var calculateTheAscentionOfTheLord = (easter) => {
  return addDate(easter, 42);
};
var palmSunday = (ashWednesday) => {
  return addDate(ashWednesday, 39);
};

// src/index.ts
var nameOfDays = {
  year: "year( N\u0103m)",
  yearABC: "A|B|C (n\u0103m A|B|C)",
  oddEven: "Odd|Even (N\u0103m ch\u1EB5n l\u1EBB)",
  theEpiphanyOfTheLord: "The Epiphany of the Lord (L\u1EC5 Ch\xFAa Hi\u1EC3n Linh)",
  leChuaChiuPhepRua: "L\u1EC5 Ch\xFAa ch\u1ECBu ph\xE9p r\u1EEDa",
  ashWed: "Ash Wednesday (Th\u1EE9 t\u01B0 l\u1EC5 tro)",
  firstSundayOfLent: "First Sunday of Lent (Ch\xFAa nh\u1EADt th\u1EE9 nh\u1EA5t m\xF9a chay)",
  secondSundayOfLent: "Second Sunday of Lent (Ch\xFAa nh\u1EADt th\u1EE9 2 m\xF9a chay)",
  thirdSundayOfLent: "Third Sunday of Lent (Ch\xFAa nh\u1EADt th\u1EE9 3 m\xF9a chay)",
  fourthSundayOfLent: "Fourth Sunday of Lent (Ch\xFAa nh\u1EADt th\u1EE9 4 m\xF9a chay)",
  fifthSundayOfLent: "Fifth Sunday of Lent (Ch\xFAa nh\u1EADt th\u1EE9 5 m\xF9a chay)",
  palmSunday: "Palm Sunday (L\u1EC5 L\xE1)",
  easterSunday: "Easter Sunda (Ph\u1EE5c sinh)",
  secondSundayOfEaster: "Second Sunday of Easter (Ch\xFAa nh\u1EADt th\u1EE9 2 ph\u1EE5c sinh)",
  thirdSundayOfEaster: "Third Sunday of Easter (Ch\xFAa nh\u1EADt th\u1EE9 3 ph\u1EE5c sinh)",
  fourthSundayOfEaster: "Fourth Sunday of Easter (Ch\xFAa nh\u1EADt th\u1EE9 4 ph\u1EE5c sinh)",
  fifthSundayOfEaster: "Fifth Sunday of Easter (Ch\xFAa nh\u1EADt th\u1EE9 5 ph\u1EE5c sinh)",
  sixthSundayOfEaster: "Sixth Sunday of Easter (Ch\xFAa nh\u1EADt th\u1EE9 6 ph\u1EE5c sinh)",
  theAscentionOfTheLord: "The Ascention of the Lord (L\u1EC5 Ch\xFAa L\xEAn Tr\u1EDDi)",
  pentecostSunday: "Pentecost Sunday (L\u1EC5 Ch\xFAa Th\xE1nh Th\u1EA7n hi\u1EC7n xu\u1ED1ng)",
  firstSundayOfAdvent: "First Sunday of Advent (Ch\xFAa nh\u1EADt th\u1EE9 nh\u1EA5t m\xF9a v\u1ECDng)",
  secondSundayOfAdvent: "Second Sunday of Advent (Ch\xFAa nh\u1EADt th\u1EE9 2 m\xF9a v\u1ECDng)",
  thirdSundayOfAdvent: "Third Sunday of Advent (Ch\xFAa nh\u1EADt th\u1EE9 3 m\xF9a v\u1ECDng)",
  fourthSundayOfAdvent: "Fourth Sunday of Advent (Ch\xFAa nh\u1EADt th\u1EE9 t\u01B0 m\xF9a v\u1ECDng)",
  christmas: "Christmas (Gi\xE1ng sinh)",
  leThanhGia: "L\u1EC5 Th\xE1nh Gia",
  chuaKitoVua: "L\u1EC5 Ch\xFAa KiTo Vua",
  firstOrdinarySundayAfterPentecostSunday: "Chua Nhat Thuong Nien sau Le Chua Thanh than hien xuong"
};
function tinhNamPhungVu(y) {
  const tuanmuaVong = tinh4TuanMuaVong(y);
  const easter = tinhNgayPhucSinh(y);
  const ashWednesday = tinhThuTuLeTro(cloneDate(easter));
  const chuaHienLinh = tinhLeChuaHienLinh(y);
  const leChuaKiToVua = tinhLeChuaKiToVua(tuanmuaVong.week1);
  const pentecostSunday = tinhLeChuaThanhThanHienxuong(cloneDate(easter));
  const chuaNhatThuongNienDauTienSauLeChuaThanhThanHienXuong = tinhChuaNhatThuongNienDauTienSauLeChuaThanhThanHienXuong(
    leChuaKiToVua,
    pentecostSunday
  );
  return {
    year: y,
    yearABC: tinhNamABC(y),
    oddEven: y % 2 == 0 ? "Even ( N\u0103m ch\u1EB5n)" : "Odd (N\u0103m l\u1EBB)",
    theEpiphanyOfTheLord: chuaHienLinh,
    firstOrdinarySundayAfterPentecostSunday: chuaNhatThuongNienDauTienSauLeChuaThanhThanHienXuong,
    leChuaChiuPhepRua: tinhLeChuaChiuPhepRua(y),
    ashWed: ashWednesday,
    firstSundayOfLent: firstSundayOfLent(ashWednesday),
    secondSundayOfLent: secondSundayOfLent(ashWednesday),
    thirdSundayOfLent: thirdSundayOfLent(ashWednesday),
    fourthSundayOfLent: fourthSundayOfLent(ashWednesday),
    fifthSundayOfLent: fifthSundayOfLent(ashWednesday),
    palmSunday: palmSunday(ashWednesday),
    easterSunday: easter,
    secondSundayOfEaster: addDate(easter, 7),
    thirdSundayOfEaster: addDate(easter, 14),
    fourthSundayOfEaster: addDate(easter, 21),
    fifthSundayOfEaster: addDate(easter, 28),
    sixthSundayOfEaster: addDate(easter, 35),
    theAscentionOfTheLord: calculateTheAscentionOfTheLord(easter),
    pentecostSunday,
    chuaKitoVua: leChuaKiToVua,
    firstSundayOfAdvent: tuanmuaVong.week1,
    secondSundayOfAdvent: tuanmuaVong.week2,
    thirdSundayOfAdvent: tuanmuaVong.week3,
    fourthSundayOfAdvent: tuanmuaVong.week4,
    christmas: getChristmasDay(y),
    leThanhGia: tinhLeThanhGia(y)
  };
}
export {
  nameOfDays,
  tinhNamPhungVu
};
//# sourceMappingURL=index.mjs.map