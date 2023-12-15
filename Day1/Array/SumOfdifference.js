function sumOfDifferences(arr) {
    return arr.length>1?Math.max(...arr) - Math.min(...arr) :0;
  }

 console.log( sumOfDifferences([1,2,10]))