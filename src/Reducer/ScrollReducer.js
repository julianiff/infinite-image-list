const UPDATE_IMAGES = 'UPDATE_IMAGES';
const SET_IMAGES = 'SET_IMAGES';
const SET_FETCHING = 'SET_FETCHING';

export const setFetching = () => ({
    type: SET_FETCHING,
})

export const updateImages = () => ({
    type: UPDATE_IMAGES
})

export const setImages = (images) => ({
    type: SET_IMAGES,
    images
})


const ScrollReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_IMAGES:
            return {
                ...state,
            };
        case SET_FETCHING:
            return {
                ...state,
                fetched: true
            };
        case SET_IMAGES:
            return {
                ...state,
                images: [...state.images, ...action.images],
                page: state.page + 1
            };
        default:
            return state;
    }
}


export {ScrollReducer}
