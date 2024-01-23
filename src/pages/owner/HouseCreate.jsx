import { useState } from "react";
import Input from "../../components/input/Input";
import data from "../../services/data";
import ButtonPrimary from "../../components/buttons/ButtonPrimary";


const HouseCreate = () => {
    const [uploadImageText, setUploadImageText] = useState("Upload images");

    const [house, setHouse] = useState({
        name:'',
        address:'',
        city:'',
        bedrooms:'',
        bathrooms:'',
        roomSize:'',
        phone:'',
        description:'',
        features:'',
        owner:'',
    })

    
    return (
        <div className="mb-20">
            <div className="">
                <form action="" className="space-y-5" >

                    <div className="space-y-4 rounded shadow p-4 bg-white">
                        <p className="text-lg font-medium text-gray-600">House Information</p>
                        <div>
                            <Input type={'text'} placeholder={"House name"} />
                        </div>
                        <div>
                            <Input type={'text'} placeholder={"Address"} />
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div>
                                <select name="" id=""  className='py-2 w-full outline-none border px-3 rounded '>
                                    <option value="">Select City</option>
                                    {
                                        data.citys?.map(city => <option key={city?._id} value={city?.value} >{city?.label}</option> )
                                    }
                                </select>
                            </div>
                            <div>
                                <Input type={'number'} placeholder={"Bedrooms"} />
                            </div>
                            <div>
                                <Input type={'number'} placeholder={"Bathrooms"} />
                            </div>
                            <div>
                                <Input type={'number'} placeholder={"Room size"} />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div>
                                <Input type={'text'} placeholder={"Property ID"} />
                            </div>
                            <div>
                                <Input type={'number'} placeholder={"Phone"} />
                            </div>
                            <div>
                                <select name="" id=""  className='py-2 w-full outline-none border px-3 rounded '>
                                    <option value="House">Property Types</option>
                                    <option value="House">House</option>
                                    <option value="Hotel">Hotel</option>
                                    <option value="Resort">resort</option>
                                </select>
                            </div>
                            <div>
                                <select name="" id=""  className='py-2 w-full outline-none border px-3 rounded '>
                                    <option value="active">Property Status</option>
                                    <option value="Active">Pending</option>
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
                            <textarea name="" placeholder="About house" className='py-2 w-full outline-none border px-3 rounded focus-visible:border-primary transition-all ' id="" cols="30" rows="4"></textarea>
                        </div>
                    </div>
                    <div className="space-y-4 rounded shadow p-4 bg-white">
                        <p className="text-lg font-medium text-gray-600">Extra features</p>
                        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {
                                data?.features?.map(feature => <label key={feature?._id} htmlFor={`feature${feature?._id}`} className="py-2 border rounded pl-2 flex items-center gap-3">
                                <input type="checkbox" value={feature?.value} id={`feature${feature?._id}`} /> {feature?.label}
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