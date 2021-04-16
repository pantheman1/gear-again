import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import Search from './Search';
import { getCart } from '../../store/cart';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch([]);
  const history = useHistory();

  const handleCart = (e) => {
    e.preventDefault();
    dispatch(getCart(sessionUser?.id));
    history.push('/cart');
  }

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
            <ProfileButton user={sessionUser} />
          </div>
          <div className="navbar__container-profile">
            <button onClick={handleCart}><i className="fas fa-cart-plus"></i></button>
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
        <div className="login-signup">
          <div className="navbar__container-home">
            <NavLink exact to="/login">Login</NavLink>
          </div>
          <div className="navbar__container-signup">
            <NavLink exact to="/signup">Sign up</NavLink>
          </div>
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