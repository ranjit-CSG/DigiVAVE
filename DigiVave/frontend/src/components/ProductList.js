import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'


const ProductList = ({ searchTerm }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

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

  // const handlePhasesClick = (productName) => {
  //   // Use navigate function to navigate to PhasesPage with selected product name
  //   navigate(`/phases/${productName}`);
  // };

  const handlePhasesClick = async (productName) => {
    // Check if there is data stored in local storage
    const storedDataKeys = Object.keys(localStorage);

    if (storedDataKeys.includes(productName)) {
      // Data exists for the selected product, navigate to ViewProduct page
      navigate(`/viewproduct/${productName}`);
    } else {
      // No data, navigate to PhasesPage
      navigate(`/phases/${productName}`);
    }
  };

  return (
    <div className="product-list">
      <h1>Product List</h1>
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
              <button
                  className="operationsButton selectPhases"
                  onClick={() => handlePhasesClick(item.ProductName)}
                >
                  Phases
                </button>
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


