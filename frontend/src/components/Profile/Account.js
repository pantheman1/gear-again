import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export default function Account() {
    const user = useSelector(state => state?.session.user);
    const [name, setName] = useState(user?.name);
    const [username, setUsername] = useState(user?.username);
    const [email, setEmail] = useState(user?.email);
    const [profileImageUrl, setProfileImageUrl] = useState(user?.profileImageUrl)
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
        // user &&
        <>
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
                    {/* <div className="input-label-container">
                        <label>Profile Picture</label>
                        <input
                            className="form__text--input"
                            value={profileImageUrl}
                            onChange={(e) => setProfileImageUrl(e.target.value)}
                            type="file"
                        />
                    </div> */}
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
                    <button type="submit">Sign Up</button>
                </form>
                <div>
                    {user && (
                        <div>
                            <h1>{user.username}</h1>
                            <img
                                style={{ width: "150px" }}
                                src={user.profileImageUrl}
                                alt="profile"
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}