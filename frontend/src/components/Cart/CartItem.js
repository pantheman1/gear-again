import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { Input } from "usetheform";
import Cookies from 'universal-cookie';
const { USER_CART_COOKIE } = require('../../globals.js')

const preventNegativeQty = val => (val < 1 ? 1 : val);
export function CartItem({ item, itemIds }) {
    const user = useSelector(state => state.session.user);
    // debugger
    const { id, title, brand, size, price, userId, Photos } = item;
    const imageUrl = Photos[0].url;
    const cookies = new Cookies();

    const onRemoveItem = e => {
        // debugger
        e.preventDefault();
        const newIds = itemIds.filter(itemId => itemId != id).join(",");
        cookies.set(USER_CART_COOKIE, newIds, { path: '/' });
        itemIds = cookies.get(USER_CART_COOKIE);
        // debugger
    }


    console.log("CART ITEM PAGE-------")

    // setCartItem((prev) => prev.filter(({ id }) => id !== idToRemove));
    // debugger
    return (
        <>
            <input type="hidden" name="id" value={id} />
            <div className="cart__container-image"><img className="item__square-image" src={imageUrl} /></div>
            {/* <div className="field">
                <h2>Seller</h2>
                <div>{}</div>
            </div> */}
            <div className="field">
                <h2>Title</h2>
                <div>{title}</div>
            </div>
            <div className="field">
                <h2>Brand</h2>
                <div>{brand}</div>
            </div>
            <div className="field">
                <h2>Size</h2>
                <div>{size}</div>
            </div>
            <div className="field">
                <h2>Price $</h2>
                <div>{price}</div>
            </div>
            <div className="field">
                <button className="form-btn-cancel" type="button" onClick={onRemoveItem}>
                    Remove
        </button>
            </div>
        </>
    );
}