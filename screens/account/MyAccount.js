import React, {useState} from 'react'
import { StyleSheet } from 'react-native'
import firebase from 'firebase/app'
import {firebaseApp} from '../../utils/firebase'
require('firebase/auth')

import UserGuest from './UserGuest'
import UserLogged from './UserLogged'
import Loading from '../../components/Loading'


export default function MyAccount() {
    const [login, setLogin] = useState(null)    

    firebase.auth().onAuthStateChanged((user)=>{
        user !== null ? setLogin(true) : setLogin(false)
    })       
    if (login == null) {
        console.log("Loading...")
        return <Loading isVisible={true} text="Loading..."/>
    }

    return login ? <UserLogged></UserLogged> : <UserGuest></UserGuest>

}

