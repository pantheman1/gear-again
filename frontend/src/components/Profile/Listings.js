import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListedItems } from '../../store/items';
import ItemSquare from '../Items';
import { nanoid } from 'nanoid';

export default function Listings() {
    const user = useSelector(state => state?.session.user);
    const listings = useSelector(state => Object.values(state?.items))
    const dispatch = useDispatch();

    useEffect(async () => {
        await dispatch(getListedItems(user?.id))
    }, [dispatch])

    return (
        listings &&
        <div className="item__container-listing">
            <div className="item__listing">
                {listings && listings?.map(item => (
                    <div key={nanoid()}>
                        <ItemSquare item={item} categoryName={item?.Category?.name} />
                    </div>
                ))}
            </div>
        </div>
    )
}