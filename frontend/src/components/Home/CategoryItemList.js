import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCatItems } from '../../store/items';

export default function CategoryItemList({ categoryId }) {
    const categoryItems = useSelector(state => Object.values(state.items))
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getCatItems(categoryId))
    }, [dispatch])


    return (
        <>
            <ul>
                {categoryItems && categoryItems?.filter(item => item.categoryId === categoryId).map(item => (
                    <>
                        <li key={item.id}>{item.title}</li>
                        <li>{item.brand}</li>
                        <li>${item.price}</li>
                    </>
                ))}
            </ul>
        </>
    )
}