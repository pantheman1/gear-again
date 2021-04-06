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
        // const data = await res.json()
        dispatch(orderDetails(res))
    }
}


export default function OrderDetailsReducer(state = {}, action) {
    let newState = {};
    switch (action.type) {
        case GET_ORDER_DETAILS:
            console.log("ORDERS------", action.orders)
            newState = Object.assign({}, state, { user: action.orders });
            return { ...state, ...newState }
        default:
            return state;
    }
}