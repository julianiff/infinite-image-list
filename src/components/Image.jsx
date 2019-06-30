import React, {Suspense} from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ImageMargin = styled.img`
  border: solid 1px black;
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

const Image = ({image, index}) => {

    const getSquareImage = (url, width) => {
        const splitted = [...url.split('/')]; // copy innput and split
        splitted.splice(splitted.length - 2, 2); // remove last 2 entries
        return `${splitted.join('/')}/${width}`; // return with new width
    }


    return (
        <Suspense fallback={<div>...loading</div>}>
            <ImageCaptionColumn>
                <ImageMargin src={getSquareImage(image.download_url, 400)} alt=""/>
                <Caption>{image.author} {index}</Caption>
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
    index: PropTypes.number
}

export default Image;
