import { Link, Outlet } from "react-router-dom";
import Container from "./Container";
import useAuth from "../hooks/useAuth";


const RantalLayout = () => {
    const {user, logOut} = useAuth();
    return (
        <div className="pt-28 mb-16">
            <Container>
                <div className="grid  grid-cols-4 gap-6">
                    <div className="">
                        <ul className="bg-white p-4 rounded shadow">
                            <li><Link to="/user/dashboard" className="inline-block w-full pl-3 rounded py-2 hover:bg-gray-200 hover:text-primary">Bookings</Link></li>
                            <li><button onClick={() => logOut()} className="inline-block w-full pl-3 text-left rounded py-2 hover:bg-gray-200 hover:text-primary">Logout</button></li>
                        </ul>
                    </div>
                    <div className="col-span-3">
                        <Outlet />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default RantalLayout;