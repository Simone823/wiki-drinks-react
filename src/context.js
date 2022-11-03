import { useState, useContext, createContext } from "react";

// App context
const AppContext = createContext();

// AppProvider component
const AppProvider = ({children}) => {
    return (
        <AppContext.Provider value="test app context">
            {children}
        </AppContext.Provider>
    );
}

// app global context hook
const useAppGlobalContext = () => {
    return useContext(AppContext);
} 

// export AppProvider, useAppGlobalContext
export {AppProvider, useAppGlobalContext};