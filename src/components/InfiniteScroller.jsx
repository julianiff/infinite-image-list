import ImageList from "./ImageList";
import React, {useEffect, useReducer} from "react";
import styled from "styled-components";
import {ScrollReducer, setError, setFetchMore, setImages} from "../Reducer/ScrollReducer";

const ContainerWrapper = styled.div`
    position: relative;
`


const InfiniteScroller = () => {


    const [state, dispatch] = useReducer(ScrollReducer, {images: [], page: 1, fetchMore: true, error: null})
    const {fetchMore, images, page} = state;

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 600 < document.documentElement.offsetHeight) return;
        dispatch(setFetchMore());
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [fetchMore]);

    useEffect(() => {
        if (fetchMore) {
            const fetchData = async () => {
                const url = `https://picsum.photos/v2/list?width=200&limit=5&page=${page}`;
                const response = await fetch(url);
                const json = await response.json();
                dispatch(setImages(json));
            }
            fetchData().catch(err => dispatch(setError(err)))
        }
    }, [fetchMore, page])


    return (
        <ContainerWrapper>
            <ImageList
                images={images}
            />
        </ContainerWrapper>
    )
}

export default InfiniteScroller
