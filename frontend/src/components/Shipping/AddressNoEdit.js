import React from 'react';


export default function AddressNoEdit({ setShipToggle }) {

    const handleAddShipping = (e) => {
        e.preventDefault();
        setShipToggle("has address-edit")
    }

    return (
        <>
            <div className="address__container">
                <div className="address__container-text">
                    <h3>You have no address on file.</h3>
                    <button onClick={handleAddShipping} type="button">Add shipping address</button>
                </div>
            </div>
        </>
    )
}