import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import {
  CartDropdownDiv,
  CartItemsDiv,
  EmptySpan,
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <CartDropdownDiv>
      <CartItemsDiv>
        {cartItems.length ? (
          cartItems.map((cartitem) => (
            <CartItem key={cartitem.id} item={cartitem} />
          ))
        ) : (
          <EmptySpan className="empty-message">Your cart is empty</EmptySpan>
        )}
      </CartItemsDiv>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </CartDropdownDiv>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
