import React, {useState, useEffect} from 'react'
import { StyleSheet } from 'react-native'
import { getCurrentUser } from '../../utils/actions'

import UserGuest from './UserGuest'
import UserLogged from './UserLogged'
import Loading from '../../components/Loading'


export default function MyAccount() {
    const [login, setLogin] = useState(null)    

    useEffect (()=> {   
        const user = getCurrentUser()
        user ? setLogin(true) : setLogin(false)
    }, [])    
    
    if (login == null) {
        console.log("Loading...")
        return <Loading isVisible={true} text="Loading..."/>
    }

    return login ? <UserLogged></UserLogged> : <UserGuest></UserGuest>

}

const styles = StyleSheet.create({

})