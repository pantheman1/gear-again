import React from "react";
import { Collection } from "usetheform";
import { CartItem } from "./CartItem";

export function Cart({ items, onRemoveItem }) {
    return (
        <Collection object name="cart">
            <Collection array name="items">
                {items.map(item => (
                    <CartItem {...item} onRemoveItem={onRemoveItem} key={item.id} />
                ))}
            </Collection>
        </Collection>
    );
}