import React from 'react';
import InfiniteScroller from "./components/InfiniteScroller";
import {fetchUrl} from "./utils/constants";


function App() {

    return (
        <>
            <h1>Infinite Scroller</h1>
            <InfiniteScroller
                fetchUrl={fetchUrl}
            />
        </>
    );
}

export default App;
