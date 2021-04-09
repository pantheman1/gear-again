import React from 'react';
import './Item.css';
import { NavLink } from 'react-router-dom';

export default function ItemSquare({ categoryName, item }) {

    console.log("ITEM------TEST")

    return (
        item &&
        <>
            <div className="item__container">
                <NavLink to={`/${categoryName?.toLowerCase()}/${item?.id}`}>
                    <img key={item?.id} className="item__square-image" src={item?.Photos[0]?.url}></img>
                    <div className="item-description">
                        <li className="item__description">{item?.title}</li>
                        <li>${item?.price}</li>
                        <li className="item__size">Size: {item?.size}</li>
                    </div>
                </NavLink>
            </div>
        </>
    )
}