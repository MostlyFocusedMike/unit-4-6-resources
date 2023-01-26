const getId = ((id = 1) => () => id++)();

class Owner {
  static all = [];
  constructor(name) {
    this.id = getId();
    this.name = name;
    Owner.all.push(this);
  }

  cats() {
    return Cat.all.filter((cat => (
      cat.ownerId === this.id
    )));
  }

  findCat(catId) {
    const cats = this.cats()
      .find(cat => cat.id === catId);
    return cats || null;
  }

  createCat(name) {
    return new Cat(name, this.id);
  }

  deleteCat(catId) {
    const cat = this.findCat(catId)
    return (cat) ? cat.delete() : false;
  }

  delete() {
    this.cats().forEach(cat => cat.delete());
    const idx = Owner.all
      .findIndex(owner => owner.id === this.id);
    Owner.all.splice(idx, 1);
    return true;
  }
}

class Cat {
  static all = [];
  constructor(name, ownerId) {
    if (!ownerId) {
      throw new Error("Owner required");
    }
    this.id = getId();
    this.name = name;
    this.ownerId = ownerId;
    Cat.all.push(this);
  }

  owner() {
    return Owner.all.find(owner => (
      owner.id === this.ownerId
    )) || null;
  }

  delete() {
    this.ownerId = null;
    const idx = Cat.all
      .findIndex(cat => cat.id === this.id);
    Cat.all.splice(idx, 1);
    return true;
  }
}

const bill = new Owner("Bill");
const garf = bill.createCat("Garf");
const felix = bill.createCat("Felix");
console.log(bill.cats());
// [
// Cat {id: 2, name: 'Garf', ownerId: 1},
// Cat {id: 3, name: 'Felix', ownerId: 1}
// ]
console.log(bill.findCat(garf.id));
// Cat {id: 2, name: 'Garf', ownerId: 1}
console.log(felix.delete());
// true
console.log(felix.owner());
// null
console.log(bill.cats());
// [Cat{id: 2, name: 'Garf', ownerId: 1}]
console.log(bill.deleteCat(garf.id));
// true
console.log(bill.cats());
// []

module.exports = { Owner, Cat };
