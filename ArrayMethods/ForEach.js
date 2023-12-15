// forEach() does not change the original array.It returns undefined.
let numbers = [1, 3, 4, 9, 8];

function computeSquare(element) {
  console.log(element * element);
}
numbers.forEach(computeSquare);

/* Output:
1
9 
16
81
64
*/