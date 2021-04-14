import React from 'react'
import { ScrollView ,StyleSheet, Text, View, Image} from 'react-native'
import { Divider, Input, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';


export default function SignUpForm() {
    return (
      <View>
          <Input 
             containerStyle={styles.input}
             placeholder="Email"
          ></Input>
          <Input 
             containerStyle={styles.input}
             placeholder="Password"
             password={true}
             secureTextEntry={true}
          ></Input>          
          <Input 
             containerStyle={styles.input}
             placeholder="Password Confirmation"
             password={true}
             secureTextEntry={true}
          ></Input>
          <Button
            title="Sign Up"
            containerStyle={styles.btnContainer}
            buttonStyle={styles.btn}
          />
      </View>
    )
}

const styles = StyleSheet.create({
    form:{
        marginTop:30
    },
    input:{
        width: "100%"
    },
    btnContainer:{
        marginTop:20,
        width: "95%",
        alignSelf:"center"
    },
    btn:{
        backgroundColor:"#442484"
    }
   
})
