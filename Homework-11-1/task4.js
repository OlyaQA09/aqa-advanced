class FirstClass {
	constructor() {}
	async newFunc1() {
		try {
			const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
			const data = await response.json();
			return data;
		} catch (error) {
			console.error('Custom Error 1:', error);
			throw error;
		}
	}
}

class SecondClass {
	constructor() {}
	async newFunc2() {
		try {
			const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
			const data = await response.json();
			return data;
		} catch (error) {
			console.error('Custom Error 2:', error);
			throw error;
		}
	}
}

const firstVar = new FirstClass();
const secondVar = new SecondClass();

const promisesAll = Promise.all([firstVar.newFunc1(), secondVar.newFunc2()]);

promisesAll
	.then((results) => {
		console.log('All Promises Fulfilled:', results);
	})
	.catch((error) => {
		console.log('Error in Promise.all:', error);
	});

const promisesRace = Promise.race([firstVar.newFunc1(), secondVar.newFunc2()]);

promisesRace
	.then((result) => {
		console.log('First Fulfilled Promise:', result);
	})
	.catch((error) => {
		console.log('Error in Promise.race:', error);
	});
