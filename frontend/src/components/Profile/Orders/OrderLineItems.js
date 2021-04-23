import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetails } from '../../../store/orders';
import FullOrderDetails from './FullOrderDetails';


export default function OrderLineItems() {
    const user = useSelector(state => state?.session.user);
    const orders = useSelector(state => Object.values(state?.orders));
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getOrderDetails(user?.id))
    }, [])

    return (
        <>
            {orders && orders?.map(order => (
                <div key={order.id} className="orderLineItem__container">
                    <FullOrderDetails orderId={order.id} />
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