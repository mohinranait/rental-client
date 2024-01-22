import axios from 'axios';
const publicInstance = axios.create({
    baseURL: import.meta.env.VITE_SERVER_PORT,
});

const useAxiosPublic = () => {
    return publicInstance
};

export default useAxiosPublic;