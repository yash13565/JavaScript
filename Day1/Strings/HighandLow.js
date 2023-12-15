function highAndLow(numbers){
    let convertArr =  numbers.split(' ');
    let max =  Math.max(...convertArr)
    let min =  Math.min(...convertArr)
    return `${max} ${min}`
  }

  console.log(highAndLow('1 2 3 4 5'))