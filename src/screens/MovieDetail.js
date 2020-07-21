import * as React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import { CustomText, CustomTextBold } from '../utils/CustomText'

const MovieDetail = ({ route, navigation }) => {

    const { title, overview, backdrop_path, release_date, vote_average } = route.params
    let imgUrl = 'http://image.tmdb.org/t/p/w300/' + backdrop_path

    return (
        <ScrollView style={styles.container}>

            <View style={styles.imageContainer} accessibilityLabel={`Movie ${title} image`}>
                <Image source={{ uri: imgUrl }} style={styles.cardImage} />
            </View>

            {/* Overview Section */}

            <View style={styles.sectionTextContainer}>
                <View
                    style={styles.verticalTextContainer}
                    accessibilityLabel={`Overview for movie ${title}`}
                >
                    <CustomTextBold style={styles.verticalText} >Overview</CustomTextBold>
                </View>
                <View style={styles.horizontalTextContainer} >
                    <CustomText style={styles.horizontalText}>{overview}</CustomText>
                </View>
            </View>

            {/* Date Section */}

            <View style={styles.sectionTextContainer}>
                <View style={styles.verticalTextContainer}>
                    <CustomTextBold style={styles.nonVerticalText}>Date</CustomTextBold>
                </View>
                <View style={styles.horizontalTextContainer}>
                    <CustomText style={styles.horizontalText}>{release_date}</CustomText>
                </View>
            </View>

            {/* Rating section */}

            <View style={styles.sectionTextContainer}>
                <View style={styles.verticalTextContainer}>
                    <CustomTextBold style={styles.nonVerticalText}>Rating</CustomTextBold>
                </View>
                <View style={styles.horizontalTextContainer}>
                    <CustomText style={styles.horizontalText} accessibilityHint={`${vote_average} out of ten`}>{vote_average}/10</CustomText>
                </View>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 10,
        backgroundColor: '#f5f5f5',
        padding: 10

    },
    cardImage: {
        width: 300,
        height: 169,
        marginBottom: 10,
        marginTop: 5
    },
    horizontalTextContainer: {
        flex: 7,
        padding: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'

    },
    horizontalText: {
        fontSize: 15,
    },
    verticalText: {
        transform: [{ rotate: '-90deg' }],
        color: 'white',
        fontSize: 15

    },
    nonVerticalText: {
        color: 'white',
        fontSize: 15,
        padding: 8

    },
    sectionTextContainer: {
        flexDirection: 'row',
        marginBottom: 10

    },
    verticalTextContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        flexWrap: 'wrap'
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center'
    }
})

export default MovieDetail