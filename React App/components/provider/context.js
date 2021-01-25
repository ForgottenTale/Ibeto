import React, { useState, useContext, } from 'react';

const FoodContext = React.createContext();


export function useTheme() {
    return useContext(FoodContext);
}


export function FoodProvider({ children }) {


    const [state, setS] = useState([
        {
            title: "Rice",
            key: '1',
            devices: [{ name: "Device 1", ph: '0', nitrate: '0', phoshate: '0', key: '1' },
            { name: "Device 2", ph: '0', nitrate: '0', phoshate: '0', ip:'192.168.31.58' }]
        }, {
            title: "Rice",
            key: '2',
            devices: [{ name: "Device 1", ph: '0', nitrate: '0', phoshate: '0', key: '1' },
            { name: "Device 2", ph: '0', nitrate: '0', phoshate: '0', key: '2', ip:'192.168.31.58' }]
        }
    ])

    function Add(obj) {
        setS(obj);
        // console.log(state);
    }
    var data = {
        data: state,
        Add
    }
    return (
        <FoodContext.Provider value={data} >

            {children}


        </FoodContext.Provider>
    )
}
