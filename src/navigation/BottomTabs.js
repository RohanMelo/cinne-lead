import * as React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Home from '../screens/Home'
import Search from '../screens/Search'
import Genres from '../screens/Genres'

const Tab = createMaterialBottomTabNavigator();

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
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="home" size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={Search}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="search-web" size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Genres"
                component={Genres}
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

