export const mixMonsters = (monster1, monster2) => {
  if (!monster1 || !monster2) {
    return null;
  }

  const randomAbilityScore = (monster1Stat, monster2Stat) => {
    return Math.random() < 0.5 ? monster1Stat : monster2Stat;
  }

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
    actions: Math.random() < 0.5 ? (monster1.actions || []) : (monster2.actions || []),
  };

  if (monster1.legendary_actions && monster1.legendary_actions.length > 0) {
    newMonster.legendary_actions = monster1.legendary_actions;
  } else if (monster2.legendary_actions && monster2.legendary_actions.length > 0) {
    newMonster.legendary_actions = monster2.legendary_actions;
  }

  return newMonster;
};

