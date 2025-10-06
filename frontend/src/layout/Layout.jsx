import React from "react";
import Header from "../components/common/headedr/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/common/footer/Footer";
const Layout = () => {
  return (
    <div>
      <div>
        <div>
          <Header />
        </div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
