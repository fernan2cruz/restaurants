import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import firebase from 'firebase/app'

import UserGuest from './UserGuest'
import UserLogged from './UserLogged'

export default function Account() {
    const [login, setLogin] = useState(null)    

    firebase.auth().onAuthStateChanged((user)=>{
        user !== null ? setLogin(true) : setLogin(false)
    })   

    if (login == null) {
        return <Text>Loading...</Text>
    }

    return login ? <UserLogged></UserLogged> : <UserGuest></UserGuest>
  
    return (
        <View>
            <Text>Account</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
