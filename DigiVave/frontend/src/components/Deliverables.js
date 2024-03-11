import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Deliverables = ({ allPhases, selectedProduct }) => {
  const navigate = useNavigate();

  const [newDeliverables, setNewDeliverables] = useState(
    Object.fromEntries(
      Object.keys(allPhases).map((phase) => [phase, ""])
    )
  );
  const [deliverablesData, setDeliverablesData] = useState({
    "Product Selection": [
      { text: "Voice of Customer", isChecked: true, isDefault: true },
      { text: "Product Portfolio", isChecked: true, isDefault: true },
      { text: "Feasibility Study", isChecked: true, isDefault: true },
      { text: "Competitor Analysis", isChecked: false },
    ],
    "Study Phase": [
      { text: "Information Collection", isChecked: true, isDefault: true },
      { text: "Teardown Analysis", isChecked: true, isDefault: true },
      { text: "Bom Analysis", isChecked: true, isDefault: true },
      { text: "Functional Analysis", isChecked: true, isDefault: true },
      { text: "Baseline Costing", isChecked: true, isDefault: true },
      { text: "Benchmarking", isChecked: false },
    ],
    "Ideation Phase": [
      { text: "Idea Generation", isChecked: true, isDefault: true },
      { text: "Idea Evaluation and Prioritization", isChecked: true, isDefault: true },
    ],
    "Development Phase": [
      { text: "Detailed Design", isChecked: true, isDefault: true },
      { text: "Standardization", isChecked: true, isDefault: true },
      {
        text: "Should Cost For Modified Design",
        isChecked: true,
        isDefault: true,
      },
      { text: "DFMEA", isChecked: false },
      {
        text: "Sourcing / Alternate Sourcing",
        isChecked: true,
        isDefault: true,
      },
      { text: "Business Case Summary", isChecked: true, isDefault: true },
    ],
    "Implementation Phase": [
      { text: "Tool Development Support", isChecked: true, isDefault: true },
      { text: "Proto-Build Support", isChecked: true, isDefault: true },
      { text: "Pre-Compliance Testing", isChecked: true, isDefault: true },
      { text: "FAI", isChecked: true, isDefault: true },
      { text: "Certification Support", isChecked: false },
    ],
  });

  const handleAddDeliverable = (phase) => {
    if (newDeliverables[phase].trim() !== "") {
      setDeliverablesData((prevDeliverablesData) => ({
        ...prevDeliverablesData,
        [phase]: [
          ...prevDeliverablesData[phase],
          {
            text: newDeliverables[phase],
            isChecked: deliverablesData[phase].some(
              (deliverable) => deliverable.isDefault
            )
              ? true
              : false,
          },
        ],
      }));
      setNewDeliverables((prevNewDeliverables) => ({
        ...prevNewDeliverables,
        [phase]: "",
      }));
    }
  };

  const handleCheckboxChange = (phase, index) => {
    setDeliverablesData((prevDeliverablesData) => {
      const updatedDeliverables = [...prevDeliverablesData[phase]];
      updatedDeliverables[index] = {
        ...updatedDeliverables[index],
        isChecked: !updatedDeliverables[index].isChecked,
      };
      return { ...prevDeliverablesData, [phase]: updatedDeliverables };
    });
  };

  const handleNextButtonClick = () => {
    // Filter out unchecked phases
    const selectedPhasesData = Object.fromEntries(
      Object.entries(allPhases).filter(([phase, isChecked]) => isChecked)
    );
  
    // Create an object to store the selected product, phases, and deliverables
    const selectedData = {
      product: selectedProduct,
      phases: {},
    };
  
    // Iterate through each phase and save its deliverables
    Object.keys(deliverablesData).forEach((phase) => {
      // Check if the phase is selected
      if (selectedPhasesData[phase]) {
        // Filter out unchecked deliverables
        const selectedDeliverables = deliverablesData[phase].filter(
          (deliverable) => deliverable.isChecked
        );
  
        // Save the phase and its selected deliverables in the object
        selectedData.phases[phase] = selectedDeliverables;
      }
    });
  
    localStorage.setItem(selectedProduct, JSON.stringify(selectedData));
    // Log or send the selected data wherever needed
    console.log('Selected Data:', selectedData);

     // Show an alert
     window.alert('All data saved successfully!');

     // Redirect to the main landing page
     navigate('/');
  };
  

  return (
    <div className="deliverables-container">
      {Object.entries(allPhases).map(([phase, isChecked]) => (
        isChecked && (
          <div key={phase} className="deliverables-sub-container">
            <h3 className="sub-container-h3">{phase} Deliverables</h3>
            <ul className="deliverables-list">
              {deliverablesData[phase].map((deliverable, index) => (
                <li key={index} className="deliverables-item">
                  <input
                    type="checkbox"
                    checked={deliverable.isChecked}
                    onChange={() => handleCheckboxChange(phase, index)}
                    disabled={deliverable.isDefault}
                  />
                  <span>{deliverable.text}</span>
                </li>
              ))}
            </ul>
            <div>
              <input
                type="text"
                className="deliverable-inputbox"
                value={newDeliverables[phase]}
                onChange={(e) =>
                  setNewDeliverables((prevNewDeliverables) => ({
                    ...prevNewDeliverables,
                    [phase]: e.target.value,
                  }))
                }
                placeholder="Add new deliverable"
              />
              <button onClick={() => handleAddDeliverable(phase)}>Add</button>
            </div>
          </div>
        )
      ))}
      <button className="next-button" onClick={handleNextButtonClick}>
        Next
      </button>
    </div>
  );
};

export default Deliverables;