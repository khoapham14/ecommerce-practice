import './ProductCard.css';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ imageUrl, name, price, description, productId }) => {
  var roundedPrice = price.toFixed(2);

  return (
      <Card style={{ width: '16rem' }} className="product-card">
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title className="product-name"> {name}</Card.Title>
          <Card.Subtitle className="mb-2 text-mute product-price"> ${roundedPrice}</Card.Subtitle>
          <Card.Text className="product-desc"> {description} </Card.Text>
          <Button id="product-button"><Link to={`/product/${productId}`} id="button-text"> View Product</Link></Button>
        </Card.Body>
      </Card>
  )
}

export default ProductCard;