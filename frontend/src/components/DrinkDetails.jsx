import { useQuery, gql } from '@apollo/client'

const DRINKS = gql`
    query GetDrinks {
        drinks{
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

function DrinkDetails() {
    const { data, loading, error } = useQuery(DRINKS)

    {if (loading) return <div className='my-12'><div className='coffee'></div></div>}
    { if (error) return <p className='text-center'>Error 404: No Data Found</p> }

    const mapData = data.drinks.data.map(item => (
        <div className="box rounded-xl border-2 border-solid border-slate-700 shadow-lg overflow-hidden w-[250px]
                        md:w-[200px]
                        lg:w-[220px]
                        xl:w-[250px]
                        "
            key={item.id}>
            <img
                className='px-8 pt-8 '
                src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                alt={item.attributes.title} />
            <div className='text-center m-2'>
                <h2 className="font-[Poppins]">{item.attributes.title} </h2>
                <p className='font-[Poppins] font-bold'>{item.attributes.price} Php</p>
            </div>
        </div>
    ))

    return (
        <div className="flex justify-center">
            <div className="container justify-items-center grid gap-10 md:grid-cols-3 md:w-[700px] lg:w-[775px] xl:w-[850px]">
                {mapData}
            </div>
        </div>
     );
}

export default DrinkDetails;