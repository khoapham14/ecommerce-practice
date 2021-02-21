import "./NavBar.css";
import { Navbar, Form, FormControl, Nav } from 'react-bootstrap';

import Cart_Image from "../assets/cart-59-256.png";

const NavBar = () => {
    return (
        <div className="navbar-container">
            <Navbar className="navbar" expand="lg">
                <Navbar.Brand href="#home">nothing</Navbar.Brand>
                <Nav.Link href="#home">about</Nav.Link>
                <Nav.Link href="#link">contact</Nav.Link>
                <Form className="search-bar">
                    <FormControl type="text" placeholder="Search for products" />
                </Form>
                <Nav.Link href="">sign up</Nav.Link>
                <Nav.Link href="">sign in</Nav.Link>
                <Nav.Link href="">
                    <img src={Cart_Image}
                        height="50px"
                        width="50px"
                    />
                </Nav.Link>
            </Navbar>
        </div>
    )
}

export default NavBar;