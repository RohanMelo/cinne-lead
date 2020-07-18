import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import MovieList from '../components/MovieList'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

import useMovieFetcher from '../services/useMovieFetcher'
import getEnvVars from '../../environment'

const { apiKey } = getEnvVars()

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [{ data, isLoading, isError }, doFetch] = useMovieFetcher()

    const handlePress = () => {
        doFetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=Super`)
    }

    // if (isError) {
    //     return <Text>Oops... something went wrong.</Text>
    // }

    return (
        <View>
            <TouchableOpacity onPress={handlePress} style={{ marginTop: 40 }}>
                <Text>SearchBar</Text>
            </TouchableOpacity>

            <ScrollView>
                {data && <MovieList movies={data.results} />}

            </ScrollView>
        </View>
    )
}

export default Search