//The entries() method returns a new Array Iterator object containing key/value pairs for each array index.

const obj = ["yash",'Harsh','Looki']

const myArr = obj.entries()
for (let val of myArr){
    console.log(val)  //prints Harsh, Looki
}