class Book {
	constructor(name, author, year) {
		this.name = name;
		this.author = author;
		this.year = year;
	}

	get name() {
		return this._name;
	}
	set name(value) {
		if (typeof value !== 'string') {
			console.log('Name must be string!');
			return;
		}
		this._name = value;
	}

	get author() {
		return this._author;
	}
	set author(value) {
		if (typeof value !== 'string') {
			console.log('Author must be string!');
			return;
		}
		this._author = value;
	}

	get year() {
		return this._year;
	}
	set year(value) {
		if (typeof value !== 'number') {
			console.log('Year must be number!');
			return;
		}
		this._year = value;
	}

	printInfo() {
		console.log(`Name of the book is ${this.name} and author is ${this.author}, written in ${this.year}`);
	}

	static getOldestBook(books) {
		if (!Array.isArray(books) || books.length === 0) {
			console.log('Array of books is empty or invalid!');
			return null;
		}

		return books.reduce((oldest, current) => {
			return oldest.year <= current.year ? oldest : current;
		});
	}
}

export { Book };
