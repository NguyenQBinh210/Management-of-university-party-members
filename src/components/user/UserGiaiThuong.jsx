import React from "react";

const UserGiaiThuong = ({ giaiThuongList }) => {
  if (!giaiThuongList || giaiThuongList.length === 0) return <div>Không có danh hiệu/giải thưởng.</div>;
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <h2 className="text-lg font-bold mb-2">Danh hiệu / Giải thưởng</h2>
      <ul className="list-disc pl-5">
        {giaiThuongList.map((gt) => (
          <li key={gt.giai_thuong_id}>
            <b>{gt.noi_dung}</b> ({gt.ngay_khen_thuong}) - <i>{gt.cap_ky}</i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserGiaiThuong; 