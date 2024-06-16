import axios from 'axios';

const axiosPublic = axios.create({
    baseURL: 'https://res-server-2.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;