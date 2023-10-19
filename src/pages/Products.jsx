import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard";



const Products = () => {

    const products = useLoaderData();

    return (
        <div>
            {products.length > 0 ?
                
            <div>
                <h2 className="mb-10 text-center text-7xl text-green-700">{products[0].brand}</h2>
                <div className="mb-10 carousel w-full h-[600px]">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={products[0].image} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={products[1].image} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={products[2].image} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <h2 className="mb-10 text-4xl text-teal-600 text-center font-bold">Our Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        products.map(product => <ProductCard products={product} key={product._id}></ProductCard>)
                    }
                </div>
            </div>
            : <h2 className="mt-20 mb-40 text-center text-3xl md:text-5xl text-green-700">Sorry we have no vehicles of such brand at this moment...</h2>
        }
        </div>
    );
};

export default Products;