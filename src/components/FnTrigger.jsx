import React from "react";
import ViewPortScroller from "./ViewPortScroller";
import styled from 'styled-components'
import {setImages} from "../Reducer/ScrollReducer";

const BackgroundBottom = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 550px;
`

const Trigger = (props) => {
    const {inViewport, forwardedRef} = props;
    return <BackgroundBottom inViewport={inViewport} ref={forwardedRef}/>
};

const ViewportBlock = ViewPortScroller(Trigger, /** options: {}, config: {} **/);


const fetchit = async (update, page) => {
    const url = `https://picsum.photos/v2/list?width=200&page=${page}`;

    const response = await fetch(url);
    const json = await response.json();
    update(setImages(json));
}

const ReloadTrigger = ({dispatch, page}) => (
     <ViewportBlock onEnterViewport={() => {
        fetchit(dispatch, page).catch(err => console.warn(err));
    }} onLeaveViewport={() => console.log('')}/>
)

export default ReloadTrigger;
