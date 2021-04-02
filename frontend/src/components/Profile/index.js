import React, { useState } from 'react';
import CategoriesNavList from '../Navigation/CategoriesNavList';
import UserInfo from './UserInfo';
import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Account from './Account';
import Purchased from './Purchased';
import Listings from './Listings';
import Sold from './Sold';


export default function Profile() {
    const [itemView, setItemView] = useState("Account")

    let toggleView;
    if (itemView === "Account") {
        toggleView = <Account />
    } else if (itemView === "Purchased") {
        toggleView = <Purchased />
    } else if (itemView === "Listings") {
        toggleView = <Listings />
    } else {
        toggleView = <Sold />
    }

    return (
        <>
            <CategoriesNavList />
            <UserInfo />
            <div className="product-view">
                <button type="button" onClick={e => setItemView("Account")}>Account</button>
                <button type="button" onClick={e => setItemView("Purchased")}>Purchased</button>
                <button type="button" onClick={e => setItemView("Listings")}>Listings</button>
                <button type="button" onClick={e => setItemView("Sold")}>Sold Items</button>
                {/* <Button variant="link">Link</Button> */}
            </div>
            {toggleView}
        </>
    )
}