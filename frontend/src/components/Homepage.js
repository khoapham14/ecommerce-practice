import "./HomePage.css";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Container } from 'react-bootstrap';

import ProductCard from "./ProductCard";
import PageHeader from "./PageHeader";

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

  return (
    <div className="homePage">
      <PageHeader mainHeader={mainHeader} subHeader={subHeader} />
      <PageHeader mainHeader={productHeader} subHeader={productSubHeader} />
      <Container>
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
    </div>
  )
}

export default HomePage;