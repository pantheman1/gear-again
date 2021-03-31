import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../store/categories';
import { getItems } from '../../store/items';
import CategoriesNavList from '../Navigation/CategoriesNavList';
import './Home.css';

export default function Home() {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories);
    const items = useSelector(state => state.items);

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getItems());
    }, []);

    const categoriesArr = Object.values(categories);



    return (
        <>
            {/* <img className="background-image-home" src={'https://i.postimg.cc/VkZZ4zv5/lake.jpg'} /> */}
            <a href='https://postimages.org/' target='_blank'><img className="background-image-home" src='https://i.postimg.cc/CM87DjbZ/columbia.jpg' border='0' alt='columbia' /></a>
            <CategoriesNavList />
            <div>
                <h3>CATEGORY 1</h3>
            </div>
            <h3>CATEGORY 2</h3>
            <h3>CATEGORY 3</h3>
            <h3>CATEGORY 4</h3>
            <h3>CATEGORY 5</h3>
            <h3>CATEGORY 6</h3>
            <h3>CATEGORY 7</h3>
            <h3>CATEGORY 8</h3>
            <h3>CATEGORY 9</h3>
        </>

    )
}