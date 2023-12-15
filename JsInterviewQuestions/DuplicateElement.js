const arr = [1,23,23,55,44,56,55]

const result = arr.filter((elem,index)=>arr.indexOf(elem)!==index)
console.log(result)