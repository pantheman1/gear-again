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

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
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
              <Route path="/all" exact={true}>
                <AllItems />
              </Route>
              <Route exact path={`/:id`}>

              </Route>
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
