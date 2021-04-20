import React from 'react';
import { useSelector } from 'react-redux';


export default function SFLItem() {
    const items = useSelector(state => Object.values(state.items));


    const sflItems = items?.filter(item => item.saved === true);

    return (
        items.length > 0 &&
        <div className="sfl__container-item">
            {sflItems && sflItems.map(item => (
                <li key={item.id}>{item.title}</li>
            ))}
        </div>
    )
}