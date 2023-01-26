const getId = ((id = 1) => () => id++)();

class Book {
  static all = [];
  constructor(title) {
  }

  genres() {
  }

  addGenre(genreId) {
  }

  removeGenre(genreId) {
  }

  delete() {
  }
}

class BookGenre {
  static all = [];
  static find(bookId, genreId) {
  }

  constructor(bookId, genreId) {
  }

  book() {
  }

  genre() {
  }

  delete() {
  }
}

class Genre {
  static all = [];
  constructor(name) {
    this.name = name;
    this.id = getId();
    Genre.all.push(this);
  }

  books() {
  }

  addBook(bookId) {
  }

  removeGenre(bookId) {
  }

  delete() {
  }
}

// const horror = new Genre("Horror");
// const sciFi = new Genre("Sci-Fi");

// const dune = new Book("Dune");
// dune.addGenre(sciFi.id);

// sciFi.delete();
// console.log('dune.genres():', dune.genres());

// const scarletLetter = new Book("The Scarlet Letter");
// scarletLetter.addGenre(horror.id);

// scarletLetter.delete()
// console.log('horror.books():', horror.books());

module.exports = { Book, BookGenre, Genre };
