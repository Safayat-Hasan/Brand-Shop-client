import { Link, NavLink } from "react-router-dom";
import { IoCarSport } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../main_components/AuthProvider";
import Swal from "sweetalert2";


const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    var sliced=null;
    {
        user? sliced = user.email.slice(0, -4):sliced=null
    }

    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log('logged out');
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully Logged Out',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .catch(error => console.log(error))
    }

    const navLinks = <>
        <li className="text-lime-600 font-bold"><NavLink to="/">Home</NavLink></li>
        <li className="text-lime-600 font-bold"><NavLink to="/addProduct">Add Product</NavLink></li>
        <li className="text-lime-600 font-bold"><NavLink to={`/cart/${sliced}`}>My Cart</NavLink></li>
        <li className="text-lime-600 font-bold"><NavLink to="/signUp">Sign Up</NavLink></li>
    </>

    return (
        <div className="mt-4 mb-4 navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex items-center">
                    <IoCarSport className="h-10 w-10 md:h-12 md:w-12"></IoCarSport>
                    <Link to='/' className="btn btn-ghost normal-case text-2xl text-teal-600 font-extrabold">RoadMaster</Link>
                </div>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <a onClick={handleLogout} className="btn text-lime-700 font-bold">Sign out</a>:
                    <button className="btn text-lime-700 font-bold"><NavLink to="/login">Login</NavLink></button>
                }
            </div>
        </div>
    );
};

export default NavBar;