import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoriesNavList from '../Navigation/CategoriesNavList';
import CategoryItemList from './CategoryItemList';
import { getCategories } from '../../store/categories';
import './Home.css';

export default function Home() {
    const dispatch = useDispatch();
    const categories = useSelector(state => Object.values(state.categories));

    useEffect(() => {
        dispatch(getCategories());
    }, []);


    return (
        categories &&
        <>
            <div className="lower-nav">
                <h1>This is where a title will go</h1>
            </div>
            <img className="background-image-home" src={'https://gear-again.s3-us-west-1.amazonaws.com/Site-Images/lake.jpg'} />
            <div className="categories__list">
                <CategoriesNavList />
            </div>
            <div>
                {categories && categories?.map(category => (
                    <div key={category.id} className="category__container">
                        <h3>{category?.name}</h3>
                        <CategoryItemList categoryId={category?.id} />
                    </div>
                ))}
            </div>
        </>

    )
}