<<<<<<< HEAD
wikiContainer = document.getElementById('wikiInfo');
var wikiResults = [];
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

=======
>>>>>>> Alex-Branch
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
    
    var xhr = new XMLHttpRequest();
    
    var wikiApi = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch=%Wolverine%";

<<<<<<< HEAD
    //provide 3 arguments: get/post, url, async true/false
    xhr.open('GET', wikiApi, true);
    //upon loading
    xhr.onload = function() {
        var data = JSON.parse(this.response);
        console.log(data);
        console.log(data.query.pages);
        //loop thru the titles of each page
        for (var i in data.query.pages) {
            console.log(data.query.pages[i].title);
            console.log(data.query.pages[i].pageid);
            var wikiDetails = document.createElement('ul');
            var wikiTitle = document.createElement('li');
            var wikiPage = document.createElement('button');
            wikiPage.className = "button is-danger is-light mt-3";
            wikiPage.textContent = data.query.pages[i].title;

            wikiContainer.appendChild(wikiDetails);
            wikiDetails.appendChild(wikiTitle);
            wikiTitle.appendChild(wikiPage);
            saveWiki(data.query.pages[i].title);
        }
    }
=======
    function getWikiResponse() {
        var wikiApi = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch=%Wolverine%";
>>>>>>> Alex-Branch

    var saveWiki = function(wiki) {
        if (wikiResults.indexOf(wiki) !== -1){
            return;
        }
        wikiResults.push(wiki);
        localStorage.setItem("wiki", JSON.stringify(wikiResults));
    }
    //     fetch(wikiApi)
    //     .then(function(response) {
    //         return response.json();
    //     })
    //     .then(function (data) {
    //         console.log(data);
    //     })
    // }

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

<<<<<<< HEAD
  //getWikiResponse();
  xhr.send();
=======
 getWikiResponse();
>>>>>>> Alex-Branch

