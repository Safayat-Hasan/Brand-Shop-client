import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../main_components/AuthProvider";
import { useContext } from "react";


const ProductDetails = () => {

    const {user} = useContext(AuthContext);

    const details = useLoaderData();
    details.email = user.email.slice(0, -4);

    const addToCart = () => {
        fetch(`https://brand-shop-mern-server.vercel.app/cart`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(details)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Added to Cart Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="mt-16 mb-28">
            <h2 className="mb-10 text-center text-7xl text-emerald-800">{details.name}</h2>
            <img className="w-full" src={details.image} alt="" />
            {/* <p className="mt-10 text-2xl md:text-3xl font-bold">{detail.big_description}</p> */}
            <p className="mt-10 text-lime-500 text-2xl md:text-3xl font-extrabold text-center">Brand: {details.brand}</p>
            <div className="flex justify-center gap-10">
                <p className="mt-10 text-emerald-700 text-2xl md:text-3xl font-bold border-4 p-4">Type: {details.type}</p>
                <p className="mt-10 text-emerald-700 text-2xl md:text-3xl font-bold border-4 p-4">Rating: {details.rating}</p>
            </div>
            <p className="mt-10 text-lime-500 text-2xl md:text-3xl font-bold text-center">User Review: {details.short}</p>
            <p className="mt-10 text-emerald-700 text-2xl md:text-3xl font-bold text-center">Get this marvellous piece of luxury only at <span className="border-4 p-4">{details.price}</span></p>
            <div className="items-center mt-10 text-center">
                <button onClick={addToCart} className="btn text-2xl bg-emerald-400 text-white">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductDetails;