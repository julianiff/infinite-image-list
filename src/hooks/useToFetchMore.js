import {useEffect} from "react";
import {setError, setImages} from "../Reducer/ScrollActions";
import {fetchUrl} from "../utils/constants";

export const useToFetchMore = (fetchMore, page, dispatch) => {
    useEffect(() => {
        if (fetchMore) {
            const fetchData = async () => {
                const url = `${fetchUrl}${page}`;
                const response = await fetch(url);
                const json = await response.json();
                dispatch(setImages(json));
            }
            fetchData().catch(err => dispatch(setError(err)))
        }
    }, [fetchMore, page, dispatch])
}
