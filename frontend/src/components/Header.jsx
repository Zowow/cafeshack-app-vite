import logo from '../assets/logo.png'
import {Link} from "react-router-dom"

function Header() {
    return (
        <header className='mb-5'>
            <img className="w-32 md:w-40 lg:w-48 mx-auto mt-4 mb-1 " src={logo} alt="..."/>
            <nav>
                <ul className='flex justify-center items-center h-16 gap-2'>
                    <li>
                        <Link
                        exact="true" to="/"
                        className='px-6 py-1 cursor-pointer bg-complimentary-1 text-white border-[1px] border-black rounded-full font-[Poppins]
                            hover:bg-gray-800 hover:text-white
                        '
                        href='#'>Home
                        </Link>
                    </li>
                    <li>
                        <Link
                        to="/menu"
                        className='px-6 py-1 cursor-pointer bg-complimentary-1 text-white border-[1px] border-black rounded-full font-[Poppins]
                            hover:bg-gray-800 hover:text-white
                        '
                        href='#'>Menu
                        </Link>
                    </li>
                    <li>
                        <Link
                        to="/about"
                        className='px-6 py-1 cursor-pointer bg-complimentary-1 text-white border-[1px] border-black rounded-full font-[Poppins]
                            hover:bg-gray-800 hover:text-white
                        '
                            href='#'>About
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
     );
}

export default Header;