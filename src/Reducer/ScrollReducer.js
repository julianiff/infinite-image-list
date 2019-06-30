const SET_IMAGES = 'SET_IMAGES';
const SET_FETCH_MORE = 'SET_FETCH_MORE';
const SET_ERROR = 'SET_ERROR';

export const setFetchMore = () => ({
    type: SET_FETCH_MORE,
})

export const setImages = (images) => ({
    type: SET_IMAGES,
    images
})

export const setError = (error) => ({
    type: SET_ERROR,
    error
})


const ScrollReducer = (state, action) => {
    switch (action.type) {
        case SET_FETCH_MORE:
            return {
                ...state,
                fetchMore: true
            };
        case SET_IMAGES:
            return {
                ...state,
                images: [...state.images, ...action.images],
                page: state.page + 1,
                fetchMore: false
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}


export {ScrollReducer}
