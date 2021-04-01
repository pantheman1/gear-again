import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../store/categories';
import { NavLink } from 'react-router-dom';


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
                    <NavLink to="/all" activeClassName="active">All</NavLink>
                    {categories && categoriesArr?.map(category => (
                        <NavLink key={category.id} to={`/${category.name.toLowerCase()}`}>{category.name}</NavLink>
                    ))}
                </ul>
            </div>
        </>
    )
}