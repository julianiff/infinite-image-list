import {useEffect} from "react";
import {setFetchMore} from "../Reducer/ScrollActions";


export const useScrollHandler = (fetchMore, dispatch) => {
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop + 600 < document.documentElement.offsetHeight) return;
            dispatch(setFetchMore());
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [fetchMore, dispatch]);
};

