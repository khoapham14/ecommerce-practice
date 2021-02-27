require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const stripe = require('stripe')(process.env.STRIPE_KEY)

connectDB();

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

var items = [];


// Gets data from cart and create custom line_items.
app.post('/import', async (req, res) => {
  items = await req.body.cart.map((product) => {
    return {
      price_data: {
        currency: 'nzd',
        product_data: {
          name: product.name,
        },
        unit_amount: parseInt(product.price * 100),
      },
      quantity: product.qty,
      tax_rates: ['txr_1IPbg5CzCpfxrku1OejJ1QiE'],
    }
  });
});



// Call Stripe API to create checkout session.
app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: items,
    mode: 'payment',  
    success_url: 'https://example.com/success',
    cancel_url: 'http://localhost:3000/cart',
  });

  res.json({ id: session.id });
});


app.listen(4242, () => console.log(`Listening on port ${4242}!`));