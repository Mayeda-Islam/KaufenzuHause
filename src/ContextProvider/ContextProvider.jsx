import React from 'react';
import { createContext } from 'react';

export const Context = createContext()


const ContextProvider = ({ children }) => {
    const [cart, setCart] = React.useState([{}])
    const context = {
        cart
    }
    return (
        <Context.Provider value={context}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;