import React, { useState } from 'react';
import './AutocompleteSearch.css';
import './StatBlock.css'
import StatBlock from './StatBlock';
import AccordionStat from './AccordionStat';
import {mixMonsters} from './Mashup';

const AutocompleteSearch = () => {
  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);
  const [selectedMonsters, setSelectedMonsters] = useState([]);
  const [mashedMonsters, setMashedMonsters] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [accordionIndex, setAccordionIndex] = useState(0);

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter' && results.length > 0) {
      handleSelectMonster(results[highlightedIndex].url);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prevIndex) => Math.min(prevIndex + 1, results.length - 1)
      );
    }
  };

  const handleMixMonsters = () => {
    if (selectedMonsters.length === 2) {
      const newMashedMonster = mixMonsters(selectedMonsters[0], selectedMonsters[1]);
      setMashedMonsters([...mashedMonsters, newMashedMonster]);
      setSelectedMonsters([]);
    }
  };
  const handleInputChange = async (e) => {
    const { value } = e.target;
    setSearchInput(value);

    if (value.length >= 2) {
      const response = await fetch(
        `https://www.dnd5eapi.co/api/monsters/?name=${value}`
      );
      const { results: dataResults } = await response.json();
      const results = dataResults.map(({ name, index }) => ({
        name,
        url: `https://www.dnd5eapi.co/api/monsters/${index}`,
      }));
      setResults(results);
    } else {
      setResults([]);
    }
  };

  const handleSelectMonster = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    const {
      name,
      type,
      challenge_rating,
      hit_points,
      armor_class,
      speed,
      abilities,
      actions,
      legendary_actions,
    } = data;
    const monsterStats = {
      name,
      type,
      challenge_rating,
      hit_points,
      armor_class,
      speed,
      abilities : abilities || [],
      actions : actions || [],
      legendary_actions : legendary_actions || [],
    };
    setSelectedMonsters([...selectedMonsters, monsterStats]);
    setResults([]);
    setSearchInput('');
  };

  const handleRemoveMonster = (index) => {
    setSelectedMonsters(selectedMonsters.filter((_, i) => i !== index));
  };

  const renderResults = results.map(({ name, url }, index) => (
    <li key={index} 
        onClick={() => handleSelectMonster(url)}
        className={highlightedIndex === index ? 'highlighted' : ''}
        >
      {name}
    </li>
  ));

  const renderSelectedMonsters = selectedMonsters.length > 0 && (
    <div className="selected-monsters">
      <StatBlock
        monsterData={selectedMonsters[0]}
        handleRemoveMonster={() => handleRemoveMonster(0)}
        className="visible"
      />
      {selectedMonsters.length > 1 && (
        <button onClick={handleMixMonsters}>Mashup</button>
      )}
      {selectedMonsters.length > 1 && (
        <StatBlock
          monsterData={selectedMonsters[1]}
          handleRemoveMonster={() => handleRemoveMonster(1)}
          className="visible"
        />
      )}
    </div>
  );

  return (
    <>
    <h2 className='intro'>Search for two Monsters from the D&D manual and Mash em'</h2>
    <div className="container">
      <div className={`wrapper ${results.length > 0 ? 'show-results' : ''}`}>
        <input
          type="text"
          value={searchInput}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Search for a monster..."
        />
        {/* <button className="search-button">
          <i className="fa fa-search" />
        </button> */}
        <div className={`results ${results.length > 0 ? 'show' : ''}`}>
          <ul>{renderResults}</ul>
        </div>
      </div>
      {renderSelectedMonsters}
      
      <div className="mashed-monster-wrapper">
        <div className="mashed-monster-container">
          {mashedMonsters.map((monster, index) => (
          <AccordionStat
            key={index}
            monsterData={monster}
            index={accordionIndex + index}
            handleRemoveMonster={() => {
              const newMashedMonsters = [...mashedMonsters];
              newMashedMonsters.splice(index, 1);
              setMashedMonsters(newMashedMonsters);
              }}
          />
            ))}
            </div>
      </div>


    </div>
    </>
  );
};


export default AutocompleteSearch;