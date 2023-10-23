function About() {
    return ( 
        <div className="about-container mt-8 mb-16">
            <div className="about-abt flex flex-col items-center">
                <img className="w-[100px]" src="https://cdn-icons-png.flaticon.com/512/1041/1041728.png" alt="" />
                <h2 className="font-bold text-[2rem]">About</h2>
                <p className="w-[300px] md:w-[500px] text-justify" >At The Cafeshack, we take pride in curating a menu that tantalizes the taste buds and satisfies the soul. From aromatic coffees brewed to perfection to an array of delectable pastries and light bites, our offerings are a symphony of flavors designed to delight every palate.</p>
            </div>
            <div className="about-abt flex flex-col items-center mt-4">
                <img className="w-[100px]" src="https://cdn-icons-png.flaticon.com/512/1865/1865269.png" alt="" />
                <h2 className="font-bold text-[2rem]">Visit Us</h2>
                <p className="w-[300px] md:w-[500px] text-center" >95 quezon St, Paniqui, 2307 Tarlac</p>
                <a href="https://maps.app.goo.gl/kWThBSczB9tnNbZY6" target="_blank" className="underline text-blue-400">Check us out</a>
            </div>
        </div>
     );
}

export default About;