import { useLoaderData } from 'react-router-dom';
import CartCard from '../components/CartCard';
// import { useState } from 'react';


const MyCart = () => {

    const cartProducts = useLoaderData();
    // const [users, setUsers] = useState(cartProducts);

    return (
        <div className='mb-28 mt-16'>
            <h2 className="mb-10 text-center text-3xl font-bold md:text-7xl text-emerald-800">Products on My Cart</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 mb-16'>
                {
                    cartProducts.map(cart => <CartCard key={cart._id} cartProducts={cart}></CartCard>)
                }
            </div>
        </div>
    );
};

export default MyCart;