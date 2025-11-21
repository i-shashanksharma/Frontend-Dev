$(function () {
  var existingEmails = ["john@mail.com", "rahul@mail.com", "sumi@co.com"];

  function isValidEmail(email) {
    var re = /^[\w.-]+@[\w.-]+\.\w+$/;
    return re.test(email);
  }

  $("#regForm").on("submit", function (e) {
    e.preventDefault();
    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var pass = $("#password").val();

    var valid = true;
    $(".errorMsg").text("");
    $("input").removeClass("invalid");

    if (!name) {
      $("#nameErr").text("Name cannot be empty");
      $("#name").addClass("invalid");
      valid = false;
    }

    if (!isValidEmail(email)) {
      $("#emailErr").text("Invalid email format");
      $("#email").addClass("invalid");
      valid = false;
    } else if (existingEmails.indexOf(email.toLowerCase()) !== -1) {
      $("#emailErr").text("Email already in use");
      $("#email").addClass("invalid");
      valid = false;
    }

    if (pass.length < 8) {
      $("#passErr").text("Password must be at least 8 characters");
      $("#password").addClass("invalid");
      valid = false;
    }

    if (valid) {
      existingEmails.push(email.toLowerCase());
      $("#result").html('<div class="success">Registration successful for ' + $("<div>").text(name).html() + '</div>');
      $("#regForm")[0].reset();
    } else {
      $("#result").html('<div class="errorMsg">Please fix the highlighted fields.</div>');
    }
  });

  $("#name, #email, #password").on("blur", function () {
    if ($(this).val().trim() === "") {
      $(this).addClass("invalid");
    } else {
      $(this).removeClass("invalid");
    }
  });

  $("#email").on("keyup", function () {
    var email = $(this).val().trim().toLowerCase();
    if (isValidEmail(email) && existingEmails.indexOf(email) === -1) {
      $("#emailErr").text("Email available").css("color", "green");
      $(this).removeClass("invalid");
    } else if (existingEmails.indexOf(email) !== -1) {
      $("#emailErr").text("Email already in use").css("color", "red");
      $(this).addClass("invalid");
    } else {
      $("#emailErr").text("");
      $(this).removeClass("invalid");
    }
  });
});
