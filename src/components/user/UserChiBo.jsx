import React from "react";

const UserChiBo = ({ chiBo }) => {
  if (!chiBo) return <div>Không có thông tin chi bộ.</div>;
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <h2 className="text-lg font-bold mb-2">Chi bộ</h2>
      <div><b>Mã chi bộ:</b> {chiBo.ma_chi_bo}</div>
      <div><b>Tên chi bộ:</b> {chiBo.ten_chi_bo}</div>
      <div><b>Ghi chú:</b> {chiBo.ghi_chu}</div>
    </div>
  );
};

export default UserChiBo; 