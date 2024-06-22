import { getTinhNamPhungVuInstant } from "./dist-mobile/index.d.ts";

var namPhungvu = getTinhNamPhungVuInstant(2024);
const fullYear = namPhungvu.getFullLichPhungVuTheoNam();

let count = 0;
document.getElementById('holder3').innerHTML = JSON.stringify(fullYear);
