

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/CJsMR7P/dream-bike-6183b66ff37fb.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-lime-400">Welcome to The World of Amazing Vehicles</h1>
                        <p className="mb-5 text-lime-500 font-bold">Automobiles, the epitome of modern mobility, have transformed the way we live and travel. These four-wheeled marvels offer the freedom to explore, commute, and adventure. From the sleek and stylish to the rugged and powerful, cars are more than just machines; they're a reflection of our aspirations, connecting us to the open road and the world beyond.</p>
                        <button className="btn btn-primary bg-emerald-500 text-white border-0">Start Exploring</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;