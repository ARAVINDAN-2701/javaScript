// callBack - a function is embedded called inside / by another function
// called in the parameters of the function

// function ram(name,callback){
//       setTimeout(function(){
//         console.log(name)
//         callback()
//       },3000)
// }
// function som(){
//     console.log("hi")
// }
// ram("hello",som)

//callBack
//formSubmission

// function submitForm(name,cb){
//   setTimeout(() =>{
//     console.log(name)
//     cb()
//   },2000)
// }

// function database(){
//   console.log("success")
// }

// submitForm("Form Submit button clicked",database);

// instagram
// 0 - liked
// 1 - commented
// 2 - saved
var a =2
function postFeed(a,com){
  setTimeout(() => {
    console.log(com)
    if (a===0){
      liked()
    }
    else if(a===1){
      comment()

    }
    else if(a===2){
      saving("saving the post...",saved)
    }
  },2000)

}

function comment(){
  console.log("commented the post")
}
function saving(name,cb){
  setTimeout(() => {
    console.log(name)
    cb("saved the post to the page")
  },2000)
  
}
function saved(name){
  setTimeout(() => {
    console.log(name)
    
  },2000)
}

function liked(){
  console.log("liked the post")
}

postFeed(a,"viewing the post");



// claaback practise