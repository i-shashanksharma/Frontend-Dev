
$(function () {
  $("#hideBtn").on("click", function () {
    $("#banners .banner").filter(":visible").hide();
  });

  $("#showBtn").on("click", function () {
    $("#banners .banner").show();
  });

  $("#slideUpBtn").on("click", function () {
    $("#banners .banner").slideUp(400);
  });

  $("#slideDownBtn").on("click", function () {
    $("#banners .banner").slideDown(400);
  });

  $("#fadeInBtn").on("click", function () {
    $("#banners .banner").fadeIn(600);
  });

  $("#fadeOutBtn").on("click", function () {
    $("#banners .banner").fadeOut(600);
  });
  var banners = $("#banners .banner");
  var idx = 0;
  banners.hide();
  $(banners[idx]).show();
  setInterval(function () {
    $(banners[idx]).fadeOut(700, function () {
      idx = (idx + 1) % banners.length;
      $(banners[idx]).fadeIn(700);
    });
  }, 5000);
});