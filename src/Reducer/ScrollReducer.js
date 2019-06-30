import {SET_ERROR, SET_FETCH_MORE, SET_IMAGES} from "./ScrollActions";


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
