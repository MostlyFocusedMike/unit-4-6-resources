const getId = ((id = 1) => () => id++)();

class Book {
  static all = [];
  constructor(title) {
    this.title = title;
    this.id = getId();
    Book.all.push(this);
  }

  genres() {
    return BookGenre.all
      .filter((bookGenre => bookGenre.bookId === this.id))
      .map(bookGenre => bookGenre.genre())
  }

  addGenre(genreId) {
    return new BookGenre(this.id, genreId);
  }

  removeGenre(genreId) {
    BookGenre.find(this.id, genreId).delete();
  }

  delete() {
    const idx = Book.all.findIndex(book => book.id === this.id);
    Book.all.splice(idx, 1);

    BookGenre.all
      .filter(bookGenre => bookGenre.bookId == this.id)
      .forEach(bookGenre => bookGenre.delete());

    return true;
  }
}

class BookGenre {
  static all = [];
  static find(bookId, genreId) {
    return BookGenre.all.find(bookGenre => (
      bookGenre.bookId === bookId
        && bookGenre.genreId === genreId
    ));
  }

  constructor(bookId, genreId) {
    if (BookGenre.find(bookId, genreId)) {
      throw new Error("BookGenre already exists!");
    }
    this.id = getId();
    this.bookId = bookId;
    this.genreId = genreId;
    BookGenre.all.push(this);
  }

  book() {
    return Book.all.find((book => (
      book.id === this.bookId
    )));
  }

  genre() {
    return Genre.all.find((genre => (
      genre.id === this.genreId
    )));
  }

  delete() {
    const idx = BookGenre.all
      .findIndex(bookGenre => {
        if (bookGenre.id === this.id) {
          bookGenre.bookId = null;
          bookGenre.genreId = null;
          return true;
        }
      })

    BookGenre.all.splice(idx, 1);
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
    return BookGenre.all
      .filter((bookGenre => bookGenre.genreId === this.id))
      .map(bookGenre => bookGenre.book())
  }

  addBook(bookId) {
    return new BookGenre(bookId, this.id);
  }

  removeGenre(bookId) {
    BookGenre.find(bookId, this.id).delete();
  }

  delete() {
    const idx = Genre.all.findIndex(genre => genre.id === this.id);
    Genre.all.splice(idx, 1);

    BookGenre.all
      .filter(bookGenre => bookGenre.genreId === this.id)
      .forEach(bookGenre => bookGenre.delete());

    return true;
  }
}

const horror = new Genre("Horror");
const sciFi = new Genre("Sci-Fi");

const dune = new Book("Dune");
dune.addGenre(sciFi.id);

sciFi.delete();
console.log('dune.genres():', dune.genres());

const scarletLetter = new Book("The Scarlet Letter");
scarletLetter.addGenre(horror.id);

scarletLetter.delete()
console.log('horror.books():', horror.books());

module.exports = { Book, BookGenre, Genre };
