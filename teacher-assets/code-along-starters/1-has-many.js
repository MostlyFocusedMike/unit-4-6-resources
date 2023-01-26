const getId = ((id = 1) => () => id++)();

class Owner {
  constructor() {
  }

  cats() {
  }

  findCat(catId) {
  }

  createCat(name) {
  }

  deleteCat(catId) {
  }

  delete() {
  }
}

class Cat {
  constructor(name, ownerId) {
  }

  owner() {
  }

  delete() {
  }
}

// const bill = new Owner("Bill");
// const garf = bill.createCat("Garf");
// const felix = bill.createCat("Felix");
// console.log(bill.cats());
// console.log(bill.findCat(garf.id));
// console.log(felix.delete());
// console.log(felix.owner());
// console.log(bill.cats());
// console.log(bill.deleteCat(garf.id));
// console.log(bill.cats());

module.exports = { Owner, Cat };
