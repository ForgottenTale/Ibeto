
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useTheme } from './provider/context';


export default function CropData({ navigation }) {


    var d = useTheme()

    const pressHandler = () => {
        var k = {
            title: "Wheat",
            key: '2',
            devices: [{ name: "Device 1", ph: '0', nitrate: '0', phoshate: '0', key: '1' },
            { name: "Device 1", ph: '0', nitrate: '0', phoshate: '0', key: '1' }]
        }
        d.Add(currentData => [...currentData, k]);
        // console.log(k.title)
        navigation.navigate('Dashboard')
    }
    const data = navigation.getParam('data');
    const name = navigation.getParam('name');



    return (
        <View style={styles.container}>
            <View style={{ width: "90%", height: "100%" }}>
                <Text style={styles.subtitle}>{name}</Text>

                <View style={styles.dataContainer}>
                    <View style={styles.itemContainer}>
                        <View style={styles.item}>
                            <Text style={styles.itemName}>Humidity</Text>
                            <Text style={styles.itemValue}>{data.humidity}</Text>

                        </View>
                        <View style={styles.item}>
                            <Text style={styles.itemName}>Current Price</Text>
                            <Text style={styles.itemValue}>{data.currentprice}</Text>

                        </View>
                        <View style={styles.item}>
                            <Text style={styles.itemName}>Predicted Price</Text>
                            <Text style={styles.itemValue}>{data.predictedprice}</Text>

                        </View>
                    </View>

                    <Button
                        mode="contained"
                        style={{ width: "100%", height: 60, justifyContent: 'center', }}
                        labelStyle={{ color: "white", fontFamily: "bold", fontSize: 12 }}
                        color="#2F4553" onPress={pressHandler}> Select </Button>

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
        fontFamily: "regular",
    },
    item: {
        width: "45%",
        height: 100,
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: "#F3F3F3",

    },
    itemContainer: {
        flexDirection: "row",
        flexWrap: 'wrap',
        justifyContent: "space-between",
    },
    itemName: {
        fontFamily: "bold",
        color: "black",
        fontSize: 10,
        marginLeft: 20,
        marginTop: 20
    },
    dataContainer: {
        width: "100%",
        height: "85%",
        justifyContent: "space-between",

    },
    itemValue: {
        fontFamily: "bold",
        fontSize: 16,
        color: "green",
        marginLeft: 20,
        marginTop: 10
    },






});
