import React from 'react';
import { FaSearch, FaCamera } from 'react-icons/fa';

function SearchBar({ value, onChange }) {
  return (
    <div className="search-box">
      <form>
        <div className="input-container">
          <input type="text" placeholder="Search Google" className="input-field" value={value} onChange={onChange} />
          <FaSearch className="search-icon" />
          <FaCamera className="camera-icon" />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
