$(function () {
  $("#topicList").on("click", ".toggleSub", function () {
    var topicDiv = $(this).closest(".topic");
    topicDiv.toggleClass("subscribed");
    var isSub = topicDiv.hasClass("subscribed");
    $(this).text(isSub ? "Unsubscribe" : "Subscribe");
    $("#messages").text(isSub ? "Subscribed to " + topicDiv.data("topic") : "Unsubscribed from " + topicDiv.data("topic")).fadeIn().delay(1000).fadeOut();
  });
  $("#addTopicBtn").on("click", function () {
    var name = $("#newTopic").val().trim();
    if (!name) return;
    var newElem = $('<div class="topic" data-topic="' + name + '">' + name + ' <button class="toggleSub">Subscribe</button></div>');
    $("#topicList").append(newElem);
    $("#newTopic").val("");
  });

  $("#topicList").on("dblclick", ".topic", function () {
    $(this).off();
    $(this).css("opacity", 0.6);
    $("#messages").text("Removed interactions for " + $(this).data("topic")).fadeIn().delay(1000).fadeOut();
  });
});