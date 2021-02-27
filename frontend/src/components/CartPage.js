import "./CartPage.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { loadStripe } from '@stripe/stripe-js';
import axios from "axios";

// Components
import CartItem from "./CartItem.js";

// Actions
import { addToCart, removeFromCart } from "../actions/cartActions";

const CartPage = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => { }, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(3);
  };

  const getCostWithGST = () => {
    return (getCartSubTotal() * 0.15).toFixed(3);
  }

  const getTotal = () => {
    return (parseFloat(getCartSubTotal()) + parseFloat(getCostWithGST())).toFixed(3);
  }


  const stripePromise = loadStripe("pk_live_51IMtE6CzCpfxrku1F1xeeVeZw2ggFJsMq48HU7IZ9b6soFdmeE9SrDQQLM0dw0MeGK9z1BHdXK3TdKrJNOAXlsZR00iz83KSEh");

  const getStripe = async () => {

    console.log("Getstripe called");
    // Get Stripe.js instance
    const stripe = await stripePromise;

    // Call your backend to create the Checkout Session
    const response = await fetch('/create-checkout-session', { method: 'POST' });


    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  }

  const handleClick = async (event) => {
    //Send cart data to backend
    await axios.post('/import', {
      method: 'POST',
      total: getTotal(),
      cart: cartItems,
    }).then(getStripe())
  };

  return (
    <Container className="cart-page">

      <Row>
        <Col md="8" sm="12" xs="12">
          <div className="cart-items">
            <p className="cart-item-header">Shopping Cart</p>

            {cartItems.length === 0 ? (
              <div>
                Your Cart Is Empty <Link to="/">Go Back</Link>
              </div>
            ) : (
                cartItems.map((item) => (
                  <CartItem
                    key={item.product}
                    item={item}
                    qtyChangeHandler={qtyChangeHandler}
                    removeHandler={removeFromCartHandler}
                  />
                ))
              )}
          </div>
        </Col>
        <Col md="4" sm="12" xs="12">
          <div className="cart-info">
            <p className="cart-info-header">Total Cost</p>
            <div className="cart-info-details">
              <Row>
                <Col md="6" sm="6" xs="12">
                  <p>Subtotal ({getCartCount()}) items: </p>
                  <p>GST (15%):</p>
                  <p>You pay: </p>
                </Col>
                <Col md="6" sm="6" xs="12">
                  <p>${getCartSubTotal()}</p>
                  <p>${getCostWithGST()}</p>
                  <p id="cart-cost">${getTotal()}</p>
                </Col>
              </Row>
            </div>
            <div>
              <Button id="checkout-button" onClick={handleClick}>Proceed To Checkout</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;