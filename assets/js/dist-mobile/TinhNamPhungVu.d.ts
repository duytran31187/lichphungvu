import { NamPhungVu, SingleDateData } from "./commonData";
export declare class TinhNamPhungVu {
    private year;
    private pLePhucSinh;
    private pThuTuLeTro;
    private pNgayLeChuaHienLinh;
    private pLeThanhGia;
    private p4TuanMuaVong;
    private namPhungVu;
    private fullYear;
    private firstSundayOfYear;
    private printed;
    constructor(year: number);
    private getFullYearKeyFromDate;
    private addNgayLeVoDanhSach;
    private tinhNgayPhucSinh;
    private tinhThuTuLeTro;
    private get ngayLePhucSinh();
    private get ngayLeTro();
    private get ngayLeChuaHienLinh();
    private get ngayLeThanhGia();
    private get bonTuanMuaVong();
    private tinhLichPhungVu;
    getNamPhungVu(): NamPhungVu | undefined;
    private populateCalculatedDaysToCalender;
    private setSameTimeOfDate;
    private populateCacNgayLeCoDinh;
    private nameChuaNhaMuaThuongNienThu;
    /**
     * goi sau khi da populate het cac ngay le co dinh, theo cong thu
     */
    private tinhchuaNhatMuaThuongNien;
    private populateTuanBatNhat;
    private populateTuanThanh;
    getFullLichPhungVuTheoNam(): SingleDateData[];
    getLichPhungVuTheoThang(month: number): SingleDateData[];
}
