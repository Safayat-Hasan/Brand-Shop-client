import { useContext } from "react";
import { AuthContext } from "../main_components/AuthProvider";


const HeaderUser = () => {

    const {user} = useContext(AuthContext);

    return (
        <div className="text-end">
            <div>
                <h3><span className="text-green-600 text-2xl font-bold">{user.displayName}</span></h3>
                {/* <p>Email: {user.email}</p> */}
                <img className="rounded-full mb-10 mt-2 ml-auto w-16 h-16" src={user.photoURL} alt="" />
            </div>
        </div>
    );
};

export default HeaderUser;