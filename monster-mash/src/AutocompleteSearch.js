import React, { useState } from 'react';
import './AutocompleteSearch.css';
import StatBlock from './StatBlock';


const AutocompleteSearch = () => {
  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);
  const [selectedMonster, setSelectedMonster] = useState([]);

  const handleInputChange = async (e) => {
    const input = e.target.value;
    setSearchInput(input);

    if (input.length >= 2) {
      const response = await fetch(
        `https://www.dnd5eapi.co/api/monsters/?name=${input}`
      );
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

  const handleSelectMonster = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    const monsterStats = {
      name: data.name,
      type: data.type,
      challenge_rating: data.challenge_rating,
      hit_points: data.hit_points,
      armor_class: data.armor_class,
      speed: data.speed,
      abilities: data.abilities,
      actions: data.actions,
      legendary_actions: data.legendary_actions,
    };
    setSelectedMonster([...selectedMonster, monsterStats]);
    setResults([]);
    setSearchInput('');
  };

  const renderResults = results.map((result, index) => (
    <li key={index} onClick={() => handleSelectMonster(result.url)}>
      {result.name}
    </li>
  ));

  const renderSelectedMonsters = selectedMonster.map((monster, index) => (
    <StatBlock
      key={index}
      monsterData={monster}
      handleRemoveMonster={() =>
        setSelectedMonster(selectedMonster.filter((_, i) => i !== index))
      }
    />
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
      {renderSelectedMonsters}
    </div>
  );
};


      export default AutocompleteSearch;