export const SET_IMAGES = 'SET_IMAGES';
export const SET_FETCH_MORE = 'SET_FETCH_MORE';
export const SET_ERROR = 'SET_ERROR';

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
