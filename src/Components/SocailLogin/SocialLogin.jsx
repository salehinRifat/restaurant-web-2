import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const haldlegoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                const userInfo = {
                    name: res.user?.displayName,
                    email: res.user?.email
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        navigate('/')
                    })
            })
    }
    return (
        <div>

            <button className="btn btn-outline btn-sm text-xl w-12 mt-2" onClick={haldlegoogleSignIn}><FcGoogle /></button>
        </div>
    );
};

export default SocialLogin;