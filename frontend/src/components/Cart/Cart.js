import React, { useEffect } from "react";
// import { Collection } from "usetheform";
import { CartItem } from "./CartItem";
import Cookies from 'universal-cookie';
import { useSelector } from "react-redux";
const { USER_CART_COOKIE } = require('../../globals.js')


export default function Cart() {
    const allItems = useSelector(state => state.items);
    const cookies = new Cookies();

    useEffect(() => {
        cookies.get(USER_CART_COOKIE);
    }, [USER_CART_COOKIE])


    console.log("ITEMS CART COMP-----")

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
    return (
        Object.values(allItems).length > 0 &&
        itemIds.length > 0 &&
        <>
            {itemIds.map(itemId => (
                <CartItem item={allItems[Number(itemId)]} itemIds={itemIds} key={itemId} />
            ))}
        </>
    );
}