import React from "react";

const UserProfileInfo = ({ profile }) => {
  if (!profile) return <div>Không có thông tin cá nhân.</div>;
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <h2 className="text-lg font-bold mb-2">Thông tin cá nhân</h2>
      <div><b>Mã đảng viên:</b> {profile.ma_dang_vien}</div>
      <div><b>Họ tên:</b> {profile.ho_ten}</div>
      <div><b>Giới tính:</b> {profile.gioi_tinh}</div>
      <div><b>Ngày sinh:</b> {profile.ngay_sinh}</div>
      <div><b>SĐT:</b> {profile.sdt}</div>
      <div><b>Email:</b> {profile.email}</div>
      <div><b>Địa chỉ:</b> {profile.dia_chi}</div>
      <div><b>Ngày vào Đảng:</b> {profile.ngay_vao_dang}</div>
      <div><b>Trạng thái:</b> {profile.trang_thai}</div>
    </div>
  );
};

export default UserProfileInfo; 