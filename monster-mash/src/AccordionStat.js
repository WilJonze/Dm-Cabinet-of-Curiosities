import React, { useState, useRef, useEffect } from 'react';
import StatBlock from './StatBlock';
import './AccordionStat.css';


const AccordionStat = ({ monsterData, handleRemoveMonster, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef(null);


  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

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
    return Object.entries(armor_class).map(([key, value]) => 
    `${key} ${value}`).join(', ');
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
          <div className="property-line">
          
            <h4>Armor Class</h4>
            <p>{formatArmorClass(monsterData.armor_class)}</p>
        
          </div>
          <div className="property-line">
            <h4>Hit Points</h4>
            <p>{monsterData.hit_points}</p>
          </div>
          <div className="property-line last">
            <h4>Speed</h4>
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
            </div>
          )}
        </>
      )}
    </div>
    </div>
  );
};


export default AccordionStat;