import React, { useEffect, useState } from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import MovieList from '../components/MovieList'
import { ScrollView } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import Constants from 'expo-constants'

import useMovieFetcher from '../services/useMovieFetcher'
import getEnvVars from '../../environment'
import SearchbarComponent from '../components/SearchbarComponent'


const { apiKey } = getEnvVars()

const Search = () => {
    const searchTerm = useSelector((store) => store.searchTerm)
    const [{ data, isLoading, isError }, doFetch] = useMovieFetcher()

    const handleIconPress = () => {
        doFetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm.searchTerm}`)
    }

    // if (isError) {
    //     return <Text>Oops... something went wrong.</Text>
    // }

    return (

        <SafeAreaView>

            <View style={{ justifyContent: 'center', marginTop: Constants.statusBarHeight + 10, marginLeft: 10, marginRight: 10 }}>
                <SearchbarComponent handleIconPress={handleIconPress} />
            </View>

            <ScrollView>
                {data && <MovieList movies={data.results} />}

            </ScrollView>
        </SafeAreaView>

    )
}

export default Search