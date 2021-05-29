import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import ShopPage from "./pages/shop/shop.component";
import { createStructuredSelector } from "reselect";

import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import React from "react";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { selectCurrentUser } from "./redux/user/user.selector";

class App extends React.Component {
  unSubscribeFromAuth = null;
  componentDidMount() {
    // const { setCurrentUser } = this.props;
    // this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
    //   //check if user is signed in
    //   console.log(`userAuth:` + JSON.stringify(userAuth));
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);
    //     userRef.onSnapshot((snapshot) => {
    //       setCurrentUser({
    //         currentUser: {
    //           id: snapshot.id,
    //           ...snapshot.data(),
    //         },
    //       });
    //     });
    //     setCurrentUser(userAuth);
    //   }
    //   // addCollectionAndDocuments(
    //   //   "collections",
    //   //   collectionsArray.map(({ title, items }) => ({ title, items }))
    //   // );
    // });
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
