import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { postListedItem } from '../../store/items';
import CategoriesNavList from '../Navigation/CategoriesNavList';
import SalesForm from './SalesForm';



export default function NewListing() {
    const user = useSelector(state => state?.session.user);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch()
    // }, [])

    return (
        <>
            <SalesForm title="" />
        </>
    )

}