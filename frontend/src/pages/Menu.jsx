import React, { useState } from "react";
import FoodDetails from "../components/FoodDetails";
import FoodDetails2 from "../components/FoodDetails2";
import BeverageDetails from "../components/BeverageDetails";
import BeverageDetails2 from "../components/BeverageDetails2";
import EtcDetails from "../components/EtcDetails";

function Menu() {
    const [activeCategory, setActiveCategory] = useState("food");

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    return (
        <div className="menu mb-4 min-h-screen">
            <div className="menu-category w-[250px] md:w-[700px] lg:w-[775px] xl:w-[850px] mx-auto my-3">
                <div className="menu-category--nav w-full h-full border-2 border-solid border-black rounded-xl flex justify-center">
                    <button
                        className={`hover:bg-gray-400 hover:text-white p-2 lg:px-8 ${
                            activeCategory === "food" ? "active:bg-gray-400" : ""
                        }`}
                        onClick={() => handleCategoryClick("food")}
                    >
                        Food
                    </button>
                    <button
                        className={`hover:bg-gray-400 hover:text-white p-2 lg:px-8 ${
                            activeCategory === "beverages" ? "active:bg-gray-400" : ""
                        }`}
                        onClick={() => handleCategoryClick("beverages")}
                    >
                        Beverages
                    </button>
                    <button
                        className={`hover:bg-gray-400 hover:text-white p-2 lg:px-8 ${
                            activeCategory === "etc" ? "active:bg-gray-400" : ""
                        }`}
                        onClick={() => handleCategoryClick("etc")}
                    >
                        Etc.
                    </button>
                </div>
            </div>
            {activeCategory === "food" && <FoodDetails />}
            {activeCategory === "beverages" && <BeverageDetails />}
            {activeCategory === "etc" && <EtcDetails />}
        </div>
     );
}

export default Menu;
