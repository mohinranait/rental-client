import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import MobileHeader from "../shared/MobileHeader";
import { useState } from "react";


const MainLayout = () => {
    const [isToggle, setIsToggle] = useState(false);
    return (
        <div className="relative">
            <Header isToggle={isToggle} setIsToggle={setIsToggle}/>
            <Outlet />
            <Footer />
            <MobileHeader isToggle={isToggle} setIsToggle={setIsToggle} />
        </div>
    );
};

export default MainLayout;