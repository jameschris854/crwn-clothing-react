import React from "react";
import { connect } from "react-redux";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  googleSiginInStart,
  emailSiginInStart,
} from "../../redux/user/user.actions";
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { emailSiginInStart } = this.props;
    const { email, password } = this.state;

    emailSiginInStart(email, password);
  };
  render() {
    const { googleSiginInStart } = this.props;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Signin with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSiginInStart: () => dispatch(googleSiginInStart()),
  emailSiginInStart: (email, password) =>
    dispatch(emailSiginInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
