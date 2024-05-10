import { Outlet } from "react-router-dom";
import Header from "../pages/Header";
import Footer from "./Footer";

const Applayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Applayout;
