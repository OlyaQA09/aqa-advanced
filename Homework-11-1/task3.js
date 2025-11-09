async function newFunc1() {
  try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Custom Error 1:', error);
        throw error;
    }
}

async function newFunc2() {
  try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Custom Error 2:', error);
        throw error;
    }
}

const promisesAll = Promise.all([newFunc1(), newFunc2()]);

promisesAll
  .then(results => {
    console.log('All Promises Fulfilled:', results);
  })
  .catch(error => {
    console.log('Error in Promise.all:', error);
  });

const promisesRace = Promise.race([newFunc1(), newFunc2()]);

promisesRace
  .then(result => {
    console.log('First Fulfilled Promise:', result);
  })
  .catch(error => {
    console.log('Error in Promise.race:', error);
  });

