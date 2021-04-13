import React from 'react'
import { ActivityIndicator,StyleSheet, Text, View } from 'react-native'
import { Overlay } from 'react-native-elements/dist/overlay/Overlay'

export default function Loading({isVisible, text}) {
    return (
        <Overlay
            isVisible={isVisible}
            windowBackgroundColor="rgba(0,0,0,0.5)"
            overlayBackgroundColor="transparent"
            overylayStyle={styles.overlay}
        >
            <View styles={styles.view}>
                <ActivityIndicator
                    size="large"
                    color="#442484"
                />
                {
                    text && <Text styles={styles.text}>{text}</Text>
                }
                
            </View>
        </Overlay>
    )
}

const styles = StyleSheet.create({
    overlay:{
        height: 200,
        width: 400,
        backgroundColor : "#fff",
        borderColor: "#442484",
        borderWidth: 2,
        borderRadius: 10
    },
    view:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        color:"#442484",
        marginTop: 10
    }
})
