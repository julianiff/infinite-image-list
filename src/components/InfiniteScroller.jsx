import ImageList from "./ImageList";
import React, {useReducer} from "react";
import styled from "styled-components";
import {ScrollReducer} from "../Reducer/ScrollReducer";
import {InitialScrollState} from "../Reducer/InitialScrollState";
import {useScrollHandler} from "../hooks/useScrollHandler";
import {useToFetchMore} from "../hooks/useToFetchMore";

const ContainerWrapper = styled.div`
    position: relative;
`


const InfiniteScroller = () => {

    const [state, dispatch] = useReducer(ScrollReducer, InitialScrollState)
    const {fetchMore, images, page} = state;
    useScrollHandler(fetchMore, dispatch)
    useToFetchMore(fetchMore, page, dispatch)


    return (
        <ContainerWrapper>
            <ImageList
                images={images}
            />
        </ContainerWrapper>
    )
}

export default InfiniteScroller
