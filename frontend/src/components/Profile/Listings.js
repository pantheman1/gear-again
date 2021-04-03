import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListedItems } from '../../store/items';

export default function Listings() {
    const user = useSelector(state => state?.session.user);
    const dispatch = useDispatch();
    console.log("THIS IS LISTINGS--------", user?.id)

    //query for items where the userId matches the session user.id
    useEffect(async () => {
        await dispatch(getListedItems(user?.id))
    }, [dispatch])

    return (
        <>
            <h1>Listings</h1>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </>
    )
}