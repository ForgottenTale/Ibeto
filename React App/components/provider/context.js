import React, { useState, useContext, } from 'react';

const FoodContext = React.createContext();


export function useTheme() {
    return useContext(FoodContext);
}


export function FoodProvider({ children }) {


    const [state, setS] = useState([])

    function Add(obj) {
        setS(obj);

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
