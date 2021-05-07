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

export const updateShipping = (data) => async dispatch => {
    const { userId } = data;
    const res = await fetch(`/api/ship/${userId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application-json",
        },
        body: JSON.stringify(data),
    })
    if (res.ok) {
        await dispatch(getAllShippingData(res))
    }
}

export const postShipping = (data) => async dispatch => {
    const { userId } = data;
    const res = await fetch(`/api/ship/${userId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application-json",
        },
        body: JSON.stringify(data),
    })
    if (res.ok) {
        await dispatch(getAllShippingData(res))
    }
}

// Reducer

export default function Ship(state = {}, action) {
    let newState = {};
    switch (action.type) {
        case USER_SHIPPING:
            console.log("action.data--shipping", action.data)
            action.data.forEach(info => {
                newState[info.id] = info;
            })
            return newState;
        default:
            return state;
    }
}