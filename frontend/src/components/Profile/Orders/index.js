import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrderLineItems from './OrderLineItems';

export default function Orders() {
    const [shipped, setShipped] = useState(false);

    let orders;
    if (shipped) {
        orders =
            <>
                <OrderLineItems shipped={shipped} />
            </>
    } else {
        orders =
            <>
                <h1>Not Shipped</h1>
            </>
    }


    return (
        <>
            <h1>Orders page</h1>
            <div className="shipped__container">
                <div className="shipped__container-btns">
                    <button type="button" onClick={e => setShipped(true)}>Shipped Orders</button>
                    <button type="button" onClick={e => setShipped(false)}>Unfulfilled Orders</button>
                </div>
                <div className="shipped__container-orders">
                    {orders}
                </div>
            </div>
        </>
    )
}