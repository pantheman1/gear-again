import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import UpdateAccountInfo from './AccountInfoComponents/UpdateAccountInfo';

export default function Account() {
    const user = useSelector(state => state?.session.user);
    const [edit, setEdit] = useState(false);

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


    if (edit) {
        return (
            <UpdateAccountInfo setEdit={setEdit} user={user} />
        )
    } else {
        return (
            <>
                <div className="form__container">
                    <div className="input-label-container">
                        <label>Name</label>
                        <div>{user?.name}</div>
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
                        <div>{user?.email}</div>
                    </div>
                    <div className="input-label-container">
                        <label>Username</label>
                        <div>{user?.username}</div>
                    </div>
                    <button onClick={e => setEdit(true)} type="button">Edit Profile</button>
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