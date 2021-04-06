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
        dispatch(orderDetails(data))
    }
}


export default function OrderDetailsReducer(state = {}, action) {
    let newState = {};
    switch (action.type) {
        case GET_ORDER_DETAILS:
            debugger
            action.orders.forEach(order => {
                newState[order.id] = order;
            })
            return { ...state, ...newState }
        default:
            return state;
    }
}