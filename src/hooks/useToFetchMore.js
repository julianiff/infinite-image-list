import {useEffect} from "react";
import {setError, setImages} from "../reducer/ScrollActions";
import * as axios from "axios";

export const useToFetchMore = (fetchMore, page, dispatch, fetchUrl) => {
    useEffect(() => {
        if (fetchMore) {
            const url = `${fetchUrl}${page}`;
            axios.get(url)
                .then(response => dispatch(setImages(response.data)))
                .catch(err => dispatch(setError(err)))
        }
    }, [fetchMore, page, dispatch, fetchUrl])
}
