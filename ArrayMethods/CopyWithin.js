//copies the element in the array. copyWithin(target,start,end)

let words = ["apple", "ball", "cat", "dog"];

// copies element from index 0 to index 3 
words.copyWithin(3, 1);

// modifies the original array 
console.log(words);

// Output: 
// [ ''apple'', ''ball'', ''cat'', ''apple'' ]