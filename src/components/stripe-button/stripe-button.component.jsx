import React from "react";
import StripeCheckout from "react-stripe-checkout";

//4242 4242 4242 4242 ----  EXP: 01/20 ---- CW:123

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Is4Z4SDzHC6ASL384RB4L6IvPsa3JvvcHKITnl576sH9OZWiaRhYMLdoI8Safs6egiOwXwgJxSm4Px2dnyGZlGw00MO3ez0QI";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
