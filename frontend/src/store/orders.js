const GET_ORDER_DETAILS = 'orders/GET_ORDER_DETAILS';


const orderDetails = (orders) => {
    return {
        type: GET_ORDER_DETAILS,
        orders,
    }
}


export const getOrderDetails = (userId) => async dispatch => {
    const res = await fetch(`/api/orders/${userId}`)
    if (res.ok) {
        const data = await res.json()
        dispatch(orderDetails(data))
    }
}


export default function OrdersReducer(state = {}, action) {
    let newState = {};
    switch (action.type) {
        case GET_ORDER_DETAILS:
            action.orders.forEach(order => {
                newState[order.id] = order;
            })
            return { ...state, ...newState }
        default:
            return state;
    }
}