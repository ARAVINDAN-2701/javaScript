//declaration of objects
//1
var marks={
    "name":"Harry",
    "RollNo":"23",
    "math":67,
    "physics":82

}
console.log(marks)
marks["chem"]=67
console.log(marks)
// comma is optional for the last key value pair
/*why key does not does not hold any quotes in your object?
            because the quotes will br default  */

//2
var kongu = new Object()
kongu["name"]="KEC"
kongu["food"]="bad"
kongu["hostel"]=10

console.log(kongu.food)