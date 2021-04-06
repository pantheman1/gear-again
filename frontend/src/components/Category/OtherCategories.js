import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoriesNavList from '../Navigation/CategoriesNavList';
import { nanoid } from 'nanoid';
import ItemSquare from '../Items';
import { useParams } from 'react-router';
import { getItems } from '../../store/items';

export default function OtherCategoryItems() {
    const items = useSelector(state => Object.values(state?.items))
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(async () => {
        await dispatch(getItems())
    }, [dispatch])

    return (
        items &&
        <>
            <CategoriesNavList />
            <div className="item__container-listing">
                <div className="item__listing">
                    {items && items?.filter(item => item.Category.name.toLowerCase() == id).map(item => (
                        <div key={nanoid()}>
                            <ItemSquare item={item} categoryName={id} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}