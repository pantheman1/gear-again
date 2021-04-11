import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import Form from "usetheform";
// import { Cart } from "./Cart";
import Cookies from 'universal-cookie';
const { USER_CART_COOKIE } = require('../../globals.js')


export default function AddToCart() {
    const { id } = useParams();
    const item = useSelector(state => state?.items[id])
    const [items, setCartItem] = useState([]);
    const [buttonTxt, setButtonTxt] = useState("Add item to cart")
    const history = useHistory();
    const cookies = new Cookies();


    const onRemoveItem = (idToRemove) =>
        setCartItem((prev) => prev.filter(({ id }) => id !== idToRemove));

    const onAddItem = async () => {
        // debugger
        let itemIds = cookies.get("userCart");
        if (itemIds) {
            //this ensures the item is not already in the cookie
            if (!itemIds.split(',').includes(`${item.id}`)) {
                itemIds += `,${item.id}`;
            }
        } else {
            itemIds = `${item.id}`;
        }
        // debugger
        // const item = createRandomItem();
        cookies.set(USER_CART_COOKIE, itemIds, { path: '/' })
        // setCartItem((prev) => [...prev, item]);
        setButtonTxt("Continue to cart")
        console.log("ITEMS CART", items)
    };

    const navToCart = async (e) => {
        history.push('/cart');
    }

    const onChange = (state, isFormValid) => console.log('CHANGE', state, isFormValid);
    const onSubmit = (state) => console.log('SUBMIT', state);

    return (
        Object.values(item).length > 0 &&
        <div className="App">
            {/* <Form onChange={onChange} onSubmit={onSubmit}>
                <Cart items={items} onRemoveItem={onRemoveItem} />
                <button className="form-btn" type="submit">Submit</button>
            </Form> */}
            <br />
            <button className="form-btn" type="button" onClick={buttonTxt === "Add item to cart" ? onAddItem : navToCart}>
                {buttonTxt}
            </button>
        </div>
    );
}

// let id = 0;
// const createRandomItem = () => {
//     id = id + 1;
//     return {
//         id,
//         qty: 1,
//         desc: `Item number: ${id}`,
//         price: Number((Math.random() * 10 + 1).toFixed(2))
//     };
// };