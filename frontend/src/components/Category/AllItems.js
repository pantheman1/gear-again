import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoriesNavList from '../Navigation/CategoriesNavList';
import { nanoid } from 'nanoid';
import ItemSquare from '../Items';
import { getItems } from '../../store/items';

export default function AllItems() {
    const items = useSelector(state => Object.values(state?.items))
    const [isLoaded, setIsLoaded] = useState(false);
    const dispatch = useDispatch();

    useEffect(async () => {
        await dispatch(getItems())
        setIsLoaded(true)
    }, [dispatch])

    return (
        isLoaded &&
        <>
            <CategoriesNavList />
            <div className="cat__container-name">
                <h1>All Products</h1>
            </div>
            <div className="item__container-listing">
                <div className="item__listing">
                    {isLoaded && items?.map(item => (
                        <div key={nanoid()}>
                            <ItemSquare item={item} categoryName={item?.Category?.name} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}