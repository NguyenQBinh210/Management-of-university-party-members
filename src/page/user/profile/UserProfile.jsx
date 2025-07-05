import React, { useEffect, useState } from "react";
import UserProfileInfo from "../../../components/user/UserProfileInfo";
import UserGiaiThuong from "../../../components/user/UserGiaiThuong";
import UserChiBo from "../../../components/user/UserChiBo";
import UserLichTrinh from "../../../components/user/UserLichTrinh";
import {
  getUserProfile,
  getUserGiaiThuong,
  getUserChiBo,
  getLichTrinhByChiBo,
} from "../../../controller/UserProfileControl";

const UserProfile = ({ ma_dang_vien }) => {
  const [profile, setProfile] = useState(null);
  const [giaiThuongList, setGiaiThuongList] = useState([]);
  const [chiBo, setChiBo] = useState(null);
  const [lichTrinhList, setLichTrinhList] = useState([]);

  useEffect(() => {
    if (!ma_dang_vien) return;
    const fetchData = async () => {
      const { data: profileData } = await getUserProfile(ma_dang_vien);
      setProfile(profileData);
      const { data: giaiThuongData } = await getUserGiaiThuong(ma_dang_vien);
      setGiaiThuongList(giaiThuongData || []);
      const { data: chiBoData } = await getUserChiBo(ma_dang_vien);
      setChiBo(chiBoData);
      if (chiBoData && chiBoData.ma_chi_bo) {
        const { data: lichTrinhData } = await getLichTrinhByChiBo(chiBoData.ma_chi_bo);
        setLichTrinhList(lichTrinhData || []);
      }
    };
    fetchData();
  }, [ma_dang_vien]);

  if (!ma_dang_vien) return <div>Không xác định được tài khoản.</div>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Hồ sơ cá nhân</h1>
      <UserProfileInfo profile={profile} />
      <UserGiaiThuong giaiThuongList={giaiThuongList} />
      <UserChiBo chiBo={chiBo} />
      <UserLichTrinh lichTrinhList={lichTrinhList} />
    </div>
  );
};

export default UserProfile; 