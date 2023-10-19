import { NavLink } from "react-router-dom";


const SignUp = () => {
    return (
        <div>
            <div className="hero-content flex-col lg:flex-row-reverse bg-emerald-100">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Register now and buy your own luxurious Automobiles that you can ever dream of.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your ImageURL</span>
                            </label>
                            <input type="text" name="image" placeholder="imageURL" className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-emerald-500 text-white">Register</button>
                        </div>
                        <p>Already have an account? <NavLink className="text-emerald-500 font-bold" to='/login'> Login</NavLink></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;