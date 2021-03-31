import { fetch } from './csrf.js';

const GET_ITEMS = 'items/GET_ITEMS';

// Action Creators

export const getItemsList = (data) => {
    return {
        type: GET_ITEMS,
        data,
    }
}

// Thunk Action Creators

export const getItems = () => async dispatch => {
    const res = await fetch('/api/items')
    dispatch(getItemsList(res))
}

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
        default:
            return state
    }
}