import React from 'react';
import './Item.css';
import { NavLink } from 'react-router-dom';

export default function ItemSquare({ categoryName, item }) {


    return (
        item &&
        <>
            <div className="item__container">
                <NavLink to={`/${categoryName?.toLowerCase()}/${item?.id}`}>
                    <img key={item.id} className="item__square-image" src={item?.Photos[0]?.url}></img>
                    <div className="item-description">
                        <li>{item?.title}</li>
                        <li>{item?.size}</li>
                        <li>${item?.price}</li>
                    </div>
                </NavLink>
            </div>
        </>
    )
}