
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native';
// import { Button } from 'react-native-paper';

import { useTheme } from './provider/context'

export default function DeviceList({ navigation }) {
  const crop = useTheme();
  const crops = {}



  const pressHandler = () => {
    navigation.navigate('DeviceConnect')
    console.log("pressed")
  }
  const renderItem = ({ item }) => {
    console.log(item.devices.key)
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
        <View >
          <FlatList
            data={crops}
            renderItem={renderItem}
            keyExtractor={item => item.key}
          />

          <Button mode="contained" style={{ width: "100%", height: 60, justifyContent: 'center', }} color="blue" onPress={pressHandler}> Add device </Button>

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
  }




});
