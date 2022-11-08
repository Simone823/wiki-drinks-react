import { useState, useEffect } from "react";
import axios from "axios";

// search url drink name
const searchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?';

// single url drink detai
const singleUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?';

// useFetch custom hook
const useFetch = (query, type = false) => {
    // url
    const url = type ? searchUrl : singleUrl;

    // is loading
    const [isLoading, setIsLoading] = useState(true);

    // is error
    const [isError, setIsError] = useState(false);

    // data
    const [data, setData] = useState([]);

    // count data lenght
    const [count, setCount] = useState(0);

    // use effect on change url query axios get url
    useEffect(() => {
        // reset
        setIsError(false);
        setIsLoading(true);
        setCount(0);

        // axios
        axios.get(`${url}${query}`)
        .then((res) => {
            setData(res.data.drinks);
            setCount(res.data.drinks.length);
            setIsLoading(false);
        })
        .catch((err) => {
            setIsError(true);
            setCount(0);
            console.warn(err);
            setIsLoading(false);
        })
    }, [url, query]);

    return {
        isLoading,
        isError,
        data,
        count
    }
}

export default useFetch;