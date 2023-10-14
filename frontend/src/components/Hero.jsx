import hero from "../assets/hero-bg.svg"
import heroMobile from "../assets/hero-m-bg.svg"
import wave1 from "../assets/wave1.svg"

import '../index.css'

function Hero() {
    return ( 
        <div className="h-1/2 relative">
            <div className="hero-description text-center">
                 <h1 className="text-5xl font-[Poppins] mb-2">Welcome to Cafe Shack</h1>
                 <p className="text-xl font-[Poppins]">Your daily dose of caffeine and community.</p>
            </div>

            <div className="
                    grid justify-items-center py-4 gap-4 relative
                    lg:grid-cols-3 lg:w-[750px] lg:mx-auto 
                    ">
                    <div className="box
                            shadow-custom w-[350px] h-56 flex items-center rounded-xl border-[1px] border-black bg-white
                            lg:w-56 lg:h-56 lg:flex-col lg:justify-center lg:gap-5 
                            ">
                        <div className="
                            w-[250px] h-[200px] ml-4 bg-secondary rounded-xl flex items-center
                            lg:w-[120px] lg:h-[80px] lg:ml-0 lg:gap-5
                        ">
                            <img 
                                className="py-4 px-8 bg-secondary rounded-xl mx-auto"
                                src="https://cdn-icons-png.flaticon.com/512/3361/3361122.png" 
                                alt="" 
                            />
                        </div>
                        <p className="text-center text-md font-[Poppins] w-3/4">
                            This is where the description should be.
                        </p>
                    </div>
                    <div className="box
                            shadow-custom w-[350px] h-56 flex items-center rounded-xl border-[1px] border-black
                            lg:w-56 lg:h-56 lg:flex-col lg:justify-center lg:gap-5 
                            ">
                        <div className="
                            w-[250px] h-[200px] ml-4 bg-secondary rounded-xl flex items-center
                            lg:w-[120px] lg:h-[80px] lg:ml-0 lg:gap-5
                        ">
                            <img 
                                className="py-4 px-8 bg-secondary rounded-xl mx-auto"
                                src="https://cdn-icons-png.flaticon.com/512/1037/1037855.png" 
                                alt="" 
                            />
                        </div>
                        <p className="text-center text-md font-[Poppins] w-3/4">
                            This is where the description should be.
                        </p>
                    </div>
                    
                    <div className="box
                            shadow-custom w-[350px] h-56 flex items-center rounded-xl border-[1px] border-black
                            lg:w-56 lg:h-56 lg:flex-col lg:justify-center lg:gap-5 
                            ">
                        <div className="
                            w-[250px] h-[200px] ml-4 bg-secondary rounded-xl flex items-center
                            lg:w-[120px] lg:h-[80px] lg:ml-0 lg:gap-5
                        ">
                            <img 
                                className="py-4 px-8 bg-secondary rounded-xl mx-auto"
                                src="https://cdn-icons-png.flaticon.com/512/4008/4008984.png"  
                                alt="" 
                            />
                        </div>
                        <p className="text-center text-md font-[Poppins] w-3/4">
                            This is where the description should be.
                        </p>
                    </div>
            </div>
            <div className="
                bg-[url('./assets/hero-m-bg.svg')] h-full w-full bg-no-repeat absolute top-[20%]
                lg:bg-[url('./assets/hero-bg.svg')] lg:h-[320px] lg:w-[1038px] lg:mx-auto lg:relative
            
            "></div>
            {/* <img
                className="w-3/4 mx-auto -m-8" 
                src={hero}
                alt="hero" 
            /> */}
            

            {/* <div className="
                lg:h-screen lg:w-full
                hero-info bg-[url('./assets/cafeshack-bg2.svg')] lg:bg-[url('./assets/cafeshack-bg1.svg') lg:bg-no-repeat]
            ">
                <div className="grid justify-items-center py-4 gap-4 lg:grid-cols-3">
                    <div className="box border-2 border-black h-56 w-56 bg-white opacity-90 rounded-xl"></div>
                    <div className="box border-2 border-black h-56 w-56 bg-white opacity-90 rounded-xl"></div>
                    <div className="box border-2 border-black h-56 w-56 bg-white opacity-90 rounded-xl"></div>
            </div>
                <div className="hero-info--map bg-white shadow-lg rounded-lg border-2 border-black h-1/2 lg:h-3/4 w-3/4  absolute left-0 right-0 top-0 mx-auto mt-10">
                
                </div>
            </div> */}
            

        </div>
     );
}

export default Hero;