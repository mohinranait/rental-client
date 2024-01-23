import { useState } from "react";
import Input from "../../components/input/Input";
import data from "../../services/data";
import ButtonPrimary from "../../components/buttons/ButtonPrimary";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";


const HouseCreate = () => {
    const {user} = useAuth();
    const axios = useAxios();
    const [uploadImageText, setUploadImageText] = useState("Upload images");
    const [error, setError]= useState('')
    const [loading, setLoading]= useState(false)
    const [selectedFeatures, setSelectedFeatures] = useState([]);
    const [house, setHouse] = useState({
        name:'',
        address:'',
        city:'',
        bedrooms:1,
        bathrooms:1,
        roomSize:1,
        phone:'',
        description:'',
        features:'',
        property: {
            propertyId: '',
            propertyType: '',
            propertyStatus: '',
        },
        owner: user?._id,
    })

    const handleSelectMultiple = (event) => {
        const selectedFeature = event.target.value;
        if (selectedFeatures.includes(selectedFeature)) {
            // If selected, remove it from the array
            setSelectedFeatures(selectedFeatures.filter(feature => feature !== selectedFeature));
        } else {
            // If not selected, add it to the array
            setSelectedFeatures([...selectedFeatures, selectedFeature]);
        }
    };


    const handleHouse = async e => {
        e.preventDefault();
        const {name, address, city,phone,description,property} = house;
        if(name?.length == 0)return setError("Name filed is require")  
        if(address?.length == 0)return setError("Address filed is require")  
        if(city?.length == 0)return setError("City is require")  
        if(property.propertyId?.length == 0)return setError("Property ID is require")
        if(phone?.length == 0)return setError("Phone is require")  
        if(description?.length == 0)return setError("Description is require")
        console.log(selectedFeatures);

        try {
            setLoading(true);
            const res = await axios.post(`/house`, {...house, extraFeatures: selectedFeatures })
            if(res.data.success){
                setLoading(false)
                console.log('created success');
            }
        } catch (error) {
            setError(error.message)
        }finally{
            setLoading(false)
        }
        
        
    }



    return (
        <div className="mb-20">
            <div className="">
                <form onSubmit={handleHouse} className="space-y-5" >
                    {error && <div className="bg-primary bg-opacity-10 text-primary px-5 py-3 font-medium rounded">
                        {error}
                    </div> }
                   
                    <div className="space-y-4 rounded shadow p-4 bg-white">
                        <p className="text-lg font-medium text-gray-600">House Information</p>
                        <div>
                            <Input 
                            type={'text'} 
                            placeholder={"House name"} 
                            onChange={(e) => setHouse( {...house, name:e.target.value})} 
                            value={house.name}
                            />
                        </div>
                        <div>
                            <Input 
                            type={'text'} 
                            placeholder={"Address"}
                            onChange={(e) => setHouse( {...house, address:e.target.value})} 
                            value={house.address}
                             />
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div>
                                <select 
                                name="" 
                                id=""  
                                className='py-2 w-full outline-none border px-3 rounded '
                                onChange={(e) => setHouse( {...house,  city :e.target.value})}
                                >
                                    <option value="">Select City</option>
                                    {
                                        data.citys?.map(city => <option key={city?._id} value={city?.value} >{city?.label}</option> )
                                    }
                                </select>
                            </div>
                            <div>
                                <Input 
                                type={'number'} 
                                placeholder={"Bedrooms"}
                                onChange={(e) => setHouse( {...house, bedrooms:e.target.value})} 
                                value={house.bedrooms}
                                 />
                            </div>
                            <div>
                                <Input 
                                type={'number'} 
                                placeholder={"Bathrooms"}
                                onChange={(e) => setHouse( {...house, bathrooms:e.target.value})} 
                                value={house.bathrooms}
                                 />
                            </div>
                            <div>
                                <Input 
                                type={'number'} 
                                placeholder={"Room size"}
                                onChange={(e) => setHouse( {...house, roomSize:e.target.value})} 
                                value={house.roomSize}
                                 />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div>
                                <Input 
                                type={'text'}
                                placeholder={"Property ID"}
                                onChange={(e) => setHouse( {...house,  property:{...house.property,propertyId :e.target.value}})} 
                                value={house.property?.propertyId}
                                 />
                            </div>
                            <div>
                                <Input 
                                type={'number'}
                                placeholder={"Phone"}
                                onChange={(e) => setHouse( {...house, phone:e.target.value})} 
                                value={house.phone}
                                />
                            </div>
                            <div>
                                <select 
                                name="" 
                                id="" 
                                onChange={(e) => setHouse( {...house,  property:{...house.property,propertyType :e.target.value}})}
                                className='py-2 w-full outline-none border px-3 rounded '>
                                    <option value="House">Property Types</option>
                                    <option value="House">House</option>
                                    <option value="Hotel">Hotel</option>
                                    <option value="Resort">Resort</option>
                                </select>
                            </div>
                            <div>
                                <select 
                                name="" 
                                id=""  
                                onChange={(e) => setHouse( {...house,  property:{...house.property,propertyStatus :e.target.value}})}
                                className='py-2 w-full outline-none border px-3 rounded '
                                >
                                    <option value="active">Property Status</option>
                                    <option value="Active">Active</option>
                                    <option value="Pending">Pending</option>
                                </select>
                            </div>
                           
                           
                        </div>
                    </div>
                    <div className="space-y-4 rounded shadow p-4 bg-white">
                        <p className="text-lg font-medium text-gray-600">House Images</p>
                        <div>
                            <div className='file_upload px-5 py-5 relative border-4 border-dotted border-gray-300 rounded-lg'>
                                <div className='flex flex-col w-max  mx-auto text-center'>
                                    <label>
                                        <input
                                        className='text-sm cursor-pointer w-36 hidden'
                                        type='file'
                                        name='image'
                                        id='image'
                                        accept='image/*'
                                        hidden
                                        onChange={(e) => setUploadImageText(e.target.files[0].name) }
                                        />
                                        <div className='bg-primary py-2 overflow-x-auto max-w-[250px] overflow-hidden text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-primary'>
                                            <span>{uploadImageText}</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4 rounded shadow p-4 bg-white">
                        <div>
                            <textarea 
                            name="" 
                            placeholder="About house" 
                            className='py-2 w-full outline-none border px-3 rounded focus-visible:border-primary transition-all ' 
                            id="" cols="30" rows="4"
                            onChange={(e) => setHouse( {...house, description:e.target.value})} 
                            value={house.description}
                            ></textarea>
                        </div>
                    </div>
                    <div className="space-y-4 rounded shadow p-4 bg-white">
                        <p className="text-lg font-medium text-gray-600">Extra features</p>
                        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {
                                data?.features?.map(feature => <label key={feature?._id} htmlFor={`feature${feature?._id}`} className="py-2 border rounded pl-2 flex items-center gap-3">
                                <input 
                                type="checkbox" 
                                name="extraFeatures" 
                                onChange={handleSelectMultiple} value={feature?.value} 
                                id={`feature${feature?._id}`} 
                                checked={selectedFeatures.includes(feature.value)}
                                /> {feature?.label}
                            </label> )
                            }
                            
                        </div>
                    </div>
                    <div className="space-y-4 rounded shadow p-4 bg-white">
                        <div className="grid ">
                           <label  htmlFor={`isFeatures`} className="py-2 rounded pl-2  gap-3">
                                <input type="checkbox"  id={`isFeatures`} /> Features house
                            </label>
                        </div>
                        <div>
                            <ButtonPrimary>
                                Create House
                            </ButtonPrimary>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HouseCreate;