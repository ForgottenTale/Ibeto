import React, { useState, useContext,} from 'react';

const FoodContext = React.createContext();


export function useTheme() {
    return useContext(FoodContext)
}


export function FoodProvider({ children }) {


    const [state, setState] = useState({ name: "Jack" })

    function setName(name) {
        setState({name: name});
        console.log(state);
    }
    var data = {
        name: state.name,
        setName
    }
    return (
        <FoodContext.Provider value={data} >
            
                {children}
           

        </FoodContext.Provider>
    )
}
