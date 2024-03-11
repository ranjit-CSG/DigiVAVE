import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ViewProduct = () => {
  const [storedData, setStoredData] = useState(null);
  const { productName } = useParams(); // Use useParams to get the product name from the URL

  useEffect(() => {
    // Fetch and set the stored data for the selected product
    const storedDataString = localStorage.getItem(productName);
    if (storedDataString) {
      const storedDataObject = JSON.parse(storedDataString);
      setStoredData(storedDataObject);
    }
  }, [productName]);

  return (
    <div className="view-product-container">
      <h2 className="product-name">Product Name: {productName}</h2>
      {storedData ? (
        <>
          <h3 className="selected-phases">Selected Phases and their Deliverables:</h3>
          <ul className="phases-list">
            {Object.entries(storedData.phases).map(([phase, deliverables], index) => (
              <li key={index} className="phase-item">
                <strong className="phase-name">{phase}:</strong>
                <ul className="deliverables-list">
                  {deliverables.map((deliverable, subIndex) => (
                    <li key={subIndex} className="deliverable-item">{deliverable.text}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className="no-data-message">No data available for this product.</p>
      )}
    </div>
  );
};

export default ViewProduct;
