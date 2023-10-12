import logo from '../assets/logo.png'

function Header() {
    return (
        <header className='mb-5'>
            <img className="w-20 mx-auto mt-12 mb-4" src="https://cdn-icons-png.flaticon.com/512/11465/11465855.png" alt="..."/>
            <nav>
                <ul className='flex justify-center items-center h-16 gap-2'>
                    <li>
                        <a className='px-8 py-2 cursor-pointer bg-primary text-complimentary-2 border-[2px] border-black rounded-full font-[Poppins]'
                        href='#'>Home
                        </a>
                    </li>
                    <li>
                        <a className='px-8 py-2 cursor-pointer bg-primary text-complimentary-2 border-2 border-black rounded-full font-[Poppins]'
                        href='#'>Menu
                        </a>
                    </li>
                    <li>
                        <a className='px-8 py-2 cursor-pointer bg-primary text-complimentary-2 border-2 border-black rounded-full font-[Poppins]'
                            href='#'>About
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
     );
}

export default Header;