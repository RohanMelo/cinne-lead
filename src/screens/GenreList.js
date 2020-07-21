import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import MovieList from '../components/MovieList'
import useMovieFetcher from '../services/useMovieFetcher'
import getEnvVars from '../../environment'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorMessage from '../utils/ErrorMessage'

const { apiKey } = getEnvVars()

const GenreList = ({ route }) => {

    const [{ data, isLoading, isError }, doFetch] = useMovieFetcher()
    const { genreId } = route.params

    useEffect(() => {
        doFetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`)
    }, [])

    if (isLoading) {
        return <LoadingSpinner />
    }

    return (
        <SafeAreaView>
            <ScrollView>
                {data && <MovieList movies={data.results} />}
            </ScrollView>
        </SafeAreaView>
    )
}

export default GenreList