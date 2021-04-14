import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SearchResult from './SearchDisplay';


export default function Search() {
    const items = useSelector(state => Object.values(state?.items));
    const [searchResult, setSearchResult] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();
        const searchString = e.target.value.toLowerCase();

        const filteredItems = items?.filter(item => {
            return (
                item?.title.toLowerCase().includes(searchString) ||
                item?.brand.toLowerCase().includes(searchString)
            )
        })
        setSearchResult(filteredItems)
    }

    // const displaySearch = (filteredItems) => {

    // }

    return (
        items.length > 0 &&
        <div className="search__container">
            <input
                name="search"
                className="search__container-input"
                type="text"
                onChange={handleSearch}
                placeholder="Search for a product"
            />
            {/* <ul> */}
            {searchResult && searchResult?.map(item => (
                <SearchResult key={item.id} item={item} />
            ))}
            {/* </ul> */}
        </div>
    )
}