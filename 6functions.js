//global
// for global scope we can use all declarations
// // the disadvantage in the global scobe is security
// let a=10
// var b=20
// const c=30
// console.log(a,b,c)
// for(i=0;i<1;i++){
//     console.log(a,b,c)
// }

// //local
// if (true){
//     let al=20
//     console.log(al)

// }
// console.log(al)
// error as al is not defined outside the local if

//functional scope
// fuctional scope is a type of local scope which the variable will be declared inside the function using var
// var works as a local only inside a function anf global inside the if and else
// function f(){
//     let af=10
//     var bf=20
//     console.log(af,bf)
// }
// f()
// console.log(af,bf)

//block scope
if(true){
    var a=10
    let b=9
    console.log(a,b)
}
console.log(a,b)