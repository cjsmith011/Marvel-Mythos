


// function getApi() {
// var apiMarvel = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=14ba62392acaeee875f06ebee23b5c60";

// fetch(apiMarvel)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//     }


// getApi();
// you will also have to setup the referring domains on your marvel developer portal

var PRIV_KEY = "96b6dcb17afd3a92bf2cb5412a5efad74a978e6d";
var PUBLIC_KEY = "14ba62392acaeee875f06ebee23b5c60";
function getMarvelResponse() {
    // you need a new ts every request
    
    var ts = new Date().getTime();  
    var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();    
    // the api deals a lot in ids rather than just the strings you want to use  
    var characterId = '1009718'; 
    // wolverine
    var url = 'http://gateway.marvel.com:80/v1/public/comics';
    console.log(url);
      $.getJSON(url, {
              ts: ts,
              apikey: PUBLIC_KEY,
              hash: hash,
              characters: characterId
                })
          .done(function(data) {      
        // sort of a long dump you will need to sort through      
        console.log(data);
        })
            .fail(function(err){      
            // the error codes are listed on the dev site      
            console.log(err);    
        });
    };


    function getWikiResponse() {
        var wikiApi = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch='New_England_Patriots'";

        fetch(wikiApi)
        .then(function(response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
    }

    function getGoogleResponse() {
        var googleApi = ""
    }

  getMarvelResponse();

  getWikiResponse();