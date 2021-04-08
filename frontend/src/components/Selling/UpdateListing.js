import React from 'react';
import { useSelector } from 'react-redux';
import SalesForm from './SalesForm';


export default function UpdateListing() {
    const items = useSelector(state => Object.values(state.items));

    return (
        <>
            <SalesForm header="New Listing" />
        </>
    )
}