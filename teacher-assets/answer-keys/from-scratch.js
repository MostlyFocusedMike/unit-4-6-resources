const { getId } = require('./utils');

class Driver {
  static all = [];
  constructor(name) {
    this.id = getId();
    this.name = name;

    Driver.all.push(this);
  }

  cars() {
    return Car.all.filter((car => (
      car.driverId === this.id
    )));
  }

  findCar(carId) {
    return this.cars().find(car => car.id === carId) || null;
  }

  createCar(model) {
    const newCar = new Car(model, this.id);
    return newCar;
  }

  deleteCar(carId) {
    const car = this.findCar(carId)
    return (car) ? car.delete() : false;
  }

  driveCar(carId) {
    const car = this.cars().find(car => car.id === carId);
    if (!car) throw new Error("You can't drive someone else's car!");
    car.numTimesDriven++;
    return car;
  }

  findFavoriteCar() {
    const cars = this.cars();
    if (!cars.length) return null;
    let favoriteCar = cars[0];
    cars.slice(1).forEach(car => {
      if (car.numTimesDriven >= favoriteCar.numTimesDriven) {
        favoriteCar = car;
      }
    });
    return favoriteCar;
  }
}

class Car {
  static all = [];
  constructor(model, driverId) {
    this.id = getId();
    this.model = model;
    this.driverId = driverId
    this.numTimesDriven = 0;

    Car.all.push(this);
  }

  driver() {
    return Driver.all.find(driver => (
      driver.id === this.driverId
    )) || null;
  }

  delete() {
    this.driverId = null;
    const idx = Car.all.findIndex(car => car.id === this.id);
    Car.all.splice(idx, 1);
    return true;
  }
}

module.exports = { Driver, Car };

