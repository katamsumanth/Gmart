// ProductList.jsx
import React from 'react';

const ProductList = () => {
    const products = [
        { id: 1, name: "Product 1", image: "https://via.placeholder.com/150" },
        { id: 2, name: "Product 2", image: "https://via.placeholder.com/150" },
        { id: 3, name: "Product 3", image: "https://via.placeholder.com/150" },
        { id: 4, name: "Product 4", image: "https://via.placeholder.com/150" },
    ];

    return (
        <div className="container mt-4">
            <div className="row">
                {products.map(product => (
                    <div key={product.id} className="col-md-3 product-card">
                        <img src={product.image} alt={product.name} className="img-fluid" />
                        <p>{product.name}</p>
                        <button className="btn btn-primary">Shop Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
