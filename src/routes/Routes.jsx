

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import OwnerLayout from "../layout/OwnerLayout";
import OwnerDashboard from "../pages/owner/OwnerDashboard";
import HouseLists from "../pages/owner/HouseLists";
import HouseCreate from "../pages/owner/HouseCreate";

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
                path:"/login",
                element: <Login />
            },
            {
                path:"/register",
                element: <Register />
            },
        ]
    },
    {
        path: "/owner",
        element: <OwnerLayout />,
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
                path: 'new-houses',
                element: <HouseCreate />
            },
        ]
    }
])

export default myRoutes;