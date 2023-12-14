function Time_function(){
    ver Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {                // -- If time is less than or time is greater than 0, it is the morning.
        Reply = "It is the morning time!";
    }                               
    else if (Time >= 12 == Time < 18) {          // -- If time is greater than or equal to or it time is less than 18, it is the afternoon.
        Reply = "It is afternoon.";
    }
    else {                                      // -- Anything other than the two listed above is the evening  
        Reply ="It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}