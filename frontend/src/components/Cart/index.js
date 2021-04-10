import React, { useState } from "react";
import Form from "usetheform";
import { Cart } from "./Cart";

export default function CartDetails() {
    const [items, setCartItem] = useState([]);

    const onRemoveItem = (idToRemove) =>
        setCartItem((prev) => prev.filter(({ id }) => id !== idToRemove));

    const onAddItem = () => {
        const item = createRandomItem();
        setCartItem((prev) => [...prev, item]);
    };

    const onChange = (state, isFormValid) => console.log('CHANGE', state, isFormValid);
    const onSubmit = (state) => console.log('SUBMIT', state);

    return (
        <div className="App">
            <Form onChange={onChange} onSubmit={onSubmit}>
                <Cart items={items} onRemoveItem={onRemoveItem} />
                <button type="submit">Submit</button>
            </Form>
            <br />
            <button type="button" onClick={onAddItem}>
                Add item to cart
      </button>
        </div>
    );
}

let id = 0;
const createRandomItem = () => {
    id = id + 1;
    return {
        id,
        qty: 1,
        desc: `Item number: ${id}`,
        price: Number((Math.random() * 10 + 1).toFixed(2))
    };
};