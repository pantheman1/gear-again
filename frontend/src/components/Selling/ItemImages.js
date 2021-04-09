import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SalesForm from './SalesForm';
// import { updateListing } from '../../store/items';
import { useParams } from 'react-router';
import './Selling.css';
import { postPhoto } from '../../store/photos';
import { Modal } from '../../context/Modal';


export default function ItemImages() {
    const items = useSelector(state => state?.items);
    const [imageLoading, setImageLoading] = useState(false);
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const dispatch = useDispatch();
    const { id } = useParams();

    const handleImageUpload = async (e) => {
        e.preventDefault();
        setImageLoading(true)
    }


    const updateFile = (e) => {
        e.preventDefault();
        if (!e.target.files) {
            // open modal
        }
        const file = e.target.files[0];
        if (file) setImage(file)

        const data = {
            itemId: id,
            image,
        }
        const photos = dispatch(postPhoto(data))

    }
    // items[id].Photos[0].url
    // let styles = {
    //     background: `url(${url})`
    // }
    return (
        <div className="image__container">
            <div className="image__container-buttons"><image src={items[id].Photos[0].url} /></div>
            <div className="image__container-buttons" onClick={updateFile}>+</div>
        </div>
    )
}