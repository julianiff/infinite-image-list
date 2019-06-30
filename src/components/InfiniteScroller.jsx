import ImageList from "./ImageList";
import React, {useReducer} from "react";
import styled from "styled-components";
import {ScrollReducer, setImages} from "../Reducer/ScrollReducer";
import ReloadTrigger from "./FnTrigger";
import useFetch from "../hooks/useFetch";

const ContainerWrapper = styled.div`
    position: relative;
`





const InfiniteScroller = () => {


    const [state, dispatch] = useReducer(ScrollReducer, {images: [], page: 1, fetched: false})
    const {fetched, images, page} = state;


    return (
        <ContainerWrapper>
            <ReloadTrigger
                dispatch={dispatch}
                fetched={fetched}
                page={page}
            />
            <ImageList
                images={images}
            />
        </ContainerWrapper>
    )
}

export default InfiniteScroller
