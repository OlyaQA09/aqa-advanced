import { Book } from './book.js'

class EBook extends Book {
    constructor(name, author, year, format) {
        super(name, author, year);
        this.format = format;
    }

    get format() {
        return this._format;
    }
    set format(value) {
        if (!value || value.trim() === '') {
            console.log("Format must not be empty!");
            return;
        }
        this._format = value;
    }

    printInfo() {
        console.log(`Name of the book is ${this.name} and author is ${this.author}, written in ${this.year}. Format: ${this.format}`);
    }

    static returnEbook(book, format) {
        if (!(book instanceof Book) || typeof format !== 'string' || format.trim() === '') {
            console.log("Incorrect input: book must be Book instance, format must be non-empty string");
            return null;
        }
        return new EBook(book.name, book.author, book.year, format);

    }
}

export { EBook };
