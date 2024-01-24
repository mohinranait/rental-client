/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const HouseListOwner = ({house,index,deleteHouse}) => {

    const {name,status,images, city,_id} = house || {};
    return (
        <>
            <tr >
                <td className="py-2">{index+1}</td>
                <td className="flex items-center gap-3 py-2">
                    <span className="w-20 h-20 overflow-hidden inline-block border border-gray-200 rounded">
                        <img className="w-20 h-20" src={`${import.meta.env.VITE_IMAGE_ACCESS}/images/${images[0]}`} alt="" />
                    </span>
                    <Link to={`/house/${_id}`}>{name}</Link>
                </td>
                <td className="py-2">
                     {city}
                </td>
                <td>
                    {
                        status == 'active' ? <span>Active</span> : <span>Pending</span>
                    }
                </td>
                <td className="py-2">
                    <div className="flex gap-3 items-center">
                        <Link to={`/owner/houses/${_id}`} className="px-2 py-1 inline-block bg-purple-600 text-white rounded">
                            Edit
                        </Link>
                        <button onClick={() => deleteHouse(_id)} className="px-2 py-1 inline-block bg-primary text-white rounded">
                            Delete
                        </button>
                    </div>
                </td>
            </tr>   
        </>
    );
};

export default HouseListOwner;