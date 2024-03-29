import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import {  NavLink, Outlet } from 'react-router-dom';
import "./OwnerLayout.css"
import MobileHeader from '../shared/MobileHeader';
import { LuMenu } from 'react-icons/lu';
const OwnerLayout = () => {
    const {user,logOut} = useAuth();
    const [isToggle, setIsToggle] = useState(false)
    return (
        <div>
            <MobileHeader isToggle={isToggle} setIsToggle={setIsToggle} />
            <div className='grid md:grid-cols-12 gap-5 mx-5 mt-5'>
                <div className='col-span-2 hidden md:block bg-white '>
                    <ul className='ownerMenu bg-white rounded space-y-1 p-5 min-h-[calc(100vh-40px)] shadow'>
                        <li><NavLink to={'/owner/dashboard'} className='py-2 w-full inline-block hover:bg-primary hover:text-white rounded-md pl-2'>Dashboar</NavLink></li>
                        <li><NavLink to={'/owner/bookings'} className='py-2 w-full inline-block hover:bg-primary hover:text-white rounded-md pl-2'>Bookings</NavLink></li>
                        <li><NavLink to={'/owner/new-houses'} className='py-2 w-full inline-block hover:bg-primary hover:text-white rounded-md pl-2'>New House</NavLink></li>
                        <li><NavLink to={'/owner/houses'} className='py-2 w-full inline-block hover:bg-primary hover:text-white rounded-md pl-2'>Houses Lists</NavLink></li>
                    </ul>
                </div>
                <div className='col-span-10 '>
                    <div className='flex mb-5 w-full justify-between py-3 bg-white rounded shadow items-center px-4'>
                        <span className='font-semibold flex items-center gap-2'>
                            <div onClick={() => setIsToggle(!isToggle)} className="md:hidden cursor-pointer">
                                <LuMenu  size={20} />
                            </div>
                            Dashboard
                        </span>
                        {
                            user?._id && <div onClick={() => setIsToggle(!isToggle)} className="flex items-center gap-3 cursor-pointer relative">
                                
                                <span className="text-gray-700 ">{user?.name}</span>
                                <span className="w-10 h-10 rounded-full inline-block">
                                    <img className="w-10 h-10 rounded-full ring-4 ring-slate-400 ring-opacity-15" src={ user?.avater ? user?.avater : "https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"} alt="" />
                                </span>
                                {
                                    isToggle &&   <ul className="absolute top-full right-0 w-[200px] bg-white rounded border border-gray-100  py-2">
                                        <li><a href="#" className="px-3 py-2 hover:bg-gray-100 inline-block w-full">Dashboard</a></li>
                                        <li><button onClick={() => logOut()} className="px-3 py-2 text-left hover:bg-gray-100 inline-block w-full">Logout</button></li>
                                    </ul>
                                }
                              
                            </div>
                        }
                    </div>
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OwnerLayout;