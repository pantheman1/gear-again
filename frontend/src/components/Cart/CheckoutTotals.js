import React, { useEffect, useState } from "react";
import { CartItem } from "./CartItem";
import { useSelector } from "react-redux";
import './Cart.css';


export default function Cart() {
    const allItems = useSelector(state => state.items);
    const cart = useSelector(state => state?.cart);
    const [shipping, setShipping] = useState(5);
    const [tax, setTax] = useState(0.075);

    const cartItems = Object.values(cart);
    // console.log("Cart-------", cart)

    const handlePurchase = (e) => {
        e.preventDefault();
    }
    // debugger
    const filteredItems = Object.values(allItems)?.filter(item => item.id === cart[item.id]?.itemId)
    const totalPrice = filteredItems?.map(item => {
        return Number(item.price)
    }).reduce((acc, el) => {
        return acc + el;
    }, 0)

    // console.log("CartItemsArr-------", cart)
    if (cartItems.length === 0) {
        // console.log("NO CART ITEMS--------")
        return (
            <div className="cart-div">
                <h2>There is nothing in your cart!</h2>
            </div>
        )
    }
    const totalProductPrice = Math.ceil((totalPrice + Number.EPSILON) * 100) / 100;
    const totalTax = Math.ceil(((totalProductPrice * tax) + Number.EPSILON) * 100) / 100;
    const total = Math.round(((totalProductPrice + shipping + totalTax) + Number.EPSILON) * 100) / 100;

    // filter items where item.id === cart[itemId].itemId

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
                        {cartItems?.map(item => (
                            <div key={item.id} className="cart__container-item">
                                <CartItem cart={cart} item={allItems[item.itemId]} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="checkout__container">
                    <div className="order-label">
                        <h2>Order Details</h2>
                    </div>
                    {/* <div className="checkout__container-totals"> */}
                    <div className="total__container">
                        <div className="checkout-label">Total Product Price</div>
                        <div className="total__container-amount">
                            {`$${totalProductPrice}`}
                        </div>
                    </div>
                    <div className="total__container">
                        <div className="checkout-label">Flat Rate Shipping</div>
                        <div className="total__container-amount">
                            {`$${shipping}.00`}
                        </div>
                    </div>
                    <div className="total__container">
                        <div className="checkout-label">Sales Tax ({`${tax * 100}%`})</div>
                        <div className="total__container-amount">
                            {`$${totalTax}`}
                        </div>
                    </div>
                    <div className="total__container-order">
                        <div className="checkout-label">Order Total</div>
                        <div className="total__container-amount">
                            {`$${total}`}
                        </div>
                    </div>
                    {/* </div> */}
                    <div className="purchase-btn">
                        <button className="form-btn-purchase" type="submit" onClick={handlePurchase}>Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </>
    );

}