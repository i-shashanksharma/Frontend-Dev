$(function () {
  $("#faq").on("click", ".question", function () {
    $(this).next(".answer").slideToggle(200);
  });

  $("#faq").on("mouseenter", ".question", function () {
    $(this).css("color", "#0077cc");
  }).on("mouseleave", ".question", function () {
    $(this).css("color", "");
  });

  $("#faq").on("dblclick", ".question", function () {
    $("#faq .answer").slideUp(200);
  });

  $("#faq").on("focus", ".ans-input", function () {
    $(this).closest(".qa").find(".question").addClass("highlight");
  });

  $("#faq").on("blur", ".ans-input", function () {
    $(this).closest(".qa").find(".question").removeClass("highlight");
  });
});