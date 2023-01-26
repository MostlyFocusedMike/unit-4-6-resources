const getId = ((start = 1) => () => start++)();

// the danger of both parent and child
// storing a reference to each other
const garf = {
  id: getId(),
  name: "Garf",
  owner: null,
}

const felix = {
  id: getId(),
  name: "Felix",
  owner: null,
}

const bob = { name: "Bob", cats: [] }

bob.cats.push(garf)
garf.owner = bob

bob.cats.push(felix)
felix.owner = bob

const cache = bob.cats

// Now here's where everything breaks
// we glitched and forgot to reset Garf's owner
bob.cats = bob.cats.filter(cat => cat.id !== garf.id)

console.log(bob.cats.find(cat => cat.id === garf.id))
// undefined
console.log(garf.owner)
// {name: 'Bob', cats: [{id: 2, name: 'Felix', owner: [Circular *1]}]}

// filter replaces, which does not update all links like our cache
console.log(cache.find(cat => cat.id === garf.id))
// {id: 1, name: 'Garf', owner: {name: 'Bob', cats: [[Object]]}}