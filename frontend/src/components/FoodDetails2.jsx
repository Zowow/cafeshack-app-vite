import { useQuery, gql } from '@apollo/client'
import Carbonara from "../assets/food/carbonara.png"
import Pizza from "../assets/food/pizza.png"
import Taco from "../assets/food/taco.png"

function FoodDetails2() {

    return (
        <div className="flex justify-center">
            <div className="container justify-items-center grid gap-10 md:grid-cols-3 md:w-[700px] lg:w-[775px] xl:w-[850px]">
                <div className="box rounded-xl border-2 border-solid border-slate-700 shadow-lg overflow-hidden w-[250px]
                                md:w-[200px]
                                lg:w-[220px]
                                xl:w-[250px]
                                ">
                    <img
                        className='px-8 pt-8 '
                        src={Carbonara}
                        alt='carbonara' />
                    <div className='text-center m-2'>
                        <h2 className="font-[Poppins]">Carbonara </h2>
                        <p className='font-[Poppins] font-bold'>150 - Php</p>
                    </div>
                </div>
                <div className="box rounded-xl border-2 border-solid border-slate-700 shadow-lg overflow-hidden w-[250px]
                                md:w-[200px]
                                lg:w-[220px]
                                xl:w-[250px]
                                ">
                    <img
                        className='px-8 pt-8 '
                        src={Pizza}
                        alt='pizza' />
                    <div className='text-center m-2'>
                        <h2 className="font-[Poppins]">Pizza </h2>
                        <p className='font-[Poppins] font-bold'>200 - Php</p>
                    </div>
                </div>
                <div className="box rounded-xl border-2 border-solid border-slate-700 shadow-lg overflow-hidden w-[250px]
                                md:w-[200px]
                                lg:w-[220px]
                                xl:w-[250px]
                                ">
                    <img
                        className='px-8 pt-8 '
                        src={Taco}
                        alt='taco' />
                    <div className='text-center m-2'>
                        <h2 className="font-[Poppins]">Taco </h2>
                        <p className='font-[Poppins] font-bold'>100 - Php</p>
                    </div>
                </div>
                <div className="box rounded-xl border-2 border-solid border-slate-700 shadow-lg overflow-hidden w-[250px]
                                md:w-[200px]
                                lg:w-[220px]
                                xl:w-[250px]
                                ">
                    <img
                        className='px-8 pt-8 '
                        src={Carbonara}
                        alt='carbonara' />
                    <div className='text-center m-2'>
                        <h2 className="font-[Poppins]">Carbonara </h2>
                        <p className='font-[Poppins] font-bold'>150 - Php</p>
                    </div>
                </div>
                <div className="box rounded-xl border-2 border-solid border-slate-700 shadow-lg overflow-hidden w-[250px]
                                md:w-[200px]
                                lg:w-[220px]
                                xl:w-[250px]
                                ">
                    <img
                        className='px-8 pt-8 '
                        src={Pizza}
                        alt='pizza' />
                    <div className='text-center m-2'>
                        <h2 className="font-[Poppins]">Pizza </h2>
                        <p className='font-[Poppins] font-bold'>200 - Php</p>
                    </div>
                </div>
                <div className="box rounded-xl border-2 border-solid border-slate-700 shadow-lg overflow-hidden w-[250px]
                                md:w-[200px]
                                lg:w-[220px]
                                xl:w-[250px]
                                ">
                    <img
                        className='px-8 pt-8 '
                        src={Taco}
                        alt='taco' />
                    <div className='text-center m-2'>
                        <h2 className="font-[Poppins]">Taco </h2>
                        <p className='font-[Poppins] font-bold'>100 - Php</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default FoodDetails2;