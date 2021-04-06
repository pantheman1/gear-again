import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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