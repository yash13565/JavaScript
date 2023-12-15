//The fill() method returns an array by filling all elements with a specified value.arr.fill(value, start, end).

// defining an array 
var fruits = ['Apple', 'Banana', 'Grape','orange'];

// filling every element of the array with 'Cherry'
fruits.fill("Cherry",1,2);

console.log(fruits);

// Output: 
// [ 'Cherry', 'Cherry', 'Cherry' ]