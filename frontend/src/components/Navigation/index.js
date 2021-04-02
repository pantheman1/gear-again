import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
// import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';
import LoginFormPage from '../LoginFormPage';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div className="navbar__container-home">
          <NavLink exact to="/">Home</NavLink>
        </div>
        <div className="navbar__container-profile">
          <ProfileButton user={sessionUser} />
        </div>
      </>
    );
  } else {
    sessionLinks = (
      <>
        {/* <div className="navbar__container-login">
          <LoginFormPage />
        </div> */}
        <div className="navbar__container-home">
          <NavLink exact to="/login">Login</NavLink>
        </div>
        <div className="navbar__container-signup">
          <SignupFormModal />
        </div>
      </>
    );
  }

  return (
    <div className="navbar__container">
      {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;