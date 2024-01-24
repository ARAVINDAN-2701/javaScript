// if we use async then we should use await to console the variable
// async dummy example
// async function asAw(){
//     var promise = new Promise(
//         function ( response){
//             setTimeout(function(){
//                 response("example")
//             },1000)

//         }
//     )
//     console.log(await promise)
// }
// asAw()

// instagram
async function comment(){
    return new Promise(function(commentval){
        setTimeout(function(){
            commentval("This is my 1st comment post icon")
        },1000)
    });
}
async function like(){
 return new Promise(function(likeval){
    setTimeout(function(){
        likeval("This is my like icon")
    },1000)
 });
} 
async function post(){
    var p = new Promise(function(postResponse){
        setTimeout(function(){
            postResponse("This is my 1st post")
        },1000)
    })
    var [feed,comm,lik] = await Promise.all([p,comment(),like()])
    console.log(feed)
    console.log(comm)
    console.log(lik)
 }
 post()