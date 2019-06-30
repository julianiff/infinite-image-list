import React from "react";
import Image from "./Image";
import styled from 'styled-components';

const ImageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const ImageList = ({images}) => {

    const _buildImageList = (images) => {
        return images.map(item => (<Image image={item} key={item.id}/>))
    }

    return (
        <ImageWrapper>
            {images && _buildImageList(images)}
        </ImageWrapper>
    )

}

export default ImageList;
