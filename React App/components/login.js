import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
// import { useFonts, Montserrat_400Regular, Montserrat_700Bold, } from '@expo-google-fonts/montserrat';
import { TextInput, Button } from 'react-native-paper';
import * as firebase from 'firebase';


export default function Login() {

    // let { fontsLoaded, error } = useFonts({
    //   regular: Montserrat_400Regular,
    //   bold: Montserrat_700Bold
    // });
    const [text, setText] = React.useState('');
    const [password, setPassword] = React.useState('');
    const pressHandler = () => {
        firebase.auth()
            .signInWithEmailAndPassword(text, password)
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }
    return (
        <View style={styles.container}>



            <View style={styles.textCon}>
                <ImageBackground source={require("../assets/loginback.jpg")} style={styles.image}>
                    <Text style={styles.title}>Welcome Back !</Text>
                    <Text style={styles.subtitle}>Login to continue</Text>
                </ImageBackground>
            </View>

            <View style={{ width: "90%" }}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <TextInput style={{ marginBottom: 20, width: "100%" }} label="Email" value={text} onChangeText={text => setText(text)} />
                    <TextInput style={{ marginBottom: 20, width: "100%" }} label="Password" value={password} secureTextEntry={true} onChangeText={password => setPassword(password)} />


                </View>

                <Text style={{ marginBottom: 20, }}>Forgot password ?</Text>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Button mode="contained" style={{ width: "100%", height: 60, justifyContent: 'center', }} color="blue" onPress={pressHandler}> Sign In </Button>
                <Text style={{ marginTop: 60, }}>Don't have an account yet ?</Text>
                <Text>Sign Up</Text>
            </View>


        </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    textCon: {
        height: "50%",
        width: "100%",

    },
    title: {
        // fontFamily: "bold",
        fontSize: 24,
        color: "white"

    },
    subtitle: {
        // fontFamily: "regular",
        fontSize: 18,
        color: "white"
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center',
        justifyContent: 'center',


    }
});
