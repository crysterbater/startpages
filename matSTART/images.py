icons = 'rain', 'snow', 'sleet', 'wind', 'fog', 'cloudy', 'partly-cloudy-day', 'partly-cloudy-night', 'clear-day', 'clear-night', 'hail', 'thunderstorm', 'tornado'
type = "svg"
typeu = "-alt." + type
size = "80px"
dir = "/home/tyler/Programming/primetoxinz.github.io/images/weather/"
import urllib.request as r
for i in icons:
    url = "https://duckduckgo.com/assets/weather/" + \
        type + "/" + size + "/" + i + typeu
    print(url)
    r.urlretrieve(url, dir + i + typeu)
