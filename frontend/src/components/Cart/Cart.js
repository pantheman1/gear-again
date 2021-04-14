import React, { useEffect } from "react";
import { CartItem } from "./CartItem";
import { useSelector } from "react-redux";
import './Cart.css';


export default function Cart() {
    const allItems = useSelector(state => state.items);
    const cart = useSelector(state => state?.cart);

    const cartItems = Object.values(cart);
    // console.log("Cart-------", cart)

    const handlePurchase = (e) => {
        e.preventDefault();
    }

    console.log("CartItemsArr-------", cartItems)
    if (cartItems.length === 0) {
        // console.log("NO CART ITEMS--------")
        return (
            <div className="cart-div">
                <h2>There is nothing in your cart!</h2>
            </div>
        )
    }

    return (
        Object.values(allItems).length > 0 &&
        cartItems.length > 0 &&
        <>
            <div className="cart-stuff">
                <h2>Items In Your Cart</h2>
                <div className="cart__container">
                    {cartItems?.map(item => (
                        <div key={item.id} className="cart__container-item">
                            <CartItem cart={cart} item={allItems[item.itemId]} />
                        </div>
                    ))}
                </div>
                <div className="purchase-btn">
                    <button className="form-btn" type="submit" onClick={handlePurchase}>Complete Your Purchase</button>
                </div>
            </div>
        </>
    );

}