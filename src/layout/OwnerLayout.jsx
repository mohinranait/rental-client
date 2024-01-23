import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { Link, Outlet } from 'react-router-dom';

const OwnerLayout = () => {
    const {user,logOut} = useAuth();
    const [isToggle, setIsToggle] = useState(false)
    return (
        <div>
            <div className='grid grid-cols-12 gap-5 mx-5 mt-5'>
                <div className='col-span-2 bg-white '>
                    <ul className='bg-white rounded p-5 min-h-[calc(100vh-40px)] shadow'>
                        <li><Link to={'/owner/dashboard'} className='py-2 w-full inline-block bg-primary text-white rounded-md pl-2'>Dashboar</Link></li>
                        <li><Link to={'/owner/new-houses'} className='py-2 w-full inline-block hover:bg-primary hover:text-white rounded-md pl-2'>New House</Link></li>
                        <li><Link to={'/owner/houses'} className='py-2 w-full inline-block hover:bg-primary hover:text-white rounded-md pl-2'>Houses</Link></li>
                    </ul>
                </div>
                <div className='col-span-10 '>
                    <div className='flex mb-5 w-full justify-between py-3 bg-white rounded shadow items-center px-4'>
                        <span className='font-semibold'>Dashboard</span>
                        {
                            user?._id && <div onClick={() => setIsToggle(!isToggle)} className="flex items-center gap-3 cursor-pointer relative">
                                
                                <span className="text-gray-700 ">{user?.name}</span>
                                <span className="w-10 h-10 rounded-full inline-block">
                                    <img className="w-10 h-10 rounded-full ring-4 ring-slate-400 ring-opacity-15" src="https://code-theme.com/html/findhouses/images/testimonials/ts-1.jpg" alt="" />
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