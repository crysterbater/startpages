/**
 * Handles search functionality
 */

const SHIFT = 16;
const RETURN = 13;

setTimeout(function(){
    document.getElementById("s").focus();
}, 0);

var keyCombination = {
    "return":false,
    "shift":false
};

/**
 * Check what key combinations have been pressed
 *
 * @param e
 */
document.onkeydown = function(e)
{
    e  = e || window.event;
    var keycode = e.keyCode;

    if (keycode === SHIFT)
    {
        keyCombination["shift"] = true;
    }
    else if (keycode === RETURN)
    {
        keyCombination["return"] = true;
        search();
    }

};

/**
 * Reset the key combinations
 *
 * @param e
 */
document.onkeyup = function(e)
{
    e = e || window.event;

    var keycode = e.keyCode;

    if (keycode === SHIFT)
    {
        keyCombination["shift"] = false;
    }
    else if (keycode === RETURN)
    {
        keyCombination["return"] = false;
    }
};


/**
 * Searches search engines based on key combinations
 */
var search = function()
{
    // Get the search query
    var query = document.getElementById("s").value;


    // Make sure query isn't empty to avoid accidental presses
    if (query !== "") {
        var url = "https://www.google.com.au/#q=" + query;

        // Depending on the key combinations search google or duck duck go
        if (keyCombination["shift"] === true) {
            url = "https://duckduckgo.com/?q=" + query;
        }

		// Reddit Flag
		if (query.substring(0,2) === "r/")
		{
			url = "https://reddit.com/" + query;
		} else if (query.substring(0,2) == "l/") {
			query = query.substr(2); // Remove tag
			query = query.replace(" ", "-"); // Mobafire uses dashes
			query = query + "-guide"; 
			url = "http://www.mobafire.com/league-of-legends/" + query;
		}

        // Open the search engine url
        window.open(url, "_self");
    }
};
