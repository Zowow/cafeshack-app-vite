import logo from '../assets/logo.png'
import {Link} from "react-router-dom"

function Header() {
    return (
        <header className='mb-5'>
            <img className="w-48 mx-auto mt-4 mb-1" src={logo} alt="..."/>
            <nav>
                <ul className='flex justify-center items-center h-16 gap-2'>
                    <li>
                        <Link 
                        exact to="/"
                        className='px-6 py-1 cursor-pointer bg-gray-500 text-white border-[2px] border-black rounded-full font-[Poppins]
                            hover:bg-gray-800
                        '
                        href='#'>Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                        to="/menu"
                        className='px-6 py-1 cursor-pointer bg-gray-500 text-white border-2 border-black rounded-full font-[Poppins]
                            hover:bg-gray-800
                        '
                        href='#'>Menu
                        </Link>
                    </li>
                    <li>
                        <Link 
                        to="/about"
                        className='px-6 py-1 cursor-pointer bg-gray-500 text-white border-2 border-black rounded-full font-[Poppins]
                            hover:bg-gray-800
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