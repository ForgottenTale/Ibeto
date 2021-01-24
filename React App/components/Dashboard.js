
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';

import { Button } from 'react-native-paper';
import * as firebase from 'firebase';
import { useTheme } from './provider/context'
import { LinearGradient } from 'expo-linear-gradient';

export default function DeviceConnect({ navigation }) {

  const crop = useTheme();
  const crops = crop.data

  const pressHandler = () => {
    navigation.navigate('DeviceList')
  }

  const signOut = () => {
    firebase.auth().signOut()

  }

  const renderItem = ({ item }) => {

    return (
      <TouchableOpacity>
        <LinearGradient
          colors={['#EEFAFF', '#F8F8F8']}
          style={styles.button}>

          <Text style={styles.itemName}>{item.title}</Text>

        </LinearGradient>


      </TouchableOpacity>)
  }



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

          <Button
            mode="contained"
            style={{ width: "100%", height: 60, justifyContent: 'center', }}
            labelStyle={{ color: "white", fontFamily: "bold", fontSize: 12 }}
            color="#2F4553" onPress={pressHandler}> Add a new crop </Button>

          <Button mode="contained"
            style={{ width: "100%", height: 60, justifyContent: 'center', }}
            labelStyle={{ color: "white", 
            fontFamily: "bold", 
            fontSize: 12 }}
            color="#2F4553" onPress={signOut}> Sign out </Button>

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
    marginTop: 60,
    fontFamily: "bold"
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
  button: {
    width: "100%",
    height: 60,
    justifyContent: 'center',
    // position:"absolute",
    // top:0,
    // right:0
  }



});
