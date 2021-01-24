
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, ActivityIndicator } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import axios from 'axios';



export default function DeviceConnect({ navigation }) {


  const pressNavigate = () => {
    navigation.navigate('DeviceData')
    console.log("done")
  }
  const pressHandler = () => {


    var url = "http:/" + ipAddress + ":80/data";

    axios.get(url).then(response => {
      console.log(response.data);
      setdeviceConnected(true);
    })
      .catch(error => {
        console.error(error)
        setError(true)
      });

  }

  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [ssid, setSsid] = React.useState('');
  const [wifipass, setWifiPass] = React.useState('');
  const [ipAddress, setipAddress] = React.useState('');
  const [deviceConnected, setdeviceConnected] = useState(false);

  if (error) {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/404.jpg')} style={styles.image}>

        </ImageBackground>

        <Button
          mode="contained"
          style={{ width: "100%", height: 60, justifyContent: 'center', }}
          labelStyle={{ color: "white", fontFamily: "bold", fontSize: 12 }}
          color="#2F4553" onPress={() => { setError(false) }}>Retry</Button>
      </View>
    )
  }

  if (deviceConnected) {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/Connected.jpg')} style={styles.image}>

        </ImageBackground>
        <Text style={{ marginTop: 20, marginBottom: 20 }}>Device Added</Text>
        <Button
          mode="contained"
          style={{ width: "100%", height: 60, justifyContent: 'center', }}
          labelStyle={{ color: "white", fontFamily: "bold", fontSize: 12 }}
          color="#2F4553" onPress={pressHandler}> Add devices </Button>

      </View>
    )
  }
  else if (loader) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>

    )
  }

  else {

    return (
      <View style={styles.container}>
        <View style={{ width: "90%", height: "100%" }}>
          <Text style={styles.subtitle}>Enter your WiFi credientials</Text>
          <View >
            <View style={styles.itemContainer}>
              {/* <TextInput style={{ marginBottom: 20, width: "100%" }} label="SSID" value={ssid} onChangeText={ssid => setSsid(ssid)} />
           <TextInput style={{ marginBottom: 20, width: "100%" }} label="Wifi Password" value={wifipass} onChangeText={wifipass => setWifiPass(wifipass)} /> */}
              <TextInput style={{ marginBottom: 20, width: "100%" }}
                label="IP Address"
                value={ipAddress}
                onChangeText={ipAddress => setipAddress(ipAddress)} mode="outlined"
                style={{ marginBottom: 20, width: "100%", color: "white", fontFamily: "regular", fontSize: 14 }} />
            </View>
            <Button
              mode="contained"
              style={{ width: "100%", height: 60, justifyContent: 'center', }}
              labelStyle={{ color: "white", fontFamily: "bold", fontSize: 12 }}
              color="#2F4553" onPress={pressNavigate}> Connect </Button>

          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    position: "relative",
    height: "100%"
  },
  title: {
    marginTop: 60
  },
  subtitle: {
    marginTop: 20,
    marginBottom: 20,
    fontFamily: "regular",
    fontSize: 12
  },

  image: {

    width: "100%",
    height: 200,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: 'center',
    justifyContent: 'center',


  },
  itemContainer: {
    height: "80%",
    justifyContent: "space-between"
  }


});
