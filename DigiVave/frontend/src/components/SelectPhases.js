import React, { useEffect, useState } from 'react';
import Deliverables from './Deliverables';

const SelectPhases = ({ selectedProduct }) => {
  const [selectedPhases, setSelectedPhases] = useState({
    'Product Selection': false, // Set default value to false for all phases
    'Study Phase': true,
    'Ideation Phase': true,
    'Development Phase': true,
    'Implementation Phase': false,
  });
  const [showDeliverables, setShowDeliverables] = useState(false);

  useEffect(() => {
    console.log('Selected Product:', selectedProduct);
  }, [selectedProduct]);

  const phaseNames = [
    'Product Selection',
    'Study Phase',
    'Ideation Phase',
    'Development Phase',
    'Implementation Phase',
  ];

  const handleCheckboxChange = (phase, checked) => {
    // Update the state only if the Next button has not been clicked yet
    if (!showDeliverables) {
      setSelectedPhases((prevSelectedPhases) => ({
        ...prevSelectedPhases,
        [phase]: checked,
      }));
    } else {
      // Handle the case when the Next button has been clicked
      // For example, you can reset the showDeliverables state
      setShowDeliverables(false);
  
      // Allow changes immediately after resetting showDeliverables
      setSelectedPhases((prevSelectedPhases) => ({
        ...prevSelectedPhases,
        [phase]: checked,
      }));
    }
  };
  
  const handleNextButtonClick = () => {
    // Save selectedPhases data or perform any other necessary actions
    console.log('Selected Phases:', selectedPhases);

    // Show the deliverables section
    setShowDeliverables(true);
  };

  return (
    <div className="selected-product-container">
      <div className="product-name">
        <h2>{selectedProduct}</h2>
      </div>
      <div className="arrow">&#x2193;</div>
      <div className="phases-content">
        <h3>Phases</h3>
        <div className="arrow">&#x2193;</div>
        <div className="sub-containers">
          {phaseNames.map((phase, index) => (
            <React.Fragment key={index}>
              <div className="sub-container">
                <h4>{phase}</h4>
                {index >= 1 && index <= 3 ? (
                  <>
                    <input
                      type="checkbox"
                      defaultChecked
                      disabled
                      onChange={(e) =>
                        handleCheckboxChange(phase, e.target.checked)
                      }
                    />
                    <p className='default-checkebox-para'>Default Phases Can't be Unchecked</p>
                  </>
                ) : (
                  <input
                    type="checkbox"
                    checked={selectedPhases[phase] || false}
                    onChange={(e) => handleCheckboxChange(phase, e.target.checked)}
                  />
                )}
              </div>
              {index !== phaseNames.length - 1 && (
                <div className="right-arrow">&#x2192;</div>
              )}
            </React.Fragment>
          ))}
        </div>
        <button className="next-button" onClick={handleNextButtonClick}>
          Next
        </button>
        {showDeliverables && <Deliverables allPhases={selectedPhases} />}
      </div>
    </div>
  );
};

export default SelectPhases;

