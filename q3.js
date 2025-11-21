class Book {
  constructor(title, author, isbn, isIssued = false) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = isIssued;
  }

  issueBook() {
    if (!this.isIssued) this.isIssued = true;
  }

  returnBook() {
    this.isIssued = false;
  }
}

const books = [
  new Book("Atomic Habits", "James Clear", "101"),
  new Book("Think & Grow Rich", "Napoleon Hill", "102"),
  new Book("Rich Dad Poor Dad", "Robert Kiyosaki", "103"),
];

console.log("Available Books:");
books.filter(b => !b.isIssued).forEach(b => console.log(b.title));
function issueByISBN(isbn) {
  const book = books.find(b => b.isbn === isbn);
  if (book) {
    book.issueBook();
    console.log(`Book issued: ${book.title}`);
  } else {
    console.log("Book not found");
  }
}

issueByISBN("102");