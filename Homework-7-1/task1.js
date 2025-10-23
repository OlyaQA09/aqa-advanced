function handleNum(acceptsNumber, evenNumber, oddNumber) {
   let even = evenNumber(acceptsNumber);
   let odd = oddNumber(acceptsNumber);
   return even != null ? even : odd;
}

const handleEven = (n) => {
    if (n % 2 === 0) {
        return "Number is even";
    }
}

const handleOdd = (n) => {
    if (n % 2 !== 0) {
        return "Number is odd";
    }
}

let acceptsNumber = 7; 
console.log(handleNum(acceptsNumber, handleEven, handleOdd));