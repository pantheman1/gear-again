import React from 'react';
import { nanoid } from 'nanoid';
import './Item.css';
import { NavLink } from 'react-router-dom';

export default function ItemSquare({ categoryName, item }) {


    return (
        <div className="item__listing">
            <div className="item__container">
                <NavLink to={`/${categoryName?.toLowerCase()}/${item?.id}`}>
                    <img key={nanoid()} className="item__square-image" src={item?.Photos[0]?.url}></img>
                    <div className="item-description">
                        <li>{item?.title}</li>
                        <li>{item?.size}</li>
                        <li>${item?.price}</li>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}