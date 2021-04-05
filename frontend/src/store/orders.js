const GET_ORDER_DETAILS = 'orders/GET_ORDER_DETAILS';


const orderDetails = (order) => {
    return {
        type: GET_ORDER_DETAILS,
        order,
    }
}


export const getOrderDetails = (userId) => async dispatch => {
    const res = await fetch(`/api/orders/${userId}`)
    if (res.ok) {
        await dispatch(orderDetails(res))
    }
}


export default function OrdersReducer(state = {}, action) {
    let newState = {};
    switch (action.type) {
        case GET_ORDER_DETAILS:
            return
        default:
            return state;
    }
}