const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
const numberList2 = numbersList.slice();
numberList2.sort((a, b) => a - b);
console.log(numbersList);
console.log(numberList2);
