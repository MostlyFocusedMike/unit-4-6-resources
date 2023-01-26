const getId = ((start = 1) => () => start++)(); // pop quiz: wtf is this thing doing?

// No encapsulation
const people = [];

const sara = {
  id: getId(),
  name: 'sara',
  age: 34,
  hobbies: [],
};
people.push(sara);

const bill = {
  id: getId(),
  name: 'bill',
  age: 43,
};

// oops we forgot to add bill
people.forEach(person => {
  console.log(person);
});


// Encapsulation
class Person {
  static all = [];
  static listAll() {
    Person.all.forEach(person => {
      console.log(person);
    });
  }

  constructor(name, age) {
    this.id = getId();
    this.name = name;
    this.age = age;
    this.hobbies = [];
    Person.all.push(this);
  }
}

const jane = new Person('jane', 34)
const joe = new Person('joe', 43)

Person.listAll();

// Encapsulation allows us to keep our data out of the global scope
// and control its creation a little better. For instance, we can't
// accidentally add a hobbies property since we're using a constructor
// if you use private properties, it's even more secure