import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function ShippingForm() {
    const user = useSelector(state => state?.session.user);
    const [shipStreetAddress, setShipStreetAddress] = useState(user?.shippingStreetAddress || "");
    const [shipCityAddress, setShipCityAddress] = useState(user?.shippingCityAddress || "");
    const [shipStateAddress, setShipStateAddress] = useState(user?.shippingStateAddress || "");
    const [shipZip, setShipZip] = useState(user?.shippingZipAddress || "");
    const [billStreetAddress, setBillStreetAddress] = useState(user?.billingStreetAddress || "");
    const [billCityAddress, setBillCityAddress] = useState(user?.billingCityAddress || "");
    const [billStateAddress, setBillStateAddress] = useState(user?.billingStateAddress || "");
    const [billZip, setBillZip] = useState(user?.billingZipAddress || "");
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
            await dispatch(postShippingInfo(data))

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
                            name="shippingStreetAddress"
                            type="text"
                            value={shippingStreetAddress ? shippingStreetAddress : ""}
                            autoComplete="off"
                            onChange={e => setShipStreetAddress(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-label-container">
                        <h3>City</h3>
                        <input
                            className="form__text--input"
                            name="shippingCity"
                            type="text"
                            value={shippingCityAddress ? shippingCityAddress : ""}
                            autoComplete="off"
                            onChange={e => setShipCityAddress(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-label-container">
                        <h3>State</h3>
                        <input
                            className="form__text--input"
                            name="shippingState"
                            type="text"
                            value={shippingStateAddress ? shippingStateAddress : ""}
                            autoComplete="off"
                            onChange={e => setShipStateAddress(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-label-container">
                        <h3>Zip Code</h3>
                        <input
                            className="form__text--input"
                            name="shippingZip"
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
                            name="billingStreetAddress"
                            type="text"
                            value={billingStreetAddress ? billingStreetAddress : ""}
                            autoComplete="off"
                            onChange={e => setBillStreetAddress(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-label-container">
                        <h3>City</h3>
                        <input
                            className="form__text--input"
                            name="billingCity"
                            type="text"
                            value={billingCityAddress ? billingCityAddress : ""}
                            autoComplete="off"
                            onChange={e => setBillCityAddress(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-label-container">
                        <h3>State</h3>
                        <input
                            className="form__text--input"
                            name="billingState"
                            type="text"
                            value={billingStateAddress ? billingStateAddress : ""}
                            autoComplete="off"
                            onChange={e => setBillStateAddress(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-label-container">
                        <h3>Zip Code</h3>
                        <input
                            className="form__text--input"
                            name="billingZip"
                            type="text"
                            value={billZip ? billZip : ""}
                            autoComplete="off"
                            onChange={e => setBillZip(e.target.value)}
                            required
                        />
                    </div>
                </div>
            </form>
        </>
    )
}