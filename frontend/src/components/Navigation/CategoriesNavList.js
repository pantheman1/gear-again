import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


export default function CategoriesNavList() {
    const categories = useSelector(state => Object.values(state?.categories));

    return (
        <>
            <div className="image__text-container">
                <div className="image__text">
                    <div className="image__text-firstLine">GIVE YOUR <span className="gear-logo">GEAR</span></div>
                    <div className="image__text-secondLine">ADVENTURE <span className="gear-logo">AGAIN</span></div>
                </div>
                <img className="background-image-home" src={'https://gear-again.s3-us-west-1.amazonaws.com/two-lakes.JPG'} />
            </div>
            <div className="categories__container">
                <NavLink to="/all" activeClassName="active">ALL</NavLink>
                {categories && categories?.map(category => (
                    <NavLink key={category?.id} to={`/${category?.name.toLowerCase()}`}>{category?.name}</NavLink>
                ))}
                <NavLink to="/profile/sell" className="form-btn">SELL</NavLink>
            </div>
        </>
    )
}