import React, { useState } from 'react';
import CategoriesNavList from '../Navigation/CategoriesNavList';
import UserInfo from './UserInfo';
import Account from './Account';
import Listings from './Listings';
import Sold from './Sold';
import Orders from './Orders';
import { useHistory } from 'react-router';


export default function Profile() {
    const [itemView, setItemView] = useState("Account");
    const history = useHistory();

    const handleListings = async (e) => {
        e.preventDefault();
        // await history.push('/profile/listings')
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
        toggleView = <Orders />
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
                <button type="button" onClick={handleSold}>Sales</button>
            </div>
            {toggleView}
        </>
    )
}