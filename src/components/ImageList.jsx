import React from "react";
import Image from "./Image";
import useFetch from "../hooks/useFetch";
import styled from 'styled-components';

const ImageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const ImageList = () => {

    const url = 'https://picsum.photos/v2/list?page=1&width=200';
    const {response} = useFetch(url, [])

    const _buildImageList = () => {
        return response.map(item => (<Image image={item} key={item.id}/>))
    }
    return (
        <ImageWrapper>
            {_buildImageList()}
        </ImageWrapper>
    )
}

export default ImageList;
