import React, { useEffect } from 'react'
import { SafeAreaView, View, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Constants from 'expo-constants'

import MovieList from '../components/MovieList'
import useMovieFetcher from '../services/useMovieFetcher'
import getEnvVars from '../../environment'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorMessage from '../utils/ErrorMessage'
import { CustomTextBold } from '../utils/CustomText'


const { apiKey } = getEnvVars()

const Home = () => {
    const [{ data, isLoading, isError }, doFetch] = useMovieFetcher()

    useEffect(() => {
        doFetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1&include_adult=false&sort_by=popularity.desc`)
    }, [])

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <CustomTextBold
                    style={styles.titleText}
                    accessibilityLabel="Home Screen, Title"
                    accessibilityHint="List of Movies playing now. Bottom screen navigation available"
                >NOW PLAYING</CustomTextBold>
            </View>
            <ScrollView>
                {data && <MovieList movies={data.results} />}
                {isLoading && <LoadingSpinner />}
                {isError && <ErrorMessage />}
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
    titleText: {
        fontSize: 20,
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'center'
    }
})

export default Home
