import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import MyAccount from '../screens/account/MyAccount'
import Login from '../screens/account/Login'
import SignUp from '../screens/account/SignUp'

const Stack = createStackNavigator()

export default function AccountStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="account"
                component={MyAccount}
                options={{title:"Account"}}
            ></Stack.Screen>
            <Stack.Screen
                name="login"
                component={Login}
                options={{title:"Sign In"}}
            ></Stack.Screen>
            <Stack.Screen
                name="signup"
                component={SignUp}
                options={{title:"Sign Up"}}
            ></Stack.Screen>
        </Stack.Navigator>
    )
}