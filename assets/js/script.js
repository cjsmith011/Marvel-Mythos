$(function() {
    var availableTags = [
      { value:"https://marvel.fandom.com/wiki/Eric_Brooks_(Earth-616)",
       label:"Blade"},
      {value:"",
        label:"Black Panther"},
      {value:"",
       label: "Ant-Man"},
      {value:"",
       label:"The Incredible Hulk"},
      {value:"",
       label: "Captain America"},
      {value:"",
       label: "Nick Fury"},
      {value:"",
       label: "Daredevil"},
      {value:"",
       label: "Gambit"},
      {value:"",
        label:"Spider-Man"},
      {value:"",
       label: "Thor"},
      {value:"",
       label: "Iron Man"},
      {value:"",
       label: "The Thing"},
      {value:"",
       label: "Wolverine"},
      {value:"",
      label:"Storm"},
      {value:"",
        label:"Captain Marvel"},
      {value:"",
        label:"Black Widow"},
      {value:"",
        label:"War Machine"},
      {value:"",
       label: "Groot"},
      {value:"",
       label: "Deadpool"},
      {value:"",
        label:"Cyclops"},
      {value:"",
        label:"Silver SUrfer"},
      {value:"",
       label: "Human Torch"},
      {value:"",
        label:"Nightcrawler"},
      {value:"",
       label: "Punisher"},
      {value:"",
        label:"Invisible Woman"},
      {value:"",
        label:"Rogue"},
      {value: "",
        label:"Professor X"}
    ];
    $( "#tags" ).autocomplete({
      source: availableTags,
      select: function( event, ui ) { 
        window.location.href = ui.item.value;
      }
    });
  } )


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
    charNameDes.innerHTML=
    "<div class=block><h2>"+data.data.results[0].name+
    "<h2><figure><img src="+data.data.results[0].thumbnail.path+"."+data.data.results[0].thumbnail.extension+
    "></figure><p>"+data.data.results[0].description+"</p>"
    "<div>";


  
console.log(data);
console.log(data.data.results[0].thumbnail.path+"."+data.data.results[0].thumbnail.extension);
})
    .fail(function(err){            
    console.log(err);    
});
    };


  //getMarvelResponse();

 getWikiResponse();

