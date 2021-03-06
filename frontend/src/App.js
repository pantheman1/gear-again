import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useHistory } from "react-router-dom";
// import SignupFormModal from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Footer from "./components/Navigation/Footer";
import AllItems from "./components/Category/AllItems";
import OtherCategoryItems from "./components/Category/OtherCategories";
import SignupForm from "./components/SignupFormModal/SignupForm";
import Profile from "./components/Profile";
import { getItems } from "./store/items";
import { getCategories } from "./store/categories";
import CategoriesNavList from "./components/Navigation/CategoriesNavList";
import NewListing from "./components/Selling/NewListing";
import UpdateListing from "./components/Selling/UpdateListing";
import ItemDetailPage from "./components/Items/ItemDetailPage";
import Cart from "./components/Cart/Cart";
import { getCart } from "./store/cart";
import Checkout from "./components/Cart/Checkout";
import AddressToggle from "./components/Shipping/AddressToggle";
import { getAllShipping } from "./store/ship";
// import ShippingForm from "./components/Shipping/ShippingForm";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const user = useSelector(state => state.session.user)
  const ship = useSelector(state => state.ship);
  const history = useHistory();

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  if (!user) {
    history.push('/login')
  }

  useEffect(() => {
    dispatch(getItems());
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    if (user?.id) {
      dispatch(getCart(user?.id))
    }
  }, [dispatch, user?.id])

  useEffect(() => {
    if (user?.id) {
      dispatch(getAllShipping(user?.id))
    }
  }, [dispatch, user?.id])

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {user ? <CategoriesNavList /> : ""}
      <div className="page__container">
        <div className="nav__wrapper-content">
          {isLoaded && (
            <Switch>
              <Route path="/" exact={true}>
                <Home />
              </Route>
              <Route path="/login" exact={true}>
                <LoginFormPage />
              </Route>
              <Route path="/signup" exact={true}>
                <SignupForm />
              </Route>
              <Route path="/profile" exact={true}>
                <Profile />
              </Route>
              <Route path="/all" exact={true}>
                <AllItems />
              </Route>
              <Route path="/cart" exact={true}>
                <Cart />
              </Route>
              <Route path="/shipping" exact={true}>
                {/* <ShippingForm /> */}
                <AddressToggle />
              </Route>
              <Route exact={true} path={"/cart/checkout"}>
                <Checkout />
              </Route>
              <Route exact path={`/:id`}>
                <OtherCategoryItems />
              </Route>
              <Route exact path={`/profile/sell`}>
                <NewListing />
              </Route>
              <Route exact path={`/:id/:id`}>
                <ItemDetailPage />
              </Route>
              <Route exact={true} path={`/:id/:id/edit`}>
                <UpdateListing />
              </Route>
              {/* <Route exact path={`/profile/listings`}>
                <Listings />
              </Route> */}
            </Switch>
          )}
        </div>
        <div className="nav__wrapper-footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
