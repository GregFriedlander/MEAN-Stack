function fib() {
    // Some variables here
    var fibArr = [0,1];
    function nacci() {
      // do something to those variables here
      for(var x = 1; x < fibArr.length; x++){
        fibArr.push(fibArr[x-1] + fibArr[x]);
        console.log(fibArr[x+1]);
      }
      
    }
    return nacci
  }
  var fibCounter = fib();
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "2"
  fibCounter() // should console.log "3"
  fibCounter() // should console.log "5"
  fibCounter() // should console.log "8"
  