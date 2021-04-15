import React, { useEffect, useState } from "react";
import { CartItem } from "./CartItem";
import { useSelector } from "react-redux";
import './Cart.css';
import CheckoutTotals from "./CheckoutTotals";
import Subtotal from "./Subtotal";
import CheckoutItem from "./CheckoutItem";


export default function Checkout() {
    const allItems = useSelector(state => state.items);
    const cart = useSelector(state => state?.cart);

    const cartItems = Object.values(cart);

    const handlePurchase = (e) => {
        e.preventDefault();
    }

    const filteredItems = Object.values(allItems)?.filter(item => item.id === cart[item.id]?.itemId)

    return (
        Object.values(allItems).length > 0 &&
        cartItems.length > 0 &&
        <>
            <div className="cart-stuff">
                <div className="cart__wrapper-items">
                    <div className="cart-label">
                        <h2>Items In Your Cart</h2>
                    </div>
                    <div className="cart__container">
                        {filteredItems?.map(item => (
                            <div key={item.id} className="cart__container-item">
                                <CheckoutItem cart={cart} item={item} />
                            </div>
                        ))}
                    </div>
                </div>
                <CheckoutTotals allItems={allItems} />
            </div>
        </>
    );

}