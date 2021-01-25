
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native';

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
      <View style={{flex: 1,
        margin: 1,}}>
        <TouchableOpacity>
          <LinearGradient
            colors={['#F3F3F3', '#F3F3F3']}
            style={styles.button}>

            <Text style={styles.itemName}>{item.title}</Text>
            <Image source={require("../assets/wheat.png")} style={styles.itemImage} />

          </LinearGradient>


        </TouchableOpacity>
      </View>)
  }



  return (
    <View style={styles.container}>
      <View style={{ width: "90%", height: "100%" }}>

        <Text style={styles.subtitle}>Crops</Text>
        <View style={styles.itemContainer}>
          {/* <View style={styles.cropList}> */}
          <FlatList
            numColumns={2}
            data={crops}
            renderItem={renderItem}
            keyExtractor={item => item.key}
            style={{ flex: 1, }}
          />
          {/* </View> */}

          <View >

            <Button
              mode="contained"
              style={{ width: "100%", height: 60, justifyContent: 'center', }}
              labelStyle={{ color: "white", fontFamily: "bold", fontSize: 12 }}
              color="#2F4553" onPress={pressHandler}> Add a new crop </Button>

            <Button mode="contained"
              style={{
                width: "100%", height: 60, justifyContent: 'center'
              }}
              labelStyle={{
                color: "white",
                fontFamily: "bold",
                fontSize: 12
              }}
              color="#2F4553" onPress={signOut}> Sign out </Button>
          </View >

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    position: "relative",
    height: "100%"

  },

  subtitle: {
    marginTop: 20,
    marginBottom: 20,
    color: "#2F4553",
    fontFamily: "regular",
  },

  itemName: {
    marginLeft: 20,
    marginTop: 20,
    fontFamily: "regular",
    fontSize: 12
  },
  button: {
    width: "90%",
    height: 100,
    marginBottom: 20,
    flex: 1,
    margin: 1,
    borderRadius:10

  },
  itemContainer: {
    height: "85%",
    justifyContent: "space-between"
  },
  cropList: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: 'wrap',

  },
  itemImage: {
    width: 45,
    height: 45,
    marginLeft: "auto",
    marginRight: "auto"
  }



});
