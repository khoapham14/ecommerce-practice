import './ProductCard.css';
import {Link} from 'react-router-dom';

const ProductCard = ({ imageUrl, name, price, description, productId }) => {
    return (
        <div className="productCard">
            <img
            src={imageUrl}
            alt={name}
            />

            <p className="productName"> {name}</p>
            <p className="productDesc"> {description}</p>
            <p className="productPrice"> ${price} </p>
        </div>
    )
}

export default ProductCard;