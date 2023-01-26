const getId = ((start = 1) => () => start++)();

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

bob.cats = bob.cats.filter(cat => cat.id !== garf.id)

// console.log(bob.cats.find(cat => cat.id === garf.id))
// console.log(garf.owner)
// console.log(cache.find(cat => cat.id === garf.id))