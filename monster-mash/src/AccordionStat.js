import React, { useState, useRef, useEffect } from 'react';
import './AccordionStat.css';


const AccordionStat = ({ monsterData, handleRemoveMonster, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    const panel = panelRef.current;
    if (panel) {
      if (isOpen) {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } else {
        panel.style.maxHeight = null;
      }
    }
  }, [isOpen]);

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
      if (!armor_class) {
        return 10; // return default AC if no AC provided
      }
      if (Array.isArray(armor_class)) {
        return armor_class.map((acObj) => acObj.value).join(', '); // extract the AC value from each object and join with a comma separator
      } else {
        const armorEntries = Object.entries(armor_class);
        const armorStrings = armorEntries.map(([index, element]) => `${index} ${element}`);
        return armorStrings.join(', '); // join armor class strings with a comma separator
      }
    };

  return (
    <div className="accordion-container">
    <div className="accordion">
      {monsterData && (
        <>
          <button className={`accordion-title ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <h1>{monsterData.name}</h1>
            <button className="close-btn" onClick={() => handleRemoveMonster(monsterData)}>
              X
            </button>
          </button>
        
          {isOpen && (
            <div className="panel" ref={panelRef}>
            
              <div className="accordion-content">
              </div>
              <div className="base">
            <div className="property-line">
              <h4>Armor Class: </h4>
              <p>{formatArmorClass(monsterData.armor_class)}</p>
            </div>
            <div className="property-line">
              <h4>Hit Points: </h4>
              <p>{monsterData.hit_points}</p>
            </div>
            <div className="property-line">
              <h4>Speed: </h4>
              <p>{formatSpeed(monsterData.speed)}</p>
            </div>
          </div>
          <div className="abilities">
          {/* The Start of the Abilities layout in the component. */}
          <div className="property-line">
            <h4>STR</h4>
            <p>{monsterData.abilities.strength}</p>
          </div>
          <div className="property-line">
            <h4>DEX</h4>
            <p>{monsterData.abilities.dexterity}</p>
          </div>
          <div className="property-line">
            <h4>CON</h4>
            <p>{monsterData.abilities.constitution}</p>
          </div>
          <div className="property-line">
            <h4>INT</h4>
            <p>{monsterData.abilities.intelligence}</p>
          </div>
          <div className="property-line">
            <h4>WIS</h4>
            <p>{monsterData.abilities.wisdom}</p>
          </div>
          <div className="property-line">
            <h4>CHA</h4>
            <p>{monsterData.abilities.charisma}</p>
          </div>
          {/* END */}
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
            </div>
          )}
        </>
      )}
    </div>
    </div>
  );
};


export default AccordionStat;