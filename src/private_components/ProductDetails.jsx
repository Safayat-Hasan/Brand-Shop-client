import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const ProductDetails = () => {

    const details = useLoaderData();

    const addToCart = () => {
        fetch(`http://localhost:5000/cart`, {
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
        <div className="mt-12 mb-24">
            <h2 className="mb-10 text-center text-7xl text-emerald-800">{details.name}</h2>
            <img className="w-full" src={details.image} alt="" />
            {/* <p className="mt-10 text-2xl md:text-3xl font-bold">{detail.big_description}</p> */}
            <p className="mt-10 text-emerald-700 text-2xl md:text-3xl font-bold text-center">Get this marvellous piece of luxury only at {details.price}</p>
            <div className="items-center mt-10 text-center">
                <button onClick={addToCart} className="btn text-2xl bg-emerald-400 text-white">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductDetails;