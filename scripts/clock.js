var seconds = 00;
var minutes = 00;
var milliseconds = 00;

var startedTimer = false;



$(".student").click(function(){

    if (!startedTimer) {
        console.log("starting timer");
        startedTimer = true;
        var countdown = window.setInterval(function() { 
        $(".clock p").text(milliseconds, seconds, minutes);
        ++milliseconds;

            if (milliseconds == 60)
                { milliseconds = 0;  
                seconds = seconds ++; 
                console.log(seconds)
            }

            else { 
                seconds = seconds; 
            }
        }, 1000);
    }
    else {
        console.log("you already started!");
    }


});


//  (function($) {
//     $.fn.countTo = function(options) {
//         // merge the default plugin settings with the custom options
//         options = $.extend({}, $.fn.countTo.defaults, options || {});

//         // how many times to update the value, and how much to increment the value on each update
//         var loops = Math.ceil(options.speed / options.refreshInterval),
//             increment = (options.to - options.from) / loops;

//         return $(this).each(function() {
//             var _this = this,
//                 loopCount = 0,
//                 value = options.from,
//                 interval = setInterval(updateTimer, options.refreshInterval);

//             function updateTimer() {
//                 value += increment;
//                 loopCount++;
//                 $(_this).html(value.toFixed(options.decimals));

//                 if (typeof(options.onUpdate) == 'function') {
//                     options.onUpdate.call(_this, value);
//                 }

//                 if (loopCount >= loops) {
//                     clearInterval(interval);
//                     value = options.to;

//                     if (typeof(options.onComplete) == 'function') {
//                         options.onComplete.call(_this, value);
//                     }
//                 }
//             }
//         });
//     };

//   jQuery(function($) {
//         $('.clock p').countTo({
//             from: 0,
//             to: 60,
//             speed: 1000,
//             refreshInterval: 60,
//             onComplete: function(value) {
//                 console.debug(this);
//             }
//         });
//     });
// 
 