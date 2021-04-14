import React from 'react';
import { useSelector } from 'react-redux';


export default function Search() {
    const items = useSelector(state => Object.values(state?.items));

    const handleSearch = (e) => {
        e.preventDefault();
        const searchString = e.target.value.toLowerCase();
        // debugger
        const filteredItems = items?.filter(item => {
            return item?.title.toLowerCase().includes(searchString) || item?.brand.toLowerCase().includes(searchString);
        })
        console.log(filteredItems)
    }

    return (
        items.length > 0 &&
        <>
            <input
                name="search"
                className="search-input"
                type="text"
                onChange={handleSearch}
                placeholder="Search for a product"
            />
        </>
    )
}