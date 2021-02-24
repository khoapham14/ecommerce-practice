import "./CartPage.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
      .toFixed(2);
  };

  
  const stripePromise = loadStripe("pk_test_51IMtE6CzCpfxrku1HAVAuRThr8dyQmFbXLrdl3wLZAu5RLkKrU1xa4ZX54oflb548Jsrg2lA14eQpFkfGd91FV0B00459THt5z");

  const getStripe = async () =>{
    
    console.log("Getstripe called");
     // Get Stripe.js instance
     const stripe = await stripePromise;

     // Call your backend to create the Checkout Session
     const response = await fetch('/create-checkout-session', { method: 'POST'});
 
 
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
      total: getCartSubTotal(),
      cart: cartItems,
    }).then(getStripe())
  };

  return (
    <>
      <div className="CartPage">
        <div className="CartPage__left">
          <h2>Shopping Cart</h2>

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

        <div className="CartPage__right">
          <div className="CartPage__info">
            <p>Subtotal ({getCartCount()}) items</p>
            <p>${getCartSubTotal()}</p>
          </div>
          <div>
            <button onClick={handleClick}>Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;