import {useEffect} from "react";
import {setFetchMore} from "../reducer/ScrollActions";


export const useScrollHandler = (fetchMore, dispatch, treshold) => {
    useEffect(() => {
        const positionAboveThreshold = (treshold) => {
            return window.innerHeight + document.documentElement.scrollTop + treshold < document.documentElement.offsetHeight;
        }

        const handleScroll = () => {
            if (positionAboveThreshold(treshold)) return;
            dispatch(setFetchMore());
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [fetchMore, dispatch, treshold]);
};

