import auttImg from '../../assets/others/authentication.gif';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
const SignUP = () => {
    const axiosPublic = useAxiosPublic();
    const {
        register,
        handleSubmit, reset,
        formState: { errors },
    } = useForm()
    const navigate = useNavigate();
    const { createUser, upadteUserProfile } = useContext(AuthContext);
    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                upadteUserProfile(data.name, data.photoURL)
                    .then(result => {
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(result => {
                                reset();
                                toast("Successfully Signed up!")
                                navigate('/')
                            })
                    })
            })
            .catch(error => toast(error.message))


    }

    return (
        <div>
            <div className="hero min-h-screen bg-[#F9F9FC]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center w-1/2 lg:text-left">
                        <img src={auttImg} alt="" />
                    </div>
                    <div className="card shrink-0 w-1/2 max-w-sm shadow-lg rounded-none  bg-opacity-80">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <h1 className='text-3xl text-center font-bold'>Sign Up</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                                {errors.name && <span className='text-red-600'>Please enter your name</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photoURL" {...register("photoURL", { required: true })} placeholder="photoURL" className="input input-bordered" />
                                {errors.photoURL && <span className='text-red-600'>Please enter your photoURL</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" required />
                                {errors.email && <span className='text-red-600'>Please enter your Email</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" {...register("password", { pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/ })} placeholder="password" className="input input-bordered" required />
                                {errors.password?.type === "pattern" && (
                                    <p className='text-red-500 text-sm'>Password must have minimum eight characters, at least one letter, one number and one special character</p>
                                )}
                            </div>
                            <h1>Already Registered? <Link to={'/login'}>Login</Link></h1>
                            <ToastContainer />
                            <div className="form-control mt-6">
                                <input type="submit" value="Sign Up" className={`btn btn-outline`} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUP;