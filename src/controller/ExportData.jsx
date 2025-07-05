import { exportJsonToExcel } from "./ExportService";

export const exportDangVienListToExcel = (list) => {
  if (!list || list.length === 0) {
    return { success: false, message: "Không có dữ liệu để xuất!" };
  }

  const dataForExport = list.map(
    ({
      ma_dang_vien,
      ho_ten,
      gioi_tinh,
      ngay_sinh,
      sdt,
      email,
      dia_chi,
      ngay_vao_dang,
      trang_thai,
      ma_chi_bo,
    }) => ({
      "Mã Đảng Viên": ma_dang_vien,
      "Họ Tên": ho_ten,
      "Giới Tính": gioi_tinh,
      "Ngày Sinh": ngay_sinh,
      "Số Điện Thoại": sdt,
      Email: email,
      "Địa Chỉ": dia_chi,
      "Ngày Vào Đảng": ngay_vao_dang,
      "Trạng Thái": trang_thai,
      "Mã Chi Bộ": ma_chi_bo,
    })
  );

  exportJsonToExcel(dataForExport, "DanhSachDangVien", "DanhSachDangVien");

  return { success: true };
};
export const exportChiBoListToExcel = (list) => {
  if (list.length === 0) {
    return { success: false, message: "Không có dữ liệu để xuất!" };
  }
  const dataForExport = list.map(
    ({ ma_chi_bo, ten_chi_bo, bi_thu, dia_diem, ngay_thanh_lap }) => ({
      "Mã Chi Bộ": ma_chi_bo,
      "Tên Chi Bộ": ten_chi_bo,
      "Bí Thư": bi_thu,
      "Địa Điểm": dia_diem,
      "Ngày Thành Lập": ngay_thanh_lap,
    })
  );
  exportJsonToExcel(dataForExport, "DanhSachChiBo", "DanhSachChiBo");
  return { success: true };
};
export const exportLichTrinhListToExcel = (list) => {
  if (list.length == 0) {
    return { success: false, message: "Không có dữ liệu để xuất!" };
  }
  const dataForExport = list.map(
    ({
      lich_trinh_id,
      ma_chi_bo,
      tieu_de,
      noi_dung,
      thoi_gian,
      dia_diem,
    }) => ({
      "Mã Lịch Trình": lich_trinh_id,
      "Mã Chi Bộ": ma_chi_bo,
      "Tiêu Đề": tieu_de,
      "Nội dung": noi_dung,
      "Thời Gian ": thoi_gian,
      "Địa điểm": dia_diem,
    })
  );
  exportJsonToExcel(dataForExport, "DanhSachLichTrinh", "DanhSachLichTrinh");
  return { success: true };
};

export const exportGiaiThuongListToExcel = (list) => {
  if (!list || list.length === 0) {
    return { success: false, message: "Không có dữ liệu để xuất!" };
  }

  const dataForExport = list.map(
    ({
      giai_thuong_id,
      ngay_khen_thuong,
      noi_dung,
      cap_ky,
    }) => ({
      "Mã Giải Thưởng": giai_thuong_id,
      "Ngày Khen Thưởng": ngay_khen_thuong,
      "Nội Dung": noi_dung,
      "Cấp Ký": cap_ky,
    })
  );

  exportJsonToExcel(dataForExport, "DanhSachGiaiThuong", "DanhSachGiaiThuong");

  return { success: true };
};

export const exportDanhGiaListToExcel = (list) => {
  if (!list || list.length === 0) {
    return { success: false, message: "Không có dữ liệu để xuất!" };
  }

  const dataForExport = list.map(
    ({
      danh_gia_id,
      ma_dang_vien,
      dang_vien,
      ky_danh_gia,
      ngay_danh_gia,
      nguoi_danh_gia,
      xep_loai,
      nhan_xet,
      ghi_chu,
    }) => ({
      "Mã Đánh Giá": danh_gia_id,
      "Mã Đảng Viên": ma_dang_vien,
      "Tên Đảng Viên": dang_vien?.ho_ten || "",
      "Kỳ Đánh Giá": ky_danh_gia,
      "Ngày Đánh Giá": ngay_danh_gia,
      "Người Đánh Giá": nguoi_danh_gia,
      "Xếp Loại": xep_loai,
      "Nhận Xét": nhan_xet,
      "Ghi Chú": ghi_chu,
    })
  );

  exportJsonToExcel(dataForExport, "DanhSachDanhGia", "DanhSachDanhGia");

  return { success: true };
};
