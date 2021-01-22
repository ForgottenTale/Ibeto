
import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';


export default function CropList({ navigation }) {

    const data = [
        { name: "Rice",
    data:{
        humidity :"50%",
        ph: 7,
        phoshate : 8,
        nitrate : 10,
        currentprice: "Rs 50/kg", 
        predictedprice: "Rs 51/kg" ,
    }},
    { name: "Wheat", 
    data:{
        humidity :"70%",
        ph: 6,
        phoshate : 8,
        nitrate : 10,
        currentprice: "Rs 50/kg", 
        predictedprice: "Rs 51/kg" ,
    }}
    ]

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => { console.log(item.name); navigation.navigate('CropData', item); }}>
            <View style={styles.item}>
                <Text style={styles.itemName}>{item.name}</Text>
                <View>
                    <Text style={styles.itemName}>Current Price</Text>
                    <Text style={styles.itemName}>{item.data.currentprice}</Text>
                </View>
                <View>
                    <Text style={styles.itemName}>Predicted Price</Text>
                    <Text style={styles.itemName}>{item.data.predictedprice}</Text>
                </View>

            </View>

        </TouchableOpacity>
    )


    return (
        <View style={styles.container}>
            <View style={{ width: "90%", height: "100%" }}>

                <Text style={styles.subtitle}>Select one</Text>
                <View style={{ width: "100%" }}>

                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.name}
                    />




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



});
