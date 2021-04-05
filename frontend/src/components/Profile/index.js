import React, { useState } from 'react';
import CategoriesNavList from '../Navigation/CategoriesNavList';
import UserInfo from './UserInfo';
import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Account from './Account';
import Purchases from './Purchases';
import Listings from './Listings';
import Sold from './Sold';


export default function Profile() {
    const [itemView, setItemView] = useState("Account");

    const handleListings = (e) => {
        e.preventDefault();
        setItemView("Listings")
    }

    const handlePurchases = (e) => {
        e.preventDefault();
        setItemView("Purchases")
    }

    const handleSold = (e) => {
        e.preventDefault();
        setItemView("Sold")
    }

    let toggleView;
    if (itemView === "Account") {
        toggleView = <Account />
    } else if (itemView === "Purchases") {
        toggleView = <Purchases />
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
                <button type="button" onClick={handlePurchases}>Purchases</button>
                <button type="button" onClick={handleListings}>Listings</button>
                <button type="button" onClick={handleSold}>Sold Items</button>
                {/* <Button variant="link">Link</Button> */}
            </div>
            {toggleView}
        </>
    )
}