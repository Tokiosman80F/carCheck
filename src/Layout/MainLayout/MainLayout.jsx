import { Outlet } from "react-router-dom";
import Header from "../../pages/Shared/Header/Header";
import Footer from "../../pages/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Header></Header>
      <div>
      <Outlet ></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;