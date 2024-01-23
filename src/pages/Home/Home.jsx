import Container from "../../layout/Container";
import banner from "../../../public/images/background/bg-h-1.jpg"
import HouseCard from "../../components/card/HouseCard";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Home = () => {
    const [houses, setHouses] = useState([]);
    const axiosPublic = useAxiosPublic();
    useEffect(() => {
        const getHouses = async () => {
            const res = await axiosPublic.get(`/houses`);
            setHouses(res.data?.houses);
        }
        getHouses();
    },[])
    return (
        <main>
            <section>
                <div className={`min-h-screen bg-cover bg-center bg-no-repeat relative `} style={{backgroundImage: `url(${banner})`}}>
                    <div className="w-full h-full bg-black absolute top-0 left-0 bg-opacity-50"></div>
                    <Container>
                        <div className="py-10 flex justify-center items-center relative h-screen">
                            <div>
                                <h1 className="text-4xl font-semibold text-white text-center">Find your drime appoinments</h1>
                                <p className="text-xl font-medium text-center text-white mt-7">We Have Over Million Properties For You.</p>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>


            <section className="py-16">
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