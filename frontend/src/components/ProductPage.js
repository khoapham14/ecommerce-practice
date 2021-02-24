import "./ProductPage.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Container, Card } from "react-bootstrap";

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
    <div className="ProductPage">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
            <Container>
              <Row>
                <Col md="6" sm="6" xs="12">
                  <Card style={{ width: '20rem' }} className="product-card">    
                    <Card.Body>
                      <Card.Title><p className="card_header"> Product Details </p></Card.Title>
                      <Card.Img variant="top" id="left__image" src={product.imageUrl} />
                      <Card.Subtitle> <p className="product_name"> {product.name} </p></Card.Subtitle>
                      <Card.Text>
                        <p className="product-desc"> {product.description}</p>
                      </Card.Text>
                     </Card.Body>
                  </Card>
                </Col>
                <Col md="6" sm="6" xs="12">
                  <div className="ProductPage__right">
                    <div className="right__info">
                      <p> Price: <span>${product.price}</span></p>

                      <p> Status: <span> {product.countInStock > 0 ? "In Stock" : "Out of Stock"} </span> </p>

                      <p> Quantity:
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
                      <p>
                        <button type="button" onClick={addToCartHandler}>
                          Add To Cart
                          </button>
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          )}

    </div>
  );
};

export default ProductPage;