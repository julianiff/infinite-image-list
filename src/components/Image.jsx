import React, {Suspense} from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {device, GlobalStyles} from "../utils/global";

const ImageBorder = styled.img`
  width: ${GlobalStyles.image.width.fluidXStoM};
  border: solid 1px black;
 
  @media ${device.mobileL} {  
    width: 400px;
  }
  

`

const Caption = styled.div`
  text-align: center;
  line-height: 2em;
  font-size: 16px;
`

const ImageCaptionColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1rem;
`

const Image = ({image}) => {

    const _splitter = (data, pattern = '/') => [...data.split(pattern)]

    const _getSquareImage = (url, width = 400) => {
        const splitted = _splitter(url)
        splitted.splice(splitted.length - 2, 2);
        return `${splitted.join('/')}/${width}`;
    }

    return (
        <Suspense fallback={<div>...loading</div>}>
            <ImageCaptionColumn>
                <ImageBorder src={_getSquareImage(image.download_url)} alt=""/>
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
    })
}

export default Image;
