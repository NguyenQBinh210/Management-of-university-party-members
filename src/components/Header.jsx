import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../auth/AuthProvider";

const Header = () => {
  const [show, setshow] = useState(false);
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut();
    navigate("/login");
  };

  return (
    <div className=" bg-red-400 mb-5 text-white">
      <nav className="2xl:container 2xl:mx-auto sm:py-3 sm:px-7 py-1 px-4">
        <div className="flex justify-between ">
          <div className=" flex space-x-3 items-center">
            <div className="w-10 h-10 flex justify-center items-center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/save-image-15416.appspot.com/o/landingpage%2Flogo.png?alt=media&token=519deffe-9eb3-44a9-b93f-fc304e8ab414"
                alt=""
              />
            </div>
            <h1 className=" font-normal text-2xl leading-6 text-orange-800 ">
              UTT
            </h1>
          </div>
          <div className="hidden sm:flex flex-row items-center space-x-10 text-lg font-semibold">
            <Link to={"/"} className="hover:bg-white hover:text-blue-600 rounded-2xl p-2">
              Trang chủ
            </Link>
            <Link to={"/about"} className="hover:bg-white hover:text-blue-600 rounded-2xl p-2">
              Thông tin
            </Link>
            <Link to={"/hoso"} className="hover:bg-white hover:text-blue-600 rounded-2xl p-2">
              Hồ sơ
            </Link>
            <Link to={"/"} className="hover:bg-white hover:text-blue-600 rounded-2xl p-2">
              Hỏi đáp
            </Link>
          </div>
          <div className="hidden sm:flex">
            <button
              onClick={handleLogout}
              className="rounded-md flex space-x-2 w-28 h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 hover:bg-indigo-600 duration-150 justify-center items-center"
            >
              Đăng xuất
            </button>
          </div>
          {/* Burger Icon */}
          <div
            id="bgIcon"
            onClick={() => setshow(!show)}
            className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  justify-center items-center sm:hidden cursor-pointer`}
          >
            <svg
              className={`${show ? "hidden" : ""}`}
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className=" transform duration-150"
                d="M4 6H20"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12H20"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className=" transform duration-150"
                d="M4 18H20"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className={`${show ? "block" : "hidden"}`}
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div
          className={`${show ? "block" : "hidden"} sm:hidden mt-4 mx-auto`}
        >
          <div className="flex flex-row items-center justify-center space-x-6">
            <Link to={"/"}>Trang chủ</Link>
            <Link to={"/about"}>Thông tin</Link>
            <Link to={"/"}>Hồ sơ</Link>
            <Link to={"/"}>Hỏi đáp</Link>
          </div>
          <div className="flex flex-col gap-4 mt-4 w-80 mx-auto ">
            <button
              onClick={handleLogout}
              className="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 hover:bg-indigo-600 duration-150 justify-center items-center"
            >
              Đăng xuất
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
