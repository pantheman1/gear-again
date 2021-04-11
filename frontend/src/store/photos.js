import { fetch } from './csrf.js';

const GET_PHOTOS = 'photos/GET_PHOTOS';
const POST_PHOTO = 'photos/POST_PHOTO';

// Action Creators

const getPhotosList = (data) => {
    return {
        type: GET_PHOTOS,
        data,
    }
}

const postAPhoto = (data) => {
    return {
        type: POST_PHOTO,
        data
    }
}

// Thunk Action Creators

export const getPhotos = () => async dispatch => {
    const res = await fetch('/api/photos')
    dispatch(getPhotosList(res))
}

export const postPhoto = (data) => async dispatch => {
    const { image, itemId } = data;
    const formData = new FormData;
    formData.append("image", image);
    formData.append("itemId", itemId)

    const res = await fetch(`/api/photos/${itemId}`, {
        method: "POST",
        headers: {
            "Content-Type": "multipart/form-data",
        },
        body: formData,
    });

    if (res.ok) {
        dispatch(postAPhoto(res.data))
        return res.data.url
    }
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
        case POST_PHOTO:
            newState[action.data.id] = action.data;
            return { ...state, ...newState };
        default:
            return state
    }
}