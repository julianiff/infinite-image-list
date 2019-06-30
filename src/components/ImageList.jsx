import React from "react";
import Image from "./Image";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ImageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const ImageList = ({images}) => {

    const _buildImageList = (images) => {
        return images.map((item, index) => (<Image image={item} index={index} key={item.id}/>))
    }

    return (
        <ImageWrapper>
            {images && _buildImageList(images)}
        </ImageWrapper>
    )

}

ImageList.propTypes = {
    images: PropTypes.array
}

export default ImageList;
