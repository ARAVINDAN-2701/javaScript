/* normally we first declare a func and then we call it 
   but hoisting allows the process in the vice versa */
// the java script moves and stores the declarations at the top (not initializations) so that it allows usage before the declation and initialization
// declaration - var a
// initialization - var a=10









// variable hoisting (1st calling 2nd declaring)
//as the var is available for the whole document first after the console execution produces error and as declaring the variable the memory is assigned but the error is gone
console.log(a)
var a=10
console.log(b)
let b=10


//function hoisting

