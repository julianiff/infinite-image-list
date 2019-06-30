import {useEffect} from "react";
import {setError, setImages} from "../Reducer/ScrollActions";

export const useToFetchMore = (fetchMore, page, dispatch) => {
    useEffect(() => {
        if (fetchMore) {
            const fetchData = async () => {
                const url = `https://picsum.photos/v2/list?width=200&limit=8&page=${page}`;
                const response = await fetch(url);
                const json = await response.json();
                dispatch(setImages(json));
            }
            fetchData().catch(err => dispatch(setError(err)))
        }
    }, [fetchMore, page, dispatch])
}
