import "./NavBar.css";
import { Navbar, Form, FormControl, Nav, Button } from 'react-bootstrap';

import Cart_Image from "../assets/cart-59-256.png";
import Search_Icon from "../assets/search-13-256.png";

import PageHeader from "../components/PageHeader";

const NavBar = () => {
    return (
        <div className="navbar-container">
            <Navbar className="navbar" expand="lg">
                <Navbar.Brand href="#home">nothing</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav.Link href="#home">about</Nav.Link>
                    <Nav.Link href="#link">contact</Nav.Link>
                    <Form className="search-bar" inline>
                        <FormControl type="text" placeholder="Search for products" />
                    </Form>
                    <Button className="search-button">
                        <img src={Search_Icon}
                            height="20px"
                            width="20px"
                        />
                    </Button>
                    <Nav.Link href="">sign up</Nav.Link>
                    <Nav.Link href="">sign in</Nav.Link>
                    <Nav.Link href="">
                        <img src={Cart_Image}
                            height="35px"
                            width="35px"
                        />
                    </Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar;