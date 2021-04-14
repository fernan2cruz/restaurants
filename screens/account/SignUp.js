import React from 'react'
import { ScrollView ,StyleSheet, Text, View, Image } from 'react-native'
import { Divider } from 'react-native-elements'
import SignUpForm from '../../components/account/SignUpForm'

export default function SignUp() {
    return (
        <View>
            <SignUpForm></SignUpForm>
        </View>
    )
}

const styles = StyleSheet.create({})
