//FInd the missing value in the given array.


const arr = [1,2,3,4,6,7,8,9,11,13]

const maxNum = Math.max(...arr)
const minNum = Math.min(...arr)

for (let i=minNum;i<maxNum;i++){
    if(arr.indexOf(i)<0){
        console.log(i)
    }
}