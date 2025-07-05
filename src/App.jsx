import { BrowserRouter, Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./page/layout";
import Page404 from "./page/notfound/Page404";
import AdminPage from "./page/admin";
import DangVien from "./page/admin/dangvien/DangVien";
import HomeAdmin from "./page/admin/HomeAdmin";
import ChiBo from "./page/admin/chibo/ChiBo";
import LichTrinh from "./page/admin/lichtrinh/LichTrinh";
import GiaiThuong from "./page/admin/giaithuong/GiaiThuong";
import DanhGia from "./page/admin/danhgia/DanhGia";
import AboutPage from "./page/user/about";
import HomePage from "./page/user/home";
import Login from "./page/login/Login";
import { AuthProvider } from "./auth/AuthProvider";
import { ProtectedRoute } from "./auth/ProtectedRoute";
import { PublicRoute } from "./auth/PublicRoute";
import HoSoPage from "./page/user/hoso";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="hoso" element={<HoSoPage />} />
            </Route>
          </Route>

          <Route element={<ProtectedRoute requiredRole="admin" />}>
            <Route path="/admin" element={<AdminPage />}>
              <Route index element={<HomeAdmin />} />
              <Route path="dangvien" element={<DangVien />} />
              <Route path="chibo" element={<ChiBo />} />
              <Route path="lichtrinh" element={<LichTrinh />} />
              <Route path="giaithuong" element={<GiaiThuong />} />
              <Route path="danhgia" element={<DanhGia />} />
            </Route>
          </Route>

          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
          </Route>

          <Route path="*" element={<Page404 />} />
        </Routes>
      </AuthProvider>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
