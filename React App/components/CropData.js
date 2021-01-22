
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';
import axios from 'axios';


export default function CropData({ navigation }) {

    // const data =[da]



    const pressHandler = () => {

        console.log("pressed")
        console.log(navigation.getParam('data'))

    }
    const data = navigation.getParam('data');
    const name = navigation.getParam('name');

    return (
        <View style={styles.container}>
            <View style={{ width: "90%", height: "100%" }}>
            <Text style={styles.subtitle}>{name}</Text>

                <View style={{ width: "100%", justifyContent: "center" }}>
                    <View style={styles.item}>
                        <Text style={styles.itemName}>Humidity</Text>
                        <Text style={styles.itemName}>{data.humidity}</Text>

                    </View>

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
        width: "50%",
        height: 60,
        backgroundColor: "red",
        marginBottom: 20,
        justifyContent: 'space-around',
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',

    },
    itemName: {
       
    },
    





});
