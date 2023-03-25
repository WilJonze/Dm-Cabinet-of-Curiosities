import React from 'react';
import './StatBlock.css';


const StatBlock = ({ monsterData, handleRemoveMonster, index }) => {
  const formatActions = (actions) => {
    if (!actions || !Array.isArray(actions) || actions.length === 0) {
      return [];
    }
    return actions.map((action) => (
      <li key={action.name}>
      <strong>{action.name}.</strong> {action.desc}{" "}
      {(action.attack_bonus !== undefined && action.damage?.[0] !== undefined) && (
        <em>
          ({action.attack_bonus} to hit, {action.damage[0]?.damage_dice}{" "}
          {action.damage[0]?.damage_type?.name} damage)
        </em>
        )}
      </li>
    ));
  };   

  const formatSpeed = (speed) => {
    return Object.entries(speed).map(([key, value]) => 
       `${key} ${value}`).join(', ');
    }

      const formatArmorClass = (armor_class) => {
        return Object.entries(armor_class).map(([key, value]) =>
          `${key} ${value}`).join(', ');
      };
    
  
  return (
    <div className={`stat-block ${monsterData ? 'visible' : ''}`}>
      {monsterData && (
        <>
          <div className="name">
            <h1>{monsterData.name}</h1>
            <button className="close-btn" onClick={() => handleRemoveMonster(monsterData)}>
              X
            </button>
          </div>
          <div className="property-line">
            <h4>Armor Class :</h4>
            <p>{(formatArmorClass(monsterData.armor_class))}</p>
            
          </div>
          <div className="property-line">
            <h4>Hit Points :</h4>
            <p>{monsterData.hit_points}</p>
          </div>
          <div className="property-line last">
            <h4>Speed :</h4>
            <p>{formatSpeed(monsterData.speed)}</p>
          </div>
          <div className="actions">
            <h3>Actions</h3>
            {monsterData.actions && monsterData.actions.length > 0 ? (
              <ul>{formatActions(monsterData.actions)}</ul>
            ) : (
              <p>No actions found.</p>
            )}
          </div>
          <div className="actions">
            <h3>Legendary Actions</h3>
            <div className="property-block">
              {monsterData.legendary_actions && monsterData.legendary_actions.length > 0 ? (
                <ul>{formatActions(monsterData.legendary_actions)}</ul>
              ) : (
                <p>No legendary actions found.</p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
 


export default StatBlock;