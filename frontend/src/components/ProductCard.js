import './ProductCard.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ imageUrl, name, price, description, productId }) => {
    var roundedPrice = price.toFixed(2);

    return (
        <div className="productCard">
            <img
                src={imageUrl}
                alt={name}
            />

            <p className="productName"> {name}</p>
            <p className="productDesc"> {description}</p>
            <p className="productPrice"> ${roundedPrice}</p>
            <Link to={`/product/${productId}`}> View Product</Link>
        </div>


    )
}

export default ProductCard;