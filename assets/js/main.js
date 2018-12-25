window.onscroll = function() {
  var topOffset = $("#five").height() / 2;

  if ($(window).scrollTop() > $("#cont").offset().top) {
    $(".content").css("display", "none");
  } else {
    $(".content").css("display", "block");
  }

  if ($(window).scrollTop() > $("#five").offset().top - topOffset) {
    // $("#nav").removeClass("black");
    // $("#nav").addClass("grey darken-3");
    $("#ref").html("contact").attr("href", "contact.htm");
  } else if ($(window).scrollTop() > $("#four").offset().top - topOffset) {
    $("#ref").html("events").attr("href", "performances.htm");
  } else if ($(window).scrollTop() > $("#three").offset().top - topOffset) {
    $("#ref").html("media").attr("href", "media.htm");
  } else if ($(window).scrollTop() > $("#two").offset().top - topOffset) {
    $("#ref").html("about").attr("href", "about.htm");
  } else {
    $("#ref").html("v");
    // $("#nav").removeClass("grey darken-3");
    // $("#nav").addClass("black");
  }
};

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
