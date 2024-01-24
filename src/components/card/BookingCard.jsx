import { FaMapMarkerAlt } from "react-icons/fa";
import { FaBath, FaChildDress, FaSquareCheck, FaUsers } from "react-icons/fa6";
import { IoBedOutline, IoCarSportOutline } from "react-icons/io5";
import { BsCalendar2Date } from "react-icons/bs";
import { LuTriangleRight } from "react-icons/lu";
import { CiMoneyBill } from "react-icons/ci";


const BookingCard = ({booking,deleteBooking}) => {
    // console.log(booking);
    const {houseImage,houseName,extraFeatures,houseCity,familyMember,price,children,_id, houseAddress,bedrooms,bathrooms,roomSize,garages,endMonth} = booking || {};

    return (
        <div className="border overflow-hidden bg-white border-gray-200 rounded shadow">
            <div className="grid lg:grid-cols-5 gap-4">
                <div className="lg:col-span-5 xl:col-span-2 flex items-center justify-center">
                    <img src={houseImage} alt="" />
                </div>
                <div className="lg:col-span-3 xl:col-span-2 py-4 px-4 xl:px-0">
                    <p className="text-xl font-medium mb-1">{houseName}</p>
                    <p className="text-sm text-gray-600 flex gap-2 items-center mb-4"> <FaMapMarkerAlt /> {houseAddress}, {houseCity} </p>
                    <div className='grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-y-4'>
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
                    <div className='grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-3 mt-4 gap-y-4'>
                        <div className='flex gap-2 items-center text-sm text-gray-600'>
                            <span><FaUsers /></span> {familyMember} Bedrooms
                        </div>
                        <div className='flex gap-2 items-center text-sm text-gray-600'>
                            <span><FaChildDress /></span> {children} Bedrooms
                        </div>
                       
                       
                    </div>
                </div>
                <div>
                    <div className=" space-y-3 mt-4 pb-4 pl-4 lg:pl-0">
                        {
                            extraFeatures?.map((item , index)=> {
                                return <div key={index} className="relative cursor-pointer flex flex-wrap items-center gap-3">
                                    <FaSquareCheck className="text-primary" size={22} /><span>{item}</span>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
            <hr />
            <div className="flex justify-between py-2 px-3">
                <div className="flex gap-4 items-center w-full">
                    <span className="  flex gap-2 items-center"> <span className="font-bold text-gray-600 flex items-center gap-2"> <CiMoneyBill /> Price:</span> {price}/month</span>
                    <span className="  flex gap-2 items-center"> <span className="font-bold text-gray-600 flex items-center gap-2"><BsCalendar2Date /> Last Date:</span> {endMonth}</span>
                </div>
                <div>
                    <button onClick={() => deleteBooking(_id)} className="px-2 text-sm py-1 bg-primary rounded shadow     shadow-primary text-white">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;