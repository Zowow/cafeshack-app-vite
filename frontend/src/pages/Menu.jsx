import FoodDetails from "../components/FoodDetails";

function Menu() {
    return ( 
        <div className="menu">
            <div className="menu-category w-3/5 mx-auto my-3">
                <ul className="
                        menu-category--nav w-full h-full border-2 border-solid border-black rounded-xl flex justify-center    
                ">
                    <li className="hover:bg-gray-400 hover:text-white p-2 lg:px-8">
                        <a href="#">Food</a>
                    </li>
                    <li className="hover:bg-gray-400 hover:text-white p-2 lg:px-8">
                        <a href="#">Beverages</a>
                    </li>
                    <li className="hover:bg-gray-400 hover:text-white p-2 lg:px-8">
                        <a href="#">Etc.</a>
                    </li>
                </ul>
            </div>
            <FoodDetails/>
        </div>
     );
}

export default Menu;