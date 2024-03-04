// Header.js
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = ({ onSearch, title }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isPhasesPage = location.pathname.includes('/phases');

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <header className="App-header">
      <div className="left-content">
        <h3>DigiVAVE</h3>
      </div>
      <div className="right-content">
        {isPhasesPage ? <h4>Phase Selection for {title}</h4> : null}
        {isPhasesPage ? null : (
          <input
            type="text"
            className="search-box"
            placeholder="Search Products..."
            value={searchTerm}
            onChange={handleSearch}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
