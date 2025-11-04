import { Book } from './book.js';
import { EBook } from './EBook.js';

const book1 = new Book("Brave New World", "Aldous Huxley", 1931);
const book2 = new Book("1984", "George Orwell", 1948);
const ebook1 = new EBook("Brave New World", "Aldous Huxley", 1931, "FB2");
const ebook2 = new EBook("1984", "George Orwell", 1948, "FB2");


book1.printInfo();
book2.printInfo();
ebook1.printInfo();
ebook2.printInfo();

const book3 = new Book(1984, "George Orwell", 1948);
const ebook3 = new EBook("1984", "George Orwell", 1948);

book3.printInfo();
ebook3.printInfo();

const allBooks = [book1, book2, ebook1, ebook2];

const oldestBook = Book.getOldestBook(allBooks);


if (oldestBook) {
    console.log("\n The oldest book:");
    oldestBook.printInfo();
}

const ebook = EBook.returnEbook(book1, "TXT");
console.log(ebook);
