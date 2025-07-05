import React, { useState } from "react";
import { Menu, X, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../auth/AuthProvider";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut();
    navigate("/login"); // Optional: redirect immediately
  };

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-60 bg-gray-700 text-white shadow-lg z-40 transform transition-transform duration-300 rounded-br-2xl rounded-tr-2xl ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static`}
      >
        <div className="p-6 font-bold md:text-lg text-sm  border-b pt-5">
          🌟 Quản lý đảng viên
        </div>
        <ul className="p-4 space-y-4 md:space-y-8">
          <li>
            <Link
              to="/admin"
              className="hover:bg-gray-100 hover:text-blue-800 p-2 rounded cursor-pointer pr-20"
            >
              🏠 Trang chủ
            </Link>
          </li>
          <li>
            <Link
              to="dangvien"
              className="hover:bg-gray-100 hover:text-blue-800 p-2 rounded cursor-pointer pr-20"
            >
              🏠 Đảng viên
            </Link>
          </li>
          <li>
            <Link
              to="chibo"
              className="hover:bg-gray-100 hover:text-blue-800 p-2 rounded cursor-pointer pr-20"
            >
              ⚙️ Chi bộ
            </Link>
          </li>
          <li>
            <Link
              to="lichtrinh"
              className="hover:bg-gray-100 hover:text-blue-800 p-2 rounded cursor-pointer pr-20"
            >
              📦 Lịch trình
            </Link>
          </li>
          <li>
            <Link
              to="giaithuong"
              className="hover:bg-gray-100 hover:text-blue-800 p-2 rounded cursor-pointer pr-20"
            >
              🏆 Khen thưởng
            </Link>
          </li>
          <li>
            <Link
              to="danhgia"
              className="hover:bg-gray-100 hover:text-blue-800 p-2 rounded cursor-pointer pr-20"
            >
              📊 Đánh giá
            </Link>
          </li>
        </ul>
        <div className="p-4 space-y-4 absolute bottom-0 w-full border-t">
          <button
            onClick={handleLogout}
            className="flex items-center hover:bg-red-600 p-2 rounded-lg w-full text-left"
          >
            <LogOut className="mr-2" /> Đăng xuất
          </button>
        </div>
      </div>

      {/* Nút toggle sidebar */}
      <button
        className="absolute right-4 top-4 z-50 md:hidden text-black"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>
  );
};

export default Sidebar;
