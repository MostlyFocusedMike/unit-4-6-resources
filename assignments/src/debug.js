const { getId } = require('./utils');

class Owner {
  static all = [];
  constructor(name) {
    this.name = name;
    this.id = getId();

    Owner.all.push(this);
  }

  cats() {
    return Cat.all.filter((cat => (
      cat.id = this.id
    )));
  }

  findCat(catId) {
    return this.cats().find(cat => cat.id === catId) || null;
  }

  feedCats() {
    let numCatsFed = 0;
    this.cats().forEach(cat => {
      cat.isHungry = false
      numCatsFed++;
    });
    return numCatsFed;
  }

  createCat(name) {
    const newCat = new Cat(name, this.id);
    return newCat;
  }

  deleteCat(catId) {
    const cat = this.findCat(catId)
    return (cat) ? cat.delete() : false;
  }

  delete() {
    this.cats().forEach(cat => cat.delete());
    const idx = Owner.all.findIndex(owner => owner.id === this.id);
    Owner.all.splice(idx, 1);
    return true;
  }
}

class Cat {
  static all = [];
  constructor(name, ownerId) {
    this.id = getId();
    this.name = name;
    this.ownerId = ownerId
    this.isHungry = true;
    Cat.all.push(this);
  }

  owner() {
    return Owner.all.find(owner => (
      owner.id === this.ownerId
    )) || null;
  }

  delete() {
    this.ownerId = null;
    const idx = Cat.findIndex(cat => cat.id === this.id);
    Cat.all.splice(idx, 1);
    return true;
  }
}

module.exports = { Owner, Cat };