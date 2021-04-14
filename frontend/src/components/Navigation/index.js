import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
// import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';
import LoginFormPage from '../LoginFormPage';
import SignupForm from '../SignupFormModal/SignupForm';
import Search from './Search';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div className="navbar__container-home">
          <NavLink className="logo-header" exact to="/"><span id="logo">Gear</span><span id="logo2">Again</span></NavLink>
        </div>
        <div className="searchbar">
          <Search />
        </div>
        <div className="profileNav__container">
          <div className="navbar__container-profile">
            <NavLink exact to="/profile">Profile</NavLink>
          </div>
          <div className="navbar__container-profile">
            <ProfileButton user={sessionUser} />
          </div>
          <div className="navbar__container-profile">
            <NavLink exact to="/cart"><i className="fas fa-cart-plus"></i></NavLink>
          </div>
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
          <NavLink exact to="/signup">Sign up</NavLink>
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