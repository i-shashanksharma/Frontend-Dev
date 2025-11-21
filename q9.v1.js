(function ($) {
  var widgets = $("#carouselWidgets");

  setInterval(function () {
    widgets.toggleClass("active");
  }, 2000);

  $("#widgetsList .widget").on("click", function () {
    $("#widgetsList .widget").removeClass("active");
    $(this).addClass("active");
  });
})(window.jQuery1);