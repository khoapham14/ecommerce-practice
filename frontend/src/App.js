import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// Components
import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductPage";
import CartPage from "./components/CartPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/product/:id" component={ProductPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/cart" component={CartPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;