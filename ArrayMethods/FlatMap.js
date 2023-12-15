//The flatMap() method first maps each element of an array using a mapping function, then flattens it into a new array.

let numbers = [1, 2, 3, 4, 5];
const resultingArray = numbers.flatMap((x) => [x ** 2]);

console.log(resultingArray);

