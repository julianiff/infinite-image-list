# Infinite Image Scroller

#### This component displays a list of images and loads the next page when the user reaches the bottom of the page. Implemented and reusable with react.



### How To start up

To init the project, you can run: 

### `npm install`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Example: How to use

With Picsum.photos this repository works out of the box. If the url changes then the parameter ratioUrlFn needs to be adapted. 

Example demonstrates a fetch with picsum, the amount of pictures per pagination is limited to 8: 
Demo can be found here: https://infinitescroller.julianiff.ch/

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

### API Parameters of the Component 

| Parameter        | Type           |Description           | Default  |
| ------------- |:-------------:|:-------------:| -----:|
| inputUrl      | String | The URL to fetch the pictures from | is required, no default |
| ratioUrlFn      | Function | Function that is used on every image url | function to square a picture with picsum |
| setMaxImageWidth      | Integer      | The max width of each image       |   400 (Pixel) |
| threshold | Integer      |    The amount of pixels needed to trigger a reload |    600 (Pixel) |
| paginationParam | String      |    Parameter that is used to have a pangination |    'page' |

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
