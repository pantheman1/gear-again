import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../store/categories';
import { NavLink } from 'react-router-dom';


export default function CategoriesNavList() {
    const dispatch = useDispatch();
    const categories = useSelector(state => Object.values(state.categories));

    useEffect(() => {
        dispatch(getCategories());
    }, []);


    return (
        <>
            <div className="categories__container">
                <NavLink to="/all" activeClassName="active">All</NavLink>
                {categories && categories?.map(category => (
                    <NavLink key={category.id} to={`/${category?.name.toLowerCase()}`}>{category?.name}</NavLink>
                ))}
            </div>
        </>
    )
}