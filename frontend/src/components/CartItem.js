import "./CartItem.css";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <div className="cart-item">
      <Row>
        <Col md="3" sm="3" xs="3" className="table-column">
          <img className="cart-image" src={item.imageUrl} alt={item.name} />
        </Col>
        <Col md="3" sm="3" xs="3" className="table-column">
          <Link to={`/product/${item.product}`}  >
            <p className="cart-item-name" >{item.name}</p>
          </Link>
        </Col>
        <Col md="2" sm="2" xs="2" className="table-column">
          <p className="cart-item-price">${item.price} ea.</p>
        </Col>
        <Col md="4" sm="4" xs="4" className="table-column">
          <select
            value={item.qty}
            onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
            className="cart-item-select"
          >
            {[...Array(item.countInStock).keys()].map((x) => (
              <option key={x + 1} value={x + 1}>
                {x + 1}
              </option>
            ))}
          </select>
          <Button
            className="cart-item-deleteBtn"
            onClick={() => removeHandler(item.product)}
          >
            X
      </Button>
        </Col>
      </Row>
    </div>
  );
};

export default CartItem;