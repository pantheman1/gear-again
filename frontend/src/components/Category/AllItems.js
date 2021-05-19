import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemSquare from '../Items';
// import { getItems } from '../../store/items';

export default function AllItems() {
    const items = useSelector(state => Object.values(state?.items))
    const category = useSelector(state => state?.categories)
    const [isLoaded, setIsLoaded] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setIsLoaded(true)
    }, [dispatch])

    return (
        isLoaded &&
        <>
            <div className="cat__container-name">
                <h1>All Products</h1>
            </div>
            <div className="item__container-listing">
                <div className="item__listing">
                    {isLoaded && items.filter(item => item.isSold === false).map(item => (
                        <div key={item.id}>
                            <ItemSquare item={item} categoryName={category[item?.categoryId]?.name} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}