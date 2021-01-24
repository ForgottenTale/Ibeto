
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { Button } from 'react-native-paper';
import axios from 'axios';


export default function DeviceData({ navigation }) {


    const [error, setError] = useState(false);
    const [Ph, setPh] = useState(0);
    const [nitrate, setNitrate] = useState(0);
    const [phosphate, setPhosphate] = useState(0);

    const pressHandler = () => {
    
        var url = "http://192.168.31.58:80/data";

        axios.get(url).then(response => {
     
            navigation.navigate('CropList');
        })
            .catch(error => {
               
                setError(true)
            });
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
                        color="#2F4553" onPress={() => { setError(false) }}> Retry </Button>
                </View>
            </View>
        )
    }
    else {
        return (
            <View style={styles.container}>
                <View style={{ width: "90%", height: "100%" }}>

                    <Text style={styles.subtitle}>Recieved soil data</Text>
                    <View style={styles.itemContainer}>
                        <View>
                            <View style={styles.item}>
                                <Text style={styles.itemName}>Ph</Text>
                                <Text style={styles.itemValue}>{Ph}</Text>
                            </View>
                            <View style={styles.item}>
                                <Text style={styles.itemName}>Nitrate</Text>
                                <Text style={styles.itemValue}>{nitrate}</Text>
                            </View>
                            <View style={styles.item}>
                                <Text style={styles.itemName}>Phosphate</Text>
                                <Text style={styles.itemValue}>{phosphate}</Text>
                            </View>
                        </View>


                        <Button
                            mode="contained"
                            style={{ width: "100%", height: 60, justifyContent: 'center', }}
                            labelStyle={{ color: "white", fontFamily: "bold", fontSize: 12 }}
                            color="#2F4553" onPress={pressHandler}> Search for crops </Button>

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
        width: "100%",
        height: 200,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: "auto",
        marginBottom: "auto"

    },
    itemContainer:{
        height:"85%",
        justifyContent:"space-between"
      }





});
