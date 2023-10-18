


const BrandCard = ({brands}) => {

    const {name, image_url} = brands;

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="mx-auto w-40 h-40"><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-extrabold text-center mx-auto">{name}</h2>
            </div>
        </div>
    );
};

export default BrandCard;