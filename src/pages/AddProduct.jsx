import Swal from "sweetalert2";


const AddProduct = () => {

    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const short = form.short.value;
        const rating = form.rating.value;

        const newProduct = { image, name, brand, type, price, short, rating };
        console.log(newProduct);

        fetch("https://brand-shop-mern-server.vercel.app/products", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product added',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="bg-emerald-100 mt-16 mb-28 md:p-24 w-full">
            <h2 className="text-3xl font-extrabold text-center mb-6">Add a Product</h2>
            <form onSubmit={handleAddProduct}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8 gap-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="type" placeholder="Type" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="short" placeholder="Short Description" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Product" className="btn btn-block bg-lime-300" />
            </form>
        </div>
    );
};

export default AddProduct;