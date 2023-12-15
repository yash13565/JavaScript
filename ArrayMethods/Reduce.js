//The reduce() method executes a reducer function on each element of the array and returns a single output value.

//Find the total sum of the array elements.

const arr = [1,9,3,45,67]

const res = arr.reduce((acc,curr)=>{
    return acc + curr;
})
console.log(res)

