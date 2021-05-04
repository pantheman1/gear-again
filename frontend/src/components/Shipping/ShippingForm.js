import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBilling } from '../../store/bill';
import { updateUser } from '../../store/session';
import { getAllShipping } from '../../store/ship';
import AddressSearch from './AddressSearch';

export default function ShippingForm() {
    const user = useSelector(state => state?.session.user);
    const ship = useSelector(state => state.ship);
    const bill = useSelector(state => state.bill);
    const [shipStreet, setShipStreet] = useState(ship?.shipStreet || "");
    const [shipApt, setShipApt] = useState(ship?.shipApt || "");
    const [shipCity, setShipCity] = useState(ship?.shipCity || "");
    const [shipState, setShipState] = useState(ship?.shipState || "");
    const [shipZip, setShipZip] = useState(ship?.shipZip || "");
    const [billStreet, setBillStreet] = useState(bill?.billStreet || "");
    const [billApt, setBillApt] = useState(bill?.billApt || "");
    const [billCity, setBillCity] = useState(bill?.billCity || "");
    const [billState, setBillState] = useState(bill?.billState || "");
    const [billZip, setBillZip] = useState(bill?.billZip || "");
    const [address, setAddress] = useState("");
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllBilling);
        dispatch(getAllShipping);
    })

    const handleZip = async (e) => {
        e.preventDefault();
        setShipZip(e.target.value)
    }

    const handleSubmitShipping = async (e) => {
        e.preventDefault();

        const error = [];

        const data = {
            userId: user?.id,
            shipStreet,
            shipCity,
            shipState,
            shipZip,
            billStreet,
            billCity,
            billState,
            billZip,
        }

        if (shipStreet &&
            shipCity &&
            shipState &&
            shipZip &&
            billStreet &&
            billCity &&
            billState &&
            billZip) {
            await dispatch(updateUser(data))

        } else {
            error.push("Please fill out all shipping fields.")
            setErrors(error)
            return
        }
    }


    return (
        Object.keys(user).length > 0 &&
        <>
            <form className="">
                <ul>
                    {errors.map((error, idx) => <li className="error-handling" key={idx}>{error}</li>)}
                </ul>
                <div className="form-container">
                    <AddressSearch address={address} setAddress={setAddress} />
                    <div className="input-label-container">
                        <h3>Street Address</h3>
                        <input
                            className="form__text--input"
                            name="shipStreet"
                            type="text"
                            value={shipStreet ? shipStreet : ""}
                            autoComplete="off"
                            onChange={e => setShipStreet(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-label-container">
                        <h3>Apartment</h3>
                        <input
                            className="form__text--input"
                            name="shipStreet"
                            type="text"
                            value={shipApt ? shipApt : ""}
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
                            value={shipCity ? shipCity : ""}
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
                            value={shipState ? shipState : ""}
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
                            value={shipZip ? shipZip : ""}
                            autoComplete="off"
                            // onChange={handleZip}
                            required
                        />
                        <button onClick={handleZip}>Update City/State</button>
                    </div>
                </div>
                <div className="form-container">
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
                </div>
                <div>
                    <button type="submit" onClick={handleSubmitShipping}>Update Shipping Info</button>
                </div>
            </form>
        </>
    )
}