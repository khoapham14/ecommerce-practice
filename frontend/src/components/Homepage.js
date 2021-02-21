import "./Homepage.css";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ProductCard from "./ProductCard";

import { getProducts as listProducts } from '../actions/productActions';

const Homepage = () => {

    const dispatch = useDispatch();

    const getProducts = useSelector((state) => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <div className="homepage">
            {loading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <h2>{error}</h2>
            ) : (
                        products.map((product) => (
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
        </div>
    )
}

export default Homepage;