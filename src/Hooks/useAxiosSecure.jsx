import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const axiosSecure = axios.create({
    baseURL: 'https://res-server-2.vercel.app'
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOutUser } = useContext(AuthContext)
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });
    //for 401 and 501 status

    axiosSecure.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, async (error) => {
        const status = error.response.status;
        console.log(status);
        if (status == 401 || status == 403) {
            await logOutUser();
            navigate('/login');
        }
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    });

    return axiosSecure
};

export default useAxiosSecure;