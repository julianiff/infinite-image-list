import {useEffect} from "react";
import {setError, setImages} from "../reducer/ScrollActions";
import * as axios from "axios";

export const useToFetchMore = (fetchMore, page, dispatch, fetchUrl, paginationParam) => {
    useEffect(() => {
        if (fetchMore) {
            const url = `${fetchUrl}`;
            axios.get(url, {
                params: {
                    [paginationParam]: page
                }
            })
                .then(response => dispatch(setImages(response.data)))
                .catch(err => dispatch(setError(err)))
        }
    }, [fetchMore, page, dispatch, fetchUrl, paginationParam])
}
