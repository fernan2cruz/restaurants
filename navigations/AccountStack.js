import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import MyAccount from '../screens/account/MyAccount'

const Stack = createStackNavigator()

export default function AccountStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="account"
                component={MyAccount}
                options={{title:"Account"}}
            ></Stack.Screen>
        </Stack.Navigator>
    )
}