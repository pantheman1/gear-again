const GET_ORDER_DETAILS = 'orderDetails/GET_ORDER_DETAILS';


const orderDetails = (orders) => {
    return {
        type: GET_ORDER_DETAILS,
        orders,
    }
}


export const getFullOrderDetails = (orderId) => async dispatch => {
    const res = await fetch(`/api/orderDetails/${orderId}`);
    if (res.ok) {
        const data = await res.json()
        const details = {}
        details[data.orderId] = data;
        dispatch(orderDetails(details))
    }
    return res;
}


export default function OrderDetailsReducer(state = {}, action) {
    let newState = {};
    switch (action.type) {
        case GET_ORDER_DETAILS:
            // console.log("ORDERS------", action.orders)
            // newState = Object.assign({}, state, action.orders);
            newState = { ...state, ...action.orders }
            return newState
        default:
            return state;
    }
}