import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getFullOrderDetails } from '../../../store/orderDetails';

export default function FullOrderDetails({ orderId }) {
    const dispatch = useDispatch();
    // const orderDetails = useSelector(state => state.orderDetails)


    useEffect(() => {
        dispatch(getFullOrderDetails(orderId))
        // console.log("USE EFFECT---------")
    }, [])


    return (
        <div>
            {/* {orderDetails && orderDetails?.map(order => )} */}
            {/* {order?.total} */}
            {orderId}
        </div>
    )
}