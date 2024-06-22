
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
export function addTextToBody(text) {
  const div = document.createElement('div');
  div.textContent = tinhNamABC(2024);
  document.body.appendChild(div);
}