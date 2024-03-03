import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      <ProductList searchTerm={searchTerm} />
      <Footer />
    </div>
  );
}

export default App;
