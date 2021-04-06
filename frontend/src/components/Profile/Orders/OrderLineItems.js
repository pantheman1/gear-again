import { nanoid } from 'nanoid';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetails } from '../../../store/orders';
import FullOrderDetails from './FullOrderDetails';


export default function OrderLineItems() {
    const user = useSelector(state => state?.session.user);
    const orders = useSelector(state => Object.values(state?.orders));
    const dispatch = useDispatch();


    useEffect(async () => {
        console.log("USER ID---", user?.id)
        await dispatch(getOrderDetails(user?.id))
    }, [dispatch])

    return (
        <>
            {orders && orders?.map(order => (
                <div key={nanoid()} className="orderLineItem__container">
                    <FullOrderDetails order={order} />
                    {/* <li>{order?.orderComplete}</li> */}
                    <li>{order.total}</li>
                    <li>{order.shippingAddress}</li>
                    <li>{order.createdAt}</li>
                </div>
            ))}
            {/* <h1>TRUE</h1> */}
        </>
    )
}