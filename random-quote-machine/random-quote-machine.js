$(document).ready(function() {
  let url = "https://api.forismatic.com/api/1.0/?method=getQuote&key=XXXXX&format=jsonp&jsonp=?&lang=en";
  let getQuote = function(json) {
    // let textQ = json.textQuote;
    $("#quote").html(json.quoteText);

    // let authorQ = json.authorQuote;
    if (json.quoteAuthor === "") {
      json.quoteAuthor = "Unknown"
    };
    $("#author").html(json.quoteAuthor);
  };

  let getRandomColor = function() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random()*16)];
    };
    return color;
  };
  
  let clickedFunc = function(e) {
    e.preventDefault();
    const pickedColor = getRandomColor();
    // changes happen slowly
    setTimeout(function() { 
      //getJSON method: quote and author change
      $.getJSON(url, getQuote, "jsonp");
      //color changes randomly when clicked
      $(".backgroundColor").css("background-color", pickedColor);
      $(".changedColor").css("color", pickedColor);      
    },1000);
  };

  $("#newQuote").on("click", clickedFunc);  

  ///SOCIAL SHARING
  $("#twitter-button").on("click", function() {
    window.open("https://twitter.com/intent/tweet?text=" + $("#quote").text() + " By " + $("#author").text() +".");
  })

  
  
});






