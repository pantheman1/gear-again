import { fetch } from './csrf.js';

const GET_PHOTOS = 'photos/GET_PHOTOS';

// Action Creators

export const getPhotosList = (data) => {
    return {
        type: GET_PHOTOS,
        data,
    }
}

// Thunk Action Creators

export const getPhotos = () => async dispatch => {
    // debugger
    const res = await fetch('/api/photos')
    dispatch(getPhotosList(res))
}

// Reducer

export default function PhotosReducer(state = {}, action) {
    let newState = {};
    switch (action.type) {
        case GET_PHOTOS:
            action.data.data.forEach(photo => {
                newState[photo.id] = photo;
            })
            newState = { ...state, ...newState }
            return newState;
        default:
            return state
    }
}