// import React, { useEffect, useState } from 'react';

// const SelectPhases = ({ selectedProduct }) => {
//   const [selectedPhases, setSelectedPhases] = useState({
//     'Study Phase': true,
//     'Ideation Phase': true,
//     'Development Phase': true,
//   });

//   useEffect(() => {
//     console.log('Selected Product:', selectedProduct);
//   }, [selectedProduct]);

//   const phaseNames = [
//     'Product Selection',
//     'Study Phase',
//     'Ideation Phase',
//     'Development Phase',
//     'Implementation Phase',
//   ];

//   const handleCheckboxChange = (phase, checked) => {
//     setSelectedPhases((prevSelectedPhases) => ({
//       ...prevSelectedPhases,
//       [phase]: checked,
//     }));
//   };

//   const handleNextButtonClick = () => {
//     // Save selectedPhases data or perform any other necessary actions
//     console.log('Selected Phases:', selectedPhases);

//     // Navigate to the next step or page
//     // Implement your logic here
//   };

//   return (
//     <div className="selected-product-container">
//       <div className="product-name">
//         <h2>{selectedProduct}</h2>
//       </div>
//       <div className="pointer">&#9660;</div>
//       <div className="phases-content">
//         <h3>Phases</h3>
//         <div className="pointer">&#9660;</div>
//         <div className="sub-containers">
//           {phaseNames.map((phase, index) => (
//             <React.Fragment key={index}>
//               <div className="sub-container">
//                 <h4>{phase}</h4>
//                 {index >= 1 && index <= 3 ? (
//                   <>
//                     <input
//                       type="checkbox"
//                       defaultChecked
//                       disabled
//                       onChange={(e) =>
//                         handleCheckboxChange(phase, e.target.checked)
//                       }
//                     />
//                     <p className='default-checkebox-para'>Default Phases Can't be Unchecked</p>
//                   </>
//                 ) : (
//                   <input
//                     type="checkbox"
//                     checked={selectedPhases[phase] || false}
//                     onChange={(e) => handleCheckboxChange(phase, e.target.checked)}
//                   />
//                 )}
//               </div>
//               {index !== phaseNames.length - 1 && (
//                 <div className="right-pointer">&#9654;</div>
//               )}
//             </React.Fragment>
//           ))}
//         </div>
//         <button className="next-button" onClick={handleNextButtonClick}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SelectPhases;

// SelectPhases.js
import React, { useEffect, useState } from 'react';
import Deliverables from './Deliverables';

const SelectPhases = ({ selectedProduct }) => {
  const [selectedPhases, setSelectedPhases] = useState({
    'Study Phase': true,
    'Ideation Phase': true,
    'Development Phase': true,
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
    setSelectedPhases((prevSelectedPhases) => ({
      ...prevSelectedPhases,
      [phase]: checked,
    }));
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
      <div className="pointer">&#9660;</div>
      <div className="phases-content">
        <h3>Phases</h3>
        <div className="pointer">&#9660;</div>
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
                <div className="right-pointer">&#9654;</div>
              )}
            </React.Fragment>
          ))}
        </div>
        <button className="next-button" onClick={handleNextButtonClick}>
          Next
        </button>
        {showDeliverables && <Deliverables selectedPhases={selectedPhases} />}
      </div>
    </div>
  );
};

export default SelectPhases;


