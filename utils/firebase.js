import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB8uZJAT3iaC-nntqIczv5KkLdB_7kF9_M",
    authDomain: "react-restaurants-346e5.firebaseapp.com",
    projectId: "react-restaurants-346e5",
    storageBucket: "react-restaurants-346e5.appspot.com",
    messagingSenderId: "84162378983",
    appId: "1:84162378983:web:c8f1bcb5d4e9798a49b642"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)