


  export const mixMonsters = (monster1, monster2) => {
    if (!monster1 || !monster2) {
      return null;
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
      abilities: Math.random() < 0.5 ? (monster1.abilities || []) : (monster2.abilities || []),
      actions: Math.random() < 0.5 ? (monster1.actions || []) : (monster2.actions || []),
      legendary_actions:
        Math.random() < 0.5 ? (monster1.legendary_actions || []) : (monster2.legendary_actions || []),
    };
    return newMonster;
  };
