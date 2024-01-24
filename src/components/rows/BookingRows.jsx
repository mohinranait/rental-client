import { Link } from "react-router-dom";


const BookingRows = ({booking, index}) => {
    console.log(booking);
    const {_id,user,phone,familyMember,children,houseName,houseAddress,houseCity,houseImage,bedrooms,bathrooms,garages} = booking || {}
    return (
        <>
            <tr className="text-sm text-gray-600">
                <td className="py-4">{index+1}</td>
                <td className=" py-4">
                    <span>{user?.name}</span> <br />
                    <span>{user?.email}</span> <br />
                    <span>{user?.phone}</span> 
                </td>
                <td className="py-4">
                    <img src={houseImage} className="w-8 h-8 rounded" alt="" /> <br /> {houseName}
                </td>
                <td className="py-4">
                    {houseAddress} <br /> {houseCity}
                </td>
                <td className="py-4">
                    Total:{familyMember} <br /> Children:{children}
                </td>
                <td className="py-4">
                    Bedroome:{bedrooms} <br /> 
                    Bathroom:{bathrooms} <br /> 
                    Garages:{garages} <br /> 
                </td>
               
                {/* <td className="py-4">
                    <div className="flex gap-3 items-center">
                        <Link to={`/owner/houses/${_id}`} className="px-2 py-1 inline-block bg-purple-600 text-white rounded">
                            Edit
                        </Link>
                        <button className="px-2 py-1 inline-block bg-primary text-white rounded">
                            Delete
                        </button>
                    </div>
                </td> */}
            </tr>   
        </>
    );
};

export default BookingRows;