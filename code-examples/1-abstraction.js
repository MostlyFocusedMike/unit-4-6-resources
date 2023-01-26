const getId = ((start = 1) => () => start++)();

// No abstraction
const noel = {
  id: getId(),
  name: 'Noel',
  age: 23,
  hobbies: [],
};

const hobby = 'Running'
if (typeof hobby === 'string') {
  noel.hobbies.push(hobby);
}

noel.hobbies.forEach(hobby => {
  console.log(`I sure do love ${hobby}.`);
});

// Abstraction
const sara = new Person('Sara', 23);
sara.addHobby('Running');
sara.listHobbies();
