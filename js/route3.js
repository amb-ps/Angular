let startCounter=0, pauseCounter=0, pause=true, pausedAt='', currentTimeLeft= $('#startTimer').val()


  function countTimers() {  debugger  
    let counter = setInterval(timer, 1000);
    currentTimeLeft = currentTimeLeft != '' ? currentTimeLeft : $('#startTimer').val();
    // $("#currTime").append('<p>started at '+ new Date().toLocaleString().replace(',','')+'</p>')
    document.getElementById("startedCount").innerHTML = startCounter
    function timer() {
      if (!pause) { //do something if not paused
        
        if (currentTimeLeft < 0) {
          clearInterval(counter);
          setTimeout(countTimers, 5000); //start count from 26 again
          return;
        }   
        document.getElementById("countdowntimer").innerHTML = currentTimeLeft;
        
        currentTimeLeft= currentTimeLeft - 1
      }
    }  
  }
  
//   document.getElementById('pause').addEventListener('click', function () {debugger
//       pause = true;
//       $('#pausedAt').append('<p style="margin-bottom:0">paused at '+currentTimeLeft + "</p>")
//       $("#currTime").append('<p>paused at '+ new Date().toLocaleString().replace(',','')+'</p>')
//       document.getElementById("pausedCount").innerHTML =++pauseCounter
//   });
  
//   document.getElementById('resume').addEventListener('click', function () {debugger
//       pause = false;
//       $("#currTime").append('<p>started at '+ new Date().toLocaleString().replace(',','')+'</p>')
//       document.getElementById("startedCount").innerHTML =++startCounter
//   });
  
  document.getElementById('pause').addEventListener('click', function () {debugger
    if(pause){
        pause = false;
        $("#currTime").append('<p>started at '+ new Date().toLocaleString().replace(',','')+'</p>')
        document.getElementById("startedCount").innerHTML =++startCounter
    }else{
        pause = true;
        let tmp = currentTimeLeft+1
        $('#pausedAt').append('<p style="margin-bottom:0">paused at '+ tmp + "</p>")
        $("#currTime").append('<p>paused at '+ new Date().toLocaleString().replace(',','')+'</p>')
        document.getElementById("pausedCount").innerHTML =++pauseCounter
    }    
});