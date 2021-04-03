import React, { useState } from 'react';
import { useSelector } from 'react-redux';


export default function UpdateAccountInfo({ setEdit, user }) {
    // const user = useSelector(state => state?.session.user);
    const [name, setName] = useState(user?.name);
    const [username, setUsername] = useState(user?.username);
    const [profileImageUrl, setProfileImageUrl] = useState("");
    const [email, setEmail] = useState(user?.email);
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // if (password === confirmPassword) {
        //     setErrors([]);
        //     return dispatch(sessionActions.signup({ name, email, username, password, profileImageUrl }))
        //         .catch(res => {
        //             if (res.data && res.data.errors) setErrors(res.data.errors);
        //         });
        // }
        // return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    const updateFile = (e) => {
        const file = e.target.files[0];
        if (file) setProfileImageUrl(file)
    }

    return (
        <>
            <div className="form__container">
                <form className="form__container-form">
                    <ul>
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                    <div className="input-label-container">
                        <label>Name</label>
                        <input
                            className="form__text--input"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-label-container">
                        <label>Profile Picture</label>
                        <input
                            className="form__text--input"
                            // value={profileImageUrl}
                            onChange={updateFile}
                            type="file"
                        />
                    </div>
                    {/* <div className="input-label-container">
                    <label>Multiple Upload</label>
                    <input
                        type="file"
                        multiple
                        onChange={updateFiles} />
                </div> */}
                    <div className="input-label-container">
                        <label>Email</label>
                        <input
                            className="form__text--input"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-label-container">
                        <label>Username</label>
                        <input
                            className="form__text--input"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <button onClick={handleSubmit} type="submit">Update</button>
                    <button onClick={e => setEdit(false)} type="button">Cancel</button>
                </form>

            </div>
        </>
    )
}