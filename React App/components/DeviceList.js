
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { Button } from 'react-native-paper';
import axios from 'axios';
import Loader from "./loader"
import { useTheme } from './provider/context';

export default function DeviceList({ navigation }) {
  const crop = useTheme();
  const crops = navigation.getParam('devices');

  const [device, setDevice] = useState(false);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (crops == null) {
      setDevice(true);
    }
  })


  const pressHandler = () => {
    navigation.navigate('DeviceConnect');

  }
  const DeviceData = (item) => {

    setLoader(true);
    var url = "http:/" + item.ip + ":80/data";

    axios.get(url).then(response => {
      setLoader(false);
      navigation.navigate('Data', response.data);
    })
      .catch(error => {
        setError(true)
        setLoader(false);
   
      });
  }
  const renderItem = ({ item }) => {

    return (
      <View style={{ flex: 1, margin: 1 }}>


        <TouchableOpacity onPress={() => { DeviceData(item) }}>
          <View style={styles.item}>
            <Text style={styles.itemName}>{item.name}</Text>
          </View>

        </TouchableOpacity>
      </View>)
  }


  if (error) {
    return (
      <View style={styles.container}>
        <View style={{
          width: "90%", height: "100%", height: "95%",
          justifyContent: "space-between"
        }}>
          <Image source={require('../assets/404.jpg')} style={styles.image} />



          <Button
            mode="contained"
            style={{ width: "100%", height: 60, justifyContent: 'center', }}
            labelStyle={{ color: "white", fontFamily: "bold", fontSize: 12 }}
            color="#2F4553" onPress={() => { setError(false) }}>Retry</Button>
        </View>
      </View>
    )
  }
  else if (loader) {
    return (
      <Loader />

    )
  }
  else {
    return (
      <View style={styles.container}>
        <View style={{ width: "90%", height: "100%" }}>

          <Text style={styles.subtitle}>Devices Connected</Text>
          <View style={styles.itemContainer}>

            {(device) ? <View style={styles.imageContainer}>
              <Image source={require('../assets/device.jpg')} style={styles.image} />
              <Text style={styles.subtitle}>No devices added</Text>
            </View> : null}


            <FlatList
              numColumns={2}
              data={crops}
              renderItem={renderItem}
              keyExtractor={item => item.name}
              style={{ flex: 1 }}
            />

            <View>
              <Button
                mode="contained"
                style={{ width: "100%", height: 60, justifyContent: 'center', }}
                labelStyle={{ color: "white", fontFamily: "bold", fontSize: 12 }}
                color="#2F4553" onPress={pressHandler}> Add devices </Button>
            </View>
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
    color: "#2F4553",
    fontFamily: "regular",
  },
  item: {
    width: "100%",
    margin: 1,
    borderRadius: 10,
    height: 60,
    marginBottom: 20,
    justifyContent: 'center',
    backgroundColor: "#F3F3F3",
    margin: 1,
  },
  itemName: {
    marginLeft: 20,
  },
  itemContainer: {
    width: "100%",
    height: "85%",
    justifyContent: "space-between",

  },
  image: {

    width: 250,
    height: 250,
    marginLeft: "auto",
    marginRight: "auto",
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: 'center',
    justifyContent: 'center',


  },
  imageContainer: {
    width: "100%",
    alignItems: 'center',
    justifyContent: "center"
  }




});
