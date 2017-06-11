var forecastnumber = 7;
var coords = "36.889,-76.2482";
var forecast = $.getJSON("https://api.darksky.net/forecast/af99563fc381391ac26ff4a0762a636a/" + coords + "?callback=?",

	function(json) {

		// console.log(json.daily);
		var e = $(".weather");

		var daily = build_daily(json);

		var items = [];
		for (var i = 0; i < 5; i++) {

			items.push("<li><a href='https://darksky.net/forecast/" + coords + "/us12/en'class='forecast'><img class='forecast-icon' src='" + daily[i].icon.path + "/" + daily[i].icon.icon + "." + daily[i].icon.file + "'/> " + daily[i].day + " : " + daily[i].lowTemp + " - " + daily[i].highTemp + "</a></li>");
		}

		$("<ul/>", {
			html: items.join("")
		}).appendTo(e);
	});


var build_daily = function(f) {
	var dailyObj = [],
		today = moment(),
		days = f.daily.data,
		num_days = Math.max(6, days.length),
		day,
		temp_span,
		max_temp_height = 65,
		high_temp = -Infinity,
		low_temp = Infinity;

	// find weekly high and low temps
	for (var i = 0; i < num_days; i++) {
		day = days[i];
		if (day.temperatureMax > high_temp) {
			high_temp = day.temperatureMax;
		}
		if (day.temperatureMin < low_temp) {
			low_temp = day.temperatureMin;
		}
	}

	// figure out the temp span now that we have highs and lows
	temp_span = high_temp - low_temp;

	// store daily values
	for (var i = 0, tmp_date; i < num_days; i++)(function(i) {
		dailyObj[i] = days[i];
		day = days[i];

		tmp_date = moment(today).add(i, 'days');
		dailyObj[i].date = tmp_date.format("YYYY-MM-D");
		dailyObj[i].highTemp = Math.round(day.temperatureMax) + '&deg;';
		dailyObj[i].lowTemp = Math.round(day.temperatureMin) + '&deg;';
		dailyObj[i].icon = getIcon(getIconType(days[i].icon));
		dailyObj[i].tempBar = {
			height: max_temp_height * (day.temperatureMax - day.temperatureMin) / temp_span,
			top: max_temp_height * (high_temp - day.temperatureMax) / temp_span
		};

		if (i == 0) {
			dailyObj[i].day = 'Today';
		} else if (is_mobile) {
			dailyObj[i].day = tmp_date.format("ddd").toUpperCase();
		} else {
			dailyObj[i].day = tmp_date.format("dddd");
		}

	})(i);

	return dailyObj;
};

var iconFiletype = 'svg';
var iconPath = 'images/weather/';
var availableIcons = [
	'rain', 'snow', 'sleet', 'wind', 'fog', 'cloudy', 'partly-cloudy-day', 'partly-cloudy-night', 'clear-day', 'clear-night', 'hail', 'thunderstorm', 'tornado'
];

var getIcon = function(type) {
	return {
		'icon': type + "-alt",
		'path': iconPath,
		'file': iconFiletype
	}
};

var getIconType = function(icon) {
	if ($.inArray(icon, availableIcons) === -1) {
		icon = 'cloudy';
	}
	return icon;
};

var is_mobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
	},
	any: function() {
		return (this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows());
	}

}.any();
