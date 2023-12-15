//The every() method checks if all the array elements pass the given test function.

function checkAdult(age) {
    return age >= 18;
}

const ageArray = [34, 23, 20, 26, 12];
let check = ageArray.every(checkAdult);
console.log(check)