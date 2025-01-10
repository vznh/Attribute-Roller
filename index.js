// index.js
// Main script to supplement index.html.
// CMPM120: Son, Jason
// Winter 2025

const defaultAttributeScores = [15, 14, 13, 12, 10, 8];

class Player {
  constructor(
    characterName = 'Naruto' // ?
  ) {
    this.name = characterName;
    this.attributes = {
      strength: 0,
      dexterity: 0,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0
    };
    let shuffledResult = shuffleArray(defaultAttributeScores);
    for (const [k, v] of Object.entries(this.attributes)) {
      this.attributes[k] = shuffledResult.pop();
    }
  }

  rollAttributes() {
    for (const k in this.attributes) {
      let results = rollDice(4, 6);
      results
        .sort((a, b) => a - b)
        .shift();
      this.attributes[k] = sumArrayElements(results);
    }
  };

  printPlayer() {
    console.log(`NAME: ${this.name}`);
    for (const [k, v] of Object.entries(this.attributes)) {
      console.log(`${k.slice(0, 3).toUpperCase()}: ${v}`)
    }
  };
}

// Helpers
const shuffleArray = (targetArray) => {
  let shuffled = Array.from(targetArray);
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = shuffled[i];
    shuffled[i] = shuffled[j];
    shuffled[j] = temp;
  }

  return shuffled;
}

const rollDice = (times, sides) => {
  let results = [];
  for (let i = 0; i < times; i++) {
    results.push(Math.floor(Math.random() * sides + 1));
  }

  return results;
}

const sumArrayElements = (arr) => arr.reduce((total, curr) => total + curr);

// Instances
const player01 = new Player();
player01.printPlayer();
const player02 = new Player('Son Goku');
player02.rollAttributes(); player02.printPlayer();
