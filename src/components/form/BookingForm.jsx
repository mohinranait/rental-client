/* eslint-disable react/prop-types */

import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import ButtonPrimary from '../buttons/ButtonPrimary';
import Input from '../input/Input';
import {  useLocation, useNavigate } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import { CgSpinnerTwo } from 'react-icons/cg';
import toast from 'react-hot-toast';

const BookingForm = ({house}) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')
    const {user} = useAuth();
    const axios = useAxios();
    const [booking, setBooking] = useState({
        user: user?._id,
        name: user?.name,
        email: user?.email,
        phone: '',
        familyMember: '',
        children: '',
        message: '',
        
        startMonth: '',
        endMonth: '',
        houseId: house?._id,
        price: house?.price || '',
        houseName: house?.name || '',
        houseAddress: house?.address || '',
        houseCity: house?.city || '',
        houseImage: house?.images[0],
        bedrooms:house?.bedrooms,
        bathrooms:house?.bathrooms,
        roomSize:house?.roomSize,
        garages:house?.garages,
        extraFeatures: house?.extraFeatures
    })
    const location = useLocation();
    const navigate = useNavigate();


    const handleAppoinment = async e => {
        e.preventDefault();
      

        if(!user?._id){
            const path = location?.pathname;
            localStorage.setItem('path', JSON.stringify(path));
            navigate('/login')
           
        }

        const {phone,children, familyMember} = booking;
        if(phone?.length == 0 || children?.length ==0 || familyMember?.length == 0  ){
            setError("All fileds required");
            return;
        }


        try {
            setLoading(true)
            const res = await axios.post(`/booking?userId=${user?._id}`, booking);
            console.log(res?.data);
            if(res.data?.success){
                toast.success("Booking Successfull")
                setLoading(false)
                navigate('/user/dashboard')
            }
        } catch (error) {
            setError(error.message)
        }finally{
            setLoading(false)
        }

    }
    return (
        <>
            <form onSubmit={handleAppoinment} className="space-y-5">
                {
                    error && <div className='px-4 py-3 rounded shadow bg-primary font-medium bg-opacity-10 text-primary'>
                    {error}
                </div>
                }
                <div>
                    <Input 
                    type={'text'} 
                    readonlyVal={true} 
                    placeholder={"Full name"} 
                    value={user?.name || ''}
                    />
                </div>
                <div>
                    <Input type={'email'} value={user?.email || ''} readonlyVal={true} placeholder={"Email"} />
                </div>
                <div>
                    <Input 
                    type={'number'}  
                    placeholder={"Phone"} 
                    value={user?.phone || ''}
                    onChange={e => setBooking({...booking, phone: e.target.value})}
                    />
                </div>
                <div>
                    <Input 
                    type={'number'}  
                    placeholder={"Family member"} 
                    value={booking?.familyMember}
                    onChange={e => setBooking({...booking, familyMember: Number(e.target.value)})}
                    />
                </div>
                <div>
                    <Input 
                    type={'number'}  
                    placeholder={"Children"} 
                    value={booking?.children}
                    onChange={e => setBooking({...booking, children: Number(e.target.value)})}
                    />
                </div>
                <div>
                    <textarea 
                    name="" 
                    id="" 
                    cols="30" 
                    rows="3" 
                    placeholder="Message" 
                    className='py-2 w-full outline-none border px-3 rounded focus-visible:border-primary transition-all '
                    value={booking?.message}
                    onChange={e => setBooking({...booking, message: e.target.value})}
                    ></textarea>
                </div>
                <ButtonPrimary type={'submit'} options={'w-full py-3'}>
                    <span className="flex gap-2 items-center justify-center">  {loading ? <CgSpinnerTwo size={23} className="animate-spin" /> : 'Request Booking'}</span>
                </ButtonPrimary>
            </form>   
        </>
    );
};

export default BookingForm;