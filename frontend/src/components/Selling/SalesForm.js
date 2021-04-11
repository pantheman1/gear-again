import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { postListedItem } from '../../store/items';
import LoginFormModal from '../LoginFormModal';
import ItemImages from './ItemImages';

// item = {
//     title: "",
//     brand: "",
//     size: "",
//     price: 1,
//     cost: 0,
//     description: "",
//     categoryId: 0,
//     conditionId: 0,
//     genderId: 0,
//     images: [],
// }

export default function SalesForm({ header, buttonText, item, cancelUpdate }) {
    const user = useSelector(state => state?.session.user);
    const categories = useSelector(state => state?.categories);
    const dispatch = useDispatch();
    const [title, setTitle] = useState(item?.title);
    const [brand, setBrand] = useState(item?.brand);
    const [size, setSize] = useState(item?.size);
    const [price, setPrice] = useState(item?.price);
    const [cost, setCost] = useState(item?.cost);
    const [description, setDescription] = useState(item?.description);
    const [categoryId, setCategoryId] = useState(item?.categoryId);
    const [conditionId, setConditionId] = useState(item?.conditionId);
    const [genderId, setGenderId] = useState(item?.genderId);
    // for multiple file upload
    const [images, setImages] = useState(item?.Photos);
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    // useEffect(() => {
    // }, [item])


    const handleSubmit = async (e) => {
        e.preventDefault();

        const error = [];

        const data = {
            userId: user?.id,
            title,
            brand,
            size,
            price,
            cost,
            description,
            categoryId: Number(categoryId),
            conditionId: Number(conditionId),
            genderId: Number(genderId),
            images,
        }

        if (title && brand && size && description && categoryId && conditionId && genderId && images.length !== 0) {
            const item = await dispatch(postListedItem(data))
            console.log("ITEM----", item)
            // console.log("data----", item)

            history.push(`/${item.category.toLowerCase()}/${item.id}`)
        } else {
            error.push("Please fill out all fields including an item image.")
            setErrors(error)
            return
        }
    }

    //   for multiple file upload
    const updateFiles = (e) => {
        const files = e.target.files;
        setImages(files);
    }

    let addImage = "";
    let imageBox = "";
    if (buttonText === "Submit") {
        addImage = (
            <>
                <div className="input-label-container">
                    <h3>Upload Images</h3>
                    <input
                        className="form__text--input"
                        type="file"
                        multiple
                        onChange={updateFiles} />
                </div>
            </>
        )
    } else {
        imageBox = (
            <div className="input__container-images">
                <LoginFormModal itemId={item?.id} updateFiles={updateFiles} />
            </div>
        )
    }

    return (
        Object.keys(categories).length > 0 &&
        <>
            {/* <h2>Give your dusty outdoor gear new life by listing it here!</h2> */}
            <form className="form__container-form">
                <div className={buttonText === "Submit" ? "form-container" : "form-container form__grid"}>
                    {imageBox}
                    <div className="grid-div">
                        <ul>
                            {errors.map((error, idx) => <li className="error-handling" key={idx}>{error}</li>)}
                        </ul>
                        <h1>{header}</h1>
                        <div className="input-label-container">
                            <h3>Title</h3>
                            <input
                                className="form__text--input"
                                name="title"
                                type="text"
                                value={title ? title : ""}
                                autoComplete="off"
                                onChange={e => setTitle(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-label-container">
                            <h3>Brand</h3>
                            <input
                                className="form__text--input"
                                name="brand"
                                type="text"
                                value={brand ? brand : ""}
                                autoComplete="off"
                                onChange={e => setBrand(e.target.value)}
                            />
                        </div>
                        <div className="input-label-container">
                            <h3>Size</h3>
                            <input
                                className="form__text--input"
                                name="size"
                                type="text"
                                value={size ? size : ""}
                                autoComplete="off"
                                onChange={e => setSize(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-label-container">
                            <h3>Price</h3>
                            <input
                                className="form__text--input"
                                name="price"
                                type="number"
                                min={1}
                                value={price}
                                onChange={e => setPrice(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-label-container">
                            <h3>Cost</h3>
                            <input
                                className="form__text--input"
                                name="cost"
                                type="number"
                                min={0}
                                value={cost}
                                onChange={e => setCost(e.target.value)}
                            />
                        </div>
                        <div className="input-label-container">
                            <h3>Gender</h3>
                            <select className="select__container"
                                name="gender"
                                onChange={e => setGenderId(e.target.value)}
                                value={genderId}
                            >
                                <option hidden>Select one...</option>
                                <option value={1} id={1}>Boy</option>
                                <option value={2} id={2}>Girl</option>
                                <option value={3} id={3}>Neutral</option>
                            </select>
                        </div>
                        <div className="input-label-container">
                            <h3>Category</h3>
                            <select className="select__container"
                                value={categoryId}
                                onChange={e => setCategoryId(e.target.value)}
                            >
                                <option hidden>Select one...</option>
                                <option value={1} id={1}>Camp</option>
                                <option value={2} id={2}>Bike</option>
                                <option value={3} id={3}>Run</option>
                                <option value={4} id={4}>Fitness</option>
                                <option value={5} id={5}>Climb</option>
                                <option value={6} id={6}>Snow</option>
                                <option value={7} id={7}>Sports</option>
                                <option value={8} id={8}>Fish</option>
                                <option value={9} id={9}>General</option>
                            </select>
                        </div>
                        <div className="input-label-container">
                            <h3>Condition</h3>
                            <select className="select__container"
                                name="condition"
                                value={conditionId}
                                onChange={e => setConditionId(e.target.value)}
                            >
                                <option hidden>Select one...</option>
                                <option value={1} id={1}>New</option>
                                <option value={2} id={2}>Good Condition</option>
                                <option value={3} id={3}>Well used</option>
                                <option value={4} id={4}>Just need it gone</option>
                            </select>
                        </div>
                        <div className="input-label-container">
                            <h3>Description</h3>
                            <textarea
                                className="form__text--input"
                                name="description"
                                type="textarea"
                                value={description ? description : ""}
                                onChange={e => setDescription(e.target.value)}
                            />
                        </div>
                        {addImage}
                        <div className="btn-container">
                            <button className="form-btn" onClick={handleSubmit}>{buttonText}</button>
                            <button className="form-btn" onClick={cancelUpdate}>Cancel</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}