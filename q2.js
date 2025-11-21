$(function () {
  $("#products").on("click", ".product", function (e) {
    if ($(e.target).is(".fav")) return;
    $(".product").removeClass("highlight");
    $(this).addClass("highlight");
  });

  $("#products").on("mouseenter", ".product", function () {
    $(this).find(".more").show();
  }).on("mouseleave", ".product", function () {
    $(this).find(".more").hide();
  });

  $("#products").on("click", ".fav", function () {
    $(this).toggleClass("selected");
    $(this).text($(this).hasClass("selected") ? "♥" : "♡");
  });

  $("#products .product[data-discount]").each(function () {
    var disc = $(this).data("discount");
    $(this).find(".price").addClass("discount").append(" ( " + disc + "% off )");
  });

  $("#products").on("click", ".product", function (e) {
    if ($(e.target).is(".fav")) return;
    var stock = $(this).data("stock");
    if (stock === "out") {
      alert("Sorry, this product is out of stock.");
      $(this).addClass("out");
    }
  });

  $("#products .more").hide();
});