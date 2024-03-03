import React, { useState, useEffect } from 'react';

const ProductList = ({ searchTerm }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, [searchTerm]); // Trigger fetch when searchTerm changes

  const getProducts = async () => {
    let url = "http://localhost:5000/products";
    if (searchTerm) {
      url = `http://localhost:5000/products/${searchTerm}`;
    }

    let result = await fetch(url);
    result = await result.json();
    setProducts(result);
  };

  return (
    <div className="product-list">
      <ul className="captions">
        <li>Product ID</li>
        <li>Product Name</li>
        <li>Operations</li>
      </ul>
      {products.length > 0 ? (
        <div className="product-items">
          {products.map((item, index) => (
            <ul key={item.ProductID} className="product-item">
              <li>{item.ProductID}</li>
              <li>{item.ProductName}</li>
              <li>
                <button className="operationsButton selectPhases">Phases</button>
              </li>
            </ul>
          ))}
        </div>
      ) : (
        <h1>No Result Found</h1>
      )}
    </div>
  );
};

export default ProductList;


