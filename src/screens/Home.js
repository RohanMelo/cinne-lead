import * as React from 'react'
import { Text, View, Image } from 'react-native'

const Home = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
            <Image source={{ uri: 'http://image.tmdb.org/t/p/w92//gfJGlDaHuWimErCr5Ql0I8x9QSy.jpg' }} style={{
                width: 50,
                height: 50,
            }} />
        </View>
    )
}

export default Home
