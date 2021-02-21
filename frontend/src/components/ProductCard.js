import './ProductCard.css';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ imageUrl, name, price, description, productId }) => {
  var roundedPrice = price.toFixed(2);

  return (
      <Card style={{ width: '16rem' }} className="product-card">
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title><p className="product-name"> {name}</p></Card.Title>
          <Card.Subtitle className="mb-2 text-muted"><p className="product-price"> ${roundedPrice}</p></Card.Subtitle>
          <Card.Text>
            <p className="product-desc"> {description}</p>
          </Card.Text>
          <Button variant="primary"><Link to={`/product/${productId}`} id="product-button"> View Product</Link></Button>
        </Card.Body>
      </Card>
  )
}

export default ProductCard;