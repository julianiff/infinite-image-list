import ImageList from "./ImageList";
import React, {useReducer} from "react";
import styled from "styled-components";
import {ScrollReducer} from "../Reducer/ScrollReducer";
import {InitialScrollState} from "../Reducer/InitialScrollState";
import {useScrollHandler} from "../hooks/useScrollHandler";
import {useToFetchMore} from "../hooks/useToFetchMore";
import PropTypes from 'prop-types';
import {setImageSquare} from "./Image";

const ContainerWrapper = styled.div`
`


const InfiniteScroller = ({fetchUrl, imageRatio = setImageSquare }) => {
    const [state, dispatch] = useReducer(ScrollReducer, InitialScrollState)
    const {fetchMore, images, page} = state;
    useScrollHandler(fetchMore, dispatch)
    useToFetchMore(fetchMore, page, dispatch, fetchUrl)


    return (
        <ContainerWrapper>
            <ImageList
                images={images}
                imageRatio={imageRatio}
            />
        </ContainerWrapper>
    )
}

InfiniteScroller.propTypes = {
    fetchUrl: PropTypes.string
}

export default InfiniteScroller
