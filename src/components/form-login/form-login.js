import React from 'react';
import "./form-login.scss";

function FormLogin() {
  return (
    <form className="form" >
      <div className="form__wrapper">
        <fieldset className="form__fieldset">
          <label className="form__label"></label>
          <input className="form__input" type="email" placeholder="Email" name="login" />
        </fieldset>
        <fieldset className="form__fieldset">
          <label className="form__label"></label>
          <input className="form__input" type="password" placeholder="Password" name="password" />
        </fieldset>
        <button className="form__button" type="button">Sign in</button>
      </div>

    </form>
  );
}

export default FormLogin;
