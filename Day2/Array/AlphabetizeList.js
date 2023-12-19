// Write a function that accepts two parameters, i) a string (containing a list of words) and ii) an integer (n). The function should alphabetize the list based on the nth letter of each word.

// The letters should be compared case-insensitive. If both letters are the same, order them normally (lexicographically), again, case-insensitive.

function sortIt(list, n) {
    return list.split(', ').sort((a,b)=>a.toLowerCase().charAt(n-1)-b.toLowerCase().charAt(n-1)||a.localeCompare(b))
 .join(', ');
}
console.log(sortIt('bill, bell, ball, bull', 2))