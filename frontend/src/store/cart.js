import { fetch } from './csrf.js';

const GET_CART = 'cart/GET_CART';
const POST_CART = 'cart/POST_CART';
const DELETE_ITEM = 'cart/DELETE_ITEM';
const DELETE_ALL_ITEMS = 'cart/DELETE_ALL_ITEMS';

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

const deleteCartItem = (itemId) => {
    return {
        type: DELETE_ITEM,
        itemId,
    }
}

const deleteAllCartItems = () => {
    return {
        type: DELETE_ALL_ITEMS,
    }
}

// Thunk Action Creators

export const getCart = (userId) => async dispatch => {
    const res = await fetch(`/api/cart/${userId}`)
    if (res.ok) {
        dispatch(getUserCart(res.data));
    }
};

export const postItem = (data) => async dispatch => {
    const { itemId, qty, userId } = data

    // const formData = new FormData;
    // formData.append("itemId", itemId);
    // formData.append("qty", qty);
    // formData.append("userId", userId)

    const res = await fetch(`/api/cart`, {
        method: "POST",
        // headers: {
        //     "Content-Type": "application/json",
        // },
        body: JSON.stringify(data),
    });
    if (res.ok) {
        await dispatch(postCartItem(res.data))
    }
}

export const removeCartItem = (data) => async dispatch => {
    // Data should include itemId so we can remove the item from state
    // and cartDetails id to remove it from the database.
    const { itemId } = data;
    const res = await fetch(`/api/cart/${itemId}`, {
        method: "DELETE",
        body: JSON.stringify(data)
    })
    dispatch(deleteCartItem(itemId));
}

export const removeAllItems = (data) => async dispatch => {
    const res = await fetch(`/api/cart`, {
        method: "DELETE",
        body: JSON.stringify(data)
    })
    if (res.ok) {
        dispatch(deleteAllCartItems());
    }
}


// Reducer

const initialState = {};

export default function CartReducer(state = initialState, action) {
    let newState = {};
    switch (action.type) {
        case GET_CART:
            action.data.forEach(cartItem => {
                // Making the itemId the key
                newState[cartItem.itemId] = cartItem;
            });
            return newState
        case POST_CART:
            newState = { ...state }
            newState[action.data.itemId] = action.data;
            return newState;
        case DELETE_ITEM:
            newState = JSON.parse(JSON.stringify(state));
            delete newState[action.itemId];
            return newState;
        case DELETE_ALL_ITEMS:
            return {};
        default:
            return state;
    }
}