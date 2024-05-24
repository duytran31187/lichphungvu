var tinh4TuanMuaVong = require('./tinh4TuanMuaVong').tinh4TuanMuaVong;
var _a = require('./tinhlephucsinh'), tinhNgayPhucSinh = _a.tinhNgayPhucSinh, tinhThuTuLeTro = _a.tinhThuTuLeTro, addDate = _a.addDate, tinhLeChuaHienLinh = _a.tinhLeChuaHienLinh;
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
for( let key in namphungVuIns) 
{
    console.log(`${key}: ${namphungVuIns[key] instanceof Date ? namphungVuIns[key].toDateString() : namphungVuIns[key]}`);
}