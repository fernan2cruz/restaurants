import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'

import RestaurantStack from './RestaurantStack'
import AccountStack from './AccountStack'
import FavoritesStack from './FavoritesStack'
import SearchStack from './SearchStack'
import TopRestaurantStack from './TopRestaurantStack'



const Tab = createBottomTabNavigator()

export default function Navigation() {
    const screenOption = (screen, color) => {
        let iconName 

        switch (screen.name) {
            case "restaurants":
                iconName = "compass-outline"
                break;
            case "favorites":
                iconName = "heart-outline"
                break;
            case "top-restaurants":
                iconName = "align-vertical-top"
                break;
            case "search":
                iconName = "glasses"
                break;
            case "account":
                iconName = "account-cog-outline"
                break;
        
            default:
                break;
        }
        return (
            <Icon
                type="material-community"
                name={iconName}
                size={22}
                color={color}
            />
        )
        
    }

    return (
        <NavigationContainer>
            
            <Tab.Navigator
                initialRouteName="restaurants"
                //{{}} Esto es para los objetos
                tabBarOptions={{
                    inactiveTintColor:"#a17dc3",
                    activeTintColor:"#442484"
                }}
                screenOptions={({route})=>({
                    tabBarIcon: ({ color }) => screenOption(route, color)
                })}
            >
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
