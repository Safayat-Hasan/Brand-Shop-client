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
                    brands.map(brand => <BrandCard key={brand._id} brands={brand}></BrandCard>)
                }
            </div>
            <div>
                <h2 className="text-center text-3xl font-extrabold mb-6 mt-12 text-lime-500">Featured Products Showcase</h2>
                <p className="font-semibold md:text-2xl mb-6">Explore a handpicked selection of the hottest automotive products right on our home page. From sleek alloy wheels to cutting-edge tech gadgets, we've got the gear that will elevate your driving experience. Our featured products represent the best in quality, innovation, and style, all at your fingertips. Click on any item to learn more, and let's hit the road with the latest in automotive excellence.</p>
                <div className="md:flex mb-6">
                    <img className="md:w-1/2" src="https://i.ibb.co/5LcXPWj/bohema-home-2.jpg" alt="" />
                    <img className="md:w-1/2" src="https://i.ibb.co/Jq92hNT/TG-LAMBO230309-0013.jpg" alt="" />
                </div>
                <div className="text-center">
                    <button className="btn btn-primary bg-emerald-500 text-white border-0">View More</button>
                </div>
            </div>
            <div>
                <h2 className="text-center text-3xl font-extrabold mb-6 mt-12 text-lime-500">Automotive Tips and Articles</h2>
                <div className="md:flex gap-6">
                    <div className="card md:w-1/2 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title font-bold">Essential Car Maintenance Checklist for Every Season</h2>
                            <p>This article provides readers with a comprehensive guide on maintaining their vehicles throughout the year. It covers seasonal maintenance tasks, such as checking and changing fluids, inspecting tires, and preparing for extreme weather conditions. The article emphasizes the importance of regular maintenance in ensuring the longevity and safety of their cars.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary bg-emerald-500 text-white border-0">Read Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card md:w-1/2 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title font-bold">Top 10 Fuel-Saving Tips for Eco-Conscious Drivers</h2>
                            <p>This article offers eco-conscious drivers practical tips to reduce their carbon footprint and save money on fuel costs. It covers strategies like maintaining proper tire pressure, using fuel-efficient driving techniques, and making informed choices when it comes to vehicle upgrades. The article aims to help readers make their daily commutes more environmentally friendly and budget-friendly.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary bg-emerald-500 text-white border-0">Read Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;