$(document).ready(function() {
  let url = "https://api.forismatic.com/api/1.0/?method=getQuote&key=XXXXX&format=jsonp&jsonp=?&lang=en";
  let getQuote = function(json) {

    $("#quote").html(json.quoteText);
    $("#author").html(json.quoteAuthor);
  }

  let getRandomColor = function() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random()*16)];
    }
    return color;
  }
  
  let clickedFunc = function(e) {
    e.preventDefault();
    const pickedColor = getRandomColor();
    //getJSON method: quote and author change
    $.getJSON(url, getQuote, "jsonp");
    //color changes randomly when clicked
    $(".backgroundColor").css("background-color", pickedColor);
    $(".changedColor").css("color", pickedColor);    
  };
  $("#newQuote").on("click", clickedFunc);  
});



