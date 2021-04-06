import React, { useEffect } from 'react';


export default function FulfillmentBtns({ setShipped }) {

    return (
        <div className="shipped__container-btns">
            <button type="button" onClick={e => setShipped(true)}>Shipped Orders</button>
            <button type="button" onClick={e => setShipped(false)}>Unfulfilled Orders</button>
        </div>
    )
}