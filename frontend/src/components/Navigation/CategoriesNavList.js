import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../store/categories';
import { NavLink } from 'react-router-dom';


export default function CategoriesNavList() {
    const dispatch = useDispatch();
    const categories = useSelector(state => Object.values(state?.categories));

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    const handleCreateListing = async (e) => {
        e.preventDefault();

    }

    return (
        <>
            {/* <div className="lower-nav">
                <h1>Your path the the great outdoors...--Gear up for the great outdoors!</h1>
            </div> */}
            <img className="background-image-home" src={'https://gear-again.s3-us-west-1.amazonaws.com/Site-Images/long-pano1.jpg'} />
            <div className="categories__container">
                <NavLink to="/all" activeClassName="active">All</NavLink>
                {categories && categories?.map(category => (
                    <NavLink key={category?.id} to={`/${category?.name.toLowerCase()}`}>{category?.name}</NavLink>
                ))}
                <NavLink to="/profile/sell" className="form-btn">Sell!</NavLink>
            </div>
        </>
    )
}