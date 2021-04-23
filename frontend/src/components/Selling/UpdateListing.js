import React from 'react';
import { useSelector } from 'react-redux';
import SalesForm from './SalesForm';
// import { updateListing } from '../../store/items';
import { useHistory, useParams } from 'react-router';

export default function UpdateListing() {
    const { id } = useParams();
    const items = useSelector(state => state?.items);
    const history = useHistory();

    const cancelUpdate = (e) => {
        e.preventDefault();
        history.push(`/${items[id]?.Category.name.toLowerCase()}/${items[id]?.id}`)
    }


    return (
        Object.values(items).length > 0 &&
        <>
            <SalesForm
                header="Update Listing"
                item={items[id]}
                // listingCallback={updateListing}
                buttonText="Update"
                cancel={cancelUpdate}
            />
        </>
    )
}