import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CategoryItemList from './CategoryItemList';
import './Home.css';

export default function Home() {
    const categories = useSelector(state => Object.values(state.categories));

    return (
        categories &&
        <>
            <div className="category__container-items">
                {categories && categories?.map(category => (
                    <div key={category.id} className="category__container">
                        <div className="category-title">
                            <h2>{category?.name}</h2>
                        </div>
                        <CategoryItemList categoryName={category.name} categoryId={category?.id} />
                    </div>
                ))}
            </div>
        </>

    )
}