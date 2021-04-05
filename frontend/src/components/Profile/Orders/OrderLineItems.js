import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetails } from '../../../store/orders';


export default function OrderLineItems({ shipped }) {
    const user = useSelector(state => state?.session.user);
    const dispatch = useDispatch();


    useEffect(async () => {
        console.log("USER ID---", user?.id)
        await dispatch(getOrderDetails(user?.id))
    }, [dispatch])


    return (
        <>
            <h1>Completed Orders</h1>
        </>
    )
}