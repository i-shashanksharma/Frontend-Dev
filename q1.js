$(document).ready(function () {
  var hour = new Date().getHours();
  var greeting = hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";
  $("#greeting").text(greeting + ", welcome!");
  $("#time-note").text("Greeting generated at " + new Date().toLocaleTimeString());

  $("#greeting").on("click", function () {
    alert($(this).text());
  });

  $("#changeGreetingBtn").on("click", function () {
    var quotes = $("#quotes li");
    var random = Math.floor(Math.random() * quotes.length);
    var text = $(quotes[random]).text();
    $("#greeting").text(text);
  });

  $("#toggleWelcomeBtn").on("click", function () {
    $("#welcomeMessage").toggle();
  });
  $("#greeting").attr("tabindex", 0);
});