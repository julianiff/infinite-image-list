
## Infinite image list, implemented with react hooks
This component displays a list of images and loads the next page when the user reaches the bottom. 

### API Parameters of the Component 
| Parameter        | Type           | Required  |
| ------------- |:-------------:| -----:|
| inputUrl      | String | Required |
| ratioUrlFn      | Function | Optional |
| setMaxImageWidth      | Integer      |   Optional |
| threshold | Integer      |    Optional |
| paginationParam | String      |    Optional |

### Example Usage

Example demonstrates a fetch with picsum, the amount of pictures per pagination is limited to 8: 
```
function App() {
    const inputUrl = "https://picsum.photos/v2/list?limit=8"
    return (
            <InfiniteScroller
                inputUrl={inputUrl}
            />
    );
}
```

Example 


 







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
