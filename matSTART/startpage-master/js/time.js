/**
 *  Updates the time display
 */

const INTERVAL = 5000; // 5s

var setTime = function()
{
    var date = new Date();
    var suffix = "AM";

    // Format the hours
    var hours = date.getHours();
    if (hours > 12)
    {
        hours -= 12;
        suffix = "PM";
    }

    // Format the minutes
    var minutes = date.getMinutes();
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Update the display
    document.getElementById("time-container").innerHTML = hours + ":" + minutes + suffix;

};

setTime(); // Call it as it is loaded
setInterval(setTime, INTERVAL);