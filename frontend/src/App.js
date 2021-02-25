import "./App.css";
import { Button } from "react-bootstrap";
import { Redirect, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import fire from './firebase';
import { useState, useEffect } from "react";


// Components
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";

// Pages
import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductPage";
import CartPage from "./components/CartPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import NothingCreator from "./components/NothingCreator";
import JobVacancies from "./components/JobVacancies";
import Work4Nothing from "./components/Work4Nothing";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";

const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);
  const [authorized, setStatus] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      })
  }

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      })
  }

  const handleLogout = () => {
    fire.auth().signOut();
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser('');
      }
    })
  }

  useEffect(() => {
    authListener();
  }, [])

  return (
    <div className="app">
      <Router>
        <NavBar user={user} handleLogout={handleLogout} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/product/:id" component={ProductPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/careers" component={JobVacancies} />
          <Route exact path="/work-4-nothing" component={Work4Nothing} />
          <Route exact path="/nothing-creator" component={NothingCreator} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" render={() => !user ?
              <LoginPage email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError} /> : <Redirect to="/" />} />
        </Switch>
      </Router>
      <Footer />
    </div>

  );
}

export default App;