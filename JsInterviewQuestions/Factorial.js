
let fact = 1


function findFactorial(num){
    for(let i=1;i<num;i++){
        fact = fact * (i+1)
    }
    return fact;
}
console.log(findFactorial(6))
