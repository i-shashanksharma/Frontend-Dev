$(function () {
  function resetHighlights() {
    $("#courseList .course").removeClass("match").show().each(function () {
      $(this).html($(this).text());
    });
  }

  $("#searchInput").on("keyup", function () {
    var q = $(this).val().trim().toLowerCase();
    if (!q) {
      resetHighlights();
      $("#matchCount").text(0);
      return;
    }
    var matches = 0;
    $("#courseList .course").each(function () {
      var txt = $(this).text();
      if (txt.toLowerCase().indexOf(q) !== -1) {
        matches++;
        var regex = new RegExp("(" + q.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&") + ")", "ig");
        var newHtml = txt.replace(regex, '<span class="match">$1</span>');
        $(this).html(newHtml);
        $(this).show();
      } else {
        $(this).hide();
      }
    });
    $("#matchCount").text(matches);
  });

  $("#clearSearch").on("click", function () {
    $("#searchInput").val("");
    resetHighlights();
    $("#matchCount").text(0);
  });
});