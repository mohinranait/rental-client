

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import OwnerLayout from "../layout/OwnerLayout";
import OwnerDashboard from "../pages/owner/OwnerDashboard";
import HouseLists from "../pages/owner/HouseLists";
import HouseCreate from "../pages/owner/HouseCreate";
import PrivateRoute from "./PrivateRoute";
import HouseUpdate from "../pages/owner/HouseUpdate";
import House from "../pages/Single/House";
import RantalDashboard from "../pages/Rental/RantalDashboard";
import RantalLayout from "../layout/RantalLayout";
import BookingsOrder from "../pages/owner/BookingsOrder";

const myRoutes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path:"/",
                element: <Home />
            },
            {
                path:"/house/:id",
                element: <House />,
                loader: ({params}) => fetch(`${import.meta.env.VITE_SERVER_PORT}//house/${params?.id}`)
            },
            {
                path:"/login",
                element: <Login />
            },
            {
                path:"/register",
                element: <Register />
            },
            {
                path:'/user',
                element : <PrivateRoute><RantalLayout /></PrivateRoute> ,
                children: [
                    {
                        path: "dashboard",
                        element : <RantalDashboard />
                    }
                ]
            },
        ]
    },
    {
        path: "/owner",
        element: <PrivateRoute><OwnerLayout /></PrivateRoute> ,
        children: [
            {
                path: 'dashboard',
                element: <OwnerDashboard />
            },
            {
                path: 'houses',
                element: <HouseLists />
            },
            {
                path: 'houses/:id',
                element: <HouseUpdate />
            },
            {
                path: 'bookings',
                element: <BookingsOrder />
            },
            {
                path: 'new-houses',
                element: <HouseCreate />
            },
        ]
    }
])

export default myRoutes;