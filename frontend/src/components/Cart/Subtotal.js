import React from "react";
import { useHistory } from "react-router";
import './Cart.css';


export default function Subtotal({ cart, cartCount, allItems }) {
    const history = useHistory();

    const handleProceedToCheckout = (e) => {
        e.preventDefault();
        history.push('/cart/checkout');
    }

    const filteredItems = Object.values(allItems)?.filter(item => item.id === cart[item.id]?.itemId)

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
                        {cartCount === 1 ? `Subtotal (${cartCount} item): $${totalProductPrice}` :
                            `Subtotal (${cartCount} items): $${totalProductPrice}`}
                    </h2>
                </div>
                <div className="purchase-btn">
                    <button className="form-btn-purchase" type="submit" onClick={handleProceedToCheckout}>Proceed to Checkout</button>
                </div>
            </div>
        </>
    );

}