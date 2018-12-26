var elementsValid = document.getElementsByClassName("valid");
var elementsInvalid = document.getElementsByClassName("invalid");
var valids = false;
var invalids = false;
var received = false;
$("#gform").on("submit", function(e) {
  elementsValid.length > 2 ? (valids = true) : (valids = false);
  elementsInvalid.length == 0 ? (invalids = true) : (invalids = false);

  if (valids && invalids) {
    $("#gform *").fadeOut(2000, function() {
      if (!received) {
        $("#gform").prepend("Thanks! We'll be in touch with you soon.");
        received = true;
      }
    });
  } else {
    alert("Please fill in all fields.");
  }
});

var isMobile = false;

$(document).ready(function() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    isMobile = true;
  }

  if (isMobile) {
    $("#parallax-container").css("display", "none");
    $("#parallax-mobile-title").css("display", "block");
    $("#parallax-mobile").css("display", "block");
    setTimeout(function() {
      $("#parallax-img").fadeIn(4000);
    }, 500);
  } else {
    setTimeout(function() {
      $("#parallax-container").animate({ backgroundPositionY: "-=10%" }, 250);
      // $('parallax-container').addClass('trans');
    }, 1000);
  }
});
