/*promise - * in call back we are not so sure that the code will get executed in the mentioned timeout
          - * due to this the does not know what is happenning     
          - * new promise() - is how we are defining the promise */

// location
function isLocationValid(locat){
  var v = "karur"
  if(v === locat){
    return true
  }
  else{
    return false
  }
}

function location(){
  return new Promise(function(msg,errmsg){
    setTimeout(() =>{
      var a="karur"
      if(isLocationValid(a)){
        msg("The location is valid")
      }
      else{
        errmsg("location is not present")
      }
    },1000);

  })
}

location().then(
  function(msg){
    console.log(msg)
  }
).catch(
  function(errmsg){
    console.log(errmsg)
  }
)