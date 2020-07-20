import * as React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack'

import MovieDetail from '../screens/MovieDetail'
import Home from '../screens/Home'
import Search from '../screens/Search'
import GenreList from '../screens/GenreList'
import Genres from '../screens/Genres'

const Tab = createMaterialBottomTabNavigator()
const Stack = createStackNavigator()

const HomeRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerTitle: "Now Playing" }} />
            <Stack.Screen name="MovieDetail" component={MovieDetail} />

        </Stack.Navigator>
    )
}

const SearchRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
            <Stack.Screen name="MovieDetail" component={MovieDetail} />

        </Stack.Navigator>
    )
}

const GenreRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Genres" component={Genres} options={{ headerShown: false }} />
            <Stack.Screen name="MovieDetail" component={MovieDetail} />
            <Stack.Screen name="GenreList" component={GenreList} />
        </Stack.Navigator>
    )
}

function BottomTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#e91e63"
            labelStyle={{ fontSize: 12 }}
            style={{ backgroundColor: 'tomato' }}
        >
            <Tab.Screen
                name="Home"
                component={HomeRoutes}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="home" size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchRoutes}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="search-web" size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Genres"
                component={GenreRoutes}
                options={{
                    tabBarLabel: 'Genres',
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="movie" size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabs

