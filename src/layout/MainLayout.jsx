import { Outlet } from "react-router-dom";
import Navber from "../pages/shared/navbar/Navber";
import Footer from "../pages/shared/footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navber />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;