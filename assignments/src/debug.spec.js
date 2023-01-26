const { Owner, Cat } = require('./debug');
const { ScoreCompiler } = require('../score-utils');

const testSuiteName = 'Debug Tests';
const scores = new ScoreCompiler(testSuiteName);

describe(testSuiteName, () => {
  it('An owner can ONLY feed their own cats', () => {
    const bill = new Owner('Bill');
    const sara = new Owner('Sara');

    const felix = new Cat('Felix', bill.id);
    const garfield = new Cat('Garfield', bill.id);
    const tomcat = new Cat('Tomcat', bill.id);
    expect(felix.isHungry).toBe(true);
    expect(garfield.isHungry).toBe(true);
    expect(tomcat.isHungry).toBe(true);

    const pancakes = new Cat('Pancakes', sara.id);
    expect(pancakes.isHungry).toBe(true);

    sara.feedCats()
    expect(pancakes.isHungry).toBe(false);

    expect(felix.isHungry).toBe(true);
    expect(garfield.isHungry).toBe(true);
    expect(tomcat.isHungry).toBe(true);

    scores.correct(expect); // DO NOT TOUCH
  });

  it('.feedCats returns the number of cats fed', () => {
    const bill = new Owner('Bill');
    expect(bill.feedCats()).toBe(0);

    const sara = new Owner('Sara');

    new Cat('Felix', bill.id);
    new Cat('Garfield', bill.id);
    new Cat('Tomcat', bill.id);

    new Cat('Pancakes', sara.id);

    expect(bill.feedCats()).toBe(3);
    expect(sara.feedCats()).toBe(1);

    scores.correct(expect); // DO NOT TOUCH
  });

  it('If a cat is not hungry, it is not fed', () => {
    const bill = new Owner('Bill');

    const garfield = new Cat('Garfield', bill.id);
    new Cat('Felix', bill.id);
    new Cat('Tomcat', bill.id);

    expect(bill.feedCats()).toBe(3);
    expect(bill.feedCats()).toBe(0);

    garfield.isHungry = true;
    expect(bill.feedCats()).toBe(1);

    scores.correct(expect); // DO NOT TOUCH
  });

  // IGNORE PLEASE
  beforeEach(() => scores.add(expect));
  afterAll(scores.export);
});
