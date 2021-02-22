import "./NavBar.css";
import { Container, Navbar, Form, FormControl, Nav, Button, InputGroup } from 'react-bootstrap';

import Cart_Image from "../assets/cart-59-256.png";
import Search_Icon from "../assets/search-13-256.png";

const NavBar = () => {
  return (
    <div>
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
                  <img src={Search_Icon}
                    height="20px"
                    width="20px"
                  />
                </Button>
              </InputGroup.Append>
            </InputGroup>
            <Nav.Link href="">register</Nav.Link>
            <Nav.Link href="">login</Nav.Link>
            <Nav.Link href="">
              <img src={Cart_Image}
                height="35px"
                width="35px"
              />
            </Nav.Link>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  )
}

export default NavBar;