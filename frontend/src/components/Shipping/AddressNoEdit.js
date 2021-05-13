import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './shipping.css';


export default function AddressNoEdit({ setShipToggle }) {
    const ship = useSelector(state => Object.values(state.ship));

    const handleEditShipping = (e) => {
        e.preventDefault();
        setShipToggle("has address-edit")
    }

    return (
        ship.length > 0 &&
        <>
            <div className="address__container">
                <div className="address__container-label">
                    <h3>Shipping Address</h3>
                </div>
                <div className="address__container-infotext">
                    <div className="address__container-info">
                        <div className="address__container-text">
                            {ship[0].shipStreet}
                        </div>
                        <div className="address__container-text">
                            {ship[0].shipApt}
                        </div>
                        <div className="address__container-text">
                            {ship[0].shipCity}
                        </div>
                        <div className="address__container-text">
                            {ship[0].shipState}
                        </div>
                        <div className="address__container-text">
                            {ship[0].shipZip}
                        </div>
                    </div>
                    <div className="address__container-btn">
                        <button className="form-btn" onClick={handleEditShipping} type="button">Edit</button>
                    </div>
                </div>
            </div>
        </>
    )
}