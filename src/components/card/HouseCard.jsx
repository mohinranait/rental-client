
import { Link } from 'react-router-dom';
import { CiHeart, CiShare2 } from "react-icons/ci";
import { MdCompareArrows } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { FaBath, FaMapMarkerAlt } from "react-icons/fa";

const HouseCard = () => {
    return (
        <div className='bg-white rounded grid md:grid-cols-2 overflow-hidden'>
            <div>
                <img src="https://code-theme.com/html/findhouses/images/blog/b-11.jpg" alt="" />
            </div>
            <div className='flex flex-col '>
                <div className='p-4'>
                    <Link className='text-lg font-medium text-gray-800 hover:text-primary'>Real Luxury Family House Villa</Link>
                    <div className='mb-4'><p className='text-sm font-normal text-gray-600 mt-1 flex items-center gap-2'><FaMapMarkerAlt />  Kuakata, Barishal</p></div>
                    <div className='grid grid-cols-2 gap-y-4'>
                        <div className='flex gap-2 items-center text-sm text-gray-600'>
                            <span><IoBedOutline /></span> Bedroom
                        </div>
                        <div className='flex gap-2 items-center text-sm text-gray-600'>
                            <span><FaBath /></span> Bedroom
                        </div>
                        <div className='flex gap-2 items-center text-sm text-gray-600'>
                            <span><IoBedOutline /></span> Bedroom
                        </div>
                        <div className='flex gap-2 items-center text-sm text-gray-600'>
                            <span><FaBath /></span> Bedroom
                        </div>
                    </div>
                </div>
                <div className='flex-grow'></div>
                <hr />
                <div className='px-4 py-4 flex justify-between items-center'>
                    <span className='text-lg font-bold text-gray-700'>$150</span>
                    <div className='flex items-center gap-3'>
                        <span className='text-gray-500 cursor-pointer'><MdCompareArrows size={23} /></span>
                        <span className='text-gray-500 cursor-pointer'><CiShare2 size={23} /></span>
                        <span className='text-gray-500 cursor-pointer'><CiHeart size={23} /></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HouseCard;