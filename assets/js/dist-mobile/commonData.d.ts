export type MuaphungSinh = {
    week1: Date;
    week2: Date;
    week3: Date;
    week4: Date;
};
export type simpleDate = {
    year: number;
    month: number;
    day: number;
};
export type NamPhungVu = {
    year: number;
    yearABC: string;
    oddEven: string;
    leDucMeChuaTroi?: Date;
    theEpiphanyOfTheLord: Date;
    leChuaChiuPhepRua: Date;
    ashWed: Date;
    firstSundayOfLent: Date;
    secondSundayOfLent: Date;
    thirdSundayOfLent: Date;
    fourthSundayOfLent: Date;
    fifthSundayOfLent: Date;
    palmSunday: Date;
    easterSunday: Date;
    secondSundayOfEaster: Date;
    thirdSundayOfEaster: Date;
    fourthSundayOfEaster: Date;
    fifthSundayOfEaster: Date;
    sixthSundayOfEaster: Date;
    theAscentionOfTheLord: Date;
    pentecostSunday: Date;
    leChuaBaNgoi: Date;
    leMinhMauThanhChua: Date;
    leThanhTamChuaGieSu: Date;
    chuaKitoVua: Date;
    firstSundayOfAdvent: Date;
    secondSundayOfAdvent: Date;
    thirdSundayOfAdvent: Date;
    fourthSundayOfAdvent: Date;
    leThanhGia: Date;
    firstOrdinarySundayAfterPentecostSunday: number;
};
export declare const nameOfDays: {
    year: string;
    yearABC: string;
    oddEven: string;
    theEpiphanyOfTheLord: string;
    leChuaChiuPhepRua: string;
    ashWed: string;
    firstSundayOfLent: string;
    secondSundayOfLent: string;
    thirdSundayOfLent: string;
    fourthSundayOfLent: string;
    fifthSundayOfLent: string;
    palmSunday: string;
    easterSunday: string;
    secondSundayOfEaster: string;
    thirdSundayOfEaster: string;
    fourthSundayOfEaster: string;
    fifthSundayOfEaster: string;
    sixthSundayOfEaster: string;
    theAscentionOfTheLord: string;
    pentecostSunday: string;
    firstSundayOfAdvent: string;
    secondSundayOfAdvent: string;
    thirdSundayOfAdvent: string;
    fourthSundayOfAdvent: string;
    christmas: string;
    leThanhGia: string;
    chuaKitoVua: string;
    firstOrdinarySundayAfterPentecostSunday: string;
    leDucMeChuaTroi: string;
    leChuaBaNgoi: string;
    leMinhMauThanhChua: string;
    leThanhTamChuaGieSu: string;
};
export type NgayLeData = {
    name: string;
    type?: string;
    fixed?: boolean;
    date?: Date;
};
export type SingleDateData = {
    date: Date;
    cacNgayLe: NgayLeData[];
};
export declare const LE_KINH = "L\u1EC5 K\u00EDnh";
export declare const LE_NHO = "L\u1EC5 Nh\u1EDB";
export declare const LE_TRONG = "L\u1EC5 Tr\u1ECDng";
export declare enum LOAI_NGAY_LE {
    LE_KINH = 0,
    LE_NHO = 1,
    LE_TRONG = 2
}
export declare const danhSachNgayLeCoDinh: (year: number) => NgayLeData[];
