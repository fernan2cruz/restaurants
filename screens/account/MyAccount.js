import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import firebase from 'firebase/app'
import {firebaseApp} from '../../utils/firebase'

import UserGuest from './UserGuest'
import UserLogged from './UserLogged'


export default function MyAccount() {
    const [login, setLogin] = useState(null)    

    firebase.auth().onAuthStateChanged((user)=>{
        user !== null ? setLogin(true) : setLogin(false)
    })   
    console.log(login)
    if (login == null) {
        console.log("Loading...")
        return <Text>Loading...</Text>
    }

    return login ? <UserLogged></UserLogged> : <UserGuest></UserGuest>

}

