import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoriesNavList from '../Navigation/CategoriesNavList';
import { nanoid } from 'nanoid';
import ItemSquare from '../Items';

export default function AllItems() {
    const items = useSelector(state => Object.values(state?.items))
    const dispatch = useDispatch();

    return (
        <>
            <CategoriesNavList />
            <div className="item__container-listing">
                <div className="item__listing">
                    {items && items?.map(item => (
                        <div key={nanoid()}>
                            <ItemSquare item={item} categoryName={item?.Category?.name} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}