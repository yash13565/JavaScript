//Find the smallest value in an array.

const arr = [36,39,90,37,67]

function findSmallest(arr){
    let min = Math.min(...arr);
    return min
}
console.log(findSmallest(arr))