var sitesUrl = ["https://news.ycombinator.com/",
  "http://pt.stackoverflow.com/", "https://habitica.com/", "https://nixers.net",
  "https://bbs.archlinux.org/"
];

var sitesNames = ["hn", "so", "habitica", "nixers", "bbs"];

var sitesSearch = ["http://pt.stackoverflow.com/search?q=",
  "https://www.youtube.com/results?search_query=",
  "https://github.com/search?&q=",
  "https://thepiratebay.se/search/",
  "http://www.dicio.com.br/pesquisa.php?q=",
  "https://duckduckgo.com/?q=",
  "http://caniuse.com/#search=",
  "https://wiki.archlinux.org/index.php?search=",
  "http://gen.lib.rus.ec/search.php?req="
];

var sitesNIDSearch = ["stack-ov", "youtube", "github", "pirate-bay", "dicio",
  "duckduckgo", "caniuse", "archwiki", "libgen"
];

var sitesNSearch = ["Stack Overflow", "Youtube", "GitHub", "The Pirate Bay",
  "Dicio", "DuckDuckGo", "Can I Use", "ArchWiki", "Library Genesis"
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
