import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../store/items';
import CategoriesNavList from '../Navigation/CategoriesNavList';
import './Home.css';

export default function Home() {
    const dispatch = useDispatch();
    const items = useSelector(state => state.items);

    useEffect(() => {
        dispatch(getItems());
    }, []);


    return (
        <>
            <div className="lower-nav">
                <h1>This is where a title will go</h1>
            </div>
            <img className="background-image-home" src={'https://gear-again.s3-us-west-1.amazonaws.com/Site-Images/lake.jpg'} />
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