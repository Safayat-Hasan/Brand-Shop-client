import { Outlet } from "react-router-dom";
import NavBar from "../shared_components/NavBar";


const Root = () => {
    return (
        <div className="max-w-[1350px] mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;