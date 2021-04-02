import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCatItems } from '../../store/items';
import ItemSquare from '../Items';

export default function CategoryItemList({ categoryId }) {
    const categoryItems = useSelector(state => Object.values(state.items))
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getCatItems(categoryId))
    }, [dispatch])


    return (
        <div className="category__container-item">
            {categoryItems && categoryItems?.filter(item => item.categoryId === categoryId).map(item => (
                <ItemSquare item={item} />
            ))}
        </div>
    )
}