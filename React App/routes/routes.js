import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Dashboard from '../components/Dashboard';
import DeviceConnect from '../components/DeviceConnect';
import DeviceList from '../components/DeviceList';
import DeviceData from '../components/DeviceData';
import CropList from '../components/CropList';
import Login from '../components/login'

const screens = {
    Dashboard: {
        screen: Dashboard
    },

    DeviceList: {
        screen: DeviceList,
        navigationOptions: {
            title: "Devices"
        }
    },
    DeviceConnect: {
        screen: DeviceConnect,
        navigationOptions: {
            title: "Connect a new device"
        }
    },
    DeviceData: {
        screen: DeviceData,
        navigationOptions: {
            title: "Devices data"
        }

    },
    CropList:{
        screen: CropList,
        navigationOptions: {
            title: "Suggested Crops"
        }
    }





}

const routes = createStackNavigator(screens);

export default createAppContainer(routes);