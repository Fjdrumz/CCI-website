import { useState, useRef } from "react";
import { FiSearch, FiX } from "react-icons/fi"; 
import "./SearchSermons.css"; 

const SearchWithIcons = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);

  const handleClear = () => {
    setSearchTerm("");
    inputRef.current.focus(); // Focus back on input after clearing
  };

  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        {/* Search icon (left side) */}
        <FiSearch className="search-icon" />

        {/* Input field */}
        <input
          ref={inputRef}
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by title..."
          className="search-input"
        />

        {/* Clear/X icon (right side) - only shows when there's text */}
        {searchTerm && (
          <button onClick={handleClear} className="clear-button" type="button">
            <FiX />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchWithIcons;
