// It will return an array that contains the matches and one item for each match or if the match is not found then it will return Null. 

function matchString() {
    let string = "Welcome to geeks for geeks";
    let result = string.match(/eek/g);
    console.log("Output : " + result);
} matchString();