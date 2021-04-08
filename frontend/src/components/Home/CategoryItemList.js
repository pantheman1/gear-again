import React from 'react';
import { useSelector } from 'react-redux';
import ItemSquare from '../Items';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        380: {
            items: 2,
        },
        660: {
            items: 3,
        },
        990: {
            items: 4,
        },
        1100: {
            items: 5,
        },
    },
};

export default function CategoryItemList({ categoryName, categoryId }) {
    const carouselItems = useSelector(state => Object.values(state.items))


    return (
        carouselItems &&
        <OwlCarousel
            className="owl-carousel owl-theme"
            {...options}
        >
            {carouselItems && carouselItems?.filter(item => item?.categoryId === categoryId && item.isSold === false).filter((item, i) => i < 6).map(item => (
                <ItemSquare key={item.id} item={item} categoryName={categoryName} />
            ))}
        </OwlCarousel>
    )
}