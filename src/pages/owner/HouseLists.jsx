import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import HouseListOwner from "../../components/rows/HouseListOwner";



const HouseLists = () => {
    const [houses, setHouses]  = useState([])
    const {user} = useAuth();
    const axios = useAxios();
    useEffect(() => {
        const getOwnerHouse = async () => {
            const res = await axios.get(`/owner-house/${user?._id}`);
            setHouses(res.data?.houses);
        }
        getOwnerHouse();
    },[user?._id])

    const deleteHouse = async (id) => {

        try {
            const res = await axios.delete(`/delete-house/${id}?userId=${user?._id}`);
            if(res.data?.success){
                const filters = houses?.filter(item => item?._id !== id);
                setHouses(filters)
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div className="bg-white px-5 py-5 rounded">
            <div>
                <table className="w-full  border-collapse">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>House</td>
                            <td>City</td>
                            <td>Status</td>
                            <td className="w-[100px]">Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            houses?.map((house,index) => <HouseListOwner key={house?._id} deleteHouse={deleteHouse} index={index} house={house} /> )
                        }
                    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HouseLists;