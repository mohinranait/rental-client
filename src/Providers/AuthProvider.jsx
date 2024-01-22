/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import useAxios from '../hooks/useAxios';

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const axios = useAxios();



    const logOut = async () => {
        try {
            const res = await axios.post(`/logout`, {id:user?._id});
            if(res.data.success){
                setUser({})
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        const getAuthUser = async () => {
            try {
                setLoading(true)
                const res = await axios.get(`/auth-user`);
                if(res.data?.success){
                    setLoading(false)
                    setUser(res.data?.user);
                }
            } catch (error) {
                setLoading(false)
            }
        }
        getAuthUser();
    },[])

    const userInfo = {
        user, setUser,
        loading, setLoading,
        logOut,
    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;