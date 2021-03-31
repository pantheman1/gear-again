import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupForm() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [photo, setPhoto] = useState(null);
    // for multuple file upload
    //   const [images, setImages] = useState([]);
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ name, email, username, password, photo }))
                .catch(res => {
                    if (res.data && res.data.errors) setErrors(res.data.errors);
                });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    const updateFile = (e) => {
        const file = e.target.files[0];
        if (file) setPhoto(file)
    }

    // for multiple file upload
    //   const updateFiles = (e) => {
    //     const files = e.target.files;
    //     setImages(files);
    //   };

    return (
        <div className="form__container">
            <h1>Sign Up</h1>
            <form className="form-modal" onSubmit={handleSubmit}>
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
                <div className="input-label-container">
                    <label>Password</label>
                    <input
                        className="form__text--input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="input-label-container">
                    <label>Confirm Password</label>
                    <input
                        className="form__text--input"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="input-label-container">
                    <label>Profile Picture</label>
                    <input
                        className="form__text--input"
                        onChange={updateFile}
                    />
                </div>
                {/* <div className="input-label-container">
                    <label>Multiple Upload</label>
                    <input
                        type="file"
                        multiple
                        onChange={updateFiles} />
                </div> */}
                <button type="submit">Sign Up</button>
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