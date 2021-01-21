import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import Login from './components/login';
import Dashboard from './components/Dashboard';
import DeviceList from './components/DeviceList';
import DeviceConnect from './components/DeviceConnect';
import Routes from './routes/routes';

export default function App() {

  

  return (
    <View style={styles.container}>
      
      {/* <Dashboard/> */}
      {/* <Login/> */}
      {/* <DeviceList/> */}
      {/* <DeviceConnect/> */}
      <Routes/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
 
});
