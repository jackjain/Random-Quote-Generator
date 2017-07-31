$(document).ready(function() {
  getQuote();
  var colors = getRandomColor();
  $("body").css("background-color", colors);
  $("#get-next").on("click", function(e) {
    e.preventDefault();
    getQuote();
    var color = getRandomColor();
    $("body").css("background-color", color);
  });
});

function getRandomColor() {
  var letters = "789ABCD";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 6)];
  }
  return color;
}

function getQuote() {
  $.ajax({
    url: "https://api.forismatic.com/api/1.0/?",
    dataType: "jsonp",
    data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
    success: function(response) {
      $("#rnd-quote").html(
        "<p id='random_quote' class='lead text-center'>" +
          response.quoteText +
          "<br/>&dash; " +
          response.quoteAuthor +
          " &dash;</p>"
      );

      $("#twitter").attr(
        "href",
        "https://twitter.com/home/?status=" +
          response.quoteText +
          " (" +
          response.quoteAuthor +
          ")"
      );
    }
  });
}
