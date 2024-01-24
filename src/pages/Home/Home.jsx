import Container from "../../layout/Container";
import banner from "../../../public/images/background/bg-h-1.jpg"
import HouseCard from "../../components/card/HouseCard";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Input from "../../components/input/Input";
import data from "../../services/data";
import ReactSlider from 'react-slider'
import "./Home.css"
const min=0;
const max = 200000
const Home = () => {
    const [range, setRange] = useState([min,max])
    const [houses, setHouses] = useState([]);
    const [toggleFilter, setToggleFilter] = useState(false)
    const [filter, setFilter] = useState(true)
    const [search, setSearch] = useState('');
    const [city, setCity] = useState(null);
    const [bedroom, setBedroom] = useState(null);
    const [bathroom, setBathroom] = useState(null);
    const axiosPublic = useAxiosPublic();
    useEffect(() => {
        const getHouses = async () => {
            console.log(city);
            const res = await axiosPublic.get(`/houses?city=${city}&bedroom=${bedroom}&bathroom=${bathroom}&search=${search}&priceRange=${range[0]}-${range[1]}`);
            setHouses(res.data?.houses);
        }
        getHouses();
    },[filter])

    const handleChange = (e) => {
        setCity(e.target.value || null);
    }

    const handleBedroom = (e) => {
        setBedroom( Number(e.target.value) );
    }
    const handleBathroom = (e) => {
        setBathroom( Number(e.target.value) );
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    const handleFilter  = () => {
        setFilter(!filter)
    }
    // handle price range
    const handleRange = e => {
        setRange(e)
    }
    return (
        <main>
            <section>
                <div className={`min-h-screen  bg-cover bg-center bg-no-repeat relative `} style={{backgroundImage: `url(${banner})`}}>
                    <div className="w-full h-full bg-black absolute top-0 left-0 bg-opacity-50"></div>
                    <Container>
                       
                        <div className="pt-10 flex justify-center flex-col items-center relative h-screen">
                            <div>
                                <h1 className="text-4xl font-semibold text-white text-center">Find your drime appoinments</h1>
                                <p className="text-xl font-medium text-center text-white mt-7">We Have Over Million Properties For You.</p>
                            </div>
                            <div className=" left-2/4 -translate-x-2/4 bg-white  rounded shadow py-7  absolute -bottom-72 sm:-bottom-32 w-full lg:w-[70vw] z-[999] px-8">
                                <p className="text-xl font-medium text-gray-700 mb-2">Filters</p>
                                <div className="sm:flex  items-center justify-center gap-3 mb-3">
                                    <Input type={'text'} onChange={handleSearch} placeholder={"Search"} />
                                    <select name="" onChange={handleChange} className='py-2 w-full outline-none border px-3 rounded focus-visible:border-primary transition-all ' id="">
                                        <option value="">City</option>
                                        {
                                            data?.citys?.map(item => <option value={item?.value} key={item?._id}>{item?.label}</option> )
                                        }
                                    </select>
                                
                                    <Input type={'number'} onChange={handleBedroom} placeholder={"Bedrooms"} />
                                    <Input type={'number'} onChange={handleBathroom} placeholder={"Bathrooms"} />
                                </div>
                                <div className="max-w-[300px]">
                                    <div>
                                        <div className='font-medium text-gray-500 mt-5'>
                                            Price <span className='text-primary font-bold'> ${range[0]}</span> to <span className='text-primary font-bold'>${range[1]}</span>
                                        </div>
                                    </div>
                                    <ReactSlider
                                        className="horizontal-slider"
                                        thumbClassName="example-thumb"
                                        trackClassName="example-track"
                                        defaultValue={[...range]}
                                        ariaValuetext={state => `Thumb value ${state.valueNow}`}
                                        pearling
                                        onChange={(e) => handleRange(e)}
                                        minDistance={10}
                                        min={min}
                                        max={max}
                                    />
                                </div>
                                <button onClick={() => handleFilter()} className="px-5 py-2 rounded bg-primary text-white font-medium">Filter</button>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>


            <section className="pt-96 sm:py-48">
                <div>
                    <Container>
                        
                        <div className="mb-7">
                            <h3 className="text-gray-700 text-center text-3xl font-medium">Featured Properties</h3>
                            <p className="text-gray-700 text-center mt-4">These are our featured properties</p>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-5">
                            {
                                houses?.length > 0 && houses?.map(house =>  <HouseCard key={house?._id} house={house} /> )
                            }
                          
                        </div>
                    </Container>
                </div>
            </section>
        </main>
    );
};

export default Home;