// Here's a challenge, do you understand how
// this one liner is using closures, default arguments,
// and an IIFE to work?
const getId = ((id = 1) => () => id++)();

module.exports = { getId };