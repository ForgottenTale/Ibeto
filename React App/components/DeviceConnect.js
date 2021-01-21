
import React,{useState} from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import { TextInput, Button } from 'react-native-paper';
import { IconButton, Colors } from 'react-native-paper';



export default function DeviceConnect({navigation}) {
  const pressHandler=()=>{
    navigation.navigate('DeviceList')
    }
    const [ssid, setSsid] = React.useState('');
    const [wifipass, setWifiPass] = React.useState('');

  return (
    <View style={styles.container}>
       <View style={{ width: "90%",height: "100%" }}>
           <Text style={styles.subtitle}>Enter your WiFi credientials</Text>
           <View >
           <TextInput style={{ marginBottom: 20, width: "100%" }} label="SSID" value={ssid} onChangeText={ssid => setSsid(ssid)} />
           <TextInput style={{ marginBottom: 20, width: "100%" }} label="Wifi Password" value={wifipass} onChangeText={wifipass => setWifiPass(wifipass)} />
           <Button mode="contained" style={{ width: "100%", height: 60, justifyContent: 'center', }} color="blue" onPress={pressHandler}> Connect </Button>
           </View>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    position:"relative",
    height: "100%"
  },
  title:{
      marginTop : 60
  },
  subtitle:{
    marginTop : 20,
    marginBottom:20
  },
  
  


});
