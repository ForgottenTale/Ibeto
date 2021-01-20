import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
// import { useFonts, Montserrat_400Regular, Montserrat_700Bold, } from '@expo-google-fonts/montserrat';
import { TextInput, Button } from 'react-native-paper';



export default function App() {

  // let { fontsLoaded, error } = useFonts({
  //   regular: Montserrat_400Regular,
  //   bold: Montserrat_700Bold
  // });
  const [text, setText] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={{ width: "90%", height: "100%" ,backgroundColor:"blue"}}>


        <View style={styles.textCon}>
          <ImageBackground source={require("./assets/loginback.jpg")} style={styles.image}>
            <Text style={styles.title}>Welcome Back !</Text>
            <Text style={styles.subtitle}>Login to continue</Text>
          </ImageBackground>
        </View>

        <View style={{ alignItems: 'center', justifyContent: 'center'}}>
          <TextInput style={{ marginBottom: 20, width: "100%" }} label="Email" value={text} onChangeText={text => setText(text)} />
          <TextInput style={{ marginBottom: 20, width: "100%" }} label="Password" value={password} secureTextEntry={true} onChangeText={password => setPassword(password)} />


        </View>

        <Text style={{ marginBottom: 20, }}>Forgot password ?</Text>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Button mode="contained" style={{ width: "100%" }} color="blue" onPress={() => console.log('Pressed')}> Sign In </Button>
          <Text style={{ marginTop: 60, }}>Don't have an account yet ?</Text>
          <Text>Sign Up</Text>
        </View>

        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCon: {
    height: "50%"
  },
  title: {
    // fontFamily: "bold",
    fontSize: 24,
    color:"white"
  },
  subtitle: {
    // fontFamily: "regular",
    fontSize: 18,
    color:"white"
  },
  image: {
    width:"100%",
    height:"100%",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: 'center',
    justifyContent: 'center',
  }
});
