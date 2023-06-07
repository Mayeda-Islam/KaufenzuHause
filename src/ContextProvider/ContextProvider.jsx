import React from 'react';
import { createContext } from 'react';

export const Context = createContext()


const ContextProvider = ({ children }) => {
    const authInfo = {
        name: 'Miskatur Rahman'
    }
    return (
        <Context.Provider value={authInfo}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;