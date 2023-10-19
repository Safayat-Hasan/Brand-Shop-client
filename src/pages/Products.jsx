import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard";


const Products = () => {

    const products = useLoaderData();

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    products.map(product => <ProductCard products={product} key={product._id}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;