import React from 'react'
import { ScrollView ,StyleSheet, Text, View, Image } from 'react-native'
import { Divider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function Login() {
    

    return (
        <ScrollView>
            <Image
                source={require("../../assets/restaurant-logo.png")}
                resizeMode="contain"
                style={styles.image}                
            />
            <View 
                style={styles.container}
            >
                <Text>Login Form</Text>
                <CreateAccount/>
                <Divider style={styles.divider}/>
            </View>
        </ScrollView>
    )
}

function CreateAccount(props){
    const navigation = useNavigation();
    return(
        <Text 
            style={styles.register}
            onPress={()=> navigation.navigate("signup")}
        >
            Dont have an Account?{" "}
            <Text style={styles.btnRegister}>Sign Up</Text>
        </Text>
    )
}

const styles = StyleSheet.create({
    image:{
        height:150,
        width: "100%",
        marginHorizontal:20
    },

    container:{
        marginHorizontal:40
    },

    divider:{
        backgroundColor:"#442484",
        margin: 40
    },
    register:{
        marginTop: 15,
        width: 210,
        marginHorizontal:10,
        alignSelf:"center"

    },
    btnRegister:{        
        color:"#442484",
        fontWeight:"bold"
    }
})
