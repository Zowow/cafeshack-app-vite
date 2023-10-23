import Choco from "../assets/beverages/chocolate-scramble.png"
import Classic from "../assets/beverages/classic-scramble.png"
import Ube from "../assets/beverages/ube-scramble.png"

function BeverageDetails2() {

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
                        src={Choco}
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
                        src={Classic}
                        alt='Classic' />
                    <div className='text-center m-2'>
                        <h2 className="font-[Poppins]">Classic </h2>
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
                        src={Ube}
                        alt='Ube' />
                    <div className='text-center m-2'>
                        <h2 className="font-[Poppins]">Ube </h2>
                        <p className='font-[Poppins] font-bold'>100 - Php</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default BeverageDetails2;