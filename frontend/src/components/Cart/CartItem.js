import React from "react";
import { useDispatch } from "react-redux";
import { removeCartItem } from "../../store/cart";
import './Cart.css'

// const preventNegativeQty = val => (val < 1 ? 1 : val);
export function CartItem({ item, cart }) {
    // const user = useSelector(state => state.session.user);
    const cartItem = cart[item?.id]
    const dispatch = useDispatch();

    const { id, title, brand, size, price, userId, Photos } = item;
    const imageUrl = Photos[0].url;

    const onRemoveItem = e => {
        e.preventDefault();
        const data = {
            itemId: id,
            cartItemId: cartItem?.id,
        }
        dispatch(removeCartItem(data))
    }

    // setCartItem((prev) => prev.filter(({ id }) => id !== idToRemove));
    return (
        // Object.values(item) > 0 &&
        <>
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
        </>
    );
}