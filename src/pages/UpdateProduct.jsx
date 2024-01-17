import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {

    const product = useLoaderData();
    const { _id, image, name, brand, type, price, rating  } = product;

    const handleUpdateProduct = event => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;

        const updatedProduct = { image, name, brand, type, price, rating };

        fetch(`https://brand-shop-mern-server.vercel.app/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product updated',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="bg-emerald-100 mb-28 md:p-24 w-full mt-16">
            <h2 className="text-3xl font-extrabold text-center mb-6">Update Product: {name}</h2>
            <form onSubmit={handleUpdateProduct}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8 gap-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={image} name="image" placeholder="Image URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={name} name="name" placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand" defaultValue={brand} placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="type" defaultValue={type} placeholder="Type" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Submit" className="btn btn-block bg-lime-300" />
            </form>
        </div>
    );
};

export default UpdateProduct;