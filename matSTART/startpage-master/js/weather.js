var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=Perth&units=metric&appid=" + weatherKey;

var MAIN = "main";
var TEMP_MIN = "temp_min";
var TEMP_MAX = "temp_max";
var TEMP = "temp";
var WEATHER = "weather";
var DESCRIPTION = "description";
var HUMIDITY = "humidity";
var CLOUDS = "clouds"

/**
 * Makes a http request to a specific url and then calls
 * the callback with the return info
 */
var makeRequest = function(url, callback) 
{
    var xmlHttp;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) 
        {
            callback(xmlHttp.responseText);
        }
    }

    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}

var parseWeatherData = function(data)
{
    var weatherData = JSON.parse(data);
    console.log(weatherData);

    // Get the max and min temps
    var humidity = weatherData[MAIN][HUMIDITY];
    var clouds = weatherData[CLOUDS]["all"];
    var current = weatherData[MAIN][TEMP];

    // Get conditions
    var condition = weatherData[WEATHER][0][DESCRIPTION];

    // Construct weather message
    var weatherMessage = "[cond]: " + condition;
    weatherMessage += "<br/>[curr]: " + current + " [hum]: " + humidity + " [clouds]: " + clouds;
    document.getElementById("weather-container").innerHTML = weatherMessage; 
}

makeRequest(weatherUrl, parseWeatherData);