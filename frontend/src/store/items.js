import { fetch } from './csrf.js';

const GET_ITEMS = 'items/GET_ITEMS';
const GET_ITEMS_BY_CAT = 'items/GET_ITEMS_BY_CAT';
const GET_LISTED_ITEMS = 'items/GET_LISTED_ITEMS';

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

// Thunk Action Creators

export const getItems = () => async dispatch => {
    const res = await fetch('/api/items')
    dispatch(getItemsList(res))
}

export const getCatItems = (categoryId) => async dispatch => {
    const res = await fetch(`/api/items/${categoryId}`)
    if (res.ok) {
        // console.log("RESULT----->>>", res.data)
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

// export const getCatItems = (categoryId) => async dispatch => {
//     const res = await fetch(`/api/items/${categoryId}`)
//     if (res.ok) {
//         // console.log("RESULT----->>>", res.data)
//         dispatch(getItemsByCat(res.data))
//     }
// }

// Reducer

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
            newState = { ...state, ...newState };
            return newState
        default:
            return state
    }
}