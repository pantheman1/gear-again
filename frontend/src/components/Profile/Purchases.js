import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPurchasedItems } from '../../store/items';
import ItemSquare from '../Items'
import { nanoid } from 'nanoid';

export default function Purchases() {
    const dispatch = useDispatch();
    const user = useSelector(state => state?.session.user);
    const purchases = useSelector(state => Object.values(state?.items))

    useEffect(async () => {
        await dispatch(getPurchasedItems(user?.id))
    }, [dispatch])

    return (
        purchases &&
        <div className="item__container-listing">
            <div className="item__listing">
                {purchases && purchases?.map(item => (
                    <div key={nanoid()}>
                        <ItemSquare item={item} categoryName={item?.Category?.name} />
                    </div>
                ))}
            </div>
        </div>
    )
}