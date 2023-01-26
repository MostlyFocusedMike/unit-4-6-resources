# Modify Rubric

## What's the goal of From Scratch?
This is just good ol' fashioned coding. They start with nothing and must create about 100 lines of code.

The goal of this assignment is for the student to build a straight forward Has Many/Belongs To relationship. In addition to the basic CRUD-lite actions, there

## Score
There are 14 possible points.

## Possible Feedback Topics
### 1. Create a **Driver** and **Car** Class
- biggest here is did they properly use getId()
- make sure that they hit all the properties and signature

### 2. Classes should track all instances
- did they successfully add the `this` property on creation?
- did they use the static keyword correctly?

### 3. A Car can get its Driver
- was `this` used correctly to get the *exact* same object

### 4. A Car can delete itself
- did they clear the driver AND remove it from the array?
- Was the array mutated or replaced? It should be mutated, but honestly this is all fake, so it's ok if it's fully replaced. Just leave a comment asking them to explain the side effects.
- Did they return a Bool?

### 5. A Driver can list their cars
- Make sure the `this` is correctly used


### 6. A Driver can find one of their cars
- Make sure they are accessing the cars via `Cars.all` and ids

### 7. A Driver can create a new car
- Did they understand how to create a new relationship by calling `Car` directly from the `Driver` class?
- Did they remember to return the created object?

### 7. A Driver can delete one of their cars
- did they leverage the existing `findCar` and `car.delete` methods?
- did they properly return a bool?

### 8. A driver can drive their cars
- Could they see the car wasn't theirs and then throw an error?
- Did they increment the drive times succinctly?

### 9. A driver can find their favorite car
- Did they get the "newest" car in the event of a tie? The solution is to iterate in order of cars (assuming they pushed into `.all`) and then use the >=
- There's a chance they have the right answer but over engineered it, how can they simplify if that's the case?