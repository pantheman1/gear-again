import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import AddToCart from '../Cart';



export default function ItemDetailPage() {
    const user = useSelector(state => state?.session.user);
    const items = useSelector(state => state?.items);
    const { id } = useParams();
    const history = useHistory();
    const item = items[id];

    // console.log("ID from ItemDETAIL PAGE-----", id)
    // console.log("ITEM from ItemDETAIL PAGE-----", items[id])


    // debugger
    const editButton = (e) => {
        e.preventDefault();
        history.push(`/${item.Category.name.toLowerCase()}/${item.id}/edit`)
    }

    const addToCart = (e) => {
        e.preventDefault();
    }

    let cartBtn;
    if (item?.userId !== user?.id) {
        cartBtn = (
            <>
                {/* <button className="form-btn" type="button" onClick={addToCart}>Add to Cart</button> */}
                <AddToCart />
            </>
        )
    }

    let editBtn;
    let costField;
    if (item?.userId === user?.id) {
        editBtn = (
            <>
                <NavLink to={`/${item?.Category.name.toLowerCase()}/${item?.id}/edit`} className="form-btn" onClick={editButton}>Edit</NavLink>
            </>
        )
        costField = (
            <div className="item__container">
                <div className="item__container-label">
                    <h2>Cost</h2>
                </div>
                <div className="item__container-value">
                    {item?.cost}
                </div>
            </div>
        )
    }

    // render gender--optimize later
    let gender;
    if (item?.genderId === 1) {
        gender = "Boy"
    } else if (item?.genderId === 2) {
        gender = "Girl"
    } else {
        gender = "Neutral"
    }

    // render gender--optimize later
    let condition;
    if (item?.conditionId === 1) {
        condition = "New"
    } else if (item?.conditionId === 2) {
        condition = "Good condition"
    } else if (item?.conditionId === 3) {
        condition = "Well used"
    } else {
        condition = "Just need it gone!"
    }

    return (
        Object.values(items).length > 0 &&
        <div className="itemDetails__container">
            <div className="detail-item-page form-container">
                <h1>Item Details</h1>
                <div className="item__container">
                    <div className="item__container-label">
                        <h2>Title</h2>
                    </div>
                    <div className="item__container-value">
                        {item?.title}
                    </div>
                </div>
                <div className="item__container">
                    <div className="item__container-label">
                        <h2>Brand</h2>
                    </div>
                    <div className="item__container-value">
                        {item?.brand}
                    </div>
                </div>
                <div className="item__container">
                    <div className="item__container-label">
                        <h2>Size</h2>
                    </div>
                    <div className="item__container-value">
                        {item?.size}
                    </div>
                </div>
                <div className="item__container">
                    <div className="item__container-label">
                        <h2>Price</h2>
                    </div>
                    <div className="item__container-value">
                        {item?.price}
                    </div>
                </div>
                {costField}
                <div className="item__container">
                    <div className="item__container-label">
                        <h2>Gender</h2>
                    </div>
                    <div className="item__container-value">
                        {gender}
                    </div>
                </div>
                <div className="item__container">
                    <div className="item__container-label">
                        <h2>Category</h2>
                    </div>
                    <div className="item__container-value">
                        {item?.Category.name}
                    </div>
                </div>
                <div className="item__container">
                    <div className="item__container-label">
                        <h2>Condition</h2>
                    </div>
                    <div className="item__container-value">
                        {condition}
                    </div>
                </div>
                <div className="item__container">
                    <div className="item__container-label">
                        <h2>Description</h2>
                    </div>
                    <div className="item__container-value">
                        {item?.description}
                    </div>
                </div>
                {editBtn}
                {cartBtn}
            </div>
        </div>
    )
}