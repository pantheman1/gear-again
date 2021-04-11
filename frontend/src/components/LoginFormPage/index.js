// This page is not used---the modal login is used
import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
// import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
  };

  const handleDemoSubmit = () => {
    dispatch(sessionActions.login({ credential: 'Demo', password: 'password' }))
  }

  return (
    <div className="form__container">
      <form className="form__container-form" onSubmit={handleSubmit}>
        <div className="form-container">
          <h1>Log In</h1>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <div className="input-label-container">
            <h2>
              Username or Email
          </h2>
            <input
              className="form__text--input"
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </div>
          <div className="input-label-container">
            <h2>
              Password
        </h2>
            <input
              className="form__text--input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="btn-container">
            <button className="form-btn" type="submit">Log In</button>
            <button id="demo-btn" className="form-btn" type="button" onClick={handleDemoSubmit}>Demo Login</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginFormPage;
