import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import BookingCard from "../../components/card/BookingCard";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const RantalDashboard = () => {
    const axios= useAxios();
    const {user} = useAuth();
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        const getBookings = async () => {
            const res = await axios.get(`/bookings?userId=${user?._id}`);
            // console.log(res.data); 
            setBookings(res.data?.bookings); 
        }
         if(user?._id) getBookings();
    },[])

    const deleteBooking = async (id) => {
        console.log(id);
        try {
            const res = await axios.delete(`/remove-booking/${id}?userId=${user?._id}`);
            if(res.data?.success){
                const filters = bookings?.filter(book => book?._id !== id )
                setBookings(filters)
                toast.success("Remove success")
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="">
            <div className="space-y-6">
                {
                    bookings?.map(booking => <BookingCard key={booking?._id} deleteBooking={deleteBooking} booking={booking} /> )
                }
            </div>
            {
                bookings?.length == 0 && <div className="px-5 py-4 font-medium bg-primary bg-opacity-10 text-primary rounded ">
                    <p>Your booking is empty <Link to={'/'} className="underline">Click</Link> </p>
                </div>
            }
        </div>
    );
};

export default RantalDashboard;