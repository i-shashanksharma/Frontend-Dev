$(function () {
  $("#team").on("click", ".manager", function () {
    var $dept = $(this).closest(".department");
    $dept.find(".employee").addClass("highlight");
    setTimeout(function () {
      $dept.find(".employee").removeClass("highlight");
    }, 1200);
  });

  $("#team").on("mouseenter", ".employee", function () {
    $(this).find(".contact").show();
  }).on("mouseleave", ".employee", function () {
    $(this).find(".contact").hide();
  });

  $("#team").on("click", ".department", function (e) {
    if ($(e.target).is(".department")) {
      $(this).children().css("background", "#f0f8ff");
      setTimeout(() => $(this).children().css("background", ""), 1200);
    }
  });

  $("#randomEmployeeBtn").on("click", function () {
    var employees = $("#team .employee");
    var randIdx = Math.floor(Math.random() * employees.length);
    var chosen = employees.eq(randIdx);
    chosen.siblings(".employee").addClass("highlight");
    setTimeout(function () {
      chosen.siblings(".employee").removeClass("highlight");
    }, 1000);
  });

  $("#toggleTeamsBtn").on("click", function () {
    $("#team .department").each(function () {
      var $dept = $(this);
      $dept.find(".employee").toggle();
    });
  });
});