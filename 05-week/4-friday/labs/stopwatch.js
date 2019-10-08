
  function randomNumber() {
    var randomTime =Math.floor(Math.random() * 11);
    var x = randomTime * 1000;
    return x
  }

var stopwatch = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve((randomNumber()/1000) + " seconds");
    }, randomNumber());
  });


  function stopwatchListener() {
    stopwatch.then(response => console.log(response));
  }

