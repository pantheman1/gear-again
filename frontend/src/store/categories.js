import { fetch } from './csrf.js';

const GET_CATEGORIES = 'category/GET_CATEGORIES';

// Action Creators

export const getCategoriesList = (data) => {
    return {
        type: GET_CATEGORIES,
        data,
    }
}

// Thunk Action Creators

export const getCategories = () => async dispatch => {
    const res = await fetch('/api/categories')

    if (res.ok) {
        const data = await res.json();
        dispatch(getCategoriesList(data))
    }
}

// Reducer

export default function CategoriesReducer(state = {}, action) {
    let newState;
    switch (action.type) {
        case GET_CATEGORIES:
            newState = { ...state, ...action.data }
            return newState;
        default:
            return state
    }
}