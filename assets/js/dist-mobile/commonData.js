import { newDate } from "./utils";
export const nameOfDays = {
    year: 'Năm',
    yearABC: 'năm A|B|C',
    oddEven: 'Năm chẵn lẻ',
    theEpiphanyOfTheLord: 'Lễ Chúa Hiển Linh',
    leChuaChiuPhepRua: 'Lễ Chúa chịu phép rửa',
    ashWed: 'Thứ tư lễ tro',
    firstSundayOfLent: 'Chúa nhật thứ nhất mùa chay',
    secondSundayOfLent: 'Chúa nhật thứ 2 mùa chay',
    thirdSundayOfLent: 'Chúa nhật thứ 3 mùa chay',
    fourthSundayOfLent: 'Chúa nhật thứ 4 mùa chay',
    fifthSundayOfLent: 'Chúa nhật thứ 5 mùa chay',
    palmSunday: 'Lễ Lá',
    easterSunday: 'Phục sinh',
    secondSundayOfEaster: 'Chúa nhật thứ 2 phục sinh',
    thirdSundayOfEaster: 'Chúa nhật thứ 3 phục sinh',
    fourthSundayOfEaster: 'Chúa nhật thứ 4 phục sinh',
    fifthSundayOfEaster: 'Chúa nhật thứ 5 phục sinh',
    sixthSundayOfEaster: 'Chúa nhật thứ 6 phục sinh',
    theAscentionOfTheLord: 'Lễ Chúa Lên Trời',
    pentecostSunday: 'Lễ Chúa Thánh Thần hiện xuống',
    firstSundayOfAdvent: 'Chúa nhật thứ nhất mùa vọng',
    secondSundayOfAdvent: 'Chúa nhật thứ 2 mùa vọng',
    thirdSundayOfAdvent: 'Chúa nhật thứ 3 mùa vọng',
    fourthSundayOfAdvent: 'Chúa nhật thứ tư mùa vọng',
    christmas: 'Giáng sinh',
    leThanhGia: 'Lễ Thánh Gia',
    chuaKitoVua: 'Lễ Chúa KiTo Vua',
    firstOrdinarySundayAfterPentecostSunday: 'Chua Nhat Thuong Nien sau Le Chua Thanh than hien xuong',
    leDucMeChuaTroi: 'Thánh Ma-ri-a, Ðức Mẹ Chúa Trời',
    leChuaBaNgoi: 'Lễ Chúa Ba Ngôi',
    leMinhMauThanhChua: 'Lễ Mình Máu Thánh Chúa',
    leThanhTamChuaGieSu: 'Lễ Thánh Tâm Chúa Giê Su',
};
// cac loai ngay le
export const LE_KINH = 'Lễ Kính';
export const LE_NHO = 'Lễ Nhớ';
export const LE_TRONG = 'Lễ Trọng';
export var LOAI_NGAY_LE;
(function (LOAI_NGAY_LE) {
    LOAI_NGAY_LE[LOAI_NGAY_LE["LE_KINH"] = 0] = "LE_KINH";
    LOAI_NGAY_LE[LOAI_NGAY_LE["LE_NHO"] = 1] = "LE_NHO";
    LOAI_NGAY_LE[LOAI_NGAY_LE["LE_TRONG"] = 2] = "LE_TRONG";
})(LOAI_NGAY_LE || (LOAI_NGAY_LE = {}));
;
export const danhSachNgayLeCoDinh = (year) => {
    return [
        {
            name: 'Thánh Ma-ri-a, Ðức Mẹ Chúa Trời',
            date: newDate(year, 1, 1),
            type: LE_TRONG,
            fixed: true
        },
        {
            name: 'Thánh Ba-xi-li-ô Cả và thánh Ghê-gô-ri-ô Na-di-en, giám mục, tiến sĩ Hội Thánh',
            date: newDate(year, 1, 2),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Kinh Danh rất thánh Chúa Giê-su',
            date: newDate(year, 1, 3),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Rây-mun-đô Pê-nha-pho, linh mục',
            date: newDate(year, 1, 7),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Hi-la-ri-ô, giám mục, tiến sĩ Hội Thánh',
            date: newDate(year, 1, 13),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh An-tôn, viện phụ',
            date: newDate(year, 1, 17),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Pha-bi-a-nô, giáo hoàng, tử đạo',
            date: newDate(year, 1, 20),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Xê-bát-ti-a-nô, tử đạo',
            date: newDate(year, 1, 20),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh A-nê, trinh nữ, tử đạo',
            date: newDate(year, 1, 21),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Vinh-sơn, phó tế, tử đạo',
            date: newDate(year, 1, 22),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Phan-xi-cô đơ Xan, giám mục, tiến sĩ Hội Thánh',
            date: newDate(year, 1, 24),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Phao-lô Tông đồ trở lại',
            date: newDate(year, 1, 25),
            type: LE_KINH,
            fixed: true
        },
        {
            name: 'Thánh Ti-mô-thê và thánh Ti-tô, giám mục',
            date: newDate(year, 1, 26),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh An-giê-la Mê-ri-si, trinh nữ',
            date: newDate(year, 1, 27),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Tô-ma A-qui-nô, linh mục, tiến sĩ Hội Thánh',
            date: newDate(year, 1, 28),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Gio-an Bốt-cô, linh mục',
            date: newDate(year, 1, 31),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Dâng Chúa Giê-su Trong Đền Thánh',
            date: newDate(year, 2, 2),
            type: LE_KINH,
            fixed: true,
        },
        {
            name: 'Thánh An-ga-ri-ô, giám mục',
            date: newDate(year, 2, 3),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Bơ-la-xi-ô, giám mục, tử đạo',
            date: newDate(year, 2, 3),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh A-ga-ta, trinh nữ, tử đạo',
            date: newDate(year, 2, 5),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Phao-lô Mi-ki và các bạn, tử đạo',
            date: newDate(year, 2, 6),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Cô-lát-ti-ca, trinh nữ',
            date: newDate(year, 2, 10),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Đức Mẹ Lộ-đức',
            date: newDate(year, 2, 11),
            fixed: true
        },
        {
            name: 'Thánh Sy-ri-lô, đan sĩ và thánh Mê-tô-đi-ô, giám mục',
            date: newDate(year, 2, 14),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Bảy thánh lập dòng Tôi Tớ Đức Mẹ',
            date: newDate(year, 2, 17),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Phê-rô Đa-mi-a-nô, giám mục, tiến sĩ Hội Thánh',
            date: newDate(year, 2, 21),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Lập tông tòa thánh Phê-rô Tông đồ',
            date: newDate(year, 2, 22),
            type: LE_KINH,
            fixed: true,
        },
        {
            name: 'Thánh Ghê-gô-ri-ô thành Narek, viện phụ, tiến sĩ Hội Thánh',
            date: newDate(year, 2, 27),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Ca-xi-mia',
            date: newDate(year, 3, 4),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh nữ Pe-pê-tu-a và thánh nữ Phê-li-xi-ta, tử đạo',
            date: newDate(year, 3, 7),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Pát-tric, giám mục',
            date: newDate(year, 3, 17),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Sy-ri-lô, giám mục Giê-ru-sa-lem, tiến sĩ Hội Thánh',
            date: newDate(year, 3, 18),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Giu-se, Bạn trăm năm Đức Trinh nữ Maria',
            date: newDate(year, 3, 19),
            type: LE_TRONG,
            fixed: true
        },
        {
            name: 'Lễ Truyền Tin',
            date: newDate(year, 3, 25),
            type: LE_TRONG,
            fixed: true
        },
        {
            name: 'Thánh Mác-cô, tác giả sách Tin Mừng',
            date: newDate(year, 4, 25),
            fixed: true,
            type: LE_KINH
        },
        {
            name: 'Thánh Lu-i đơ Mông-pho, linh mục',
            date: newDate(year, 4, 28),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Phê-rô Sa-nen, linh mục, tử đạo',
            date: newDate(year, 4, 28),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Ca-ta-ri-na Si-ê-na, trinh nữ, tiến sĩ Hội Thánh',
            date: newDate(year, 4, 29),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Pi-ô V, giáo hoàng',
            date: newDate(year, 4, 30),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Giu-se thợ',
            date: newDate(year, 5, 1),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh A-tha-na-xi-ô, giám mục, tiến sĩ Hội Thánh',
            date: newDate(year, 5, 2),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Phi-lip-phê và thánh Gia-cô-bê, tông đồ',
            date: newDate(year, 5, 3),
            type: LE_KINH,
            fixed: true
        },
        {
            name: 'Thánh Nê-rê-ô và thánh A-ki-lê-ô, tử đạo',
            date: newDate(year, 5, 12),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Păng-ra-xi-ô, tử đạo',
            date: newDate(year, 5, 12),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Đức Mẹ Fa-ti-ma',
            date: newDate(year, 5, 13),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Mát-thi-a, Tông đồ',
            date: newDate(year, 5, 14),
            fixed: true,
            type: LE_KINH
        },
        {
            name: 'Thánh Bê-na-đi-nô Xi-ê-na, linh mục',
            date: newDate(year, 5, 20),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Christôphê de Magallanes, linh mục, và các bạn, tử đạo',
            date: newDate(year, 5, 21),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Ri-ta thành Ca-xi-a, Nữ tu',
            date: newDate(year, 5, 22),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Phi-lip-phê Nê-ri, linh mục',
            date: newDate(year, 5, 26),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Au-tinh thành Can-tơ-bơ-ri, giám mục',
            date: newDate(year, 5, 27),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Đức Maria thăm viếng bà Ê-li-sa-bét',
            type: LE_KINH,
            date: newDate(year, 5, 31),
            fixed: true
        },
        {
            name: 'Thánh Mác-sê-li-nô và thánh Phê-rô, tử đạo',
            date: newDate(year, 6, 2),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Ca-rô-lô Loan-ga và các bạn, tử đạo',
            date: newDate(year, 6, 3),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Bô-ni-phát, giám mục, tử đạo',
            date: newDate(year, 6, 5),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Nô-bec-tô, giám mục',
            date: newDate(year, 6, 6),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Ba-na-ba, tông đồ',
            date: newDate(year, 6, 11),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh An-tôn thành Pa-đô-va, linh mục, tiến sĩ Hội Thánh',
            date: newDate(year, 6, 13),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Rô-moan-đô, viện phụ',
            date: newDate(year, 6, 19),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Sinh nhật thánh Gio-an Tẩy Giả',
            date: newDate(year, 6, 24),
            type: LE_TRONG,
            fixed: true
        },
        {
            name: 'Thánh Phê-rô và thánh Phao-lô, tông đồ',
            date: newDate(year, 6, 29),
            type: LE_TRONG,
            fixed: true
        },
        {
            name: 'Các thánh tử đạo tiên khởi của giáo đoàn Rô-ma',
            date: newDate(year, 6, 30),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Tô-ma, tông đồ',
            date: newDate(year, 7, 3),
            type: LE_KINH,
            fixed: true
        },
        {
            name: 'Thánh nữ Ê-li-sa-bét Bồ-đào-nha',
            date: newDate(year, 7, 4),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Augustinô Triệu Vinh, linh mục và các bạn, tử đạo',
            date: newDate(year, 7, 9),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Biển-đức, viện phụ',
            date: newDate(year, 7, 11),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Ca-mi-lô Len-li, linh mục',
            date: newDate(year, 7, 14),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Bô-na-ven-tu-ra, giám mục, tiến sĩ Hội Thánh',
            date: newDate(year, 7, 15),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Đức Mẹ núi Cat-minh',
            date: newDate(year, 7, 16),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Lô-ren-xô Bơ-rin-đi-xi, linh mục, tiến sĩ Hội Thánh',
            date: newDate(year, 7, 21),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Ma-ri-a Ma-đa-lê-na',
            date: newDate(year, 7, 22),
            type: LE_KINH,
            fixed: true
        },
        {
            name: 'Thánh Bi-ghit-ta, nữ tu',
            date: newDate(year, 7, 23),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Sa-ben Mac-lup, linh mục',
            date: newDate(year, 7, 24),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Gia-cô-bê, tông đồ',
            date: newDate(year, 7, 25),
            type: LE_KINH,
            fixed: true
        },
        {
            name: 'Thánh Gio-a-kim và thánh An-na, song thân Đức Maria',
            fixed: true,
            date: newDate(year, 7, 26),
            type: LE_NHO
        },
        {
            name: 'Thánh nữ Mác-ta, thánh nữ Ma-ri-a và thánh La-xa-rơ',
            date: newDate(year, 7, 29),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Phê-rô Kim Ngôn, giám mục, tiến sĩ Hội Thánh',
            date: newDate(year, 7, 30),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh I-nha-xi-ô Lôi-ô-la, linh mục',
            date: newDate(year, 7, 31),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh An-phong Ma-ri-a Li-gô-ri, giám mục, tiến sĩ Hội Thánh',
            date: newDate(year, 8, 1),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Gio-an Ma-ri-a Vi-a-nê, linh mục',
            date: newDate(year, 8, 4),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Cung hiến thánh đường Đức Ma-ri-a',
            date: newDate(year, 8, 5),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Chúa Hiển Dung',
            date: newDate(year, 8, 6),
            type: LE_KINH,
            fixed: true
        },
        {
            name: 'Thánh Ga-ê-ta-nô, linh mục',
            date: newDate(year, 8, 7),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Xit-tô II, giáo hoàng và các bạn, tử đạo',
            date: newDate(year, 8, 7),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Đa-minh, linh mục',
            date: newDate(year, 8, 8),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Cờ-la-ra, trinh nữ',
            date: newDate(year, 8, 11),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Gio-an-na Phan-xi-ca Săng-tan, nữ tu',
            date: newDate(year, 8, 12),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Pôn-xi-a-nô, giáo hoàng, và thánh Hip-pô-li-tô, linh mục, tử đạo',
            date: newDate(year, 8, 13),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Mác-xi-mi-li-a-nô Kôn-bê, linh mục, tử đạo',
            date: newDate(year, 8, 14),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Đức Ma-ri-a Lên Trời',
            date: newDate(year, 8, 15),
            type: LE_TRONG,
            fixed: true
        },
        {
            name: 'Thánh Gio-an Ơ-đơ, linh mục',
            date: newDate(year, 8, 19),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Bê-na-đô, viện phụ, tiến sĩ Hội Thánh',
            date: newDate(year, 8, 20),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Piô X, giáo hoàng',
            date: newDate(year, 8, 21),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Đức Ma-ri-a Nữ vương',
            date: newDate(year, 8, 22),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Giu-se Ca-la-xan, linh mục',
            date: newDate(year, 8, 25),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Lu-y',
            date: newDate(year, 8, 25),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh nữ Mô-ni-ca',
            date: newDate(year, 8, 27),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh  u-tinh, giám mục, tiến sĩ Hội Thánh',
            date: newDate(year, 8, 28),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Gio-an Tẩy Giả bị trảm quyết',
            date: newDate(year, 8, 29),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Grê-gô-ri-ô Cả, giáo hoàng, tiến sĩ Hội Thánh',
            date: newDate(year, 9, 3),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Tê-rê-xa Cal-cut-ta, nữ tu',
            date: newDate(year, 9, 5),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Sinh nhật Đức trinh nữ Maria',
            date: newDate(year, 9, 8),
            type: LE_KINH,
            fixed: true
        },
        {
            name: 'Thánh Phê-rô Cơ-la-ve, linh mục',
            date: newDate(year, 9, 9),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Danh Rất Thánh trinh nữ Ma-ri-a',
            date: newDate(year, 9, 12),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Suy tôn Thánh giá',
            date: newDate(year, 9, 14),
            type: LE_KINH,
            fixed: true
        },
        {
            name: 'Đức Mẹ sầu bi',
            date: newDate(year, 9, 15),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Co-nê-li-ô, giáo hoàng và thánh Sip-ri-a-nô, giám mục, tử đạo',
            date: newDate(year, 9, 16),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Rô-be-tô Be-la-mi-nô, giám mục, tiến sĩ Hội Thánh',
            date: newDate(year, 9, 17),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh nữ Hildegarde thành Bingen, trinh nữ, tiến sĩ Hội Thánh',
            date: newDate(year, 9, 17),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Gia-nu-a-ri-ô, giám mục, tử đạo',
            date: newDate(year, 9, 19),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Mát-thêu, tông đồ, tác giả sách Tin Mừng',
            date: newDate(year, 9, 21),
            type: LE_KINH,
            fixed: true
        },
        {
            name: 'Thánh Pi-ô thành Pi-e-tren-ci-na, linh mục',
            date: newDate(year, 9, 23),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Cót-ma và thánh Đa-mi-a-nô, tử đạo',
            date: newDate(year, 9, 26),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Vinh-sơn Phao-lô, linh mục',
            date: newDate(year, 9, 27),
            fixed: true,
            type: LE_NHO,
        },
        {
            name: 'Các Tổng lãnh thiên thần Mi-ca-en, Gáp-ri-en và Ra-pha-en',
            date: newDate(year, 9, 29),
            type: LE_KINH,
            fixed: true
        },
        {
            name: 'Thánh Giê-rô-ni-mô, linh mục, tiến sĩ Hội Thánh',
            date: newDate(year, 9, 30),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Tê-rê-xa Hài Đồng Giê-su, trinh nữ, tiến sĩ Hội Thánh',
            date: newDate(year, 10, 1),
            type: LE_KINH,
            fixed: true
        },
        {
            name: 'Các thiên thần hộ thủ',
            date: newDate(year, 10, 2),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Phan-xi-cô Át-xi-di',
            date: newDate(year, 10, 4),
            type: LE_NHO,
            fixed: true,
        },
        {
            name: 'Thánh Bơ-ru-nô, linh mục',
            date: newDate(year, 10, 6),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Đức Mẹ Mân Côi',
            date: newDate(year, 10, 7),
            type: LE_NHO,
            fixed: true,
        },
        {
            name: 'Thánh Gio-an Lê-ô-nác-đi, linh mục',
            date: newDate(year, 10, 9),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Đi-ô-ni-xi-ô, giám mục và các bạn, tử đạo',
            date: newDate(year, 10, 9),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Ca-lít-tô I, giáo hoàng, tử đạo',
            date: newDate(year, 10, 14),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Tê-rê-xa Giê-su, trinh nữ, tiến sĩ Hội Thánh',
            date: newDate(year, 10, 15),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Hét-vích, nữ tu',
            date: newDate(year, 10, 16),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Ma-ga-ri-ta Ma-ri-a A-la-cốc, trinh nữ',
            date: newDate(year, 10, 16),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh I-nha-xi-ô thành An-ti-ô-khi-a, giám mục, tử đạo',
            date: newDate(year, 10, 17),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Lu-ca, tác giả Sách Tin Mừng',
            date: newDate(year, 10, 18),
            type: LE_KINH,
            fixed: true,
        },
        {
            name: 'Thánh Gio-an Phao-lô II, giáo hoàng',
            date: newDate(year, 10, 22),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Gio-an thành Ca-pét-ra-nô, linh mục',
            date: newDate(year, 10, 23),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh An-tôn Ma-ri-a Cơ-la-rét, giám mục',
            date: newDate(year, 10, 24),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Si-mon và thánh Giu-đa, tông đồ',
            date: newDate(year, 10, 28),
            type: LE_KINH,
            fixed: true
        },
        {
            name: 'Các Thánh Nam Nữ',
            date: newDate(year, 11, 1),
            type: LE_TRONG,
            fixed: true
        },
        {
            name: 'Cầu Cho Các Tín Hữu Đã Qua Đời',
            date: newDate(year, 11, 2),
            fixed: true
        },
        {
            name: 'Thánh Mác-ti-nô Po-rét, tu sĩ',
            date: newDate(year, 11, 3),
            fixed: true
        },
        {
            name: 'Thánh Ca-rô-lô Bô-rô-mê-ô, giám mục',
            date: newDate(year, 11, 4),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Cung hiến thánh đường La-tê-ra-nô',
            date: newDate(year, 11, 9),
            type: LE_KINH,
            fixed: true
        },
        {
            name: 'Thánh Lê-ô Cả, giáo hoàng, tiến sĩ Hội Thánh',
            date: newDate(year, 11, 10),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Mác-ti-nô thành Tua, giám mục',
            date: newDate(year, 11, 11),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Giô-sa-phát, giám mục, tử đạo',
            date: newDate(year, 11, 12),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh nữ Ê-li-sa-bet nước Hung-ga-ri',
            date: newDate(year, 11, 17),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Cung hiến thánh đường thánh Phê-rô và thánh đường thánh Phao-lô',
            date: newDate(year, 11, 18),
            fixed: true
        },
        {
            name: 'Đức Mẹ dâng mình trong đền thờ',
            date: newDate(year, 11, 21),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh An-rê Dũng Lạc và các bạn, tử đạo',
            date: newDate(year, 11, 24),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Ca-ta-ri-na A-lê-xan-ri-a, trinh nữ, tử đạo',
            date: newDate(year, 11, 25),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh An-rê, Tông đồ',
            date: newDate(year, 11, 30),
            type: LE_KINH,
            fixed: true
        },
        {
            name: 'Thánh Phan-xi-cô Xa-vi-e, linh mục',
            date: newDate(year, 12, 3),
            type: LE_KINH,
            fixed: true
        },
        {
            name: 'Thánh Gioan Đa-mát, linh mục, tiến sĩ Hội Thánh',
            date: newDate(year, 12, 4),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Gio-an Đi-ê-gô',
            date: newDate(year, 12, 9),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Đức trinh nữ Ma-ri-a Lô-rê-tô',
            date: newDate(year, 12, 10),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Đa-ma-xô I, giáo hoàng',
            date: newDate(year, 12, 11),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Đức trinh nữ Ma-ri-a Goa-đa-lu-pê',
            date: newDate(year, 12, 12),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Gio-an thành Kê-ty, linh mục',
            date: newDate(year, 12, 23),
            type: LE_NHO,
            fixed: true
        },
        {
            name: '24 tháng 12 Mùa Vọng',
            date: newDate(year, 12, 24),
            fixed: true
        },
        {
            name: 'Chúa Giáng Sinh',
            date: newDate(year, 12, 25),
            type: LE_TRONG,
            fixed: true
        },
        {
            name: 'Thánh Tê-pha-nô, tử đạo tiên khởi',
            date: newDate(year, 12, 26),
            type: LE_KINH,
            fixed: true
        },
        {
            name: 'Thánh Gio-an, Tông đồ, tác giả sách Tin mừng',
            date: newDate(year, 12, 27),
            type: LE_KINH,
            fixed: true
        },
        {
            name: 'Các thánh Anh Hài, tử đạo',
            date: newDate(year, 12, 28),
            type: LE_KINH,
            fixed: true
        },
        {
            name: 'Thánh Tô-ma Béc-két, giám mục, tử đạo',
            date: newDate(year, 12, 29),
            type: LE_NHO,
            fixed: true
        },
        {
            name: 'Thánh Xin-vet-tê I, giáo hoàng',
            date: newDate(year, 12, 31),
            type: LE_NHO,
            fixed: true
        }
    ];
};
