import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SelectPhases from './SelectPhases';

const PhasesPage = ({ selectedProduct }) => {
  return (
    <div>
      <Header title={selectedProduct} />
      <SelectPhases />
      <Footer />
    </div>
  );
};

export default PhasesPage;
