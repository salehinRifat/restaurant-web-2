import { useEffect, useRef, useState } from 'react';
import auttImg from '../../assets/others/authentication.gif';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
const Login = () => {
    const [button, setButton] = useState();
    let handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

    }
    const captchaRef = useRef();

    const handleCaptcha = () => {
        const value = captchaRef.current.value;
        console.log(value);
        const isValid = validateCaptcha(value);
        setButton(isValid);
    }
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    return (
        <div>
            <div className="hero min-h-screen bg-[#F9F9FC]">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center w-1/2 lg:text-left">
                        <img src={auttImg} alt="" />
                    </div>
                    <div className="card shrink-0 w-1/2 max-w-sm shadow-lg rounded-none  bg-opacity-80">
                        <form className="card-body" onSubmit={handleSubmit}>
                            <h1 className='text-3xl text-center font-bold'>Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <div>
                                    <LoadCanvasTemplate />
                                </div>
                                <input type="text" ref={captchaRef} onBlur={handleCaptcha} name="captcha" placeholder="Enter Captcha" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                {button ? <input type="submit" value="Sign in" className={`btn btn-outline`} /> : <input type="submit" value="Sign in" disabled className={`btn btn-outline`} />
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;