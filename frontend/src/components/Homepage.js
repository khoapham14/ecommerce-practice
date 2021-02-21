import "./HomePage.css";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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

    return (
        

        <div className="homePage">
            <PageHeader mainHeader={mainHeader} subHeader={subHeader} />
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

export default HomePage;