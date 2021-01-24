import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold, } from '@expo-google-fonts/montserrat';
import { TextInput, Button } from 'react-native-paper';
import * as firebase from 'firebase';


export default function Login() {

    let { fontsLoaded, error } = useFonts({
        regular: Montserrat_400Regular,
        bold: Montserrat_700Bold
    });


    const [text, setText] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errort, setError] = React.useState(false);
    const [error2, setError2] = React.useState(false);

    const pressHandler = () => {
        if (text === '' || password === '') {
            setError2(true);
        }
        else {
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
                        setError(true)
                    }

                    console.error(error);
                });
        }
    }
    // if(fontsLoaded){
    return (

        <View style={styles.container}>



            <View style={styles.textCon}>

                <Text style={styles.title}>Welcome Back !</Text>
                <Text style={styles.subtitle}>Login to continue</Text>

            </View>

            <View style={{ width: "85%" }}>
                {(errort) ? <Text
                    style={{
                        color: "red",
                        color: "red",
                        fontFamily: "regular",
                        fontSize: 12,
                        fontStyle: "italic"
                    }}> *Invalid email or password</Text> : null}

                {(error2) ? <Text
                    style={{
                        color: "red",
                        color: "red",
                        fontFamily: "regular",
                        fontSize: 12,
                        fontStyle: "italic"
                    }}> *You cannot leave it empty</Text> : null}
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>

                    <TextInput
                        mode="outlined"
                        style={{ marginBottom: 20, width: "100%", color: "white", fontFamily: "regular", fontSize: 14 }}
                        label="Email"
                        value={text}
                        onChangeText={text => setText(text)}
                        selectionColor="#2F4553"
                        underlineColor="white"
                    />

                    <TextInput
                        mode="outlined"
                        style={{ marginBottom: 20, width: "100%", color: "white", fontFamily: "regular", fontSize: 14 }}
                        label="Password"
                        value={password}
                        secureTextEntry={true}
                        onChangeText={password => setPassword(password)}
                        selectionColor="#2F4553"
                        underlineColor="white" />


                </View>

                <Text style={{ marginBottom: 20, fontFamily: "regular", fontSize: 12 }}>Forgot password ?</Text>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>

                    <Button
                        mode="contained"
                        style={{ width: "100%", height: 60, justifyContent: 'center', }}
                        labelStyle={{ color: "white", fontFamily: "bold", fontSize: 12 }}
                        color="#2F4553" onPress={pressHandler}> Sign In </Button>


                    <Text style={{ marginTop: 40, color: "#2F4553", fontFamily: "regular", fontSize: 12 }}>Don't have an account yet ?</Text>
                    <Text style={{ color: "#2F4553", fontFamily: "bold", fontSize: 12 }}>Sign Up</Text>
                </View>


            </View>
        </View >

    );

    // }
    // else{
    //     return <Text>loading</Text>
    // }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',

    },
    textCon: {
        height: "35%",
        width: "100%",

        alignItems: 'center',
        justifyContent: "center"

    },
    title: {
        fontFamily: "bold",
        fontSize: 20,
        color: "#2F4553"

    },
    subtitle: {
        fontFamily: "regular",
        fontSize: 14,
        color: "#2F4553",
        opacity: .3
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center',
        justifyContent: 'center',


    },
    linearGradient: {
        width: 60,
        height: 70
    },
});
