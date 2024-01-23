// callBack - a function is embedded called inside / by another function
// called in the parameters of the function

function ram(name,callback){
      setTimeout(function(){
        console.log(name)
        callback()
      },360000)
}
function som(){
    console.log("hi")
}
ram("hello",som)