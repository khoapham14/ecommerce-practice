import "./ProductPage.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Container, Card, Button } from "react-bootstrap";

// Actions
import { getProductDetails } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";

const ProductPage = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, match, product]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push(`/cart`);
  };

  return (
    <div className="product-page">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
            <Container>
              <Row>
                <Col md="6" sm="6" xs="12">
                  <Card style={{ width: '100%' }} className="product-card">
                    <Card.Body>
                      <Card.Title><p className="card_header"> Product Details </p></Card.Title>
                      <Card.Img variant="top" className="product-image" src={product.imageUrl} />
                      <Card.Subtitle> <p className="product-name"> {product.name} </p></Card.Subtitle>
                      <Card.Text>
                        <p className="product-desc"> {product.description}</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="6" sm="6" xs="12">
                  <Container>
                    <Row className="product-page-info">
                      <Col md="4" sm="6" xs="6">
                        <p id="page-info"> Price: </p>

                        <p id="page-info"> Status:  </p>

                        <p id="page-info"> Quantity: </p>
                        <Button id="add-button" onClick={addToCartHandler}>
                          Add To Cart
                        </Button>
                      </Col>
                      <Col md="8" sm="6" xs="6">
                        <p><span>${product.price}</span></p>
                        <p><span> {product.countInStock > 0 ? "In Stock" : "Out of Stock"} </span> </p>
                        <p>
                          <span>
                            <select value={qty} onChange={(e) => setQty(e.target.value)}>
                              {[...Array(product.countInStock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              ))}
                            </select>
                          </span>
                        </p>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Container>
          )}

    </div>
  );
};

export default ProductPage;