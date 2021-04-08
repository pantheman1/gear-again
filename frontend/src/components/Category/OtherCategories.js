import React from 'react';
import { useSelector } from 'react-redux';
import ItemSquare from '../Items';
import { useParams } from 'react-router';
import './Categories.css';

export default function OtherCategoryItems() {
    const items = useSelector(state => Object.values(state?.items))
    const { id } = useParams();

    return (
        items &&
        <>
            <div className="cat__container-name">
                <h1>{id[0].toUpperCase() + id.slice(1)}</h1>
            </div>
            <div className="item__container-listing">
                <div className="item__listing">
                    {items && items?.filter(item => item.Category.name.toLowerCase() == id && item.isSold === false).map(item => (
                        <div key={item.id}>
                            <ItemSquare item={item} categoryName={id} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}