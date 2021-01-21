import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Dashboard from'../components/Dashboard';
import DeviceConnect from '../components/DeviceConnect';
import DeviceList from '../components/DeviceList';

const screens ={
    Dashboard :{
        screen : Dashboard
    },
    
    DeviceList:{
        screen: DeviceList,
        navigationOptions:{
            title:"Devices"
        }
    },
    DeviceConnect:{
        screen: DeviceConnect,
        navigationOptions:{
            title:"Connect a new device"
        }
    },

   
    
   

}

const routes = createStackNavigator(screens);

export default createAppContainer(routes);