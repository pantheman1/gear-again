import { fetch } from './csrf.js';

const GET_ITEMS = 'homePageItemsList/GET_ITEMS';

// Action Creators

export const getItemsList = (data) => {
    return {
        type: GET_ITEMS,
        data,
    }
}