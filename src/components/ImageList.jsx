import React from "react";
import {Image} from "./Image";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ImageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const ImageList = ({images, imageRatio, setMaxImageWidth}) => {

    const _buildImageList = (images) => {
        return images.map(item => (<Image image={item} key={item.id} imageRatio={imageRatio} setMaxWidth={setMaxImageWidth}/>))
    }

    return (
        <ImageWrapper>
            {images && _buildImageList(images)}
        </ImageWrapper>
    )

}

ImageList.propTypes = {
    images: PropTypes.array,
    imageRatio: PropTypes.func,
    setMaxImageWidth: PropTypes.number
}

export default ImageList;
