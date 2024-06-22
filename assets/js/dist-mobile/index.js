import { LE_KINH, LE_NHO, LE_TRONG, nameOfDays } from "./commonData";
import { TinhNamPhungVu } from "./TinhNamPhungVu";
export function getTinhNamPhungVuInstant(year) {
    return new TinhNamPhungVu(year);
}
// const ins = getTinhNamPhungVuInstant(2024);
// const fullYear = ins.getLichPhungVuTheoThang(6);
// console.log(fullYear);
// for (let key in fullYear) {
//     if (fullYear[key]['cacNgayLe'].length > 0) {
//         for(let i in fullYear[key]['cacNgayLe']) {
//             console.log( fullYear[key].date.toDateString() + ':' + fullYear[key]['cacNgayLe'][i]['name']);
//         }
//     } else {
//         console.log( fullYear[key].date.toDateString());
//     }
// }
export { nameOfDays, LE_NHO, LE_KINH, LE_TRONG };
