const { Driver, Car } = require('./from-scratch');
const { compileScore } = require('./utils/score-utils');

const testSuiteName = 'From Scratch Tests';
const scoreCompiler = compileScore(testSuiteName);

describe(testSuiteName, () => {
  it('Create a Driver and Car class correctly', () => {
    const lewis = new Driver('Lewis Hamilton');
    expect(lewis instanceof Driver).toBe(true);
    expect(lewis.name).toBe('Lewis Hamilton');
    expect(lewis.id).toBeGreaterThan(0);

    const camry = new Car('Camry', lewis.id);
    expect(camry instanceof Car).toBe(true);
    expect(camry.model).toBe('Camry');
    expect(camry.driverId).toBe(lewis.id);
    expect(camry.id).toBeGreaterThan(0);

    scoreCompiler(1)
  });

  it('Classes should track all instances', () => {
    expect(Driver.all.length).toBe(0);
    expect(Car.all.length).toBe(0);

    const lewis = new Driver('Lewis Hamilton');
    const mcqueen = new Driver('Steve McQueen');
    const numCreatedDrivers = 2;

    expect(Driver.all.length).toBe(numCreatedDrivers);
    expect(Driver.all[0]).toBe(lewis);
    expect(Driver.all[1]).toBe(mcqueen);
    expect(Car.all.length).toBe(0);

    const camry = new Car('Camry', lewis.id);
    const mustang = new Car('Mustang', mcqueen.id);
    const numCreatedCars = 2;

    expect(Car.all.length).toBe(numCreatedCars);
    expect(Car.all[0]).toBe(camry);
    expect(Car.all[1]).toBe(mustang);

    scoreCompiler(1)
  });

  it('A car should have a method to find its driver', () => {
    const lewis = new Driver('Lewis Hamilton');
    const camry = new Car('Camry', lewis.id);
    const camryDriver = camry.driver();
    expect(camryDriver).toBe(lewis);

    scoreCompiler(1)
  });

  it('A car can delete itself', () => {
    const lewis = new Driver('Lewis Hamilton');
    const camry = new Car('Camry', lewis.id);
    expect(Car.all.length).toBe(1);

    const deleteReturnValue = camry.delete();
    expect(deleteReturnValue).toBe(true);

    expect(camry.driver()).toBe(null);
    expect(Car.all.length).toBe(0);

    scoreCompiler(1)
  });

  it('Driver should have a method to find all their cars', () => {
    const lewis = new Driver('Lewis Hamilton');
    const camry = new Car('Camry', lewis.id);
    const benz = new Car('Benz', lewis.id);
    const f150 = new Car('F-150', lewis.id);

    const lewisCars = lewis.cars();
    expect(lewisCars.length).toBe(3);
    expect(lewisCars[0]).toBe(camry);
    expect(lewisCars[1]).toBe(benz);
    expect(lewisCars[2]).toBe(f150);

    scoreCompiler(1)
  });

  it('A Driver can find one of their cars by id', () => {
    const lewis = new Driver('Lewis Hamilton');
    const camry = new Car('Camry', lewis.id);
    const benz = new Car('Benz', lewis.id);
    const f150 = new Car('F-150', lewis.id);

    expect(lewis.findCar(camry.id)).toBe(camry);
    expect(lewis.findCar(benz.id)).toBe(benz);
    expect(lewis.findCar(f150.id)).toBe(f150);

    scoreCompiler(1)
  });

  it('A Driver can create a new car', () => {
    const lewis = new Driver('Lewis Hamilton');
    const camry = lewis.createCar('Camry');
    expect(camry instanceof Car).toBe(true);
    expect(camry.model).toBe('Camry');
    expect(camry.driverId).toBe(lewis.id);
    expect(camry.id).toBeGreaterThan(0);

    scoreCompiler(1)
  });

  it('A Driver can delete one of their cars', () => {
    const lewis = new Driver('Lewis Hamilton');

    const camry = lewis.createCar('Camry');
    lewis.createCar('Benz');
    lewis.createCar('F-150');
    const totalCreatedCars = 3;

    expect(Car.all.length).toBe(totalCreatedCars);
    expect(lewis.cars().length).toBe(totalCreatedCars);

    const deleteReturnValue = lewis.deleteCar(camry.id);
    expect(deleteReturnValue).toBe(true);

    expect(Car.all.length).toBe(totalCreatedCars - 1);
    expect(lewis.cars().length).toBe(totalCreatedCars - 1);
    expect(lewis.findCar(camry.id)).toBe(null);
    expect(camry.driver()).toBe(null);

    scoreCompiler(1)
  });

  it('A Driver can drive their cars', () => {
    const lewis = new Driver('Lewis Hamilton');
    const camry = lewis.createCar('Camry');
    const benz = lewis.createCar('Benz');

    expect(camry.numTimesDriven).toBe(0);
    expect(benz.numTimesDriven).toBe(0);

    expect(lewis.driveCar(camry.id)).toBe(camry);
    expect(camry.numTimesDriven).toBe(1);

    expect(lewis.driveCar(benz.id)).toBe(benz);
    expect(benz.numTimesDriven).toBe(1);

    lewis.driveCar(camry.id);
    lewis.driveCar(camry.id);
    lewis.driveCar(camry.id);
    const totalCamryDrives = 3 + 1;

    expect(camry.numTimesDriven).toBe(totalCamryDrives);

    scoreCompiler(1)
  });

  it('A driver gets an error if they try to drive a car that is not theirs', () => {
    const lewis = new Driver('Lewis Hamilton');
    const camry = lewis.createCar('Camry');

    const max = new Driver('Max Verstappen');
    const ferrari = max.createCar('Ferrari');

    expect(() => {
      lewis.driveCar(ferrari.id);
    }).toThrow("You can't drive someone else's car!");

    scoreCompiler(1)
  });

  it('A Driver with no cars has a null favorite', () => {
    const lewis = new Driver('Lewis Hamilton');
    expect(lewis.findFavoriteCar()).toBe(null);

    const camry = lewis.createCar('Camry');
    lewis.deleteCar(camry.id);
    expect(lewis.findFavoriteCar()).toBe(null);

    scoreCompiler(1)
  });


  it('A Driver with one car returns that as their favorite', () => {
    const lewis = new Driver('Lewis Hamilton');
    const camry = lewis.createCar('Camry');
    expect(lewis.findFavoriteCar()).toBe(camry);

    scoreCompiler(1)
  });

  it('A Driver with tied drive times returns the newest car', () => {
    const lewis = new Driver('Lewis Hamilton');

    const camry = lewis.createCar('Camry');
    expect(lewis.findFavoriteCar()).toBe(camry);

    const benz = lewis.createCar('Benz');
    expect(lewis.findFavoriteCar()).toBe(benz);

    const f150 = lewis.createCar('F-150');
    expect(lewis.findFavoriteCar()).toBe(f150);

    scoreCompiler(1)
  });

  it("A Driver's favorite car is the one with the most drive time", () => {
    const lewis = new Driver('Lewis Hamilton');
    expect(lewis.findFavoriteCar()).toBe(null);

    const camry = lewis.createCar('Camry');
    const benz = lewis.createCar('Benz');
    const f150 = lewis.createCar('F-150');

    lewis.driveCar(camry.id);
    expect(lewis.findFavoriteCar()).toBe(camry);

    lewis.driveCar(f150.id);
    lewis.driveCar(f150.id);
    expect(lewis.findFavoriteCar()).toBe(f150);

    lewis.driveCar(benz.id);
    lewis.driveCar(benz.id);
    lewis.driveCar(benz.id);
    expect(lewis.findFavoriteCar()).toBe(benz);

    scoreCompiler(1)
  });

  beforeEach(() => {
    if (Driver.all) Driver.all.length = 0;
    if (Car.all) Car.all.length = 0;
    scoreCompiler(0,1)
  });
  afterAll(() => scoreCompiler().saveTestResults());
});
