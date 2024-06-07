import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import backImage from "../assets/pexels-pixabay-459277.jpg";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${backImage})` }}
    >
      <Header />
      <div className="min-h-screen border pt-20">
        <Outlet />
      </div>
      <div className="backdrop-blur-xl">
      <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
