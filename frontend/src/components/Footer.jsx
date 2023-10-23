import {Link} from "react-router-dom"

function Footer() {
    return (
        <footer className="site-footer bg-gray-600 pt-6 pb-4 text-gray-300 text-base leading-6 relative z-10">
        <div className="container mx-auto">
            <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                <h6 className="text-white text-xl font-bold mb-2 px-4 lg:px-0">About</h6>
                <p className="text-justify px-4 lg:px-0">Nestled in the heart of Paniqui, Tarlac, The Cafeshack is your cozy retreat from the hustle and bustle of city life. Our café offers a warm and inviting atmosphere where you can relax, unwind, and savor moments of tranquility.</p>
            </div>

            {/* <div className="w-full md:w-1/4 px-4">
                <h6 className="text-white text-xl font-bold mb-2 px-4 lg:px-4">Categories</h6>
                <ul className="footer-links px-4 lg:px-4">
                <li><a href="" className="text-gray-300">C</a></li>
                <li><a href="" className="text-gray-300">UI Design</a></li>
                <li><a href="" className="text-gray-300">PHP</a></li>
                <li><a href="" className="text-gray-300">Java</a></li>
                <li><a href="" className="text-gray-300">Android</a></li>
                <li><a href="" className="text-gray-300">Templates</a></li>
                </ul>
            </div> */}

            <div className="w-full md:w-1/4 px-4">
                <h6 className="text-white text-xl font-bold mb-2 px-4 lg:px-4">Quick Links</h6>
                <ul className="footer-links px-4 lg:px-4">
                    <li><Link exact="true" to="/" className="text-gray-300">Home</Link></li>
                    <li><Link to="/menu" className="text-gray-300">Menu</Link></li>
                    <li><Link to="/about" className="text-gray-300">About</Link></li>
                </ul>
            </div>
            </div>
            <hr className="border-t border-gray-700 mt-8"/>
        </div>
        <div className="container mx-auto px-4 lg:px-4">
            <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-2/3 px-4 lg:pl-0 mb-8 md:mb-0">
                <p className="copyright-text mb-0">Copyright &copy; 2023 All Rights Reserved by
                <a href="" className="text-blue-500"> CafeShack</a>.
                </p>
            </div>

            {/* <div className="w-full md:w-1/3 px-4">
                <ul className="social-icons flex justify-end">
                <li><a className="facebook" href="#"><i className="fa fa-facebook text-gray-300"></i></a></li>
                <li><a className="twitter" href="#"><i className="fa fa-twitter text-gray-300"></i></a></li>
                <li><a className="dribbble" href="#"><i className="fa fa-dribbble text-gray-300"></i></a></li>
                <li><a className="linkedin" href="#"><i className="fa fa-linkedin text-gray-300"></i></a></li>
                </ul>
            </div> */}
            </div>
        </div>
        </footer>
    );
}

export default Footer;