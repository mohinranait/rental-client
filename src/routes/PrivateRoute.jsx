/* eslint-disable react/prop-types */

import useAuth from '../hooks/useAuth';
import {Navigate} from "react-router-dom"

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();

    if(loading){
        return  <p className='text-5xl font-bold text-center mt-10'>Loading...</p>
    }

    if(user?._id){
        return children
    }

    return <Navigate to={'/login'} />
};

export default PrivateRoute;