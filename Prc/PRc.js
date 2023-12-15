const arr = [1,2,0,4,8,0,0,5,6,0,8]

let length = arr.length
for(let i=0;i<length;i++){
    if (arr[i] === 0) {
        arr.splice(i,1)
        arr.push(0);
        i--;
        length --;
    }
}
console.log(arr)