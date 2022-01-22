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
  localStorage.setItem('charSearch', JSON.stringify(storeArr));
  findCharacter(userInput);
  const origin = "https://en.wikipedia.org";
  const url = `${origin}/w/api.php?action=query&origin=*&format=json&list=search&srsearch=${userInput}&srlimit=5`
  fetch(url).then(function (data) {
    return data.json()
  
  }).then(displayData).catch(function (error) {
    console.log(error);

  })
});

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

    if(charPath.description===""){
      charNameDes.innerHTML=
    "<div class=block><h2>"+data.data.results[0].name+
    "<h2><figure><img src="+data.data.results[0].thumbnail.path+"."+data.data.results[0].thumbnail.extension+
    "></figure><p>"+data.data.results[0].id+"</p>"
    "<div>";

    }else{
      charNameDes.innerHTML=
    "<div class=block><h2>"+data.data.results[0].name+
    "<h2><figure><img src="+data.data.results[0].thumbnail.path+"."+data.data.results[0].thumbnail.extension+
    "></figure><p>"+data.data.results[0].description+"</p>"
    "<div>";
    }

console.log(data);
})
    .fail(function(err){            
    console.log(err);    
});
    };

function displayData(data) {
  let result = data.query.search;
  console.log(result);
  let output = '';
  result.forEach(function (item) {
  output += `<li class="search-item box">
        <h2 class="search-item__title">${item.title}</h2>
        <p class="search-item__text">${item.snippet}</p>
        <a href="http://en.wikipedia.org/?curid=${item.pageid}" class="search-item__link main-btn" target="_blank">read more ...</a>
        </li>`
      })
      document.querySelector('.wikiSpot').innerHTML = output;
     
     }