import React from "react";
import PlacesAutocomplete from "react-places-autocomplete";
// import "./AddSpotForm.css";
import { geocodeByAddress } from "react-places-autocomplete";

function AddressSearch({ setAddress, address }) {

    function handleChange(value) {
        return setAddress(value);
    }

    async function handleSelect(address) {
        const results = await geocodeByAddress(address);
        setAddress(results[0].formatted_address);
        console.log(results, "<---------")
        return
    }

    return (
        <PlacesAutocomplete
            value={address}
            onChange={handleChange}
            onSelect={handleSelect}
        >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                    <input
                        {...getInputProps({
                            placeholder: 'Input address ...',
                            className: 'location-search-input',
                        })}
                    />
                    <div className="autocomplete-dropdown-container">
                        {loading && <div>Loading...</div>}
                        {suggestions.map((suggestion, i) => {
                            const className = suggestion.active
                                ? 'suggestion-item--active'
                                : 'suggestion-item';
                            // inline style for demonstration purpose
                            const style = suggestion.active
                                ? { backgroundColor: '#c7c7c7', cursor: 'pointer' }
                                : { backgroundColor: '#ffffff', cursor: 'pointer' };
                            return (
                                <div key={i}
                                    {...getSuggestionItemProps(suggestion, {
                                        className,
                                        style,
                                    })}
                                >
                                    <span>{suggestion.description}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </PlacesAutocomplete>
    )
}
export default AddressSearch;