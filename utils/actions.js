import {firebaseApp} from './firebase'
import firebase from 'firebase/app'
import 'firebase/firestore'

require('firebase/auth')

const db = firebase.firestore(firebaseApp)

export const isUserLogged = () => {
    let isLogged = false

    firebase.auth().onAuthStateChanged((user)=>{
        user !== null && (isLogged = true)
    })  
    
    return isLogged
}

export const getCurrentUser = () =>{
    return firebase.auth().currentUser
}