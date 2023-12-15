


function isIsogram(str){
const charSet = new Set(str);
// if (charSet.size === str.length){
//     return true;
// }
//     return false;
return charSet.size === str.length?true:false

}
console.log(isIsogram('moose'))