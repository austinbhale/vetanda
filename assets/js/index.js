window.onscroll = function () {
    if ($(window).scrollTop() > $("#index-banner-home").offset().top) {
      $(".content").css("visibility", "hidden");
    } else {
      $(".content").css("visibility", "visible");
    }
  
    var topOffset = $("#five").height() / 2;
    if ($("#five").length && $(window).scrollTop() > $("#five").offset().top - topOffset) {
      // $("#nav").removeClass("black");
      // $("#nav").addClass("grey darken-3");
      $("#ref").html("contact").attr("href", "contact");
    } else if ($("#four").length && $(window).scrollTop() > $("#four").offset().top - topOffset) {
      $("#ref").html("events").attr("href", "events");
    } else if ($("#three").length && $(window).scrollTop() > $("#three").offset().top - topOffset) {
      $("#ref").html("media").attr("href", "media");
    } else if ($("#two").length && $(window).scrollTop() > $("#two").offset().top - topOffset) {
        $("#ref").html("about").attr("href", "about");
    } else {
      $("#ref").html("vetanda").attr("href", "#");
      // $("#nav").removeClass("grey darken-3");
      // $("#nav").addClass("black");
    }
  };