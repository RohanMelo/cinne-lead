import * as React from 'react'
import { StyleSheet, SafeAreaView, Dimensions } from 'react-native'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'



const Genres = () => {
    const navigation = useNavigation()
    const buttonColor = '#1976D2'
    const buttonContent = { height: 70, width: 140 }

    return (
        <SafeAreaView style={styles.container}>
            <Button mode="contained" style={styles.button} color={buttonColor} contentStyle={buttonContent} onPress={() => navigation.navigate('GenreList', { genreId: 28, genreName: 'Action' })}>Action</Button>

            <Button mode="contained" style={styles.button} color={buttonColor} contentStyle={buttonContent} onPress={() => navigation.navigate('GenreList', { genreId: 12, genreName: 'Adventure' })}>Adventure</Button>

            <Button mode="contained" style={styles.button} color={buttonColor} contentStyle={buttonContent} onPress={() => navigation.navigate('GenreList', { genreId: 35, genreName: 'Comedy' })}>Comedy</Button>

            <Button mode="contained" style={styles.button} color={buttonColor} contentStyle={buttonContent} onPress={() => navigation.navigate('GenreList', { genreId: 80, genreName: 'Crime' })}>Crime</Button>

            <Button mode="contained" style={styles.button} color={buttonColor} contentStyle={buttonContent} onPress={() => navigation.navigate('GenreList', { genreId: 18, genreName: 'Drama' })}>Drama</Button>

            <Button mode="contained" style={styles.button} color={buttonColor} contentStyle={buttonContent} onPress={() => navigation.navigate('GenreList', { genreId: 14, genreName: 'Fantasy' })}>Fantasy</Button>

            <Button mode="contained" style={styles.button} color={buttonColor} contentStyle={buttonContent} onPress={() => navigation.navigate('GenreList', { genreId: 27, genreName: 'Horror' })}>Horror</Button>

            <Button mode="contained" style={styles.button} color={buttonColor} contentStyle={buttonContent} onPress={() => navigation.navigate('GenreList', { genreId: 9648, genreName: 'Mystery' })}>Mystery</Button>

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
    },
    button: {
        borderRadius: 30,
        margin: 10
    }
})

export default Genres