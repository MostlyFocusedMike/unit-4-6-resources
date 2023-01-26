# Lesson 4.6 - OOP Relationship Designs

You've learned a lot about how the various relationships work when dealing with classes. Below you'll find the questions you must answer for the assignment.

## Resources and tips
- You can find the presentation's [google slides here](https://docs.google.com/presentation/d/1IHGu0AR7slfAJI1uCaRL0sxX5MFf6ITwrGUcIgCI5pc/edit#slide=id.p)
- We have provided the `getId` function in the utils folder. It creates non-repeating, incrementing integers.
  ```js
  getId() // 1
  getId() // 2
  getId() // 3
  ```
- Don't forget to run your tests in watch mode with
  ```plaintext
  npm run test:watch

  # these are the watch options, just hit the key while running
    Press a to run all tests.
    Press f to run only failed tests.
    Press p to filter by a filename regex pattern.
    Press t to filter by a test name regex pattern.
    Press q to quit watch mode.
    Press i to run failing tests interactively.
    Press Enter to trigger a test run.
  ```
- You might be wondering why we're explicitly asking to return `null` in some cases instead of just `undefined`. That's because we're being semantic! If something doesn't exist *on purpose* (as in we deleted it or explicitly don't have it) we can denote that by explicitly returning `null`. (This also makes it easier to test your methods)


----------------------------------------------

## From Scratch challenges
### 1. Create a **Driver** and **Car** Class

The Driver class should have the following properties:
| Property | Type                     | Example |
| -------- | ------------------------ | ------- |
| id       | Int > 0 (auto generated) | 1       |
| name     | String                   | "Lewis" |

The Car class should have the following properties:
| Property       | Type                     | Example |
| -------------- | ------------------------ | ------- |
| id             | Int > 0 (auto generated) | 1       |
| model          | String                   | "Camry" |
| driverId       | Int > 0                  | 2       |
| numTimesDriven | Int >= 0                 | 0       |

When creating a new `Driver`, the signature should only require a `name`.

```js
const lewis = new Driver('Lewis Hamilton');
console.log(lewis);
// Driver { id: 1, name: 'Lewis Hamilton' }
```

When creating a new `Car`, the signature should require a `model` and `driverId`

```js
const lewis = new Driver('Lewis Hamilton');
const camry = new Car('Camry', lewis.id);
console.log(camry);
// Car { id: 2, model: 'Camry', driverId: 1, numTimesDriven: 0 }
```


### 2. Classes should track all instances
Upon creation of a new instance, the class should add it to an `all` property.

```js
const lewis = new Driver('Lewis Hamilton');
const mcqueen = new Driver('Lightning McQueen');
console.log(Driver.all)
// [
//   Driver { id: 1, name: 'Lewis Hamilton' },
//   Driver { id: 2, name: 'Lightning McQueen' }
// ]

const camry = new Car('Camry', lewis.id);
const prius = new Car('Prius', lewis.id);
console.log(Car.all)
// [
//   Car { id: 3, model: 'Camry', driverId: 1, numTimesDriven: 0 },
//   Car { id: 4, model: 'Prius', driverId: 1, numTimesDriven: 0 }
// ]
```

### 3. A Car can get its Driver
A Car is able to call `.driver()` and get it's Driver.

```js
const lewis = new Driver('Lewis Hamilton');
const camry = new Car('Camry', lewis.id);
console.log(camry.driver());
// Driver { id: 1, name: 'Lewis Hamilton' }

console.log(camry.driver() === lewis);
// true
```

### 4. A Car can delete itself
A car instance is able to call `.delete` on itself. This will delete its driver (meaning `.driver()` would return `null`), as well as delete itself from the `Car.all` array.

Upon deletion, the method returns `true`.

```js
const lewis = new Driver('Lewis Hamilton');
const camry = new Car('Camry', lewis.id);

console.log(camry.delete())
// true
console.log(camry.driver());
// null
console.log(Car.all);
// []

// You haven't built this yet
console.log(lewis.cars());
// []
```

### 5. A Driver can list their cars
By calling the `.cars()` method, a driver can list out all their cars. Each new car added gets appended to the end of the returned array.

```js
const lewis = new Driver('Lewis Hamilton');
console.log(lewis.cars());
// []
const camry = new Car('Camry', lewis.id);
console.log(lewis.cars());
// [ Car { id: 2, model: 'Camry', driverId: 1, numTimesDriven: 0 } ]

const benz = new Car('Benz', lewis.id);
console.log(lewis.cars());
// [
//   Car { id: 2, model: 'Camry', driverId: 1, numTimesDriven: 0 },
//   Car { id: 3, model: 'Benz', driverId: 1, numTimesDriven: 0 }
// ]
```

### 6. A Driver can find one of their cars
By calling `.findCar(carId)` a driver can find their car. If the given id does not match a car in the drivers `.cars()` array, return `null`.

```js
const lewis = new Driver('Lewis Hamilton');
const jeff = new Driver('Jeff Gordon');

const camry = new Car('Camry', lewis.id);
const f150 = new Car('F-150', jeff.id);
console.log(lewis.findCar(camry.id));
// Car { id: 3, model: 'Camry', driverId: 1, numTimesDriven: 0 }

console.log(lewis.findCar(f150.id));
// null
```

### 7. A Driver can create a new car
By calling `.createCar(model)` with a model name string, a Driver can create a new car. The new car is returned from the method, and it is already associated with the driver that called `.createCar(model)`.

```js
const lewis = new Driver('Lewis Hamilton');
const camry = lewis.createCar('Camry');
console.log(lewis.findCar(camry.id));
// Car { id: 3, model: 'Camry', driverId: 1, numTimesDriven: 0 }

console.log(camry.driver());
// Driver { id: 1, name: 'Lewis Hamilton' }

console.log(Car.all);
// [ Car { id: 2, model: 'Camry', driverId: 1, numTimesDriven: 0 } ]
```

### 7. A Driver can delete one of their cars
A driver can delete one of their cars by calling `.deleteCar(carId)`, this will remove it from the drivers `.cars()` as well as `Car.all`. If a driver attempts to delete a car they do not own, nothing happens and the car remains. `.deleteCar(carId)` returns `true` if a car was deleted, and `false` if not.

```js
const lewis = new Driver('Lewis Hamilton');
const camry = lewis.createCar('Camry');
console.log(lewis.findCar(camry.id));
// Car { id: 3, model: 'Camry', driverId: 1, numTimesDriven: 0 }

console.log(lewis.deleteCar(camry.id));
// true
console.log(lewis.findCar(camry.id));
// null
console.log(Car.all);
// []

const jeff = new Driver('Jeff');
const f150 = jeff.createCar('F-150');

console.log(lewis.deleteCar(f150.id));
// false
console.log(Car.all);
// [ Car { id: 4, model: 'F-150', driverId: 3, numTimesDriven: 0 } ]
```

### 8. A driver can drive their cars
By calling `.drive(carId)` a driver is able to increment a car's `numTimesDriven` property by `1`. As Ferris Bueller proved, you can't undrive a car, so the `numTimesDriven` can only increase.

The return value is the car driven. If a driver tries to drive a car they don't own, throw an error.

```js
const lewis = new Driver('Lewis Hamilton');
const camry = lewis.createCar('Camry');
const benz = lewis.createCar('Benz');

console.log(lewis.driveCar(camry.id));
// // Car { id: 2, model: 'Camry', driverId: 1, numTimesDriven: 1 }

lewis.driveCar(camry.id);
console.log(camry.numTimesDriven);  // 2

lewis.driveCar(benz.id);
console.log(benz.numTimesDriven);  // 1

const steve = new Driver('Steve');
steve.driveCar(benz.id);
// ERROR: "You can't drive someone else's car!"
```

### 9. A driver can find their favorite car
By calling `.findFavoriteCar()`, a driver is able to return the car that has the highest `numTimesDriven` property. For the edge cases, the behavior should be:
- If no cars exist, return `null`.
- If one car exists, regardless of drive time, return that car.
- If no cars have been driven, or there's a tie, return the newer of the cars tied in drivers' `.cars()` array
  - "newer" in this context means latest to be added to the `.cars` array. So `cars()[3]` is newer than `.cars()[2]`

```js
const lewis = new Driver('Lewis Hamilton');
console.log(lewis.findFavoriteCar());
// null

const camry = lewis.createCar('Camry');
console.log(lewis.findFavoriteCar());
// Car { id: 2, model: 'Camry', driverId: 1, numTimesDriven: 0 }

const benz = lewis.createCar('Benz');
console.log(lewis.findFavoriteCar());
// Car { id: 3, model: 'Benz', driverId: 1, numTimesDriven: 0 }

lewis.driveCar(camry.id);
console.log(lewis.findFavoriteCar());
// Car { id: 2, model: 'Camry', driverId: 1, numTimesDriven: 1 }

const f150 = lewis.createCar('F-150');
lewis.driveCar(f150.id);
console.log(lewis.findFavoriteCar());
// Car { id: 4, model: 'F-150', driverId: 1, numTimesDriven: 1 }

lewis.driveCar(benz.id);
console.log(lewis.findFavoriteCar());
// Car { id: 4, model: 'F-150', driverId: 1, numTimesDriven: 1 }
// still the F-150 because it's tied and it was the latest addition
```

## Debug Challenge
We have a Cat class and an Owner class. Things are getting weird though. Our feed `.feedCats()` method, which is supposed to flip an owners cats' from `isHungry: true` to `isHungry: false` isn't working.

Use the existing tests in `debug.spec.js` to
1. figure out the full desired behavior
2. make the function work correctly.

## Modification Challenge
We already have a full `Many To Many` set of classes: Book, BookGenre, and Genre. Your job is to add the two specified methods. Remember, read over the full classes, but focus in on the methods to complete the task.

### A Genre knows its average book price
By calling `.averageBookPrice()`, a genre will return the average price. If there are no books in the genre yet, simply return 0. Be careful with formatting, everything but `0` should return like

```js
const horror = new Genre("Horror");
console.log(horror.averageBookPrice()); // 0

const shining = new Book("The Shining", 10.99);
const exorcist = new Book("The Exorcist", 12.99);

shining.addGenre(horror.id);
exorcist.addGenre(horror.id);

console.log(horror.averageBookPrice()); // 11.99

const romance = new Genre("Romance");
const notebook = new Book("The Notebook", 0.01);
const faultyStars = new Book("The Fault in Our Stars", 0.03);

notebook.addGenre(romance.id);
faultyStars.addGenre(romance.id);

console.log(romance.averageBookPrice()); // 0.02
```

### A Book knows its most popular genre
By calling `.mostPopularGenre()` on a book, a book will return whichever of it's own genres that has the most books *total*. So if a book has the genres of comedy and action, and the action genre is associated with 9 books total, and comedy is only 4, then the correct answer for that book would be action. If a book only has 1 genre, that genre always wins. If it has no genre, return `null`

NOTE: To be kind, the tests *explicitly* avoid genre ties. Rest assured, each genre will have a different amount of books.

```js
const fantasy = new Genre('Fantasy');
const horror = new Genre('Horror');
const adventure = new Genre('Adventure');

const dune = new Book('Dune', 10);
const treeHouse = new Book('The Magic Tree House', 2);
const hobbit = new Book('The Hobbit', 8);
const fellowship = new Book('The Fellowship of the Ring', 8);
const it = new Book('It', 8);
const boat = new Book('The Fantastically Terrifying Boat', 18);

dune.addGenre(adventure.id);

treeHouse.addGenre(adventure.id);

hobbit.addGenre(fantasy.id);
hobbit.addGenre(adventure.id);

fellowship.addGenre(fantasy.id);
fellowship.addGenre(adventure.id);

it.addGenre(horror.id);

boat.addGenre(horror.id);
boat.addGenre(fantasy.id);

console.log('horror:', horror.books().length);
console.log('fantasy:', fantasy.books().length);
console.log('adventure:', adventure.books().length);

console.log(hobbit.mostPopularGenre());
// Genre { name: 'Adventure', id: 3 }

console.log(boat.mostPopularGenre());
// Genre { name: 'Fantasy', id: 1 }

console.log(it.mostPopularGenre());
// Genre { name: 'Horror', id: 2 }
```