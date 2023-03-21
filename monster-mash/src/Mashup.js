import React, { useState } from 'react';
import AutocompleteSearch from './AutocompleteSearch';
import StatBlock from './StatBlock';

const Mashup = () => {
  const [selectedMonster, setSelectedMonster] = useState(null);

  const handleSelectMonster = (monster) => {
    setSelectedMonster(monster);
  };

  const handleRemoveMonster = () => {
    setSelectedMonster(null);
  };

  const mixMonsters = (monsterStatsArray,monster1, monster2) => {
    monster1 = monsterStatsArray[Math.floor(Math.random() * monsterStatsArray.length)];
    monster2 = monsterStatsArray[Math.floor(Math.random() * monsterStatsArray.length)];
    
    let newMonster = {
      name: (monster1 && monster1.name) + " " + (monster2 && monster2.name),
      type: Math.random() < 0.5 ? (monster1 && monster1.type) : (monster2 && monster2.type),
      challenge_rating: Math.random() < 0.5 ? (monster1 && monster1.challenge_rating) : (monster2 && monster2.challenge_rating),
      hit_points: Math.floor(((monster1 && monster1.hit_points) || 0) + ((monster2 && monster2.hit_points) || 0)) / 2,
      armor_class: Math.floor(((monster1 && monster1.armor_class) || 0) + ((monster2 && monster2.armor_class) || 0)) / 2,
      speed: Math.random() < 0.5 ? (monster1 && monster1.speed) : (monster2 && monster2.speed),
      abilities: Math.random() < 0.5 ? (monster1 && monster1.abilities) : (monster2 && monster2.abilities),
      actions: Math.random() < 0.5 ? (monster1 && monster1.actions) : (monster2 && monster2.actions),
      legendary_actions: Math.random() < 0.5 ? (monster1 && monster1.legendary_actions) : (monster2 && monster2.legendary_actions)
    };
    return newMonster;
  };

  const handleMixMonsters = () => {
    const newMonster = mixMonsters(monsterStatsArray, selectedMonster, selectedMonster);
    setSelectedMonster(newMonster);
  };
  

  return (
    <div>
      <AutocompleteSearch handleSelectMonster={handleSelectMonster} />
      {selectedMonster ? (
        <div>
          <StatBlock
            monsterData={selectedMonster}
            handleRemoveMonster={handleRemoveMonster}
          />
          <button onClick={() => setSelectedMonster(null)}>Clear</button>
        </div>
      ) : (
        <p>No monster selected</p>
      )}
      <button onClick={() => handleMixMonsters(selectedMonster, selectedMonster)}>
        Mashup
      </button>
    </div>
  );
};

export default Mashup;