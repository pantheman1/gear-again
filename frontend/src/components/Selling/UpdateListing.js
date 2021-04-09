import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import SalesForm from './SalesForm';
// import { updateListing } from '../../store/items';
import { useParams } from 'react-router';

export default function UpdateListing() {
    const { id } = useParams();
    const items = useSelector(state => state?.items);

    // useEffect(() => {

    // }, [items[id]])

    console.log("id---------", id)
    console.log("ITEMS-----", items[id])

    return (
        items &&
        <>
            <SalesForm
                header="Update Listing"
                item={items[id]}
                // listingCallback={updateListing}
                buttonText="Update"
            />
        </>
    )
}