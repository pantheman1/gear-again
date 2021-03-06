import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./LoginForm.css";

function LoginForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      (res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      }
    );
  };

  // make sure this user is input into my seeder
  const handleDemoSubmit = () => {
    dispatch(sessionActions.login({ credential: 'Demo', password: 'password' }))
  }

  return (
    <div className="form__container">
      <h1>Log In</h1>
      <form className="form-modal" onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <div className="input-label-container">
          <label>
            Username or Email
          </label>
          <input
            className="form__text--input"
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </div>
        <div className="input-label-container">
          <label>
            Password
        </label>
          <input
            className="form__text--input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Log In</button>
        <button className="demo-btn" type="button" onClick={handleDemoSubmit}>Demo Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
