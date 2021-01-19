import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts,Montserrat_400Regular,Montserrat_700Bold,} from '@expo-google-fonts/montserrat';



export default function App() {

  let {fontsLoaded,error} = useFonts({
    regular:Montserrat_400Regular,
    bold: Montserrat_700Bold
  });

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome Back !</Text>
        <Text style={styles.subtitle}>Login to continue</Text>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title:{
    fontFamily:"bold",
    fontSize:24
  },
  subtitle:{
    fontFamily:"regular",
    fontSize:18
  }
});
