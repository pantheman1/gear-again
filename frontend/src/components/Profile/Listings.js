import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListedItems } from '../../store/items';
import { getCategories } from '../../store/categories';
import ItemSquare from '../Items';
import { nanoid } from 'nanoid';

export default function Listings() {
    const user = useSelector(state => state?.session.user);
    const listings = useSelector(state => Object.values(state?.items))
    const categories = useSelector(state => Object.values(state?.categories));
    const dispatch = useDispatch();

    useEffect(async () => {
        await dispatch(getListedItems(user?.id))
        await dispatch(getCategories());
    }, [dispatch])

    // console.log("THIS IS LISTINGS--------", listings)
    return (
        listings &&
        <>
            <h1>Listings</h1>
            {categories && categories?.map(category => (
                <div key={nanoid()}>
                    {/* <ItemSquare items={listings} categoryName={category?.name} /> */}
                </div>
            ))}
        </>
    )
}