import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate, useParams } from "react-router-dom";
import ButtonPrimary from "../../components/buttons/ButtonPrimary";
import Input from "../../components/input/Input";
import data from "../../services/data";
import { CgSpinnerTwo } from "react-icons/cg";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { uploadMultipleImage } from "../../services/uploadImage";


const HouseUpdate = () => {
    const {user} = useAuth();
    const {id} = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [selectedFiles, setSelectedFiles] = useState(null);
    const [error, setError]= useState('')
    const axios = useAxios();
    const [selectedFeatures, setSelectedFeatures] = useState([]);
    const [house, setHouse] = useState({
        name:'',
        address:'',
        city:'',
        bedrooms:'',
        bathrooms:'',
        roomSize:'',
        garages:'',
        phone:'',
        description:'',
        features:false,
        property: {
            propertyId: '',
            propertyType: '',
            propertyStatus: '',
        },
        owner: user?._id,
        price:'',
    })
    const axiosPublic = useAxiosPublic();


    useEffect(() => {
        const getSingleHouse = async () => {
            const res  = await axiosPublic.get(`/house/${id}`)
            setHouse( res.data?.house);
            // setSelectedFiles( res.data?.house?.images);
            setSelectedFeatures(res.data?.house?.extraFeatures)
        }
        getSingleHouse();
    },[id])

    const handleHouse = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            // upload images
            let images = []
            if(selectedFiles?.length > 0){

                images = await uploadMultipleImage(selectedFiles);

                // multer code
                // const formData = new FormData();
                // for (const file of selectedFiles) {
                //     formData.append('images', file);
                // }
                // const {data} = await axios.post(`/upload`, formData )
                // imageArry = [...imageArry, ...data.images ]
            }
           
            
            const updateObj =  {
                ...house, 
                extraFeatures: selectedFeatures, 
                images: images?.length > 0 ? images : house?.images 
            }
            try {
                // upload house information
                const res = await axios.patch(`/house/${id}?userId=${user?._id}`, updateObj )
                if(res.data.success){
                    setLoading(false)
                    navigate('/owner/houses')
                }
            } catch (error) {
                setError(error.message)
            }
        } catch (error) {
            setError(error.message)
        }finally{
            setLoading(false)
        }      
    }

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

    const handleFileChange = (e) => {
        setSelectedFiles(e.target.files);
    };





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
                            <label htmlFor="" className="text-sm font-medium text-gray-500">House name</label>
                            <Input 
                            type={'text'} 
                            placeholder={"House name"} 
                            onChange={(e) => setHouse( {...house, name:e.target.value})} 
                            value={house.name}
                            />
                        </div>
                        <div>
                            <label htmlFor="" className="text-sm font-medium text-gray-500">Address</label>
                            <Input 
                            type={'text'} 
                            placeholder={"Address"}
                            onChange={(e) => setHouse( {...house, address:e.target.value})} 
                            value={house.address}
                             />
                        </div>
                        <div className="grid  md:grid-cols-3 lg:grid-cols-5 gap-4">
                            <div>
                                <label htmlFor="" className="text-sm font-medium text-gray-500">City</label>
                                <select 
                                name="" 
                                id=""  
                                className='py-2 w-full outline-none border px-3 rounded '
                                onChange={(e) => setHouse( {...house,  city :e.target.value})}
                                >
                                    <option value="">Select City</option>
                                    {
                                        data.citys?.map(city => <option key={city?._id} value={city?.value} selected={city?.value == house?.city } >{city?.label}</option> )
                                    }
                                </select>
                            </div>
                            <div>
                                <label htmlFor="" className="text-sm font-medium text-gray-500">Bedrooms</label>
                                <Input 
                                type={'number'} 
                                placeholder={"Bedrooms"}
                                onChange={(e) => setHouse( {...house, bedrooms:e.target.value})} 
                                value={house.bedrooms}
                                 />
                            </div>
                            <div>
                                <label htmlFor="" className="text-sm font-medium text-gray-500">Garages</label>
                                <Input 
                                type={'number'} 
                                placeholder={"Garages"}
                                onChange={(e) => setHouse( {...house, garages:e.target.value})} 
                                value={house.garages}
                                 />
                            </div>
                            <div>
                                <label htmlFor="" className="text-sm font-medium text-gray-500">Bathrooms</label>
                                <Input 
                                type={'number'} 
                                placeholder={"Bathrooms"}
                                onChange={(e) => setHouse( {...house, bathrooms:e.target.value})} 
                                value={house.bathrooms}
                                 />
                            </div>
                            <div>
                                <label htmlFor="" className="text-sm font-medium text-gray-500">Room size (sq ft)</label>
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
                            <label htmlFor="" className="text-sm font-medium text-gray-500">Property ID</label>
                                <Input 
                                type={'text'}
                                placeholder={"Property ID"}
                                onChange={(e) => setHouse( {...house,  property:{...house.property,propertyId :e.target.value}})} 
                                value={house.property?.propertyId}
                                 />
                            </div>
                            <div>
                            <label htmlFor="" className="text-sm font-medium text-gray-500">Phone</label>
                                <Input 
                                type={'number'}
                                placeholder={"Phone"}
                                onChange={(e) => setHouse( {...house, phone:e.target.value})} 
                                value={house.phone}
                                />
                            </div>
                            <div>
                            <label htmlFor="" className="text-sm font-medium text-gray-500">Property type</label>
                                <select 
                                name="" 
                                id="" 
                                onChange={(e) => setHouse( {...house,  property:{...house.property,propertyType :e.target.value}})}
                                className='py-2 w-full outline-none border px-3 rounded '>
                                    <option value="">Property Types</option>
                                    <option value="House" selected={house?.property?.propertyType == 'House'} >House</option>
                                    <option value="Hotel" selected={house?.property?.propertyType == 'Hotel'} >Hotel</option>
                                    <option value="Resort" selected={house?.property?.propertyType == 'Resort'} >Resort</option>
                                </select>
                            </div>
                            <div>
                            <label htmlFor="" className="text-sm font-medium text-gray-500">Property status</label>
                                <select 
                                name="" 
                                id=""  
                                onChange={(e) => setHouse( {...house,  property:{...house.property,propertyStatus :e.target.value}})}
                                className='py-2 w-full outline-none border px-3 rounded '
                                >
                                    <option value="For Rent">Property Status</option>
                                    <option value="For Sale" selected={house?.property?.propertyStatus == 'For Sale'} >For Sale</option>
                                    <option value="For Rent" selected={house?.property?.propertyStatus == 'For Rent'} >For Rent</option>
                                   
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
                                        multiple
                                        onChange={handleFileChange}
                                        // onChange={(e) => setUploadImageText(e.target.files[0].name) }
                                        />
                                        <div className='bg-primary py-2 overflow-x-auto max-w-[250px] overflow-hidden text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-primary'>
                                            <span>{'uploadImageText'}</span>
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
                            <label htmlFor="" className="text-sm font-medium text-gray-500">Price </label>
                            <Input 
                            type={'number'}
                            placeholder={"Price"}
                            onChange={(e) => setHouse( {...house, price:e.target.value})} 
                            value={house.price}
                            />
                        </div>
                        <div>
                            <ButtonPrimary type={'submit'}>
                                <span className="flex gap-2 items-center justify-center min-w-[160px]">  {loading ? <CgSpinnerTwo size={23} className="animate-spin" /> : 'Update House'}</span>
                            </ButtonPrimary>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HouseUpdate;