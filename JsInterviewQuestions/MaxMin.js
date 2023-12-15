const arrNum = [1,56,78,899,799]

const maxFunc = (arr) =>{
    const maxNum = arr.reduce(function(prev,curr){
        return prev>curr?prev:curr
    })
    const minNum = arr.reduce(function(prev,curr){
        return prev<curr?prev:curr
    })
    return [maxNum,minNum]
}
console.log(maxFunc(arrNum))