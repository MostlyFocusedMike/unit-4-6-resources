class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    return 'munch munch munch';
  }

  sleep() {
    return 'Zzzz...';
  }

  move() {
    return '*Moves around*';
  }
}

// now move() will be customized
class Bird extends Animal {
  move() {
    return 'Flap flap';
  }
}

class Dog extends Animal {
  move() {
    return 'Trot trot';
  }
}

class Fish extends Animal {
  move() {
    return 'Splish splash';
  }
}