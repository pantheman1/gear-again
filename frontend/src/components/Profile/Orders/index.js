import React from 'react';
import OrderLineItems from './OrderLineItems';

export default function Orders() {


    return (
        <>
            <h1>Purchases page</h1>
            <div className="shipped__container">
                <OrderLineItems />
            </div>
        </>
    )
}