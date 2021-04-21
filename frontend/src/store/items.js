import { fetch } from './csrf.js';

const GET_ITEMS = 'items/GET_ITEMS';
const POST_LISTING = 'items/POST_LISTING';
const UPDATE_IS_SOLD = 'items/UPDATE_IS_SOLD';

// Action Creators

const getItemsList = (data) => {
    return {
        type: GET_ITEMS,
        data,
    }
}

const postOneItem = (data) => {
    return {
        type: POST_LISTING,
        data
    }
}

const updateIsSoldTrue = (data) => {
    return {
        type: UPDATE_IS_SOLD,
        data,
    }
}

// Thunk Action Creators

export const getItems = () => async dispatch => {
    const res = await fetch('/api/items')
    dispatch(getItemsList(res))
}

export const getPurchasedItems = (userId) => async dispatch => {
    const res = await fetch(`api/items/purchases/${userId}`)
    if (res.ok) {
        dispatch(getItemsList(res))
    }
}

export const postListedItem = (data) => async dispatch => {
    const {
        userId,
        title,
        brand,
        size,
        price,
        cost,
        description,
        categoryId,
        conditionId,
        genderId,
        images,
    } = data;

    const formData = new FormData;
    formData.append("title", title)
    formData.append("brand", brand)
    formData.append("size", size)
    formData.append("price", price)
    formData.append("cost", cost)
    formData.append("description", description)
    formData.append("categoryId", categoryId)
    formData.append("conditionId", conditionId)
    formData.append("genderId", genderId)

    // for multiple files
    if (images && images.length !== 0) {
        for (let i = 0; i < images.length; i++) {
            formData.append("images", images[i]);
        }
    }

    // for single file
    // if (image) formData.append("image", image);
    // debugger
    const res = await fetch(`/api/items/${userId}`, {
        method: "POST",
        headers: {
            "Content-Type": "multipart/form-data",
        },
        body: formData
    })
    if (res.ok) {
        await dispatch(postOneItem(res.data))
        return {
            id: res.data.id,
            category: res.data.Category.name,
        }
    } else {
        return "Something went wrong with the server. It's not you, it's me...please try again later."
    }
}

export const updateIsSold = (data) => async dispatch => {
    const res = await fetch(`/api/items`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    dispatch(updateIsSoldTrue(data))
}


export default function ItemsReducer(state = {}, action) {
    let newState = {};
    switch (action.type) {
        case GET_ITEMS:
            action.data.data.forEach(item => {
                newState[item.id] = item;
            })
            newState = { ...state, ...newState }
            return newState;
        case POST_LISTING:
            newState[action.data.id] = action.data
            return { ...state, ...newState };
        case UPDATE_IS_SOLD:
            newState = { ...state }
            console.log("STATE---", action.data)
            action.data.forEach(item => {
                newState[Number(item)].isSold = true;
            })
            return newState
        default:
            return state
    }
}