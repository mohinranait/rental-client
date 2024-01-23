/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import { CiHeart, CiShare2 } from "react-icons/ci";
import { MdCompareArrows } from "react-icons/md";
import { IoBedOutline, IoCarSportOutline } from "react-icons/io5";
import { FaBath, FaMapMarkerAlt } from "react-icons/fa";
import { LuTriangleRight } from "react-icons/lu";

const HouseCard = ({house}) => {
    const {images, name,price,city, address,bathrooms,bedrooms, roomSize,garages, _id  } = house || {};
    return (
        <div className='bg-white rounded grid md:grid-cols-2 overflow-hidden'>
            <div className='border-gray-100 border-r'>
                <img src={`${import.meta.env.VITE_IMAGE_ACCESS}/images/${images[0]}`} className='h-full object-contain mx-auto' alt="" />
            </div>
            <div className='flex flex-col p-4'>
                <div className=''>
                    <Link to={`/house/${_id}`} className='text-lg font-medium text-gray-800 hover:text-primary'>{name}</Link>
                    <div className='mb-4'><p className='text-sm font-normal text-gray-600 mt-1 flex items-center gap-2'><FaMapMarkerAlt />  {address}, {city}</p></div>
                    <div className='grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-y-4'>
                        <div className='flex gap-2 items-center text-sm text-gray-600'>
                            <span><IoBedOutline /></span> {bedrooms} Bedrooms
                        </div>
                        <div className='flex gap-2 items-center text-sm text-gray-600'>
                            <span><FaBath /></span> {bathrooms} Bathroms
                        </div>
                        <div className='flex gap-2 items-center text-sm text-gray-600'>
                            <span><LuTriangleRight /></span> {roomSize} sq ft
                        </div>
                        <div className='flex gap-2 items-center text-sm text-gray-600'>
                            <span><IoCarSportOutline /></span> {garages} Garages
                        </div>
                       
                    </div>
                </div>
                <div className='flex-grow mb-4'></div>
                <hr />
                <div className='px-4 py-4 flex justify-between items-center'>
                    <span className='text-lg font-bold text-gray-700'>$ {price}</span>
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