import { fetch } from './csrf';

const GET_ORDER_DETAILS = 'orderDetails/GET_ORDER_DETAILS';
const POST_ORDER_DETAILS = 'orderDetails/POST_ORDER_DETAILS';

const orderDetails = (orders) => {
    return {
        type: GET_ORDER_DETAILS,
        orders,
    }
}

const postToOrderDetails = (data) => {
    return {
        type: POST_ORDER_DETAILS,
        data,
    };
};

// Thunk
export const getFullOrderDetails = (orderId) => async dispatch => {
    const res = await fetch(`/api/orderDetails/${orderId}`);
    if (res.ok) {
        const details = {}
        details[res.data.orderId] = res.data;
        dispatch(orderDetails(details))
    }
    return res;
}

export const postOrderDetails = data => async dispatch => {
    const res = await fetch(`/api/orderDetails`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    if (res.ok) {
        dispatch(postToOrderDetails(res.data))
    }
}

export default function OrderDetailsReducer(state = {}, action) {
    let newState = {};
    switch (action.type) {
        case GET_ORDER_DETAILS:
            newState = { ...state, ...action.orders }
            return newState
        case POST_ORDER_DETAILS:
            newState[action.data.id] = action.data;
            return { ...state, ...newState };
        default:
            return state;
    }
}