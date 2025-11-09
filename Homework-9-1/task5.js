const users = [
	{ name: 'John', email: 'john123@abc.com', age: 30 },
	{ name: 'Jane', email: 'jane345@abc.com', age: 25 },
	{ name: 'Mike', email: 'mike567@abc.com', age: 40 },
];

//До деструктуризації
for (const user of users) {
	console.log(`${user.name} is ${user.age} and has email ${user.email}`);
}

//Деструктуризація
for (const { name, email, age } of users) {
	console.log(`${name} is ${age} and has email ${email}`);
}
