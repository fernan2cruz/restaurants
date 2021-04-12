import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RestaurantStack from './RestaurantStack'
import AccountStack from './AccountStack'
import FavoritesStack from './FavoritesStack'
import SearchStack from './SearchStack'
import TopRestaurantStack from './TopRestaurantStack'



const Tab = createBottomTabNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            
            <Tab.Navigator>
                <Tab.Screen
                    name="restaurants"
                    component={RestaurantStack}
                    options={{ title: "Restaurants"}}
                ></Tab.Screen>
                <Tab.Screen
                    name="favorites"
                    component={FavoritesStack}
                    options={{ title: "Favorites"}}
                ></Tab.Screen>
                <Tab.Screen
                    name="top-restaurants"
                    component={TopRestaurantStack}
                    options={{ title: "Top Restaurants"}}
                ></Tab.Screen>
                <Tab.Screen
                    name="search"
                    component={SearchStack}
                    options={{ title: "Search"}}
                ></Tab.Screen>
                <Tab.Screen
                    name="account"
                    component={AccountStack}
                    options={{ title: "Account"}}
                ></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
