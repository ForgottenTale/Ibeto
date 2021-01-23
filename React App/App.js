import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState} from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Login from './components/login';
import Routes from './routes/routes';
import * as firebase from 'firebase';
import {firebaseConfig} from './config';
// firebase.initializeApp(firebaseConfig);


export default function App() {

 const [login,setLogin] = useState(false);
  
useEffect(()=>{
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
   
    firebase.auth().onAuthStateChanged((user)=>{
      if (!user) {
      setLogin(false);
      console.log("Signin")
      }
      else{
        setLogin(true);
        console.log("Logged in")
      }
      
    })
  }
},[])




  return (
    <View style={styles.container}>
      
    {(login)?<Routes/>:<Login/>}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height:"100%"
  },
 
});
