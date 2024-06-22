import { getTinhNamPhungVuInstant } from "./dist-lichphungvu/index.d.mts";

var namPhungvu = getTinhNamPhungVuInstant(2024);
const fullYear = namPhungvu.getFullLichPhungVuTheoNam();
const year2024 = new namPhungvu(2024);

let count = 0;
document.getElementById('holder3').innerHTML = JSON.stringify(fullYear);
