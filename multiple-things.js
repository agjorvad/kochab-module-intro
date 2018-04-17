const Creature = require('./creature');

// create mantis shrimp
const mantisShrimp = new Creature( 'Mantis Shrimp', 'avoid');
// create fish
const fish = new Creature( 'fish', 'yummy');

module.exports = {
    mantisShrimp: mantisShrimp,
    fish: fish,
    number: 8,
    someString: 'for example'
};