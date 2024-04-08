import { Outlet } from "react-router-dom";
import Footer from "../Conponent/Footer/Footer";
import Navbar from "../Conponent/Navbar/Navbar";
const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
