import React from 'react';
import { useSelector } from 'react-redux';
import ItemSquare from '../Items';

export default function Listings() {
    const user = useSelector(state => state?.session.user);
    const listings = useSelector(state => Object.values(state?.items))

    return (
        listings &&
        <div className="item__container-listing">
            <div className="item__listing">
                {listings && listings?.filter(userItem => userItem.userId === user.id).map(item => (
                    <div key={item.id}>
                        <ItemSquare item={item} categoryName={item?.Category?.name} />
                    </div>
                ))}
            </div>
        </div>
    )
}