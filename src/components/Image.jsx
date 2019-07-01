import React, {Suspense} from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {device, GlobalStyles} from "../utils/global";

const ImageBorder = styled.img`
  width: ${GlobalStyles.image.width.fluidXStoM};
  border: solid 0.1rem ${GlobalStyles.color.colorPalette.black};
 
  @media only screen and ${device.mobileL} {  
    width: ${props => props.setMaxWidth}px;
  }
  

`

const Caption = styled.div`
  text-align: center;
  line-height: ${GlobalStyles.lineHeight.small};
  font-size: ${GlobalStyles.fontsize.small};
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

const Image = ({image, imageRatio, setMaxWidth}) => {

    return (
        <Suspense fallback={<div>...loading</div>}>
            <ImageCaptionColumn>
                <ImageBorder src={imageRatio(image.download_url)}
                             alt={image.author}
                             title={image.author}
                             setMaxWidth={setMaxWidth}/>
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
    imageRatio: PropTypes.func,
    setMaxWidth: PropTypes.number
}

export {Image, setImageSquare};
