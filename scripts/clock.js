var seconds = 01;
var minutes = 00;
var milliseconds = 00;
var countdown;
var startedTimer = false;


$(".student").click(function(){
    //if we haven't started the timer
    if(!startedTimer) {
        var timer = $(".clock p")
        //then start the timer
        startedTimer = true;
        //set an interval function to run every millisecond.
        countdown = window.setInterval(function() {
            //update timer
            timer.text(minutes + ":" + seconds + ":" + milliseconds);
           
            if ((seconds +'').length == 1) {
             seconds = "0" + seconds;
            }

             if ((minutes +'').length == 1) {
             minutes = "0" + minutes;
            }

            //increment millisecond every interval
            milliseconds = milliseconds + 10;
            
<<<<<<< HEAD

            if(milliseconds === 60){
=======
            if(milliseconds === 1000){
>>>>>>> 7de46a77f50544906cf998cc902194c63036f078
                seconds++;
                milliseconds = 0;
            }

                
            if(seconds === 60){
                minutes++;
                seconds = 0;
            }
        
<<<<<<< HEAD
        }, 1);//run interval every 1 millisecond

=======
        }, 10);//run interval every 1 millisecond
>>>>>>> 7de46a77f50544906cf998cc902194c63036f078
    }//if statement
});
         





