import {convertSolar2Lunar} from './lephucsinhlib.js';
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
export function tinhThuTuLeTro(ngayLePhucSinh) {
    var thutuLeTro = cloneDate(ngayLePhucSinh);
    thutuLeTro.setDate(thutuLeTro.getDate() - 46);
    return thutuLeTro;
};
export function addDate(currentDate, numOfDate) {
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
export function tinhNgayPhucSinh(year) {
    var simpleDateParam = tinhngayramsau21thang3(year);
    var closestSunday = new Date(simpleDateParam.year + '-' + simpleDateParam.month + '-' + simpleDateParam.day);
    closestSunday.setDate(closestSunday.getDate() + 1);
    return timChuaNhatGanNhatTuNgay(closestSunday);
};
export function tinhLeChuaHienLinh(y) {
    var christmasDate = new Date(y + '-12-25');
    var chuaNhatSauGiangsinh = timChuaNhatGanNhatTuNgay(christmasDate);
    chuaNhatSauGiangsinh.setDate(chuaNhatSauGiangsinh.getDate());
    return addDate(chuaNhatSauGiangsinh, 7);
};