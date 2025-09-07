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
import PageTransition from "./components/PageTransition";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Layout />}>
              <Route index element={<PageTransition><HomePage /></PageTransition>} />
              <Route path="about" element={<PageTransition><AboutPage /></PageTransition>} />
              <Route path="hoso" element={<PageTransition><HoSoPage /></PageTransition>} />
            </Route>
          </Route>

          <Route element={<ProtectedRoute requiredRole="admin" />}>
            <Route path="/admin" element={<AdminPage />}>
              <Route index element={<PageTransition><HomeAdmin /></PageTransition>} />
              <Route path="dangvien" element={<PageTransition><DangVien /></PageTransition>} />
              <Route path="chibo" element={<PageTransition><ChiBo /></PageTransition>} />
              <Route path="lichtrinh" element={<PageTransition><LichTrinh /></PageTransition>} />
              <Route path="giaithuong" element={<PageTransition><GiaiThuong /></PageTransition>} />
              <Route path="danhgia" element={<PageTransition><DanhGia /></PageTransition>} />
            </Route>
          </Route>

          <Route element={<PublicRoute />}>
            <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
          </Route>

          <Route path="*" element={<PageTransition><Page404 /></PageTransition>} />
        </Routes>
      </AuthProvider>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
