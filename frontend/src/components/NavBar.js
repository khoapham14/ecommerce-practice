import "./NavBar.css";
import { Container, Navbar, Form, FormControl, Row, Col, Nav, Button, InputGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import Cart_Image from "../assets/cart-59-256.png";
import Search_Icon from "../assets/search-13-256.png";

const NavBar = (props) => {
  const { user, handleLogout, email } = props;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <div>
      {!user ? (
        <Container className="navbar-container">
        <Navbar className="navbar" expand="lg">
          <Navbar.Brand href="/">nothing</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link href="/about">about</Nav.Link>
            <Nav.Link href="/contact">contact</Nav.Link>
            <InputGroup className="search-form">
              <FormControl type="text" className="search-bar" placeholder="Search for products" />
              <InputGroup.Append>
                <Button variant="outline-secondary" className="search-button">
                  <img src={Search_Icon} id="search-icon" />
                </Button>
              </InputGroup.Append>
            </InputGroup>
            <Nav.Link href="/login">login</Nav.Link>
            <Nav.Link href="/cart">
              <Row id="cart-section">
                <Col md="6" sm="12" xs="12"><img src={Cart_Image} id="cart-icon" /> </Col>
                <Col md="6" sm="12" xs="12"><span className="cartlogo-badge">{getCartCount()}</span> </Col>
              </Row>           
            </Nav.Link>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      ) : (
        <Container className="navbar-container">
        <Navbar className="navbar" expand="lg">
          <Navbar.Brand href="/">nothing</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link href="/about">about</Nav.Link>
            <Nav.Link href="/contact">contact</Nav.Link>
            <InputGroup className="search-form">
              <FormControl type="text" className="search-bar" placeholder="Search for products" />
              <InputGroup.Append>
                <Button variant="outline-secondary" className="search-button">
                  <img src={Search_Icon} id="search-icon" />
                </Button>
              </InputGroup.Append>
            </InputGroup>
            <Nav.Link href="/login" onClick={handleLogout}>logout</Nav.Link>
            <Nav.Link href="/cart">
              <Row id="cart-section">
                <Col md="6" sm="12" xs="12"><img src={Cart_Image} id="cart-icon" /> </Col>
                <Col md="6" sm="12" xs="12"><span className="cartlogo-badge">{getCartCount()}</span> </Col>
              </Row>           
            </Nav.Link>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      )}
      
    </div>
  )
}

export default NavBar;