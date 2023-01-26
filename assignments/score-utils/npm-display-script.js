const { humanReadable } = require('./scores.json');

console.clear()
console.log('Debug Tests Score:', humanReadable['Debug Tests']);
console.log('Modify Tests Score:', humanReadable['Modify Tests']);
console.log('From Scratch Tests Score:', humanReadable['From Scratch Tests']);
console.log(`\n\n----- ${humanReadable.finalTestScore} ------\n\n`);