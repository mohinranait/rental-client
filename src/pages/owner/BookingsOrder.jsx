import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import BookingRows from "../../components/rows/BookingRows";

const BookingsOrder = () => {
    const [bookings, setBookings]  = useState([])
    const {user} = useAuth();
    const axios = useAxios();
    useEffect(() => {
        const getBookings = async () => {
            const res = await axios.get(`/owner-booking?userId=${user?._id}`);
            setBookings(res.data?.bookings);
            console.log(res.data?.bookings);
        }
        getBookings();
    },[user?._id])
    return (
        <div className="bg-white px-5 py-5 rounded">
            <div>
                <table className="w-full  border-collapse">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>User</td>
                            <td>House</td>
                            <td>Address</td>
                            <td>Members</td>
                            <td>Attast</td>
                            {/* <td className="w-[100px]">Action</td> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking,index) => <BookingRows key={booking?._id} index={index} booking={booking} /> )
                        }
                    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookingsOrder;