import React, { useState } from 'react';
import './AutocompleteSearch.css';


const AutocompleteSearch = () => {
    const [searchInput, setSearchInput] = useState('');
    const [results, setResults] = useState([]);
const handleInputChange = async (e) => {
    const input = e.target.value;
    setSearchInput(input);
  
    if (input.length >= 2) {
      const response = await fetch(`https://www.dnd5eapi.co/api/monsters/?name=${input}`);
      const data = await response.json();
      const results = data.results.map((item) => ({
        name: item.name,
        url: `https://www.dnd5eapi.co/api/monsters/${item.index}`,
      }));
      setResults(results);
    } else {
      setResults([]);
    }
};

  const renderResults = results.map((result, index) => (
    <li key={index}>
      {result.name}
    </li>
  ));

  return (
    <div className="container">
      <div className={`wrapper ${results.length > 0 ? 'show-results' : ''}`}>
        <input
          type="text"
          value={searchInput}
          onChange={handleInputChange}
          placeholder="Search for a monster..."
        />
        <button className="search-button">
          <i className="fa fa-search" />
        </button>
        <div className={`results ${results.length > 0 ? 'show' : ''}`}>
          <ul>{renderResults}</ul>
        </div>
      </div>
    </div>
  );
  console.log(results)
};

export default AutocompleteSearch;