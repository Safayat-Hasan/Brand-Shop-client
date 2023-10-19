import { Link } from "react-router-dom";



const BrandCard = ({ brands }) => {

    const { id, brname, image_url } = brands;

    return (
        <div>
            <Link to={`/brdetails/${id}`}><div className="card w-full bg-base-100 shadow-xl">
                <figure className="mx-auto w-40 h-40"><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-extrabold text-center mx-auto">{brname}</h2>
                </div>
            </div></Link>
        </div>
    );
};

export default BrandCard;