import { useLoaderData } from "react-router-dom";
import BrandCard from "../components/BrandCard";
import Banner from "../components/Banner";


const Home = () => {

    const brands = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <h2 className="text-center text-3xl font-bold mb-6 mt-10">Choose Your Brand</h2>
            <div className="mt-10 mb-10 grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    brands.map(brand => <BrandCard key={brand.id} brands={brand}></BrandCard>)
                }
            </div>
        </div>
    );
};

export default Home;