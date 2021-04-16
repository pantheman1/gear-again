import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../store/session';

export default function ShippingForm() {
    const user = useSelector(state => state?.session.user);
    const [shipStreetAddress, setShipStreetAddress] = useState(user?.shipStreetAddress || "");
    const [shipCityAddress, setShipCityAddress] = useState(user?.shipCityAddress || "");
    const [shipStateAddress, setShipStateAddress] = useState(user?.shipStateAddress || "");
    const [shipZip, setShipZip] = useState(user?.shipZip || "");
    const [billStreetAddress, setBillStreetAddress] = useState(user?.billStreetAddress || "");
    const [billCityAddress, setBillCityAddress] = useState(user?.billCityAddress || "");
    const [billStateAddress, setBillStateAddress] = useState(user?.billStateAddress || "");
    const [billZip, setBillZip] = useState(user?.billZip || "");
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();

    const handleSubmitShipping = async (e) => {
        e.preventDefault();

        const error = [];

        const data = {
            userId: user?.id,
            shipStreetAddress,
            shipCityAddress,
            shipStateAddress,
            shipZip,
            billStreetAddress,
            billCityAddress,
            billStateAddress,
            billZip,
        }

        if (shipStreetAddress &&
            shipCityAddress &&
            shipStateAddress &&
            shipZip &&
            billStreetAddress &&
            billCityAddress &&
            billStateAddress &&
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
                    <div className="input-label-container">
                        <h3>Street Address</h3>
                        <input
                            className="form__text--input"
                            name="shipStreetAddress"
                            type="text"
                            value={shipStreetAddress ? shipStreetAddress : ""}
                            autoComplete="off"
                            onChange={e => setShipStreetAddress(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-label-container">
                        <h3>City</h3>
                        <input
                            className="form__text--input"
                            name="shipCity"
                            type="text"
                            value={shipCityAddress ? shipCityAddress : ""}
                            autoComplete="off"
                            onChange={e => setShipCityAddress(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-label-container">
                        <h3>State</h3>
                        <input
                            className="form__text--input"
                            name="shipState"
                            type="text"
                            value={shipStateAddress ? shipStateAddress : ""}
                            autoComplete="off"
                            onChange={e => setShipStateAddress(e.target.value)}
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
                            onChange={e => setShipZip(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="form-container">
                    <div className="input-label-container">
                        <h3>Street Address</h3>
                        <input
                            className="form__text--input"
                            name="billStreetAddress"
                            type="text"
                            value={billStreetAddress ? billStreetAddress : ""}
                            autoComplete="off"
                            onChange={e => setBillStreetAddress(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-label-container">
                        <h3>City</h3>
                        <input
                            className="form__text--input"
                            name="billCity"
                            type="text"
                            value={billCityAddress ? billCityAddress : ""}
                            autoComplete="off"
                            onChange={e => setBillCityAddress(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-label-container">
                        <h3>State</h3>
                        <input
                            className="form__text--input"
                            name="billState"
                            type="text"
                            value={billStateAddress ? billStateAddress : ""}
                            autoComplete="off"
                            onChange={e => setBillStateAddress(e.target.value)}
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