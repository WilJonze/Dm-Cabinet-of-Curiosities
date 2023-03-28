export const mixMonsters = (monster1, monster2) => {
  if (!monster1 || !monster2) {
    return null;
  }

  const randomAbilityScore = (monster1Stat, monster2Stat) => {
    return Math.floor(((monster1Stat || 0) + (monster2Stat || 0)) / 2);
  };

  let newMonster = {
    name: (monster1.name || '') + ' ' + (monster2.name || ''),
    type: Math.random() < 0.5 ? (monster1.type || '') : (monster2.type || ''),
    challenge_rating:
      Math.random() < 0.5
        ? (monster1.challenge_rating || '')
        : (monster2.challenge_rating || ''),
    hit_points:
      Math.floor(((monster1.hit_points || 0) + (monster2.hit_points || 0)) / 2),
    armor_class: Math.floor(((monster1.armor_class || 0) + (monster2.armor_class || 0)) / 2),
    speed: Math.random() < 0.5 ? (monster1.speed || '') : (monster2.speed || ''),
    abilities: {
      strength: randomAbilityScore(monster1.abilities?.strength, monster2.abilities?.strength),
      dexterity: randomAbilityScore(monster1.abilities?.dexterity, monster2.abilities?.dexterity),
      constitution: randomAbilityScore(monster1.abilities?.constitution, monster2.abilities?.constitution),
      intelligence: randomAbilityScore(monster1.abilities?.intelligence, monster2.abilities?.intelligence),
      wisdom: randomAbilityScore(monster1.abilities?.wisdom, monster2.abilities?.wisdom),
      charisma: randomAbilityScore(monster1.abilities?.charisma, monster2.abilities?.charisma),
    },
    actions: [],
    legendary_actions: [],
  };

  const allActions = monster1.actions.concat(monster2.actions);
  for (let i = 0; i < Math.min(allActions.length, 6); i++) {
    const randomIndex = Math.floor(Math.random() * allActions.length);
    const randomAction = allActions[randomIndex];
    newMonster.actions.push(randomAction);
    allActions.splice(randomIndex, 1);
  }

  
  if (monster1.legendary_actions && monster1.legendary_actions.length > 0) {
    newMonster.legendary_actions = [...monster1.legendary_actions];
  }
  if (monster2.legendary_actions && monster2.legendary_actions.length > 0) {
    newMonster.legendary_actions = [...newMonster.legendary_actions, ...monster2.legendary_actions];
  }

  
  const mutationChance = 1; 

  if (Math.random() < mutationChance) {
    const typeMutationChance = 1; 
    if (Math.random() < typeMutationChance) {
      const relatedTypes = ['berserker', 'warlord', 'shaman', 'assassin'];
      const randomRelatedType = relatedTypes[Math.floor(Math.random() * relatedTypes.length)];
      newMonster.type = newMonster.type + ' ' + randomRelatedType;
    } else {
      const tempType = newMonster.type;
      newMonster.type = Math.random() < 0.5 ? monster1.type : monster2.type;
      if (tempType !== '') {
        newMonster.type += ' ' + tempType;
      }
    }
  }

  if (newMonster.type && newMonster.type.includes('berserker')) {
    newMonster.legendary_actions.push({
      name: 'Frenzy',
      desc: 'The monster enters a frenzied rage, gaining advantage on all attack rolls and dealing an extra 2d6 damage on all melee attacks. While Frenzy is active, attacks against this monster have advantage.',
    });
    newMonster.legendary_actions.push({
      name: 'Reckless Charge',
      desc: 'The monster charges forward recklessly, trampling any creatures in its path. It makes a single melee attack against each creature it moves through, and each target must make a DC 15 Dexterity saving throw or take 2d10 bludgeoning damage.',
      
    });
  } else if (newMonster.type && newMonster.type.includes('warlord')) {
    newMonster.legendary_actions.push({
      name: 'Call to Arms',
      desc: 'The monster calls upon its allies to aid it in battle. Each ally within 30 feet of the monster can make a melee attack against a target of the monsters choice. This effect lasts until the end of the monsters next turn.',
      
    });
    newMonster.legendary_actions.push({
      name: 'Commanding Presence',
      desc: 'The monster commands its allies, granting them advantage on all attack rolls and saving throws. This effect lasts until the end of the monsters next turn.',
      
    });
  } else if (newMonster.type && newMonster.type.includes('shaman')) {
    newMonster.legendary_actions.push({
      name: 'Summon Beast',
      desc: 'The monster summons a 1d4+1 beasts at CR 1/4 to aid it in battle. The beast appears in an unoccupied space within 30 feet of the monster, and acts on the monsters next turn.',
      
    });
    newMonster.legendary_actions.push({
      name: 'Life Drain',
      desc: 'The monster drains the life force from a creature within 30 feet of it. The target must make a DC 15 Constitution saving throw or take 2d10 necrotic damage. The total damage dealt by this action is converted into temporary hit points for the monster.',
      
    });
  } else if (newMonster.type && newMonster.type.includes('assassin')) {
    newMonster.legendary_actions.push({
      name: 'Assassinate',
      desc: 'The monster chooses a target within 100 feet of it. The monster has advantage on attack rolls against the target, and automatically adds sneak attack damage to its attacks against the target. This effect lasts for 10 minutes or until the target successfully makes a stealth check against the monster.',
      
    });
    newMonster.legendary_actions.push({
      name: 'Uncanny Dodge',
      desc: 'The monster can use its reaction to halve the damage from an attack that would hit it. This effect lasts until the end of the monsters next turn.',
      
    });
  }

return newMonster;

}