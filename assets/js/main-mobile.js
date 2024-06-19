import {  LE_KINH, LE_NHO, LE_TRONG, getTinhNamPhungVuInstant, nameOfDays } from './dist-mobile/index.mjs'

var namPhungvu = getTinhNamPhungVuInstant(2024);
const fullYear = namPhungvu.getFullLichPhungVuTheoNam();
let count = 0;
for (let yk in fullYear) {
  if(count >=2) {
    break;
  }
  for (let ngayle in fullYear[yk]['cacNgayLe']) {
      const tmpD = fullYear[yk]['date'];
      tmpD.setHours(0);
      tmpD.setMinutes(0);
      tmpD.setSeconds(0);
      let label = '';
      const typeNgayLe = fullYear[yk]['cacNgayLe'][ngayle]['type'];
      // if (fullYear[yk]['cacNgayLe'][ngayle]['type'] != '') {
      //     label = fullYear[yk]['cacNgayLe'][ngayle]['type'] +'|';
      // }
      label += fullYear[yk]['cacNgayLe'][ngayle]['name'];
      let typeClss = '';
      if (typeNgayLe == LE_NHO) {
          typeClss = 'le_nho_d';
      } else if (typeNgayLe == LE_KINH) {
          typeClss = 'le_kinh_d';
      } else if (typeNgayLe == LE_TRONG) {
          typeClss = 'le_trong_d';
      }
      document.getElementById('holder').innerHTML = label;
      count++;
      // data.push(
      //     {
      //     title: label,
      //     start: tmpD,
      //     end: tmpD,
      //     typeClss: typeClss,
      //     allDay: true
      //     }
      // );
  }
}