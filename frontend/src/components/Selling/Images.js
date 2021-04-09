import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import SalesForm from './SalesForm';
// import { updateListing } from '../../store/items';
import { useParams } from 'react-router';
import './Selling.css';

export default function ItemImages() {
    const { id } = useParams();
    const items = useSelector(state => state?.items);

    const handleImageUpload = async (e) => {
        e.preventDefault();

    }


    return (
        <div className="image__container">
            <div className="image__container-buttons">
                <button type="button" onClick={handleImageUpload}>+</button>
            </div>
        </div>
    )
}