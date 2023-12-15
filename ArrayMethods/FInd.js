//The find() method returns the value of the first array element that satisfies the provided test function.Returns undefined if none of the elements satisfy the function.

const arr = [1,2,3,5,6,4,8]

const res = arr.find(x=>x%2===1)
console.log(res)
