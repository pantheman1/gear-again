import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { getAllBilling, updateBilling } from '../../store/bill';
import { getAllShipping, postShipping } from '../../store/ship';
import AddressSearch from './AddressSearch';

export default function ShippingForm({ shipAddressButton, btnText, setShipToggle }) {
    const user = useSelector(state => state?.session.user);
    const ship = useSelector(state => Object.values(state.ship));
    // const bill = useSelector(state => state.bill);
    const [shipStreet, setShipStreet] = useState(ship[0].shipStreet || "");
    const [shipApt, setShipApt] = useState(ship[0].shipApt || "");
    const [shipCity, setShipCity] = useState(ship[0].shipCity || "");
    const [shipState, setShipState] = useState(ship[0].shipState || "");
    const [shipZip, setShipZip] = useState(ship[0].shipZip || "");
    // const [billStreet, setBillStreet] = useState(bill?.billStreet || "");
    // const [billApt, setBillApt] = useState(bill?.billApt || "");
    // const [billCity, setBillCity] = useState(bill?.billCity || "");
    // const [billState, setBillState] = useState(bill?.billState || "");
    // const [billZip, setBillZip] = useState(bill?.billZip || "");
    const [address, setAddress] = useState("");
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(getAllBilling);
        if (user) {
            dispatch(getAllShipping(user?.id));
        }
    }, [])

    useEffect(() => {
        if (address) {
            setShipStreet(address?.split(", ")[0])
            setShipCity(address?.split(", ")[1])
            setShipState(address?.split(", ")[2].split(" ")[0])
            setShipZip(address?.split(", ")[2].split(" ")[1])
        }
    }, [address, shipStreet])

    const handleShip = async (e) => {
        e.preventDefault();

        const error = [];
        const shipData = {
            userId: user?.id,
            shipStreet,
            shipApt,
            shipCity,
            shipState,
            shipZip,
        }
        if (shipStreet &&
            shipCity &&
            shipState &&
            shipZip) {
            dispatch(shipAddressButton(shipData))
            setShipToggle("has address-no edit")
        } else {
            error.push("Please fill out all shipping fields.")
            setErrors(error)
        }
    }

    // const handleBill = async (e) => {
    //     e.preventDefault();

    //     const error = [];

    //     const billData = {
    //         userId: user?.id,
    //         billStreet,
    //         billApt,
    //         billCity,
    //         billState,
    //         billZip,
    //     }

    //     if (billStreet &&
    //         billCity &&
    //         billState &&
    //         billZip) {
    //         dispatch(updateBilling(billData))
    //     } else {
    //         error.push("Please fill out all billing fields.")
    //         setErrors(error)
    //     }
    // }

    return (
        Object.keys(user).length > 0 &&
        <>
            <form className="">
                <ul>
                    {errors.map((error, idx) => <li className="error-handling" key={idx}>{error}</li>)}
                </ul>
                <div className="form-container">
                    <div className="input-label-container">
                        <h3>Street Address</h3>
                        <AddressSearch shipStreet={shipStreet} setShipStreet={setShipStreet} address={address} setAddress={setAddress} />
                    </div>
                    <div className="input-label-container">
                        <h3>Apartment</h3>
                        <input
                            className="form__text--input"
                            name="shipStreet"
                            type="text"
                            value={shipApt}
                            autoComplete="off"
                            onChange={e => setShipApt(e.target.value)}
                        />
                    </div>
                    <div className="input-label-container">
                        <h3>City</h3>
                        <input
                            className="form__text--input"
                            name="shipCity"
                            type="text"
                            value={shipCity}
                            autoComplete="off"
                            onChange={e => setShipCity(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-label-container">
                        <h3>State</h3>
                        <input
                            className="form__text--input"
                            name="shipState"
                            type="text"
                            value={shipState}
                            autoComplete="off"
                            onChange={e => setShipState(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-label-container">
                        <h3>Zip Code</h3>
                        <input
                            className="form__text--input"
                            name="shipZip"
                            type="text"
                            value={shipZip}
                            autoComplete="off"
                            // onChange={handleZip}
                            required
                        />
                        <button onClick={handleShip}>{btnText}</button>
                    </div>
                </div>
                {/* <div className="form-container">
                    <div className="input-label-container">
                        <h3>Street Address</h3>
                        <input
                            className="form__text--input"
                            name="billStreet"
                            type="text"
                            value={billStreet ? billStreet : ""}
                            autoComplete="off"
                            onChange={e => setBillStreet(e.target.value)}
                            required
                        />
                        <div className="input-label-container">
                            <h3>Apartment</h3>
                            <input
                                className="form__text--input"
                                name="billStreet"
                                type="text"
                                value={billApt ? billApt : ""}
                                autoComplete="off"
                                onChange={e => setBillApt(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="input-label-container">
                        <h3>City</h3>
                        <input
                            className="form__text--input"
                            name="billCity"
                            type="text"
                            value={billCity ? billCity : ""}
                            autoComplete="off"
                            onChange={e => setBillCity(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-label-container">
                        <h3>State</h3>
                        <input
                            className="form__text--input"
                            name="billState"
                            type="text"
                            value={billState ? billState : ""}
                            autoComplete="off"
                            onChange={e => setBillState(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-label-container">
                        <h3>Zip Code</h3>
                        <input
                            className="form__text--input"
                            name="billZip"
                            type="text"
                            value={billZip ? billZip : ""}
                            autoComplete="off"
                            onChange={e => setBillZip(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <button type="submit" onClick={handleBill}>{btnText}</button>
                    </div>
                </div> */}
            </form>
        </>
    )
}