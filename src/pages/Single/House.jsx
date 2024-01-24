
import { useLoaderData } from "react-router-dom";
import Container from "../../layout/Container";
import { FaSquareCheck } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import BookingForm from "../../components/form/BookingForm";
import RequestInquery from "../../components/form/RequestInquery";


const House = () => {
    const {house} = useLoaderData();

    


    return (
        <div className="pt-[120px] mb-20">
            <Container>
                <div className="md:grid grid-cols-5 gap-5 ">
                    <div className="col-span-3 space-y-5">
                        <div className="bg-white p-5 rounded shadow">

                            <div className="lg:flex justify-between mb-12">
                                <div className="mb-6">
                                    <p className="text-3xl font-medium text-gray-900 mb-3">{house?.name}</p>
                                    <p className="flex items-center gap-2"> <FaMapMarkerAlt /> {house?.address}, {house?.city} </p>
                               </div>
                                <div>
                                    <p className="text-3xl font-semibold lg:text-right text-primary mb-2">$ {house?.price}</p>
                                    <p className="flex items-center text-lg gap-2 lg:text-right">  $ {(house?.price / house?.roomSize).toFixed(2)} / sq ft </p>
                               </div>
                            </div>

                            <p className="text-xl font-bold text-gray-700 mb-4 ">Gallery</p>
                            <div>
                                <div>
                                    <img src={`${import.meta.env.VITE_IMAGE_ACCESS}/images/${house?.images[0]}`} className="mx-auto rounded" alt="" />
                                </div>
                                <div className="grid grid-cols-7 items-center justify-center gap-2 mt-3">
                                    {
                                        house?.images?.map((img,index) => {
                                            return <span key={index}  className="border border-gray-100 rounded overflow-hidden">
                                                <img src={`${import.meta.env.VITE_IMAGE_ACCESS}/images/${img}`} alt="" />
                                            </span>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-5 rounded shadow">
                            <p className="text-xl font-bold text-gray-600 mb-7">Property Details</p>
                            <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-6 mb-16">
                                <p className="text-sm flex items-center gap-2"><span className="font-semibold text-gray-700">Property ID:</span> <span>{house?.property?.propertyId}</span> </p>
                                <p className="text-sm flex items-center gap-2"><span className="font-semibold text-gray-700">Property Type:</span> <span>{house?.property?.propertyType}</span> </p>
                                <p className="text-sm flex items-center gap-2"><span className="font-semibold text-gray-700">Property Status:</span> <span>{house?.property?.propertyStatus}</span> </p>
                                <p className="text-sm flex items-center gap-2"><span className="font-semibold text-gray-700">Property Price:</span> <span>{house?.price}/month</span> </p>
                                <p className="text-sm flex items-center gap-2"><span className="font-semibold text-gray-700">Bedroome:</span> <span>{house?.bedrooms}</span> </p>
                                <p className="text-sm flex items-center gap-2"><span className="font-semibold text-gray-700">Bathroome:</span> <span>{house?.bathrooms}</span> </p>
                                <p className="text-sm flex items-center gap-2"><span className="font-semibold text-gray-700">Room size:</span> <span>{house?.roomSize} sq ft</span> </p>
                                <p className="text-sm flex items-center gap-2"><span className="font-semibold text-gray-700">Garage:</span> <span>{house?.garages}</span> </p>
                            </div>
                            <p className="text-xl font-bold text-gray-600 mb-5">Amenities</p>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 pb-4 ">
                               {
                                    house?.extraFeatures?.map((item , index)=> {
                                        return <div key={index} className="relative cursor-pointer flex flex-wrap items-center gap-3">
                                            <FaSquareCheck className="text-primary" size={22} /><span>{item}</span>
                                        </div>
                                    })
                               }
                            </div>

                        </div>
                        <div className="bg-white p-5 rounded shadow">
                            <p className="text-xl font-bold text-gray-600 mb-7">Description</p>
                            <p>{house?.description}</p>
                        </div>
                    </div>
                    <div className="col-span-2 mt-10 md:mt-0 space-y-5">
                        <div className="bg-white rounded p-5 shadow">
                            <div>
                                <p className="text-xl mb-4 font-semibold text-gray-800">Agent Inforamtion</p>
                            </div>
                            <hr />
                            <div className="py-5">
                              <BookingForm house={house} />
                            </div>
                        </div>
                        <div className="bg-white rounded p-5 shadow">
                            <div>
                                <p className="text-xl mb-4 font-semibold text-gray-800">Agent Inforamtion</p>
                            </div>
                            <hr />
                            <div className="pb-6">
                                <div className="flex gap-4 h-[150px] items-center">
                                    <div className="w-20 h-20 rounded-full">
                                        <img className="w-20 h-20 rounded-full" src="https://code-theme.com/html/findhouses/images/testimonials/ts-1.jpg" alt="" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-semibold text-gray-900">Mohin Rana </p>
                                        <p className="text-gray-700">Agent of property</p>
                                    </div>
                                </div>
                                <ul className="space-y-5">
                                    <li className="flex items-center gap-5"> <span><FaMapMarkerAlt className="text-primary" /></span> <span className="text-gray-600">Bankok, NCY</span></li>
                                    <li className="flex items-center gap-5"> <span><IoMdCall  className="text-primary" /></span> <span className="text-gray-600">(234) 0200 17813</span></li>
                                    <li className="flex items-center gap-5"> <span><MdOutlineMail className="text-primary" /></span> <span className="text-gray-600">mohin@gmail.com</span></li>
                                </ul>
                            </div>
                            <hr />
                            <div className="pt-4">
                                <p className="text-xl font-semibold text-gray-800">Request Inquiry</p>
                                <RequestInquery />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default House;