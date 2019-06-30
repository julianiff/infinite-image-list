import {useEffect, useState} from 'react';

/**
 * Fetch hook for the base class
 * @param url
 * @param defaultValue
 * @returns {{response}}
 */
const useFetch = (url, defaultValue) => {

    const [response, setResponse] = useState(defaultValue);


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const json = await response.json();
            setResponse(json);
        }
        fetchData().catch(err => console.warn(err))
    }, [url])

    return {response}

}


export default useFetch;
