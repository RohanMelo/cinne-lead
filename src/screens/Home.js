import React, { useEffect } from 'react'
import { View, SafeAreaView, Text } from 'react-native'
import MovieList from '../components/MovieList'
import { ScrollView } from 'react-native-gesture-handler'

import useMovieFetcher from '../services/useMovieFetcher'
import getEnvVars from '../../environment'


const { apiKey } = getEnvVars()

const Home = () => {
    const [{ data, isLoading, isError }, doFetch] = useMovieFetcher()

    useEffect(() => {
        doFetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`)
    }, []);
    // if (isError) {
    //     return <Text>Oops... something went wrong.</Text>
    // }

    return (
        <SafeAreaView>

            <ScrollView>
                {data && <MovieList movies={data.results} />}

            </ScrollView>
        </SafeAreaView>
    )
}

export default Home
