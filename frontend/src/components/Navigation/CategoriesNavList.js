import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../store/categories';


export default function CategroriesNavList() {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories);

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    const categoriesArr = Object.values(categories);

    return (
        <>
            <div className="categories__container">
                <ul className="categories__list">
                    {categories && categoriesArr?.map(category => (
                        <li key={category.id}>{category.name}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}