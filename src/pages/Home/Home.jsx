import Container from "../../layout/Container";
import banner from "../../../public/images/background/bg-h-1.jpg"

const Home = () => {
    return (
        <div className="">
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
        </div>
    );
};

export default Home;