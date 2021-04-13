import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import Loading from '../../components/Loading'

export default function UserGuest() {
    const navigation = useNavigation();

    return (
       <ScrollView
            centerContent
            style={styles.viewBody}
       >
           <Image
                source={require("../../assets/restaurant-logo.png")}
                resizeMode="contain"
                style={styles.image}
           />
           <Text style={styles.title}>Consulta tu perfil en Restaurants</Text>
           <Text style={styles.description}>como describirias tu mejor restaruante? Busca y visualiza los mejores restaruantes Busca y visualiza los mejores restaruantes
           Busca y visualiza los mejores restaruantesBusca y visualiza los mejores restaruantes</Text>
           <Button 
                title="Ver tu Perfil"
                buttonStyle={styles.button}
                onPress={()=> navigation.navigate("login")}
           >

           </Button>
       </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewBody:{
        marginHorizontal: 30 
    },
    image:{
        height:600,
        width: "100%",
        marginBottom:10,              
    },
    title:{
        fontWeight:"bold",
        fontSize:19,
        marginBottom:10,
        textAlign:"center"
    },
    description:{
        textAlign: "justify", 
        marginBottom: 20, 
        color: "#a65273"
    },
    button:{
        backgroundColor:"#442484"
    }

})
