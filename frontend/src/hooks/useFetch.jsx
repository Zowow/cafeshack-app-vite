// import { useState, useEffect } from 'react';

// function useFetch(uri) {
//     const [data, setData] = useState(null)
//     const [isLoading, setIsLoading] = useState(true)
//     const [error, setError] = useState(null)

//     useEffect(() => {
//         const fetchData = async () => {
//             setIsLoading(true)
//             try {
//                 const response = await axios.get(uri)
//                 setData(response.data.data)
//                 setIsLoading(false)

//             } catch (error) {
//                 setError(error)
//                 setIsLoading(false)
//             }
//         }
//         fetchData()
//     },[uri])

//     return {data, isLoading, error}
// }

// export default useFetch;