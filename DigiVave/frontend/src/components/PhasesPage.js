// PhasesPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SelectPhases from './SelectPhases';

const PhasesPage = () => {
  const { productName } = useParams();

  return (
    <div>
      <Header title={productName} />
      <SelectPhases selectedProduct={productName} />
      <Footer />
    </div>
  );
};

export default PhasesPage;