import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../main_components/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
import { AiFillGoogleCircle } from 'react-icons/ai';


const Login = () => {

    const { logIn, signInWithGoogle } = useContext(AuthContext)

    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully Logged In',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                // navigate(location?.state ? location.state : '/login');
                // navigate after login
                // navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error.message);
                toastMsg("Invalid email or password")
            })

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    
    const toastMsg = (input) => {
        toast(input);
    }

    return (
        <div className="mt-16 mb-28">
            <div className="hero min-h-screen bg-emerald-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Login now and dive into the world of mind-blowing Automobiles</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogIn} className="card-body">
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
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-emerald-500 text-white">Login</button>
                            </div>
                            {/* {logError &&
                                <p className="text-red-700">{logError}</p>
                            } */}
                            <div className="flex items-center">
                                <AiFillGoogleCircle className="text-xl"></AiFillGoogleCircle>
                                <p><button onClick={handleGoogleSignIn} className="btn btn-ghost">Google</button></p>
                            </div>
                            <p>New here? <NavLink className="text-emerald-500 font-bold" to='/signup'>Sign Up</NavLink></p>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                />
        </div>
    );
};

export default Login;