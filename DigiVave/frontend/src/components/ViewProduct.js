import React, { useEffect, useState } from 'react';

const ViewProduct = ({ productName }) => {
  const [storedData, setStoredData] = useState(null);

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
      <h2>View Product: {productName}</h2>
      {storedData ? (
        <>
          <h3>Selected Phases:</h3>
          <ul>
            {Object.entries(storedData.phases).map(([phase, deliverables], index) => (
              <li key={index}>
                <strong>{phase}:</strong>
                <ul>
                  {deliverables.map((deliverable, subIndex) => (
                    <li key={subIndex}>{deliverable.text}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>No data available for this product.</p>
      )}
    </div>
  );
};

export default ViewProduct;
