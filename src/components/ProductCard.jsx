import { Link } from "react-router-dom";


const ProductCard = ({ products }) => {

    const {_id, image, name, brand, type, price, rating} = products;

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure className="h-60 w-60"><img src={image} alt="Movie" /></figure>
                <div className="flex justify-between w-full pr-4">
                    <div className="ml-6">
                        <h2 className="card-title">Name: <span className="font-bold">{name}</span></h2>
                        <p className="font-semibold">Brand: <span className="font-bold">{brand}</span></p>
                        <p className="font-semibold">Type: <span className="font-bold">{type}</span></p>
                        <p className="font-semibold">Price: <span className="font-bold">{price}</span></p>
                        <p className="font-semibold mb-4">Rating: <span className="font-bold">{rating}</span></p>
                        <button className="btn mr-2 bg-emerald-500 text-white">Details</button>
                        <Link to={`../updateProduct/${_id}`}><button className="btn bg-emerald-500 text-white">Update</button></Link>
                    </div>
                    {/* <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical space-y-4">
                            <button className="btn">View</button>
                            <Link to={`updateCoffee/${_id}`}><button className="btn">Edit</button></Link>
                            <button onClick={() => handleDelete(_id)} className="btn bg-orange-400">X</button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;