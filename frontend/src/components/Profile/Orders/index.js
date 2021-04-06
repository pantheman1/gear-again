import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FulfillmentBtns from './FulfillmentBtns';
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
                <OrderLineItems shipped={shipped} />
            </>
    }


    return (
        <>
            <h1>Orders page</h1>
            <div className="shipped__container">
                <FulfillmentBtns setShipped={setShipped} />
                <div className="shipped__container-orders">
                    {orders}
                </div>
            </div>
        </>
    )
}