import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import SelectPhases from './components/SelectPhases';
import PhasesPage from './components/PhasesPage'; // Import PhasesPage


function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header onSearch={handleSearch} />
                <ProductList searchTerm={searchTerm} />
                <Footer />
              </div>
            }
          />
          <Route path="/selectphases" element={<SelectPhases />} />
          <Route path="/phases/:productName" element={<PhasesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;