class Library {
  constructor() {
    this.books = [];
  }
  addBook(book) {
    this.books.push(book);
  }
  getAvailableBooks() {
    return this.books.filter(b => b.available);
  }
  searchByAuthor(author) {
    return this.books.find(b => b.author === author);
  }
}

const lib = new Library();
lib.addBook({ title: "Book A", author: "Author X", available: true });
lib.addBook({ title: "Book B", author: "Author Y", available: false });
lib.addBook({ title: "Book C", author: "Author X", available: true });

console.log(lib.getAvailableBooks());
console.log(lib.searchByAuthor("Author X"));
