
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { Button } from 'react-native-paper';


import { useTheme } from './provider/context';

export default function DeviceList({ navigation }) {
  const crop = useTheme();
  const crops = {}

  const [device, setDevice] = useState(true);



  const pressHandler = () => {
    navigation.navigate('DeviceConnect');
  }
  const renderItem = ({ item }) => {

    return (
      <TouchableOpacity>
        <View style={styles.item}>
          <Text style={styles.itemName}>{item.devices.name}</Text>
        </View>

      </TouchableOpacity>)
  }



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
            data={crops}
            renderItem={renderItem}
            keyExtractor={item => item.key}
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
    height: 60,
    backgroundColor: "red",
    marginBottom: 20,
    justifyContent: 'center',
  },
  itemName: {
    marginLeft: 20,
  },
  itemContainer: {
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
