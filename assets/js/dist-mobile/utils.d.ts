export declare function cloneDate(d: Date): Date;
export declare function printDate(d: Date): string;
export declare function newDate(year: number, month: number, day: number): Date;
export declare function addDate(currentDate: Date, numOfDate: number): Date;
export declare function getChristmasDay(year: number): Date;
export declare function timNgayTrongTuanSauNgay(d: Date, dayOfWeek: number): Date | null | undefined;
export declare const timChuaNhatGanNhatTuNgay: (d: Date) => Date | false;
/**
 * @param date
 * @returns
 */
export declare const buildKeyInNumberFromDate: (date: Date) => number;
export declare const tenChuaNhatThuongNienThu: (n: number) => string;
