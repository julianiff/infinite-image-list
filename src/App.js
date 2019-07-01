import React from 'react';
import InfiniteScroller from "./components/InfiniteScroller";
import {fetchUrl} from "./utils/constants";
import styled from 'styled-components';
import {GlobalStyles} from "./utils/global";

const CenterText = styled.h1`
  text-align: center;
  font-family: ${GlobalStyles.fontFamily.default}
`

function App() {

    return (
        <>
            <CenterText>Infinite Scroller</CenterText>
            <InfiniteScroller
                fetchUrl={fetchUrl}
            />
        </>
    );
}

export default App;
