
## Infinite image list, implemented with react hooks

Available Props are fetchUrl (The url to fetch the urls), 
ratioUrlFn (the ratio of each individual picture), 
setMaxImageWidth (The max length of each picture), 
threshold (the threshold from when the updater gets the next page.)

Example usage(With picsum, the amount of pictures per pagination is limited to 8): 
```
function App() {
    const fetchUrl = "https://picsum.photos/v2/list?limit=8"
    return (
            <InfiniteScroller
                fetchUrl={fetchUrl}
            />
    );
}
```
The component takes the following parameters optionally. 

ratioUrlFn defines a function that modifies the url of each image to return another url string per image.
setMaxImageWidth: defines the number that an image maximally can be
threshold: is the amount of pixels from the end of the list a refetch happens. 
paginationParam: is the parameter for the fetchUrl to get the next page of the pagination.  
```
    ratioUrlFn: PropTypes.func,
    setMaxImageWidth: PropTypes.number,
    threshold: PropTypes.number,
    paginationParam: PropTypes.string,
```





 







## How To start up
To init the project, you can run: 

### `npm install`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
