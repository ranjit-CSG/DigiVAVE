import React, { useState } from "react";

function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <header className="App-header">
      <h3>DigiVAVE</h3>
      <input
        type="text"
        className="search-box"
        placeholder="Search Products..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </header>
  );
}

export default Header;


