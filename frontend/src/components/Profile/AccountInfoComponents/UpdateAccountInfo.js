import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../../store/session';


export default function UpdateAccountInfo({ setEdit, user }) {
    const dispatch = useDispatch();
    const [name, setName] = useState(user?.name);
    const [username, setUsername] = useState(user?.username);
    const [profileImageUrl, setProfileImageUrl] = useState("");
    const [email, setEmail] = useState(user?.email);
    const [bio, setBio] = useState(user?.bio || "");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("COMPONENT SIDE SUBMIT-----------")
        const data = {
            userId: user?.id,
            name,
            username,
            email,
            bio,
            profileImageUrl,
            password
        }

        // if (password === confirmPassword) {
        //     setErrors([]);
        //     return dispatch(sessionActions.updateUser({ name, email, username, bio, password, profileImageUrl }))
        //         .catch(res => {
        //             if (res.data && res.data.errors) setErrors(res.data.errors);
        //         });
        // }
        await dispatch(updateUser(data))
        return setErrors(['Confirm Password field must be the same as the Password field']);
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
                    <div className="input-h3-container">
                        <h3>Name</h3>
                        <input
                            className="form__text--input"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-h3-container">
                        <h3>Username</h3>
                        <input
                            className="form__text--input"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-h3-container">
                        <h3>Email</h3>
                        <input
                            className="form__text--input"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-h3-container">
                        <h3>Personal Bio</h3>
                        <textarea
                            className="form__text--input"
                            type="textarea"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            required
                        />
                    </div>
                    {/* <div className="input-h3-container">
                        <h3>Password</h3>
                        <input
                            className="form__text--input"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-h3-container">
                        <h3>Confirm Password</h3>
                        <input
                            className="form__text--input"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div> */}
                    <div className="input-h3-container">
                        <h3>Profile Picture</h3>
                        <input
                            className="form__text--input"
                            // value={profileImageUrl}
                            onChange={updateFile}
                            type="file"
                        />
                    </div>
                    {/* <div className="input-h3-container">
                    <h3>Multiple Upload</label>
                    <input
                        type="file"
                        multiple
                        onChange={updateFiles} />
                </div> */}
                    <div className="form__container-btn">
                        <button className="form-btn" onClick={handleSubmit} type="submit">Update</button>
                        <button onClick={e => setEdit(false)} type="button">Cancel</button>
                    </div>
                </form>

            </div>
        </>
    )
}