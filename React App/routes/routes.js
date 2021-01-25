import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Dashboard from '../components/Dashboard';
import DeviceConnect from '../components/DeviceConnect';
import DeviceList from '../components/DeviceList';
import DeviceData from '../components/DeviceData';
import CropList from '../components/CropList';
import CropData from '../components/CropData';

import React from 'react';
import {  Text } from 'react-native';

const screens = {
    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            headerTitle:  () => (<Text style={{ fontFamily: "bold" }}>Dashboard</Text> )
        },
    },

    DeviceList: {
        screen: DeviceList,
        navigationOptions: {
            headerTitle:  () => (<Text style={{ fontFamily: "bold" }}>Devices</Text> )
        },
       
    },
    DeviceConnect: {
        screen: DeviceConnect,
        navigationOptions: {
            headerTitle:  () => (<Text style={{ fontFamily: "bold" }}>Connect a new device</Text> )
        }
    },
    DeviceData: {
        screen: DeviceData,
        navigationOptions: {
            headerTitle:  () => (<Text style={{ fontFamily: "bold" }}>Device data</Text> )
        }

    },
    CropList:{
        screen: CropList,
        navigationOptions: {
            headerTitle:  () => (<Text style={{ fontFamily: "bold" }}>Suggested Crops</Text> )
        }
    },
    CropData:{
        screen: CropData,
        navigationOptions: {
            headerTitle:  () => (<Text style={{ fontFamily: "bold" }}>Crop data</Text> )
        }
    }





}

const routes = createStackNavigator(screens);

export default createAppContainer(routes);