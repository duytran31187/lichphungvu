type NamPhungVu = {
    year: number;
    yearABC: string;
    oddEven: string;
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
    theEpiphanyOfTheLord: Date;
};

declare function tinhNamPhungVu(y: number): NamPhungVu;

export { tinhNamPhungVu };
