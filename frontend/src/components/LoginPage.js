import "./UserPages.css";
import { Button, Container, Row, Col } from "react-bootstrap";


const LoginPage = (props) => {
  const { email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError } = props;

  return (
    <div id="user-page">
      {hasAccount ? (
        <h1 id="form-title"> User Login </h1>
        ) : (
        <h1 id="form-title"> Register </h1>
        )}
      <Container>
        <div className="form-container">
        <label> Email </label>
        <p>
          <input
            id="form-textfield"
            placeholder="john.doe@gmail.com"
            type="text"
            autoFocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
       
        <p className="error-message">{emailError}</p>
        <label> Password </label>
        <p>
          <input
            id="form-textfield"
            placeholder="6 or more characters"
            type="password"
            autoFocus
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p className="error-message">{passwordError}</p>
        </div>
        <div className="btn-container">
          {hasAccount ? (
            <>
              <Button onClick={handleLogin}> Sign in</Button>
              <p id="form-cta">
                Don't have an account? {" "}
                <span id="link" onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
              </p>
            </>
          ) : (
              <>
                <Button onClick={handleSignup}> Sign up</Button>
                <p id="form-cta">
                  Have an account? {" "}
                  <span id="link" onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
                </p>
              </>
            )}
        </div>
      </Container>
    </div>

  )
}

export default LoginPage;