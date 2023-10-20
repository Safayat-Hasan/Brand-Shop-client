import Swal from "sweetalert2";


const CartCard = ({ cartProducts }) => {

    const { _id, image, name, brand, price } = cartProducts;


    const handleDelete = _id => {
        console.log(_id);

        fetch(`http://localhost:5000/cart/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'The product has been deleted from the cart',
                        'success'
                    )
                    // const remaining = users.filter(user => user._id !== _id);
                    // setUsers(remaining);
                }
            })

        // Swal.fire({
        //     title: 'Are you sure?',
        //     text: "You won't be able to revert this!",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes, delete it!'
        // }).then((result) => {
        //     if (result.isConfirmed) {

        //         fetch(`http://localhost:5000/cart/${_id}`, {
        //             method: 'DELETE'
        //         })
        //             .then(res => res.json())
        //             .then(data => {
        //                 console.log(data);
        //                 if (data.deletedCount > 0) {
        //                     Swal.fire(
        //                         'Deleted!',
        //                         'The product has been deleted from the cart',
        //                         'success'
        //                     )
        //                     // const remaining = users.filter(user => user._id !== _id);
        //                     // setUsers(remaining);
        //                 }
        //             })
        //     }
        // })
    }

    return (
        <div>
            <div className="card w-96 glass">
                <figure><img src={image} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">{name}</h2>
                    <p className="font-extrabold text-xl text-emerald-600">Brand: {brand}</p>
                    <p className="font-extrabold text-xl text-lime-600">Price: {price}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete from Cart</button>
                        <button className="btn btn-primary">Confirm Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartCard;