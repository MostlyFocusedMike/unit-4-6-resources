const getId = ((start = 1) => () => start++)();

class Person {
  static all = [];
  constructor(name, age) {
    this.id = getId();
    this.name = name;
    this.age = age;
    Person.all.push(this);
  }

  greet() {
    console.log(`Hi, I'm ${this.name}.`);
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  stress() {
    console.log('Bruh.');
  }
}

// sara has Person and Student attributes
const sara = new Student('sara', 23, 12);

sara.greet();
sara.stress();

console.log(sara.id) // 1
console.log(sara.grade) // 12