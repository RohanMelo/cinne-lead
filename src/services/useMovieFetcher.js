import { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

import getEnvVars from '../../environment'

const { apiKey } = getEnvVars()

// Custom Hook that uses Axios to fetch data from theMovieDB api.

const useMovieFetcher = () => {
    const searchTerm = useSelector((store) => store.searchTerm)
    let storeUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm.searchTerm}`
    const [data, setData] = useState([])
    const [url, setUrl] = useState(storeUrl)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    // Cannot use async directly after useEffect hook!

    useEffect(() => {
        let mounted = true
        const fetchData = async () => {
            setIsError(false)
            setIsLoading(true)

            try {
                const result = await axios(url)
                if (mounted) {
                    setData(result.data)
                }

            } catch (error) {
                setIsError(true)
                // Cleanup so the user doesn't see the last succesful data fetch.
                // setData([])
            }

            setIsLoading(false)
        }

        fetchData()

        return () => mounted = false

    }, [url])

    return [{ data, isLoading, isError }, setUrl]
}

export default useMovieFetcher