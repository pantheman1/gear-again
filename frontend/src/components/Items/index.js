import React from 'react';
import { nanoid } from 'nanoid';
import './Item.css';

export default function ItemSquare({ item }) {


    return (
        <div className="item__container">
            <img key={nanoid()} className="item__square-image" src={item.Photos[0]?.url}></img>
            <li>{item.title}</li>
            <li>{item.size}</li>
            <li>${item.price}</li>
        </div>
    )
}