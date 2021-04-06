import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFullOrderDetails } from '../../../store/orderDetails';

export default function FullOrderDetails({ order }) {
    const dispatch = useDispatch();
    // const orderDetails = useSelector(state => state.orders)


    useEffect(async () => {
        await dispatch(getFullOrderDetails(order?.id))
    }, [dispatch])


    return (
        <>
            {/* {orderDetails && orderDetails?.map(order => )} */}
            {order?.total}
        </>
    )
}