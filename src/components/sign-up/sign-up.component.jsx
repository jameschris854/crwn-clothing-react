import React from "react";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    console.log('handleSubmit');

    const { displayName, email, password, confirmPassword } = this.state;
    if (!(password === confirmPassword)) {
        console.log('password dosent match');
      alert("passwords dont match");
      return;
    }
    try {
        console.log('creating user doc');
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },() => console.log(this.state));
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
      const {name,value} =event.target;
      this.setState({[name]:value})
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h1 className="title">I donot have an account</h1>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="displayName"
            required
          ></FormInput>
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          ></FormInput>
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          ></FormInput>
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          ></FormInput>
          <CustomButton type="submit">SIGN UP</CustomButton> 
        </form>
      </div>
    );
  }
}

export default SignUp;
