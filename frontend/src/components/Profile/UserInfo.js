import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Profile.css';

export default function UserInfo() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)

    console.log("URL---------", user.profileImageUrl)

    return (
        <>
            <div className="user__container">
                <div className="image-mini-background">
                    <div className="user__container-image">
                        <img className="profile__image" src={user?.profileImageUrl} alt="profile image" />
                    </div>
                    <div className="mini-background"></div>
                </div>
                <div className="user__container-name">
                    <h2>Welcome {user.name}!</h2>
                </div>
                <div className="user__container-bio">
                    <p>{user.bio}</p>
                </div>
            </div>
        </>
    )
}