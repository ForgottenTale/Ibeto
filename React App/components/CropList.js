
import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';


export default function CropList({ navigation }) {

    const data = [
        { name: "Rice",
    data:{
        humidity :"100cm",
        ph: 7,
        phoshate : 8,
        nitrate : 10,
        currentprice: "Rs 100 WPI", 
        predictedprice: "Rs 162 WPI" ,
    }},
    { name: "Wheat", 
    data:{
        humidity :"100cm",
        ph: 6,
        phoshate : 8,
        nitrate : 10,
        currentprice: "Rs 156 WPI", 
        predictedprice: "Rs 110 WPI" ,
    }},
    { name: "Maize", 
    data:{
        humidity :"100cm",
        ph: 6,
        phoshate : 8,
        nitrate : 10,
        currentprice: "Rs 110 WPI", 
        predictedprice: "Rs 112 WPI" ,
    }},
    { name: "Jute", 
    data:{
        humidity :"100cm",
        ph: 6,
        phoshate : 8,
        nitrate : 10,
        currentprice: "Rs 150 WPI", 
        predictedprice: "Rs 161 WPI" ,
    }}
    ]
    const pressHandler =(item)=>{
        item.ip = navigation.getParam('ip');
        item.id = navigation.getParam('id');
        navigation.navigate('CropData', item);
    }
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => {  pressHandler(item) }}>
            <View style={styles.item}>
                <Text style={styles.itemName}>{item.name}</Text>
                <View>
                    <Text style={styles.itemPrice}>Current Price</Text>
                    <Text style={styles.itemValue}>{item.data.currentprice}</Text>
                </View>
                <View>
                    <Text style={styles.itemPrice}>Predicted Price</Text>
                    <Text style={styles.itemValue}>{item.data.predictedprice}</Text>
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
        backgroundColor: "#F3F3F3",
        marginBottom: 20,
        justifyContent: 'space-around',
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        borderRadius:10

    },
    itemName: {
        fontFamily:"bold",
        color:"black",
        fontSize:12,
    },
    itemValue: {
        fontFamily:"bold",
        fontSize:12,
        color:"green",
    },
    itemPrice:{
        fontFamily:"regular",
        color:"black",
        fontSize:8
    }



});
