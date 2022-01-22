var PRIV_KEY = "96b6dcb17afd3a92bf2cb5412a5efad74a978e6d";
var PUBLIC_KEY = "14ba62392acaeee875f06ebee23b5c60";
var url = 'http://gateway.marvel.com/v1/public/comics';
var ts = new Date().getTime();
var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();


$("#submit").on("click", function (event) {
  event.preventDefault();
  var userInput = $("#searchChar").val().trim();
  var textContent = $(this).siblings("input").val();
  var storeArr = [];
  storeArr.push(textContent);
  localStorage.setItem('charSearch', JSON.stringify(storeArr))
  //console.log(storeArr[0]);


  findCharacter(userInput);
});

function getMarvelResponse() { 
    var characterId ='1009718'; 
    // wolverine
    
      $.getJSON(url, {
              ts: ts,
              apikey: PUBLIC_KEY,
              hash: hash,
              characters: characterId
                })
          .done(function(data) {      
    
        console.log(data);
        })
            .fail(function(err){            
            console.log(err);    
        });
    };

    function getWikiResponse() {
        var wikiApi = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch=%Wolverine%";

        fetch(wikiApi)
        .then(function(response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
    }

function findCharacter(userInput){

    var charURL="http://gateway.marvel.com/v1/public/characters";
    console.log(userInput);

    $.getJSON(charURL, {
      name: userInput,
      ts: ts,
      apikey: PUBLIC_KEY,
      hash: hash
      
        })
  .done(function(data) { 
    var charNameDes = document.getElementById('characters');
    var charPath = data.data.results[0];

    if(charPath.description=""){
      charNameDes.innerHTML=
    "<div class=block><h2>"+data.data.results[0].name+
    "<h2><figure><img src="+data.data.results[0].thumbnail.path+"."+data.data.results[0].thumbnail.extension+
    "></figure><p>"+data.data.results[0].description+"</p>"
    "<div>";

    }else{
    charNameDes.innerHTML=
    "<div class=block><h2>"+data.data.results[0].name+
    "<h2><figure><img src="+data.data.results[0].thumbnail.path+"."+data.data.results[0].thumbnail.extension+
    "></figure><p>"+data.data.results[0].description+"</p>"
    "<div>";
    }


  
console.log(data);
console.log(data.data.results[0].thumbnail.path+"."+data.data.results[0].thumbnail.extension);
})
    .fail(function(err){            
    console.log(err);    
});
    };


  //getMarvelResponse();

 getWikiResponse();
