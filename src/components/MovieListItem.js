import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';



// http://image.tmdb.org/t/p/w185/

const MovieListItem = ({ title, id, overview, poster_path }) => {
    const navigation = useNavigation();
    let imgUrl = 'http://image.tmdb.org/t/p/w92/' + poster_path

    return (

        <TouchableOpacity onPress={() => navigation.navigate('MovieDetail')}>
            <View style={styles.container}>
                <View>

                    <Image source={{ uri: imgUrl }} style={styles.cardImage} />
                </View>
                <View style={styles.cardText}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.overview} numberOfLines={3}>{overview}</Text>
                </View>

            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        flexDirection: 'row',
        paddingTop: 10,
        backgroundColor: '#f5f5f5',
        padding: 10

    },
    cardImage: {
        width: 92,
        height: 138,
    },
    cardText: {
        flexShrink: 1,
        padding: 10
    },

    title: {
        flexWrap: 'wrap',
        fontWeight: 'bold',
        fontSize: 18
    },
    overview: {
        flexWrap: 'wrap',
    }
})

export default MovieListItem