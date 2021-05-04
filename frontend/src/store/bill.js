import { fetch } from './csrf.js';

const USER_BILLING = 'ship/USER_BILLING';

// Action Creators

const getAllBillingData = data => {
    return {
        type: USER_BILLING,
        data,
    }
}


// Thunk Action Creators

export const getAllBilling = (userId) => async dispatch => {
    const res = await fetch(`/api/bill/${userId}`)
    if (res.ok) {
        await dispatch(getAllBillingData(res));
    }
}

// Reducer

export default function Bill(state = {}, action) {
    let newState = {};
    switch (action.type) {
        case USER_BILLING:
            console.log("action.data--billing", action.data)
            action.data.forEach(info => {
                newState[info.id] = info;
            })
            return newState;
        default:
            return state;
    }
}