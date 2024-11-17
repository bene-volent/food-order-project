import { useEffect, useState } from "react";

export default function useFetch(fetchFunction, initialValue) {
    const [data, setData] = useState(initialValue)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchFunction()

                setData(() => {
                    setIsLoading(false)
                    return data
                })
            } catch (error) {
                setIsLoading(false)
                setError({ message: error.message || "Unable to fetch data" })
            }
        }
        getData()
    }, [fetchFunction])
    return { data, setData, isLoading, error }
} 