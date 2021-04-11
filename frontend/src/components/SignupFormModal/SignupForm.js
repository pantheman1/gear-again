import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupForm() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [imageLoading, setImageLoading] = useState(false)
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [profileImageUrl, setProfileImageUrl] = useState(null);
    // for multuple file upload
    //   const [images, setImages] = useState([]);
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        setImageLoading(true)

        if (password === confirmPassword && profileImageUrl) {
            setErrors([]);
            return dispatch(sessionActions.signup({ name, email, username, password, profileImageUrl }))
                .catch(res => {
                    if (res.data && res.data.errors) setErrors(res.data.errors);
                });
        }
        setImageLoading(false)
        return setErrors(['Confirm Password field must be the same as the Password field and you have selected a profile image']);
    };

    const updateFile = (e) => {
        const file = e.target.files[0];
        if (file) setProfileImageUrl(file)
    }

    // for multiple file upload
    //   const updateFiles = (e) => {
    //     const files = e.target.files;
    //     setImages(files);
    //   };

    return (
        <div className="form__container">
            <form className="form__container-form" onSubmit={handleSubmit}>
                <div className="form-container">
                    <h1>Sign Up</h1>
                    <ul>
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                    {imageLoading && <p>Loading...</p>}
                    <div className="input-label-container">
                        <h2>Name</h2>
                        <input
                            className="form__text--input"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-label-container">
                        <h2>Email</h2>
                        <input
                            className="form__text--input"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-label-container">
                        <h2>Username</h2>
                        <input
                            className="form__text--input"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-label-container">
                        <h2>Password</h2>
                        <input
                            className="form__text--input"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-label-container">
                        <h2>Confirm Password</h2>
                        <input
                            className="form__text--input"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-label-container">
                        <h2>Profile Picture</h2>
                        <input
                            className="form__text--input"
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
                    <button className="form-btn" type="submit">Sign Up</button>
                </div>
            </form>
            <div>
                {sessionUser && (
                    <div>
                        <h1>{sessionUser.username}</h1>
                        <img
                            style={{ width: "150px" }}
                            src={sessionUser.profileImageUrl}
                            alt="profile"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default SignupForm;