import { Outlet } from "react-router";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen flex justify-center">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
