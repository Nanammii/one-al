import React from 'react';
import ButtonClose from "../components/button-close/button-close";
import FormLogin from "../components/form-login/form-login";

function LoginPage(props) {

  return (
      <div className="login-page">
        <ButtonClose onClick={props.onClose} />
        <FormLogin onClick={props.onClose} />
      </div>
  );
}

export default LoginPage;
