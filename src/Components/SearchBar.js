import React, { useState } from 'react';

function SearchBar() {
  return (
    <div className="search-bar">
      <div className="search-icon" >
        <img src="/Allimages/Vector (6).png" alt="Search Icon" className="search-icon-image" />
      </div>
      <input type="text" className="search-input" placeholder="Search" />
    </div>
  );
}

export default SearchBar;
