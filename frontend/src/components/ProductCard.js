import './ProductCard.css';
import { Link } from 'react-router-dom';
import {Card, Button} from 'react-bootstrap';

const ProductCard = ({ imageUrl, name, price, description, productId }) => {
    var roundedPrice = price.toFixed(2);

    return (
        <div className="productCard">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <Card.Title><p className="productName"> {name}</p></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"><p className="productPrice"> ${roundedPrice}</p></Card.Subtitle>
                    <Card.Text>
                        <p className="productDesc"> {description}</p>
                    </Card.Text>
                    <Button variant="primary"><Link to={`/product/${productId}`}> View Product</Link></Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductCard;