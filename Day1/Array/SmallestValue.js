// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.
// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

function min(arr, returnType) {
    //1st Approach
    // let smallestValue = arr[0];
    //  let smallestIndex = 0;
    //  for(let i=1;i<arr.length;i++){
    //    if(arr[i]<smallestValue){
    //      smallestValue = arr[i]
    //      smallestIndex = i
    //    }
    //  }
    //  if (returnType === 'value') {
    //    return smallestValue;
    //  } else if (returnType === 'index') {
    //    return smallestIndex;
    //  } else {
    //    return undefined; 
    //  }
    
    //2nd Approach

    const min = Math.min(...arr);
    return returnType==='index' ? arr.indexOf(min):min; 
   }

   console.log(min([1,2,4,5,6],'index'))
   console.log(min([1,3,4,5,6],'value'))