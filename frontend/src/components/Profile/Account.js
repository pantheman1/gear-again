import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import UpdateAccountInfo from './AccountInfoComponents/UpdateAccountInfo';

export default function Account() {
    const user = useSelector(state => state?.session.user);
    const [edit, setEdit] = useState(false);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // if (password === confirmPassword) {
    //     setErrors([]);
    //     return dispatch(sessionActions.signup({ name, email, username, password, profileImageUrl }))
    //         .catch(res => {
    //             if (res.data && res.data.errors) setErrors(res.data.errors);
    //         });
    // }
    // return setErrors(['Confirm Password field must be the same as the Password field']);
    // };


    if (edit) {
        return (
            <UpdateAccountInfo setEdit={setEdit} user={user} />
        )
    } else {
        return (
            <>
                <div className="form__container form__container-profile">
                    <div className="input-label-container h3-name">
                        <div className="h3-label">
                            <h3>Name</h3>
                        </div>
                        <div className="h3-text">
                            <div>{user?.name}</div>
                        </div>
                    </div>

                    {/* <div className="input-label-container">
                    <label>Multiple Upload</label>
                    <input
                        type="file"
                        multiple
                        onChange={updateFiles} />
                </div> */}
                    <div className="input-label-container">
                        <div className="h3-label">
                            <h3>Email</h3>
                        </div>
                        <div className="h3-text">
                            <div>{user?.email}</div>
                        </div>
                    </div>
                    <div className="input-label-container">
                        <div className="h3-label">
                            <h3>Username</h3>
                        </div>
                        <div className="h3-text">
                            <div>{user?.username}</div>
                        </div>
                    </div>
                    <div className="form__container-btn">
                        <button className="form-btn" onClick={e => setEdit(true)} type="button">Edit Profile</button>
                    </div>
                </div>
            </>
        )
    }


    return (
        // user &&
        <>

        </>
    )
}