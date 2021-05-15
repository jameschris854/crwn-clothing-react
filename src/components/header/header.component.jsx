import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-item.component";
import { setCurrentUser } from "../../redux/user/user.actions";
import CartDropdown from "../../components/cart-dropdown/cart-dropdowm.component";

const Header = ({ currentUser, hidden, setCurrentUser }) => {
  console.log({ currentUser, setCurrentUser });
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div
            className="option"
            onClick={() => {
              auth.signOut();
              setCurrentUser(null);
            }}
          >
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

const mapDispatchToProps = (dispatch) => {
  return { setCurrentUser: (user) => dispatch(setCurrentUser(user)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
