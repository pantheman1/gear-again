import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';



export default function ItemDetailPage() {
    const user = useSelector(state => state?.session.user);
    const items = useSelector(state => Object.values(state?.items));
    const { id } = useParams();
    const history = useHistory();
    const item = items[id];

    const editButton = (e) => {
        e.preventDefault();
        history.push(`/${item.Category.name}/${item.id}/edit`)
    }

    let editBtn;
    let costField;
    if (items[id]?.userId === user?.id) {
        editBtn = (
            <>
                <button className="form-btn" type="button" onClick={editButton}>Edit</button>
            </>
        )
        costField = (
            <div className="item__container">
                <div className="item__container-label">
                    <h2>Cost</h2>
                </div>
                <div className="item__container-value">
                    {item.cost}
                </div>
            </div>
        )
    }

    return (
        items.length > 0 &&
        <>
            <h1>Item Details</h1>
            <div className="item__container">
                <div className="item__container-label">
                    <h2>Title</h2>
                </div>
                <div className="item__container-value">
                    {item.title}
                </div>
            </div>
            <div className="item__container">
                <div className="item__container-label">
                    <h2>Brand</h2>
                </div>
                <div className="item__container-value">
                    {item.brand}
                </div>
            </div>
            <div className="item__container">
                <div className="item__container-label">
                    <h2>Size</h2>
                </div>
                <div className="item__container-value">
                    {item.size}
                </div>
            </div>
            <div className="item__container">
                <div className="item__container-label">
                    <h2>Price</h2>
                </div>
                <div className="item__container-value">
                    {item.price}
                </div>
            </div>
            {costField}
            {/* <div className="item__container">
                <div className="item__container-label">
                    <h2>Price</h2>
                </div>
                <div className="item__container-value">
                    {item.gender}
                </div>
            </div> */}
            {editBtn}
        </>
    )
}