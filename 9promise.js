/*promise - * in call back we are not so sure that the code will get executed in the mentioned timeout
          - * due to this the does not know what is happenning     
          - * new promise() - is how we are defining the promise */

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