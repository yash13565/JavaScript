//The map() method creates a new array with the results of calling a function for every array element.
let numbers = [2, 4, 6, 8, 10];
function square(number) {
  return number * number;
}
let square_numbers = numbers.map(square);
console.log(square_numbers);

// Output: [ 4, 16, 36, 64, 100 ]