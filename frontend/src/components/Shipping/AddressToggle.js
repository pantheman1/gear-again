import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { updateShipping } from '../../store/ship';
import AddressNoEdit from './AddressNoEdit';
import NoAddressOnFile from './NoAddressOnFile';
import ShippingForm from './ShippingForm';


export default function AddressToggle() {
    const ship = useSelector(state => state.ship);
    const [shipToggle, setShipToggle] = useState("no address-add");

    if (!ship.length) {
        return (
            <>
                {shipToggle === "no address-add" ? <NoAddressOnFile setShipToggle={setShipToggle} /> : <ShippingForm shipAddressButton="" />}
            </>
        )
    } else {
        if (shipToggle === "has address-no edit") {
            return (
                <AddressNoEdit setShipToggle={setShipToggle} />
            )
        } else if (shipToggle === "has address-edit") {
            return (
                <ShippingForm shipAddressButton={updateShipping} />
            )
        } else if (shipToggle === "no address-add") {
            return (
                <ShippingForm shipAddressButton="" />
            )
        }
    }
}