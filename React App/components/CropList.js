
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity,ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';
import axios from 'axios';


export default function DeviceData({ navigation }) {

    const data=[
        {name :"rice", currentprice :"Rs 50/kg",predictedprice:"Rs 51/kg"},
    ]

    const renderItem = ({ item }) => (
        <TouchableOpacity>
            <View style={styles.item}>
                <Text style={styles.itemName}>{item.name}</Text>
                <View>
                    <Text style={styles.itemName}>Current Price</Text>
                    <Text style={styles.itemName}>{item.currentprice}</Text>
                </View>
                <View>
                    <Text style={styles.itemName}>Predicted Price</Text>
                    <Text style={styles.itemName}>{item.predictedprice}</Text>
                </View>

            </View>

        </TouchableOpacity>
    )


    const pressHandler = () => {
     ;
        console.log("pressed")
       
    }
 
        return (
            <View style={styles.container}>
                <View style={{ width: "90%", height: "100%" }}>

                    <Text style={styles.subtitle}>Devices Connected</Text>
                    <View style={{ width: "100%" }}>

                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.key}
                    />


                        <Button mode="contained" style={{ width: "100%", height: 60, justifyContent: 'center', bottom: 0 }} color="blue" onPress={pressHandler}> Select </Button>

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
        width: "100%",
        height: 60,
        backgroundColor: "red",
        marginBottom: 20,
        justifyContent: 'space-between',
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',

    },
    itemName: {
        marginLeft: 20,
    },
    itemValue: {
        marginRight: 20,
    },
    image: {

        // height: "100%",
        width: "100%",
        height: 200,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center',
        justifyContent: 'center',
    
    
      }
    




});
