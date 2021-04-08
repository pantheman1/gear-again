import { fetch } from './csrf.js';

const GET_ITEMS = 'items/GET_ITEMS';
const GET_ITEMS_BY_CAT = 'items/GET_ITEMS_BY_CAT';
const GET_LISTED_ITEMS = 'items/GET_LISTED_ITEMS';
const POST_LISTING = 'items/POST_LISTING';
const GET_ONE_ITEM = 'items/GET_ONE_ITEM';

// Action Creators

const getItemsList = (data) => {
    return {
        type: GET_ITEMS,
        data,
    }
}

const getItemsByCat = (data) => {
    return {
        type: GET_ITEMS_BY_CAT,
        data,
    }
}

const getAllListedItems = (data) => {
    return {
        type: GET_LISTED_ITEMS,
        data,
    }
}

// const getOneItemAction = (data) => {
//     return {
//         type: GET_ONE_ITEM,
//         data,
//     }
// }

const postOneItem = (data) => {
    return {
        type: POST_LISTING,
        data
    }
}

// Thunk Action Creators

export const getItems = () => async dispatch => {
    const res = await fetch('/api/items')
    dispatch(getItemsList(res))
}

export const getCatItems = (categoryId) => async dispatch => {
    const res = await fetch(`/api/items/${categoryId}`)
    if (res.ok) {
        dispatch(getItemsByCat(res.data))
    }
}

export const getListedItems = (userId) => async dispatch => {
    const res = await fetch(`api/items/listings/${userId}`)
    if (res.ok) {
        dispatch(getAllListedItems(res))
    }
}

export const getPurchasedItems = (userId) => async dispatch => {
    const res = await fetch(`api/items/purchases/${userId}`)
    if (res.ok) {
        dispatch(getItemsList(res))
    }
}

// export const getOneItem = (itemId) => async dispatch => {
//     const res = await fetch(`/api/items/item/${itemId}`)
//     // debugger
//     if (res.ok) {
//         dispatch(getOneItemAction(res))
//     }
// }

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
        console.log("RES>DAT0-------", res.data)
        console.log("RES>DATIDDDD-------", res.data.Category.name)
        return {
            id: res.data.id,
            category: res.data.Category.name,
        }
    } else {
        return "Something went wrong with the server. It's not you, it's me...please try again later."
    }
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
        case GET_ITEMS_BY_CAT:
            action.data.forEach(item => {
                newState[item.id] = item;
            })
            newState = { ...state, ...newState }
            return newState;
        case GET_LISTED_ITEMS:
            action.data.data.forEach(item => {
                newState[item.id] = item;
            })
            newState = { ...newState };
            return newState
        case GET_ONE_ITEM:
            newState = { ...action.data };
            return newState;
        case POST_LISTING:
            newState[action.data.id] = action.data
            return { ...state, ...newState };
        default:
            return state
    }
}