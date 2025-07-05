import UserProfile from "../profile/UserProfile";
import { useAuth } from "../../../auth/AuthProvider";

const HoSoPage = () => {
  const { user, role } = useAuth();
  if (!user || role === 'admin') return <div>Bạn không có quyền xem trang này.</div>;
  return (
    <div className="py-8">
      <UserProfile ma_dang_vien={user.username} />
    </div>
  );
};

export default HoSoPage; 