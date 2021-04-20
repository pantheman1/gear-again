import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem } from "../../store/cart";
import { updateIsSold } from "../../store/items";
import { postOrderDetails } from "../../store/orderDetails";
import './Cart.css';


export default function CheckoutTotals({ allItems }) {
    // const allItems = useSelector(state => state.items);
    const user = useSelector(state => state.session.user);
    const cart = useSelector(state => state?.cart);
    const [shipping, setShipping] = useState(5);
    const [taxRate, setTaxRate] = useState(0.075);
    const dispatch = useDispatch();

    const cartItems = Object.values(cart);
    const cartItemIds = Object.keys(cart);
    console.log("Cart Ids---", cartItemIds)

    const filteredItems = Object.values(allItems)?.filter(item => item.id === cart[item.id]?.itemId)
    const cartCount = filteredItems?.length;

    const totalPrice = filteredItems?.map(item => {
        return Number(item.price)
    }).reduce((acc, el) => {
        return acc + el;
    }, 0)

    const totalProductPrice = Math.ceil((totalPrice + Number.EPSILON) * 100) / 100;
    const totalBeforeTax = Math.round(((totalProductPrice + shipping) + Number.EPSILON) * 100) / 100;
    const totalTax = Math.ceil(((totalProductPrice * taxRate) + Number.EPSILON) * 100) / 100;
    const totalCost = Math.round(((totalProductPrice + shipping + totalTax) + Number.EPSILON) * 100) / 100;

    const handlePurchase = async (e) => {
        e.preventDefault();
        const cartItemIds = Object.keys(cart);
        await dispatch(updateIsSold(cartItemIds));
        const data = {
            userId: user?.id,
            cartItemIds,
            totalTax,
            shipping,
            totalCost,
        }
        await dispatch(postOrderDetails(data));
        // when someone clicks on purchase:
        // mark all items in cart to isSold: true
        // remove all cart items from cart -- destroy cart based on cart.id
        // create an order - 
        // create orderDetails
        // await dispatch(removeCartItem())
    }

    return (
        Object.values(allItems).length > 0 &&
        cartItems.length > 0 &&
        <>
            <div className="checkout__container">
                <div className="order-label">
                    <h2>Order Summary</h2>
                </div>
                {/* <div className="checkout__container-totals"> */}
                <div className="total__container">
                    <div className="checkout-label">{`Items (${cartCount}):`}</div>
                    <div className="total__container-amount">
                        {`$${totalProductPrice}`}
                    </div>
                </div>
                <div className="total__container">
                    <div className="checkout-label">Shipping & handling:</div>
                    <div className="total__container-amount">
                        {`$${shipping}.00`}
                    </div>
                </div>
                <div className="total__container">
                    <div className="checkout-label">Total before tax:</div>
                    <div className="total__container-amount">
                        {`$${totalBeforeTax}`}
                    </div>
                </div>
                <div className="total__container">
                    <div className="checkout-label">Estimated tax ({`${taxRate * 100}%`}):</div>
                    <div className="total__container-amount">
                        {`$${totalTax}`}
                    </div>
                </div>
                <div className="total__container-order">
                    <div className="checkout-label">Order Total:</div>
                    <div className="total__container-amount">
                        {`$${totalCost}`}
                    </div>
                </div>
                {/* </div> */}
                <div className="purchase-btn">
                    <button className="form-btn-purchase" type="submit" onClick={handlePurchase}>Place your order</button>
                </div>
            </div>
        </>
    );

}