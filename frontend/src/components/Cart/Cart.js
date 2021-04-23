import React from "react";
import { CartItem } from "./CartItem";
import { useSelector } from "react-redux";
import './Cart.css';
import Subtotal from "./Subtotal";
// import { useHistory } from "react-router";


export default function Cart() {
    const allItems = useSelector(state => state.items);
    const cart = useSelector(state => state?.cart);
    // const user = useSelector(state => state.session.user);
    // const history = useHistory();

    //not working, come back to this
    // if (user === null) {
    //     history.push('/login')
    // }

    const cartItems = Object.values(cart);

    if (cartItems.length === 0) {
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
                <Subtotal cart={cart} allItems={allItems} cartCount={cartItems?.length} />
            </div>
        </>
    );

}