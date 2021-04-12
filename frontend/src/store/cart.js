import { fetch } from './csrf.js';

const GET_CART = 'cart/GET_CART';
const POST_CART = 'cart/POST_CART';

// Action Creators

const getUserCart = (data) => {
    return {
        type: GET_CART,
        data,
    }
};

const postCartItem = (data) => {
    return {
        type: POST_CART,
        data,
    }
}

// Thunk Action Creators

export const getCart = (userId) => async dispatch => {
    const res = await fetch(`/cart/${userId}`)
    if (res.ok) {
        dispatch(getUserCart(res));
    }
};

export const postItem = (data) => async dispatch => {
    const { qty, itemId, userId } = data
    const res = await fetch(`/cart/${itemId}`, {
        methods: "POST",
        header: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({ qty, itemId, userId }),
    });
    if (res.ok) {
        dispatch(postCartItem(res))
    }
}


// Reducer

const initialState = {};

export default function CartReducer(state = initialState, action) {
    let newState = {};
    switch (action.type) {
        case GET_CART:
            return newState;
        default:
            return state;
    }
}