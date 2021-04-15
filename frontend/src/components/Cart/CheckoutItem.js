import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem } from "../../store/cart";
import './Cart.css';
import CheckoutTotals from "./CheckoutTotals";

// passing in item which is contains the item's information for that cart item
export default function CheckoutItem({ item }) {
    const allItems = useSelector(state => state.items);
    const cart = useSelector(state => state?.cart);
    const dispatch = useDispatch()

    const cartItems = Object.values(cart);
    const { id, title, brand, size, price, userId, Photos } = item;
    const imageUrl = Photos[0].url;

    const handlePurchase = (e) => {
        e.preventDefault();
    }

    const onRemoveItem = e => {
        e.preventDefault();
        const data = {
            itemId: id,
            cartItemId: cart[id].id,
        }
        console.log("data from cartItems------", data)
        dispatch(removeCartItem(data))
    }

    return (
        Object.values(allItems).length > 0 &&
        cartItems.length > 0 &&
        <div className="checkoutItem __container">
            <div className="checkoutItem__container-items">
                <input type="hidden" name="id" value={id} />
                <div className="cart__container-image"><img className="item__square-image" src={imageUrl} /></div>
                {/* <div className="field">
                <h2>Seller</h2>
                <div>{}</div>
            </div> */}
                <div className="field">
                    <h3>Title</h3>
                    <div>{title}</div>
                </div>
                <div className="field">
                    <h3>Brand</h3>
                    <div>{brand}</div>
                </div>
                <div className="field">
                    <h3>Price $</h3>
                    <div>{`$${price}`}</div>
                </div>
                <div className="field">
                    <button className="form-btn-cancel" type="button" onClick={onRemoveItem}>Remove</button>
                </div>
            </div>
        </div>
    );

}