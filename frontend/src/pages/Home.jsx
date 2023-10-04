import useFetch from "../hooks/useFetch";

function Home() {
    const { data, isLoading, error } = useFetch("http://localhost:1337/api/foods/?populate=image")
    {if (isLoading) return <p>Loading...</p>}
    { if (error) return <p>Error T_______T</p> }

    console.log(data)
    console.log(data[1].attributes.image.data.attributes.name)
    const mapData = data.map((item) => (
        <div className="da relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50"
            key={item.id}
        >
            <div className="absolute inset-0 bg-center dark:bg-black"></div>
            <div className="group relative m-0 flex h-72 w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                    <img
                        className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                        src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                        alt="" />
                </div>
                <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                    <h1 className="font-serif text-2xl font-bold text-white shadow-xl">{item.attributes.title}</h1>
                    <h1 className="text-sm font-light text-gray-200 shadow-xl">{item.attributes.price}</h1>
                </div>
            </div>
        </div>
    ))


    return (
        <div className="home grid grid-cols-4 ">
            {mapData}
        </div>
    );
}

export default Home;