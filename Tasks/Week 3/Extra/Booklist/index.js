const Book = require('./book.js');
const BookList = require('./booklist.js');

let book1 = new Book("Hello World","Mystery","Hideo Kojima",false);
let book2 = new Book("Dragon Ball","Action","Akira Toriyama",false);
let book3 = new Book("Rave Master","Action","Hiro Mashima",false);

let bookList = new BookList();
bookList.add(book1);
bookList.add(book2);
bookList.add(book3);

bookList.read(book1);

console.log(bookList.readList);
bookList.finishCurrentBook();
console.log(bookList.readingNow);
