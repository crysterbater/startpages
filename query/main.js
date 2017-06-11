var sitesUrl = ["https://plus.google.com/",
  "http://pt.stackoverflow.com/", "https://git.com/", "https://www.reddit.com",
  "https://bbs.archlabs.org/"
];

var sitesNames = ["g+", "so", "git", "reddit", "bbs"];

var sitesSearch = ["http:/www.oogle.com",
  "https://www.youtube.com/results?search_query=",
  "https://github.com/search?&q=",
  "https://thepiratebay.se/search/",
  "http://reddit.com/search?q=",
  "https://duckduckgo.com/?q=",
  "http://www.deviantart.com/newest/?section=&global=1&q=",
  "https://wiki.archlinux.org/index.php?search=",
  "http://sexix.net/?s="
];

var sitesNIDSearch = ["stack-ov", "youtube", "github", "pirate-bay", "dicio",
  "duckduckgo", "caniuse", "archwiki", "libgen"
];

var sitesNSearch = ["Google", "Youtube", "GitHub", "The Pirate Bay",
  "Reddit", "DuckDuckGo", "Deviantart", "ArchWiki", "Sexix"
];

var conLink = document.getElementById('container-links');
for (i = 0; i < sitesNames.length; i++) {
  var link = document.createElement('a');
  link.setAttribute('href', sitesUrl[i]);
  link.setAttribute('class', 'link');
  link.text = sitesNames[i];
  conLink.appendChild(link);
}
var conSearch = document.getElementById('container-search');
for (var i = 0; i < sitesNSearch.length; i++) {
  var searchBox = document.createElement('input');
  searchBox.setAttribute('placeholder', sitesNSearch[i]);
  searchBox.id = sitesNIDSearch[i];
  conSearch.appendChild(searchBox);
}

document.body.setAttribute('class', 'load');

var input = document.getElementsByTagName("input");
for (var i = 0; i < input.length; i++) {
  input[i].addEventListener('keydown', function(event) {
    var tecla = event.keyCode;
    if (tecla == 13) {
      var pos = sitesNIDSearch.indexOf(this.id);
      window.location = sitesSearch[pos] + this.value;
    }
  });
}
