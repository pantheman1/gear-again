import React from 'react';
import SalesForm from './SalesForm';
// import { postListedItem } from '../../store/items';


export default function NewListing() {

    const item = {
        title: "",
        brand: "",
        size: "",
        price: 1,
        cost: 0,
        description: "",
        categoryId: 0,
        conditionId: 0,
        genderId: 0,
        images: [],
    }

    return (
        <>
            <SalesForm
                header="New Listing"
                // listingCallback={postListedItem}
                buttonText="Submit"
                item={item}
            />
        </>
    )
}