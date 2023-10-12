import { useQuery, gql } from '@apollo/client'

const FOODS = gql`
    query GetFoods {
        foods{
            data{
            id,
                attributes{
                        title,
                        price,
                        image{
                        data{
                            attributes{
                            url
                            }
                        }
                    }
                }
            }
        }
    }
`

function FoodDetails() {
    const { data, loading, error } = useQuery(FOODS)

    {if (loading) return <p>Loading...</p>}
    { if (error) return <p>Error T_______T</p> }

    const mapData = data.foods.data.map(item => (
        <div className="box rounded-xl border-2 border-solid border-slate-700 shadow-lg overflow-hidden w-1/2 md:w-full" key={item.attributes.id}>
            <img
                className='px-8 pt-8'
                src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                alt={item.attributes.title} />
            <h2 className="my-2 text-center font-[Poppins]">{item.attributes.title}
                <span className="font-[Poppins] font-bold"> - ${item.attributes.price}</span>
            </h2>
        </div>
    ))

    return (
        <div className="flex justify-center">
            <div className="container justify-items-center grid gap-10 md:grid-cols-3 md:w-3/5 ">
                {mapData}
            </div>
        </div>
     );
}

export default FoodDetails;