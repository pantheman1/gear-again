import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem } from "../../store/cart";
// import { Input } from "usetheform";
// import Cookies from 'universal-cookie';
import './Cart.css'
// const { USER_CART_COOKIE } = require('../../globals.js')

const preventNegativeQty = val => (val < 1 ? 1 : val);
export function CartItem({ item, cart }) {
    const user = useSelector(state => state.session.user);
    const cartItem = cart[item?.id]
    const dispatch = useDispatch();
    // if (!item) {
    //     return (
    //         <div className="cart-div">
    //             <h2>There is nothing in your cart!</h2>
    //         </div>
    //     )
    // }
    // debugger
    const { id, title, brand, size, price, userId, Photos } = item;
    const imageUrl = Photos[0].url;
    // const cookies = new Cookies();

    const onRemoveItem = e => {
        e.preventDefault();
        const data = {
            itemId: id,
            cartItemId: cartItem?.id,
        }
        console.log("data from cartItems------", data)
        dispatch(removeCartItem(data))
        // const newIds = itemIds.filter(itemId => itemId != id).join(",");
        // cookies.set(USER_CART_COOKIE, newIds, { path: '/' });
        // itemIds = cookies.get(USER_CART_COOKIE);
    }


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
                <button className="form-btn-cancel" type="button" onClick={onRemoveItem}>Remove</button>
            </div>
        </>
    );
}