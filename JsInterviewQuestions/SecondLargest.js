//Find second largest and remove first largest value in array.

const arr = [2,56,23,57,89,90]

function findSecondLargest(data){
    const largestNum = Math.max(...data)
    let removeIndex = arr.indexOf(largestNum)
    data.splice(removeIndex,1)
    const smallestNum = Math.max(...data)
    return smallestNum
}

console.log(findSecondLargest(arr))