function acceptNum(num) {
	if (num > 0) {
		console.log(num);
		return acceptNum(num - 1);
	}
}

let num = 5;
acceptNum(num);
