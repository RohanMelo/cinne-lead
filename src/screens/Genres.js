import * as React from 'react'
import { StyleSheet, SafeAreaView, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import CustomButton from '../components/CustomButton'

const Genres = () => {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>

            <CustomButton onPress={() => navigation.navigate('GenreList', { genreId: 28, genreName: 'Action' })}>Action</CustomButton>

            <CustomButton onPress={() => navigation.navigate('GenreList', { genreId: 12, genreName: 'Adventure' })}>Adventure</CustomButton>

            <CustomButton onPress={() => navigation.navigate('GenreList', { genreId: 35, genreName: 'Comedy' })}>Comedy</CustomButton>

            <CustomButton onPress={() => navigation.navigate('GenreList', { genreId: 80, genreName: 'Crime' })}>Crime</CustomButton>

            <CustomButton onPress={() => navigation.navigate('GenreList', { genreId: 18, genreName: 'Drama' })}>Drama</CustomButton>

            <CustomButton onPress={() => navigation.navigate('GenreList', { genreId: 14, genreName: 'Fantasy' })}>Fantasy</CustomButton>

            <CustomButton onPress={() => navigation.navigate('GenreList', { genreId: 27, genreName: 'Horror' })}>Horror</CustomButton>

            <CustomButton onPress={() => navigation.navigate('GenreList', { genreId: 9648, genreName: 'Mystery' })}>Mystery</CustomButton>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginTop: Dimensions.get('window').height * 0.20,
    }
})

export default Genres