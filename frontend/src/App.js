import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
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
import Listings from "./components/Profile/Listings";
import SalesForm from "./components/Selling/SalesForm";
import ItemDetailPage from "./components/Items/ItemDetailPage";
import { getItems } from "./store/items";
import { getCategories } from "./store/categories";
import CategoriesNavList from "./components/Navigation/CategoriesNavList";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getItems());
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <CategoriesNavList />
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
              <Route exact path={`/:id`}>
                <OtherCategoryItems />
              </Route>
              {/* <Route exact path={`/:id/:id`}>
                <ItemDetailPage />
              </Route> */}
              <Route exact path={`/profile/sell`}>
                <SalesForm />
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
