import React, { useState, useContext, } from 'react';

const FoodContext = React.createContext();


export function useTheme() {
    return useContext(FoodContext)
}


export function FoodProvider({ children }) {


    const [state, setState] = useState([
        {
            title: "Rice",
            key: '1',
            devices: [{ name: "Device 1", ph: '0', nitrate: '0', phoshate: '0', key: '1' },
            { name: "Device 1", ph: '0', nitrate: '0', phoshate: '0', key: '1' }]
        }, {
            title: "Rice",
            key: '2',
            devices: [{ name: "Device 1", ph: '0', nitrate: '0', phoshate: '0', key: '1' },
            { name: "Device 1", ph: '0', nitrate: '0', phoshate: '0', key: '1' }]
        }
    ])

    function setName(name) {
        setState({ name: name });
        console.log(state);
    }
    var data = {
        data: state,
        setName
    }
    return (
        <FoodContext.Provider value={data} >

            {children}


        </FoodContext.Provider>
    )
}
