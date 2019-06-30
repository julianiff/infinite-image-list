import React, {Suspense} from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {device, GlobalStyles} from "../utils/global";

const ImageBorder = styled.img`
  width: ${GlobalStyles.image.width.fluidXStoM};
  border: solid 1px black;
 
  @media only screen and ${device.mobileL} {  
    width: 400px;
  }
  

`

const Caption = styled.div`
  text-align: center;
  line-height: 2em;
  font-size: 16px;
  background-color: ${GlobalStyles.color.colorPalette.prim}50;
`

const ImageCaptionColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1rem;
`


const setImageSquare = (url, width = 400) => {
    const _splitter = (data, pattern = '/') => [...data.split(pattern)]

    const splitted = _splitter(url)
    splitted.splice(splitted.length - 2, 2);
    return `${splitted.join('/')}/${width}`;
}

const Image = ({image, imageRatio}) => {

    return (
        <Suspense fallback={<div>...loading</div>}>
            <ImageCaptionColumn>
                <ImageBorder src={imageRatio(image.download_url)} alt=""/>
                <Caption>{image.author}</Caption>
            </ImageCaptionColumn>
        </Suspense>
    )
}

Image.propTypes = {
    image: PropTypes.shape({
        id: PropTypes.string,
        author: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
        url: PropTypes.string,
        download_url: PropTypes.string,
    }),
    fn: PropTypes.func
}

export {Image, setImageSquare};
