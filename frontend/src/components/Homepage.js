import "./HomePage.css";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Container, Col } from 'react-bootstrap';

import ProductCard from "./ProductCard";
import PageHeader from "./PageHeader";

import FB_Logo from "../assets/facebook-3-256.png";
import Amazon_Logo from "../assets/amazon-256.png";
import Netflix_Logo from "../assets/netflix-2-256.png";
import Google_Logo from "../assets/google-256.png";
import Samsung_Logo from "../assets/samsung-256.png";
import Insta_Logo from "../assets/instagram-256.png";
import Twitter_Logo from "../assets/twitter-4-256.png";
import Youtube_Logo from "../assets/youtube-4-256.png";

import { getProducts as listProducts } from '../actions/productActions';

const HomePage = () => {

  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  var mainHeader = "hi.";
  var subHeader = "We sell nothing here.";

  var productHeader = "Latest Products";
  var productSubHeader = "Our research team's most recent innovations.";

  var bestSellerHeader = "Best Sellers";
  var bestSellerSubHeader = "Products that keep our lights on."

  var partnersHeader = "Not sure about nothing?";
  var partnersSubHeader = "Check out all these companies who bought nothing from us."

  return (
    <div className="homePage">
      <PageHeader mainHeader={mainHeader} subHeader={subHeader} />
      <PageHeader mainHeader={productHeader} subHeader={productSubHeader} />
      <Container className="products-container">
        <Row id="product-list">
          {loading ? (
            <h2>Loading...</h2>
          ) : error ? (
            <h2>{error}</h2>
          ) : (
                products.slice(0, 4).map((product) => (
                  <ProductCard
                    key={product._id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    imageUrl={product.imageUrl}
                    productId={product._id}
                  />
                ))
              )}
        </Row>
      </Container>

      <PageHeader mainHeader={bestSellerHeader} subHeader={bestSellerSubHeader} />
      <Container>
        <Row id="product-list">
          {loading ? (
            <h2>Loading...</h2>
          ) : error ? (
            <h2>{error}</h2>
          ) : (
                products.slice(4, 7).map((product) => (
                  <ProductCard
                    key={product._id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    imageUrl={product.imageUrl}
                    productId={product._id}
                  />
                ))
              )}
        </Row>
      </Container>
      <PageHeader mainHeader={partnersHeader} subHeader={partnersSubHeader} />
      <Container className="partners-container">
        <Row>
          <Col md="3" sm="6">
            <img src={FB_Logo} height="75px" width="75px" id="partner-logo" />
          </Col>
          <Col md="3" sm="6">
            <img src={Amazon_Logo} height="75px" width="75px" id="partner-logo" />
          </Col>
          <Col md="3" sm="6">
            <img src={Netflix_Logo} height="75px" width="75px" id="partner-logo" />
          </Col>
          <Col md="3" sm="6">
            <img src={Google_Logo} height="100px" width="100px" id="partner-logo" />
          </Col>

        </Row>
        <Row>
          <Col md="3" sm="6">
            <img src={Samsung_Logo} height="100px" width="100px" id="partner-logo" />
          </Col>
          <Col md="3" sm="6">
            <img src={Insta_Logo} height="75px" width="75px" id="partner-logo" />
          </Col>
          <Col md="3" sm="6">
            <img src={Twitter_Logo} height="75px" width="75px" id="partner-logo" />
          </Col>
          <Col md="3" sm="6">
            <img src={Youtube_Logo} height="75px" width="75px" id="partner-logo" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomePage;