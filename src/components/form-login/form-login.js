import React from 'react';
import "./form-login.scss";
import {useNavigate} from "react-router-dom";

function FormLogin({onClick}) {
  const navigate = useNavigate();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    navigate("/");
    onClick();
  }

  return (
    <form className="form" onSubmit={handleSubmitForm}>
      <div className="form__wrapper">
        <fieldset className="form__fieldset">
          <label className="form__label"></label>
          <input className="form__input" type="email" placeholder="Email" name="login" />
        </fieldset>
        <fieldset className="form__fieldset">
          <label className="form__label"></label>
          <input className="form__input" type="password" placeholder="Password" name="password" />
        </fieldset>
        <button className="form__button button" type="submit">Sign in</button>
      </div>

    </form>
  );
}

export default FormLogin;
