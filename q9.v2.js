(function ($) {
  $("#modalTriggers").on("click", function () {
    $("#modalText").text("You have a new notification (handled by jQuery v3).");
    $("#modal").show();
  });

  $("#closeModal").on("click", function () {
    $("#modal").hide();
  });

  $("#widgetsList .widget").on("mouseenter", function (e) {
    var tip = $(this).data("tooltip");
    $("#tooltip").text(tip).css({ top: e.pageY + 10, left: e.pageX + 10 }).fadeIn(150);
  }).on("mousemove", function (e) {
    $("#tooltip").css({ top: e.pageY + 10, left: e.pageX + 10 });
  }).on("mouseleave", function () {
    $("#tooltip").fadeOut(100);
  });

})(window.jQuery3);