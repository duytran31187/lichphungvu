type NamPhungVu = {
    year: number;
    yearABC: string;
    oddEven: string;
    theEpiphanyOfTheLord: Date;
    chuaNhatThu2ThuongNien: Date;
    chuaNhatThu3ThuongNien: Date;
    chuaNhatThu4ThuongNien: Date;
    chuaNhatThu5ThuongNien: Date;
    chuaNhatThu6ThuongNien: Date;
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
    firstSundayOfAdvent: Date;
    secondSundayOfAdvent: Date;
    thirdSundayOfAdvent: Date;
    fourthSundayOfAdvent: Date;
    christmas: Date;
    leThanhGia: Date;
};

declare const nameOfDays: {
    year: string;
    yearABC: string;
    oddEven: string;
    theEpiphanyOfTheLord: string;
    chuaNhatThu1ThuongNien: string;
    chuaNhatThu2ThuongNien: string;
    chuaNhatThu3ThuongNien: string;
    chuaNhatThu4ThuongNien: string;
    chuaNhatThu5ThuongNien: string;
    chuaNhatThu6ThuongNien: string;
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
};
declare function tinhNamPhungVu(y: number): NamPhungVu;

export { nameOfDays, tinhNamPhungVu };
