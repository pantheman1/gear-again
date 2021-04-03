import { fetch } from './csrf.js';

const GET_ITEMS = 'items/GET_ITEMS';
const GET_ITEMS_BY_CAT = 'items/GET_ITEMS_BY_CAT';

// Action Creators

export const getItemsList = (data) => {
    return {
        type: GET_ITEMS,
        data,
    }
}

export const getItemsByCat = (data) => {
    return {
        type: GET_ITEMS_BY_CAT,
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
    const res = await fetch(`api/items/listed/${userId}`)
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
            // console.log("PHOTOS-------", newState)
            newState = { ...state, ...newState }
            return newState;
        default:
            return state
    }
}