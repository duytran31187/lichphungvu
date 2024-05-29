// import { nameOfDays, tinhNamPhungVu } from './dist/index.mjs'
// function getNgayPhungVuTheoThang(monthInNum, namphungVuIns) {
//     const ngayPhungVuTheoThang = [];
//     if (namphungVuIns[key] instanceof Date && namphungVuIns[key].getMonth() == monthInNum) {
//         ngayPhungVuTheoThang[namphungVuIns[key].toDateString()] = nameOfDays[key];
//     }
//     return ngayPhungVuTheoThang;
// }
window.onload = function () {
    // var currentDate = new Date();
    // var defaultYear = currentDate.getFullYear();
    // let params = new URLSearchParams(window.location.search);
    // let searchYear = params.get('searchYear') ? params.get('searchYear') : defaultYear;
    // const searchYearField = document.getElementById('searchYear');
    // searchYearField.val(searchYear);
    // var namphungVuIns = tinhNamPhungVu(2024);
    // console.dir(namphungVuIns);
    const vm = new Vue({
        el: '#app',     
        data() {
            return {
                year: 2024,
                namPhungvu: {
                    month_1: [
                        '222',
                        '333',
                    ],
                    month_2: [
                        'ngay 1',
                        'ngay 2',
                    ]
                }
            }
        },
        created() {
            this.testing();
        },
        methods: {
            testing: function () {
                console.log(this.test);
            }
        }
    });
}

