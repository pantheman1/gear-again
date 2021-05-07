import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { updateShipping } from '../../store/ship';
import AddressNoEdit from './AddressNoEdit';
import NoAddressOnFile from './NoAddressOnFile';
import ShippingForm from './ShippingForm';


export default function AddressToggle() {
    const ship = useSelector(state => Object.values(state.ship));
    const [shipToggle, setShipToggle] = useState("");

    console.log("ship---->", ship)
    useEffect(() => {
        if (!ship.length) {
            setShipToggle("no address-no edit");
        } else {
            setShipToggle("has address-no edit");
        }
    }, [])

    // debugger
    if (shipToggle === "no address-no edit" || shipToggle === "") {
        return (
            <NoAddressOnFile setShipToggle={setShipToggle} />
        )
    } else if (shipToggle === "no address-edit") {
        return (
            <ShippingForm shipAddressButton="post button" />
        )
    } else if (shipToggle === "has address-no edit") {
        return (
            <AddressNoEdit setShipToggle={setShipToggle} />
        )
    } else if (shipToggle === "has address-edit") {
        return (
            <ShippingForm shipAddressButton={updateShipping} />
        )
    }
}