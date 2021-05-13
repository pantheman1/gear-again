import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllShipping, postShipping, updateShipping } from '../../store/ship';
import AddressNoEdit from './AddressNoEdit';
import NoAddressOnFile from './NoAddressOnFile';
import ShippingForm from './ShippingForm';


export default function AddressToggle() {
    const user = useSelector(state => state.session.user);
    const ship = useSelector(state => Object.values(state.ship));
    const [shipToggle, setShipToggle] = useState(ship.length ? "has address-no edit" : "no address-no edit");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllShipping(user.id));
        if (ship.length) {
            setShipToggle("has address-no edit")
        }
    }, [])

    // if user has no ship address:
    // [x] default to "You have no address on file" message 
    // [x] with add ship address button
    // when button is clicked:
    // [x] set the shipToggle to "no address-edit" and show blank shipping form
    // [x] send "postShipping" as prop to form
    // upon POST, setShipToggle to "has address-no edit"--no redirect
    // if use has shipping address:
    // default to show address and an edit button
    // when button is clicked:
    // set the shipToggle to "has address-edit" and show filled out shipping form
    // upon PATCH, setShipToggle to "has address-no edit"--no redirect

    useEffect(() => {
    }, [shipToggle])

    if (shipToggle === "no address-no edit" || shipToggle === "") {
        return (
            <NoAddressOnFile setShipToggle={setShipToggle} />
        )
    } else if (shipToggle === "no address-edit") {
        return (
            <ShippingForm setShipToggle={setShipToggle} shipAddressButton={postShipping} btnText="Add shipping address" />
        )
    } else if (shipToggle === "has address-no edit") {
        return (
            <AddressNoEdit setShipToggle={setShipToggle} />
        )
    } else if (shipToggle === "has address-edit") {
        return (
            <ShippingForm setShipToggle={setShipToggle} shipAddressButton={updateShipping} btnText="Update shipping address" />
        )
    }
}