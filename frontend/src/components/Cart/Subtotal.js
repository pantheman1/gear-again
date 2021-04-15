import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import './Cart.css';


export default function Subtotal({ cart, cartCount, allItems }) {
    // const allItems = useSelector(state => state.items);
    // const cart = useSelector(state => state?.cart);

    // const cartItems = Object.values(cart);
    // console.log("Cart-------", cart)

    const handlePurchase = (e) => {
        e.preventDefault();
    }

    const filteredItems = Object.values(allItems)?.filter(item => item.id === cart[item.id]?.itemId)
    // const cartCount = filteredItems?.length;
    console.log("CART COUNT", cartCount)

    const totalPrice = filteredItems?.map(item => {
        return Number(item.price)
    }).reduce((acc, el) => {
        return acc + el;
    }, 0)

    const totalProductPrice = Math.ceil((totalPrice + Number.EPSILON) * 100) / 100;

    return (
        Object.values(allItems).length > 0 &&
        <>
            <div className="checkout__container">
                <div className="order-label">
                    <h2>
                        {cartCount === 1 ? `Subtotal (${cartCount} item) $${totalProductPrice}` :
                            `Subtotal (${cartCount} items) $${totalProductPrice}`}
                    </h2>
                </div>
                <div className="purchase-btn">
                    <button className="form-btn-purchase" type="submit" onClick={handlePurchase}>Proceed to Checkout</button>
                </div>
            </div>
        </>
    );

}