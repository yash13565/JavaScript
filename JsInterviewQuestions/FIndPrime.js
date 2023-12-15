const arr = [1,2,5,6,7,9,11,13,17,19,21,25]

function isPrime(num){
    if(num<=1){
        return false;
    }
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}
const primNumber = arr.filter((num)=>isPrime(num))
console.log(primNumber)