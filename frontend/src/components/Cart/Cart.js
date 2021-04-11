import React, { useEffect } from "react";
// import { Collection } from "usetheform";
import { CartItem } from "./CartItem";
import Cookies from 'universal-cookie';
import { useSelector } from "react-redux";
import './Cart.css';
const { USER_CART_COOKIE } = require('../../globals.js')


export default function Cart() {
    const allItems = useSelector(state => state.items);
    const cookies = new Cookies();

    useEffect(() => {
        cookies.get(USER_CART_COOKIE);
    }, [USER_CART_COOKIE])


    if (!cookies.get(USER_CART_COOKIE)) {
        // debugger
        cookies.set(USER_CART_COOKIE, "", { path: '/' });
    }
    let itemIds = cookies.get(USER_CART_COOKIE).split(",");

    // <Collection object name="cart">
    //     <Collection array name="items">
    //     </Collection>
    // </Collection>
    // debugger

    const handlePurchase = (e) => {
        e.preventDefault();
    }

    return (
        Object.values(allItems).length > 0 &&
        itemIds.length > 0 &&
        <>
            <div className="cart-stuff">
                <h2>Items In Your Cart</h2>
                <div className="cart__container">
                    {itemIds.map(itemId => (
                        <div key={itemId} className="cart__container-item">
                            <CartItem item={allItems[Number(itemId)]} itemIds={itemIds} />
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