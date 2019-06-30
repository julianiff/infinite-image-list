import React from 'react';
import './App.css';
import InfiniteScroller from "./components/InfiniteScroller";
import {fetchUrl} from "./utils/constants";


function App() {

    return (
        <InfiniteScroller
            fetchUrl={fetchUrl}


        />
    );
}

export default App;
