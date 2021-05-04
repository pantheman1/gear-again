import { fetch } from './csrf.js';

const USER_SHIPPING = 'ship/USER_SHIPPING';

// Action Creators

const getAllShippingData = data => {
    return {
        type: USER_SHIPPING,
        data,
    }
}


// Thunk Action Creators

export const getAllShipping = (userId) => async dispatch => {
    const res = await fetch(`/api/ship/${userId}`)
    if (res.ok) {
        await dispatch(getAllShippingData(res));
    }
}

// Reducer

export default function Ship(state = {}, action) {
    let newState = {};
    switch (action.type) {
        case USER_SHIPPING:
            action.data.forEach(info => {
                newState[info.id] = info;
            })
            return newState;
        default:
            return state;
    }
}