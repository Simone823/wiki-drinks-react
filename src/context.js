import { useState, useContext, createContext } from "react";

// useFetch custom hook
import useFetch from "./customHook/useFetch";

// App context
const AppContext = createContext();

// AppProvider component
const AppProvider = ({children}) => {

    // query serach cocktail
    const [queryCokctail, setQueryCocktail] = useState('gin');

    // is loading, is error, data, count
    const {isLoading, isError, data, count} = useFetch(`s=${queryCokctail}`, true);

    // search cocktail
    function searchCocktail (input) {
        setQueryCocktail(input);
    }

    return (
        <AppContext.Provider value={
            {
                queryCokctail,
                isLoading,
                isError,
                data,
                count,
                searchCocktail
            }
        }>
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