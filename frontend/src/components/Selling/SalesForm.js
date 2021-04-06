import React, { useState } from 'react';
import CategoriesNavList from '../Navigation/CategoriesNavList';



export default function SalesForm() {
    const [title, setTitle] = useState("");
    const [brand, setBrand] = useState("");
    const [size, setSize] = useState("");
    const [price, setPrice] = useState("");
    const [cost, setCost] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [condition, setCondition] = useState("");
    const [gender, setGender] = useState("");
    const [photoUrl, setPhotoUrl] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <>
            <CategoriesNavList />
            {/* <h2>Give your dusty outdoor gear new life by listing it here!</h2> */}
            <div className="form__container">
                <form className="form__container-form" onSubmit={handleSubmit}>
                    <div className="input-label-container">
                        <h3>Listing Title</h3>
                        <input
                            className="form__text--input"
                            name="title"
                            type="text"
                            value={title}
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
                            value={brand}
                            onChange={e => setBrand(e.target.value)}
                        />
                    </div>
                    <div className="input-label-container">
                        <h3>Size</h3>
                        <input
                            className="form__text--input"
                            name="size"
                            type="text"
                            value={size}
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
                            onChange={e => setPrice(e.target.value)}
                        />
                    </div>
                    <select className="select__container"
                        name="gender"
                        onSelect={e => setGender(e.target.value)}
                    >
                        <option hidden>Select one...</option>
                        <option value="Boy" id="boy">Boy</option>
                        <option value="Girl" id="girl">Girl</option>
                        <option value="Neutral" id="neutral">Neutral</option>
                    </select>
                    <select className="select__container"
                        name="gender"
                        onSelect={e => setCategory(e.target.value)}
                    >
                        <option hidden>Select one...</option>
                        <option value="Camp">Camp</option>
                        <option value="Bike">Bike</option>
                        <option value="Run">Run</option>
                        <option value="Fitness">Fitness</option>
                        <option value="Climb">Climb</option>
                        <option value="Snow">Snow</option>
                        <option value="Sports">Sports</option>
                        <option value="Fish">Fish</option>
                        <option value="General">General</option>
                    </select>
                    <div className="input-label-container">
                        <h3>Description</h3>
                        <textarea
                            className="form__text--input"
                            name="description"
                            type="textarea"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div>
                </form>
            </div>
        </>
    )
}