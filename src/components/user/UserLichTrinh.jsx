import React from "react";

const UserLichTrinh = ({ lichTrinhList }) => {
  if (!lichTrinhList || lichTrinhList.length === 0) return <div>Không có lịch trình chi bộ.</div>;
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <h2 className="text-lg font-bold mb-2">Lịch trình chi bộ</h2>
      <ul className="list-disc pl-5">
        {lichTrinhList.map((lt) => (
          <li key={lt.lich_trinh_id}>
            <b>{lt.tieu_de}</b> ({lt.thoi_gian}) - {lt.dia_diem}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserLichTrinh; 