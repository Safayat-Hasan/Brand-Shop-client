import { IoCarSport } from "react-icons/io5";

const Footer = () => {
    return (
        <div className="mt-16">
            <footer className="footer p-10 bg-emerald-100 text-base-content">
                <aside>
                    <div className="flex items-center gap-3">
                        <IoCarSport className="h-10 w-10 md:h-12 md:w-12"></IoCarSport>
                        <p className="text-2xl text-teal-600 font-extrabold">RoadMaster <br /><span className="text-black font-bold">Providing reliable cars since 2008</span></p>
                    </div>                  
                </aside>
                <nav>
                    <header className="footer-title">Brands</header>
                    <a className="link link-hover">BMW</a>
                    <a className="link link-hover">Tesla</a>
                    <a className="link link-hover">Ford</a>
                    <a className="link link-hover">Honda</a>
                    <a className="link link-hover">Toyota</a>
                    <a className="link link-hover">Mercedes-Benz</a>
                </nav>
                <nav>
                    <header className="footer-title">The Site</header>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Add Product</a>
                    <a className="link link-hover">My Cart</a>
                    <a className="link link-hover">Sign Up</a>
                    <a className="link link-hover">Login</a>
                    {/* <a className="link link-hover">Profile</a> */}
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;