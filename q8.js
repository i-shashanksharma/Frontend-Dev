$(function () {
  $("#addPost").on("click", function () {
    var count = $("#posts .post").length + 1;
    $("#posts").append('<div class="post">Post ' + count + ': New Entry</div>');
  });

  $("#prependFeatured").on("click", function () {
    $("#posts").prepend('<div class="post featured">Featured: Important Update</div>');
  });

  $("#removeLast").on("click", function () {
    $("#posts .post").last().remove();
  });

  $("#addTags").on("click", function () {
    $("#posts .post").each(function (i) {
      if (i % 2 === 0) {
        $(this).before('<div class="tag">#tag' + (i + 1) + '</div>');
      } else {
        $(this).after('<div class="tag">#tag' + (i + 1) + '</div>');
      }
    });
  });

  $("#posts").on("click", ".post", function () {
    var text = $(this).text().toLowerCase();
    if (text.indexOf("async") !== -1 || text.indexOf("featured") !== -1) {
      $(this).css("box-shadow", "0 0 8px rgba(255,153,0,0.6)");
      setTimeout(() => $(this).css("box-shadow", ""), 1200);
    }
  });
});