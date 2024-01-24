//ES6 - ECMA Script6 standard
//1. var,let,const
//2. Arrow function
var fun = ()=>{
   console.log("Hello")
}
fun()

//3. Destructuring
var array = [10,20,30,40,50]
var [a,b,c,d,e] = array
console.log(a,b,c,d,e)

//4. Spread operators
//...arr1 - appends in the list  in the new list
var arr1= [10,20,30]
var arra = [...arr1,40,50]
console.log(arra)
