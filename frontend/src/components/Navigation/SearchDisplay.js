import React from 'react';
import { NavLink } from 'react-router-dom';


export default function SearchResult({ item }) {


    return (
        Object.values(item).length > 0 &&
        <div className="search__container-item">
            <NavLink to={``} className="search__item-title">{item?.title}</NavLink>
        </div>
    )
}