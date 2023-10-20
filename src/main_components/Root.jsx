import { Outlet } from "react-router-dom";
import NavBar from "../shared_components/NavBar";
import Footer from "../shared_components/Footer";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import HeaderUser from "../shared_components/HeaderUser";


const Root = () => {

    const {user} = useContext(AuthContext);

    return (
        <div className="max-w-[1350px] mx-auto">
            <NavBar></NavBar>
            {user && <HeaderUser></HeaderUser>}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;