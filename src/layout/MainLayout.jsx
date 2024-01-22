import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Header from "../shared/Header";


const MainLayout = () => {
    return (
        <div className="relative">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;