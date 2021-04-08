import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


export default function CategoriesNavList() {
    const categories = useSelector(state => Object.values(state?.categories));

    return (
        <>
            <img className="background-image-home" src={'https://gear-again.s3-us-west-1.amazonaws.com/Site-Images/long-pano1.jpg'} />
            <div className="categories__container">
                <NavLink to="/all" activeClassName="active">All</NavLink>
                {categories && categories?.map(category => (
                    <NavLink key={category?.id} to={`/${category?.name.toLowerCase()}`}>{category?.name}</NavLink>
                ))}
                <NavLink to="/profile/sell" className="form-btn">Sell</NavLink>
            </div>
        </>
    )
}