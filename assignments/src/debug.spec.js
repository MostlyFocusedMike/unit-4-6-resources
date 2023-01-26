const { Owner, Cat } = require('./debug');
const { compileScore } = require('./utils/score-utils');

const testSuiteName = 'Debug Tests';
const scoreCompiler = compileScore(testSuiteName);

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

    scoreCompiler(1)
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

    scoreCompiler(1,0) // IGNORE PLEASE
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

    scoreCompiler(1,0) // IGNORE PLEASE
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCompiler(0,1));
  afterAll(scoreCompiler().saveTestResults);
});
