import { useLoaderData } from "react-router-dom";
import BrandCard from "../components/BrandCard";
import Banner from "../components/Banner";


const Home = () => {

    const brands = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <h2 className="text-center text-3xl font-extrabold mb-6 mt-10 text-lime-500">Choose Your Brand</h2>
            <div className="mt-10 mb-10 grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    brands.map(brand => <BrandCard key={brand.id} brands={brand}></BrandCard>)
                }
            </div>
            <div>
                <h2 className="text-center text-3xl font-extrabold mb-6 mt-12 text-lime-500">Featured Products Showcase</h2>
                <p className="font-semibold md:text-2xl mb-6">Explore a handpicked selection of the hottest automotive products right on our home page. From sleek alloy wheels to cutting-edge tech gadgets, we've got the gear that will elevate your driving experience. Our featured products represent the best in quality, innovation, and style, all at your fingertips. Click on any item to learn more, and let's hit the road with the latest in automotive excellence.</p>
                <div className="md:flex">
                    <img className="md:w-1/2" src="https://i.ibb.co/5LcXPWj/bohema-home-2.jpg" alt="" />
                    <img className="md:w-1/2" src="https://i.ibb.co/Jq92hNT/TG-LAMBO230309-0013.jpg" alt="" />
                </div>
                <button>View More</button>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Home;