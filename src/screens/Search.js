import React from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import Constants from 'expo-constants'

import MovieList from '../components/MovieList'
import useMovieFetcher from '../services/useMovieFetcher'
import getEnvVars from '../../environment'
import SearchbarComponent from '../components/SearchbarComponent'
import LoadingSpinner from '../components/LoadingSpinner'
import { CustomText } from '../utils/CustomText'


const { apiKey } = getEnvVars()

const Search = () => {

    const searchTerm = useSelector((store) => store.searchTerm)
    const [{ data, isLoading, isError }, doFetch] = useMovieFetcher()

    const handleIconPress = () => {
        doFetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm.searchTerm}&include_adult=false`)
    }

    // Conditional rendering for isLoading and data on the view below the searchbar, so the SearchbarComponent stays visible at all times.

    return (

        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <SearchbarComponent handleIconPress={handleIconPress} />
            </View>

            <ScrollView>
                {isLoading && <LoadingSpinner />}
                {!isError && data && <MovieList movies={data.results} />}
                {data.total_results === 0 && <CustomText style={styles.errorText}>No results</CustomText>}
                {data.results === undefined && <CustomText style={styles.errorText}>No results</CustomText>}
            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: Constants.statusBarHeight + 10,
        marginLeft: 10,
        marginRight: 10
    },
    errorText: {
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center'
    },
    safeArea: {
        flex: 1
    }
})

export default Search