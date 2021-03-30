import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import SignupFormModal from "./components/SignupFormPage";
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Footer from "./components/Navigation/Footer";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <div className="page__container">
        <div className="nav__wrapper-content">
          <Navigation isLoaded={isLoaded} />
          {isLoaded && (
            <Switch>
              <Route path="/">
                <Home />
              </Route>
              {/* <Route path="/login" >
            <LoginFormPage />
          </Route> */}
              {/* <Route path="/signup">
                <SignupFormPage />
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
