
import Container from "../layout/Container";
import Logo from "../components/logo/Logo";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";



const Header = () => {
    const {user, logOut} = useAuth();
    const [isToggle, setIsToggle] = useState(false);
    const location = useLocation();
    console.log(location?.pathname);
    return (
        <header className={`fixed w-full z-50 bg-white  ${location?.pathname =='/'? 'bg-opacity-10':'bg-white' } `}>
            <Container>
                <div className="flex items-center justify-between py-6">
                    <div className="flex items-center gap-8">
                        <Logo />
                        <ul className="flex gap-5 items-center ">
                            <li><a href="#" className={`font-medium ${location?.pathname =='/'? 'text-white':'text-gray-800' }`}>Home</a></li>
                            <li><a href="#" className={`font-medium ${location?.pathname =='/'? 'text-white':'text-gray-800' }`}>About</a></li>
                            <li><a href="#" className={`font-medium ${location?.pathname =='/'? 'text-white':'text-gray-800' }`}>Contact</a></li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-8">
                        {
                            user?._id && <div onClick={() => setIsToggle(!isToggle)} className="flex items-center gap-3 cursor-pointer relative">
                                <span className="w-10 h-10 rounded-full inline-block">
                                    <img className="w-10 h-10 rounded-full ring-4 ring-slate-100 ring-opacity-15" src="https://code-theme.com/html/findhouses/images/testimonials/ts-1.jpg" alt="" />
                                </span>
                                <span className={` ${location?.pathname =='/'? 'text-white':'text-gray-800' }`}>{user?.name}</span>
                                {
                                    isToggle &&   <ul className="absolute top-full right-0 w-[200px] bg-white rounded border border-gray-100  py-2">
                                        <li><Link to={`/owner/dashboard`} className="px-3 py-2 hover:bg-gray-100 inline-block w-full">Dashboard</Link></li>
                                        <li><button onClick={() => logOut()} className="px-3 py-2 text-left hover:bg-gray-100 inline-block w-full">Logout</button></li>
                                    </ul>
                                }
                            </div>
                        }
                        <button className="px-4 py-2 inline-block bg-primary rounded text-white font-medium">Add Listing</button>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;