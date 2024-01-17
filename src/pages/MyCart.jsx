import { useLoaderData } from 'react-router-dom';
// import CartCard from '../components/CartCard';
import { useState } from 'react';
import Swal from 'sweetalert2';


const MyCart = () => {

    const cartProducts = useLoaderData();
    const [users, setUsers] = useState(cartProducts);
    console.log(users);

    const handleDelete = _id => {
        console.log(_id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://brand-shop-mern-server.vercel.app/cart/${_id}`, {
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
                            const remaining = users.filter(user => user._id !== _id);
                            setUsers(remaining);
                        }
                    })
            }
        })
    }

    return (
        <div className='mb-28 mt-16'>
            <h2 className="mb-10 text-center text-3xl font-bold md:text-7xl text-emerald-800">Products on My Cart</h2>
            {users.length > 0 ?
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 mb-16'>
                    {
                        users.map(cart => <div key={cart._id}>
                            <div className="card w-96 glass">
                                <figure><img src={cart.image} alt="car!" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-3xl font-bold">{cart.name}</h2>
                                    <p className="font-extrabold text-xl text-emerald-600">Brand: {cart.brand}</p>
                                    <p className="font-extrabold text-xl text-lime-600">Price: {cart.price}</p>
                                    <div className="card-actions justify-end">
                                        <button onClick={() => handleDelete(cart._id)} className="btn bg-emerald-500">Delete from Cart</button>
                                        <button className="btn bg-emerald-500">Confirm Purchase</button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>:
                <h2 className="mt-20 mb-40 text-center text-3xl md:text-5xl text-green-700">The Cart is empty...</h2>
            }
        </div>
    );
};

export default MyCart;