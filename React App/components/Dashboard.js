
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';

import {  Button } from 'react-native-paper';
import * as firebase from 'firebase';

export default function DeviceConnect({ navigation }) {


  const [crops, setCrop] = useState([
    {
      title: "Rice",
      key: '1',
      Devices: [
        { name: "Device 1", ph: '0', nitrate: '0', phoshate: '0', key: '1' }
      ]
    },
    {
      title: "Wheat",
      key: '2',
      Devices: [
        { name: "Device 2", ph: '0', nitrate: '0', phoshate: '0', key: '1' }
      ]
    },

  ])

  const pressHandler = () => {
    navigation.navigate('DeviceList', crops)
    console.log("pressed")
  }

  const signOut=()=>{
    
firebase.auth()
.signOut()
.then(() => console.log('User signed out!'));
  }
  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.item}>
        <Text style={styles.itemName}>{item.title}</Text>
      </View>

    </TouchableOpacity>
  )


  return (
    <View style={styles.container}>
      <View style={{ width: "90%", height: "100%" }}>

        <Text style={styles.subtitle}>Crops</Text>
        <View >
        
            <FlatList
              data={crops}
              renderItem={renderItem}
              keyExtractor={item => item.key}
            />
         
          <Button mode="contained" style={styles.button} color="blue" onPress={pressHandler}> Add a new crop </Button>
          <Button mode="contained" style={styles.button} color="blue" onPress={signOut}> Sign out </Button>

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
    marginBottom: 20
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
  button: {
    width: "100%",
    height: 60,
    justifyContent: 'center',
    // position:"absolute",
    // top:0,
    // right:0
  }



});
