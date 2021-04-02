import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCatItems } from '../../store/items';
import ItemSquare from '../Items';
import { nanoid } from 'nanoid';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function CategoryItemList({ categoryId }) {
    const categoryItems = useSelector(state => Object.values(state.items))
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getCatItems(categoryId))
    }, [dispatch])


    return (
        <OwlCarousel
            items={4}
            className="owl-carousel owl-theme"
            loop={false}
            nav
            autoWidth={false}
            nav={true}
            dotsEach
            nav
            // navText={["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"]}
            dots={false}
        >
            {/* <div className="category__container-item"> */}
            {categoryItems && categoryItems?.filter(item => item.categoryId === categoryId).map(item => (
                <ItemSquare key={nanoid()} item={item} />
            ))}
            {/* </div> */}
        </OwlCarousel>
    )
}