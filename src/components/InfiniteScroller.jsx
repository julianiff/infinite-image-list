import ImageList from "./ImageList";
import React, {useReducer} from "react";
import styled from "styled-components";
import {ScrollReducer} from "../reducer/ScrollReducer";
import {InitialScrollState} from "../reducer/InitialScrollState";
import {useScrollHandler} from "../hooks/useScrollHandler";
import {useToFetchMore} from "../hooks/useToFetchMore";
import PropTypes from 'prop-types';
import {setImageSquare} from "./Image";
import {GlobalStyles} from "../utils/global";

const ContainerWrapper = styled.div`
  font-family: ${GlobalStyles.fontFamily.default};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`


const InfiniteScroller = ({fetchUrl, ratioUrlFn = setImageSquare, setMaxImageWidth = 400, threshold = 600, paginationParam='page'}) => {
    const [state, dispatch] = useReducer(ScrollReducer, InitialScrollState)
    const {fetchMore, images, page} = state;
    useScrollHandler(fetchMore, dispatch, threshold)
    useToFetchMore(fetchMore, page, dispatch, fetchUrl, paginationParam)


    return (
        <ContainerWrapper>
            <ImageList
                images={images}
                imageRatio={ratioUrlFn}
                setMaxImageWidth={setMaxImageWidth}
            />
        </ContainerWrapper>
    )
}

InfiniteScroller.propTypes = {
    fetchUrl: PropTypes.string,
    ratioUrlFn: PropTypes.func,
    setMaxImageWidth: PropTypes.number,
    threshold: PropTypes.number,
    paginationParam: PropTypes.string,
}

export default InfiniteScroller
