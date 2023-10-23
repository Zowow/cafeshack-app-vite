import Cookie from "../assets/etc/cookie-smores.png"
import Cupcake from "../assets/etc/cupcake.png"
import Grilled from "../assets/etc/grilled-cheese-sandwich.png"

function EtcDetails() {
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
                        src={Cookie}
                        alt='Cookie' />
                    <div className='text-center m-2'>
                        <h2 className="font-[Poppins]">Cookie Smores </h2>
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
                        src={Cupcake}
                        alt='Cupcake' />
                    <div className='text-center m-2'>
                        <h2 className="font-[Poppins]">Cupcake </h2>
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
                        src={Grilled}
                        alt='Grilled' />
                    <div className='text-center m-2'>
                        <h2 className="font-[Poppins]">Grilled Cheese </h2>
                        <p className='font-[Poppins] font-bold'>100 - Php</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default EtcDetails;