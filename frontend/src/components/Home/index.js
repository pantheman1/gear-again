import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import CategoryItemList from './CategoryItemList';
import './Home.css';

export default function Home() {
    const user = useSelector(state => state.session.user);
    const categories = useSelector(state => Object.values(state?.categories));
    const carouselItems = useSelector(state => Object.values(state?.items))
    const [isLoaded, setIsLoaded] = useState(false);
    const history = useHistory();

    if (!user) {
        history.push('/login')
    }

    useEffect(() => {
        setIsLoaded(true)
    }, [setIsLoaded])

    return (
        isLoaded &&
        <>
            <div className="category__container-items">
                {isLoaded && categories?.map(category => (
                    <div key={category.id} className="category__container">
                        <div className="category-title">
                            <h2>{category?.name}</h2>
                        </div>
                        <CategoryItemList carouselItems={carouselItems} categoryName={category.name} categoryId={category?.id} />
                    </div>
                ))}
            </div>
        </>
    )
}