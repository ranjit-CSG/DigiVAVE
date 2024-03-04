// Deliverables.js
import React from 'react';

const Deliverables = ({ selectedPhases }) => {
  const deliverablesData = {
    'Product Selection': [
      'Voice of Customer',
      'Product Portfolio',
      'Feasibility Study',
      'Competitor Analysis',
    ],
    'Study Phase': [
      'Deliverable 1 for Study Phase',
      'Deliverable 2 for Study Phase',
      'Deliverable 3 for Study Phase',
    ],
    'Ideation Phase': [
      'Idea Generation',
      'Idea Evaluation and Prioritization',
    ],
    'Development Phase': [
      'Development Deliverable 1',
      'Development Deliverable 2',
    ],
    'Implementation Phase': [
      'Implementation Deliverable 1',
      'Implementation Deliverable 2',
    ],
  };

  return (
    <div className="deliverables-container">
      {Object.entries(selectedPhases).map(([phase, isChecked]) => (
        isChecked && (
          <div key={phase} className="deliverables-sub-container">
            <h3>{phase} Deliverables</h3>
            <ul className="deliverables-list">
              {deliverablesData[phase].map((deliverable, index) => (
                <li key={index} className="deliverables-item">&#8226; {deliverable}</li>
              ))}
            </ul>
          </div>
        )
      ))}
    </div>
  );
};

export default Deliverables;
