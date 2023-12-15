//The find() method returns the value of the first array element that satisfies the provided test function.

const arr = [1,2,3,5,6,4,8]

const res = arr.filter(x=>x%2===0)
console.log(res)