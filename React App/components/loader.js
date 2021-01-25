import React from 'react';
import {  View,ActivityIndicator } from 'react-native';

export default function Loader() {
    
return (<View style={{height:"100%",alignItems: 'center',justifyContent:"center"}}>
<ActivityIndicator size="large" color="#2F4553"/>
</View>)
}
