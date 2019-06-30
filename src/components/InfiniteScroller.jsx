import ImageList from "./ImageList";
import React, {useReducer} from "react";
import styled from "styled-components";
import {ScrollReducer} from "../Reducer/ScrollReducer";
import {InitialScrollState} from "../Reducer/InitialScrollState";
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


const InfiniteScroller = ({fetchUrl, RatioUrlFn = setImageSquare, setMaxImageWidth = 400, treshold = 600}) => {
    const [state, dispatch] = useReducer(ScrollReducer, InitialScrollState)
    const {fetchMore, images, page} = state;
    useScrollHandler(fetchMore, dispatch, treshold)
    useToFetchMore(fetchMore, page, dispatch, fetchUrl)


    return (
        <ContainerWrapper>
            <ImageList
                images={images}
                imageRatio={RatioUrlFn}
                setMaxImageWidth={setMaxImageWidth}
            />
        </ContainerWrapper>
    )
}

InfiniteScroller.propTypes = {
    fetchUrl: PropTypes.string,
    RatioUrlFn: PropTypes.func,
    setMaxImageWidth: PropTypes.number,
    treshold: PropTypes.number
}

export default InfiniteScroller
