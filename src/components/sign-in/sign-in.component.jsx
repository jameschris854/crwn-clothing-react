import React, { useState } from "react";
import { connect } from "react-redux";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  googleSiginInStart,
  emailSiginInStart,
} from "../../redux/user/user.actions";

const SignIn = ({ emailSiginInStart, googleSiginInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleChange = (event) => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSiginInStart(email, password);
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Signin with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          handleChange={handleChange}
          value={password}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSiginInStart}
            isGoogleSignIn
          >
            Sign in with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSiginInStart: () => dispatch(googleSiginInStart()),
  emailSiginInStart: (email, password) =>
    dispatch(emailSiginInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
