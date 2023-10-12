import cafeshackbg1 from "../assets/cafeshack-bg1.svg"
import cafeshackbg2 from "../assets/cafeshack-bg2.svg"
function Hero() {
    return ( 
        <div className="h-1/2">
            <div className="hero-description text-center">
                 <h1 className="text-5xl font-[Poppins] mb-2">Welcome to Cafe Shack</h1>
                 <p className="text-xl font-[Poppins]">Your daily dose of caffeine and community.</p>
            </div>
            <div className="
                lg:h-screen lg:w-full
                hero-info bg-[url('./assets/cafeshack-bg2.svg')] lg:bg-[url('./assets/cafeshack-bg1.svg') lg:bg-no-repeat]
            ">
                <div className="grid justify-items-center py-4 gap-4 lg:grid-cols-3">
                    <div className="box border-2 border-black h-56 w-56 bg-white opacity-90 rounded-xl"></div>
                    <div className="box border-2 border-black h-56 w-56 bg-white opacity-90 rounded-xl"></div>
                    <div className="box border-2 border-black h-56 w-56 bg-white opacity-90 rounded-xl"></div>
            </div>
                {/* <div className="hero-info--map bg-white shadow-lg rounded-lg border-2 border-black h-1/2 lg:h-3/4 w-3/4  absolute left-0 right-0 top-0 mx-auto mt-10">
                
                </div> */}
            </div>
            

        </div>
     );
}

export default Hero;