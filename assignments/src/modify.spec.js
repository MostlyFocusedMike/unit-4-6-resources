const { Book, Genre } = require('./modify');
const { compileScore } = require('./utils/score-utils');

const testSuiteName = 'Modify Tests';
const scoreCompiler = compileScore(testSuiteName);

describe(testSuiteName, () => {
  it('A Genre knows its average book price', () => {
    const horror = new Genre("Horror");
    expect(horror.averageBookPrice()).toBe(0);

    const price = 10.99;
    const shining = new Book("The Shining", price - 1);
    const exorcist = new Book("The Exorcist", price + 1);
    shining.addGenre(horror.id);
    exorcist.addGenre(horror.id);

    expect(horror.averageBookPrice()).toBe(price);

    const cheapPrice = 0.50;
    const lessCheapPrice = 0.75;
    const roundingCheck = 0.63;
    const romance = new Genre("Romance");
    const faultyStars = new Book("The Fault in Our Stars", cheapPrice);
    const notebook = new Book("The Notebook", lessCheapPrice);

    notebook.addGenre(romance.id);
    faultyStars.addGenre(romance.id);

    expect(romance.averageBookPrice()).toBe(roundingCheck);

    notebook.delete();
    expect(romance.averageBookPrice()).toBe(faultyStars.price);

    scoreCompiler(1);
  });

  it('A Book with no genres returns null as its most popular genre', () => {
    const dune = new Book('Dune', 10.99);
    expect(dune.mostPopularGenre()).toBe(null);

    scoreCompiler(1);
  });

  it('A Book with one genre returns that genre as its most popular genre', () => {
    const dune = new Book('Dune', 10.99);
    const sciFy = new Genre('Science Fiction');
    dune.addGenre(sciFy.id);
    expect(dune.mostPopularGenre()).toBe(sciFy);

    scoreCompiler(1);
  });

  it('A Book with multiple genres returns the most popular genre', () => {
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
    fellowship.addGenre(adventure.id);
    hobbit.addGenre(adventure.id);
    treeHouse.addGenre(adventure.id);

    boat.addGenre(fantasy.id);
    fellowship.addGenre(fantasy.id);
    hobbit.addGenre(fantasy.id);

    boat.addGenre(horror.id);
    it.addGenre(horror.id);

    expect(dune.mostPopularGenre()).toBe(adventure);
    expect(boat.mostPopularGenre()).toBe(fantasy);
    expect(it.mostPopularGenre()).toBe(horror);

    scoreCompiler(1);
  });

  beforeEach(() => scoreCompiler(0,1));
  afterAll(() => scoreCompiler().saveTestResults());
});
