import { NavLink } from "react-router-dom";


const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-emerald-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Login now and dive into the world of mind-blowing Automobiles</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
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
                            {/* <div className="flex items-center">
                                <AiFillGoogleCircle className="text-xl"></AiFillGoogleCircle>
                                <p><button onClick={handleGoogleSignIn} className="btn btn-ghost">Google</button></p>
                            </div> */}
                            <p>New here? <NavLink className="text-emerald-500 font-bold" to='/signup'>Sign Up</NavLink></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;