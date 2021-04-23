import React from 'react';
import { useHistory } from 'react-router';
import SalesForm from './SalesForm';
// import { postListedItem } from '../../store/items';


export default function NewListing() {
    const history = useHistory();

    const item = {
        title: "",
        brand: "",
        size: "",
        price: 1,
        cost: 0,
        weight: 1,
        description: "",
        categoryId: 0,
        conditionId: 0,
        genderId: 0,
        images: [],
    }

    const cancelNewListing = (e) => {
        e.preventDefault();
        history.push('/');
    }

    return (
        <>
            <SalesForm
                header="New Listing"
                // listingCallback={postListedItem}
                buttonText="Submit"
                item={item}
                cancel={cancelNewListing}
            />
        </>
    )
}