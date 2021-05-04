import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../store/session';
import AddressSearch from './AddressSearch';

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
    const [address, setAddress] = useState("");
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();

    // let autocomplete;
    // let address1Field;
    // let address2Field;
    // let postalField;

    // function initAutocomplete() {
    //     address1Field = document.querySelector("#ship-address");
    //     address2Field = document.querySelector("#address2");
    //     postalField = document.querySelector("#postcode");
    //     // Create the autocomplete object, restricting the search predictions to
    //     // addresses in the US and Canada.
    //     autocomplete = new google.maps.places.Autocomplete(address1Field, {
    //         componentRestrictions: { country: ["us", "ca"] },
    //         fields: ["address_components", "geometry"],
    //         types: ["address"],
    //     });
    //     address1Field.focus();
    //     // When the user selects an address from the drop-down, populate the
    //     // address fields in the form.
    //     autocomplete.addListener("place_changed", fillInAddress);
    // }

    // function fillInAddress() {
    //     // Get the place details from the autocomplete object.
    //     const place = autocomplete.getPlace();
    //     let address1 = "";
    //     let postcode = "";

    //     // Get each component of the address from the place details,
    //     // and then fill-in the corresponding field on the form.
    //     // place.address_components are google.maps.GeocoderAddressComponent objects
    //     // which are documented at http://goo.gle/3l5i5Mr
    //     for (const component of place.address_components) {
    //         const componentType = component.types[0];

    //         switch (componentType) {
    //             case "street_number": {
    //                 address1 = `${component.long_name} ${address1}`;
    //                 break;
    //             }

    //             case "route": {
    //                 address1 += component.short_name;
    //                 break;
    //             }

    //             case "postal_code": {
    //                 postcode = `${component.long_name}${postcode}`;
    //                 break;
    //             }

    //             case "postal_code_suffix": {
    //                 postcode = `${postcode}-${component.long_name}`;
    //                 break;
    //             }
    //             case "locality":
    //                 document.querySelector("#locality").value = component.long_name;
    //                 break;

    //             case "administrative_area_level_1": {
    //                 document.querySelector("#state").value = component.short_name;
    //                 break;
    //             }
    //             case "country":
    //                 document.querySelector("#country").value = component.long_name;
    //                 break;
    //         }
    //     }
    //     address1Field.value = address1;
    //     postalField.value = postcode;
    //     // After filling the form with address components from the Autocomplete
    //     // prediction, set cursor focus on the second address line to encourage
    //     // entry of subpremise information such as apartment, unit, or floor number.
    //     address2Field.focus();
    // }

    const handleZip = async (e) => {
        e.preventDefault();
        setShipZip(e.target.value)
        // await fetch(`https://maps.googleapis.com/maps/api/js?key=AIzaSyCfjqLTIhu0WCGg2BL-o0Xp8BFvM8yF_wo&libraries=places`)
        // https://maps.googleapis.com/maps/api/js?key=AIzaSyCfjqLTIhu0WCGg2BL-o0Xp8BFvM8yF_wo&libraries=places&callback=initMap
    }

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
                        <AddressSearch address={address} setAddress={setAddress} />
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